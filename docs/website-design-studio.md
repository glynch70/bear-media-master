# Mobile website demo showcase

North, Still and Form now sit immediately after the homepage hero. The same showcase appears before Starter Website pricing on the West Lothian website design page. About, Services and Projects use a compact preview linking into that showcase.

The shared client component uses native horizontal scroll snap below 900px, with named selection buttons and a three-column desktop layout. Real existing screenshots, lazy loading, reduced-motion support and no-JavaScript destination links are retained. Demo links open in the same tab and carry a return destination. Consent-aware `demo_visit` events use the existing analytics helper.

Each demo repository has a separate companion change adding the persistent Bear Media navigation bar to its root layout. The bar remembers a validated return destination across internal navigation and refreshes using session storage. Production Bear Media routes are allow-listed; localhost is supported for QA. An optional NEXT_PUBLIC_BM_PREVIEW_ORIGIN can permit one HTTPS review origin. Other return origins and credentials in URLs are rejected. Default return is the website design showcase. No personal information is put in return URLs.

The Back link selects the originating demo and returns to the showcase anchor on the original Bear Media route. It restores the card rather than a precise page pixel offset. The enquiry link preselects Website design and the selected demo. The chosen style is included in the existing enquiry email body, with the combined message length validated against the existing limit. No contact API contract changes.

Demo features are explicitly scoped separately from the £750 Starter Website. The genuine client portfolio, pricing, canonical URLs and SEO metadata remain intact.

## Validation on 19 November 2026

- Bear Media production build and TypeScript checks passed.
- North, Still and Form production builds and TypeScript checks passed using locally prepared dependencies.
- Existing demo URLs returned HTTP 200.
- `git diff --check` passed.
- Local visual/browser tests were blocked by environment socket restrictions; a hosted preview is required to complete visual, swipe, return-navigation and enquiry-selection checks.
- No enquiry submitted. No production merge or deployment authorised or performed.

Review the Bear Media and all three companion demo PRs together before release. Deploying the Bear Media page alone will not install the return bar on the demos.
