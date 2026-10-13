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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-05-13";

export const metadata: Metadata = buildMetadata({
  title: "Why can’t I quit smoking? (It’s usually three reasons)",
  description:
    "Nicotine dependence, cue triggers, and shame loops explain most “I can’t quit” feelings. Here is a practical reset: medication options, cue planning, and tracking.",
  path: "/why-cant-i-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "why cant i quit smoking",
    "cant quit smoking",
    "failed to quit smoking",
    "nicotine addiction hard to quit",
  ],
});

const faqItems = [
  {
    question: "Does struggling to quit mean I lack willpower?",
    answer:
      "No. Tobacco dependence is a medical condition with behavioral cues. Evidence-based medications and structured plans outperform “white-knuckle” quitting for most people.",
  },
  {
    question: "What is the fastest fix people skip?",
    answer:
      "A real quit date plus one supported pathway (NRT, varenicline, or bupropion with clinician guidance). Trying to improvise day-by-day exhausts decision-making.",
  },
  {
    question: "Why do I quit for two weeks then return?",
    answer:
      "Cue-based habits survive withdrawal. You likely need better cue replacements and slip protocols—not more guilt.",
  },
  {
    question: "Can an app actually change outcomes?",
    answer:
      "Apps help consistency: craving drills, savings visibility, and slip recovery. They work best alongside medical support when appropriate.",
  },
];

export default function WhyCantIQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Why can’t I quit smoking? (It’s usually three reasons)",
    description:
      "Common barriers to quitting smoking and a practical reset.",
    path: "/why-cant-i-quit-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="why-cant-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Why can’t I quit smoking?", path: "/why-cant-i-quit-smoking" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Reset guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Why can’t I quit smoking?
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          If this sounds familiar, you are not broken—most people need multiple
          attempts and better scaffolding. Start by separating biology
          (nicotine), psychology (cues), and shame (which hides slips).
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_why_cant" placement="article_intro" />
          <Link
            href="/trying-to-quit-smoking-again"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Trying again →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "three-reasons", label: "Three usual reasons" },
          { id: "next-move", label: "Your next move" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Most people struggle because nicotine withdrawal is real, smoking cues are deeply learned, and shame after slips erodes planning. Fix it with clinician-supported medication when eligible, a fixed quit date with cue replacements, and a tracker that turns slips into data."
          facts={[
            "Withdrawal peaks days 2–3—see /nicotine-withdrawal-timeline.",
            "Cravings usually last minutes—train a timer habit.",
            "Quitlines add free counseling (US 1-800-QUIT-NOW).",
          ]}
        />
      </section>

      <section
        id="three-reasons"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Three usual reasons
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            <strong>Biology</strong>: nicotine receptors take weeks to calm;
            medications/NRT change the odds—see{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/how-to-quit-smoking"
            >
              how to quit smoking
            </Link>
            .
          </li>
          <li>
            <strong>Cues</strong>: coffee, alcohol, stress—plan each with{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/cravings"
            >
              cravings
            </Link>
            .
          </li>
          <li>
            <strong>Shame loops</strong>: hiding slips delays fixes—use{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/i-smoked-one-cigarette"
            >
              first-hour playbook
            </Link>
            .
          </li>
        </ul>
      </section>

      <section
        id="next-move"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Your next move</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Pick one: book a clinician visit for cessation meds, call a quitline,
          or commit to{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/prepare-to-quit-smoking"
          >
            prep week
          </Link>{" "}
          if you’re within 7–14 days of a date. Motion beats rumination.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-why-cant-quit" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_why_cant"
          placement="article_footer_card"
        />
        <Link
          href="/motivation-to-quit-smoking"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Motivation toolkit →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/why-cant-i-quit-smoking</code>
      </p>
    </div>
  );
}
