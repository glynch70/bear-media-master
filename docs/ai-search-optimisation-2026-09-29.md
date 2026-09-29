# Bear Media AI Search optimisation — 29 September 2026

## Scope and release record

This change strengthens the relationships between Bear Media, Garry Lynch, existing services, real projects and original journal articles. It preserves the current design and the 24 September content-days/website positioning experiment.

The implementation was based on production `main` commit `363fb8e470e00e04953a7f580259c1e7e6648060`. The associated optimisation pull request records the release commit and production verification. The separate mobile bento/hero draft PR #15 is outside this change.

The owner-supplied Search Console baseline is **15 Generative AI impressions over the previous three months**, mostly to the homepage, with little meaningful service-page AI visibility. This is a baseline, not a result of these changes. Authenticated Search Console and Business Profile data were not accessible during this implementation.

## Before and after

| Area | Original live site | Implemented result |
| --- | --- | --- |
| Business identity | Three different Bear Media node IDs; providers and publishers used different identities | One `LocalBusiness` identity reused by services, pages, articles and Garry's employer/founder relationships |
| Garry Lynch | Business profiles also attached to the Person; profile image returned 404 | Separate personal LinkedIn identity, reciprocal business relationship and existing working portrait |
| Services | 15 pages had Service markup; 10 incorrectly used the homepage as their Service URL; none had a stable Service ID | All 17 important service routes have their own URL, stable ID, service type and Bear Media provider reference |
| Property | Five services already described, with a single broad Service node | Five catalogue services tied to the existing photography, video, drone, floor-plan and tour sections; practical preparation, format, availability and quoting information |
| Case studies | Existing project service labels were plain text | 26 labels link to relevant services across all nine case studies; CreativeWork relationships connect each case study to Garry, Bear Media and demonstrated services |
| Articles | Six Article nodes, including an unfinished placeholder; four sitemap journal articles lacked Article markup | Ten complete articles have author/publisher relationships; the existing workspace article is linked and included; the placeholder remains accessible with `noindex, follow` |
| Internal links | Three obsolete service menu fragments repeated 144 times in audited HTML | Direct links to the correct website, photography and drone pages; zero broken routes or fragments in the finished crawl |
| Sitemap | 41 URLs; training/workspace missing; static/project dates reset on every build | 42 URLs: add training and workspace, exclude the placeholder; retain recorded article dates and omit unsupported revision dates |
| Portfolio subdomain | Permanent redirect already worked | Verified and retained; no DNS or hosting change needed |

## What changed

### Entities and structured data

`lib/schema.ts` supplies consistent identifiers and safe JSON-LD serialisation. The shared components now connect:

- Bear Media: `https://bear-media.com/#organization`, typed `LocalBusiness` (already a subtype of Organization).
- Garry Lynch: `https://bear-media.com/#garry-lynch`, founder of and working for Bear Media.
- Website: `https://bear-media.com/#website`, published by Bear Media.
- Each service page: its canonical URL plus `#service` and `#webpage`.
- Each case study/article: its canonical URL plus `#work`, with the relevant creator/author, publisher and service references.

About is a ProfilePage about Garry; Contact is a ContactPage about the business. The existing founding year, 2024, and public phone/email are retained. Broxburn, West Lothian is the base, with Edinburgh and the Lothians as the primary positioning and Fife supported. No residential street address, coordinates, unverified credential, rating or new performance claim has been added.

The business LinkedIn profile is added to business `sameAs`; Garry's personal LinkedIn belongs to the Person. The existing TikTok URL is retained pending owner confirmation. An unsupported X creator handle and arbitrary price-range symbol are removed. Garry's schema image now points to the existing `.webp` portrait.

### Service coverage

