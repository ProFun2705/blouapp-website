"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "blou_consent_v1";
const GRANTED = "granted";
const DENIED = "denied";

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

export function CookieConsent() {
  const [decision, setDecision] = useState<Decision>(GRANTED);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === GRANTED || stored === DENIED) {
        setDecision(stored);
        applyConsent(stored);
      } else {
        setDecision(null);
      }
    } catch {
      setDecision(null);
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
  }

  if (decision !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-teal-200 bg-white/95 p-4 shadow-lg backdrop-blur md:inset-x-auto md:right-4 md:max-w-md"
    >
      <p className="text-sm leading-6 text-teal-950">
        We use privacy-friendly analytics (Google Analytics with IP anonymization)
        to understand which pages help people quit. No ads, no cross-site
        tracking.
      </p>
      <p className="mt-1 text-xs text-teal-900/70">
        See our{" "}
        <Link
          href="/privacy"
          className="underline decoration-teal-400 underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => persist(DENIED)}
          className="rounded-full border border-teal-300 px-4 py-1.5 text-xs font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Decline analytics
        </button>
        <button
          type="button"
          onClick={() => persist(GRANTED)}
          className="rounded-full bg-teal-700 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-800"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
