#!/usr/bin/env python3
"""Read-only, dependency-free search regression audit (Python 3 + curl).

Examples:
  python audit-search.py --origin http://127.0.0.1:3000 --output /tmp/bear-search-local
  python audit-search.py --output /tmp/bear-search-live --check-redirects
  python audit-search.py --from-cache audit-live/baseline.json --output /tmp/bear-search-baseline

Requests use --origin, but canonicals and structured-data identifiers are checked
against --public-origin. --from-cache reanalyses saved responses without network.
Exit status: 0 all required checks pass; 1 findings; 2 input/runtime error.
"""
import argparse
import collections
import concurrent.futures
import datetime
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import sys
import urllib.parse
import urllib.robotparser
import xml.etree.ElementTree as ET

PUBLIC_DEFAULT = 'https://bear-media.com'
SERVICE_PATHS = [
    '/services', '/property', '/training', '/social-media-pricing',
    '/business-photography-west-lothian', '/content-creation-west-lothian',
    '/drone-photography-west-lothian', '/property-photography-west-lothian',
    '/social-media-west-lothian', '/video-production-west-lothian',
    '/website-design-west-lothian', '/content-creation-edinburgh',
    '/social-media-edinburgh', '/website-design-edinburgh',
    '/content-creation-fife', '/social-media-fife', '/website-design-fife',
]
BUSINESS_TYPES = {'Organization', 'LocalBusiness', 'ProfessionalService'}
ARTICLE_TYPES = {'Article', 'BlogPosting', 'NewsArticle', 'TechArticle'}
NOINDEX_PATHS = {'/insights/video-content-that-generates-enquiries'}


def norm(url):
    return url.rstrip('/')


def types(node):
    value = node.get('@type', [])
    return set(value if isinstance(value, list) else [value])


def reference_ids(value):
    if isinstance(value, list):
        return [v for item in value for v in reference_ids(item)]
    if isinstance(value, dict):
        return [value['@id']] if '@id' in value else []
    return [value] if isinstance(value, str) else []


def schema_nodes(value):
    """Walk @graph, arrays and nested nodes, retaining references and definitions."""
    if isinstance(value, list):
        return [node for child in value for node in schema_nodes(child)]
    if isinstance(value, dict):
        result = [value] if '@type' in value or '@id' in value else []
        return result + [node for child in value.values() for node in schema_nodes(child)]
    return []


def root_nodes(value):
    if isinstance(value, list):
        return [node for child in value for node in root_nodes(child)]
    if isinstance(value, dict):
        return ([value] if '@type' in value else []) + root_nodes(value.get('@graph', []))
    return []


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links, self.images, self.canonicals, self.meta_description = [], [], [], []
        self.meta_robots, self.title, self.h1, self.h2, self.jsonld, self.jsonld_errors = [], [], [], [], [], []
        self.og = {}
        self.capture, self.active_anchor, self.ld_buffer = None, None, None
        self.hidden_depth = 0
        self.visible = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'a' and a.get('name'): self.ids.add(a['name'])
        if tag == 'link' and 'canonical' in a.get('rel', '').lower().split():
            self.canonicals.append(a.get('href', ''))
        if tag == 'meta':
            if a.get('name', '').lower() == 'description': self.meta_description.append(a.get('content', ''))
            if a.get('name', '').lower() in ['robots', 'googlebot']: self.meta_robots.append(a.get('content', ''))
            if a.get('property', '').startswith('og:'): self.og[a['property']] = a.get('content', '')
        if tag == 'img':
            self.images.append({'src': a.get('src'), 'alt': a.get('alt'), 'loading': a.get('loading')})
        if tag == 'a' and 'href' in a:
            self.active_anchor = {'href': a['href'], 'text': '', 'rel': a.get('rel')}
            self.links.append(self.active_anchor)
        if tag in ['title', 'h1', 'h2']:
            self.capture = [tag, '']
        if tag in ['script', 'style', 'noscript']:
            self.hidden_depth += 1
        if tag == 'script' and a.get('type', '').lower() == 'application/ld+json':
            self.ld_buffer = ''

    def handle_endtag(self, tag):
        if tag == 'a': self.active_anchor = None
        if self.capture and self.capture[0] == tag:
            getattr(self, tag).append(' '.join(self.capture[1].split()))
            self.capture = None
        if tag == 'script' and self.ld_buffer is not None:
            try: self.jsonld.append(json.loads(self.ld_buffer))
            except Exception as error: self.jsonld_errors.append(str(error))
            self.ld_buffer = None
        if tag in ['script', 'style', 'noscript']:
            self.hidden_depth = max(0, self.hidden_depth - 1)

    def handle_data(self, data):
        if self.ld_buffer is not None: self.ld_buffer += data
        if self.capture: self.capture[1] += data
        if self.active_anchor: self.active_anchor['text'] += data
        if not self.hidden_depth: self.visible.append(data)

    def result(self):
        for link in self.links: link['text'] = ' '.join(link['text'].split())[:250]
        result = {k: getattr(self, k) for k in ['links', 'images', 'canonicals', 'meta_description', 'meta_robots', 'title', 'h1', 'h2', 'jsonld', 'jsonld_errors', 'og']}
        result['ids'] = sorted(self.ids)
        result['missing_alt'] = [im for im in self.images if im['alt'] is None]
        result['empty_alt'] = [im for im in self.images if im['alt'] == '']
        result['visible_text'] = ' '.join(' '.join(self.visible).split())
        result['jsonld_types'] = dict(collections.Counter(t for n in schema_nodes(self.jsonld) for t in types(n)))
        return result


