import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { EndAppCta } from "@/components/marketing/AppCta";
import { ARTICLE_GROUPS, articleRoutes } from "@/lib/staticRoutes";
import { buildMetadata } from "@/lib/seo";
import { milestoneGuides, symptomGuides } from "@/lib/blouGuides";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking guides: milestones, symptoms & timelines",
  description:
    "Evidence-based quit smoking guides. Explore what happens to your body after 1 day, 1 week, 1 month, 1 year — plus symptom guides for cravings, cough, anxiety, and more.",
  path: "/guides",
  keywords: [
    "quit smoking guide",
    "quit smoking timeline",
    "what happens when you quit smoking",
    "nicotine withdrawal guide",
  ],
});

const faqItems = [
  {
    question: "Where should I start if I want to quit smoking?",
    answer:
      "Start with our step-by-step plan at /how-to-quit-smoking and set a quit date within the next 1–2 weeks. Pair it with one form of evidence-based support (NRT, varenicline, bupropion, or a free quitline).",
  },
  {
    question: "What happens to your body when you quit smoking?",
    answer:
      "Changes begin within hours and compound over years. Our milestone guides from 1 day to 10 years summarize what research and public-health sources describe.",
  },
  {
    question: "How long do cravings and withdrawal symptoms last?",
    answer:
      "Physical withdrawal peaks around day 3 and mostly fades over 2–4 weeks. Individual cravings typically last 3–5 minutes each. Each symptom guide lists typical duration and red-flag signs.",
  },
  {
    question: "Are these guides medical advice?",
    answer:
      "No. They are general education. For personalized medical advice, see your clinician. Every guide links to NHS, CDC, or WHO public guidance where relevant.",
  },
] as const;

export default function GuidesIndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumbs items={[{ name: "Guides", path: "/guides" }]} />

      <TableOfContents
        items={[
          { id: "intro", label: "Overview" },
          { id: "milestones", label: "Milestone guides" },
          { id: "symptoms", label: "Symptom guides" },
          { id: "articles", label: "All articles" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <article
        id="intro"
        className="scroll-mt-24 rounded-panel border border-line bg-surface p-6 shadow-card md:p-8"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          Quit smoking guides & timelines
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-muted">
          These guides explain what most people experience after stopping
          smoking — by milestone (day 1 through 10 years) and by symptom
          (cravings, cough, anxiety, sleep, and more). Each page lists typical
          durations, practical relief, and red flags that warrant medical
          review.
        </p>
      </article>

      <section
        id="milestones"
        className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
      >
        <h2 className="text-xl font-semibold text-ink">
          Milestones (1 day → 10 years)
        </h2>
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          How your body typically changes across the first year — and beyond.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {milestoneGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block min-h-11 rounded-xl border border-line px-4 py-3 text-sm text-ink transition-colors hover:border-accent/40 hover:bg-surface-muted"
              >
                <span className="block text-[11px] font-medium uppercase tracking-wide text-accent">
                  Milestone
                </span>
                <span className="mt-1 block font-medium">{guide.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="symptoms"
        className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
      >
        <h2 className="text-xl font-semibold text-ink">
          Symptoms (how long & when to seek help)
        </h2>
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          Each guide lists typical duration, practical relief, and red flags.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {symptomGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block min-h-11 rounded-xl border border-line px-4 py-3 text-sm text-ink transition-colors hover:border-accent/40 hover:bg-surface-muted"
              >
                <span className="block text-[11px] font-medium uppercase tracking-wide text-accent">
                  Symptom
                </span>
                <span className="mt-1 block font-medium">{guide.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="articles"
        className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card"
      >
        <h2 className="text-xl font-semibold text-ink">All articles</h2>
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          Plans, methods, health situations, slips, and app comparisons.
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {ARTICLE_GROUPS.map((group) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{group}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {articleRoutes
                  .filter((r) => r.group === group)
                  .map((r) => (
                    <li key={r.path}>
                      <Link href={r.path} className="text-ink underline-offset-2 hover:underline">
                        {r.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign="guides_hub" />
    </div>
  );
}
