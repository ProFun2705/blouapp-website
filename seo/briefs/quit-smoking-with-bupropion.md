# Brief: BLO-29 Refresh /quit-smoking-with-bupropion

- **Issue:** BLO-29 (refresh, source:research, priority 2)
- **Job type:** Refresh in place. Keep the URL. Not a new page.
- **Target file:** `src/app/quit-smoking-with-bupropion/page.tsx` (rewrite on the pattern of `src/app/zyn-withdrawal/page.tsx` and the refreshed `src/app/quit-smoking-with-nicotine-patch/page.tsx`).
- **Primary keyword:** "wellbutrin for quitting smoking". Secondary: "wellbutrin to stop smoking", "bupropion for smoking cessation", "bupropion stop smoking", "wellbutrin and smoking", "bupropion quit smoking dosage", "zyban", "bupropion and nicotine patch".
- **Campaign:** `article_quit-smoking-with-bupropion` (keep).

## Why
Keyword Planner US 2026-10-27: "wellbutrin for quitting smoking" / "wellbutrin to stop smoking" 4,400/mo (LOW, up 1.2x); "bupropion for smoking cessation" 2,400 (LOW, up 1.5x); "wellbutrin and smoking" 1,300; "bupropion quit smoking dosage" 480. The page has 502 words (inventory: thin), 0 GSC impressions, "Wellbutrin" not in title or H1, only 2 sources, and no timing, schedule or side-effect detail. The 2026-10-29 audit lists it as not indexed. SERP is weak (scraped pages, an old news story).

## Reader and intent
An adult who smokes and has heard Wellbutrin can help, or was just prescribed it (sometimes already taking it for depression). Informational with a decision angle: "Does Wellbutrin help me quit, how is it taken, is it safe for me, how does it compare?" The first answer must say: bupropion (brand Wellbutrin; Zyban was the stop-smoking brand) is a nicotine-free prescription pill that cuts cravings and withdrawal; you start it while still smoking, 1–2 weeks before your quit day (CDC; the label says begin one week before); the usual course is about 7–12 weeks (label; CDC says most people take it 12 weeks); a doctor decides if it is safe for you, especially if you have had seizures or an eating disorder.

Must not become: a dosing guide that tells people what to take (always "your prescriber sets the dose"), a depression treatment page (link `/quit-smoking-with-depression`), or a varenicline page (short comparison, link out).

## Title/meta policy (change approved, low risk)
0 impressions and not indexed, so nothing to lose.
- **Title:** "Wellbutrin (bupropion) for quitting smoking" (43 chars).
- **H1:** "Wellbutrin (bupropion) for quitting smoking: how it works".
- **Meta:** 140-160 chars covering: prescription, start 1–2 weeks before quit day, 12-week course, side effects, combining with the patch.
- Keywords array: primary first, then secondaries.
- `MODIFIED` = 2026-11-05. Keep `PUBLISHED` 2026-05-13.
- Update the `staticRoutes.ts` label to "Wellbutrin (bupropion) for quitting smoking".

## Top of page
- `ArticleHeader` intro (2 sentences): Wellbutrin is the same medicine (bupropion) once sold as Zyban to help people stop smoking; this page covers how it is used for quitting, what to expect, and what to ask your doctor.
- `QuickAnswerBox` answer as in "Reader and intent" (2-4 sentences). 3 facts: needs a prescription, no nicotine (CDC); start while still smoking, quit day within the first 1–2 weeks (label, CDC); stop and call your doctor if mood or behavior changes (CDC, label).

