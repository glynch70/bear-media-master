# Bear Media media hosting audit — 30 August 2026

## Decision

- Use Mux for customer-facing films that need adaptive streaming, a polished player and playback analytics.
- Keep still images on Vercel and deliver them through `next/image`. Mux Video is not an image CDN and moving photographs there would add cost without restoring missing detail.
- Keep the two short, muted background loops on Vercel. They are small decorative assets, not films a visitor chooses to watch, and moving them would use Mux asset slots without improving their source resolution.

## Inventory

- 447 still-image files in `public`.
- 19 images have a 2000px-or-larger edge.
- 51 images have a longest edge between 1400px and 1999px.
- 377 images have a longest edge below 1400px.
- Three locally stored MP4 files.

The large number of sub-1400px source files is the main reason some full-screen sections can look soft. A CDN can resize and compress a source efficiently, but it cannot create genuine detail that is missing from the uploaded master.

## Video placement

| Asset | Purpose | Hosting decision | Status |
| --- | --- | --- | --- |
| C&G New Build Timeline | Customer-facing case-study film | Mux | Live; local structured-data URL updated to Mux HLS |
| C&G From Build to Home | Customer-facing vertical project film | Mux | Live |
| C&G Kitchen Extension | Customer-facing vertical project film | Mux | Live |
| C&G More Space for Family Life | Customer-facing vertical project film | Mux | Live |
| Simply Sheds — Find Your Perfect Shed | Customer-facing vertical project film | Mux | Added to the Simply Sheds case study |
| Simply Sheds — Fully Custom | Customer-facing vertical project film | Mux | Added to the Simply Sheds case study |
| Simply Sheds — Rain or Shine | Customer-facing vertical project film | Mux | Added to the Simply Sheds case study |
| Edinburgh Windows & Doors — Crafted by Hand | Customer-facing vertical project film | Mux | Added to the video-production landing page |
| Procoat — Another Home Transformed | Customer-facing vertical project film | Mux | Added to the Procoat case study |
| Recent Property Marketing | Customer-facing vertical drone/property film | Mux | Added to the video-production landing page |
| `hero-desktop.mp4` (1600×900, 10 seconds, 2.5 MB) | Muted decorative background | Vercel | Keep |
| `hero.mp4` (1280×720, 25 seconds, 2.5 MB) | Muted decorative drone background | Vercel | Keep |
| Legacy local C&G timeline MP4 (960×632, 104 seconds, 21.3 MB) | Previous direct-download fallback | No longer used by the live player | Leave in the repository for now; safe removal can be handled separately |

## Image improvements in this release

- Enabled explicit 85% and 90% responsive image quality levels in Next.js.
- Raised full-screen hero and case-study hero delivery to 90% quality.
- Raised galleries and project cards to 85% quality.
- Corrected mobile `sizes` hints for full-screen landscape images so portrait phones request enough source width for an `object-cover` crop.
- Replaced the soft homepage photography panel with a 1994×1548 hospitality interior.
- Replaced the soft drone panels with a 2000×1429 aerial image.
- Replaced the services hero with a 2048×1448 conference image.
- Replaced the homepage C&G project card with a 1837×2000 project image.
- Kept website screenshots on Vercel; the Midlothian Wildflowers masters are already 2400×2000 and are suitable for responsive web delivery.

## Sources that still need original masters

Priority order for future replacement:

1. The homepage background films if a sharper 4K or high-bitrate master exists. Mux will help delivery after upload, but only a better master will add detail.
2. Full-screen service and homepage photographs currently sourced from 1024–1200px social exports.
3. Older project-gallery images used on wide desktop case-study panels.
4. Team/about portraits if higher-resolution edited originals are available.

When originals are supplied, export photographs as high-quality WebP or AVIF at roughly 2400–3000px on the long edge, retain sensible colour and sharpening, and let Next.js create the smaller responsive versions.

## Cost guidance

Keeping photographs on Vercel avoids paying Mux Video for a job it is not designed to do. The ten deliberate-play project films are the high-value Mux assets. The two lightweight background loops remain ordinary site assets, so they do not consume streaming capacity or add unnecessary delivery cost.
