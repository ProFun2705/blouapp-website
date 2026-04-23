export const SITE_URL = "https://tryblou.com";
export const SITE_NAME = "Blou";
export const SITE_TAGLINE = "Quit smoking, tracked simply";
export const SITE_DESCRIPTION =
  "Blou is a quit smoking tracker for iPhone. Visualize cravings, savings, and health recovery with evidence-based guides, symptom timelines, and country calculators.";

export const CONTACT_EMAIL = "hello.blou.app@gmail.com";

export const APP_STORE_CANONICAL_URL =
  "https://apps.apple.com/us/app/quit-smoking-tracker-blou/id6758997298";

export const APP_STORE_APP_ID = "6758997298";

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
  sameAs: [APP_STORE_CANONICAL_URL],
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

export const SOFTWARE_APPLICATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${SITE_NAME} – Quit Smoking Tracker`,
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  url: APP_STORE_CANONICAL_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Visual quit-smoking tracker: streaks, milestones, money saved, craving support, and recovery timelines.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};
