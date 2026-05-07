import {
  ANALYTICS_CONSENT_DENIED,
  ANALYTICS_CONSENT_GRANTED,
  ANALYTICS_CONSENT_STORAGE_KEY,
} from "./analytics-consent";

let amplitudeInitStarted = false;
let amplitudeLoad: Promise<typeof import("@amplitude/analytics-browser")> | null =
  null;

function loadAmplitude() {
  amplitudeLoad ??= import("@amplitude/analytics-browser");
  return amplitudeLoad;
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
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  if (!apiKey) return;

  const amp = await loadAmplitude();

  if (consent === ANALYTICS_CONSENT_DENIED) {
    if (amplitudeInitStarted) amp.setOptOut(true);
    return;
  }

  if (consent !== ANALYTICS_CONSENT_GRANTED) return;

  if (!amplitudeInitStarted) {
    amp.init(apiKey);
    amplitudeInitStarted = true;
  } else {
    amp.setOptOut(false);
  }
}

export async function trackAmplitudeEvent(
  name: string,
  properties?: Record<string, unknown>,
) {
  if (readAnalyticsConsent() !== ANALYTICS_CONSENT_GRANTED) return;
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  if (!apiKey) return;
  const amp = await loadAmplitude();
  if (amp.getOptOut() === true) return;
  void amp.track(name, properties);
}