| Service route | Specific improvement |
| --- | --- |
| `/services` | New Service graph and catalogue of eight existing services; existing gallery captions link to real work |
| `/property` | Five-service catalogue and David Todd/C&G relationships; nine targeted paragraph refinements |
| `/training` | Stable Service identity and sitemap inclusion |
| `/social-media-pricing` | Service graph and catalogue derived from the three existing packages |
| `/business-photography-west-lothian` | Correct URL/ID, shared FAQ answers and M&M Compliance evidence |
| `/content-creation-west-lothian` | Correct URL/ID, practical FAQ answers and David Todd/C&G evidence |
| `/drone-photography-west-lothian` | Correct URL/ID, practical flight/site/weather answers and relevant project evidence |
| `/property-photography-west-lothian` | Stable identity and property/case-study relationships |
| `/social-media-west-lothian` | Correct URL/ID, FAQ consistency and real social project evidence |
| `/video-production-west-lothian` | Stable identity and relevant video case-study relationships |
| `/website-design-west-lothian` | Stable identity and existing website case-study relationships |
| `/content-creation-edinburgh` | Correct URL/ID, useful FAQ answers and relevant case-study relationships |
| `/content-creation-fife` | Correct URL/ID, useful FAQ answers and relevant case-study relationships |
| `/social-media-edinburgh` | Correct URL/ID, useful FAQ answers and real social project evidence |
| `/social-media-fife` | Correct URL/ID, useful FAQ answers and real social project evidence |
| `/website-design-edinburgh` | Correct URL/ID, useful FAQ answers and actual website examples |
| `/website-design-fife` | Correct URL/ID, useful FAQ answers and actual website examples |

Across the existing local FAQ sections, 45 answers were refined; four existing services-hub answers were refined. The original questions and accordion counts remain. Shared data keeps the rendered answers and FAQ markup consistent. Answers explain scope, preparation, travel, editing, formats, delivery, hosting and what to provide for a quote. Blanket delivery, ownership and outcome promises have been replaced with clear agreement of scope.

Twenty service-to-project relationships use eight existing case studies. They indicate the services demonstrated by the work, not evidence of a client's location. On the property page, David Todd demonstrates the documented photography, drone and marketing work; no floor-plan or virtual-tour delivery is attributed to that client.

Fourteen contextual links were added to existing journal phrases without changing the underlying article text. The unfinished video-enquiries placeholder has not been expanded into generic copy: its URL and card remain, but it is excluded from indexing and the sitemap until there is a complete article.

### Metadata, crawling and redirects

The finished crawl checks titles, descriptions, canonical URLs, Open Graph URLs, robots directives, sitemap eligibility, rendered headings/text, image alt attributes, internal destinations, fragments and JSON-LD relationships. The Terms page's Open Graph URL now matches its own canonical; legal text is unchanged.

The original public robots policy already permits search crawling. Its existing `/api/` and `/.next/` exclusions remain; `/_next/` assets are not blocked by the latter. There was no need to add special AI files, a new robots policy or training permissions. No image lacked an alt attribute in the original audit; 12 intentionally empty poster/supplementary alt values were reviewed and retained.

Fourteen live redirect cases passed before implementation. HTTPS portfolio URLs return 301 directly to the equivalent `bear-media.com` path; HTTP first upgrades to HTTPS. Paths and query strings are preserved, and nonexistent destinations correctly remain 404 rather than redirecting indiscriminately to the homepage. Existing bare/www HTTPS redirects also work.

## Verification

The final source passed:

- Frozen-lockfile dependency installation with pnpm 10.30.3.
- ESLint, TypeScript and the Next.js production build (65 prerendered routes).
- Focused server-rendered schema checks, including identifier stability and safe script escaping.
- A live HTTP crawl of the finished production build: **42 sitemap pages / 43 reachable pages**, all expected HTTP 200 responses, all 17 Service pages valid and 10 Article nodes.
- **Zero broken internal routes, zero broken fragments, zero missing alt attributes, zero malformed JSON-LD, zero unresolved same-site schema references and zero audit warnings.** All 78 referenced schema IDs resolve among 118 defined IDs.

Browser verification compared the original production source with the changed source using identical assets at 390 × 844 and 1440 × 1000. All 36 renders (nine routes, two viewports, before/after) returned 200 with no horizontal overflow, JavaScript/console errors, invalid anchor targets or completed broken-image loads. The routes were homepage, property, services, website design West Lothian, content creation West Lothian, David Todd, the journal index, client-work article and contact. Menu focus/Escape/navigation, FAQ controls, property anchors, case-study caption navigation and contact validation passed.

