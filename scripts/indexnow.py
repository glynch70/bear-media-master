"""Notify IndexNow after publication; Python standard library only."""

import argparse
import hashlib
from html.parser import HTMLParser
import io
import json
import os
from pathlib import Path
import re
import time
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
import xml.etree.ElementTree as ET
import zipfile

ROOT = Path(__file__).resolve().parents[1]
CONFIG = json.loads((ROOT / 'scripts/indexnow-config.json').read_text())
ORIGIN = CONFIG['origin']
STATE_PATH = ROOT / 'indexnow-state.json'


class SafeRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        redirected = super().redirect_request(req, fp, code, msg, headers, newurl)
        if redirected and urlsplit(req.full_url).netloc != urlsplit(newurl).netloc:
            redirected.remove_header('Authorization')
        return redirected


def request(url, *, data=None, headers=None):
    """Retry transient failures; never treat a rejected submission as success."""
    for attempt in range(3):
        try:
            with build_opener(SafeRedirect()).open(Request(url, data=data, headers={
                'User-Agent': 'BearMedia-IndexNow/1.0', **(headers or {}),
            }), timeout=30) as response:
                return response.status, response.url, dict(response.headers), response.read()
        except (HTTPError, URLError, TimeoutError) as error:
            retryable = not isinstance(error, HTTPError) or error.code in (408, 429) or error.code >= 500
            if not retryable or attempt == 2:
                raise
            time.sleep(2 ** (attempt + 1))


def valid_url(url):
    parsed = urlsplit(url)
    return (parsed.scheme == 'https' and parsed.netloc == urlsplit(ORIGIN).netloc
            and not parsed.query and not parsed.fragment and not parsed.username)


