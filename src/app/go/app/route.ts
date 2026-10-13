import type { NextRequest } from "next/server";
import { buildAppStoreUrl, toCampaignToken } from "@/lib/appStore";

/**
 * Counts an App Store CTA click without cookies, then redirects to the store.
 * The log line is visible in Vercel → Logs (filter by "app_store_click"); it
 * carries no IP, user agent, or other personal data.
 */
export function GET(request: NextRequest) {
  const campaign = toCampaignToken(request.nextUrl.searchParams.get("c") ?? "unknown");
  const placement = toCampaignToken(request.nextUrl.searchParams.get("p") ?? "unknown");
  const destination = buildAppStoreUrl({ campaign, placement });

  console.log(
    JSON.stringify({ event: "app_store_click", campaign, placement, at: new Date().toISOString() }),
  );

  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
