---
name: seo-content-qa
description: 'Strict pre-publish QA gate for Blou SEO drafts: runs npm run seo:qa, scores the 40-point rubric, and sends failing drafts back to the writer. Use after the writer finishes and before publishing.'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 05-seo-content-qa.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

Runs right after `seo-blog-writer`, on the same branch. This is the gate. Nothing is published without a PASS.

Blou specifics:

1. Mechanical checks first: `npm run build && npm run seo:qa -- /<slug> --keyword "<primary keyword>"`. Any FAIL there is a Required Fix. (It checks em dashes, banned words, false pricing/rating/cure claims, reading grade ≤ 8, title ≤ 60, meta 120-160, keyword placement, quick answer, FAQ, sources, App Store CTA, JSON-LD, internal links.)
2. Then the judgment checks in the rubric below, using `seo/blou-profile.md` as the product source of truth and the brief as the contract.
3. Extra Blou critical fails:
   - A health number without a source in the page's Sources list.
   - Any medical advice that contradicts NHS/CDC guidance, or tells someone to stop prescribed medication.
   - Blou described as free, as available on Android, or with any rating/user count.
   - Fear-based or shaming copy about people who smoke or slip.
4. Verdict handling:
   - **FAIL:** add label `qa-failed`, post the QA Verdict as a Linear comment, move the issue back to In Progress, and hand back to `seo-blog-writer` with the Required Fixes. Loop until PASS. After 3 failed rounds, stop, leave the issue In Review with a comment asking a human to look.
   - **PASS:** remove `qa-failed`, post the QA Verdict as a comment, then hand to `seo-publish`.
5. Save the verdict to `seo/qa/<KEY>.md` and commit it on the branch.

---

# SEO Content QA Product Skill

Use before a draft is sent for approval, scheduled, published, or handed to a CMS adapter.

This is a strict pre-publish gate. It should improve the draft when permitted, then re-score. Do not declare content ready if it fails a critical check.

## Required Inputs

- Draft content or URL/readback.
- Content brief.
- Target keyword cluster.
- Content type: how-to, listicle, comparison, alternatives, landing page, refresh, localized page.
- Product facts and prohibited claims.
- Brand voice and banned phrases.
- Required links, assets, and schema.
- Output/CMS constraints.

## Optional Inputs

- SERP notes.
- Existing page data for refreshes.
- Screenshot/image library.
- Analytics/search evidence.
- Source list for competitor claims.
- Readback from CMS.

## QA Principles

- The brief is the contract.
- Factual accuracy outranks writing style.
- Search intent match outranks keyword inclusion.
- Human writing quality matters because generic AI prose hurts trust.
- Missing links/images are not minor on listicles or comparisons.
- Do not fail content because it is not written in the QA agent's personal style.
- Prefer targeted fixes over rewriting the whole draft.

## Scoring Rubric

Score each area 0-5. Total 40 points.

### 1. Search Intent and SERP Fit

- 5: Clearly matches intent, page type, depth, and reader problem.
- 3: Mostly matches but misses a major expected subtopic or SERP convention.
- 1: Keyword appears but content answers a different intent.
- 0: Wrong page type or wrong audience.

Check:

- Intent classification matches brief.
- Top section answers the core query fast.
- Content type fits SERP: how-to, listicle, landing page, comparison, support, template, etc.
- Does not drift into generic broad coverage.

### 2. Structure and Usefulness

- TL;DR exists and matches content type.
- Answer-first block exists near the top.
- H2/H3 structure is scannable.
- How-to steps are near the top.
- Listicles name all tools early.
- Comparisons give a clear verdict early.
- FAQs are useful and concise.

### 3. Human Voice and Readability

- Simple words and short paragraphs.
- Varied sentence rhythm.
- Specific examples, numbers, tradeoffs, and concrete use cases.
- No generic AI filler.
- No repetitive section pattern.
- No unsupported hype.
- Banned punctuation/style markers are absent if configured.

Red flags:

