"use client";

import { usePathname } from "next/navigation";
import { MobileStickyBadge } from "@/components/marketing/MobileStickyBadge";

const EXCLUDED_PREFIXES = ["/privacy", "/terms"];

function stickyCampaignForPath(pathname: string): string | null {
  if (pathname === "/") return "landing_sticky_mobile";
  if (EXCLUDED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }
  if (pathname.startsWith("/blou-vs-")) {
    return `comparison_sticky_${pathname.slice("/blou-vs-".length)}`;
  }
  if (pathname.startsWith("/guides/")) return "guide_sticky_mobile";
  if (pathname.startsWith("/tools/")) {
    return `tool_sticky_${pathname.slice("/tools/".length).replace(/\//g, "_")}`;
  }
  if (pathname.startsWith("/calculators/")) {
    return `calculator_sticky_${pathname.slice("/calculators/".length)}`;
  }
  if (pathname.startsWith("/compare")) return "compare_hub_sticky";
  if (pathname.startsWith("/kwit-vs-") || pathname.startsWith("/smoke-free-vs-")) {
    return "competitor_compare_sticky";
  }
  // Pillar and hub pages
  if (pathname !== "/about" && pathname !== "/calculators") {
    const slug = pathname.replace(/^\//, "").replace(/\//g, "_") || "home";
    return `pillar_sticky_${slug}`;
  }
  return null;
}

export function ContentPageStickyBadge() {
  const pathname = usePathname();
  const campaign = stickyCampaignForPath(pathname);
  if (!campaign) return null;
  return <MobileStickyBadge campaign={campaign} />;
}
