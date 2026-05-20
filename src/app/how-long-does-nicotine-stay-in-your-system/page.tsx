import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { SocialProof } from "@/components/marketing/SocialProof";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-05-20";
const MODIFIED = "2026-05-20";

export const metadata: Metadata = buildMetadata({
  title: "How long does nicotine stay in your system? (blood, urine, saliva)",
  description:
    "Nicotine stays in blood for 1–3 days, urine for 3–4 days, and saliva for 1–4 days. Cotinine (the metabolite) lasts longer. Full breakdown by test type.",
  path: "/how-long-does-nicotine-stay-in-your-system",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "how long does nicotine stay in your system",
    "how long does nicotine stay in blood",
    "nicotine urine test how long",
    "cotinine detection time",
    "nicotine out of system",
  ],
});

const faqItems = [
  {
    question: "How long does nicotine stay in your blood?",
    answer:
      "Nicotine itself has a short half-life of about 1–2 hours, so it clears from blood within 1–3 days. However, cotinine—the main metabolite—stays in blood for 1–3 weeks depending on how heavily you smoked. Blood tests for nicotine often test cotinine, not nicotine directly.",
  },
  {
    question: "How long does nicotine stay in urine?",
    answer:
      "Nicotine metabolites (mainly cotinine) are detectable in urine for 3–4 days in light smokers and up to 3–4 weeks in heavy smokers or regular users. Hair tests can detect cotinine for up to 3 months.",
  },
  {
    question: "How long after quitting do cravings last?",
    answer:
      "Physical nicotine cravings are at their most intense in the first 72 hours and generally decrease significantly over the first 2–4 weeks. Psychological and cue-based cravings can persist for months but become less frequent and intense over time.",
  },
  {
    question: "Does drinking water help flush nicotine out faster?",
    answer:
      "Staying well-hydrated supports kidney function and overall detoxification, but there is no strong evidence that drinking large amounts of water meaningfully speeds up nicotine clearance. The main driver of clearance is liver metabolism and time.",
  },
  {
    question: "How can I track when nicotine is fully out of my system?",
    answer:
      "Most people are free of measurable nicotine within 3–4 days of their last cigarette. The bigger withdrawal milestone is at 72 hours, when symptoms typically peak and then begin easing. A quit tracker shows you exactly where you are in the timeline.",
  },
  {
    question: "Does nicotine from patches or gum stay in your system the same way?",
    answer:
      "Yes. Cotinine from any nicotine source—cigarettes, patches, gum, lozenges, vapes—is metabolized the same way by the liver. Detection tests cannot distinguish between nicotine from cigarettes and nicotine from NRT.",
  },
];

export default function HowLongDoesNicotineStayInSystemPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How long does nicotine stay in your system? (blood, urine, saliva)",
    description:
      "A detailed breakdown of nicotine and cotinine detection times by test type, with a quitting timeline.",
    path: "/how-long-does-nicotine-stay-in-your-system",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine withdrawal" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="nicotine-system-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "How long does nicotine stay in your system",
            path: "/how-long-does-nicotine-stay-in-your-system",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Nicotine &amp; your body
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How long does nicotine stay in your system?
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Nicotine clears quickly—but its metabolite cotinine stays much longer.
          Here&apos;s a complete breakdown by test type, plus what the clearance
          timeline means for withdrawal and how you feel as you quit.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/nicotine-withdrawal-timeline"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Withdrawal timeline →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "nicotine-vs-cotinine", label: "Nicotine vs cotinine" },
          { id: "detection-by-test", label: "Detection by test type" },
          { id: "clearance-timeline", label: "Clearance and withdrawal timeline" },
          { id: "factors", label: "Factors that affect clearance" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Nicotine itself clears from blood within 1–3 days. Cotinine (the metabolite that tests detect) stays in blood for 1–3 weeks, in urine for 3–4 days to 3–4 weeks, and is detectable in hair for up to 3 months. Withdrawal symptoms peak at 48–72 hours when nicotine is fully gone, then gradually ease."
          facts={[
            "Nicotine half-life is about 1–2 hours; most is gone within 24 hours.",
            "Cotinine half-life is 16–19 hours; it remains detectable days to weeks after quitting.",
            "Standard urine tests detect cotinine, not nicotine—so recent NRT use will test positive.",
          ]}
        />
      </section>

      <section
        id="nicotine-vs-cotinine"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Nicotine vs cotinine: why the distinction matters
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          When you smoke, your liver converts most nicotine into cotinine within
          hours. Nicotine itself has a short half-life (about 1–2 hours), so
          direct nicotine levels fall quickly. Cotinine, however, has a half-life
          of 16–19 hours, which is why it remains detectable long after nicotine
          has cleared.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Most drug tests for "nicotine" actually measure cotinine because it
          stays in the system longer and is a more reliable indicator of recent
          tobacco or nicotine product use. Important: cotinine from NRT (patches,
          gum, lozenges, vapes) is identical to cotinine from cigarettes—tests
          cannot distinguish between sources.
        </p>
      </section>

      <section
        id="detection-by-test"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Detection windows by test type
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Blood:</span>
            <span>
              Nicotine: 1–3 days. Cotinine: 1–10 days (light smoker) to up to
              3 weeks (heavy smoker). Blood tests are less common for routine
              nicotine screening.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Urine:</span>
            <span>
              Cotinine: 3–4 days for occasional smokers; 1–3 weeks for heavy
              daily smokers. Urine is the most common test method.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Saliva:</span>
            <span>
              Cotinine: 1–4 days for most smokers. Saliva tests are used in
              some clinical and research settings.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Hair:</span>
            <span>
              Cotinine is incorporated into hair follicles and can be detected
              for up to 3 months. Hair tests reflect longer-term use history,
              not recent use.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-teal-900/70">
          Note: detection windows are approximate and vary with the amount smoked,
          individual metabolism, hydration, kidney function, and age. These ranges
          reflect typical figures cited in clinical literature.
        </p>
      </section>

      <section
        id="clearance-timeline"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Nicotine clearance and the withdrawal connection
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The timeline of nicotine clearing from your body maps directly onto
          withdrawal symptoms. Understanding this helps you anticipate what
          you&apos;ll feel and when:
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Hours 1–8:</span>
            <span>
              Nicotine levels falling. First cravings begin. Heart rate and blood
              pressure start normalizing.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">24 hours:</span>
            <span>
              Nicotine largely cleared. Carbon monoxide mostly gone. See the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-day"
              >
                1-day milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">48–72 hours:</span>
            <span>
              Nicotine fully gone. Withdrawal symptoms peak—irritability, brain
              fog, headaches, strong cravings. This is the hardest stretch. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-3-days"
              >
                what happens after 3 days
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Week 1–2:</span>
            <span>
              Cotinine still detectable in urine for many people. Withdrawal
              symptoms declining. Cravings becoming more situational (cue-based)
              rather than constant.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">3–4 weeks:</span>
            <span>
              Even cotinine is undetectable for most quitters at this point. The
              physical dependency cycle is broken. Cue-based psychological
              cravings may continue for months but steadily diminish.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="factors"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Factors that affect how long nicotine stays in your system
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>How much you smoked.</strong> Heavy smokers have higher
              cotinine loads and take longer to clear.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Metabolism rate.</strong> Individual differences in liver
              enzyme activity (specifically CYP2A6) affect how fast nicotine is
              converted to cotinine and cleared.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Age.</strong> Older adults generally metabolize nicotine
              more slowly.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Kidney function.</strong> Cotinine is primarily cleared
              through urine. Reduced kidney function slows clearance.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Urine pH.</strong> More acidic urine speeds up cotinine
              excretion slightly. Diet and hydration affect this.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Continued NRT use.</strong> If you&apos;re using nicotine
              replacement products, cotinine stays elevated. This is expected
              and not harmful.
            </span>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-nicotine-system" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/guides/what-happens-after-3-days"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Day 3 milestone guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/how-long-does-nicotine-stay-in-your-system</code>
      </p>
    </div>
  );
}
