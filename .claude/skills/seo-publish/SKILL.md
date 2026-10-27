---
name: seo-publish
description: 'Publish a QA-passed Blou article: open the PR (or auto-merge when allowed), confirm it is live, ping IndexNow, and close the Linear issue. Use only after a PASS verdict.'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 07-cms-publishing-adapter.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

Destination: **static-site repo** (this Next.js app). Publishing = merging to `main`, which Vercel deploys automatically.

Permission policy (set by the owner; change it here, not in a prompt):

- `SEO_PUBLISH_MODE=pr` (default): push the branch and open a pull request with `gh pr create`, titled `SEO: <issue title> (<KEY>)`, body = brief link, QA verdict, `npm run seo:qa` output, screenshots of the page at 390px and 1280px. Leave the Linear issue In Review with the PR link as a comment. A human merges.
- `SEO_PUBLISH_MODE=auto`: same PR, then `gh pr merge --squash --auto` once checks pass. Only allowed for `refresh`, `ctr-snippet` and `internal-links` issues until the owner extends it.

After the deploy is live (check `https://tryblou.com/<slug>` returns 200 and shows the new H1):

1. Ping search engines: `curl -X POST "https://tryblou.com/api/indexnow" -H "x-indexnow-secret: $INDEXNOW_SECRET" -H "Content-Type: application/json" -d '{"urls":["https://tryblou.com/<slug>"]}'` (see `src/app/api/indexnow`).
2. Request indexing in GSC is manual (no API); note it in the Linear comment for new pages.
3. Set `linearIssue` and `suppressUntil` (+21 days) on the page's record in `seo/data/inventory.json`.
4. Move the Linear issue to **Done** with a comment: live URL, PR, publish date.

Never: push directly to `main`, change the slug or title of a page with GSC clicks without the brief saying so, or publish without a PASS verdict in `seo/qa/<KEY>.md`.

---

# CMS Publishing Adapter Product Skill

Use only after content passes QA and needs to become a CMS draft, document, static-site file, or manual publishing package.

This is an adapter skill. It does not choose topics, write strategy, rewrite content for preference, or publish externally without permission/configuration.

## Required Inputs

- Approved content.
- QA verdict and residual risks.
- Target publishing destination.
- Destination permissions: package-only, create draft, update draft, publish, deploy.
- Required fields and content model.
- Slug, title, meta description, category/tags, author, date, status.
- Media assets and alt text.
- Schema/custom-code requirements.
- Canonical and locale rules.

## Optional Inputs

- Existing CMS item ID or URL.
- Draft/published readback.
- Asset storage adapter.
- Static-site repo path.
- Approval workflow/task id.
- Preview/deploy adapter.

## Supported Destination Types

Examples:

- Framer CMS.
- Webflow CMS.
- WordPress.
- Sanity.
- Contentful.
- Ghost.
- Shopify blog.
- HubSpot CMS.
- Notion or Google Docs draft.
- GitHub/MDX/static-site repo.
- Plain Markdown/HTML handoff package.

## Adapter Principles

- Keep core content provider-neutral.
- Preserve draft/published state unless explicitly instructed.
- Never publish live without explicit permission or preconfigured automation policy.
- Do not silently drop unsupported markup, schema, links, or images.
- Always read back when the destination supports it.
- Treat CMS field mappings, locale quirks, auth, and API bugs as adapter configuration.

## Workflow

1. Confirm permission and target.
   - Determine whether the adapter may create, update, publish, deploy, or only package.
   - If permission is missing, produce a manual handoff package.
   - If updating existing content, fetch/read the current item first and preserve fields not in scope.

2. Load destination schema.
   - Required fields.
   - Field IDs/names.
   - Rich text format: HTML, Markdown, block JSON, portable text, MDX, plain text.
   - Media handling.
   - Slug/canonical behavior.
   - Locale/localization behavior.
   - Draft/publish states.
   - Custom code/schema support.

3. Transform content.
   - Convert rich text to the destination format.
   - Preserve headings, links, tables, images, alt text, FAQs, and schema.
   - Strip unsupported markup only with a warning.
   - Keep page metadata separate from body content.
   - Keep schema separate or embedded based on destination support.

4. Validate before write.
   - Required fields present.
   - Slug valid and not colliding unless update is intended.
   - Canonical valid.
   - Links present and not obvious placeholders.
   - Images uploaded or mapped.
   - Alt text present.
   - Schema matches visible content.
   - Draft/publish status matches permission.
   - Existing ranked page title/meta/slug changes are not happening unless explicitly approved.

5. Upload/store assets.
   - Reuse existing approved assets where possible.
   - Upload to CMS media library, object storage, or configured destination.
   - Record public URLs, asset IDs, mime types, dimensions, and alt text.
   - If asset upload fails, stop or package with clear manual follow-up depending on policy.

6. Create/update/package.
   - Create new draft when allowed.
   - Update existing item only for in-scope fields.
   - Preserve existing draft status by default.
   - For static-site repos, prepare file changes but follow repo/publishing policy separately.
   - For document destinations, preserve headings, links, tables, images, and schema handoff notes.

7. Read back and verify.
   - Fetch the created/updated item.
   - Confirm title, slug, meta, body, images, schema, category/tags, status.
   - Confirm no raw Markdown is showing in HTML-only fields and no HTML is escaped in rich-text fields.
   - Confirm visible FAQ matches FAQ schema when available.
   - Confirm image URLs render or at least are reachable through adapter readback.

8. Return publishing result.

## Output Format

Return:

- Destination and action performed.
- Item/document/file ID.
- Draft/published status.
- URL or preview URL when available.
- Field mapping used.
- Asset mapping.
- Schema placement.
- Readback validation result.
- Preserved fields.
- Manual follow-ups.
- Residual risks.

## Manual Handoff Package

If no CMS/API is connected, return:

- body content in requested format
- title
- slug
- meta description
- category/tags
- author/date
- schema JSON-LD
- image files/URLs with alt text
- internal/external link list
- publishing checklist

## Failure Conditions

Fail or stop for human approval if:

- Publishing permission is unclear.
- Destination schema is unknown and cannot be inferred.
- Required fields are missing.
- Asset upload fails for required images and policy requires complete drafts.
- Existing ranked title/meta/slug would be changed without approval.
- Readback contradicts intended content.
- CMS API reports success but required content is missing.
- Draft status would be changed unintentionally.
