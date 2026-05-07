"use client";

import {
  ANALYTICS_CONSENT_DENIED,
  ANALYTICS_CONSENT_GRANTED,
  ANALYTICS_CONSENT_STORAGE_KEY,
} from "./analytics-consent";

let initAllCompleted = false;
let unifiedLoad: Promise<typeof import("@amplitude/unified")> | null = null;

function loadUnified() {
  unifiedLoad ??= import("@amplitude/unified");
  return unifiedLoad;
}

function getApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
}

function getSessionReplaySampleRate(): number {
  const raw = process.env.NEXT_PUBLIC_AMPLITUDE_SESSION_REPLAY_SAMPLE_RATE;
  if (raw === undefined || raw === "") return 1;
  const n = Number(raw);
  if (!Number.isFinite(n)) return 1;
  return Math.min(1, Math.max(0, n));
}

export function readAnalyticsConsent():
  | typeof ANALYTICS_CONSENT_GRANTED
  | typeof ANALYTICS_CONSENT_DENIED
  | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    if (value === ANALYTICS_CONSENT_GRANTED || value === ANALYTICS_CONSENT_DENIED) {
      return value;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export async function syncAmplitudeWithConsent(
  consent: ReturnType<typeof readAnalyticsConsent>,
) {
  if (typeof window === "undefined") return;

  const apiKey = getApiKey();
  if (!apiKey) return;

  const amplitude = await loadUnified();

  if (consent === ANALYTICS_CONSENT_DENIED) {
    if (initAllCompleted) amplitude.setOptOut(true);
    return;
  }

  if (consent !== ANALYTICS_CONSENT_GRANTED) return;

  if (!initAllCompleted) {
    await amplitude.initAll(apiKey, {
      analytics: { autocapture: true },
      sessionReplay: { sampleRate: getSessionReplaySampleRate() },
    });
    initAllCompleted = true;
  } else {
    amplitude.setOptOut(false);
  }
}

export async function trackAmplitudeEvent(
  name: string,
  properties?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  if (readAnalyticsConsent() !== ANALYTICS_CONSENT_GRANTED) return;
  if (!getApiKey()) return;

  const amplitude = await loadUnified();
  if (amplitude.getOptOut() === true) return;
  void amplitude.track(name, properties);
}
