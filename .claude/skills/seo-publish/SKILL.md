---
name: seo-publish
description: 'Publish a QA-passed Blou article: push it straight to main as ProFun2705 (no PR), confirm it is live, and close the Linear issue. Use only after a PASS verdict.'
---

<!-- Generic workflow adapted from RomeoSEO free SEO skills v2 (https://romeoseo.com/skills, file 07-cms-publishing-adapter.skill.md). The Blou setup section is specific to this repo. -->

## Blou setup (read this before the generic instructions below)

Destination: **static-site repo** (this Next.js app). Publishing = pushing to `main` on `ProFun2705/blouapp-website`, which Vercel deploys automatically. **No pull requests:** the owner wants QA-passed articles pushed straight to `main`.

Steps:

1. Check the gate: `seo/qa/<KEY>.md` exists on the branch and says `Status: PASS`. If it doesn't, stop.
2. Bring the branch up to date and land it on `main` without a merge commit:
   ```bash
   git fetch origin
   git rebase origin/main            # on seo/<KEY>-<slug>; on conflicts, stop and comment on the issue
   npm run build                     # must still pass after the rebase
   git switch main && git merge --ff-only origin/main && git merge --ff-only seo/<KEY>-<slug>
   ```
3. Push as **ProFun2705** (the default gh account, George-Kreatli, is read-only on this repo), then switch back:
   ```bash
   gh auth switch --user ProFun2705
   git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push origin main
   gh auth switch --user George-Kreatli
   git branch -d seo/<KEY>-<slug>
   ```
   Always run the switch back, even when the push fails.

After the deploy is live (wait until `https://tryblou.com/<slug>` returns 200 and shows the new H1; Vercel usually takes 1-3 minutes):

1. Don't ping IndexNow. The owner submits new URLs to Bing by hand (Linear BLO-22) and requests indexing in GSC by hand, so put the live URL in the Done comment where they can copy it.
2. For new pages, add "Needs manual Bing + GSC submission" to that comment.
3. Set `linearIssue` and `suppressUntil` (+21 days) on the page's record in `seo/data/inventory.json`, commit, and push to `main` the same way.
4. Move the Linear issue to **Done** with a comment: live URL, commit SHA, publish date.

Check with one bounded command, never an open-ended loop. Look for something only the new version has (the H1 for a new page, or a string the change added), because Vercel can serve an old cached page with status 200:

```bash
for i in $(seq 1 20); do curl -s https://tryblou.com/<slug> | grep -q '<string only the new version has>' && echo LIVE && break; sleep 30; done
```

If it doesn't print LIVE (10 minutes), stop waiting. Leave the issue In Review with a comment giving the commit SHA and saying the deploy didn't show up (see BLO-23), then end the run. Don't revert on your own.

Never: force-push `main`, change the slug or title of a page with GSC clicks without the brief saying so, or publish without a PASS verdict in `seo/qa/<KEY>.md`.

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
