/**
 * Unique BCP-47 hreflang tags for country calculators.
 *
 * All calculator pages are written in English but geo-targeted (currency,
 * hotlines, pack prices). Always emit `en-{REGION}` — never plain `"en"` —
 * so two countries cannot collide when used as Object keys.
 */

export function countryHreflang(slug: string, locale: string): string {
  const region = locale.includes("-") ? locale.split("-").at(-1) : "";
  return region ? `en-${region}` : `en-${slug.toUpperCase()}`;
}

/**
 * Map of unique hreflang → site-relative calculator path.
 * Throws if two countries would share a tag (the VN/ID `"en"` bug).
 */
export function calculatorLanguageAlternates(
  countries: ReadonlyArray<{ slug: string; locale: string }>,
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const country of countries) {
    const tag = countryHreflang(country.slug, country.locale);
    const path = `/calculators/${country.slug}`;
    if (languages[tag]) {
      throw new Error(
        `Duplicate hreflang "${tag}" for ${languages[tag]} and ${path}`,
      );
    }
    languages[tag] = path;
  }
  return languages;
}
