"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
      className="fixed inset-x-3 z-40 flex items-center justify-between gap-3 rounded-sm border border-teal-200 bg-white p-3 shadow-lg md:hidden motion-safe:animate-[none]"
      role="region"
      aria-label="Download Blou"
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logos/blou-logo.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-sm object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-teal-950">Track your quit</p>
          <p className="text-xs text-teal-900/70">Free for iPhone</p>
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
          className="pressable flex h-11 w-11 items-center justify-center rounded-sm border border-teal-200 text-teal-900 hover:bg-teal-50"
        >
          <span aria-hidden>×</span>
        </button>
      </div>
    </div>
  );
}
