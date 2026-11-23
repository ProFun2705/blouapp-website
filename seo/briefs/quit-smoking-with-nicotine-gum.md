# Brief: BLO-30 Refresh /quit-smoking-with-nicotine-gum

- **Issue:** BLO-30 (refresh, source:research, priority 3)
- **Job type:** Refresh in place, same pattern as BLO-42 (`/quit-smoking-with-nicotine-lozenge`). Keep URL and campaign `article_quit-smoking-with-nicotine-gum`.
- **Target file:** `src/app/quit-smoking-with-nicotine-gum/page.tsx`
- **Primary keyword:** "nicotine gum to quit smoking". Secondary: "how to use nicotine gum", "nicotine gum does it work", "is nicotine gum addictive", "nicotine gum for quitting vaping", "chew and park".

## Why
GSC 2026-09-27..10-24: 20 impressions, position 37, 0 clicks. Keyword Planner US: cluster 1,900/mo (up 1.9x), "does it work" 720, vaping 720, "is it addictive" 260. Page is 617 words, no sources, no method steps.

## Intent
Informational how-to. First answer: chew and park (chew slowly until tingling, park between cheek and gum about 1 minute, repeat about 30 minutes), 4 mg if first cigarette within 30 minutes of waking, one piece every 1 to 2 hours for 6 weeks (at least 9 a day), taper over 8 to 12 weeks. Must not become a patch or lozenge page.

## Title/meta
Page has near-zero clicks, low risk. Title "Nicotine gum to quit smoking: how to chew it and does it work" is too long; use "Nicotine gum to quit smoking: how to use it" (under 60). Meta 120-160 chars. MODIFIED 2026-11-23.

## Outline
QuickAnswerBox; How to use (chew and park, HowTo schema); 2mg vs 4mg; schedule table and how long; InlineAppCta; Does it work (Cochrane RR 1.49, nicotine gum, 56 trials); Common mistakes (chewing like regular gum, coffee or soda, too few pieces); Side effects; Gum with patch; Quitting vaping with gum (neutral, sourced); Is it addictive (cautious, sourced to CDC/NHS only); Cue cravings plan; If you slip; Who asks a doctor first; FAQ; Sources; EndAppCta.

## Constraints
Per seo/blou-profile.md: no em dashes, grade <= 8, no "free app", no unsourced numbers, only listed Blou features, no telling anyone to stop medicine.

## Sources
CDC How to use nicotine gum; Cochrane NRT review CD000146; NHS stop-smoking treatments.

## Links
Out: /nicotine-patch-vs-gum, /combination-nrt-quit-smoking, /quit-smoking-with-nicotine-lozenge, /quit-smoking-with-nicotine-patch, /guides/cravings, /prepare-to-quit-smoking, /i-smoked-one-cigarette, /quit-vaping, /quit-smoking-help, /coffee-and-quitting-smoking. In: confirm 2+ existing pages link here (already 9).

## QA
`npm run seo:qa -- /quit-smoking-with-nicotine-gum --keyword "nicotine gum to quit smoking"` passes; rubric >= 34/40.
