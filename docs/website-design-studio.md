# Website Design Studio

The shared server component `components/website-design-studio.tsx` follows the genuine website gallery on the homepage and West Lothian website design service page, and follows the client project index on `/projects`. The `/redesign` equivalents inherit it through the existing shared architecture.

The fictional concepts are deliberately separate from `lib/projects.ts` and `lib/website-projects.ts`. Existing client lists, navigation, metadata, canonical URLs and contact handling are unchanged. The enquiry link reuses `/contact?service=websites#enquiry` and selects Website design.

## Screenshots

Real 1440 × 1000 browser captures taken on 16 November 2026 from:

- NORTH: https://north-property-concept-hkn3801mv.vercel.app
- FORM: https://form-training-club.vercel.app
- STILL: https://still-scottish-retreat-4370ldr6g.vercel.app

The captures were converted to WebP at quality 92 without changing their content. They are lazy loaded through Next.js Image with responsive sizes and explicit dimensions. All three source URLs returned HTTP 200. Their existing noindex metadata was observed and left untouched.

## Validation

- `pnpm build`, `pnpm exec tsc --noEmit`, `pnpm lint`, `git diff --check`: pass.
- Production server browser checks at 360, 390, 768, 1024 and 1440px on `/`, `/projects`, `/website-design-west-lothian`: HTTP 200, no horizontal overflow, all showcase images loaded, no page errors.
- Axe WCAG 2 A/AA and WCAG 2.1 AA checks scoped to the new section: no violations at all five widths on each page.
- Enquiry CTA navigates to the existing form and selects `websites`. No enquiry was submitted.
- Content and links remain available without JavaScript; normal-motion reveals and reduced-motion rendering checked.
- New external links announce their destination and new-tab behaviour, with `noopener noreferrer`.
- Existing MotionSystem supplies scroll reveals; hover motion is restricted to devices supporting hover and users without reduced-motion preferences. No new dependencies or client component boundaries.

Review only. Do not merge or deploy to production without approval.
