# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user (inferred from site copy and IA): an adult who smokes or vapes, often on a phone, often in the first days of a quit or during a craving. They want a simple plan, visible progress, and a free tracker they can open in under a minute.

Secondary (inferred): people comparing quit apps, and people looking up withdrawal symptoms or money saved by country.

## Product Purpose

Blou is a quit-smoking tracker for iPhone. The website exists to explain the app, convert App Store downloads, and publish evidence-based quit guides, comparison pages, and localized money-saved calculators.

Success for the site: a visitor in a craving or planning a quit understands what Blou tracks (streak, savings, cravings, recovery) and either downloads it or starts a concrete quit plan.

## Positioning

Blou’s distinct mechanism (from homepage copy): make the quit visible (streak, money saved, lung recovery) and interrupt cravings with a short timer plus a pre-committed 2-minute action. It is iPhone-only today; Android is a waitlist.

## Operating Context

Marketing and SEO site at tryblou.com. Next.js App Router. App Store listing: Quit Smoking Tracker Blou (`id6758997298`). Content cites NHS, CDC, WHO, and US Surgeon General public guidance. Not medical advice.

## Capabilities and Constraints

- iOS app: free core tracking (streak, money saved, cravings, milestones); optional premium (copy on homepage FAQ).
- Website tools: money saved calculator (shareable query params), lung recovery timeline, 5 country calculators with local pack prices and quitlines.
- 68 static/marketing pages plus 55 published guides. URLs, nav labels, and medical copy are locked for SEO.
- No Android app yet.
- [Inferred / open] Exact premium feature list and App Store screenshot assets are not in this repo.

## Brand Commitments

- Name: Blou. Tagline: “Quit smoking, tracked simply.”
- Wordmark: `public/logos/blou-logo-black-name.png`, mark: `public/logos/blou-logo.png`.
- Voice: plain, honest, anti-hype. Comparisons disclose “We make Blou, so we’re not neutral.” Slips are not framed as failure.
- Official App Store badge required (not a fake Download button).
- Legal: privacy and terms pages; cookie consent for analytics.

## Evidence on Hand

- Author: Heorhi Talochka (Founder). Medical reviewer field currently “Blou editorial team.”
- App Store rating claimed in UI: 4.8 from 420+ reviews. Star UI currently draws 5 filled stars.
- Testimonials in `SocialProof.tsx` (Ethan / Marta / Takeshi) are not sourced in-repo. Do not invent additional quotes.
- Product screenshots and app icon raster for the sticky bar are **absent** from `public/` (logo + App Store badge only).

## Product Principles

1. Show the next action (download or start the plan), not a sitemap.
2. Do not claim medical authority the product does not have.
3. Keep URLs, nav labels, and guide facts stable.
4. Prefer real product proof over decorative wellness chrome.
5. Night-time and one-handed mobile use are first-class scenes.

## Accessibility & Inclusion

WCAG AA contrast, keyboard access, visible focus, skip link, `prefers-reduced-motion`, and 44pt mobile targets. Health content must stay readable under stress (body size, measure, no overlapping bottom chrome).
