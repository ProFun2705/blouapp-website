# Brief: BLO-9 Add App Store CTAs to pages that have none

- **Issue:** BLO-9 (conversion, technical, source:audit)
- **Job type:** Refresh (conversion-only edit). No content rewrite, no title/meta change, no URL change.
- **Target files:** `src/app/vape-withdrawal-symptoms/page.tsx`, `src/app/quit-vaping-timeline/page.tsx`
- **Primary keywords (for QA):** "vape withdrawal symptoms" (`/vape-withdrawal-symptoms`), "quitting vaping timeline" (`/quit-vaping-timeline`, first entry in its `keywords`)

## Why
`seo/data/inventory.json` flags both pages `no-app-cta`: zero `app_store_click` links. `/vape-withdrawal-symptoms` gets ~170 impressions/28d. Every other vaping article (`/quit-vaping`, `/vaping-and-smoking-together`, `/zyn-withdrawal`) has CTAs. A conversion is an App Store visit.

## What to do
1. Import `EndAppCta` and `InlineAppCta` from `@/components/marketing/AppCta`.
2. `InlineAppCta campaign={CAMPAIGN}` after the first useful section:
   - `/vape-withdrawal-symptoms`: after `#how-long` (reader now knows what to expect; CTA ties to SOS craving help + timeline).
   - `/quit-vaping-timeline`: after `#how-long`.
   - One sentence of copy, tied to the section just read.
3. `EndAppCta campaign={CAMPAIGN}` (campaign `article_<slug>`, already defined) after the FAQ, before Sources, with a vaping-specific title/description, mirroring `/zyn-withdrawal`.
4. Do not bump `MODIFIED`: article content is unchanged.

## Product/factual constraints (from seo/blou-profile.md)
- iPhone only, iOS 17+. Pricing only via `PRICING_CTA_NOTE` (the components render it). Never say the app is free.
- Features only from `APP_FEATURES`: photo timeline, lung checks, SOS craving help, every milestone visualized.
- No ratings, user counts, success rates, cure/treat claims, no Android availability.
- No em dashes. 7th-grade reading level. No AI filler words.
- No new health numbers are added, so no new sources are needed.

## QA acceptance
- `npm run build` passes.
- `npm run seo:qa -- /vape-withdrawal-symptoms --keyword "vape withdrawal symptoms"` and `npm run seo:qa -- /quit-vaping-timeline --keyword "quitting vaping timeline"` pass (App Store CTA check now green).
- Rebuilt inventory (`npm run seo:inventory`) shows no `no-app-cta` issues.
- 40-point rubric ≥ 34 with no critical fails.
