import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { isPublishedGuide, blouGuides } from "@/lib/blouGuides";
import { countries } from "@/lib/countryData";
import { calculatorLanguageAlternates } from "@/lib/countryHreflang";
import { staticRoutes } from "@/lib/staticRoutes";

/**
 * Notes:
 * - `lastModified` is intentionally per-route. Bumping it on every deploy is
 *   noise to search engines.
 * - `changeFrequency` and `priority` are intentionally omitted: Google has
 *   confirmed it ignores both. Removing them keeps the sitemap honest.
 * - Each country calculator advertises its locale via hreflang to the others.
 */

const SITEMAP_GENERATED_AT = new Date().toISOString();

const countryLanguageMap = Object.fromEntries(
  Object.entries(calculatorLanguageAlternates(countries)).map(([lang, path]) => [
    lang,
    `${SITE_URL}${path}`,
  ]),
);

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

  return [...staticEntries, ...guideEntries, ...countryEntries];
}