- Every section starts the same way.
- All list items use identical structure.
- Vague phrases: powerful, robust, seamless, cutting-edge, unlock, harness, delve, game-changing.
- Overly balanced non-opinions where the reader needs a decision.
- Filler intro/conclusion.

### 4. SEO Hygiene

- Primary keyword in title/H1 for new content.
- Primary keyword appears early when natural.
- Secondary terms are natural, not stuffed.
- Headings use query language without spam.
- Internal links support conversion and topic depth.
- Meta title/description, if present, are accurate and CTR-aware.
- Existing ranked refreshes preserve risky title/meta/slug unless explicitly approved.

### 5. Product and Brand Accuracy

- Product facts match the configured source of truth.
- Pricing/free/free-trial claims are correct.
- Platform support is correct.
- Privacy/security/processing claims are correct.
- Positioning matches brand rules.
- No invented testimonials, review counts, awards, customer names, benchmarks, or features.
- Claims the brand has prohibited are absent.

### 6. Competitor and Source Safety

- Competitor pricing, platforms, privacy, storage, performance, and review claims are sourced or softened.
- No defamatory or overconfident unsupported claims.
- Comparison verdicts are framed as fit/use-case, not absolute superiority unless evidence supports it.
- External links exist for named tools/products/platforms.

### 7. Links, Assets, and Schema

- Every named product/tool has a relevant first-mention link.
- Every featured listicle/comparison item has an image/screenshot unless exempted.
- Image alt text is descriptive.
- Internal links prioritize conversion pages where relevant.
- Schema matches visible content.
- FAQ schema questions/answers match visible FAQs.
- URLs are not obviously broken or placeholder-only.

### 8. Publishing Readiness

- Output format matches target: Markdown, HTML, CMS JSON, document, etc.
- No layout-breaking markup.
- Required fields are present: title, slug, meta, category/tag, author, date, draft/publish status where applicable.
- Manual follow-ups are listed.
- CMS readback, if available, matches intended content.

## Critical Fail Conditions

Fail automatically if any are true:

- Search intent is wrong.
- Missing TL;DR when the workflow requires it.
- Missing answer-first block.
- Core product fact is wrong.
- Pricing/free-trial/platform/privacy/processing claim is wrong.
- Draft says something is free when it is only a trial.
- Draft invents competitor facts, testimonials, reviews, benchmarks, or features.
- Obvious AI prose dominates.
- Any featured listicle/comparison tool lacks a link.
- Any featured listicle/comparison tool lacks a required image/screenshot.
- Schema contradicts visible content.
- Existing ranking page title/meta/slug was changed without approval/risk note.
- Regulated claims are unsupported.

## Workflow

1. Read the brief first.
   - Extract acceptance criteria, product facts, prohibited claims, required sections, links, assets, and schema.

2. Review draft against the brief.
   - Do not score in isolation. Score against the job it was supposed to do.

3. Run critical-fail checks.
   - If any fail, status is FAIL even if score is high.

4. Score all 8 areas.
   - Give evidence for low scores.

5. Apply targeted fixes when allowed.
   - Fix facts, TL;DR, answer-first, links, missing images, schema mismatches, robotic prose, and obvious SEO gaps.
   - Avoid full rewrite unless structure is broken throughout.

6. Re-score after fixes.
   - Only mark PASS when no critical fail remains.

7. Return final verdict.

## Output Format

Return exactly:

### QA Verdict

- Status: PASS / FAIL
- Score: X/40
- Critical fails: none / list
- Top 3 issues:
  1. ...
  2. ...
  3. ...

### Required Fixes

- Specific fixes, ideally section-level or line-level.

### Optional Improvements

- 3-5 high-impact improvements.

### Final Notes

- Readiness status.
- Manual follow-ups.
- Residual risks.

## Pass Threshold

Default PASS requires:

- No critical fail.
- Score >=32/40.
- No area below 3/5.

Customers may configure stricter thresholds.

## Failure Conditions For The QA Agent

The QA process itself fails if it:

- Reviews without reading the brief.
- Ignores product facts.
- Treats formatting as more important than factual/search quality.
- Passes missing images/links in a listicle/comparison.
- Declares ready without re-scoring after fixes.
