# Brief: BLO-11 Snippet + top-section refresh for /guides/diarrhea

- **Issue:** BLO-11 (ctr-snippet, source:audit, priority 2)
- **Job type:** Snippet review + refresh of the top section and facts. Keep the URL. Not a new page.
- **Target file:** `src/lib/blouGuides.ts` (entry `slug: "diarrhea"`), plus a small change in `src/app/guides/[slug]/page.tsx` (title override + per-guide sources).
- **Primary keyword:** "diarrhea after quitting smoking". Secondary: "how long does diarrhea last after quitting smoking", "is diarrhea a symptom of nicotine withdrawal", "diarrhea after quitting vaping/nicotine", "nicotine gum diarrhea".
- **Campaign:** the template already uses `guide_diarrhea` for both CTAs; keep it.

## Why
GSC 2026-09-29..2026-10-26: 605 impressions, 2 clicks, CTR 0.33%, position 8.5 (prior 28 days: 34 impressions). The site's highest-impression page and almost no clicks. Meta description is 183 chars (`guide.summary`, cut off in results) and gives no duration. The title is a question that does not contain the exact phrase "diarrhea after quitting smoking". Inventory: 827 words, 3 FAQs, linked from 1 page (`/guides` only).

## Reader and intent
Someone who quit smoking (or nicotine) in the last days or weeks and has loose stools. Informational/troubleshooting, often anxious. First answer must say: how long it usually lasts, that it is not one of the classic withdrawal symptoms (constipation is the common bowel change), the likely real causes during a quit, and when to get help. The page must not become a general diarrhea article or scare people.

## SERP notes
Mostly forums (Reddit, quit forums), Healthline-style articles and NHS/MedlinePlus diarrhea pages. Gap: nobody gives a sourced duration plus the quit-specific causes (sugar-free gum sorbitol, NRT/varenicline side effects, more coffee, stress) in one place.

## Title/meta policy (change approved, low risk)
Position 8.5 with 0.33% CTR: the snippet is the problem, and there are almost no clicks to lose.
- **SEO title:** add `diarrhea: "Diarrhea after quitting smoking: how long it lasts"` to `SEO_TITLE_OVERRIDES` (renders with " | Blou", ≤ 60 chars).
- **H1 (`title`):** "Diarrhea after quitting smoking: how long does it last?" (QA round 1: `seo:qa` requires the exact keyword in the H1; same low-risk rationale as the title).
- **Meta (`summary`, also shown under the H1):** 140-155 chars, leads with a concrete duration and a reason to click. Direction: "usually clears in a few days and should stop within a week" + "why it happens when you quit, what helps, and when to call a doctor".

## Top of page
- `quickAnswer` (2-4 sentences): most diarrhea clears in a few days and usually within 5 to 7 days (NHS). It is not a typical nicotine withdrawal symptom; constipation is more common (Hajek 2003). Common quit-week causes. Red flags.
- `quickFacts` (3): duration with source; sugar-free gum/mints with sorbitol can cause it; NRT or varenicline can upset the stomach.
- `detail`: one sentence about tracking what changed (gum, coffee, NRT dose) and asking a pharmacist.

