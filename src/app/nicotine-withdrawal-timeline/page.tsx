import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { SocialProof } from "@/components/marketing/SocialProof";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-05-09";

export const metadata: Metadata = buildMetadata({
  title: "Nicotine withdrawal timeline (days 1–30): what to expect",
  description:
    "A simple nicotine withdrawal timeline from day 1 to day 30: cravings, sleep, mood, and what helps. Includes links to day-by-day milestones and symptom guides.",
  path: "/nicotine-withdrawal-timeline",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine withdrawal timeline",
    "nicotine withdrawal symptoms timeline",
    "how long does nicotine withdrawal last",
    "quit smoking withdrawal timeline",
  ],
});

const faqItems = [
  {
    question: "How long does nicotine withdrawal last?",
    answer:
      "Most physical nicotine withdrawal symptoms peak around days 2–3 and improve over 2–4 weeks. Cue-based urges can return for months, but they typically get less frequent and easier to ride out.",
  },
  {
    question: "What are the worst days of nicotine withdrawal?",
    answer:
      "Many people report days 2–3 are the toughest, when nicotine has largely cleared and withdrawal symptoms peak. Planning extra rest and fewer triggers for those days helps.",
  },
  {
    question: "Does nicotine replacement (patch/gum) prevent withdrawal?",
    answer:
      "NRT can reduce withdrawal symptoms by providing controlled nicotine without smoke toxins. It doesn’t remove every urge, but it can make cravings less intense while you rebuild routines.",
  },
  {
    question: "Why do cravings come back weeks later?",
    answer:
      "Late cravings are often cue-based: coffee, driving, stress, alcohol, social situations. That’s normal and doesn’t mean you’re failing—just that the cue needs a new replacement.",
  },
];

const timeline = [
  {
    range: "First 24 hours",
    whatYouMightFeel:
      "Strong urge waves, restlessness, “missing” your routine more than physical symptoms.",
    whatHelps:
      "Use a 3–5 minute timer, change location, water, and a pre-decided replacement for your top cues.",
    links: [
      { href: "/guides/what-happens-after-1-day", label: "After 1 day" },
      { href: "/prepare-to-quit-smoking", label: "7-day prep checklist" },
    ],
  },
  {
    range: "Days 2–3",
    whatYouMightFeel:
      "Withdrawal peak: irritability, insomnia, cravings, mood swings.",
    whatHelps:
      "Protect sleep, steady meals, reduce alcohol, consider NRT/medication support if appropriate.",
    links: [
      { href: "/guides/what-happens-after-3-days", label: "After 3 days" },
      { href: "/guides/insomnia", label: "Insomnia guide" },
    ],
  },
  {
    range: "Days 4–7",
    whatYouMightFeel:
      "Cravings still frequent but shorter; routine breaks feel possible; cough can increase temporarily.",
    whatHelps:
      "Keep a daily walk, plan around coffee/driving cues, track savings and milestones.",
    links: [
      { href: "/guides/what-happens-after-1-week", label: "After 1 week" },
      { href: "/guides/cough", label: "Cough guide" },
    ],
  },
  {
    range: "Weeks 2–4",
    whatYouMightFeel:
      "Fewer urges; occasional “surprise” cravings from cues; appetite changes; brain fog/fatigue can linger.",
    whatHelps:
      "Treat late cravings as cue practice. Keep replacements easy. If weight worries show up, plan snacks and movement.",
    links: [
      { href: "/guides/what-happens-after-2-weeks", label: "After 2 weeks" },
      { href: "/guides/weight-gain", label: "Weight gain guide" },
    ],
  },
] as const;

export default function NicotineWithdrawalTimelinePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Nicotine withdrawal timeline (days 1–30): what to expect",
    description:
      "A practical withdrawal timeline with what to expect and what to do at each stage.",
    path: "/nicotine-withdrawal-timeline",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="withdrawal-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Nicotine withdrawal timeline", path: "/nicotine-withdrawal-timeline" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Timeline guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Nicotine withdrawal timeline (days 1–30)
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Withdrawal is uncomfortable, but it’s also predictable. Use the timeline
          to plan your week, protect days 2–3, and treat cravings as short waves
          you can ride out.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Read the full quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "timeline", label: "Timeline (what to expect)" },
          { id: "what-helps-most", label: "What helps most" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "related", label: "Related guides" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Nicotine withdrawal symptoms often peak on days 2–3 and improve over 2–4 weeks. Cravings usually come in short waves; the long-term work is cue replacement (coffee, driving, stress, alcohol)."
          facts={[
            "Plan extra support for days 2–3 (sleep, food, fewer triggers).",
            "Late cravings are usually cue-based—not proof you’re back to day one.",
            "Tracking cravings makes the pattern visible and reduces all-or-nothing spirals.",
          ]}
        />
      </section>

      <section
        id="timeline"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Timeline: what to expect
        </h2>
        <div className="mt-5 space-y-4">
          {timeline.map((t) => (
            <article
              key={t.range}
              className="rounded-2xl border border-teal-200 p-5"
            >
              <h3 className="text-base font-semibold text-teal-950">{t.range}</h3>
              <p className="mt-2 text-sm leading-7 text-teal-900/90">
                <span className="font-medium text-teal-950">What you might feel:</span>{" "}
                {t.whatYouMightFeel}
              </p>
              <p className="mt-2 text-sm leading-7 text-teal-900/90">
                <span className="font-medium text-teal-950">What helps:</span>{" "}
                {t.whatHelps}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex h-9 items-center justify-center rounded-full border border-teal-200 bg-white px-4 text-xs font-medium text-teal-900 transition hover:bg-teal-50"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="what-helps-most"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">What helps most</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              A fixed quit date + preparation (use{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/prepare-to-quit-smoking"
              >
                the 7‑day checklist
              </Link>
              ).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              A 3-minute craving response you do automatically (see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/cravings"
              >
                cravings
              </Link>
              ).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Visible progress (time, milestones, and{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                money saved
              </Link>
              ).
            </span>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="related" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            "how-to-quit-smoking",
            "prepare-to-quit-smoking",
            "cravings",
            "insomnia",
            "what-happens-after-1-day",
            "what-happens-after-3-days",
            "what-happens-after-1-week",
            "weight-gain",
          ]}
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-withdrawal-timeline" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/quit-smoking-tracker"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Use a quit tracker →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/nicotine-withdrawal-timeline</code>
      </p>
    </div>
  );
}