The 18 hero comparisons were visually unchanged, with no difference above a 12/255 colour tolerance; minor antialiasing differences mean this is not a claim of exact pixel identity. Property's practical copy adds 80px to total mobile page height and 27px on desktop. Other tested page heights are unchanged. All 538 downloaded verification assets matched the original Git blob hashes. Responsive image requests cancelled during navigation were also checked directly and returned valid images.

No CSS, media assets, layout classes, hero content, package prices, dependency versions, email/API behaviour or hosting configuration is intentionally changed. Existing text gains practical answers and links within its current sections. A real contact email was not submitted. The property video control creates the correct Mux iframe, but the external playback request was blocked identically in both browser runs, so third-party playback is not certified by these checks. The associated PR records production verification after deployment.

Reusable read-only verification is included in `scripts/audit-search.py`:

```bash
python scripts/audit-search.py --output /tmp/bear-search-live --check-redirects
python scripts/audit-search.py --origin http://127.0.0.1:3000 --output /tmp/bear-search-local
```

For local verification, start the production server in the same execution environment as the audit. The script checks production canonical URLs even when requesting a local origin. Reports should be kept outside the repository; they contain complete rendered responses and are not application code.

## Garry's manual follow-up

1. **Search Console:** confirm the Generative AI inclusion setting still matches the supplied baseline. Submit or confirm `https://bear-media.com/sitemap.xml`; inspect `/property`, `/services`, the priority content/website pages and one updated case study. Request recrawling of these representative changed pages. Export the Generative AI report by page and date, alongside normal Search performance. No account settings or credentials were changed here.
2. **Business Profile:** verify that the 24 September description/service-area edits were approved and the obsolete Edinburgh location is no longer public. Keep the address hidden if customers are not received there. Match the public website URL, phone, Broxburn base and genuine services; confirm the actual 2024 opening month before correcting the old January 2020 entry.
3. **Other public profiles:** correct stale Edinburgh location details on the business LinkedIn, Yell and Nextdoor listings. Establish ownership and the desired canonical listing before removing any duplicate Nextdoor page. Confirm whether the current TikTok URL is `@bearmediascotland` or another account before changing schema.
4. **Property proof:** supply an approved, privacy-checked real floor-plan example and a publishable working 360° tour, with accurate delivery/hosting details. These would provide evidence for two services that currently lack a public example. No invented project was added.
5. **Existing content checks:** confirm the current drone qualification/insurance wording is accurate. Complete or retire the unfinished video-enquiries article when there is real material to publish; its existing journal card remains visible. Two pre-existing design/content items were left for a separate decision: the services FAQ is hidden below 1024px, and the desktop “Managing What Matters” gallery item uses a Midlothian Wildflowers mockup. Neither was silently redesigned during this task.

## Measurement and interpretation

Continue the 24 September positioning hold through **22 October 2026**. Record this 29 September technical/content intervention alongside it so subsequent movement is not attributed to the earlier homepage work alone. A later complete 28-day window for this intervention ends on 27 October; use only complete reporting days.

Track non-brand service-page clicks and enquiries, service-page Generative AI impressions, the number of service pages receiving AI impressions, and Business Profile website visits/calls. Compare page and query groups where volume permits, rather than interpreting a single search result or one week as a trend. The initial volume is very small, so impressions are directional evidence rather than proof of commercial impact.

The aim is clearer, crawlable evidence and relationships. Schema does not guarantee rankings, a Knowledge Panel or inclusion in an AI answer. FAQ markup describes existing answers; it is not being sold as a Google FAQ rich-result opportunity. Do not add fabricated reviews, business locations or credentials to satisfy a validator.

## Primary guidance checked

- [Google guidance on optimising for AI experiences](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Search Console Generative AI inclusion control](https://support.google.com/webmasters/answer/16908024)
- [Search Console Generative AI performance report](https://support.google.com/webmasters/answer/16984139)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google crawlable links guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google structured-data updates](https://developers.google.com/search/updates)
- [Schema.org Service](https://schema.org/Service)
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)

Rollback, if needed, should revert only this optimisation PR while preserving later work and the separate hero branch. Do not reset production to an unrelated or older checkout.
