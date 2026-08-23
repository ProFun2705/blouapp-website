"use client";

import { trackAmplitudeEvent } from "@/lib/amplitude-sync";

type GtagFn = (
  command: "event",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { gtag?: GtagFn }).gtag;
}

/**
 * Fire a marketing/product event to GA4 (gtag) and Amplitude when consented.
 */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;

  const gtag = getGtag();
  gtag?.("event", name, params);
  void trackAmplitudeEvent(name, params);
}
