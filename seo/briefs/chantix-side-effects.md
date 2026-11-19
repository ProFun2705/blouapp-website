# Brief: BLO-60 New page /chantix-side-effects

- **Issue:** BLO-60 (new-content, source:research, priority 2)
- **Job type:** New page. No page covers the side-effect intent. `/quit-smoking-with-varenicline` (BLO-31 refresh) covers "Chantix to quit smoking"; this page must not duplicate it, and links to it.
- **Target file:** `src/app/chantix-side-effects/page.tsx`, modeled on `src/app/nicotine-patch-side-effects/page.tsx` (same structure: SOURCES array, faqItems, `buildFaqJsonLd`).
- **Primary keyword:** "chantix side effects". Secondary: "side effects of chantix", "chantix side effects weight loss", "long term side effects of chantix", "side effects after stopping chantix", "chantix nausea", "chantix dreams", "varenicline side effects".
- **Campaign:** `article_chantix-side-effects`. Path `/chantix-side-effects`.

## Why
Keyword Planner US 2026-11-16: "chantix side effects" 12,100/mo (LOW competition), "long term side effects of chantix" 260, "chantix side effects weight loss" 170, "side effects after stopping chantix" 140. Only `/quit-smoking-with-varenicline` mentions the drug, for another intent. Readers are on or about to start Chantix, so they are mid-quit and anxious.

## Reader and intent
Informational, troubleshooting, medical (YMYL). "Which side effects are normal, which are serious, what do I do, how long do they last." First answer must say: the common ones are nausea, trouble sleeping or vivid dreams, headache, constipation or gas, and they are usually managed with the prescriber (take with food and a full glass of water; the prescriber can lower a dose). Serious but rare: mood or behavior changes, heart or stroke symptoms, seizures, allergic or skin reactions; stop and call the doctor or get emergency help. Never tell anyone to stop or change a prescription on their own except where the sources say to stop and get help for serious signs.

Must not become: a dosing guide, a "should I take Chantix" decision page (link out), a Blou treats side effects pitch.

## Title/meta policy (new page)
- **Title (<=60):** "Chantix side effects: what is common and what is not" (51)
- **H1:** "Chantix (varenicline) side effects: what to expect"
- **Meta (120-160):** common effects (nausea, sleep, dreams), serious signs, when to call a doctor, how long it lasts, and the 12 week course.
- `PUBLISHED`/`MODIFIED` = 2026-11-19. Add to `staticRoutes.ts` (group "Methods and medication", label "Chantix side effects").

## Top of page
- `ArticleHeader` intro (2 sentences): Chantix is the brand name of varenicline, a prescription quit-smoking pill. This page covers common side effects, serious warning signs and what to ask your prescriber.
- `QuickAnswerBox`: 2-4 sentences per "Reader and intent". Facts: common effects (MedlinePlus, CDC); take after eating with a full glass of water (CDC, MedlinePlus); stop and call your doctor right away for mood or behavior changes, chest pain, seizures, allergic or skin reactions (CDC, MedlinePlus).

