import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} – ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
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
            gap: 16,
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            opacity: 0.95,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "white",
              color: "#0f766e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            B
          </div>
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 60,
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: 940,
          }}
        >
          Quit smoking, tracked simply.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            fontWeight: 400,
            opacity: 0.92,
            maxWidth: 940,
            lineHeight: 1.35,
          }}
        >
          Cravings, savings, and recovery — visualized for iPhone.
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 24,
            opacity: 0.85,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          tryblou.com
        </div>
      </div>
    ),
    { ...size },
  );
}
