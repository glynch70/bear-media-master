import json
import io
from pathlib import Path
import tempfile
import unittest
import zipfile
from unittest.mock import patch
from urllib.request import Request

import indexnow


URL = indexnow.ORIGIN + '/about'
HTML = '<html><head><title>About</title><meta name="description" content="Meet Garry"></head><main><p>Original content</p></main></html>'


class IndexNowTests(unittest.TestCase):
    def setUp(self):
        # Keep mocked acceptance messages out of the real submission log.
        output = patch('builtins.print')
        output.start()
        self.addCleanup(output.stop)

    def test_tracks_content_metadata_images_and_links(self):
        original = indexnow.fingerprint(URL, HTML)
        for changed in [HTML.replace('Original content', 'Updated content'),
                        HTML.replace('Meet Garry', 'Meet Bear Media'),
                        HTML.replace('</main>', '<a href="/journal/workspace-setup">Workspace</a></main>'),
                        HTML.replace('</main>', '<img src="/new.jpg" alt="New image"></main>')]:
            self.assertNotEqual(original, indexnow.fingerprint(URL, changed))

    def test_ignores_build_scripts_comments_and_whitespace(self):
        changed = HTML.replace('Original content', 'Original   content').replace('</main>', '<!-- build 2 --><script>self.__next_f.push("random build ID")</script></main>')
        self.assertEqual(indexnow.fingerprint(URL, HTML), indexnow.fingerprint(URL, changed))

    def test_skips_noindex_redirects_and_other_canonicals(self):
        for tag in ['<meta name="robots" content="noindex, follow">',
                    '<meta name="robots" content="none">',
                    '<link rel="canonical" href="https://bear-media.com/contact">']:
            self.assertIsNone(indexnow.fingerprint(URL, HTML.replace('</head>', tag + '</head>')))
        self.assertIsNone(indexnow.fingerprint(URL, HTML, final_url=indexnow.ORIGIN + '/contact'))
        self.assertIsNone(indexnow.fingerprint(URL, HTML, headers={'x-robots-tag': 'noindex'}))

    def test_rejects_login_or_error_page(self):
        with self.assertRaises(ValueError):
            indexnow.fingerprint(URL, '<html><h1>Log in</h1></html>')

    def test_only_submits_new_or_changed_indexable_urls(self):
        before = {'version': 1, 'origin': indexnow.ORIGIN,
                  'pages': {URL: 'old', indexnow.ORIGIN + '/removed': 'old'}}
        after = {'pages': {URL: 'new', indexnow.ORIGIN + '/new': 'new'}}
        self.assertEqual(indexnow.changed_urls(before, after), [URL, indexnow.ORIGIN + '/new'])
        self.assertEqual(indexnow.changed_urls(before, before), [])

    def test_rejects_external_or_noncanonical_urls(self):
        for url in ['https://evil.example/about', indexnow.ORIGIN + '/contact?email=x',
                    indexnow.ORIGIN + '/about#test', 'http://bear-media.com/about']:
            self.assertFalse(indexnow.valid_url(url))
        self.assertTrue(indexnow.valid_url(URL))

    def test_auth_header_not_forwarded_to_artifact_storage(self):
        req = Request('https://api.github.com/artifact', headers={'Authorization': 'Bearer test'})
        redirected = indexnow.SafeRedirect().redirect_request(req, None, 302, 'Found', {}, 'https://storage.example/file.zip')
        self.assertIsNone(redirected.get_header('Authorization'))

    def test_restores_most_recent_state_regardless_of_api_order(self):
        artifacts = {'artifacts': [
            {'id': 300, 'created_at': '2026-10-31T12:00:00Z', 'expired': False, 'archive_download_url': 'https://api.github.com/old'},
            {'id': 200, 'created_at': '2026-10-31T12:05:00Z', 'expired': False, 'archive_download_url': 'https://api.github.com/new'},
        ]}
        state = {'version': 1, 'origin': indexnow.ORIGIN, 'pages': {URL: 'latest'}}
        archive = io.BytesIO()
        with zipfile.ZipFile(archive, 'w') as files:
            files.writestr('indexnow-state.json', json.dumps(state))
        responses = [(200, '', {}, json.dumps(artifacts).encode()),
                     (200, '', {}, archive.getvalue())]
        with patch.dict('os.environ', {'GH_TOKEN': 'test', 'GITHUB_REPOSITORY': 'test/repo'}), patch.object(indexnow, 'request', side_effect=responses) as fetch:
            self.assertEqual(indexnow.previous_state(), state)
            self.assertEqual(fetch.call_args.args[0], 'https://api.github.com/new')

    def test_failed_submission_does_not_advance_state(self):
        state = {'version': 1, 'origin': indexnow.ORIGIN, 'pages': {URL: 'new'}}
        previous = {**state, 'pages': {URL: 'old'}}
        def fake_request(url, **kwargs):
            if kwargs.get('data'):
                raise RuntimeError('IndexNow unavailable')
            return 200, url, {}, indexnow.CONFIG['key'].encode()
        with tempfile.TemporaryDirectory() as directory:
            destination = Path(directory) / 'state.json'
            with patch.object(indexnow, 'STATE_PATH', destination), patch.object(indexnow, 'snapshot', return_value=state), patch.object(indexnow, 'previous_state', return_value=previous), patch.object(indexnow, 'request', side_effect=fake_request), patch('sys.argv', ['indexnow.py']):
                with self.assertRaises(RuntimeError):
                    indexnow.main()
                self.assertFalse(destination.exists())

    def test_unchanged_crawl_saves_state_without_submission(self):
        state = {'version': 1, 'origin': indexnow.ORIGIN, 'pages': {URL: 'same'}}
        with tempfile.TemporaryDirectory() as directory:
            destination = Path(directory) / 'state.json'
            with patch.object(indexnow, 'STATE_PATH', destination), patch.object(indexnow, 'snapshot', return_value=state), patch.object(indexnow, 'previous_state', return_value=state), patch.object(indexnow, 'request', return_value=(200, indexnow.ORIGIN + '/key.txt', {}, indexnow.CONFIG['key'].encode())) as fetch, patch.dict('os.environ', {'INDEXNOW_URLS': ''}), patch('sys.argv', ['indexnow.py']):
                indexnow.main()
                self.assertEqual(fetch.call_count, 1)
                self.assertEqual(json.loads(destination.read_text()), state)

    def test_accepted_response_records_success(self):
        state = {'version': 1, 'origin': indexnow.ORIGIN, 'pages': {URL: 'new'}}
        for status in (200, 202):
            with self.subTest(status=status), tempfile.TemporaryDirectory() as directory:
                destination = Path(directory) / 'state.json'
                responses = [(200, indexnow.ORIGIN + '/key.txt', {}, indexnow.CONFIG['key'].encode()),
                             (status, indexnow.CONFIG['endpoint'], {}, b'')]
                with patch.object(indexnow, 'STATE_PATH', destination), patch.object(indexnow, 'snapshot', return_value=state), patch.object(indexnow, 'previous_state', return_value={**state, 'pages': {}}), patch.object(indexnow, 'request', side_effect=responses) as fetch, patch.dict('os.environ', {'INDEXNOW_URLS': ''}), patch('sys.argv', ['indexnow.py']):
                    indexnow.main()
                    payload = json.loads(fetch.call_args.kwargs['data'])
                    self.assertEqual(payload['urlList'], [URL])
                    self.assertEqual(payload['host'], 'bear-media.com')
                    self.assertTrue(destination.exists())

    def test_manual_submission_cannot_bypass_indexability_checks(self):
        state = {'version': 1, 'origin': indexnow.ORIGIN, 'pages': {URL: 'same'}}
        with patch.object(indexnow, 'snapshot', return_value=state), patch.object(indexnow, 'previous_state', return_value=state), patch.object(indexnow, 'request', return_value=(200, indexnow.ORIGIN + '/key.txt', {}, indexnow.CONFIG['key'].encode())) as fetch, patch.dict('os.environ', {'INDEXNOW_URLS': 'https://evil.example/test'}), patch('sys.argv', ['indexnow.py']):
            with self.assertRaises(ValueError):
                indexnow.main()
            self.assertEqual(fetch.call_count, 1)


if __name__ == '__main__':
    unittest.main()
