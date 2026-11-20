# Bear Media AI training

Run `pnpm install --frozen-lockfile` and `pnpm dev` from the website directory, then open `http://localhost:3000/training`.

Share a preselected profession using `?sector=general`, `property`, `legal`, `finance` or `construction`. Unrecognised values open the general business example. Scenario copy, draft outputs, product descriptions and timeline content live in `examples.ts`.

The enquiry form reuses `POST /api/contact` with the existing training service and conversion tracking. For direct delivery, provide the site's existing `RESEND_API_KEY` at build and runtime, an approved `RESEND_SENDER_EMAIL`, and the intended `CONTACT_EMAIL`. If the site uses Turnstile, configure both `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`. In a build without `RESEND_API_KEY`, the form opens a draft addressed to the published Bear Media inbox. Verify direct delivery using an approved test recipient before publishing.

The demonstrations are prepared examples and do not require accounts, microphones or AI services. Run `pnpm lint`, `pnpm exec tsc --noEmit` and `pnpm build` before publishing.
