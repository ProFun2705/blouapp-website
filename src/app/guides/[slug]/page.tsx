import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { StayOnTrackCard } from "@/components/marketing/StayOnTrackCard";
import { blouGuideBySlug, blouGuides } from "@/lib/blouGuides";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

const references = [
  {
    label: "CDC: Benefits of Quitting",
    href: "https://www.cdc.gov/tobacco/about/benefits-of-quitting.html",
    publisher: "US Centers for Disease Control and Prevention",
  },
  {
    label: "US Surgeon General's Report on Smoking Cessation (2020)",
    href: "https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html",
    publisher: "US Department of Health and Human Services",
  },
  {
    label: "NHS: Quit smoking support",
    href: "https://www.nhs.uk/better-health/quit-smoking/",
    publisher: "UK National Health Service",
  },
  {
    label: "WHO: Tobacco key facts",
    href: "https://www.who.int/news-room/fact-sheets/detail/tobacco",
    publisher: "World Health Organization",
  },
] as const;

export async function generateStaticParams() {
  return blouGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = blouGuideBySlug[slug];

  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
    type: "article",
    publishedTime: guide.datePublished,
    modifiedTime: guide.dateModified,
    keywords: [
      guide.targetKeyword,
      "quit smoking",
      "nicotine withdrawal",
      guide.shortTitle.toLowerCase(),
    ],
  });
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = blouGuideBySlug[slug];
  if (!guide) notFound();

  const articleJsonLd = buildArticleJsonLd({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: guide.medicalConditionName
      ? {
          "@type": "MedicalCondition",
          name: guide.medicalConditionName,
        }
      : undefined,
    citation: references.map((r) => ({
      name: r.label,
      url: r.href,
      publisher: r.publisher,
    })),
  });

  return (
    <article className="flex flex-col gap-8">
      <Script
        id={`article-json-ld-${guide.slug}`}
        type="application/ld+json"
      >
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Guides", path: "/guides" },
          { name: guide.shortTitle, path: `/guides/${guide.slug}` },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          {guide.category === "milestone" ? "Milestone guide" : "Symptom guide"}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          {guide.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          {guide.summary}
        </p>
        <p className="mt-2 text-sm leading-7 text-teal-900/75">{guide.detail}</p>
        <div className="mt-5">
          <Byline
            datePublished={guide.datePublished}
            dateModified={guide.dateModified}
          />
        </div>
      </header>

      <QuickAnswerBox
        answer={guide.quickAnswer}
        facts={guide.quickFacts}
      />

      {guide.articleSections.map((section) => (
        <section
          key={section.heading}
          className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-teal-950">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets.length ? (
            <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-1 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {guide.typicalDuration ? (
        <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-950">At-a-glance</h2>
          <dl className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
              <dt className="font-medium text-teal-800">
                Typical duration (many people)
              </dt>
              <dd className="mt-2 text-teal-950">{guide.typicalDuration}</dd>
            </div>
            {guide.commonTriggers ? (
              <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
                <dt className="font-medium text-teal-800">Common triggers</dt>
                <dd className="mt-2 text-teal-950">{guide.commonTriggers}</dd>
              </div>
            ) : null}
            {guide.whenToSeekCare ? (
              <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
                <dt className="font-medium text-teal-800">When to seek care</dt>
                <dd className="mt-2 text-teal-950">{guide.whenToSeekCare}</dd>
              </div>
            ) : null}
          </dl>
        </section>
      ) : null}

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          What to expect next
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          {guide.whatToExpectNext.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="mt-1 text-teal-600">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <StayOnTrackCard
        campaign="article_footer_card"
        placement="article_footer_card"
      />

      <FaqSection
        items={guide.faq}
        jsonLdId={`faq-${guide.slug}`}
        title="Frequently asked questions"
      />

      <RelatedGuides slugs={guide.relatedSlugs} />

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          Sources & further reading
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {references.map((reference) => (
            <li key={reference.href}>
              <a
                className="underline decoration-teal-400 underline-offset-4"
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {reference.label}
              </a>{" "}
              <span className="text-teal-900/60">· {reference.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-teal-900/70">
          This guide is educational and does not replace medical advice. If you
          have pre-existing conditions or take prescription medication, talk to
          your clinician when making changes to your smoking.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/guides"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← All guides
        </Link>
        <Link
          href="/tools"
          className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Open quit tools
        </Link>
        <AppStoreBadgeLink
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/guides/{guide.slug}</code>
      </p>
    </article>
  );
}
