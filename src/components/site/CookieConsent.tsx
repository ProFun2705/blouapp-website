"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_CHANGED_EVENT,
  ANALYTICS_CONSENT_DENIED as DENIED,
  ANALYTICS_CONSENT_GRANTED as GRANTED,
  ANALYTICS_CONSENT_STORAGE_KEY as STORAGE_KEY,
} from "@/lib/analytics-consent";

type Decision = typeof GRANTED | typeof DENIED | null;

function applyConsent(decision: typeof GRANTED | typeof DENIED) {
  if (typeof window === "undefined") return;
  const anyWindow = window as unknown as {
    gtag?: (...args: unknown[]) => void;
  };
  anyWindow.gtag?.("consent", "update", {
    analytics_storage: decision,
    ad_storage: DENIED,
    ad_user_data: DENIED,
    ad_personalization: DENIED,
  });
}

/**
 * Slim bottom bar. Kept to one short line so it never becomes the page's
 * largest paint (it used to be the LCP element on mobile) and never covers
 * more than a strip of the screen.
 */
export function CookieConsent() {
  const [decision, setDecision] = useState<Decision>(GRANTED);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === GRANTED || stored === DENIED) {
        queueMicrotask(() => setDecision(stored));
        applyConsent(stored);
      } else {
        queueMicrotask(() => setDecision(null));
      }
    } catch {
      queueMicrotask(() => setDecision(null));
    }
  }, []);

  function persist(value: typeof GRANTED | typeof DENIED) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    applyConsent(value);
    setDecision(value);
    window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_CHANGED_EVENT));
  }

  if (decision !== null) return null;

  return (
    <div
      role="region"
      aria-label="Analytics consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-surface/95 px-4 py-2 shadow-[0_-4px_16px_rgb(15_61_58/0.08)] backdrop-blur"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <p className="text-xs leading-5 text-ink-muted">
          Analytics help us see which pages help people quit. No ads.{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => persist(DENIED)}
            className="min-h-11 rounded-full px-4 text-xs font-medium text-ink hover:bg-surface-muted"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => persist(GRANTED)}
            className="min-h-11 rounded-full bg-accent-strong px-4 text-xs font-semibold text-white hover:bg-ink"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
