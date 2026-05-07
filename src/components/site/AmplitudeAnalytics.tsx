"use client";

import { useEffect } from "react";
import {
  ANALYTICS_CONSENT_CHANGED_EVENT,
  ANALYTICS_CONSENT_STORAGE_KEY,
} from "@/lib/analytics-consent";
import {
  readAnalyticsConsent,
  syncAmplitudeWithConsent,
} from "@/lib/amplitude-sync";

export function AmplitudeAnalytics() {
  useEffect(() => {
    function apply() {
      void syncAmplitudeWithConsent(readAnalyticsConsent());
    }

    apply();
    window.addEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, apply);
    function onStorage(event: StorageEvent) {
      if (event.key === ANALYTICS_CONSENT_STORAGE_KEY || event.key === null) {
        apply();
      }
    }
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_CHANGED_EVENT, apply);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return null;
}
