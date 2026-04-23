import { APP_STORE_CANONICAL_URL } from "@/lib/site";

export { APP_STORE_CANONICAL_URL };

type AppStoreCampaign = string;

type BuildAppStoreUrlOptions = {
  campaign: AppStoreCampaign;
  source?: string;
  medium?: string;
  itscg?: string;
  itsct?: string;
  mttnsubad?: string;
};

export function buildAppStoreUrl({
  campaign,
  source = "website",
  medium = "badge",
  itscg = "30200",
  itsct = "web_badge",
  mttnsubad = "blou_web",
}: BuildAppStoreUrlOptions): string {
  const url = new URL(APP_STORE_CANONICAL_URL);

  url.searchParams.set("itscg", itscg);
  url.searchParams.set("itsct", itsct);
  url.searchParams.set("mttnsubad", mttnsubad);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);

  return url.toString();
}