class Page(HTMLParser):
    """Hash public content and metadata, ignoring Next.js hydration/build scripts."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.main = 0
        self.saw_main = False
        self.skip = 0
        self.title = False
        self.noindex = False
        self.canonical = None
        self.content = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ('script', 'style', 'noscript'):
            self.skip += 1
        if self.skip:
            return
        if tag == 'main':
            self.main += 1
            self.saw_main = True
        if tag == 'title':
            self.title = True
        if tag == 'meta':
            name = (attrs.get('name') or attrs.get('property') or '').lower()
            value = attrs.get('content', '')
            if name in ('robots', 'googlebot', 'bingbot') and re.search(r'\b(noindex|none)\b', value, re.I):
                self.noindex = True
            if name in ('description', 'og:title', 'og:description', 'og:image'):
                self.content.append([name, value])
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if self.main:
            self.content.append([tag, sorted((key, value) for key, value in attrs.items()
                                            if key in ('href', 'src', 'alt', 'title', 'aria-label'))])

    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'noscript'):
            self.skip = max(0, self.skip - 1)
        if tag == 'main':
            self.main = max(0, self.main - 1)
        if tag == 'title':
            self.title = False

    def handle_data(self, data):
        if not self.skip and (self.main or self.title):
            text = ' '.join(data.split())
            if text:
                self.content.append(text)


def fingerprint(url, html, final_url=None, headers=None):
    page = Page()
    page.feed(html)
    robots = ','.join(value for key, value in (headers or {}).items() if key.lower() == 'x-robots-tag')
    if (page.noindex or re.search(r'\b(noindex|none)\b', robots, re.I)
            or (final_url and final_url.rstrip('/') != url.rstrip('/'))
            or (page.canonical and page.canonical.rstrip('/') != url.rstrip('/'))):
        return None
    if not page.saw_main:
        raise ValueError(f'No main content found at {url}; refusing to record an error/login page.')
    return hashlib.sha256(json.dumps(page.content, ensure_ascii=False).encode()).hexdigest()


def snapshot():
    _, _, _, xml = request(ORIGIN + '/sitemap.xml')
    urls = sorted(set(element.text.strip() for element in ET.fromstring(xml).iter()
                      if element.tag.endswith('}loc') and element.text))
    if not urls or len(urls) > 10000 or any(not valid_url(url) for url in urls):
        raise ValueError('Sitemap contains invalid URLs or exceeds the submission limit.')
    pages = {}
    for url in urls:
        status, final_url, headers, body = request(url)
        if status != 200 or 'text/html' not in headers.get('Content-Type', headers.get('content-type', '')):
            raise ValueError(f'Unexpected response for {url}: {status}')
        digest = fingerprint(url, body.decode('utf-8'), final_url, headers)
        if digest:
            pages[url] = digest
    return {'version': 1, 'origin': ORIGIN, 'pages': pages}


def previous_state():
    """Restore the last completed crawl, with a committed baseline as fallback."""
    token, repo = os.getenv('GH_TOKEN'), os.getenv('GITHUB_REPOSITORY')
    if token and repo:
        headers = {'Authorization': f'Bearer {token}', 'Accept': 'application/vnd.github+json'}
        _, _, _, body = request(f'https://api.github.com/repos/{repo}/actions/artifacts?name=indexnow-state&per_page=100', headers=headers)
        # API order is not guaranteed to match completion time (IDs can differ
        # across storage regions). Always use the newest completed snapshot.
        artifacts = sorted(json.loads(body)['artifacts'],
                           key=lambda item: (item['created_at'], item['id']), reverse=True)
        for artifact in artifacts:
            if artifact['expired']:
                continue
            # GitHub serves artifacts via a short-lived redirect to its storage.
            _, _, _, archive = request(artifact['archive_download_url'], headers=headers)
            with zipfile.ZipFile(io.BytesIO(archive)) as files:
                return json.loads(files.read('indexnow-state.json'))
    return json.loads((ROOT / '.github/indexnow-baseline.json').read_text())


def changed_urls(previous, current):
    if previous.get('version') != 1 or previous.get('origin') != ORIGIN:
        raise ValueError('Invalid IndexNow state.')
    return sorted(url for url, digest in current['pages'].items()
                  if previous['pages'].get(url) != digest)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--initialize', action='store_true', help='Capture a baseline without submitting.')
    parser.add_argument('--dry-run', action='store_true')
    args = parser.parse_args()
    if not args.initialize:
        status, final_url, _, body = request(f"{ORIGIN}/{CONFIG['key']}.txt")
        if status != 200 or body.decode().strip() != CONFIG['key'] or not valid_url(final_url):
            raise ValueError('The live IndexNow ownership file could not be verified.')
    current = snapshot()
    if args.initialize:
        (ROOT / '.github/indexnow-baseline.json').write_text(json.dumps(current, indent=2) + '\n')
        print(f"Baseline recorded for {len(current['pages'])} indexable pages; no submission made.")
        return
    urls = changed_urls(previous_state(), current)
    explicit = re.split(r'[\s,]+', os.getenv('INDEXNOW_URLS', '').strip())
    for url in filter(None, explicit):
        if url not in current['pages']:
            raise ValueError(f'Requested URL is not a live, indexable sitemap page: {url}')
        urls.append(url)
    urls = sorted(set(urls))
    print(f"Checked {len(current['pages'])} indexable pages; {len(urls)} URLs to submit.")
    for url in urls:
        print(url)
    if args.dry_run:
        return
    if urls:
        payload = {'host': urlsplit(ORIGIN).netloc, 'key': CONFIG['key'],
                   'keyLocation': f"{ORIGIN}/{CONFIG['key']}.txt", 'urlList': urls}
        status, _, _, _ = request(CONFIG['endpoint'], data=json.dumps(payload).encode(),
                                  headers={'Content-Type': 'application/json; charset=utf-8'})
        if status not in (200, 202):
            raise ValueError(f'IndexNow did not accept the submission: {status}')
        print(f'IndexNow accepted {len(urls)} URLs (HTTP {status}).')
    # Failed fetches/submissions never advance the baseline, so a rerun retries them.
    STATE_PATH.write_text(json.dumps(current, indent=2) + '\n')
    if os.getenv('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as summary:
            summary.write(f"Checked {len(current['pages'])} indexable pages. Submitted {len(urls)} URLs.\n\n")
            summary.writelines(f'- {url}\n' for url in urls)


if __name__ == '__main__':
    main()