## Outline (H2s in query language)
1. **Common Chantix side effects.** Table: effect, what to try, source. Nausea or vomiting (take with food and a full glass of water; ask about a lower dose if it persists, CDC), trouble sleeping and vivid dreams or nightmares (prescriber may lower the evening dose, CDC), constipation, gas, diarrhea, heartburn, headache, bad taste, dry mouth, changes in appetite, tiredness, sleepiness or dizziness (MedlinePlus, CDC), abnormal menstrual cycles (MedlinePlus). Headache and heartburn self-care tips from NHS (rest, fluids, avoid rich food before bed). Dizziness: sit or lie down (NHS).
2. `InlineAppCta` after section 1 (cravings and routine only).
3. **Chantix nausea and sleep: what helps.** Take after eating, full glass of water (8 oz), same times each day (MedlinePlus, CDC). Link `/guides/dreams-and-sleep`, `/guides/insomnia`. Say "ask your prescriber about lowering the dose", never "lower it yourself".
4. **Serious Chantix side effects: stop and get help.** Mood and behavior: hostility, agitation, depressed mood, suicidal thoughts, new or worsening anxiety, mania, hallucinations, confusion; can appear early, after several weeks, or after stopping (MedlinePlus); occurred in people who kept smoking too, so the cause can be unclear; stop and call right away (CDC, MedlinePlus); NHS: call a doctor or 111 for irritability, aggression, anxiety, depression, palpitations; 999/A&E for self-harm thoughts, seizure, stroke signs, chest pain. Heart and stroke: chest pain, shortness of breath, one-sided weakness, slow speech (MedlinePlus, CDC); MedlinePlus says clinical studies showed higher rates of heart attack and stroke in people taking varenicline, smoking raises these risks too, discuss with your doctor. Seizures, sleepwalking, allergic or skin reactions (swelling, rash, blistering) (MedlinePlus, NHS). Frame as "tell a family member the signs" (MedlinePlus). No frequency numbers.
5. **Chantix, weight, and appetite.** Only what sources say: appetite changes listed as a side effect (MedlinePlus). No weight-loss or gain claims or percentages. Link `/quit-smoking-without-gaining-weight`. Honest: "weight loss" is a common search; sources list appetite change, not a weight-loss effect.
6. **Alcohol, driving and daily life.** Varenicline can increase alcohol's effects, ask your doctor (MedlinePlus); do not drive or use machinery until you know how it affects you (CDC, MedlinePlus). Link `/alcohol-and-quitting-smoking`, `/driving-and-quitting-smoking`.
7. **How long do Chantix side effects last? Long-term and after stopping.** Course is usually 12 weeks, may be extended another 12 weeks if you quit (MedlinePlus, CDC). Mood symptoms can start after stopping the drug (MedlinePlus). Be honest: the sources do not give a time frame for each effect or "long-term" effects; say so and tell the reader to ask the prescriber. Distinguish quitting symptoms (depression or anxiety from quitting can occur; get help if it lasts more than 2 weeks or gets worse, CDC) from drug effects; link `/nicotine-withdrawal-symptoms`, `/quit-smoking-with-anxiety`, `/quit-smoking-with-depression`.
8. **Who should talk to a doctor first.** History of depression, bipolar, schizophrenia or other mental illness; epilepsy or seizures; heart or blood vessel disease; severe kidney problems (dose may need lowering); pregnancy or breastfeeding (watch baby for seizures, vomiting, MedlinePlus); under 18 (CDC, MedlinePlus).
9. **Missed dose and overdose.** Missed dose: take when you remember, skip if close to the next, never double up (CDC, MedlinePlus). Poison Control 1-800-222-1222 (CDC). Short.
10. **Chantix side effects vs other options.** Two or three sentences only, link `/quit-smoking-medication`, `/quit-smoking-with-bupropion`, `/quit-smoking-with-nicotine-patch`, `/nicotine-patch-side-effects`. No efficacy numbers.
11. **Support while you take it:** free coaching 1-800-QUIT-NOW, text QUITNOW to 333888 (CDC). Link `/quit-smoking-help`.
12. FAQ, Sources, `EndAppCta`, `RelatedGuides`.

Target ~1,500-1,800 words. `TableOfContents`.

## FAQ (6-8, from the cluster)
What are the most common Chantix side effects? · How long do Chantix side effects last? · Does Chantix cause weight loss? · What are the long-term side effects of Chantix? · What happens when you stop taking Chantix? · Can you drink alcohol on Chantix? · Does Chantix cause vivid dreams? · When should I call my doctor about Chantix?
Answers use only the sourced facts above; "weight loss" and "long-term" answers state what the sources say and do not say. Match `faqItems` to `buildFaqJsonLd`.

