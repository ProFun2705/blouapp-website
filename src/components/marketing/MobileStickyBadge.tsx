"use client";

import { useEffect, useState } from "react";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";

type Props = {
  campaign: string;
};

const STORAGE_KEY = "blou_sticky_badge_dismissed_at";
const DISMISS_TTL_MS = 1000 * 60 * 60 * 24 * 7;

export function MobileStickyBadge({ campaign }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      if (value) {
        const ts = Number(value);
        if (Number.isFinite(ts) && Date.now() - ts < DISMISS_TTL_MS) {
          return;
        }
      }
    } catch {
      // ignore storage failures
    }

    const onScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-2xl border border-teal-200 bg-white/95 p-3 shadow-lg backdrop-blur md:hidden"
      role="region"
      aria-label="Download Blou"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-teal-100" aria-hidden />
        <div>
          <p className="text-sm font-semibold text-teal-950">Track your quit</p>
          <p className="text-xs text-teal-900/70">Free for iPhone · 4.8★</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <AppStoreBadgeLink
          campaign={campaign}
          placement="landing_sticky_mobile"
          height={40}
        />
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss App Store download prompt"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-teal-200 text-teal-900 hover:bg-teal-50"
        >
          <span aria-hidden>×</span>
        </button>
      </div>
    </div>
  );
}
