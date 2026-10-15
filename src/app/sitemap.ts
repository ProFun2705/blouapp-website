import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { isPublishedGuide, blouGuides } from "@/lib/blouGuides";
import { countries } from "@/lib/countryData";
import { staticRoutes } from "@/lib/staticRoutes";
import { US_STATES } from "@/lib/stateData";

/**
 * Notes:
 * - `lastModified` is intentionally per-route. Bumping it on every deploy is
 *   noise to search engines.
 * - `changeFrequency` and `priority` are intentionally omitted: Google has
 *   confirmed it ignores both. Removing them keeps the sitemap honest.
 * - Each country calculator advertises its locale via hreflang to the others.
 */

const SITEMAP_GENERATED_AT = new Date().toISOString();

const countryLanguageMap: Record<string, string> = {
  ...Object.fromEntries(
    countries.map((c) => [c.hreflang, `${SITE_URL}/calculators/${c.slug}`]),
  ),
  "x-default": `${SITE_URL}/calculators`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: r.lastModified,
  }));

  const guideEntries: MetadataRoute.Sitemap = blouGuides
    .filter(isPublishedGuide)
    .map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: g.dateModified,
      images: [`${SITE_URL}/guides/${g.slug}/opengraph-image`],
    }));

  const countryEntries: MetadataRoute.Sitemap = countries.map((c) => ({
    url: `${SITE_URL}/calculators/${c.slug}`,
    // Anchor lastmod to the price-data vintage so the sitemap doesn't shift on
    // every deploy. Falls back to the build timestamp if `priceAsOf` is empty.
    lastModified: c.priceAsOf ? `${c.priceAsOf}-01-01` : SITEMAP_GENERATED_AT,
    alternates: { languages: countryLanguageMap },
  }));

  const stateEntries: MetadataRoute.Sitemap = US_STATES.map((st) => ({
    url: `${SITE_URL}/quit-smoking-help/${st.slug}`,
    lastModified: st.quitline?.verifiedOn ?? "2026-10-15",
  }));

  return [...staticEntries, ...guideEntries, ...countryEntries, ...stateEntries];
}
