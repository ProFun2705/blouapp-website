# Brief: BLO-28 Refresh /quit-smoking-with-nicotine-patch

- **Issue:** BLO-28 (refresh, source:research, priority 2)
- **Job type:** Refresh in place. Keep the URL. Not a new page, and no separate "where to put" page.
- **Target file:** `src/app/quit-smoking-with-nicotine-patch/page.tsx` (rewrite on the pattern of `src/app/zyn-withdrawal/page.tsx` and `src/app/nicotine-patch-side-effects/page.tsx`).
- **Primary keyword:** "nicotine patch to quit smoking". Secondary: "using nicotine patches to quit smoking", "how to use nicotine patch", "where to put nicotine patch", "where is the best place to put a nicotine patch", "nicotine replacement patch", "quit smoking with nicotine patch", "nicotine patch cravings".
- **Campaign:** `article_quit-smoking-with-nicotine-patch` (keep).

## Why
Keyword Planner US 2026-10-27: "using nicotine patches to quit smoking" 12,100/mo (LOW, up 1.8x), "where to put nicotine patch" 4,400 (LOW), "nicotine replacement patch" 4,400. The page has 645 words, 4 FAQs, no Sources section, no GSC impressions, and the 2026-10-29 URL Inspection shows it as crawled, not indexed. It never says where to put the patch, which strength to use, or how long to use it. SERP for "where to put" is mostly scraped/spam pages, so a clear sourced answer has room.

## Reader and intent
An adult who smokes and has bought, or is about to buy, nicotine patches, and wants to know how to use them properly. Informational how-to with a bit of reassurance. The first answer must say: start on your quit day, one patch each morning on clean, dry, hairless skin on the upper body (upper arm, chest, shoulder or back), a new spot each day, strength by cigarettes per day (21 mg if more than 10, 14 mg if 10 or fewer), and a step-down over about 8–10 weeks (box label), with combo NRT for breakthrough cravings.

Must not become: a side-effects page (that is `/nicotine-patch-side-effects`; give a 3-line summary and link), a patch-vs-gum comparison (`/nicotine-patch-vs-gum`), or a dosing calculator (`/tools/nicotine-patch-plan`; link to it).

## Title/meta policy (change approved, low risk)
No impressions and not indexed, so nothing to lose.
- **Title:** "How to use a nicotine patch to quit smoking" (43 chars, 50 with " | Blou").
- **H1:** "How to use a nicotine patch to quit smoking".
- **Meta:** 140-160 chars: where to put it, which strength, how long, what to do about cravings.
- Keywords array: primary first, then the secondaries above.
- `MODIFIED` = 2026-11-03. Keep `PUBLISHED` 2026-05-09.

## Top of page
- `ArticleHeader` intro (2 sentences): the patch gives steady nicotine so withdrawal is milder; your job is placing it right, picking the strength, and handling cue cravings.
- `QuickAnswerBox` answer (2-4 sentences) as in "Reader and intent". 3 facts: placement + rotate (CDC); strength cut-off at 10 cigarettes a day (US label, CDC); bedtime removal if vivid dreams (CDC, US label).
- How-to: the steps section comes straight after the quick answer, before any background.

