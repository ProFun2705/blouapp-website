import { NextResponse } from "next/server";
import { indexNowSecret, submitToIndexNow } from "@/lib/indexnow";
import { isPublishedGuide, blouGuides } from "@/lib/blouGuides";
import { countries } from "@/lib/countryData";
import { staticRoutes } from "@/lib/staticRoutes";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

/**
 * Submit URLs to IndexNow (Bing/Yandex/Naver). Two modes:
 *
 *   POST /api/indexnow            → submits ALL canonical URLs we ship (sitemap parity).
 *   POST /api/indexnow            → with body { urls: ["https://tryblou.com/x", ...] }
 *                                   submits only those URLs.
 *
 * Always requires header `x-indexnow-secret` to match INDEXNOW_SECRET (or
 * INDEXNOW_KEY when INDEXNOW_SECRET is unset). Trigger this endpoint after a
 * deploy via a Vercel Deploy Hook, GitHub Action, or manual `curl`.
 */
export async function POST(request: Request) {
  const expected = indexNowSecret();
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "INDEXNOW_KEY/INDEXNOW_SECRET not configured" },
      { status: 500 },
    );
  }

  const provided = request.headers.get("x-indexnow-secret");
  if (provided !== expected) {
    return NextResponse.json(
      { ok: false, error: "unauthorized" },
      { status: 401 },
    );
  }

  let urls: string[] = [];
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => null)) as
      | { urls?: unknown }
      | null;
    if (body && Array.isArray(body.urls)) {
      urls = body.urls.filter((u): u is string => typeof u === "string");
    }
  }

  if (urls.length === 0) {
    urls = collectAllUrls();
  }

  const result = await submitToIndexNow(urls);
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}

function collectAllUrls(): string[] {
  const staticUrls = staticRoutes.map((r) => `${SITE_URL}${r.path}`);
  const guideUrls = blouGuides
    .filter(isPublishedGuide)
    .map((g) => `${SITE_URL}/guides/${g.slug}`);
  const countryUrls = countries.map((c) => `${SITE_URL}/calculators/${c.slug}`);
  return [...staticUrls, ...guideUrls, ...countryUrls];
}
