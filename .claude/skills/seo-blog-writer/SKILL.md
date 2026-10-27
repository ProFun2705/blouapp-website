---
name: seo-blog-writer
description: 'Write or refresh a Blou article as a Next.js page from an approved brief, on a branch, without publishing. Use when picking up the next Todo SEO issue.'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 04-seo-blog-writer.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

Runs when there is a **Todo** issue with a brief. Pick it with `npm run seo:linear -- next`, move it to In Progress (`npm run seo:linear -- move <KEY> "In Progress"`), then write.

Blou specifics:

- Read `seo/blou-profile.md` and the brief (`seo/briefs/<slug>.md` or the issue body) before writing a word.
- Work on a branch: `git switch -c seo/<KEY>-<slug>`.
- Output format is code, not Markdown:
  - New article: `src/app/<slug>/page.tsx`, following `src/app/zyn-withdrawal/page.tsx` (constants `PUBLISHED`, `MODIFIED`, `CAMPAIGN`, `PATH`, `TITLE`, `DESCRIPTION`, a `SOURCES` array, `faqItems`, then the JSX). Add the route to `src/lib/staticRoutes.ts` with a label and group.
  - New guide: a new object in `blouGuides` in `src/lib/blouGuides.ts`.
  - Refresh: edit the existing file. Bump `MODIFIED` / `dateModified` and the `lastModified` in `staticRoutes.ts` only if the content meaningfully changed. Keep the URL. Keep title/meta unless the brief says to change them.
- Add the links the brief asks for **from** existing pages to the new one (edit those pages).
- No em dashes. 7th-grade reading level. Answer first. Every number has a source in `SOURCES`.
- Pricing text only from `PRICING_SHORT` / `PRICING_CTA_NOTE` / `PRICING_FAQ`.
- Images: reuse `public/` assets or build an SVG/React illustration. For comparisons, capture App Store screenshots (screenshot API if connected, otherwise the built-in browser) into `public/compare/`. If an image cannot be made, list it in the QA handoff; do not leave a broken `src`.
- When done: `npm run build` must pass (it runs `scripts/seo-check.mjs`), then hand off to `seo-content-qa`. **Do not merge or push to main.** Move the issue to In Review.

---

# SEO Blog Writer Product Skill

Use when a detailed brief is approved and the product needs a publishable draft or refresh package.

This skill does not pick topics from scratch. If the brief is weak, contradictory, or missing critical facts, stop and return a brief defect report instead of producing generic content.

## Required Inputs

- Approved content brief.
- Content type: how-to, listicle, comparison, alternatives, profession/use-case guide, refresh, landing-style article, localized article.
- Target keyword cluster and search intent.
- Brand voice and banned phrases.
- Product facts and prohibited claims.
- Required links and conversion page.
- Required assets or image policy.
- Schema requirements.
- Output format: Markdown, HTML, document draft, CMS JSON, or handoff package.

## Optional Inputs

- SERP summaries.
- Existing draft or URL for refresh.
- Screenshots/images.
- Competitor fact sources.
- Localization glossary.
- CMS constraints.

## Writing Principles

- Answer first. Background comes later.
- Write for one reader, not a generic audience segment.
- Use simple words and short paragraphs.
- Be specific early: numbers, exact tools, real situations, concrete tradeoffs.
- Do not write filler transitions between every section.
- Do not sound like a neutral encyclopedia when the reader needs a decision.
- Be honest about product fit. Credibility beats forced promotion.
- Do not invent pricing, capabilities, testimonials, review scores, privacy claims, competitor claims, or legal/medical/financial claims.

## Mandatory Anti-AI Voice Rules

Before output, run a de-robot pass:

- Remove generic openings like "In today's fast-paced world", "Let's dive in", "Unlock", "Harness", "Game-changer", "Ever-evolving", "It is important to note", "Whether you're a...".
- Remove repetitive sentence starts.
- Break perfect parallel structure across list items when it sounds synthetic.
- Replace vague adjectives like powerful, robust, seamless, cutting-edge with specific benefits or delete them.
- Use honest drawbacks for tools and comparisons.
- Avoid hedging every claim with may/might/could unless uncertainty is real.
- Keep conclusions useful, not a rephrased intro.
- Use punctuation accepted by the customer/style guide. If em dashes are banned, remove all em dashes.

## Universal Structure

Every draft must include:

1. TL;DR near the top.
   - Listicle: all items with links and one-line best-fit/value.
   - How-to: 2-3 sentence summary of what to do.
   - Comparison: quick verdict and who each option fits.
   - Refresh: concise answer that improves the existing page without disrupting ranking-sensitive areas.

2. Answer-first block immediately after TL;DR.
   - 2-4 short sentences.
   - Directly answer the main query.
   - Make it self-contained and quotable.

