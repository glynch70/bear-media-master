# Homepage restoration — 13 September 2026

The redesign launch (`ecbcb21`) replaced the original homepage composition. This restoration reuses the existing homepage components and client content through an explicit redesign variant; the legacy variant is not rendered alongside it.

## Restored and preserved

- Eight existing featured case studies, with C&G, Simply Sheds and Seamus first, plus Midlothian Wildflowers, M&M Compliance, Colin’s Canines, Herb & Soul and Almond Vet Care. Existing C&G/Simply Sheds desktop imagery retained.
- Six existing testimonials, original quotes and portrait assets. Links accurately say “Visit client website” or “Explore the project”.
- Fourteen original client logos in a responsive grid. Encode filename segments so ampersands load through the image optimiser.
- Existing Why Bear Media claims and copy, adapted to the redesign, with a services link.
- Enquiry CTA with supporting copy and contact/project routes.
- Current hero collage, cinematic media, property/drone imagery, social and website galleries, local service links and Meet Garry retained.

## Mobile layout

Gallery sections grow with content rather than enforcing full-screen height. Cards retain their 4:5 ratio. Gallery status and buttons occupy separate columns in normal flow. The fixed chapter counter moves into the mobile header so it cannot cover the gallery buttons. Anchor offsets account for the existing global scroll padding. Duplicate responsive website-name markup was consolidated into one visible label.

## SEO audit

The current homepage metadata and root schema had survived the migration. They were retained and checked in the production-build HTML:

- Exactly one H1 and 13 H2 elements; restored sections have labelled H2 headings and projects use H3.
- Single canonical `https://bear-media.com`; homepage remains indexable. Open Graph URL and description present.
- Existing LocalBusiness, Organization, ProfessionalService, Person and WebSite JSON-LD parse successfully. No review/rating schema was invented.
- Six testimonial blockquotes appear in server-rendered HTML, with no duplicate element IDs or duplicated hidden legacy sections.
- All 29 distinct internal homepage URL/anchor combinations resolve, including eight project pages, the specialist local service pages and service fragments.
- The `/redesign` concept route remains noindex; its metadata does not propagate to the homepage.
- All 85 referenced image paths inspected exist locally. All 46 rendered homepage images decode successfully in the browser.

## Verification

- `pnpm lint`: passes without warnings/errors.
- `pnpm build`: passes with TypeScript validation enabled. Removed the previous `ignoreBuildErrors` bypass.
- Production-build Chromium checks: 320×568, 360×640, 375×667, 390×844, 430×932, 844×390, 768×1024, 1024×768 and 1440×1000.
- At each size, checked eight content sections for clear headings, no page overflow, and separated/in-bounds gallery controls.
- Next/previous interactions pass for social, website, project and testimonial galleries. Mobile menu opens and closes. No browser JavaScript errors observed.
- Visually inspected mobile social/testimonials/CTA and desktop testimonial/client layouts; saved six screenshots with the delivery report.

## Follow-up

Monitor indexing, search impressions and enquiries after recrawl; this release does not establish a ranking uplift. Responsive testing used desktop Chromium emulation, not physical iOS/Android devices. Contact routing was checked without submitting a live enquiry. The local build reports an unrelated parent-directory lockfile warning; it does not affect the successful build.
