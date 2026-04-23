import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { blouGuideBySlug, blouGuides } from "@/lib/blouGuides";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

const references = [
  { label: "NHS quit smoking support", href: "https://www.nhs.uk/better-health/quit-smoking/" },
  {
    label: "CDC benefits of quitting",
    href: "https://www.cdc.gov/tobacco/about/benefits-of-quitting.html",
  },
  {
    label: "CDC quit smoking resources",
    href: "https://www.cdc.gov/tobacco/quit_smoking/index.htm",
  },
  { label: "WHO tobacco fact sheet", href: "https://www.who.int/news-room/fact-sheets/detail/tobacco" },
] as const;

export async function generateStaticParams() {
  return blouGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = blouGuideBySlug[slug];

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: `${guide.summary} ${guide.detail}`,
  };
}

export default async function BlouGuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = blouGuideBySlug[slug];

  if (!guide) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-8">
      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
          Medical information • Last content review: 2026-04-10
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950">
          {guide.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">{guide.summary}</p>
        <p className="mt-2 text-sm leading-7 text-teal-900/75">{guide.detail}</p>
      </header>

      {guide.typicalDuration ? (
        <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-950">Quick answer</h2>
          <dl className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
              <dt className="font-medium text-teal-800">Typical duration (many people)</dt>
              <dd className="mt-2 text-teal-950">{guide.typicalDuration}</dd>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
              <dt className="font-medium text-teal-800">Common triggers</dt>
              <dd className="mt-2 text-teal-950">{guide.commonTriggers}</dd>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4">
              <dt className="font-medium text-teal-800">When to seek care</dt>
              <dd className="mt-2 text-teal-950">{guide.whenToSeekCare}</dd>
            </div>
          </dl>
        </section>
      ) : null}

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">What to expect next</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          {guide.whatToExpectNext.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">FAQ</h2>
        <div className="mt-4 space-y-4">
          {guide.faq.map((item) => (
            <div key={item.question} className="rounded-xl border border-teal-200 p-4">
              <h3 className="text-sm font-semibold text-teal-950">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-teal-900/85">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Medical references</h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {references.map((reference) => (
            <li key={reference.href}>
              <a className="underline decoration-teal-400 underline-offset-4" href={reference.href} target="_blank" rel="noreferrer">
                {reference.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/blou/guides"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← All guides
        </Link>
        <Link
          href="/blou/tools"
          className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Open quit tools
        </Link>
        <AppStoreBadgeLink
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </div>
    </article>
  );
}
