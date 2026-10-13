import Image from "next/image";
import { appStoreHref } from "@/lib/appStore";

type AppStoreBadgeLinkProps = {
  /** Page-level campaign, e.g. "home" or "guide_dreams-and-sleep". */
  campaign: string;
  /** Position on the page: "hero", "intro", "inline", "end", "sticky", "header"… */
  placement: string;
  height?: number;
  className?: string;
};

const BADGE_WIDTH = 120;
const BADGE_HEIGHT = 40;

/**
 * Official App Store badge. Links through /go/app so every click is counted
 * server-side; the global AnalyticsListeners also sends `app_store_click`.
 */
export function AppStoreBadgeLink({
  campaign,
  placement,
  height = 48,
  className = "inline-flex items-center rounded-lg transition motion-safe:hover:-translate-y-0.5",
}: AppStoreBadgeLinkProps) {
  const width = Math.round((BADGE_WIDTH / BADGE_HEIGHT) * height);

  return (
    <a
      href={appStoreHref({ campaign, placement })}
      target="_blank"
      rel="noopener"
      className={className}
      data-event="app_store_click"
      data-event-label={placement}
      data-event-campaign={campaign}
    >
      <Image
        src="/badges/download-on-the-app-store-us-uk.svg"
        alt="Download Blou on the App Store"
        width={width}
        height={height}
        unoptimized
      />
    </a>
  );
}
