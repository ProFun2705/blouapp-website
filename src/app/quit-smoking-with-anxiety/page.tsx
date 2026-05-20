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
  title: "How to quit smoking when you have anxiety: a practical guide",
  description:
    "Quitting smoking with anxiety is possible. Learn why anxiety spikes during withdrawal, how long it lasts, and which strategies help the most.",
  path: "/quit-smoking-with-anxiety",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking with anxiety",
    "quitting smoking anxiety worse",
    "nicotine withdrawal anxiety",
    "how to quit smoking anxiety disorder",
    "anxiety after quitting smoking",
  ],
});

const faqItems = [
  {
    question: "Does quitting smoking make anxiety worse?",
    answer:
      "In the short term, many people experience increased anxiety during the first 1–2 weeks of quitting. This is a withdrawal symptom, not a sign that quitting is wrong for you. For most people, anxiety levels drop below pre-quitting baseline within 4–8 weeks as the nervous system re-regulates. Research suggests that smokers who quit report lower long-term anxiety than those who continue smoking.",
  },
  {
    question: "How long does anxiety last after quitting smoking?",
    answer:
      "Acute withdrawal-related anxiety typically peaks in the first 72 hours and fades significantly within 2–4 weeks. Lingering mood changes can persist for 6–8 weeks in some people but generally improve steadily. If anxiety feels severe or does not improve after a month of being smoke-free, discuss it with a clinician.",
  },
  {
    question: "Can I still take my anxiety medication while quitting?",
    answer:
      "Generally yes, but tell your prescriber you're quitting. Smoking affects how some medications (including certain antidepressants and antipsychotics) are processed. Your dose may need adjusting. Never change medication doses on your own.",
  },
  {
    question: "Is vaping a safe way to manage anxiety while quitting cigarettes?",
    answer:
      "Vaping is not a recommended anxiety management strategy. Nicotine from vaping continues the cycle of dependency—cravings create anxiety, and nicotine temporarily relieves it, reinforcing the loop. If you're quitting smoking, discuss evidence-based NRT options with a clinician. See also: quitting vaping.",
  },
  {
    question: "What's the fastest way to calm anxiety during a craving?",
    answer:
      "Slow diaphragmatic breathing is the most immediately effective tool: inhale for 4 counts, hold for 4, exhale for 6–8. This activates the parasympathetic nervous system and can reduce craving intensity within a minute. Pair this with a change of location and cold water.",
  },
];

export default function QuitSmokingWithAnxietyPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to quit smoking when you have anxiety: a practical guide",
    description:
      "A practical guide to quitting smoking with an anxiety disorder or elevated withdrawal anxiety.",
    path: "/quit-smoking-with-anxiety",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="quit-anxiety-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking with anxiety",
            path: "/quit-smoking-with-anxiety",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Quitting with a condition
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to quit smoking when you have anxiety
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Many people smoke partly to manage anxiety—but nicotine creates the
          very cycle it seems to relieve. This page explains what happens to
          anxiety when you quit, how long it lasts, and what actually helps.
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
            Full quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "nicotine-anxiety-cycle", label: "The nicotine–anxiety cycle" },
          { id: "what-to-expect", label: "What to expect in weeks 1–4" },
          { id: "strategies", label: "Strategies that help" },
          { id: "medication", label: "Medication and NRT" },
          { id: "when-to-seek-care", label: "When to seek care" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Anxiety after quitting smoking is a withdrawal symptom, not a sign that quitting is wrong. Nicotine creates the anxiety cycle it appears to relieve. For most people, anxiety drops below pre-quitting levels within 4–8 weeks. The key is having a fast craving response ready before anxiety peaks."
          facts={[
            "Nicotine-relief of anxiety is temporary and worsens baseline anxiety over time.",
            "Anxiety withdrawal typically peaks at 48–72 hours and decreases steadily after 2 weeks.",
            "Long-term anxiety is generally lower in ex-smokers than in continuing smokers.",
          ]}
        />
      </section>

      <section
        id="nicotine-anxiety-cycle"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          The nicotine–anxiety cycle
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Nicotine stimulates the release of dopamine and norepinephrine, which
          produces a brief calming effect. But this effect is largely correcting
          withdrawal anxiety caused by the previous cigarette. In other words,
          smoking relieves the discomfort that smoking itself created.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Over time, the baseline anxiety level of a dependent smoker sits
          higher than that of a non-smoker. Each cigarette briefly returns
          anxiety toward normal, reinforcing the false belief that smoking
          "manages" anxiety. This is why many people smoke more during stressful
          periods—the stress and the nicotine cycle amplify each other.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Withdrawal anxiety is highest in the first 48–72 hours when
              nicotine is fully clearing from the body.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Stress-smoking cues (work pressure, conflict, boredom) may persist
              for several weeks after the physical withdrawal phase ends.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              See also:{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/stress-smoking-quit-plan"
              >
                stress smoking quit plan
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="what-to-expect"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What to expect in weeks 1–4
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Day 1–3:</span>
            <span>
              Highest anxiety. Nicotine clearing, sleep disrupted, irritability
              and restlessness peak. This is{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-3-days"
              >
                the hardest stretch
              </Link>{" "}
              for most quitters.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Days 4–14:</span>
            <span>
              Physical symptoms start easing. Cue-based anxiety (coffee,
              driving, work stress) may intensify before it fades. Breathing
              slowly in the moment is the single most effective strategy.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Weeks 2–4:</span>
            <span>
              Most people notice a meaningful reduction in baseline anxiety.
              Sleep improves. Cravings become more situational and predictable.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Month 2+:</span>
            <span>
              Long-term anxiety is generally lower than it was while smoking.
              Cue-based urges continue to diminish. Major milestones continue
              accumulating—see the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-month"
              >
                1-month milestone
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="strategies"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Strategies that help anxiety during quitting
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Slow breathing first.</strong> The fastest anxiety
              reducer: 4-count inhale, 4-count hold, 6–8-count exhale. Do this
              before anything else when a craving or anxious spike hits.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Name the cue.</strong> Anxiety is almost always attached
              to a trigger. Write down: "I felt anxious when ____." Naming the
              cue takes away its power and lets you plan a response in advance.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Reduce caffeine temporarily.</strong> Caffeine amplifies
              anxiety, and many smokers have higher caffeine tolerance while
              smoking. Cutting back in the first two weeks can meaningfully
              reduce spike severity. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/coffee-and-quitting-smoking"
              >
                coffee and quitting smoking
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Exercise daily.</strong> Even a 10-minute walk reduces
              anxiety through endorphins and helps regulate disrupted sleep
              cycles. Schedule it around your highest-risk cue times.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Track daily.</strong> Logging smoke-free streaks and
              health improvements gives your nervous system a "reward" signal
              to replace the nicotine reward loop.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="medication"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Medication and NRT considerations
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If you have an existing anxiety disorder, quitting with support from a
          clinician is strongly recommended. Some cessation medications (notably
          varenicline and bupropion) have evidence for reducing both tobacco
          craving and anxiety. NRT (patch, gum, lozenge) can reduce withdrawal
          anxiety by moderating nicotine levels during the transition.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If you are currently taking medication for anxiety, tell your
          prescriber you're quitting—smoking affects how some drugs (including
          certain antidepressants) are metabolized, and your dose may need
          reviewing.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              See:{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-varenicline"
              >
                quitting with varenicline
              </Link>
              ,{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-bupropion"
              >
                quitting with bupropion
              </Link>
              , and{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nrt-and-quit-smoking-app"
              >
                combining NRT with an app
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="when-to-seek-care"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          When to seek care
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Most anxiety during quitting is temporary and manageable. Seek
          professional support if you experience:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Panic attacks that are severe, prolonged, or increasing in frequency.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Thoughts of self-harm or harming others.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Anxiety that significantly impairs your ability to work or function after two weeks of being smoke-free.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Chest pain, shortness of breath at rest, or palpitations—these need prompt medical evaluation.</span>
          </li>
        </ul>
        <p className="mt-3 text-sm text-teal-900/70">
          If you are in crisis, contact a mental health crisis line or emergency
          services immediately.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-smoking-anxiety" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/guides/anxiety"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Anxiety withdrawal guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-with-anxiety</code>
      </p>
    </div>
  );
}
