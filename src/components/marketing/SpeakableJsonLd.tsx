import Script from "next/script";
import { buildSpeakableJsonLd } from "@/lib/seo";

type SpeakableJsonLdProps = {
  name: string;
  path: string;
  /** CSS selectors for speakable passages. Defaults to the pillar quick-answer block. */
  selectors?: string[];
};

export function SpeakableJsonLd({
  name,
  path,
  selectors = ["#quick-answer"],
}: SpeakableJsonLdProps) {
  const jsonLd = buildSpeakableJsonLd({ name, path, selectors });

  return (
    <Script id="speakable-json-ld" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
