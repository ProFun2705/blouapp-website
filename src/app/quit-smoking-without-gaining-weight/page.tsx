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
  title: "Quit smoking without gaining weight: a realistic plan",
  description:
    "Worried about weight gain after quitting? Here’s a realistic plan: handle cravings, plan snacks, protect sleep, and track progress without turning quitting into a diet.",
  path: "/quit-smoking-without-gaining-weight",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking without gaining weight",
    "weight gain after quitting smoking",
    "how to avoid weight gain when quitting smoking",
    "quit smoking weight gain",
  ],
});

const faqItems = [
  {
    question: "Is weight gain inevitable after quitting smoking?",
    answer:
      "No. Some people gain weight, some don’t. Appetite and taste changes are common, and snacking can replace cigarette breaks. A simple plan for food, movement, and cravings reduces the risk.",
  },
  {
    question: "Why do people gain weight when they quit smoking?",
    answer:
      "A mix of factors: nicotine affects appetite and metabolism, and many people replace the “hand-to-mouth” habit with snacks. Sleep disruption and stress can also increase cravings for high-calorie foods.",
  },
  {
    question: "Should I diet while quitting smoking?",
    answer:
      "Usually, no. Trying to quit and diet aggressively at the same time can increase relapse risk. Aim for stable meals and a few default snacks; make weight changes a secondary goal after the first few weeks.",
  },
  {
    question: "What helps most in the first 2 weeks?",
    answer:
      "Protect days 2–3, plan snacks, and use a craving timer with replacement actions. Track cravings and triggers so you can adjust instead of white-knuckling.",
  },
];

export default function QuitSmokingWithoutGainingWeightPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking without gaining weight: a realistic plan",
    description:
      "A practical plan to reduce weight gain risk while quitting smoking without turning your quit into a diet.",
    path: "/quit-smoking-without-gaining-weight",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="weight-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit without gaining weight",
            path: "/quit-smoking-without-gaining-weight",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Concern-based guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking without gaining weight (realistic plan)
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Weight worries are real—but the goal is staying smoke-free first. This
          plan focuses on stable meals, default snacks, sleep, and craving tools
          so you don’t replace cigarettes with constant grazing.
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
            Read the quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "the-plan", label: "The plan (4 pillars)" },
          { id: "default-snacks", label: "Default snacks" },
          { id: "cravings-vs-hunger", label: "Cravings vs hunger" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "related", label: "Related guides" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="To reduce weight gain while quitting: don’t diet hard—stabilize meals, choose 2–3 default snacks, protect sleep (especially days 2–3), and use a 3‑minute craving response so urges don’t turn into mindless eating."
          facts={[
            "Weight gain risk rises when cigarettes are replaced with constant snacking.",
            "Sleep disruption can increase appetite and cravings for quick calories.",
            "A craving tool reduces “I need something” impulses in the moment.",
          ]}
        />
      </section>

      <section
        id="the-plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">The plan (4 pillars)</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            <strong>Stable meals</strong>: don’t skip breakfast/lunch early in a
            quit. Blood sugar swings make cravings louder.
          </li>
          <li>
            <strong>Default snacks</strong>: pick a few options and repeat them.
            Decision fatigue drives overeating.
          </li>
          <li>
            <strong>Sleep protection</strong>: withdrawal can disrupt sleep; see{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/insomnia"
            >
              insomnia
            </Link>
            .
          </li>
          <li>
            <strong>Craving response</strong>: timer + action + change location.
            Start with{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/cravings"
            >
              cravings
            </Link>
            .
          </li>
        </ol>
      </section>

      <section
        id="default-snacks"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Default snacks</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Choose 2–3 snacks you can keep on hand so you don’t improvise when you
          feel edgy. Examples: yogurt, nuts, fruit + peanut butter, carrots +
          hummus, protein bar.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Tip: spend part of your weekly{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/tools/money-saved"
          >
            money saved
          </Link>{" "}
          on better groceries. It’s a quit reward that also reduces weight drift.
        </p>
      </section>

      <section
        id="cravings-vs-hunger"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Cravings vs hunger (fast test)
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Ask: “Would I eat something boring right now?” If yes, you’re likely
          hungry—eat a real snack. If no, it’s likely a cue-based craving—use a
          3-minute timer and a replacement action.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="related" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            "weight-gain",
            "cravings",
            "insomnia",
            "what-happens-after-1-week",
            "prepare-to-quit-smoking",
            "how-to-quit-smoking",
          ]}
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-without-weight-gain" />
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
        Canonical: <code>{SITE_URL}/quit-smoking-without-gaining-weight</code>
      </p>
    </div>
  );
}

