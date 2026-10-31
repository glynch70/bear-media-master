# Automatic IndexNow submissions

After a successful Vercel **Production** deployment, `.github/workflows/indexnow.yml`
crawls the live sitemap and compares indexable page content with the last successful
crawl. New pages and changes to main content, titles, descriptions, images or links
are submitted to `https://api.indexnow.org/indexnow` in one batch. Build IDs and
hydration scripts are ignored, so rebuilding alone does not submit every page.

The root text file named in `scripts/indexnow-config.json` proves domain ownership.
It is intentionally served publicly. No Vercel token, account password or paid
service is needed. The workflow uses GitHub's short-lived read-only token to load
its previous snapshot; that token is not sent to IndexNow.

Only same-host HTTPS sitemap URLs are eligible. Redirects, noindex pages and pages
canonicalized elsewhere are excluded. A failed crawl or rejected submission fails
the workflow and leaves the previous snapshot intact. Rerun the failed job in
GitHub Actions to retry. HTTP 200 and 202 are accepted responses, not promises that
a search engine will index a page. IndexNow does not replace the sitemap.

Snapshots are stored in the `indexnow-state` GitHub Actions artifact for 90 days.
If none remains, the workflow compares against the initial committed snapshot in
`.github/indexnow-baseline.json`; this may resubmit previously changed pages after
a long period without deployments. Nothing submits on preview deployments.

To inspect submissions, open **Actions → Submit changed pages to IndexNow**.
Each successful run lists the submitted URLs and saves the new snapshot, including
runs with no changes. A manual run also supports optional explicit URLs, restricted
to live indexable pages in the sitemap. It uses the same verification and retries.

Local checks:

```sh
python3 -m unittest discover -s scripts -p 'test_indexnow.py'
python3 scripts/indexnow.py --dry-run
```

`--initialize` captures a new committed baseline without submitting anything. Use
it only when intentionally resetting the fallback snapshot.