def parse_saved_html(page):
    body = Path(page.get('body_file', ''))
    if body.is_file() and 'text/html' in (page.get('content_type') or ''):
        parser = PageParser()
        parser.feed(body.read_text(errors='replace'))
        page.update(parser.result())
    return page


def run(args):
    origin, public = norm(args.origin), norm(args.public_origin)
    out = Path(args.output).resolve()
    (out / 'responses').mkdir(parents=True, exist_ok=True)
    public_host = urllib.parse.urlsplit(public).netloc
    request_host = urllib.parse.urlsplit(origin).netloc
    failures, warnings = [], []

    def require(ok, code, url, detail):
        if not ok: failures.append({'check': code, 'url': url, 'detail': detail})

    def map_request(url):
        if url == public or url.startswith(public + '/'):
            return origin + url[len(public):]
        return url

    def fetch(url, category='page', head=False):
        requested = map_request(url)
        stem = hashlib.sha256((requested + (' HEAD' if head else '')).encode()).hexdigest()[:16]
        body, headers = out / 'responses' / (stem + '.body'), out / 'responses' / (stem + '.headers')
        command = ['curl', '-sS', '-L', '--max-redirs', '8', '--max-time', '40', '--connect-timeout', '15', '--retry', '1', '--retry-delay', '1', '-D', str(headers), '-o', str(body), '-w', '%{json}']
        if head: command.append('-I')
        result = subprocess.run(command + [requested], capture_output=True, text=True)
        record = {'url': url, 'request_url': requested, 'category': category, 'body_file': str(body), 'headers_file': str(headers), 'exit_code': result.returncode, 'error': result.stderr.strip() or None}
        try:
            meta = json.loads(result.stdout)
            record.update({k: meta.get(k) for k in ['http_code', 'url_effective', 'num_redirects', 'content_type', 'size_download', 'time_total']})
        except ValueError:
            record['http_code'] = 0
        chain = []
        for block in re.split(r'\r?\n\r?\n', headers.read_text(errors='replace') if headers.exists() else ''):
            lines = block.splitlines()
            if not lines or not lines[0].startswith('HTTP/'): continue
            item = {'status_line': lines[0]}
            for line in lines[1:]:
                if ':' in line:
                    key, value = line.split(':', 1)
                    item[key.lower()] = value.strip()
            chain.append(item)
        record['response_chain'] = chain
        return record if head else parse_saved_html(record)

    def batch(urls, category):
        with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
            records = list(pool.map(lambda url: fetch(url, category), urls))
        for record in records:
            print(f"{category}: {record.get('http_code', 0)} {record['url']}", flush=True)
        return records

    if args.from_cache:
        source = Path(args.from_cache).resolve()
        data = json.loads(source.read_text())
        pages = [parse_saved_html(dict(page)) for page in data['pages']]
        directives = data.get('directives', [])
        redirects = data.get('redirects', [])
        asset_path = source.parent / 'schema-asset-check.json'
        assets = data.get('assets', json.loads(asset_path.read_text()) if asset_path.is_file() else [])
    else:
        directives = batch([public + '/robots.txt', public + '/sitemap.xml'], 'directives')
        sitemap_record = next(p for p in directives if p['url'].endswith('/sitemap.xml'))
        tree = ET.fromstring(Path(sitemap_record['body_file']).read_bytes())
        sitemap_urls = [norm(e.text) for e in tree.findall('.//{*}loc')]
        pages = batch(sitemap_urls, 'sitemap')
        seen = {norm(p['url']) for p in pages}
        while True:
            extras = set()
            for page in pages:
                for link in page.get('links', []):
                    u = urllib.parse.urlsplit(urllib.parse.urljoin(page['url'], link['href']))
                    if u.netloc not in {public_host, request_host, 'www.' + public_host} or u.scheme not in {'http', 'https'}: continue
                    if u.path.startswith(('/_next/', '/api/')) or re.search(r'\.[A-Za-z0-9]{2,5}$', u.path): continue
                    target = public + u.path.rstrip('/')
                    if target not in seen: extras.add(target)
            if not extras: break
            if len(seen) + len(extras) > 100:
                raise ValueError('More than 100 page URLs discovered; inspect scope before extending crawl.')
            pages += batch(sorted(extras), 'outlinks')
            seen.update(extras)
        redirects = []
        if args.check_redirects:
            paths = ['/', '/services', '/property', '/projects/cg-developments', '/contact', '/this-page-does-not-exist-bear-audit?source=audit']
            redirects = batch([scheme + '://portfolio.bear-media.com' + p for scheme in ['http', 'https'] for p in paths] + ['http://bear-media.com/', 'https://www.bear-media.com/'], 'redirects')
        image_urls = set()
        for p in pages:
            for node in schema_nodes(p.get('jsonld', [])):
                if 'Person' in types(node) and node.get('@id') == public + '/#garry-lynch':
                    im = node.get('image')
                    if isinstance(im, dict): im = im.get('url') or im.get('contentUrl')
                    if isinstance(im, str): image_urls.add(im)
        assets = [fetch(url, 'person-image', head=True) for url in sorted(image_urls)]

    expected_business, expected_person = public + '/#organization', public + '/#garry-lynch'
    by_url = {norm(p['url']): p for p in pages}
    sitemap_pages = [p for p in pages if p.get('category') == 'sitemap']
    service_coverage, article_coverage, business_counts = [], [], []
    for p in pages:
        url = norm(p['url'])
        require(p.get('http_code') == 200, 'http_200', url, p.get('http_code'))
        require(len(p.get('canonicals', [])) == 1 and norm(p['canonicals'][0]) == url, 'canonical', url, p.get('canonicals'))
        require(len(p.get('title', [])) == 1 and bool(p['title'][0]), 'title', url, p.get('title'))
        require(len(p.get('meta_description', [])) == 1 and bool(p['meta_description'][0]), 'description', url, p.get('meta_description'))
        require(bool(p.get('h1')), 'rendered_h1', url, p.get('h1'))
        require(not p.get('jsonld_errors'), 'jsonld_parse', url, p.get('jsonld_errors'))
        require(not p.get('missing_alt'), 'missing_alt', url, p.get('missing_alt'))
        robot_values = p.get('meta_robots', []) + [h.get('x-robots-tag', '') for h in p.get('response_chain', [])]
        is_noindex = any(re.search(r'\b(noindex|none)\b', value, re.I) for value in robot_values)
        if urllib.parse.urlsplit(url).path in NOINDEX_PATHS:
            require(is_noindex, 'placeholder_noindex', url, robot_values)
            require(p.get('category') != 'sitemap', 'placeholder_excluded_from_sitemap', url, p.get('category'))
        else:
            require(not is_noindex, 'indexable', url, robot_values)
        if not args.from_cache and origin != public:
            require(urllib.parse.urlsplit(p.get('url_effective', '')).netloc == request_host, 'served_from_requested_origin', url, p.get('url_effective'))
        roots = root_nodes(p.get('jsonld', []))
        nodes = schema_nodes(p.get('jsonld', []))
        businesses = [n for n in roots if BUSINESS_TYPES & types(n)]
        business_counts.append({'url': url, 'count': len(businesses), 'ids': [n.get('@id') for n in businesses]})
        require(len(businesses) == 1 and businesses[0].get('@id') == expected_business, 'single_business_entity', url, [n.get('@id') for n in businesses])
        business = next((n for n in businesses if n.get('@id') == expected_business), {})
        person = next((n for n in roots if 'Person' in types(n) and n.get('@id') == expected_person), {})
        require(expected_person in reference_ids(business.get('founder')), 'business_founder', url, business.get('founder'))
        require(expected_business in reference_ids(person.get('worksFor')), 'person_works_for', url, person.get('worksFor'))
        require(bool(person.get('image')), 'person_image_declared', url, person.get('image'))
        for article in [n for n in roots if ARTICLE_TYPES & types(n)]:
            article_coverage.append({'url': url, 'id': article.get('@id'), 'authors': reference_ids(article.get('author'))})
            require(reference_ids(article.get('author')) == [expected_person], 'article_author', url, article.get('author'))
            require(expected_business in reference_ids(article.get('publisher')), 'article_publisher', url, article.get('publisher'))
        for node in [n for n in nodes if 'Service' in types(n) and ('name' in n or 'serviceType' in n)]:
            require(reference_ids(node.get('provider')) == [expected_business], 'service_provider', url, {'service': node.get('@id') or node.get('name'), 'provider': node.get('provider')})
        og_url = p.get('og', {}).get('og:url')
        if og_url and norm(og_url) != url: warnings.append({'check': 'og_url', 'url': url, 'detail': og_url})

    for path in SERVICE_PATHS:
        url, identifier = public + path, public + path + '#service'
        p = by_url.get(url, {})
        candidates = [n for n in schema_nodes(p.get('jsonld', [])) if 'Service' in types(n) and n.get('@id') == identifier and ('name' in n or 'serviceType' in n)]
        valid = [n for n in candidates if norm(n.get('url', '')) == url and reference_ids(n.get('provider')) == [expected_business]]
        service_coverage.append({'path': path, 'status': p.get('http_code'), 'stable_service_id': identifier, 'valid': bool(valid), 'in_sitemap': p.get('category') == 'sitemap'})
        require(bool(valid), 'page_service_identity', url, {'expected_id': identifier, 'expected_url': url, 'expected_provider': expected_business})
        require(p.get('category') == 'sitemap', 'service_in_sitemap', url, p.get('category'))

    broken_routes, broken_fragments = [], []
    for p in pages:
        for link in p.get('links', []):
            u = urllib.parse.urlsplit(urllib.parse.urljoin(p['url'], link['href']))
            if u.netloc not in {public_host, request_host, 'www.' + public_host}: continue
            target = by_url.get(public + u.path.rstrip('/'))
            if not target: continue
            if target.get('http_code') != 200:
                broken_routes.append({'source': p['url'], 'href': link['href'], 'status': target.get('http_code')})
            fragment = urllib.parse.unquote(u.fragment).split(':~:text=')[0]
            if fragment and fragment not in target.get('ids', []):
                broken_fragments.append({'source': p['url'], 'href': link['href'], 'text': link['text']})
    require(not broken_routes, 'internal_routes', public, broken_routes)
    require(not broken_fragments, 'internal_fragments', public, {'count': len(broken_fragments), 'destinations': sorted({b['href'] for b in broken_fragments})})

    person_images = set()
    for p in pages:
        for n in root_nodes(p.get('jsonld', [])):
            if n.get('@id') == expected_person:
                im = n.get('image')
                if isinstance(im, dict): im = im.get('url') or im.get('contentUrl')
                if isinstance(im, str): person_images.add(im)
    asset_lookup = {a['url']: a for a in assets}
    for url in person_images:
        asset = asset_lookup.get(url, {})
        require(asset.get('http_code') == 200 and (asset.get('content_type') or '').startswith('image/'), 'person_image_resolves', url, {'status': asset.get('http_code'), 'content_type': asset.get('content_type')})

    robots = next((d for d in directives if d['url'].endswith('/robots.txt')), None)
    if robots:
        require(robots.get('http_code') == 200, 'robots_http', robots['url'], robots.get('http_code'))
        parser = urllib.robotparser.RobotFileParser()
        parser.parse(Path(robots['body_file']).read_text().splitlines())
        for agent in ['Googlebot', 'Bingbot', 'OAI-SearchBot']:
            blocked = [p['url'] for p in sitemap_pages if not parser.can_fetch(agent, p['url'])]
            require(not blocked, 'robots_allows_search', robots['url'], {'agent': agent, 'blocked': blocked})
    else:
        require(False, 'robots_present', public, 'No robots response in audit input')

    all_nodes = [n for p in pages for n in schema_nodes(p.get('jsonld', []))]
    defined_ids = {n['@id'] for n in all_nodes if '@id' in n and len(n) > 1}
    referenced_ids = {n['@id'] for n in all_nodes if set(n) == {'@id'} and n['@id'].startswith(public)}
    unresolved_ids = sorted(referenced_ids - defined_ids)
    require(not unresolved_ids, 'same_site_schema_references', public, unresolved_ids)

    redirect_checks = []
    if args.check_redirects:
        require(bool(redirects), 'redirect_responses_present', public, 'No redirect responses recorded')
        for record in redirects:
            source = urllib.parse.urlsplit(record['url'])
            expected = public + (source.path or '/') + ('?' + source.query if source.query else '')
            hops = [h for h in record.get('response_chain', []) if re.match(r'HTTP/\S+ 3\d\d\b', h['status_line'])]
            permanent = all(int(h['status_line'].split()[1]) in {301, 308} for h in hops)
            require(bool(hops) and permanent, 'permanent_redirects', record['url'], [{'status': h['status_line'], 'location': h.get('location')} for h in hops])
            require(record.get('url_effective') == expected, 'redirect_preserves_path_query', record['url'], {'expected': expected, 'actual': record.get('url_effective')})
            target_status = 404 if '/this-page-does-not-exist-bear-audit' in source.path else 200
            require(record.get('http_code') == target_status, 'redirect_final_status', record['url'], {'expected': target_status, 'actual': record.get('http_code')})
            if source.netloc == 'portfolio.bear-media.com' and source.scheme == 'https':
                require(len(hops) == 1 and hops[0].get('location') == expected, 'portfolio_direct_redirect', record['url'], [{'status': h['status_line'], 'location': h.get('location')} for h in hops])
            redirect_checks.append({'url': record['url'], 'expected_final_url': expected, 'expected_final_status': target_status, 'hops': len(hops)})

    summary = {
        'checked_at_utc': datetime.datetime.now(datetime.timezone.utc).isoformat(),
        'mode': 'cached reanalysis' if args.from_cache else 'live crawl',
        'origin': origin, 'public_origin': public,
        'sitemap_pages': len(sitemap_pages), 'all_pages': len(pages),
        'page_statuses': dict(collections.Counter(p.get('http_code') for p in pages)),
        'expected_service_pages': len(SERVICE_PATHS),
        'expected_noindex_paths': sorted(NOINDEX_PATHS),
        'valid_service_pages': sum(s['valid'] for s in service_coverage),
        'article_nodes': len(article_coverage),
        'broken_route_count': len(broken_routes), 'broken_fragment_count': len(broken_fragments),
        'missing_alt_count': sum(len(p.get('missing_alt', [])) for p in pages),
        'empty_alt_count': sum(len(p.get('empty_alt', [])) for p in pages),
        'schema_defined_ids': len(defined_ids), 'schema_referenced_ids': len(referenced_ids),
        'unresolved_schema_id_count': len(unresolved_ids), 'redirect_checks': len(redirect_checks),
        'failure_counts': dict(collections.Counter(f['check'] for f in failures)),
        'failure_count': len(failures), 'warning_count': len(warnings), 'passed': not failures,
    }
    report = {'summary': summary, 'failures': failures, 'warnings': warnings,
              'service_coverage': service_coverage, 'article_coverage': article_coverage,
              'business_counts': business_counts, 'broken_routes': broken_routes,
              'broken_fragments': broken_fragments, 'directives': directives,
              'pages': pages, 'redirects': redirects, 'assets': assets,
              'unresolved_schema_ids': unresolved_ids, 'redirect_checks': redirect_checks}
    (out / 'audit.json').write_text(json.dumps(report, ensure_ascii=False, indent=2))
    (out / 'summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2))
    print(json.dumps(summary, indent=2))
    print('Full audit:', out / 'audit.json')
    return 0 if not failures else 1


if __name__ == '__main__':
    arg_parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    arg_parser.add_argument('--origin', default=PUBLIC_DEFAULT)
    arg_parser.add_argument('--public-origin', default=PUBLIC_DEFAULT)
    arg_parser.add_argument('--output', default='audit-search-output')
    arg_parser.add_argument('--from-cache', help='Reanalyse a baseline.json or audit.json file, without network requests')
    arg_parser.add_argument('--check-redirects', action='store_true')
    arg_parser.add_argument('--workers', type=int, default=4)
    args = arg_parser.parse_args()
    if not 1 <= args.workers <= 6: arg_parser.error('--workers must be between 1 and 6')
    try: sys.exit(run(args))
    except Exception as error:
        print(f'Audit could not complete: {error}', file=sys.stderr)
        sys.exit(2)