## Outline (`articleSections`)
1. **Is diarrhea a nicotine withdrawal symptom?** Short honest answer: NHS withdrawal list does not include it; constipation is the documented bowel change (1 in 6 quitters, Hajek 2003). So look for another cause.
2. **Why you might get diarrhea after quitting** bullets: sugar-free gum and mints (sorbitol, BMJ 2008), more coffee, stop-smoking medicines (varenicline lists diarrhea as common, NHS; nicotine gum/lozenges can upset the stomach, keep it non-numeric), a stomach bug happening at the same time, stress.
3. **How long it usually lasts:** NHS 5 to 7 days for diarrhoea; MedlinePlus acute about 1-2 days; at least 4 weeks = chronic, see a doctor.
4. **What helps** (keep existing hydration/food advice, align with NHS: fluids in small sips, oral rehydration from a pharmacist, avoid fatty/spicy food, fruit juice, fizzy drinks; swap sugar-free gum for sugar-free-sorbitol-free options or NRT as directed; don't stop prescribed medicine on your own, talk to the pharmacist).
5. **When to get medical help:** NHS red flags: blood in stool or bleeding from the bottom, can't keep fluids down, still dehydrated after rehydration sachets, diarrhea more than 7 days. Emergency: blood in vomit, sudden severe tummy pain, confusion. Replace the old "beyond 2 weeks" line (conflicts with NHS).

Keep `typicalDuration`, `commonTriggers`, `whenToSeekCare`, `whatToExpectNext` but rewrite them to match the sourced numbers (7 days, not 2 weeks).

## FAQ (5-6)
How long does diarrhea last after quitting smoking? · Is diarrhea a symptom of nicotine withdrawal? · Can nicotine gum or lozenges cause diarrhea? · Can Chantix (varenicline) cause diarrhea? · Can quitting vaping or nicotine pouches cause diarrhea? · When should I worry about diarrhea after quitting?

## Product/factual constraints (from seo/blou-profile.md)
- iPhone only, iOS 17+. Pricing only via the CTA components (`PRICING_CTA_NOTE`). Never say the app is free.
- Features only: photo timeline, lung checks, SOS craving help, every milestone visualized. Blou supports quitting vaping.
- No ratings, user counts, success rates, no cure/treat/diagnose claims, no Android availability, not a medical device.
- Every number needs a source in the page's Sources list. No em dashes. 7th-grade reading level. No AI filler. US spelling ("diarrhea").
- Never tell someone to stop prescribed medication; say "talk to your pharmacist or doctor".

## Sources (must use; per-guide `references`)
Add an optional `references` field to `BlouGuide` and have the template use `guide.references ?? references` (visible list and JSON-LD `citation`). For this guide:
1. NHS: Diarrhoea and vomiting, https://www.nhs.uk/conditions/diarrhoea-and-vomiting/ (5 to 7 days; red flags; self-care)
2. MedlinePlus: Diarrhea, https://medlineplus.gov/diarrhea.html (acute 1-2 days; chronic ≥ 4 weeks; medicines can cause it)
3. NHS Better Health: Managing nicotine withdrawal symptoms, https://www.nhs.uk/better-health/quit-smoking/staying-smoke-free/managing-nicotine-withdrawal-symptoms (symptom list, 3 to 4 weeks)
4. Hajek P et al. Stopping smoking can cause constipation. Addiction 2003, https://pubmed.ncbi.nlm.nih.gov/14616182/ (1 in 6)
5. NHS: Side effects of varenicline, https://www.nhs.uk/medicines/varenicline/side-effects-of-varenicline/ (diarrhoea listed as common)
6. Bauditz J et al. Severe weight loss caused by chewing gum. BMJ 2008, https://pmc.ncbi.nlm.nih.gov/articles/PMC2190242/ (sorbitol laxative effect)
7. MedlinePlus: Nicotine lozenges, https://medlineplus.gov/druginfo/meds/a606019.html (heartburn; too many at once can cause nausea). Added in QA round 2.
8. Keep the CDC Benefits of Quitting link as general context.

## Links
- In (add `"diarrhea"` to `relatedSlugs`): `/guides/constipation`, `/guides/bloating-and-gas`, `/guides/nausea`. Optionally a link from `/nicotine-withdrawal-symptoms` symptom list.
- Out: keep `constipation`, `nausea`, `what-happens-after-3-days`, `anxiety`; add `bloating-and-gas` and `cravings` (SOS help) in `relatedSlugs`.
- Conversion: template `InlineAppCta` at the section midpoint + `EndAppCta`; no change needed.

## Schema
Template already emits MedicalWebPage (`medicalConditionName`), FAQPage (via `FaqSection`), Speakable, Breadcrumb. Citation list must reflect the new per-guide references. Bump `dateModified` and set `dateReviewed` to 2026-10-29.

## QA acceptance
- `npm run build` passes (includes `seo-check`).
- `npm run seo:qa -- /guides/diarrhea --keyword "diarrhea after quitting smoking"` passes.
- Rendered `<title>` ≤ 60 chars containing "diarrhea after quitting smoking"; meta description 140-155 chars with a duration.
- Duration and red-flag statements match NHS; no leftover "2 weeks" thresholds.
- Page is linked from at least 3 guides.
- 40-point rubric ≥ 34 with no critical fails.

## Risks
- Title change on a position-8 page: low risk (2 clicks). Recheck CTR 3 weeks after publish (by November 19, 2026).
- Template change touches every guide: `guide.references ?? references` keeps others identical. Verify one other guide still renders the default list.
