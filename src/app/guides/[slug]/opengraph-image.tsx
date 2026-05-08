import { ImageResponse } from "next/og";
import { blouGuideBySlug, isPublishedGuide, publishedGuides } from "@/lib/blouGuides";
import { SITE_NAME } from "@/lib/site";

export const alt = "Blou guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return publishedGuides.map((g) => ({ slug: g.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = blouGuideBySlug[slug];
  const headline =
    guide && isPublishedGuide(guide) ? guide.title : SITE_NAME;
  const sub =
    guide && isPublishedGuide(guide)
      ? guide.category === "milestone"
        ? "Quit smoking · Milestone guide"
        : "Quit smoking · Symptom guide"
      : "Quit smoking, tracked simply.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            fontWeight: 600,
            opacity: 0.95,
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "white",
              color: "#0f766e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            B
          </div>
          {SITE_NAME}
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            opacity: 0.9,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          {sub}
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {headline}
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: 22,
            opacity: 0.85,
          }}
        >
          tryblou.com/guides
        </div>
      </div>
    ),
    { ...size },
  );
}
