# Services & pricing review

Branch: `feat/interactive-pricing`. Route: `/pricing`.

## What changed

- New server-rendered pricing introduction, using the existing Bear Media typography, warm paper, dark ink, gold accent, navigation and footer.
- Four accessible, mutually exclusive service accordions, package selection, real client galleries, deferred user-loaded muted showreel and website comparison.
- Optional AI value calculator with explicit formulas, input limits and illustrative-results disclaimer.
- Selected-package mobile bar with dismiss control and iPhone safe-area spacing. It hides when the advertising preferences or mobile menu dialog is open; the permanent preferences control retains its own space.
- Contact page now wraps the existing client form on the server. Only package identity is passed to the form. Existing service preselection, honeypot, timing guard, Turnstile, validation, rate limiting, consent and attribution remain in use.
- Existing contact API validates package identity/service and optional telephone, then adds them to the notification context after original-message spam checks. No new backend or payment system.
- Pricing metadata uses the existing canonical/Open Graph helper; sitemap and shared desktop/mobile/footer links include the route.

## Files

New: `app/pricing/page.tsx`, `app/pricing/pricing-experience.tsx`, `app/pricing/pricing.module.css`, `lib/pricing-config.ts`, `lib/pricing-calculator.ts`, `app/contact/contact-form.tsx`.

Modified: `app/contact/page.tsx`, `app/api/contact/route.ts`, `app/redesign/redesign-chrome.tsx`, `app/redesign/redesign-mobile-menu.tsx`, `app/sitemap.ts`, `app/terms-and-conditions/page.tsx` (privacy section anchor only).

Screenshots: `artifacts/pricing-390.png`, `artifacts/pricing-1440.png`, `artifacts/pricing-selected-mobile.png`.

## Commercial approval

All 26 package records in `lib/pricing-config.ts` are deliberately `approvalStatus: 'draft'`. Their numeric prices never enter the pricing or contact client props. Visitors see “Let’s agree a quote”. Owner review is required for every website, social, property, content, training, maintenance, Google profile and website support price.

Edit this single configuration file. Change an individual `approvalStatus` to `approved` only after confirming its fee, price type, period and minimum. A normal build publishes the approved labels. No environment variable, query parameter or visitor-facing toggle bypasses approval.

Descriptions are draft starting-point copy, with no specific promises. Deliverables, exclusions, extras and revision allowances remain uncommitted. Fill these fields and set `scopeApproved` only after owner review. Until then, cards and comparison explicitly defer scope to a written proposal. No recommended badge is asserted without an approved package rationale. No VAT assumptions or checkout.

## Components and references

Reused `RedesignHeader`, `RedesignFooter`, mobile navigation, Next Image/Link, Lucide icons, existing SEO helper, contact API and sitewide motion/reduced-motion infrastructure. New route-local CSS provides hero reveals, hover feedback and progressive intrinsic-height accordion transitions. Browsers without intrinsic-size interpolation open immediately.

Reviewed the supplied Summone screenshots and fetched its rate-card page. Reviewed 21st.dev’s accordion and pricing-section discovery links. Adapted the interaction principles without copying registry components or adding decorative dependencies.

No project dependencies or lockfile changes. The global pnpm 11 cannot use this repository’s legacy package.json overrides with a frozen lockfile. Installation succeeded with `npx pnpm@10 install --frozen-lockfile`; verification uses the existing scripts through npm and the local TypeScript binary.

## Verification

- Production build: passed.
- TypeScript `tsc --noEmit`: passed.
- ESLint on all changed source files: passed.
- Repository `npm run lint`: reports nine pre-existing errors in unchanged `scripts/check-campaign-enquiries.cjs` (CommonJS imports and `module` variable). These remain outside this change.
- `git diff --check`: passed.
- Chromium/Playwright: all four accordions at 375, 390, 430, 768, 1024 and 1440px; no horizontal overflow in closed or open states.
- Website comparison, selection, service/package query handoff, telephone capture and mocked successful submission: passed. No test email sent.
- Calculator: two employees × three hours/week × £25/hour = 26 monthly hours and £7,800 annual value; £650 investment = one month illustrative break-even. Zero savings and invalid negative values checked.
- Keyboard Enter, reduced-motion computed style, deferred video/no autoplay and server-response absence of unapproved prices: passed.
- All referenced image and video paths exist locally. No runtime page errors observed.

No Lighthouse/Core Web Vitals score is claimed. Live Resend delivery and production Turnstile require the deployment’s credentials and were not exercised. No production configuration, domain, DNS, services route or training route was changed. No deploy was made. No deployment-preview workflow is defined in the repository (its only GitHub workflow is IndexNow); use the local preview for review before arranging a Vercel preview.
