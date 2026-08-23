# Blou Tracking Plan

**Last updated:** 2026-08-22  
**Tools:** Google Analytics 4 (`G-L5RLBSF7KK`), Amplitude Unified (consent-gated)

## Overview

Primary business question: **Which pages and placements drive App Store installs?**

Secondary questions:
- Do readers engage with guides (75% scroll)?
- Which calculators get shared?
- Android waitlist demand signal

## Events

| Event | Description | Properties | Trigger | Decision |
|-------|-------------|------------|---------|----------|
| `app_store_badge_click` | Official App Store badge click | `placement`, `destination` | `AppStoreBadgeLink` click | Best CTA placement |
| `cta_click` | Header text CTA | `label`, `href` | `data-event` on header link | Header vs badge |
| `outbound_click` | External link | `href`, `host`, `text` | Any external `<a>` | Referral traffic |
| `guide_scroll_75` | Deep read | `path` | 75% scroll depth | Content quality |
| `faq_expand` | FAQ interaction | (GA only via FaqSection) | FAQ accordion | Objection themes |
| `calculator_input` | Calculator used | pack price, cigs/day, etc. | Money saved tool | Tool engagement |
| `calculator_share` | Share link copied | country, amount | Share button | Virality |
| `android_waitlist_signup` | Waitlist submit | `method`, `event_label` | Waitlist form | Android demand |

## GA4 conversions (mark in Admin)

After deploy, in GA4 → Admin → Events, mark as conversions:

1. `app_store_badge_click`
2. `android_waitlist_signup` (optional secondary)

## UTM / App Store attribution

All badge links use `src/lib/appStore.ts`:

- `utm_source=website`
- `utm_medium=badge`
- `utm_campaign=<placement>` (e.g. `landing_hero`, `article_footer_card`, `compare_hub`)

Apple params: `itsct`, `mttnsubad` match placement.

## Placement → campaign map

| Component | Placement / campaign examples |
|-----------|------------------------------|
| Homepage hero | `landing_hero` |
| Sticky mobile (site-wide) | `landing_sticky_mobile`, `pillar_sticky_*`, `comparison_sticky_*` |
| Article intro/footer | `article_intro`, `article_footer_card` |
| Header | `site_header` (text CTA → `cta_click`) |
| Compare hub | `compare_hub` |
| Country calculators | `country_calculator_<slug>` |

## Consent

- Cookie banner gates GA4 + Amplitude (`blou_consent_v1`)
- App Store sticky badge is **not** gated by analytics consent (product CTA)

## Manual ops checklist

- [ ] GSC: submit `https://tryblou.com/sitemap.xml` once
- [ ] Bing Webmaster: submit sitemap
- [ ] Vercel env: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- [ ] Vercel + GitHub Actions: `INDEXNOW_SECRET` aligned with `/api/indexnow` gate
- [ ] GA4: mark `app_store_badge_click` as conversion
- [ ] Rich Results Test: spot-check homepage, one guide, one comparison page

## Social / entity (`Organization.sameAs`)

Add URLs to `SOCIAL_PROFILE_URLS` in `src/lib/site.ts` only when profiles are live and branded. Do not enable placeholder accounts.

## Product assets pending

- Replace `public/product/blou-phone-streak.jpg` with official App Store screenshots when available (homepage product proof)
