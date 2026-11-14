# Current production review — 14 November 2026

Baseline: f0178530568e1aa3af1fff028ca043cceb7744e7. Production deployment matched this commit before work began.

## Already correct

- Production homepage uses `app/redesign/page.tsx`, not the legacy `components/home/hero.tsx`. It already contains the requested asymmetric six-photo mobile bento, exact headline/copy/CTAs and short CSS reveals. Retained the real workshop, St Andrews, property, video setup, editing and Garry photographs.
- The PYP and Johnston & Robertson are absent from current client presentation. Client cards are not duplicated to pad the count.
- Master Chefs channel destination exists in repository history: `https://www.youtube.com/channel/UC1vC_n5OLaf3HP-0WqSaNLw`. Retained it. Direct YouTube verification was blocked by the environment's outbound proxy.
- Midlothian Wildflowers uses its confirmed website and real wildflower hero. Almond Vet Care already uses a genuine practice photograph; C&G uses genuine project imagery. No screenshot hero replacement needed.
- Shared contact-field constants already replace the old generic truncation helper. Frontend and server share validation. Service is optional, message is 10–2,000 characters. Submission ref prevents duplicate sends; honeypot is hidden, tokens reset after errors, email HTML is escaped and confirmation failure is non-blocking.
- Production security headers include HSTS, nosniff, strict-origin referrer policy, DENY and incremental CSP (frame-ancestors/object-src/base-uri). No restrictive script CSP added without a separate rollout.
- Metadata, canonical host, 1200×630 social image and large Twitter card are correct. No active public v0 generator/log traces found. Historic audit/source documents were retained.
- One shared LocalBusiness identity links the Person/WebSite/page/service entities. Founding year 2024 is supported explicitly by the About page. No rating, street address or opening hours invented.
- ICO component renders nothing without a configured real number.

## Fixed / improved

- GA consent updates now explicitly follow withdrawal and reacceptance, in addition to the existing disable flag. Analytics cookie cleanup covers the current hostname as well as the apex domain.
- Added an isolated consent regression check (`node scripts/test-site-analytics.cjs`): no scripts before consent, accept, withdraw, reaccept and no duplicate script insertion.
- Menu trigger now uses the site's restrained dark palette, retaining its size, focus handling and contrast.
- Bento headline and tiles have quick, sequential CSS entrance motion and a 2px pointer hover lift. No new dependencies, parallax or video added. Reduced-motion behaviour retained.
- Preference-panel buttons, links and inputs receive consistent visible keyboard focus.
- Added the confirmed brand icon to metadata. Pinned the compatible pnpm version so a default pnpm 12 install does not ignore lockfile overrides.
- Privacy copy documents persistent local preferences, opt-in script loading and manual 12-month enquiry deletion, without claiming automation.

## Measurement observed in production

Fresh browser: no GA, Clarity or OpenAI script, no cookies and no local-storage values before consent. After Allow all: configured GA `G-RG6BZ50XZY`, Clarity `wt02mqo6ya` and OpenAI SDK loaded. Observed `_ga`, `_ga_RG6BZ50XZY`, `_clck`, `_clsk`, `__oaiq_consent`, `__obref`; local storage contained the two Bear Media preferences and SDK `oaiq_consent`. Campaign labels are allowlisted and session storage is conditional on advertising consent. No Vercel Analytics component is mounted. Form values are not included in conversion events and Clarity masks the contact form.

Provider DPA links for Vercel and Resend return 200. No account-specific retention periods, backup deletion schedules or processing regions inferred from public terms.

## Validation

TypeScript, ESLint and production build passed. 74 pages generated. 51 sitemap/legal/system/404 route checks returned expected status codes. Homepage overflow checks passed at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px. At phone widths the hero has no video source. At 390px the six bento images total approximately 76 KB transferred in a local production build (not a Lighthouse score). Menu opening focuses Close, Escape restores Open; no page error observed in this flow. Malformed contact payloads returned 400 and cross-origin payload returned 403 without sending mail.

Production dependency audit: zero advisories. Full dependency audit: 55 advisories including development tooling (1 critical, 28 high, 21 moderate, 5 low); these require a separate targeted tooling update rather than an unreviewed forced upgrade. Ignored install scripts for ffmpeg-static, msw and unrs-resolver did not prevent lint/build.

## Needs Garry

Real ICO registration number when available. Confirm mailbox receipt of the single controlled production QA enquiry if submitted; browser acceptance alone cannot establish final mailbox delivery.

## Recommended next

1. Targeted development-tool dependency cleanup (Medium; no expected visitor performance change; no input needed).
2. Monitor enquiry spam before considering shared rate limiting (Low to monitor / Medium to implement; a shared service adds request latency; no input until abuse warrants it). The current Map only limits a warm server instance, not all Vercel instances; it is a supplementary layer alongside Turnstile/origin/honeypot/content checks, not a global quota. No paid database added without evidence of need.
3. Real-device mobile performance measurement (Low; measurement itself has no performance effect; optional Garry device feedback). Current transfer/overflow checks do not establish field LCP/INP.

## Follow-up production QA

Production deployment 0ab6ce5 passed the 51-route sweep and all nine homepage widths. A no-JavaScript check then reproduced a pre-hydration overflow: absolutely positioned carousel descendants escaped static viewport clipping until Embla set up its transforms. Gallery viewports now establish their own containing blocks with `position: relative`; this fixes the underlying cause without globally hiding overflow. The 48-page mobile sweep produced no runtime errors.

Turnstile rendered its response input on live production, but the automated browser did not receive a token. Submit correctly remained disabled. **No test enquiry was sent**; final Turnstile completion, Resend notification and confirmation receipt need a normal-browser check. These are not claimed as verified deliveries.
