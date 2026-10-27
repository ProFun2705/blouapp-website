---
name: seo-content-brief
description: 'Turn a Blou SEO Linear issue into a precise brief (create vs refresh, intent, outline, sources, links, QA criteria) before any writing. Use when a Todo issue has no brief.'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 03-seo-content-brief.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

Runs when an issue in Linear is in **Todo** and its body has no `## Brief` section yet. The brief is written **into the Linear issue** (append a `## Brief` section with `npm run seo:linear -- comment <KEY> "<brief>"`, or include it when the research step creates the issue) and also saved to `seo/briefs/<slug>.md` in the repo so the writer and QA can read it offline.

Blou specifics:

- Product facts, prohibited claims, voice, page anatomy, image rules: `seo/blou-profile.md`. Copy the relevant lines into the brief's "Product/factual constraints" section, do not just link.
- Existing page check: search `seo/data/inventory.json` for the cluster. If any page has the intent, the job is a refresh of that URL.
- Output target: a Next.js page in this repo. New standalone articles are `src/app/<slug>/page.tsx` modeled on `src/app/zyn-withdrawal/page.tsx`. New symptom or milestone guides are entries in `src/lib/blouGuides.ts`. State the target file in the brief.
- Schema: health topics use `buildArticleJsonLd` (MedicalWebPage) + `buildFaqJsonLd`; how-to pages add `buildHowToJsonLd`; tools use `buildWebApplicationJsonLd`.
- Conversion path: name the `campaign` value (`article_<slug>`) and where the `InlineAppCta` goes.
- Sources: list 3-8 sources the writer must use (NHS, CDC, NCI, Smokefree.gov, WHO, FDA, MedlinePlus, Truth Initiative, PubMed). The writer may add more but may not cite anything weaker.
- Internal links: name 2+ existing pages that must link **to** the new page and 3+ pages it links out to.
- QA acceptance: always include "passes `npm run seo:qa -- /<slug> --keyword \"<primary>\"`" plus the PASS threshold below.

---

# SEO Content Brief Product Skill

Use after research or audit selects an opportunity and before a writer or editor changes content.

A good brief is a control surface. It prevents generic writing, duplicate pages, risky title/meta edits, unsupported claims, and CMS-specific leakage.

## Required Inputs

- Selected opportunity with score and evidence.
- Recommended action: create, refresh, landing page, comparison page, consolidation, internal-link update, snippet review.
- Target keyword cluster and secondary terms.
- Search intent and SERP notes.
- Existing URL or proposed URL.
- Site inventory record for existing pages.
- Business/product profile.
- Product facts and prohibited claims.
- Required conversion pages and internal links.
- Brand/editorial rules.
- Output target: Markdown, HTML, doc, CMS package, or task brief.

## Optional Inputs

- Top SERP page summaries.
- Screenshots/media requirements.
- Analytics/conversion data.
- Customer support/sales/product usage evidence.
- Localization glossary.
- CMS constraints.

## Brief Principles

- The brief must choose create vs refresh before writing starts.
- Search intent must be explicit enough that QA can fail the draft if it misses it.
- The article/page must answer the core query near the top.
- Existing ranked pages need surgical instructions, not casual rewrites.
- For listicles and comparisons, the verdict must appear early.
- For how-to posts, steps must appear near the top.
- For commercial landing pages, conversion path matters more than long editorial coverage.
- For localization, use researched local keywords, not translated English terms.

## Workflow

1. Confirm the job type.
   - New blog post: no existing page satisfies the intent.
   - Refresh: existing page is close but weak, stale, or under-structured.
   - Landing page: query is commercial/platform/tool-specific and needs conversion focus.
   - Comparison page: query includes vs, alternatives, competitors, pricing, buyer objections, or decision support.
   - Consolidation: multiple URLs split the same intent.
   - Internal-link update: target page exists and mainly needs authority flow.
   - Snippet review: CTR is weak and visible SERP promise may be the issue.

2. State the reader and business reason.
   - Who is searching?
   - What job are they trying to do?
   - Where are they in the funnel?
   - What product or conversion page should this support?
   - Why now?

3. Lock the intent.
   - Classify: informational, commercial, comparison, transactional, troubleshooting, local, template/tool, navigational, mixed.
   - Describe what the first useful answer must say.
   - List what the page should not become. Example: do not turn a platform landing page into a generic blog guide.

4. Summarize SERP expectations.
   - Dominant page types.
   - Common headings and sections.
   - Content gaps.
   - Table/tool/media/schema expectations.
   - Risks: forum-heavy SERP, wrong intent, outdated competitor facts, medical/legal/privacy claims.

5. Set title/meta policy.
   - New page: provide title/H1/meta direction.
   - Existing ranked page: default to preserving title/meta unless the opportunity explicitly requires snippet work and risk is accepted.
   - If changing title/meta is recommended, state why current data justifies the risk.

6. Define the top-of-page structure.
   - TL;DR requirements:
     - listicle: bullet list of all items with links and one-line value.
     - how-to: 2-3 sentence summary.
     - comparison: clear who-should-pick-what verdict.
     - landing page: direct value proposition and fit.
   - Answer-first block: 2-4 short sentences that directly answer the main query.
   - For how-to, require steps before background discussion.

7. Create the outline.
   - H1.
   - Section sequence with H2/H3 headings.
   - Purpose of each section.
   - Required examples, tables, screenshots, product images, code snippets, or data points.
   - Required FAQ questions.
   - Schema type: Article, FAQPage, HowTo, SoftwareApplication, Product, ItemList, Comparison-like Article, Breadcrumb, as appropriate.

8. Add product and factual constraints.
   - Approved claims.
   - Pricing/free-trial wording.
   - Platform support.
   - Privacy/security/processing claims.
   - Claims that require a source.
   - Claims to avoid.
   - Competitors that may/may not be named.

9. Add linking rules.
   - Primary conversion page to link.
   - Supporting internal links.
   - External links required for named tools, competitors, platforms, or sources.
   - Anchor guidance.
   - For productized use, link to conversion pages before supporting blog posts when both are relevant.

10. Add asset rules.
   - For listicles/comparisons: every featured tool/product needs a link and image/screenshot unless explicitly exempted.
   - Give preferred dimensions, storage, alt text, and whether generated imagery is allowed.
   - For existing screenshot libraries, require reuse before fresh capture.

11. Define QA acceptance criteria.
   - Minimum score or pass/fail gate.
   - Critical facts that must be correct.
   - Structure checks.
   - Human-writing checks.
   - Link/asset/schema checks.
   - CMS/output constraints.

## Output Format

Return:

- Brief title.
- Job type and recommended action.
- Target keyword cluster.
- Target URL or proposed slug.
- Reader/search intent.
- Business reason.
- SERP summary.
- Title/meta policy.
- Required top-of-page structure.
- Detailed outline.
- Product/factual constraints.
- Links and conversion path.
- Required assets.
- Schema requirements.
- QA acceptance criteria.
- Risks and open questions.

## Failure Conditions

Fail the brief if:

- It does not clearly choose create vs refresh.
- It ignores an existing page that already matches intent.
- It lacks an answer-first/TL;DR requirement.
- It gives generic outline headings that could fit any article.
- It omits product facts or prohibited claims.
- It omits internal-link and conversion-path guidance.
- It recommends changing title/meta on an existing ranked page without a risk note.
- It cannot be used by QA to judge pass/fail.