3. Short intro.
   - 2-3 short paragraphs max.
   - No generic scene-setting.
   - State the problem and what the reader will get.

4. Main sections.
   - H2/H3 hierarchy follows the brief.
   - Important H2 sections open with a short direct answer before detail.
   - Use tables/bullets only when they make scanning easier.

5. Conclusion.
   - Short, decision-oriented, with a clear next action.

6. FAQs.
   - Concise, direct, matched to search questions.
   - Include schema when required.

## Content Type Templates

### How-To Guide

Use when the reader wants instructions.

Structure:

- TL;DR.
- Answer-first summary.
- Requirements/prerequisites only if needed.
- Steps near the top. Do not bury steps below long background sections.
- Each step: action, short explanation, expected result.
- Troubleshooting.
- Alternatives or built-in options if SERP expects them.
- FAQs.
- Related internal links.

Rules:

- Start steps with verbs.
- Keep background after the core process.
- Add screenshots where steps involve software UI.

### Listicle

Use when the reader is comparing multiple tools/options.

Structure:

- TL;DR with all tools and links.
- Early verdict: best overall, best budget, best for specific use cases.
- Methodology: short and credible.
- Comparison table if 5+ items.
- H2 per tool:
  - what it is
  - best for
  - key strengths
  - biggest downside
  - pricing when safely known
  - verdict
- FAQs.

Rules:

- Every featured tool needs a homepage/relevant link.
- Every featured tool needs an image/screenshot unless the asset policy says otherwise.
- Do not rank the customer's product #1 by default. Rank it only where evidence and fit support it.
- Include at least one honest drawback per tool when relevant.

### Comparison / Alternatives

Use when the reader is choosing between named products or searching competitor alternatives.

Structure:

- TL;DR verdict.
- Who should choose each product.
- Optional third-option/product framing only if honest and approved.
- Comparison table with row-level winner/fit where useful.
- Pricing/value section with clear assumptions.
- Feature sections.
- Privacy/security/fact-sensitive section if relevant.
- Decision scenarios.
- FAQs.

Rules:

- Source-check competitor claims.
- Do not claim market superiority without evidence.
- Use careful language for reviews, Reddit sentiment, accuracy, speed, CPU/RAM, storage, privacy, and pricing.
- Avoid defamatory or aggressive claims.

### Profession / Use-Case Guide

Structure:

- TL;DR.
- Why this audience cares.
- Specific workflows.
- Setup or recommended tool path.
- Tips by scenario.
- Risks/limitations.
- FAQs.

Rules:

- Use examples from that job, not generic productivity copy.
- Avoid medical/legal claims unless sourced and approved.

### Refresh

Use when improving an existing ranking page.

Rules:

- Preserve existing URL.
- Preserve title/meta by default on pages with meaningful rankings/impressions.
- Improve top answer block, TL;DR, FAQs, internal links, clarity, examples, and stale facts first.
- Do not restructure ranking-sensitive pages beyond the brief.
- Mark any risky title/meta/slug recommendation separately for human approval.

### Localized Article

Rules:

- Use researched local keywords and slugs, not direct translations.
- Match local search intent and SERP page type.
- Use the approved locale voice, pronouns, CTA language, currency, and claims.
- Avoid English-first assumptions.

## SEO Requirements

- Primary keyword in title/H1 for new content.
- Primary keyword in first 100 words where natural.
- Related terms distributed naturally.
- Question-style headings when they match query language.
- Internal links to conversion pages first, then supporting content.
- External links for named tools, platforms, sources, or claims.
- Meta title/description suggestions for new content or when requested.
- Schema matching visible content.

## Product/Factual Safety

Before output, check:

- Pricing matches provided facts.
- Free/free-trial wording is accurate.
- Platform support is accurate.
- Privacy/security/processing claims match approved language.
- Competitor claims are sourced or softened.
- No fake testimonials, review counts, benchmarks, awards, or customer logos.
- No unsupported regulated claims.

## Asset Rules

- Listicles/comparisons: every featured tool/product needs link + image/screenshot unless exempted.
- Use approved asset libraries before fresh generation/capture.
- Include alt text that describes the actual product or UI, not keyword stuffing.
- If assets are missing, output a clear asset queue rather than pretending they exist.

## Output Format

Return:

- Draft content in requested format.
- Meta title and description when applicable.
- Schema JSON-LD when applicable.
- Internal/external link list.
- Asset list and missing asset queue.
- Fact-check notes for risky claims.
- QA handoff notes.

## Failure Conditions

Fail instead of writing if:

- Brief does not specify target intent and job type.
- Product facts are missing for product-heavy content.
- The requested angle requires unsupported claims.
- The draft would duplicate an existing page without a refresh/consolidation brief.
- Required output format cannot be produced from available information.
