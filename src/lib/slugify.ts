/**
 * Produces a stable kebab-case id fragment from a heading for URL hashes and section ids.
 * Paired with `makeSectionId` to avoid collisions across a page.
 */
export function slugifyForSection(text: string): string {
  const base = text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base.slice(0, 80) || "section";
}

export function makeSectionId(index: number, heading: string): string {
  return `section-${index}-${slugifyForSection(heading)}`;
}
