import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FaqSection } from "@/components/blou/FaqSection";
import { StayOnTrackCard } from "@/components/marketing/StayOnTrackCard";
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

      <article className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking guides & timelines
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/80">
          These guides explain what most people experience after stopping
          smoking — by milestone (day 1 through 10 years) and by symptom
          (cravings, cough, anxiety, sleep, and more). Each page lists typical
          durations, practical relief, and red flags that warrant medical
          review.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/how-to-quit-smoking"
            className="rounded-xl border border-teal-200 bg-teal-50/50 px-4 py-3 text-sm font-medium text-teal-900 hover:bg-teal-50"
          >
            Start: How to quit smoking (step-by-step)
          </Link>
          <Link
            href="/tools/money-saved"
            className="rounded-xl border border-teal-200 bg-teal-50/50 px-4 py-3 text-sm font-medium text-teal-900 hover:bg-teal-50"
          >
            Tool: Money saved calculator
          </Link>
        </div>
      </article>

      <StayOnTrackCard campaign="guides_index" placement="article_intro" />

      <section className="rounded-2xl border border-teal-200/90 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          Milestones (1 day → 10 years)
        </h2>
        <p className="mt-2 text-sm leading-6 text-teal-900/80">
          How your body typically changes across the first year — and beyond.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {milestoneGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-sm text-teal-900 transition hover:bg-teal-50"
              >
                <span className="block text-[10px] font-medium uppercase tracking-wide text-teal-700">
                  Milestone
                </span>
                <span className="mt-1 block font-medium">{guide.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-teal-200/90 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          Symptoms (how long & when to seek help)
        </h2>
        <p className="mt-2 text-sm leading-6 text-teal-900/80">
          Each guide lists typical duration, practical relief, and red flags.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {symptomGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-sm text-teal-900 transition hover:bg-teal-50"
              >
                <span className="block text-[10px] font-medium uppercase tracking-wide text-teal-700">
                  Symptom
                </span>
                <span className="mt-1 block font-medium">{guide.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FaqSection items={faqItems} jsonLdId="faq-guides" />
    </div>
  );
}