## Product/factual constraints (seo/blou-profile.md)
- Blou: quit smoking app for iPhone only, iOS 17+. Features only: photo timeline, lung (breath) checks, SOS craving help, visual milestone timeline. Supports quitting vaping.
- Pricing only via CTA components. Never say the app is free. "Free" only for site guides and the quitline.
- No ratings, user counts, success rates, cure/treat/diagnose claims, no Android app, not a medical device, not "clinically proven".
- Blou must not be said to help with, reduce or treat side effects. Position only for cravings, routine and seeing progress alongside the medicine.
- Every number (12 weeks, 12-week extension, 8 oz, 1-800 numbers, 2 weeks) needs a source in the Sources list. No percentages, no "1 in X" frequencies.
- No dosing advice. Do not list pill strengths or the titration schedule. No telling anyone to start, stop or change a prescription, apart from "stop and call right away for the serious signs" exactly as CDC, MedlinePlus and NHS say.
- Do not mention the 2016 FDA boxed warning change or EAGLES (sources not reachable). Do not say Chantix is unsafe or safe.
- No em dashes (en dash only in number ranges). Grade <=8. US spelling ("diarrhea", not "diarrhoea"; use US names, 911 for emergencies; NHS 111/999 only attributed to NHS or omitted). No AI filler. Warm, not scary.

## Sources (use these; list publisher and URL)
1. CDC, How to Use Varenicline, https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-varenicline.html (common effects, nausea tip, prescriber may lower evening dose, mood/behavior stop and call, heart symptoms, driving caution, precautions, 12 weeks, missed dose, Poison Control, quitline numbers, depression/anxiety from quitting 2 weeks)
2. MedlinePlus, Varenicline, https://medlineplus.gov/druginfo/meds/a606024.html (full side effect lists, serious signs, neuropsychiatric, heart/stroke study statement, seizures, alcohol, driving, 12 + 12 weeks, missed dose, breastfeeding)
3. NHS, Side effects of varenicline, https://www.nhs.uk/medicines/varenicline/side-effects-of-varenicline/ (self-care tips, when to call a doctor or emergency, anaphylaxis signs)
4. NHS, Varenicline for treating tobacco addiction (Champix), already linked on `/quit-smoking-with-varenicline` (use only if reachable; otherwise skip). Do not cite the NHS "varenicline-champix" side-effects URL (404).
5. HHS Surgeon General 2020 cessation report (already on the varenicline page), only if the writer needs a general medication statement.

## Links
- In (edit these pages to link here): `/quit-smoking-with-varenicline` (side-effects section), `/quit-smoking-medication` (varenicline row), `/guides/dreams-and-sleep` (Chantix dreams tip). Optional: `/quit-smoking-with-bupropion`, `/nicotine-patch-side-effects`.
- Out (required): `/quit-smoking-with-varenicline`, `/quit-smoking-medication`, `/quit-smoking-with-bupropion`, `/nicotine-patch-side-effects`, `/guides/dreams-and-sleep`, `/guides/insomnia`, `/nicotine-withdrawal-symptoms`, `/quit-smoking-with-anxiety`, `/quit-smoking-with-depression`, `/quit-smoking-without-gaining-weight`, `/alcohol-and-quitting-smoking`, `/quit-smoking-help`. Verify each exists before linking.
- Conversion: `InlineAppCta` after the common side effects table, `EndAppCta` at end, both `campaign={CAMPAIGN}`. CTA copy: Blou's SOS craving help for urge moments and the timeline for smoke-free days; not for side effects.

## Assets
None. One table (common effects).

## Schema
`buildArticleJsonLd` with `isMedical: true`, `buildFaqJsonLd(faqItems)`, Breadcrumbs.

## QA acceptance
- `npm run build` passes (includes `seo-check`).
- `npm run seo:qa -- /chantix-side-effects --keyword "chantix side effects"` passes.
- Title <=60 chars; meta 120-160; keyword in title, H1 and first 100 words.
- Quick answer covers common effects, take-with-food tip, and stop-and-call serious signs in the first 4 sentences.
- No dosing, no percentages or unsourced numbers, no start/stop advice beyond the sources, no Blou treats-side-effects claim.
- No em dashes, grade <=8, no prohibited Blou claims, 3+ inbound links added.
- 40-point rubric >= 34 with no critical fails.

## Risks
- YMYL: reading as medical advice. Keep "ask your prescriber" framing.
- Sources do not give long-term or weight-loss data: say so openly instead of guessing.
- Recheck impressions for "chantix side effects" by December 17, 2026.