## Outline (H2s in query language)
1. **Is Wellbutrin the same as Zyban?** Same active ingredient (label boxed warning text: SR tablets contain the same ingredient as Wellbutrin, Wellbutrin SR, Wellbutrin XL). Zyban brand is listed as discontinued (MedlinePlus); generic bupropion SR is used for quitting (label, CDC). If you already take Wellbutrin for depression, don't add a second bupropion product; tell your doctor you want to quit (CDC: "already using bupropion" is a precaution).
2. **How bupropion helps you quit.** No nicotine; reduces cravings and withdrawal symptoms (NHS nicotine-free medicines page; CDC). Pros from CDC: may delay weight gain, may help if you have depression. Link `/quit-smoking-without-nrt`, `/quit-smoking-without-gaining-weight`.
3. **How to take Wellbutrin to quit smoking: week by week** (table, HowTo-like). Rows: Before quit day (start while still smoking; label: about 1 week to reach steady blood levels; CDC: 1–2 weeks before), Days 1–3 (one 150 mg tablet a day), Day 4 on (one 150 mg tablet twice a day, at least 8 hours apart, max 300 mg a day, label; CDC words it as "days 3 until the end"), Quit day (within the first 2 weeks, label), Weeks 7–12 (label: continue 7–12 weeks; CDC: most people 12 weeks), After 12 weeks (doctor decides on longer use, label/CDC). Lead-in line: "This is the label schedule your prescriber works from, not a plan to follow on your own." Plus tips: swallow whole, with or without food (label, CDC); take the second dose early, not at bedtime, if sleep is a problem (CDC); missed dose: CDC vs MedlinePlus advice, say "follow your pharmacist's instructions; never double up".
4. `InlineAppCta` after section 3.
5. **Side effects of bupropion.** Common: trouble sleeping, dry mouth, dizziness, nausea, constipation, anxiety (label most common list, CDC, MedlinePlus). No percentages. Serious: seizures (CDC: about 1 in 1,000), mood or behavior changes, suicidal thoughts (stop and call your doctor, CDC; label), allergic reaction signs (MedlinePlus: get help), blood pressure rise (MedlinePlus, label). Call 911 for emergencies; Poison Control 1-800-222-1222 for overdose (CDC, MedlinePlus).
6. **Who should not take Wellbutrin to quit.** Seizures, bulimia or anorexia, suddenly stopping alcohol or sedatives, MAOI in the last 14 days, already taking another bupropion product, liver disease, pregnant/breastfeeding, under 18 (label contraindications, CDC precautions). Neutral, "ask your doctor". Never tell anyone to stop a prescribed medicine.
7. **Can you smoke while taking Wellbutrin?** Yes at first: the label says start while still smoking; set a quit date in the first 2 weeks. After the quit date, a slip isn't a reason to stop the medicine on your own; talk to your doctor and keep going. If you haven't quit by 7–12 weeks, the label says it's unlikely in that attempt; talk to your doctor about another approach (warm framing, link `/trying-to-quit-smoking-again`). Alcohol: limit or avoid (CDC; MedlinePlus).
8. **Wellbutrin with a nicotine patch.** Can be combined under a doctor's care (CDC); label: combination may be prescribed, monitor blood pressure, especially with NRT (label, MedlinePlus). Link `/quit-smoking-with-nicotine-patch`, `/combination-nrt-quit-smoking`.
9. **Wellbutrin vs Chantix vs nicotine replacement** (table: how it works, prescription, start timing, typical length, main side effects). Bupropion row from sources above. Varenicline and NRT rows only with facts already sourced on `/quit-smoking-with-varenicline` and `/quit-smoking-with-nicotine-patch` (reuse their sources: CDC how-to pages). No efficacy percentages. Link `/quit-smoking-with-varenicline`.
10. **Getting a prescription and free support.** Ask your doctor or pharmacist; free coaching 1-800-QUIT-NOW, text QUITNOW to 333888 (CDC). Link `/quit-smoking-help`, `/prepare-to-quit-smoking`.
11. FAQ, Sources, `EndAppCta`, related links.

Target ~1,400–1,600 words. Short paragraphs. `TableOfContents` with ids.

## FAQ (6-8)
Does Wellbutrin help you quit smoking? · Is Wellbutrin the same as Zyban? · How long before Wellbutrin works for smoking? (start ~1 week before; steady levels after about a week, label) · How long do you take bupropion to quit smoking? · Can you smoke while taking Wellbutrin? · Can you use a nicotine patch with Wellbutrin? · What are the side effects of Wellbutrin for quitting smoking? · Can I take Wellbutrin if I drink alcohol?
Match `faqItems` to `buildFaqJsonLd`.

## Product/factual constraints (from seo/blou-profile.md)
- Blou: quit smoking app for iPhone only, iOS 17+. Features only: photo timeline, lung (breath) checks, SOS craving help, every milestone visualized. Supports quitting vaping.
- Pricing only via CTA components (`PRICING_CTA_NOTE`). Never say the app is free. "Free" only for the site's guides/tools and quitline services.
- No ratings, user counts, success rates, cure/treat/diagnose claims, no Android availability, not a medical device, no "clinically proven".
- Every number (150 mg, 300 mg, 8 hours, 3 days, 1–2 weeks, 7–12 weeks, 14 days, 1 in 1,000, phone numbers) needs a source in the Sources list.
- No dosing advice beyond the label/CDC; frame the schedule as "what your prescriber typically follows". Always "ask your doctor or pharmacist". Never suggest starting, stopping or changing a prescription.
- Do not mention the 2016 FDA boxed-warning change or the EAGLES trial (sources not reachable at brief time). Do not claim a boxed warning was removed; the current generic label still has the antidepressant boxed warning.
- No efficacy percentages.
- No em dashes; en dash only in number ranges. 7th-grade reading level (QA fails above grade 8). US spelling. No AI filler. Warm, not preachy; a slip is not failure.

