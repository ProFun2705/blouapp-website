import type { Metadata } from "next";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_why-cant-i-quit-smoking";

export const metadata: Metadata = buildMetadata({
  title: "Why can’t I quit smoking? The 3 usual reasons",
  description:
    "Nicotine dependence, cue triggers, and shame loops explain most “I can’t quit” feelings. A practical reset: medication options, cue planning, and tracking.",
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
    title: "Why can’t I quit smoking? The 3 usual reasons",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Why can’t I quit smoking?", path: "/why-cant-i-quit-smoking" },
        ]}
      />

      <ArticleHeader
        kicker="Reset guide"
        title="Why can’t I quit smoking?"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/trying-to-quit-smoking-again" variant="secondary">
            Trying again →
          </ButtonLink>
        }
      >
        <p>
          If this sounds familiar, you are not broken—most people need multiple
          attempts and better scaffolding. Start by separating biology
          (nicotine), psychology (cues), and shame (which hides slips).
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "three-reasons", label: "Three usual reasons" },
          { id: "next-move", label: "Your next move" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        Cues and cravings are where most attempts break. Blou&apos;s SOS button is there the second a
        craving hits, and your timeline keeps every smoke-free day in view.
      </InlineAppCta>

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

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/motivation-to-quit-smoking" variant="secondary">
          Motivation toolkit →
        </ButtonLink>
      </div>
    </div>
  );
}
