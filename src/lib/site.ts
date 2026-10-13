const siteUrlFromEnv = process.env.NEXT_PUBLIC_SITE_URL;
if (!siteUrlFromEnv) {
  throw new Error(
    "Missing NEXT_PUBLIC_SITE_URL. Set it in Vercel Environment Variables (and in .env.local for local dev).",
  );
}

export const SITE_URL = siteUrlFromEnv.replace(/\/+$/, "");
export const SITE_NAME = "Blou";
export const SITE_TAGLINE = "See your body heal after your last cigarette";
export const SITE_DESCRIPTION =
  "Blou is a quit smoking app for iPhone that shows proof you're healing: a photo timeline, lung checks, SOS craving help, and every milestone visualized. Free guides, symptom timelines, and calculators.";

/**
 * Pricing truth. Blou is a subscription app with a free trial; nothing in the
 * app works without an active subscription. Every pricing mention on the site
 * must come from these constants, never "free app" wording.
 */
export const PRICING_SHORT = "Free trial, then a subscription";
export const PRICING_CTA_NOTE = "iPhone · Free trial, then a subscription. Cancel anytime in the App Store.";
export const PRICING_FAQ = {
  question: "Is Blou free?",
  answer:
    "Blou is a subscription app with a free trial. Start the trial in the App Store, and cancel anytime in your Apple ID subscriptions before it renews. The guides, timelines, and calculators on this website are free to use.",
} as const;

/** Core app features, matching the App Store listing. */
export const APP_FEATURES = [
  {
    title: "Photo timeline",
    body: "See your face change over time in one photo timeline.",
  },
  {
    title: "Lung checks",
    body: "Simple breath checks that show your lungs getting stronger.",
  },
  {
    title: "SOS craving help",
    body: "Instant help the second a craving hits.",
  },
  {
    title: "Every milestone visualized",
    body: "Watch your whole journey unfold on one visual timeline.",
  },
] as const;

export const CONTACT_EMAIL = "hello.blou.app@gmail.com";

export const APP_STORE_CANONICAL_URL =
  "https://apps.apple.com/us/app/quit-smoking-tracker-blou/id6758997298";

export const APP_STORE_APP_ID = "6758997298";

/**
 * Public social/profile URLs Blou owns. These feed `Organization.sameAs` for
 * entity disambiguation in Google/Bing. Add a URL here only after the profile
 * is live and consistently branded — do not include placeholders or empty
 * accounts (it weakens the entity signal).
 */
export const SOCIAL_PROFILE_URLS: readonly string[] = [
  // "https://x.com/tryblou",
  // "https://www.instagram.com/tryblou",
  // "https://www.tiktok.com/@tryblou",
  // "https://www.linkedin.com/company/tryblou",
  // "https://www.youtube.com/@tryblou",
];

export const AUTHOR = {
  name: "Heorhi Talochka",
  role: "Founder, Blou",
  url: `${SITE_URL}/about`,
} as const;

export const MEDICAL_REVIEWER = {
  name: "Blou editorial team",
  role: "Reviewed against NHS, CDC, and WHO public guidance",
  url: `${SITE_URL}/about#editorial`,
} as const;

export const SUPPORTED_LOCALES = ["en", "en-US", "en-GB", "en-AU"] as const;

export const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logos/blou-logo-black-name.png`,
  sameAs: [APP_STORE_CANONICAL_URL, ...SOCIAL_PROFILE_URLS],
  email: CONTACT_EMAIL,
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  description: SITE_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

/**
 * No `offers` block: Blou is a subscription app and we do not publish a price
 * here. A `price: "0"` offer would misstate the pricing to search engines.
 */
export const SOFTWARE_APPLICATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: `${SITE_NAME} – Quit Smoking Tracker`,
  operatingSystem: "iOS 17.0 or later",
  applicationCategory: "HealthApplication",
  url: APP_STORE_CANONICAL_URL,
  installUrl: APP_STORE_CANONICAL_URL,
  description:
    "Quit smoking app for iPhone with a photo timeline, lung checks, SOS craving support, and visual milestones. Free trial, then a subscription.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};
