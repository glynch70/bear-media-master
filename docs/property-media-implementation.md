# Property Media implementation

## Scope and audit

Based on main commit 95e52ca, in branch `codex/property-media-expansion`. Nothing deployed or pushed. No domain/hosting changes.

- Next.js 16.2.6 App Router, React 19.2.4, TypeScript, Tailwind 4 and CSS modules. Existing scripts: pnpm lint, pnpm build; TypeScript checked with pnpm exec tsc --noEmit. No existing test script.
- The live homepage uses app/redesign/page.tsx, not the older components/home composition. Public project pages reuse the redesign case-study component. Existing brand: Inter, near-white/warm paper, dark ink, restrained gold accents, strong editorial imagery.
- Reused RedesignHeader/Footer, MuxVideoPlayer, createMetadata, ServiceSchema and BreadcrumbSchema. Added no dependencies.
- Navigation has separate current and legacy variants; both updated. Existing location photography URL retained and linked to /property.
- All 16 supplied PNGs and 46 repository/reference assets visually reviewed in the preceding audit. Source ZIP and masters preserved. Seven portfolio photos selected. New brief supersedes the prior conservatory-hero suggestion: the clean Haddington exterior is the page hero; the conservatory leads the gallery.
- Existing homepage already has conservatory and Tranent exterior imagery. New Property Media feature added after the three photography/video/drone service panels without changing the wider business positioning. It uses the Edinburgh aerial so it does not repeat the conservatory in the neighbouring Photography panel.
- Genuine C&G development film exists with Mux playback ID, poster and case-study provenance. Reused, clearly described as a construction timeline rather than presented as a listing walkthrough. Player loads only after an explicit click.
- No QubiCasa/floor-plan source or publishable 360 tour URL found in repository or supplied ZIP. Relevant filenames also checked in Desktop, Downloads, Documents and attachments. Requested these from Garry. Services have honest copy and enquiry links; no fake example or broken placeholder shown.

## Asset selection and editing provenance

| Role | Source/reference | Implementation |
| --- | --- | --- |
| Hero | Existing David Todd Haddington exterior | Reuse current WebP; preserve building in mobile square crop |
| Gallery lead | NEW08, Craigentinny conservatory | Reuse current 2026-refresh asset |
| Kitchen | Existing finished-kitchen-wide.jpg | New responsive source: finished-kitchen.webp |
| Living space | NEW01, Tranent lounge | tranent-living-room.webp |
| Detail | Existing property-detail-kitchen-01.webp | kitchen-detail.webp |
| Urban drone | NEW10, Craigentinny aerial | Reuse current 2026-refresh asset; also David Todd hero |
| Rural drone | Existing property-drone-01.webp | rural-property-aerial.webp |
| Social preview | NEW08 conservatory | property-media-social.jpg, 1200 × 630 |

These are supplied Bear Media photographs with project provenance. Metadata inspection found no EXIF/XMP/IPTC in the three selected new PNGs or retained WebP exports. The original C&G kitchen JPEG records Adobe Lightroom 9.4.1 as its editing/export tool, which supports a Lightroom workflow but does not prove AI tools were never used. Editing history cannot be established from appearance alone or stripped web exports. No selected image is certified as untouched, exclusively conventionally edited, or free of prior AI assistance. Website copy makes none of those claims. No generative editing, reconstruction, object removal or physical-feature alteration performed here. Added files are compression/resizing derivatives; social and responsive display crops only. Original source files remain unchanged. Pixel dimensions and checksums are recorded in the preceding asset audit.

Next/Image supplies responsive srcsets. Hero is preloaded; supporting photography and video poster lazy-load. Existing image quality allow-list respected (85/90). No autoplay or added page animation. Reduced-motion CSS prevents new transitions/animation. Filename/location details already present in the repository are not expanded into addresses in new captions or alt text.

## Commercial and SEO decisions

- Updated after deployment at Garry’s request: no public prices. The former pricing section invites viewers to contact Garry for a tailored quote. Metadata and incoming links no longer advertise starting prices.
- No public package prices, existing-client rates, hourly rate, automatic discounts or invented deliverable counts. The existing property-pricing anchor remains compatible, labelled “Get in touch” in the navigation.
- First-person copy. No fabricated results, clients, endorsements or statistics.
- David Todd case study stays separate; updated hero, living-room image, descriptive alt text and related-service link. Removed the unsupported five-service count and unverified floor-plan/tour deliverable claims. Existing sourced testimonial retained.
- Canonical /property, title/description, OG/Twitter 1200 × 630 image, breadcrumbs, service schema and sitemap entry. Existing robots policy allows the route. No location doorway pages or invented offices.

## Motion capability review

Read installed Remotion router/create skills and Hyperframes authoring skill. Remotion can author reusable React compositions and render videos via CLI. Hyperframes can author timed HTML/GSAP compositions and render/inspect via CLI. No dedicated callable Remotion/Hyperframes tool is exposed in this session; neither runtime is in the website package/lockfile. Skill availability does not imply a running renderer.

Decision: use the genuine existing client film. A second still-photo slideshow would repeat the gallery and add payload without demonstrating additional deliverables. No new rendering dependency or decorative device mock-up added. Hyperframes offers no material improvement to this static editorial page.

A later reusable 12-second Remotion composition could accept asset props: exterior (0–2s), interior (2–4s), detail (4–6s), aerial (6–9s), Bear Media end frame (9–12s), with restrained crossfades, no invented camera moves and optional verified plan/tour frames. Keep as a separate production tool; export H.264 MP4 plus JPEG poster rather than shipping Remotion Player. This is a documented foundation, not a claim that a showreel was created.

## Outstanding source-dependent work

- **TODO — floor plan:** obtain original QubiCasa PDF/SVG/image; preserve private master outside public/. Create a genuinely redacted presentation derivative (remove address/postcode from visible content, embedded metadata and text layer). Preserve all room geometry/dimensions/orientation; verify against original. Offer readable full-size view/download. Suggested caption: “Floor plan generated from current QubiCasa room scan. For illustrative marketing purposes only. Not to scale. Measurements, layout and orientation should be verified where required.” Do not publish an unredacted source PDF.
- **TODO — 360 example:** obtain a genuine publishable tour URL and confirm it contains no unnecessary private identifiers. Prefer descriptive external link or click-to-load embed with iframe title/static fallback, after checking provider embedding policy. Do not claim a demo exists until verified.
- Editing provenance remains unverified; obtain edit/source history if Garry needs a definitive original/conventional/AI-assisted classification.

## Validation

Executed: pnpm lint, pnpm exec tsc --noEmit, pnpm build and git diff --check all passed. Production browser checks at 375/390/768/1440px: all images decoded, no overflow, no page errors, no axe WCAG A/AA findings. Menu open/close/Escape, pricing anchors, homepage entry, David Todd reciprocal link, contact route, internal links, canonical/OG metadata and sitemap passed. Mux playback verified on mobile: readyState 4, duration 103.73 seconds, playing, no media error. See property-qa.json in task outputs. These are automated checks, not a claim of a full manual accessibility audit or field Core Web Vitals certification. Production build, lint and TypeScript must be rerun after any source-dependent changes. No contact emails are sent during QA.