## Sources (must use; Sources section with publisher names)
1. CDC, How to Use Bupropion SR, https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/quit-smoking-medications/how-to-use-quit-smoking-medicines/how-to-use-bupropion-sr.html (prescription, no nicotine, 1–2 weeks before quit date, days 1–3 one tablet then two 8h apart, 12 weeks, missed dose, bedtime, seizures 1 in 1,000, mood changes, precautions, combine with patch under doctor care, alcohol, weight gain delay, 1-800-QUIT-NOW, QUITNOW to 333888, Poison Control)
2. DailyMed (NLM), Bupropion hydrochloride SR tablets label (Teva, updated September 30, 2025), https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a591e33a-52f0-41c8-a00b-4a1afcc3dc4c (indication, begin one week before quit day while still smoking, quit date within first 2 weeks, 150 mg x3 days then 150 mg twice daily ≥8 h, max 300 mg, 7–12 weeks, longer per patient, combination with nicotine patch + BP monitoring, contraindications incl. MAOI within 14 days, most common adverse reactions, neuropsychiatric events, same ingredient as Wellbutrin)
3. MedlinePlus, Bupropion, https://medlineplus.gov/druginfo/meds/a695033.html (brand names incl. Wellbutrin, Zyban discontinued, side effects, blood pressure esp. with NRT, allergic reaction signs, alcohol, missed dose)
4. NHS, Quit smoking with nicotine-free medicines, https://www.nhs.uk/better-health/quit-smoking/ready-to-quit-smoking/quit-with-nicotine-free-medicines/ (bupropion reduces cravings and withdrawal; originally an antidepressant)
5. CDC How to use varenicline and How to use a nicotine patch pages for the comparison table (only facts already used on our varenicline/patch pages).

## Links
- In (already from 6 pages incl. varenicline, depression, anxiety, prepare): add contextual links from `/combination-nrt-quit-smoking` and `/quit-smoking-without-nrt` with the anchor "Wellbutrin (bupropion)" or similar.
- Out (required): `/quit-smoking-with-varenicline`, `/quit-smoking-with-nicotine-patch`, `/combination-nrt-quit-smoking`, `/quit-smoking-without-nrt`, `/quit-smoking-with-depression`, `/quit-smoking-without-gaining-weight`, `/trying-to-quit-smoking-again`, `/quit-smoking-help`, `/prepare-to-quit-smoking`, `/guides/insomnia`.
- Conversion: `InlineAppCta` after the week-by-week section, `EndAppCta` at the end, both `campaign={CAMPAIGN}`. CTA copy: the pill takes the edge off; cue cravings still hit, Blou's SOS craving help is there for those moments and the timeline shows smoke-free days.

## Assets
None. Two tables (schedule; comparison).

## Schema
`buildArticleJsonLd` with `isMedical: true` (MedicalWebPage), `buildFaqJsonLd(faqItems)`. No HowTo schema (it's a prescription schedule, not a self-directed how-to). Breadcrumbs as today.

## QA acceptance
- `npm run build` passes (includes `seo-check`).
- `npm run seo:qa -- /quit-smoking-with-bupropion --keyword "wellbutrin for quitting smoking"` passes.
- Title ≤ 60 chars with "Wellbutrin"; H1 has "Wellbutrin (bupropion)"; meta 120-160 chars.
- Quick answer covers prescription, start timing, course length and safety screening in the first 4 sentences.
- Schedule table matches the label exactly and is framed as prescriber-led.
- No unsourced numbers; Sources section lists the 4 required sources. No 2016/EAGLES claims, no percentages.
- No em dashes, grade ≤ 8, no prohibited Blou claims.
- 40-point rubric ≥ 34 with no critical fails.

## Risks
- Medical content: the biggest risk is reading as dosing advice. Keep "your prescriber" framing on every dose mention.
- CDC (1–2 weeks) vs label (1 week) start timing: present both honestly.
- Recheck indexing and impressions by December 17, 2026.
