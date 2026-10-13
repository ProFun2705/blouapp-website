type JsonLdProps = {
  data: Record<string, unknown> | ReadonlyArray<Record<string, unknown>>;
};

/**
 * Renders structured data as a native `<script type="application/ld+json">`
 * so it is present in the server HTML for every crawler (per the Next.js JSON-LD
 * guide). `next/script` only injects it client-side, which Bing and AI crawlers miss.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
