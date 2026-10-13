import { ImageResponse } from "next/og";
import { ogLogoDataUrl } from "@/lib/ogLogo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} – ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await ogLogoDataUrl();
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
          <img src={logo} width={56} height={56} alt="" style={{ borderRadius: 14 }} />
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 60,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: 940,
          }}
        >
          See your body heal after your last cigarette.
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
          Quit smoking app for iPhone: photo timeline, lung checks, SOS craving help.
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
