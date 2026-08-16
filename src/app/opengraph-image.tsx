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
          background: "#eef1ea",
          color: "#141714",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#141714",
            color: "#eef1ea",
            padding: "28px 80px",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <span>{SITE_NAME}</span>
          <span style={{ color: "#4cba68" }}>×</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 80px",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
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
              marginTop: 24,
              fontSize: 28,
              color: "#5c635c",
              maxWidth: 860,
              lineHeight: 1.35,
            }}
          >
            Mark the day. See the streak. Free on iPhone.
          </div>
          <div
            style={{
              marginTop: 48,
              fontSize: 22,
              color: "#5c635c",
            }}
          >
            tryblou.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
