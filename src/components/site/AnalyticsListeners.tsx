"use client";

import { useEffect } from "react";

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { gtag?: GtagFn }).gtag;
}

function sendEvent(name: string, params: Record<string, unknown>) {
  const gtag = getGtag();
  if (typeof gtag === "function") gtag("event", name, params);
}

function isOutboundLink(anchor: HTMLAnchorElement): boolean {
  if (!anchor.href) return false;
  try {
    const target = new URL(anchor.href);
    return target.host !== window.location.host && target.protocol.startsWith("http");
  } catch {
    return false;
  }
}

export function AnalyticsListeners() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const el = anchor as HTMLAnchorElement;

      const explicitEvent = el.dataset.event;
      if (explicitEvent) {
        sendEvent(explicitEvent, {
          label: el.dataset.eventLabel ?? "unlabeled",
          href: el.href ?? "",
        });
      }

      if (isOutboundLink(el)) {
        let host = "";
        try {
          host = new URL(el.href).host;
        } catch {
          host = "unknown";
        }
        sendEvent("outbound_click", {
          href: el.href,
          host,
          text: (el.textContent ?? "").trim().slice(0, 60),
        });
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    let fired = false;
    function onScroll() {
      if (fired) return;
      const doc = document.documentElement;
      const scrolled = window.scrollY + window.innerHeight;
      const ratio = scrolled / doc.scrollHeight;
      if (ratio >= 0.75) {
        fired = true;
        sendEvent("guide_scroll_75", {
          path: window.location.pathname,
        });
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
