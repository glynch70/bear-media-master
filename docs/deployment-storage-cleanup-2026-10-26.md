# Deployment storage cleanup — 26 October 2026

## Scope

Remove three unused files from `public/` to reduce future deployment output by
21,377,304 bytes (21.38 MB), from 153,746,416 to 132,369,112 bytes of public assets.
These are source asset totals, not a measurement of Vercel's billed storage.

| Removed file | Bytes | Reason |
| --- | ---: | --- |
| `assets/project-gallery/cg-developments-new-build-timeline.mp4` | 21,344,943 | The C&G player and structured data use the Mux source in `lib/projects.ts`. The August media audit identified this local file as a legacy fallback eligible for separate removal. |
| `MASTER-V0-PROMPT.md.rtf` | 31,160 | Internal planning document with no site references; it should not be a public website asset. |
| `WEBSITE-BLUEPRINT.md.rtf` | 1,201 | Internal planning document with no site references. |

The original files remain recoverable from the parent Git commit. Their former
direct public URLs will no longer serve these files in new deployments. No source
references to the deleted filenames were found, but external bookmarks cannot be
checked from this repository.

## Preserved dependencies

- `hero-desktop.mp4`: homepage and redesign backgrounds.
- `hero.mp4`: homepage call-to-action background.
- `hero-mobile-new.mp4`: redesign mobile background.
- C&G timeline poster, Mux playback ID, player and video structured data.
- All other photographs, public asset aliases, application routes and redirects.
- The separate `app/Public/` collection: removing source-only files is not a
  confirmed deployment-storage saving, so it is outside this cleanup.

## Deployment handling

Review and merge this change before the smaller output reaches production.
Existing retained Vercel deployments will not shrink when this commit is deployed.
No deployment, project, domain, retention setting or hosting plan is deleted or
changed here. Exact team/project storage attribution remains unverified because
the connected Vercel API returned no projects and could not resolve the project
linked by the successful GitHub deployment status.
