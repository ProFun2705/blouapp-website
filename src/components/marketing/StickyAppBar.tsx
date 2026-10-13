"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { appStoreHref } from "@/lib/appStore";
import {
  ANALYTICS_CONSENT_CHANGED_EVENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
} from "@/lib/analytics-consent";

const DISMISS_KEY = "blou_sticky_bar_dismissed_at";
const DISMISS_TTL_MS = 1000 * 60 * 60 * 24 * 7;
const HIDDEN_ON = ["/privacy", "/terms"];

function consentDecided(): boolean {
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY) !== null;
  } catch {
    return true;
  }
}

function recentlyDismissed(): boolean {
  try {
    const ts = Number(window.localStorage.getItem(DISMISS_KEY));
    return Number.isFinite(ts) && Date.now() - ts < DISMISS_TTL_MS;
  } catch {
    return false;
  }
}

function campaignFor(pathname: string): string {
  if (pathname === "/") return "home";
  return pathname.replace(/^\//, "").replace(/\//g, "_");
}

/**
 * Mobile-only bar that appears after the reader scrolls. It waits until the
 * cookie banner is answered so the two never stack on top of each other.
 */
export function StickyAppBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [blocked, setBlocked] = useState(true);

  useEffect(() => {
    const update = () => setBlocked(!consentDecided() || recentlyDismissed());
    queueMicrotask(update);
    window.addEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, update);

    const onScroll = () => setScrolled(window.scrollY > 600);
    queueMicrotask(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, update);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (blocked || !scrolled || HIDDEN_ON.includes(pathname)) return null;

  function dismiss() {
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      // ignore storage failures
    }
    setBlocked(true);
  }

  return (
    <div
      role="region"
      aria-label="Get the Blou app"
      className="fixed inset-x-3 z-40 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 shadow-lg backdrop-blur md:hidden"
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Image src="/logos/blou-logo.png" alt="" width={40} height={40} className="rounded-xl" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink">See your body heal</p>
        <p className="truncate text-xs text-ink-muted">iPhone · Free trial, then subscription</p>
      </div>
      <a
        href={appStoreHref({ campaign: campaignFor(pathname), placement: "sticky" })}
        target="_blank"
        rel="noopener"
        className="inline-flex min-h-11 items-center rounded-full bg-accent-strong px-4 text-sm font-semibold text-white"
        data-event="app_store_click"
        data-event-label="sticky"
        data-event-campaign={campaignFor(pathname)}
      >
        Get Blou
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-ink-muted hover:bg-surface-muted"
      >
        <span aria-hidden className="text-lg leading-none">×</span>
      </button>
    </div>
  );
}
