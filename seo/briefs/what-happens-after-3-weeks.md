# Brief: BLO-15 Push /guides/what-happens-after-3-weeks to page 1

- **Issue:** BLO-15 (page-2-push, source:audit, priority 2)
- **Job type:** Refresh in place. Keep URL and slug. Not a new page.
- **Target file:** `src/lib/blouGuides.ts` (entry `slug: "what-happens-after-3-weeks"`, ~line 567). Add a per-guide `references` field as in `libido` / `dreams-and-sleep`. Check `SEO_TITLE_OVERRIDES` for a title override; add one only if the title is over 60 chars.
- **Primary keyword:** "3 weeks smoke free". Secondary: "3 weeks not smoking", "3 weeks without smoking", "3 weeks after quitting smoking", "3 weeks no cigarettes".
- **Campaign:** template default `guide_what-happens-after-3-weeks`; keep.

## Why
GSC 2026-09-27..2026-10-24: 123 impressions, 1 click, position 13. "3 weeks smoke free" pos 16, "3 weeks not smoking" pos 11.7. Page is already sourced (NHS, ALA, Cleveland Clinic, Quit Australia) with 3 FAQs; the gaps are query wording in title/H1/quick answer, a "what you might feel at week 3" list, more FAQs, and inbound links.

## Reader and intent
Person three weeks off cigarettes asking "is what I feel normal, and how much longer?" Informational and reassurance. First answer must say: at 3 weeks most people are near the end of withdrawal (NHS 3 to 4 weeks on average, some longer), cravings are shorter and less frequent, circulation and lungs are improving, and day 28 is close. Must not become a generic quit-tips page or promise exact recovery numbers.

## Title/meta policy (risk accepted)
Page is on page 2 with 1 click, so little to lose. Change the title to lead with the query wording, for example "3 weeks smoke free: what happens to your body" (<= 60 chars). Keep H1 aligned. Rewrite `summary` (meta) to 120-160 chars. `dateModified` to the publish date. Add "3 weeks smoke free" and "3 weeks not smoking" to targetKeyword/keywords handling if the template supports it.

## Top of page
- `quickAnswer` (2-4 sentences) using "3 weeks smoke free" wording, keeping the sourced NHS claims already on the page.
- `quickFacts` (3), sourced, keep existing ones.

## Outline (`articleSections`)
1. What you might feel at week 3 (new): bullet list of common symptoms and what is fading (cravings, mood, sleep, appetite, cough/mucus, energy), each tied to an existing sourced claim; say timing varies.
2. What has changed in your body by week 3 (keep, tighten).
3. Withdrawal at 3 weeks: nearly done (keep; add a short "when it is not normal" note: low mood over two weeks or self-harm thoughts, see a doctor).
4. Getting to day 28 (keep). Add `InlineAppCta` after section 1 or 2.
5. Optional short section "3 weeks not smoking and still craving: what to do" only using NHS-sourced tips already on the page.

## FAQ (6 to 7)
Keep the 3 existing. Add: Is 3 weeks smoke free a big milestone? · Why do I feel worse 3 weeks after quitting smoking? · What happens to my lungs after 3 weeks without smoking? · How long do cravings last after 3 weeks? (Only answer with sourced content; no invented stats.)

## Constraints (profile)
iPhone only app; features: photo timeline, lung checks, SOS craving help, milestones; no free-app, ratings, user counts, cure/diagnose/treat claims. Every number sourced and listed in references. No em dashes, grade <= 8, US spelling. Do not fetch smokefree.gov patch page, PubMed or ZipRecruiter.

## Sources (writer verifies by fetching; uses only what the page says)
NHS quit smoking / withdrawal (https://www.nhs.uk/better-health/quit-smoking/); NHS benefits of stopping smoking (https://www.nhs.uk/better-health/quit-smoking/benefits-of-quitting/ or similar); American Lung Association what happens when you quit; Cleveland Clinic; Quit (Australia). Reuse sources already cited on the page. 3-8 total.

## Links
In: add the page to `relatedSlugs` of `what-happens-after-2-weeks` (check present), and link from `/quit-smoking-timeline` and `/first-week-quit-smoking` (add a sentence or link in at least 2 of them if absent). Out: `/guides/what-happens-after-2-weeks`, `/guides/what-happens-after-1-month`, `/guides/cravings`, `/guides/mood-swings`, `/quit-smoking-timeline`, `/guides`.

## QA acceptance
`npm run build` passes; `npm run seo:qa -- /guides/what-happens-after-3-weeks --keyword "3 weeks smoke free"` passes; 40-point rubric >= 34; every health claim sourced; no invented numbers.
