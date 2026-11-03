# Future AI Visibility Checker

The existing `/pricing` layout now accepts an optional server-rendered `visibilityChecker` slot. When supplied, the same service route list adds **05 — Improve your online visibility**, using its existing exclusive accordion, focus states and motion settings. No page restructure or provisional pricing record is needed.

## Owner controls

`lib/visibility-config.ts` is server-only. `approved: false` prevents the fifth route and checker markup from being passed to the client at all. There is no public URL switch, client storage flag or public environment variable to enable it. Owner approval requires a code change and normal build.

`partnershipAcknowledgementApproved: false` independently suppresses the proposed Summone acknowledgement. Review the exact text with Summone before enabling it. Both flags ship disabled.

For local review only, temporarily set `approved` to `true`, run `npm run dev`, and open `/pricing`. Restore it to `false` before any public release. Draft review screenshots are in `artifacts/visibility-draft-390.png` and `artifacts/visibility-draft-1440.png`.

## Reusable interface

`components/visibility/visibility-checker.tsx` is a server component with its own scoped stylesheet. It provides a labelled URL input, disabled “Checker coming soon” control, honest empty report dashboard, report provenance placeholders and implementation-help CTA through `/contact?service=other&from=visibility-checker#enquiry`.

No input submission, network request, browser persistence, fake score, progress animation, generated recommendation or price exists. Entering a URL does not scan anything. The dashboard explicitly says no website has been analysed.

## Future integration

`lib/visibility-report.ts` defines a minimal `VisibilityProvider` interface and normalized `VisibilityReport` contract, including source evidence, methodology, provider and timestamp. It contains types only, with no invented provider URL or callable scanner stub.

Once a real provider is agreed, implement this contract in a separate module importing `server-only`. Keep credentials in server environment variables; never pass them or raw provider payloads as component props. Connect a same-origin server action/API route only when functional integration is approved, and check the feature flag in that handler too. Validate URLs and upstream responses, use timeouts/rate limits and protect server-side URL fetches against private-network targets and redirects. Render only verified provider output with its provenance and limitations. If a hosted checker is chosen instead, approve its URL, disclosure and data handling before adding the handoff. No external URL or API key is configured now.

## Validation

- Chromium tests with the feature temporarily enabled passed all six requested widths, keyboard expansion, mutually exclusive accordion behaviour, URL entry, disabled scanner control, empty-report copy, partnership acknowledgement suppression and implementation enquiry link. No horizontal overflow or runtime errors observed.
- With the flag restored off, public HTML excludes the URL input and partnership acknowledgement.
- Existing pricing browser regression checks passed (accordions, package enquiry/mock submission, calculator, keyboard, reduced motion, deferred video and hidden provisional prices).
- TypeScript, changed-file ESLint, production build and `git diff --check` passed. Repository-wide lint still reports the same nine pre-existing errors in unchanged `scripts/check-campaign-enquiries.cjs`. No production deployment was made.

No dependencies added. Existing package price approvals and the contact backend are unchanged by this addition.
