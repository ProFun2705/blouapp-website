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

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-05-09";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking with the nicotine patch: a simple plan",
  description:
    "How to quit smoking with the nicotine patch: when to start, how to handle breakthrough cravings, and how an app keeps you consistent in weeks 1–4.",
  path: "/quit-smoking-with-nicotine-patch",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking with nicotine patch",
    "nicotine patch to quit smoking",
    "how to use nicotine patch",
    "nicotine patch cravings",
  ],
});

const faqItems = [
  {
    question: "Does the nicotine patch actually help you quit?",
    answer:
      "For many people, yes. NRT (including the patch) can reduce withdrawal symptoms by providing controlled nicotine without smoke toxins. It’s most effective when paired with a plan for cues and cravings.",
  },
  {
    question: "Can I smoke while wearing a nicotine patch?",
    answer:
      "Follow the product label and clinician guidance. If you slip, don’t turn it into a relapse—contain it and return to plan. See /i-smoked-one-cigarette.",
  },
  {
    question: "What if I still crave cigarettes on the patch?",
    answer:
      "That’s common. Patch reduces baseline withdrawal, but cue-based cravings can still hit. A quick craving response (timer + replacement) and/or a fast‑acting NRT product may help—talk to a clinician or pharmacist for dosing guidance.",
  },
  {
    question: "How long should I use the patch?",
    answer:
      "Many patch plans run 8–12 weeks with step-down dosing, but the right duration depends on your history and dosing. Use the label and professional advice for your situation.",
  },
];

export default function QuitSmokingWithNicotinePatchPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking with the nicotine patch: a simple plan",
    description:
      "A practical plan for quitting with the nicotine patch, including how to handle cravings and build routines.",
    path: "/quit-smoking-with-nicotine-patch",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="patch-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking with nicotine patch",
            path: "/quit-smoking-with-nicotine-patch",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          NRT support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking with the nicotine patch
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          The patch can reduce baseline withdrawal. Your main job is handling
          cue-based cravings (coffee, driving, stress). This page gives a simple
          plan so you can stay consistent in weeks 1–4.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/prepare-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Prep checklist →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "simple-plan", label: "A simple patch plan" },
          { id: "breakthrough-cravings", label: "Breakthrough cravings" },
          { id: "slips", label: "If you slip" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use the nicotine patch to reduce baseline withdrawal, then use a fast craving response for cues: start a 3-minute timer, change location, drink water, and do one pre-decided replacement action. Consistency (daily patch + daily tracking) matters more than perfection."
          facts={[
            "Patch helps with background withdrawal; cue-based cravings can still appear.",
            "Days 2–3 often feel hardest—protect sleep and reduce triggers.",
            "Tracking cravings turns slips into plan updates, not shame spirals.",
          ]}
        />
      </section>

      <section
        id="simple-plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          A simple patch plan (weeks 1–4)
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            Choose a quit date and prep your cues using{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/prepare-to-quit-smoking"
            >
              the 7‑day checklist
            </Link>
            .
          </li>
          <li>
            Use the patch daily as directed (label/clinician guidance), and
            remove smoking cues from your environment.
          </li>
          <li>
            Log cravings (timestamp + cue). Use a quick response from{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/cravings"
            >
              cravings
            </Link>
            .
          </li>
          <li>
            Review once per day: your top cue and your best replacement. That’s
            your “plan update.”
          </li>
        </ol>
      </section>

      <section
        id="breakthrough-cravings"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Breakthrough cravings (what to do)
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Even with the patch, cravings can hit because cues are learned. Your
          goal is to make your response automatic: timer → change location →
          water → one 2‑minute action (walk, teeth, stretch, text someone).
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If cravings feel unmanageable or you’re unsure about dosing, ask a
          pharmacist or clinician for personalized guidance.
        </p>
      </section>

      <section
        id="slips"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">If you slip</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          A slip is common. Contain it and return to plan the same day. Use{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/i-smoked-one-cigarette"
          >
            what to do after one cigarette
          </Link>{" "}
          and update your top cue for tomorrow.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-nicotine-patch" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/nicotine-withdrawal-timeline"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Withdrawal timeline →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-with-nicotine-patch</code>
      </p>
    </div>
  );
}

