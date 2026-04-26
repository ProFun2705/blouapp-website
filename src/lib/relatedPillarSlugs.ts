/**
 * URL path segments for static pillar/cluster pages shown in `RelatedGuides`.
 *
 * **When you add a new page:** (1) Add a constant here. (2) Register title, href, and
 * category in `RELATED_LINK_MAP` in `@/components/marketing/RelatedGuides`. (3) Add the
 * URL in `src/app/sitemap.ts`. (4) Link from relevant hubs (`/how-to-quit-smoking`,
 * `/prepare-to-quit-smoking`, tools, etc.) and optionally from `relatedSlugs` in
 * `blouGuides.ts` for topic-specific guides.
 */
export const RELATED_PILLAR_SLUGS = {
  iSmokedOneCigarette: "i-smoked-one-cigarette",
} as const;

export type RelatedPillarSlug =
  (typeof RELATED_PILLAR_SLUGS)[keyof typeof RELATED_PILLAR_SLUGS];
