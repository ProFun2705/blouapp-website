import { APP_STORE_CANONICAL_URL } from "@/lib/site";

export { APP_STORE_CANONICAL_URL };

const TOKEN_PATTERN = /[^a-z0-9_-]/g;

/** Normalizes a campaign or placement name into an App Store-safe token. */
export function toCampaignToken(value: string): string {
  return value.toLowerCase().replace(TOKEN_PATTERN, "_").slice(0, 40);
}

type BuildAppStoreUrlOptions = {
  /** Page-level campaign, e.g. "guide_dreams-and-sleep" or "home". */
  campaign: string;
  /** Where on the page the CTA sits, e.g. "hero", "inline", "end", "sticky". */
  placement: string;
};

/**
 * Direct App Store URL with attribution. App Store Connect reports installs by
 * `ct` (campaign token) only when `pt` (provider token) is present, so set
 * NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN from App Store Connect → Analytics →
 * Campaigns. `utm_*` is kept for GA referral reports.
 */
export function buildAppStoreUrl({ campaign, placement }: BuildAppStoreUrlOptions): string {
  const url = new URL(APP_STORE_CANONICAL_URL);
  const ct = toCampaignToken(`${campaign}-${placement}`);
  const pt = process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN;

  if (pt) url.searchParams.set("pt", pt);
  url.searchParams.set("ct", ct);
  url.searchParams.set("mt", "8");
  url.searchParams.set("utm_source", "tryblou.com");
  url.searchParams.set("utm_medium", placement);
  url.searchParams.set("utm_campaign", campaign);

  return url.toString();
}

/**
 * Site-internal link that counts the click server-side (independent of cookie
 * consent) and then redirects to the App Store. Use this for every CTA.
 */
export function appStoreHref({ campaign, placement }: BuildAppStoreUrlOptions): string {
  const params = new URLSearchParams({
    c: toCampaignToken(campaign),
    p: toCampaignToken(placement),
  });
  return `/go/app?${params.toString()}`;
}
