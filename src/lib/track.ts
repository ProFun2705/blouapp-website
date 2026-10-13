"use client";

import { trackAmplitudeEvent } from "@/lib/amplitude-sync";

type GtagFn = (...args: unknown[]) => void;

/** Sends one event to GA4 and Amplitude. Both respect the stored consent. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const payload = { page_path: window.location.pathname, ...params };
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === "function") gtag("event", name, payload);
  void trackAmplitudeEvent(name, payload);
}
