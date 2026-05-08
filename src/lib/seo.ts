import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  /**
   * Optional custom OG/Twitter image. If omitted, the route inherits the
   * dynamically-generated image from `app/opengraph-image.tsx` (and any
   * per-segment override colocated with the page).
   */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  keywords?: string[];
  /** Optional hreflang alternates keyed by language tag (e.g. { "en-US": "/calculators/united-states" }). */
  languages?: Record<string, string>;
};

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex,
  keywords,
  languages,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : undefined;

  const languageAlternates = languages
    ? Object.fromEntries(
        Object.entries(languages).map(([lang, p]) => [
          lang,
          p.startsWith("http") ? p : `${SITE_URL}${p}`,
        ]),
      )
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      ...(languageAlternates ? { languages: languageAlternates } : {}),
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      ...(ogImage
        ? { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] }
        : {}),
      locale: "en_US",
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildFaqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type ArticleJsonLdInput = {
  title: string;
  description: string;
  path: string;
  /**
   * If omitted, Article JSON-LD references the route's auto-generated OG
   * image (`<route>/opengraph-image`). Pass an absolute URL or site-relative
   * path to override.
   */
  image?: string;
  datePublished: string;
  dateModified: string;
  /**
   * ISO date of the most recent editorial / medical review. Surfaces as
   * `lastReviewed` in JSON-LD per Google's E-E-A-T guidance for YMYL pages.
   */
  dateReviewed?: string;
  author: { name: string; url: string };
  reviewer?: { name: string; url: string };
  about?: Record<string, unknown>;
  citation?: Array<{ name: string; url: string; publisher?: string }>;
  isMedical?: boolean;
};

export function buildArticleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  dateReviewed,
  author,
  reviewer,
  about,
  citation,
  isMedical = false,
}: ArticleJsonLdInput) {
  const url = `${SITE_URL}${path}`;
  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${url}/opengraph-image`;
  const type = isMedical ? ["MedicalWebPage", "Article"] : ["Article"];

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    mainEntityOfPage: url,
    url,
    image: resolvedImage,
    datePublished,
    dateModified,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/blou-logo-black-name.png`,
      },
    },
  };

  if (dateReviewed) base.lastReviewed = dateReviewed;

  if (reviewer) {
    base.reviewedBy = {
      "@type": "Organization",
      name: reviewer.name,
      url: reviewer.url,
    };
  }

  if (about) {
    base.about = about;
  }

  if (citation?.length) {
    base.citation = citation.map((c) => ({
      "@type": "CreativeWork",
      name: c.name,
      url: c.url,
      ...(c.publisher ? { publisher: { "@type": "Organization", name: c.publisher } } : {}),
    }));
  }

  return base;
}

export function buildHowToJsonLd({
  name,
  description,
  path,
  steps,
}: {
  name: string;
  description: string;
  path: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: `${SITE_URL}${path}`,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildWebApplicationJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "HealthApplication",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
