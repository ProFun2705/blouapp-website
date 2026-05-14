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

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: "Stress smoking: a quit plan that survives hard weeks",
  description:
    "If stress is your #1 smoking cue, you need a different default than “white knuckle.” Build micro-breaks, sleep protection, and a fast craving app loop.",
  path: "/stress-smoking-quit-plan",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "stress smoking",
    "quit smoking stress",
    "smoking because of stress",
    "stress and cigarettes",
  ],
});

const faqItems = [
  {
    question: "Will quitting make my stress worse at first?",
    answer:
      "Withdrawal can mimic anxiety for 1–2 weeks. If anxiety is severe, persistent, or includes panic attacks, seek medical support—do not self-diagnose from a webpage.",
  },
  {
    question: "Should I quit during a crisis?",
    answer:
      "Sometimes delaying 7–14 days to stabilize sleep and basics is wiser—use that window to prep, not to keep smoking indefinitely.",
  },
  {
    question: "What is the fastest craving move under stress?",
    answer:
      "Change temperature (cold water), change location, start a 3-minute timer, and do one physical action (stairs, pushups, brisk walk).",
  },
  {
    question: "Can apps help stress smokers?",
    answer:
      "Yes—if they shorten the gap between urge and action. Blou is built around fast craving support plus visible progress.",
  },
];

export default function StressSmokingQuitPlanPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Stress smoking: a quit plan that survives hard weeks",
    description:
      "Quit plan focused on stress as the primary smoking trigger.",
    path: "/stress-smoking-quit-plan",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="stress-plan-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Stress smoking quit plan", path: "/stress-smoking-quit-plan" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Stress-first quitting
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Stress smoking: a quit plan
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Stress smokers need redundancy: multiple 60-second tools, sleep
          guardrails, and a plan for the days when everything breaks at once.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_stress_plan" placement="article_intro" />
          <Link href="/guides/anxiety" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Anxiety symptom guide →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "plan", label: "The plan" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Name your top three stress cigarettes (deadlines, arguments, loneliness). Pre-assign a 60-second move for each that does not require willpower debate. Protect sleep, reduce alcohol overlap in week one, and use a tracker so stress spikes become patterns you can fix—not proof you “cannot quit.”"
          facts={[
            "Medication or NRT may still help even if stress is the story—ask a clinician.",
            "Pair with /first-week-quit-smoking for timing.",
          ]}
        />
      </section>

      <section id="plan" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">The plan</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Stack{" "}
          <Link className="font-medium text-teal-800 underline" href="/how-to-quit-smoking">
            how to quit smoking
          </Link>{" "}
          with{" "}
          <Link className="font-medium text-teal-800 underline" href="/coffee-and-quitting-smoking">
            coffee cues
          </Link>{" "}
          and{" "}
          <Link className="font-medium text-teal-800 underline" href="/driving-and-quitting-smoking">
            driving cues
          </Link>{" "}
          if those are where stress stacks.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-stress-smoking" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_stress_plan" placement="article_footer_card" />
        <Link href="/why-cant-i-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Why it feels impossible →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/stress-smoking-quit-plan</code>
      </p>
    </div>
  );
}
