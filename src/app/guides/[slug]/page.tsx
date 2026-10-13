import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { TableOfContents } from "@/components/site/TableOfContents";
import { ButtonLink } from "@/components/ui/Button";
import {
  blouGuideBySlug,
  isPublishedGuide,
  publishedGuides,
} from "@/lib/blouGuides";
import { makeSectionId } from "@/lib/slugify";
import { buildArticleJsonLd, buildMetadata, buildSpeakableJsonLd } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

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

const BRAND_SUFFIX_LENGTH = " | Blou".length;
const MAX_TITLE_LENGTH = 60;

/** Hand-shortened titles for guides whose question-style H1 is too long. */
const SEO_TITLE_OVERRIDES: Record<string, string> = {
  "shortness-of-breath": "Shortness of breath after quitting smoking: how long?",
  "increased-appetite": "Increased appetite after quitting smoking: how long?",
  "tingling-hands-and-feet": "Tingling hands and feet after quitting smoking",
  "caffeine-sensitivity": "Caffeine sensitivity after quitting smoking",
  "taste-and-smell": "When do taste and smell return after quitting smoking?",
  anger: "Anger after quitting smoking: why and how long",
  "hair-loss": "Hair loss after quitting smoking: what to expect",
};

/**
 * Keeps the guide's question wording (it is what already ranks) and the
 * "quitting smoking" keyword. Drops the " | Blou" suffix when that is what it
 * takes to stay within 60 characters.
 */
function guideSeoTitle(slug: string, title: string): { text: string; absolute: boolean } {
  const text = SEO_TITLE_OVERRIDES[slug] ?? title;
  if (text.length + BRAND_SUFFIX_LENGTH <= MAX_TITLE_LENGTH) return { text, absolute: false };
  return { text, absolute: true };
}

export async function generateStaticParams() {
  return publishedGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = blouGuideBySlug[slug];

  if (!guide || !isPublishedGuide(guide)) return {};

  const seoTitle = guideSeoTitle(guide.slug, guide.title);
  const metadata = buildMetadata({
    title: seoTitle.text,
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
  if (seoTitle.absolute) metadata.title = { absolute: seoTitle.text };
  return metadata;
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = blouGuideBySlug[slug];
  if (!guide || !isPublishedGuide(guide)) notFound();

  const tocItems = [
    { id: "quick-answer", label: "Quick answer" },
    ...guide.articleSections.map((s, i) => ({
      id: makeSectionId(i, s.heading),
      label: s.heading,
    })),
    ...(guide.typicalDuration
      ? [{ id: "at-a-glance", label: "At a glance" } as const]
      : []),
    { id: "what-to-expect-next", label: "What to expect next" },
    { id: "faq", label: "Frequently asked questions" },
    { id: "related-guides", label: "Related reading" },
    { id: "sources", label: "Sources & further reading" },
  ] as const;

  const articleJsonLd = buildArticleJsonLd({
    title: guide.title,
    description: guide.summary,
    path: `/guides/${guide.slug}`,
    image: `/guides/${guide.slug}/opengraph-image`,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    dateReviewed: guide.dateReviewed,
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

  const speakableJsonLd = buildSpeakableJsonLd({
    name: guide.title,
    path: `/guides/${guide.slug}`,
    selectors: ["#quick-answer"],
  });

  const campaign = `guide_${guide.slug}`;
  const inlineCtaCopy =
    guide.category === "milestone"
      ? "Averages only go so far. Blou shows your own version of this milestone: your photo timeline, your lung checks, and every smoke-free day on one timeline."
      : `${guide.shortTitle} usually eases as the weeks pass. Blou's timeline lets you watch your own recovery while it does, and its SOS button is there the second a craving hits.`;
  const midpoint = Math.max(1, Math.ceil(guide.articleSections.length / 2));

  return (
    <article className="flex flex-col gap-8">
      <JsonLd data={[articleJsonLd, speakableJsonLd]} />

      <Breadcrumbs
        items={[
          { name: "Guides", path: "/guides" },
          { name: guide.shortTitle, path: `/guides/${guide.slug}` },
        ]}
      />

      <ArticleHeader
        kicker={guide.category === "milestone" ? "Milestone guide" : "Symptom guide"}
        title={guide.title}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        campaign={campaign}
      >
        <p>{guide.summary}</p>
        <p className="mt-2 text-sm">{guide.detail}</p>
      </ArticleHeader>

      <TableOfContents items={[...tocItems]} />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer={guide.quickAnswer}
          facts={guide.quickFacts}
        />
      </section>

      {guide.articleSections.map((section, index) => (
        <div key={section.heading} className="flex flex-col gap-8">
        <section
          id={makeSectionId(index, section.heading)}
          className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
        >
          <h2 className="text-xl font-semibold text-ink">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-ink-muted">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets.length ? (
            <ul className="mt-4 space-y-2 text-sm leading-7 text-ink-muted">
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-1 text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
        {index === midpoint - 1 ? (
          <InlineAppCta campaign={campaign}>{inlineCtaCopy}</InlineAppCta>
        ) : null}
        </div>
      ))}

      {guide.typicalDuration ? (
        <section
          id="at-a-glance"
          className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
        >
          <h2 className="text-xl font-semibold text-ink">At-a-glance</h2>
          <dl className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-xl border border-line bg-surface-muted p-4">
              <dt className="font-medium text-accent-strong">
                Typical duration (many people)
              </dt>
              <dd className="mt-2 text-ink">{guide.typicalDuration}</dd>
            </div>
            {guide.commonTriggers ? (
              <div className="rounded-xl border border-line bg-surface-muted p-4">
                <dt className="font-medium text-accent-strong">Common triggers</dt>
                <dd className="mt-2 text-ink">{guide.commonTriggers}</dd>
              </div>
            ) : null}
            {guide.whenToSeekCare ? (
              <div className="rounded-xl border border-line bg-surface-muted p-4">
                <dt className="font-medium text-accent-strong">When to seek care</dt>
                <dd className="mt-2 text-ink">{guide.whenToSeekCare}</dd>
              </div>
            ) : null}
          </dl>
        </section>
      ) : null}

      <section
        id="what-to-expect-next"
        className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
      >
        <h2 className="text-xl font-semibold text-ink">
          What to expect next
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-ink-muted">
          {guide.whatToExpectNext.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden className="mt-1 text-accent">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>


      <section id="faq" className="scroll-mt-24">
        <FaqSection
          items={guide.faq}
          jsonLdId={`faq-${guide.slug}`}
          title="Frequently asked questions"
        />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides slugs={guide.relatedSlugs} />
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
      >
        <h2 className="text-xl font-semibold text-ink">
          Sources & further reading
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-ink">
          {references.map((reference) => (
            <li key={reference.href}>
              <a
                className="underline decoration-accent/50 underline-offset-4"
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {reference.label}
              </a>{" "}
              <span className="text-ink-muted">· {reference.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This guide is educational and does not replace medical advice. If you
          have pre-existing conditions or take prescription medication, talk to
          your clinician when making changes to your smoking.
        </p>
      </section>

      <EndAppCta campaign={campaign} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/guides" variant="secondary">
          ← All guides
        </ButtonLink>
        <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
          Withdrawal timeline
        </ButtonLink>
        <ButtonLink href="/tools" variant="secondary">
          Quit tools
        </ButtonLink>
      </div>
    </article>
  );
}
