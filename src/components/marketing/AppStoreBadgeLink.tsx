"use client";

import Image from "next/image";
import { buildAppStoreUrl } from "@/lib/appStore";

type AppStoreBadgePlacement =
  | "landing_hero"
  | "landing_sticky_mobile"
  | "article_intro"
  | "article_footer_card"
  | "tool_money_calculator"
  | "tool_lung_recovery"
  | "tools_index"
  | "calculators_index"
  | `country_calculator_${string}`;

type AppStoreBadgeLinkProps = {
  campaign: string;
  placement: AppStoreBadgePlacement;
  height?: number;
  className?: string;
  onClickTrack?: (payload: { placement: string; destination: string }) => void;
};

const DEFAULT_HEIGHT = 54;
const BADGE_WIDTH = 120;
const BADGE_HEIGHT = 40;

export function AppStoreBadgeLink({
  campaign,
  placement,
  height = DEFAULT_HEIGHT,
  className,
  onClickTrack,
}: AppStoreBadgeLinkProps) {
  const href = buildAppStoreUrl({
    campaign,
    itsct: placement,
    mttnsubad: placement,
  });

  const width = Math.round((BADGE_WIDTH / BADGE_HEIGHT) * height);

  const handleClick = () => {
    const payload = { placement, destination: href };
    onClickTrack?.(payload);

    if (typeof window !== "undefined" && "gtag" in window) {
      type GtagFn = (
        command: "event",
        eventName: string,
        params: Record<string, string>,
      ) => void;
      const gtag = window.gtag as GtagFn | undefined;
      gtag?.("event", "app_store_badge_click", payload);
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={
        className ??
        "inline-flex items-center rounded-lg shadow-sm ring-1 ring-black/5 transition motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
      }
      onClick={handleClick}
    >
      <Image
        src="/badges/download-on-the-app-store-us-uk.svg"
        alt="Download on the App Store"
        width={width}
        height={height}
        unoptimized
      />
    </a>
  );
}

