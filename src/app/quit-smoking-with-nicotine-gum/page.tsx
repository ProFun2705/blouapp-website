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
  title: "Quit smoking with nicotine gum: how to handle cravings",
  description:
    "How to quit smoking with nicotine gum: what it’s for, how to handle cue-based cravings, and how to use tracking to stay consistent in weeks 1–4.",
  path: "/quit-smoking-with-nicotine-gum",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking with nicotine gum",
    "nicotine gum to quit smoking",
    "nicotine gum cravings",
    "how to use nicotine gum",
  ],
});

const faqItems = [
  {
    question: "Does nicotine gum help you quit smoking?",
    answer:
      "For many people, yes. Nicotine gum is a form of NRT that can reduce withdrawal and help with cravings—especially when paired with a quit plan and cue replacement.",
  },
  {
    question: "What if nicotine gum doesn’t stop my cravings?",
    answer:
      "Cravings are often cue-based (coffee, driving, stress), not only nicotine withdrawal. Use a quick craving response (timer + replacement), and talk to a clinician/pharmacist about dosing or combining NRT products if appropriate.",
  },
  {
    question: "How long should I use nicotine gum?",
    answer:
      "Many programs use NRT for weeks to months with a taper, but duration varies. Follow the product label and professional guidance for your situation.",
  },
  {
    question: "Is nicotine gum safe?",
    answer:
      "NRT is widely used and generally safer than smoking, but individual conditions vary. Follow label instructions and consult a clinician if you’re pregnant, have heart conditions, or take interacting medications.",
  },
];

export default function QuitSmokingWithNicotineGumPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking with nicotine gum: how to handle cravings",
    description:
      "A practical plan for quitting with nicotine gum, focusing on cravings, cues, and consistency.",
    path: "/quit-smoking-with-nicotine-gum",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="gum-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking with nicotine gum",
            path: "/quit-smoking-with-nicotine-gum",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          NRT support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking with nicotine gum
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Gum can help with withdrawal and “breakthrough” urges. Your bigger job
          is cue replacement: the coffee craving, the drive craving, the stress
          craving. This page gives a simple system for weeks 1–4.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/guides/cravings"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Read the cravings playbook →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "simple-plan", label: "A simple gum plan" },
          { id: "cue-cravings", label: "Cue-based cravings" },
          { id: "slips", label: "If you slip" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use nicotine gum to reduce withdrawal and manage breakthrough cravings, then build a fast cue response: 3-minute timer, change location, water, and a pre-decided 2-minute action. Track cravings for 2 weeks to see patterns and adjust your plan."
          facts={[
            "Withdrawal peaks around days 2–3; planning support matters most then.",
            "Cravings often come from cues, not nicotine alone—replace the routine.",
            "Tracking cravings helps you stay out of all-or-nothing thinking after slips.",
          ]}
        />
      </section>

      <section
        id="simple-plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          A simple gum plan (weeks 1–4)
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            Set a quit date and prep your top cues using{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/prepare-to-quit-smoking"
            >
              the checklist
            </Link>
            .
          </li>
          <li>
            Use gum as directed (label/clinician guidance). Keep it accessible so
            you don’t negotiate with “just one cigarette.”
          </li>
          <li>
            Track cravings: time + cue + what you did. Review nightly for 30
            seconds and pick one change for tomorrow.
          </li>
        </ol>
      </section>

      <section
        id="cue-cravings"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Cue-based cravings (the real long game)
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Even with NRT, cues can trigger urges: coffee, driving, finishing a
          meal, stress, alcohol. The fix is not more willpower—it’s a replacement
          routine you do automatically. Start with the strategies in{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/guides/cravings"
          >
            cravings
          </Link>{" "}
          and avoid high-risk pairing like{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/alcohol-and-quitting-smoking"
          >
            alcohol
          </Link>{" "}
          early on.
        </p>
      </section>

      <section
        id="slips"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">If you slip</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Contain it quickly and return to plan. Use{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/i-smoked-one-cigarette"
          >
            the first-hour playbook
          </Link>{" "}
          and update your top cue the same day.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-nicotine-gum" />
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
        Canonical: <code>{SITE_URL}/quit-smoking-with-nicotine-gum</code>
      </p>
    </div>
  );
}