## Outline (H2s in query language)
1. **How to use a nicotine patch, step by step** (numbered list, HowTo schema). Start on quit day (US label). Put a new patch on each morning at the same time. Remove backing, press on for about 10 seconds, wash hands (label, MedlinePlus). Wear 16 or 24 hours, never more than 24, never two at once, don't cut it (label, CDC). Fold the old one sticky sides together and throw away out of reach of children and pets (CDC, label).
2. **Where to put a nicotine patch** (key new section). Clean, dry, hairless skin on the upper body: upper arm, upper chest, shoulder, back, inner arm (CDC); MedlinePlus also lists the hip. Avoid irritated, oily, scarred or broken skin. Different spot every day, don't reuse one more than once a week (CDC). Showering and bathing are fine (CDC, MedlinePlus). If it falls off, put on a new one (CDC, MedlinePlus). A small table "Good spots / Avoid" helps scanning. Do not claim one spot "absorbs best" (no source).
3. **Which nicotine patch strength to start with** (table). More than 10 cigarettes a day: 21 mg weeks 1–6, 14 mg weeks 7–8, 7 mg weeks 9–10. 10 or fewer: 14 mg for 6 weeks, then 7 mg for 2 weeks (NicoDerm CQ label). Note brands differ; follow your box. Link `/tools/nicotine-patch-plan`.
4. **How long to use nicotine patches.** 8–10 weeks on the US label; CDC: lower the dose typically after 8–12 weeks; MedlinePlus 6–20 weeks; NHS: use NRT at least 12 weeks or longer if needed. Talk to a doctor if you need it longer.
5. `InlineAppCta` here (after the first two useful sections is fine too; place it after section 3 or 4).
6. **Wearing the patch at night: sleep and vivid dreams.** 24h helps morning cravings (label); remove at bedtime if vivid dreams/poor sleep (CDC, label). Link `/guides/dreams-and-sleep` and `/nicotine-patch-side-effects`.
7. **Still craving on the patch?** Cue cravings are learned and still hit. CDC: heavy cravings may mean the dose is too low; patch can be combined with gum or lozenge for breakthrough cravings; NHS: two NRTs (slow patch + fast spray) can work well. Don't add a second patch unless a clinician says so. Quick craving plan (timer, move, water, one replacement action). Link `/combination-nrt-quit-smoking`, `/guides/cravings`.
8. **If you smoke while wearing the patch.** Honest both sides: MedlinePlus says don't smoke or use other nicotine while on it (overdose risk); CDC says if you slip you don't need to stop the patch, throw out the cigarettes and keep going. Overdose signs (nausea, vomiting, dizziness, weakness, rapid heartbeat): take it off, call a doctor or Poison Control 1-800-222-1222 (label, CDC). Link `/i-smoked-one-cigarette`. Warm tone.
9. **Side effects in brief, and who should ask a doctor first.** 3 bullets on common effects (skin redness, sleep, headache/nausea) + link to `/nicotine-patch-side-effects`. Ask a doctor before use (label/CDC): heart attack or serious heart rhythm problem recently, uncontrolled high blood pressure, adhesive allergy or skin conditions, under 18, pregnant or breastfeeding, taking prescription medicine for depression or asthma. Never tell anyone to stop a prescribed medicine.
10. **Where to get nicotine patches (and free help).** Sold over the counter at pharmacies and supermarkets (NHS). Free quit help: 1-800-QUIT-NOW, text QUITNOW to 333888 (CDC); many state quitlines offer free NRT, link `/quit-smoking-help` (don't promise specifics). UK: free local Stop Smoking Services (NHS).
11. FAQ, Sources, `EndAppCta`, related links.

Target ~1,500 words. Short paragraphs. `TableOfContents` with ids.

## FAQ (6-8, from the placement and how-to queries)
Where is the best place to put a nicotine patch? · Can I put a nicotine patch on my leg or stomach? (answer: labels and CDC say upper body; MedlinePlus also lists hip; follow your box) · Which strength nicotine patch should I use? · How long should you use nicotine patches to quit smoking? · Should I take the nicotine patch off at night? · Can I shower or swim with a nicotine patch? (shower/bath yes per CDC/MedlinePlus; swimming not addressed, say check your box and replace if it comes off) · Can you smoke while wearing a nicotine patch? · What if my nicotine patch falls off?
Match `faqItems` to `buildFaqJsonLd` JSON-LD.

## Product/factual constraints (from seo/blou-profile.md)
- Blou: quit smoking app for iPhone only, iOS 17+. Features only: photo timeline, lung (breath) checks, SOS craving help, every milestone visualized. Supports quitting vaping.
- Pricing only via the CTA components (`PRICING_CTA_NOTE`). Never say the app is free. "Free" only for the site's guides/tools and for quitline/NHS services.
- No ratings, user counts, success rates, cure/treat/diagnose claims, no Android availability, not a medical device, no "clinically proven".
- Every number (strengths, weeks, hours, 10 seconds, 4 days, phone numbers) needs a source in the page's Sources list. No efficacy percentages unless the writer opens and cites the source (Cochrane abstract was not readable at brief time; skip numbers rather than guess).
- No dosing advice beyond the label/CDC/NHS. Say "follow the directions on your box" and "ask a pharmacist".
- No em dashes; en dash only in number ranges. 7th-grade reading level (QA fails above grade 8). US spelling. No AI filler. Warm, not preachy; a slip is not failure.

## Sources (must use; Sources section with publisher names)
1. CDC, How to Use Nicotine Patches, https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-a-nicotine-patch.html (placement, rotation, 24h/bedtime, strength cut-off, 8–12 weeks, combo with gum/lozenge, slips, falls off, disposal, Poison Control, precautions, 1-800-QUIT-NOW, QUITNOW to 333888)
2. DailyMed (NLM), NicoDerm CQ Drug Facts label 2025, https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=93b2d1b9-83c1-40b5-b6af-90c38c8d6cef (start on quit day, step schedule, 10 seconds, 16/24h, not >24h, not two, not cut, ask a doctor before use, stop use if redness >4 days)
3. MedlinePlus, Nicotine Transdermal Patch, https://medlineplus.gov/druginfo/meds/a601084.html (sites incl. hip, 10 seconds, shower, 6–20 weeks, don't smoke on it, falls off, disposal/take-back)
4. NHS, Find the best stop-smoking products for you, https://www.nhs.uk/conditions/stop-smoking-treatments/ (at least 12 weeks, two NRTs together, sold at pharmacies/supermarkets, free Stop Smoking Services)
5. FDA, The relative risks of tobacco products, https://www.fda.gov/tobacco-products/health-effects-tobacco-use/relative-risks-tobacco-products (approved NRT is safe and effective) — optional.

## Links
- In (must link to this page; already from 9 pages): add a contextual link from `/guides/dreams-and-sleep` (in `src/lib/blouGuides.ts`, the patch section) and confirm `/nicotine-patch-side-effects` and `/tools/nicotine-patch-plan` still link with descriptive anchors (e.g. "how to use a nicotine patch").
- Out (required): `/tools/nicotine-patch-plan`, `/nicotine-patch-side-effects`, `/combination-nrt-quit-smoking`, `/nicotine-patch-vs-gum`, `/guides/dreams-and-sleep`, `/guides/cravings`, `/i-smoked-one-cigarette`, `/quit-smoking-help`, `/prepare-to-quit-smoking`.
- Conversion: `InlineAppCta` after the strength/how-long section, `EndAppCta` at the end, both `campaign={CAMPAIGN}`. CTA copy: patch does the steady nicotine, Blou's SOS craving help handles the moments, timeline shows smoke-free days.

## Assets
None required. A simple placement table is enough; no generated body/medical images.

## Schema
`buildArticleJsonLd` with `isMedical: true` (MedicalWebPage), `buildFaqJsonLd(faqItems)`, `buildHowToJsonLd` for the step list if the helper exists. Breadcrumbs as today. `staticRoutes.ts` entry exists; update its label if it holds the old title.

## QA acceptance
- `npm run build` passes (includes `seo-check`).
- `npm run seo:qa -- /quit-smoking-with-nicotine-patch --keyword "nicotine patch to quit smoking"` passes.
- Title ≤ 60 chars with the keyword; meta 120-160 chars mentioning where to put it.
- Quick answer covers placement, strength, duration in the first 4 sentences; steps appear before background.
- Has a "Where to put a nicotine patch" H2 and a strength table matching the label exactly.
- No unsourced numbers; Sources section present with the 4 required sources.
- No em dashes, grade ≤ 8, no prohibited Blou claims.
- 40-point rubric ≥ 34 with no critical fails.

## Risks
- Cannibalization with `/nicotine-patch-side-effects` (published 2026-10-15) on sleep/skin/"how long": keep those sections short here and link out; this page owns "how to use" and "where to put".
- Smoking-on-the-patch guidance differs between MedlinePlus and CDC; present both, don't pick one silently.
- Recheck indexing and impressions by December 1, 2026.
