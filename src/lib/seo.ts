import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
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
  image = "/og/og-default.png",
  type = "website",
  publishedTime,
  modifiedTime,
  noindex,
  keywords,
  languages,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
  image?: string;
  datePublished: string;
  dateModified: string;
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
  image = "/og/og-default.png",
  datePublished,
  dateModified,
  author,
  reviewer,
  about,
  citation,
  isMedical = false,
}: ArticleJsonLdInput) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const type = isMedical ? ["MedicalWebPage", "Article"] : ["Article"];

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    mainEntityOfPage: url,
    url,
    image: imageUrl,
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
