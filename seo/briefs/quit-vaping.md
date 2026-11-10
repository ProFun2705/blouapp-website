# Brief: BLO-41 Refresh /quit-vaping for "how to quit vaping"

- **Issue:** BLO-41 (refresh, source:research)
- **Job type:** Refresh in place. Keep URL `/quit-vaping`. Keep title and meta (page already at position 7.5, only 8 impressions; the title already carries the keyword, so no snippet risk is taken).
- **Target file:** `src/app/quit-vaping/page.tsx` (plus `src/lib/staticRoutes.ts` lastModified, inbound links)
- **Primary keyword (QA):** "how to quit vaping". Secondary: quit vaping, stop vaping, best way to quit vaping, ways to quit vaping, quitting vaping cold turkey.
- **Intent:** informational how-to. Reader vapes nicotine and wants a plan today. Answer first, steps near the top.

## Why
651 words, flagged thin. Vaping support was confirmed by the owner on 2026-10-27, so the page can recommend Blou. The old FAQ says Blou is "built around cigarettes"; that must be corrected.

## Intent split (do not cannibalize)
- This page: the how-to plan.
- `/vape-withdrawal-symptoms`: symptoms. `/quit-vaping-timeline`: week-by-week timeline. Link out, do not duplicate.
- BLO-35 (app landing) and BLO-34 (`/nrt-for-vaping`) are not live: do not link them. Link `/nrt-and-quit-smoking-app` for NRT.

## Outline (target about 1,600 words)
1. H1 "How to quit vaping". TL;DR in header. `QuickAnswerBox`: pick a date, choose cold turkey or taper, plan for cues, get free help.
2. H2 "Step-by-step plan to quit vaping" (numbered, 6 steps): pick a date, choose how (cold turkey vs taper), clear devices and pods, name your triggers, plan a swap for each, line up support.
3. H2 "Cold turkey or tapering?" with a short table (fit, upside, downside). Neutral; no invented success rates.
4. `InlineAppCta` after the plan.
5. H2 "What withdrawal feels like" (short, sourced, links to `/vape-withdrawal-symptoms` and `/quit-vaping-timeline`).
6. H2 "When an urge hits" (timer, move, water, swap; link `/guides/cravings`).
7. H2 "Does nicotine replacement help?" Neutral: CDC says FDA approved seven medications for quitting smoking, none for vapes as a quit aid; talk to a clinician or pharmacist; link `/nrt-and-quit-smoking-app`.
8. H2 "Free help" (1-800-QUIT-NOW, Smokefree.gov, EX Program from Truth Initiative and Mayo Clinic, quitSTART).
9. H2 "Still smoking cigarettes too?" (dual use; link `/vaping-and-smoking-together`).
10. H2 "If you slip" (not a failure, restart).
11. FAQ (6): quit cold turkey, best way, harder than cigarettes, withdrawal, can an app help, does Blou work for vaping.
12. Sources, `EndAppCta`.

## Constraints (from seo/blou-profile.md)
- Blou: iPhone only, iOS 17+, pricing only via components (free trial, then a subscription). Features only: photo timeline, lung checks, SOS craving help, visual milestone timeline. No puff counting or device sync. No ratings, user counts, success rates, cure or treat claims, no Android app.
- Do not present vapes as a quit method. No health numbers beyond sourced ones. No em dashes, no AI filler, 7th-grade reading level.
- Sources (3-8): CDC quitting e-cigarettes page, NCI withdrawal fact sheet, MedlinePlus withdrawal, NHS (aim to stop vaping eventually), Truth Initiative EX Program, Smokefree.gov (do not fetch; cite home page only if needed).

## Links
- Out: `/vape-withdrawal-symptoms`, `/quit-vaping-timeline`, `/vaping-and-smoking-together`, `/guides/cravings`, `/nrt-and-quit-smoking-app`, `/quit-smoking-cold-turkey`, `/prepare-to-quit-smoking`, `/how-to-quit-smoking`, `/quit-smoking-app-for-iphone`.
- In (ensure at least 2 exist): `/vape-withdrawal-symptoms`, `/quit-vaping-timeline`, `/vaping-and-smoking-together`.
- Campaign: `article_quit-vaping`; `InlineAppCta` after the plan section.

## Schema
`buildArticleJsonLd` (MedicalWebPage) with citations, plus FAQ JSON-LD via `FaqSection`.

## QA acceptance
- `npm run build` passes.
- `npm run seo:qa -- /quit-vaping --keyword "how to quit vaping"` passes; rubric 34+/40, no critical fails.
