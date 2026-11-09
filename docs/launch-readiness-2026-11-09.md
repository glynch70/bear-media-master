# Launch readiness repair — 9 November 2026

Source: glynch70/bear-media-master, main 8b18ed5 (9 November). The similarly named private bearmediamaster repository last changed in June.

## Privacy and tracking

Added /privacy, metadata, sitemap entry, both footers, static training footer, terms link and point-of-collection form notice. Removed the /privacy-to-terms redirect; the legacy portfolio privacy URL now resolves to the policy. /privacy-policy redirects to /privacy.

This is a review draft, not a claim of complete legal readiness. Garry must confirm the actual enquiry/mailbox retention schedule, account-level processor terms and international transfer safeguards. The public wording explicitly discloses these gaps rather than inventing periods or safeguards. Confirm the lawful bases proposed in the draft against actual business practice. Code confirms Vercel hosting (also documented in repository media audits), Resend delivery and conditional Cloudflare Turnstile. No phone field is collected; phone numbers voluntarily entered in messages are covered.

Before this change: GA loaded when NEXT_PUBLIC_GA_ID existed; Microsoft Clarity used a default project ID in production; Vercel Analytics loaded on Vercel production. None was gated by the existing advertising preference. All three are now disabled at the root. No Meta Pixel or Google Ads loader was found in the source audit. Deployment-injected integrations cannot be ruled out from repository inspection.

OpenAI Pixel already had a working opt-in control. Retained that specific control, with no misleading all-cookies claim. Campaign session storage now requires opt-in and clears on decline; conversion helper checks consent. No acceptance is inferred from scrolling. Necessary local preference storage and anti-spam functionality remain available. Mux and YouTube iframes already loaded on deliberate interaction; their buttons now disclose the provider and possible cookies before loading. Remote Mux poster images pass through Next Image.

Browser consent test at simulated canonical hostname: zero pixel requests before choice or after decline, one SDK request after acceptance, consent(false) queued after withdrawal. External SDK was stubbed; provider-side cookie deletion was not independently verified.

## Links, contact and trust

Removed wrong PYP destination and Master Chefs TikTok destination without guessing replacements. Master Chefs, The PYP and Johnstone & Robertson need confirmed client destinations from Garry. Midlothian Wildflowers' hyphenated domain remains unchanged pending verification; its spelling alone does not prove it is wrong.

Removed West Lothian's # destination. Get Started points to #enquiry (footer CTA also points directly there). Message length is 10–2,000 characters in browser and server, without the previous server truncation. Service is optional in the current code and validation, so retained that state. Origin, honeypot, numeric-spam, rate-limit and conditional Turnstile checks remain. Live email delivery and real Turnstile credentials were not tested; provider delivery was mocked.

Testimonials already name Steven Summone, Seamus Corry, Stephen Johnstone, Gary Young and Leanne Murphy. No additional verified business affiliations were found for the vague roles. No identity or quotation was invented. “20+ Years Working With People” remains pending more specific approved copy.

Garry must complete the ICO fee self-assessment and confirm registration/exemption: https://ico.org.uk/for-organisations/data-protection-fee/self-assessment/ . Code cannot establish registration status.

## Accessibility, performance and metadata

Added factual alt text to content-day, hero and interview poster images; retained empty alt on decorative posters inside already-named controls and navigation thumbnails. Existing carousel controls have useful names, visible focus and approximately 44px targets. Added explicit third-party player permission labels.

Logo client gallery now mounts one viewport-specific layout instead of simultaneous mobile and desktop image trees. Website gallery's duplicate-looking requests are large preview cards plus small navigation thumbnails; retained the navigation and deferred modal image (only mounted on open).

High-density mobile 3,840px requests reproduced on homepage and services. Homepage cinematic poster uses 178vh; services hero uses 190vw and drone image 140vh. These landscape images fill tall crops. Did not blindly reduce image configuration or sources: mobile-specific crops/framing should be separately reviewed if reducing these transfers. Existing responsive Next Image and below-fold lazy loading remain.

Retained referenced public directories with spaces/capitals; avoids breaking existing public URLs. No bulk rename performed.

Removed v0.app generator. Existing shared SEO helper preserves canonical URLs, unique metadata, social sharing and en_GB. LocalBusiness schema already exists with phone, business identity and areas served; no duplicate schema or invented reviews/ratings added.

## QA

- TypeScript, lint and production build passed using pnpm 10.28.2 via Corepack. Environment default pnpm 12 rejected legacy override configuration; no lockfile/dependency changes retained.
- Eight mocked enquiry tests passed, including message-length boundaries and consent-dependent storage. Fixed existing CommonJS lint issues with a narrowly scoped config and renamed local module variable.
- Browser matrix: homepage, contact, terms-and-conditions, privacy, services, projects, journal (/insights) at 320, 375, 390, 430, 768, 1024 and 1440; all 49 returned 200, had privacy links, no detected horizontal page overflow, and no GA/Clarity/Vercel/OpenAI script requests before consent.
- Full-page screenshots captured for all 49 combinations under /workspace/scratch/qa; visual overview inspected at 320 and 1440. Screenshot captures at every width are evidence, not a claim that every pixel at every width received manual inspection.
- No production deployment, SSL scan, PageSpeed score, mailbox access or ICO account access performed.

Not launch-approved until the policy gaps and outstanding owner confirmations above are resolved.

## Owner confirmation after review

Garry confirmed on 9 November: “I delete all after 12 months.” The policy now states that enquiries and related emails are deleted after 12 months. Provider backup/log retention, mailbox provider, transfer safeguards and ICO registration/exemption remain unconfirmed.

Garry also confirmed IONOS as the business mailbox provider. Added to the privacy page; its account-specific retention and transfer safeguards remain to be checked.
