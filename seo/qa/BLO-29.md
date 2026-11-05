# QA: BLO-29 /quit-smoking-with-bupropion

Brief `seo/briefs/quit-smoking-with-bupropion.md`

## Round 1 · 2026-11-05 · FAIL (mechanical, fixed in place)

`npm run seo:qa -- /quit-smoking-with-bupropion --keyword "wellbutrin for quitting smoking"`: 3 fails. The keyword was missing from the title, the H1 and the first 100 words, because "Wellbutrin (bupropion) for quitting smoking" breaks the exact phrase.

Required fixes (applied as targeted QA fixes): title "Wellbutrin for quitting smoking (bupropion)", H1 "Wellbutrin for quitting smoking: how bupropion works", meta and intro reworded to contain the exact phrase, `staticRoutes.ts` label matched.

## Round 2 · 2026-11-05 · PASS

Mechanical: `npm run build` passed (seo-check: all checks passed). `npm run seo:qa`: all mechanical checks passed, 1,738 words, grade 6.0.

### QA Verdict

- Status: PASS
- Score: 36/40 (intent 5, structure 5, voice 4, SEO 5, product 5, sources 4, links/schema 4, readiness 4)
- Critical fails: none
- Top 3 issues:
  1. Title and H1 differ slightly from the brief ("Wellbutrin (bupropion) for quitting smoking") so the exact keyword reads in order. Same intent; title change was approved in the brief (0 impressions, not indexed).
  2. Varenicline and patch rows in the comparison table rely on the CDC how-to pages and the NicoDerm CQ label, which were added to Sources. Fine, but the `/quit-smoking-with-varenicline` page itself is still thin and unsourced (outside this issue).
  3. The page could not be viewed in a browser during this unattended run (dev server not started). Build output and the lint are clean; check the live page after deploy.

### Checks against the brief

- Quick answer, first 4 sentences: helps you quit, prescription, no nicotine, start 1–2 weeks before quit day while still smoking, about 12 weeks, doctor screens for seizures and eating disorders.
- Schedule table matches the bupropion SR label: start while smoking, about 1 week to steady state, 150 mg once daily days 1–3, then 150 mg twice daily at least 8 hours apart, max 300 mg, quit date within first 2 weeks, 7–12 weeks, longer per doctor. CDC 1–2 weeks and 12 weeks shown alongside. Framed as "the schedule your prescriber works from, not a plan to follow on your own".
- Every number is sourced: 150/300 mg, 8 hours, 3 days, 1–2 weeks, 2 weeks, 7–12 and 12 weeks, 14 days (MAOI), 1 in 1,000 (CDC seizures), 8–35 days (CDC varenicline), 1-800-222-1222, 1-800-QUIT-NOW, 333888. No efficacy percentages. No 2016 boxed-warning or EAGLES claims.
- Missed-dose advice differs between CDC and MedlinePlus, so the page says "never take two, ask your pharmacist" rather than picking one.
- Safety: "who should not" list matches label contraindications and CDC precautions; mood-change warning tells readers to stop and call a doctor (CDC, label). Never tells anyone to stop a prescribed medicine; tells Wellbutrin users not to add a second bupropion product and to talk to their doctor.
- Slips framed warmly ("doesn't erase your progress", "a signal to change the plan, not a sign you failed").
- Blou described only with approved features (SOS craving help, lung checks, timeline). No free, rating or Android claims. Pricing only via CTA components.
- Sources: CDC bupropion SR, DailyMed bupropion SR label (2025), MedlinePlus, NHS nicotine-free medicines, CDC varenicline, CDC patch, NicoDerm CQ label. MedicalWebPage JSON-LD with citations; FAQ JSON-LD from `FaqSection` matches the 8 visible FAQs.
- Links out: varenicline, nicotine patch, combination NRT, without NRT, depression, without gaining weight, trying again, quit-smoking-help, prepare, insomnia, NRT + app. Inbound links added from `/combination-nrt-quit-smoking` and `/quit-smoking-without-nrt`. `InlineAppCta` after the schedule and `EndAppCta`, both `article_quit-smoking-with-bupropion`.
- `staticRoutes.ts`: label "Wellbutrin for quitting smoking (bupropion)", lastModified 2026-11-05.

### Optional Improvements

- Refresh `/quit-smoking-with-varenicline` with the same CDC/label sources (BLO-31 is in Backlog).
- Add a short "Wellbutrin and smoking" note to `/quit-smoking-with-depression` linking here.

### Final Notes

- Ready to publish.
- Manual follow-ups: submit the URL to Bing by hand; recheck indexing and impressions by December 17, 2026.
- Residual risk: medical topic. All dosing is attributed to the label and framed as prescriber-led.
