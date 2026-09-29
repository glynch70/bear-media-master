# Bear Media editorial motion

This change refines the existing site. Photography, video sources, copy, typography, colour tokens, sections, links and layouts are preserved. No visual assets or dependencies were added or replaced.

## Motion rules

| Interaction | Treatment |
| --- | --- |
| Section copy | One 480ms opacity/12px entrance, observed once |
| Existing image containers | 620ms clip reveal from a 9% bottom inset |
| Project and journal cards | Fine-pointer-only tilt capped at 0.7 degrees; 2px lift |
| Existing primary buttons | 3px horizontal/2px vertical magnetic movement; restrained CSS spring release |
| Photography section | Native CSS scroll-linked drift of ±0.6%, desktop/fine pointers only |
| Galleries | Existing Embla physics, duration 24; remove slide dimming and shrinking; image drift capped at 0.6% |
| Project/article navigation | Native shared image/title transition, 360ms, using Next navigation |
| Existing numeric results | 650ms count from 85% to the exact published value; preserve suffixes and decimals |
| Mobile menu | 280–360ms entrance; 30ms item stagger; faster close |

CSS tokens live in `components/motion/motion.css`. `MotionSystem` handles one IntersectionObserver and one delegated fine-pointer listener; transforms do not trigger React renders. `MotionLink` preserves Next prefetch, keyboard/modified-click behaviour and Embla drag cancellation. There is no scroll replacement or animation library.

Content is visible in the initial HTML. Above-fold content is not hidden or delayed. Offscreen reveals play once, with no persistent animation layer. Website screenshots retain their full framing. Screen readers receive the static final counter value. Dates and non-numeric results remain static.

Reduced motion disables reveals, tilt, magnetic movement, native page transitions and scroll-linked drift. Carousel controls jump immediately. Changing the preference during the visit also cancels active enhancements. Unsupported View Transition/scroll-timeline APIs retain ordinary navigation and stationary images. Back navigation retains Next's normal history behaviour. Slow page transitions stop covering the UI after one second; navigation continues normally.

## Verification

Against main commit `a9a1c1c5f7e648fa1cdfd57fdba6e8d622ce599c`:

- Production webpack build: passed, 65 generated pages.
- TypeScript without ignored errors: passed.
- Focused ESLint check for the motion implementation and modified gallery/journal logic: passed.
- Chromium 131: 320, 375, 390, 430, 768 and 1440px widths on `/`, `/projects`, `/insights`, `/projects/cg-developments`, `/journal/my-process` and `/services`. No horizontal overflow, blank headings, permanently hidden reveal content or page errors in these 36 checks.
- Verified menu focus trapping, Escape and focus return; settled menu links visible within the mobile viewport.
- Carousel controls advance; dragging a project card does not navigate.
- Project and journal shared transitions finish; native transition ready promise succeeds; ordinary back navigation succeeds.
- With the native API removed, project navigation still succeeds.
- Counters finish at the published values and retain existing font size; reduced motion shows final values without active animations.
- Changing reduced motion while hovering removes the tilt immediately.
- Without JavaScript, all nine project cards and images remain visible.
- Inspected mobile homepage/menu/counters and desktop project screenshots.
- Dependency manifests, lockfile and all existing asset files are unchanged.

### Lighthouse mobile comparison

Same local production-build environment, Chromium 131, 390×844, Lighthouse 12.8.2 simulated mobile throttling. These are single runs, so use them as regression checks rather than proof of a repeatable speed gain.

| Page | Performance before → after | Accessibility before → after | Best practices | SEO | CLS before → after |
| --- | --- | --- | --- | --- | --- |
| Homepage | 73 → 75 | 96 → 100 | 100 → 100 | 100 → 100 | 0 → 0 |
| Projects | 94 → 95 | 96 → 100 | 100 → 100 | 100 → 100 | 0 → 0 |

Homepage LCP remains high in the throttled simulation (11.1s before / 10.1s after), with roughly 6.2MB transferred. This pass preserves the existing media; media-delivery optimisation is separate work. No claim is made about production scores or Safari/iOS-device testing.

## Reference direction

- https://21st.dev/blog/react-magnetic-cursor-effects — small transforms, one listener, no pointer effect on touch or reduced motion.
- https://docs.21st.dev/blog/react-scroll-animation-components — IntersectionObserver for entrances; native timelines for supported scroll effects.
- https://news.21st.dev/blog/animated-component-libraries — CSS/native motion before an extra runtime.

Final editorial review removed the previous continuous scroll-cue nudge, strong image scaling, carousel fading/shrinking and pulsing navigation markers. Existing visual elements remain in place.
