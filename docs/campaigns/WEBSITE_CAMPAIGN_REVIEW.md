# Website campaign review

Proposed URL: https://bear-media.com/try-the-websites
Review branch: codex/try-the-websites-campaign-review. No production release authorised.

## Existing work inspected
Main has the website-design-studio component and contact demo choice. The earlier codex/try-the-websites branch has a minimal page, absent from current main. This implementation finishes that route using existing project data and a shared contact component (the original /contact page remains a wrapper around the same flow). No homepage, services, prices or SEO routes changed. No AGENTS.md exists in the master checkout.

Supplied 1-Photo-1, 5-Photo-5, 6-Photo-6, 7-Photo-7 and 9-Photo-9 JPEGs converted to WebP without generative edits. Campaign artwork has responsive CSS framing. No promotional video supplied.

## Demo hosting blocker and fallback
All three repositories have codex/bear-media-return-journey branches with src/components/bear-media-demo-bar.tsx and CSS. Existing bars validate origins/paths and persist return destinations in sessionStorage, but their allowlist excludes /try-the-websites and their enquiry links point to /contact. Do not enable same-tab links yet.

The connected Vercel account only exposes bearmediamaster, colin-canines, v0-artist-portfolio and sagehousetherapy; none of the three demo hosting projects are accessible there. Campaign links therefore explicitly open a new tab. No duplicate bar was written or unverified demo deployment attempted.

HTTP checks: documented North and Still deployment URLs return 200; https://north-property-concept.vercel.app and https://still-scottish-retreat.vercel.app return 404. Form's https://form-training-club.vercel.app returns 200. North/Still destinations remain documented previews, not verified permanent aliases.

Before same-tab rollout, expose the demo hosting projects, extend the existing bars' allowedPaths with /try-the-websites, return style links to that path with demo + #enquiry, retain #website-design-studio for the back action, configure the exact campaign preview origin, deploy previews, then verify cross-page navigation, refresh, invalid redirects, menus and mobile safe areas. Preserve only supported campaign query labels; never arbitrary return URLs.

## Measurement
Uses existing consent-aware trackConversion and contact submission flow. Supported campaign labels: utm_campaign=nov2026_websites, utm_content=2012|update|mot|dodgy; sources/media use the existing allowlist. Attribution persistence uses the existing measurement consent. No personal form fields are sent to analytics. Optional current website is included in the owner message with fictional demo interest.
