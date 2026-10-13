"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/track";

function isOutboundLink(anchor: HTMLAnchorElement): boolean {
  if (!anchor.href) return false;
  try {
    const target = new URL(anchor.href);
    return target.host !== window.location.host && target.protocol.startsWith("http");
  } catch {
    return false;
  }
}

/**
 * Global listeners so server components can be tracked without client code:
 * - `<a data-event="…" data-event-label="…" data-event-campaign="…">` clicks
 * - outbound link clicks
 * - FAQ expands on `<details data-faq="question">`
 * - 75% scroll depth
 */
export function AnalyticsListeners() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const el = anchor as HTMLAnchorElement;

      const explicitEvent = el.dataset.event;
      if (explicitEvent) {
        trackEvent(explicitEvent, {
          placement: el.dataset.eventLabel ?? "unlabeled",
          campaign: el.dataset.eventCampaign ?? "",
          href: el.getAttribute("href") ?? "",
        });
      }

      if (isOutboundLink(el)) {
        let host = "";
        try {
          host = new URL(el.href).host;
        } catch {
          host = "unknown";
        }
        trackEvent("outbound_click", {
          href: el.href,
          host,
          text: (el.textContent ?? "").trim().slice(0, 60),
        });
      }
    }

    function onToggle(event: Event) {
      const el = event.target as HTMLElement | null;
      if (!(el instanceof HTMLDetailsElement) || !el.open) return;
      const question = el.dataset.faq;
      if (question) trackEvent("faq_expand", { question });
    }

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("toggle", onToggle, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("toggle", onToggle, { capture: true });
    };
  }, []);

  useEffect(() => {
    let fired = false;
    function onScroll() {
      if (fired) return;
      const doc = document.documentElement;
      const ratio = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (ratio >= 0.75) {
        fired = true;
        trackEvent("scroll_75");
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
