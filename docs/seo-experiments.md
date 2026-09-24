# Bear Media search-visibility experiment

Use this ledger for the Tuesday rankings monitor. Organic Search Console data and Google Business Profile data are separate; neither a single week nor a public search result proves a trend.

## Baseline, 22 September 2026

Authenticated Search Console data was complete through 19 September. Over the preceding 28 days, the six priority West Lothian service pages had 509 impressions and **zero clicks**. The near-page-one pages were video production (24 impressions, average position 9.9), content creation (37, position 15.5), and drone photography (4, position 18.5). Website design had 249 impressions at position 70.3; business photography 96 at 38.3; social media 99 at 62.6. These are page-wide averages, not rankings for a single query.

The August Business Profile email reported 138 profile views (down 32% versus July), nine website visits (down 73%) and zero calls. Its 77 reported interactions do not reconcile with the visible breakdown; verify the full report before interpreting that figure.

## Intervention, 24 September 2026

- Owner direction: lead with content days and website builds; use David Todd Sales & Lettings and C&G Developments as content proof; describe Broxburn as the base and Edinburgh and the Lothians as the primary service area. Fife remains secondary.
- Website change: homepage and services positioning, prominent links to priority pages, local landing-page copy and project links, corrected 2024 founding year in structured data, and no residential street address or pinpoint coordinates in schema.
- Google Business Profile: description and service-area edits were submitted for review, **not confirmed approved**. The editor had the street address hidden but a public search result still displayed the obsolete Edinburgh street address. Check public visibility again after approval; escalate to Google support if it persists. The profile opening date says January 2020; correct it only when the owner confirms the actual 2024 month.
- Production deployment: **24 September 2026**, via PR #8 on the current redesigned main branch. The new release was verified on `bear-media.com` after promotion. A first attempt from an outdated checkout was rolled back immediately and is not this intervention.

The earlier homepage snippet test due for review on 27 September is interrupted if this release goes live. Do not attribute later homepage CTR changes to that snippet alone.

## Decision gates

At 7 days, confirm all changed pages are live and indexable and inspect early query-level signals. At 28 days, compare complete pre/post windows by page and query, especially positions 4–20. At 56 days, confirm whether any 28-day movement persisted. Primary outcomes are non-brand organic clicks to content-day and website pages plus contact enquiries; supporting measures are impressions, CTR, position, query mix and Business Profile website visits/calls. Compare Edinburgh and West Lothian queries separately where volume permits.

Working threshold: from the current zero service-page clicks, seek at least five combined clicks per 28 days and at least one click to each of the content-day and website-design groups. These are learning thresholds, not ranking promises. If impressions rise but clicks stay at zero, inspect actual queries and search appearance before rewriting. If impressions remain low, prioritise legitimate local mentions and relevant case-study links.

| Deployment date | 28-day review | Evidence | Next decision |
| --- | --- | --- | --- |
| 24 Sep 2026 | 22 Oct 2026 | Pending complete post-change data | Compare priority page/query clicks, impressions, CTR and enquiries; decide whether to hold, strengthen links or revise a specific page. |
