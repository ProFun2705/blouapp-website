# Brief: BLO-65 Snippet pass for /guides/diarrhea

- Job type: snippet review (title/meta only). Existing guide /guides/diarrhea matches the intent. Do not create a new page and do not touch the body.
- Target files: SEO_TITLE_OVERRIDES in src/app/guides/[slug]/page.tsx (title), `summary` of the diarrhea entry in src/lib/blouGuides.ts (meta description), dateModified bump.
- Primary keyword: "diarrhea after quitting smoking" (first in title).
- Evidence: 539 impressions, 0 clicks, position 8.3 (GSC 2026-10-20..11-16). Last page change 2026-10-29.

## Title/meta policy
Risk note: position 8.3 and almost no clicks today, so downside is low; keep keyword first, keep URL. New title promises the answer: "Diarrhea after quitting smoking: usually 5–7 days" (NHS, already in the page's quick facts). New meta (120-160 chars) adds the doctor trigger: "usually stops in 5 to 7 days ... when to call a doctor (blood, dehydration, or over 7 days)".

## Constraints
No new health numbers (5 to 7 days and 7 days are already sourced on the page). No em dashes, no "free", no ratings. Body unchanged so effect can be read.

## QA acceptance
- Passes `npm run seo:qa -- /guides/diarrhea --keyword "diarrhea after quitting smoking"` and `npm run build`.
- Title <= 60 chars with brand suffix, meta 120-160 chars.
