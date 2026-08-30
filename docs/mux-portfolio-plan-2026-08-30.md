# Bear Media Mux portfolio plan — 30 August 2026

## Live library

Bear Media now has ten public-playback portfolio films in Mux. The first four support the C&G Developments proof-led case study; this phase adds six polished masters across Simply Sheds, Edinburgh Windows & Doors, Procoat and property/drone work.

| Film | Playback ID | Website placement |
| --- | --- | --- |
| Simply Sheds — Find Your Perfect Shed | `KaiydYBFRGcQgE2GUnXMnLiJIFNFRIm9LcZoGNlNyMk` | Simply Sheds featured film |
| Simply Sheds — Fully Custom | `x7OWXJce4JRbkGU8hE6sXIMgvaQg6X6oXv1toWY3sHE` | Simply Sheds film library |
| Simply Sheds — Rain or Shine | `g9bAM9sKiPSydltfBXJ6fwbZvtsruLs4FQno4cOMbYI` | Simply Sheds film library |
| Edinburgh Windows & Doors — Crafted by Hand | `NUPBs01nxDTJywH8ddiGJDPrlcG1v1hYqmOIY2I68p01Y` | Video-production landing page |
| Procoat — Another Home Transformed | `UzGH6W002u01m7twCjKAsmZ01YOE4UPfsQlVFasYcpDx0200` | Procoat featured film |
| Recent Property Marketing | `oUdiTOcEvBBgQJqDljVzNshrQos7ND9mQTyOvoxpLv4` | Video-production landing page |

## Delivery rules

- Keep deliberate-play portfolio films in Mux for adaptive streaming, consistent playback and viewer analytics.
- Keep decorative background loops on Vercel because they are small, muted and do not benefit enough from another player.
- Keep still photographs on Vercel with `next/image`; Mux Video is not the right service for still-image hosting.
- Use the strongest available source master. Mux improves delivery but does not invent detail missing from a low-resolution export.
- Add new films selectively: each should strengthen a service page or a client case study, not simply increase the asset count.
