import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { QuitDateTimeline } from "@/components/blou/QuitDateTimeline";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { MILESTONE_SOURCES, QUIT_MILESTONES } from "@/lib/quitMilestones";
import { buildArticleJsonLd, buildMetadata, buildWebApplicationJsonLd } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PATH = "/quit-smoking-timeline";
const PUBLISHED = "2026-10-15";
const MODIFIED = "2026-10-15";
const CAMPAIGN = "article_quit-smoking-timeline";
const TITLE = "Quit smoking timeline: hour by hour, year by year";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    "What happens after you quit smoking, from 20 minutes to 20 years, with WHO and NHS sources. Enter your quit date to see where you are now.",
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking timeline",
    "stop smoking timeline",
    "quitting cigarettes timeline",
    "giving up smoking timeline",
    "benefits of quitting smoking timeline",
    "quit smoking timeline day by day",
  ],
});

const faqItems = [
  {
    question: "What is the quit smoking timeline?",
    answer:
      "It is the order in which your body recovers after the last cigarette. Heart rate and blood pressure drop within about 20 minutes, carbon monoxide falls to normal within about 12 hours, withdrawal peaks during the first 3 days, and over months and years your risks of heart disease, stroke, and several cancers fall.",
  },
  {
    question: "What happens day by day when you quit smoking?",
    answer:
      "Cravings can start within an hour or two. Nicotine leaves your blood within a few days. Withdrawal is usually worst in the first week and peaks in the first 3 days, then eases. Each day has its own guide, from /guides/what-happens-after-1-day to /guides/what-happens-after-1-month.",
  },
  {
    question: "How long does nicotine withdrawal last?",
    answer:
      "For most people the worst symptoms last a few days to a couple of weeks, and intensity drops over the first month. Some people have milder symptoms for several months, and occasional cravings can show up much later.",
  },
  {
    question: "When do the benefits of quitting smoking start?",
    answer:
      "Straight away. Your heart rate drops within minutes, and within days many people notice better taste and smell, easier breathing, and more energy. Bigger risk reductions build over 1, 5, 10, and 15 years.",
  },
  {
    question: "Is the timeline the same for everyone?",
    answer:
      "No. These are typical time points from public-health sources, not guarantees. How much you smoked, for how long, your age, and your health all change how fast you recover. Talk to a clinician about your own situation.",
  },
  {
    question: "Does the timeline restart if I smoke one cigarette?",
    answer:
      "Not all of it. A single slip doesn't undo the recovery your body has made, but it can restart cravings. See /i-smoked-one-cigarette for what to do in the next hour.",
  },
] as const;

export default function QuitSmokingTimelinePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: "What happens after you quit smoking, from 20 minutes to 20 years, with sources.",
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine withdrawal" },
    citation: MILESTONE_SOURCES.map((s) => ({ name: s.name, url: s.url })),
  });
  const toolJsonLd = buildWebApplicationJsonLd({
    name: "Quit smoking timeline calculator",
    description: "Enter the date of your last cigarette to see which recovery milestones you have reached and what comes next.",
    path: PATH,
  });

  const withdrawal = QUIT_MILESTONES.filter((m) => m.hours <= 30 * 24);
  const longTerm = QUIT_MILESTONES.filter((m) => m.hours > 30 * 24);

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={[articleJsonLd, toolJsonLd]} />
      <Breadcrumbs items={[{ name: "Quit smoking timeline", path: PATH }]} />

      <ArticleHeader
        kicker="Quit smoking timeline"
        title="Quit smoking timeline: what happens after your last cigarette"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
            Withdrawal, day by day →
          </ButtonLink>
        }
      >
        <p>
          Your body starts recovering within minutes of your last cigarette and keeps going for years.
          Below is the full timeline, from 20 minutes to 20 years, taken from WHO, NHS, National Cancer
          Institute and American Cancer Society guidance. Enter your quit date to see where you are right now.
        </p>
        <p className="mt-2 text-sm">Updated October 2026.</p>
      </ArticleHeader>

      <section id="where-am-i" className="scroll-mt-24">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-ink">Where are you on the timeline?</h2>
        <QuitDateTimeline />
      </section>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "first-month", label: "The first month: withdrawal and early recovery" },
          { id: "long-term", label: "Months and years: long-term recovery" },
          { id: "day-by-day", label: "Day-by-day guides" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Within 20 minutes your heart rate and blood pressure drop. Within 12 hours carbon monoxide in your blood falls to normal. Withdrawal peaks in the first 3 days and is usually worst in the first week. Over 2–12 weeks circulation and lung function improve, and after 1 year your risk of coronary heart disease is about half a smoker's."
          facts={[
            "Cravings can start within 1–2 hours and usually ease over the first month.",
            "Coughing and shortness of breath decrease between 1 and 9 months.",
            "After 10 years, lung cancer risk is about half a smoker's.",
          ]}
        />
      </section>

      <TimelineTable id="first-month" title="The first month: withdrawal and early recovery" rows={withdrawal} />

      <InlineAppCta campaign={CAMPAIGN}>
        This timeline is the average. Blou shows your own: every smoke-free day on one visual timeline,
        lung checks you can watch improve, and SOS help the second a craving hits.
      </InlineAppCta>

      <TimelineTable id="long-term" title="Months and years: long-term recovery" rows={longTerm} />

      <section id="day-by-day" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Day-by-day guides</h2>
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          Each guide covers what your body is doing at that point, the symptoms people notice, and what
          helps.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {QUIT_MILESTONES.filter((m) => m.guideSlug).map((m) => (
            <li key={m.id}>
              <Link
                href={`/guides/${m.guideSlug}`}
                className="flex min-h-11 items-center rounded-xl border border-line px-4 text-sm text-ink transition-colors hover:border-accent/40 hover:bg-surface-muted"
              >
                {m.label} without smoking
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <section id="sources" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Sources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {MILESTONE_SOURCES.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This timeline is educational and does not replace medical advice. Time points are typical
          ranges from the sources above; your own recovery may differ.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
          Withdrawal timeline, days 1–30
        </ButtonLink>
        <ButtonLink href="/can-lungs-heal-after-smoking" variant="secondary">
          Can your lungs heal?
        </ButtonLink>
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Quit plan
        </ButtonLink>
      </div>
    </div>
  );
}

function TimelineTable({
  id,
  title,
  rows,
}: {
  id: string;
  title: string;
  rows: typeof QUIT_MILESTONES;
}) {
  return (
    <section id={id} className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ol className="mt-5 space-y-0">
        {rows.map((m) => (
          <li key={m.id} className="grid gap-1 border-t border-line py-4 first:border-t-0 sm:grid-cols-[8rem_1fr] sm:gap-4">
            <p className="text-sm font-semibold text-accent">{m.label}</p>
            <div>
              <h3 className="text-base font-semibold text-ink">{m.title}</h3>
              <p className="mt-1 text-sm leading-6 text-ink-muted">
                {m.body}{" "}
                <a href={m.source.url} target="_blank" rel="noopener noreferrer" className="underline decoration-accent/40 underline-offset-2">
                  Source
                </a>
              </p>
              {m.guideSlug ? (
                <Link href={`/guides/${m.guideSlug}`} className="mt-1 inline-block text-sm font-medium text-accent-strong underline underline-offset-2">
                  {m.label} without smoking: full guide
                </Link>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
