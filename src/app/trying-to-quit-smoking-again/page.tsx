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
const CAMPAIGN = "article_trying-to-quit-smoking-again";

export const metadata: Metadata = buildMetadata({
  title: "Trying to quit smoking again: a smarter next attempt",
  description:
    "Multiple quit attempts are normal. Here’s how to learn from the last one—new quit date, cue fixes, medication review, and slip protocols.",
  path: "/trying-to-quit-smoking-again",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "trying to quit smoking again",
    "quit smoking after relapse",
    "failed quit smoking retry",
    "multiple quit attempts",
  ],
});

const faqItems = [
  {
    question: "How many tries does quitting take?",
    answer:
      "Many people need several serious attempts. Each try can collect data on cues and high-risk situations—use that data instead of self-blame.",
  },
  {
    question: "Should I use medication this time?",
    answer:
      "If you tried willpower-only before, talk to a clinician about NRT, varenicline, or bupropion. Medications meaningfully improve odds for many smokers.",
  },
  {
    question: "What if I embarrassed myself last time?",
    answer:
      "Tell one supportive person you’re trying again with a clearer plan. Accountability works better without performance pressure.",
  },
  {
    question: "Where does Blou fit?",
    answer:
      "Blou gives you SOS help the second a craving hits, plus lung checks, a photo timeline, and every milestone and smoke-free day on one visual timeline, so this attempt starts with progress you can see.",
  },
];

export default function TryingToQuitSmokingAgainPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Trying to quit smoking again: a smarter next attempt",
    description:
      "How to retry quitting smoking with a structured plan after previous attempts.",
    path: "/trying-to-quit-smoking-again",
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
          {
            name: "Trying to quit smoking again",
            path: "/trying-to-quit-smoking-again",
          },
        ]}
      />

      <ArticleHeader
        kicker="Retry playbook"
        title="Trying to quit smoking again"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/how-to-stop-a-relapse" variant="secondary">
            Stop a relapse →
          </ButtonLink>
        }
      >
        <p>
          You are not “starting over from zero”—you are stacking lessons. The
          goal of this attempt is to fix one failure mode from last time (cue,
          alcohol window, medication gap, sleep crash).
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "postmortem", label: "Mini post-mortem" },
          { id: "upgrade", label: "Upgrade one layer" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Pick a new quit date within 7–14 days, write down exactly how the last attempt broke (cue, person, time), and upgrade one layer—medication consult, alcohol plan, or sleep protection. Track daily so slips become adjustments."
          facts={[
            "Relapse maintenance pages cover weeks 2–8 pitfalls.",
            "Combination NRT may outperform single-product use—ask a clinician.",
            "Quitlines coach retries for free.",
          ]}
        />
      </section>

      <section
        id="postmortem"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Mini post-mortem</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Answer in one line each: What day did cravings spike? What cue broke
          me? Did alcohol matter? Then open{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/why-cant-i-quit-smoking"
          >
            why it feels impossible
          </Link>{" "}
          if you are stuck emotionally.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Once you know where the last attempt broke, plan for that moment. Blou&apos;s SOS button is
        there the second a craving hits, and your timeline shows this attempt&apos;s progress day by day.
      </InlineAppCta>

      <section
        id="upgrade"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Upgrade one layer</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Meds: review{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-varenicline"
              >
                varenicline
              </Link>{" "}
              /{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-bupropion"
              >
                bupropion
              </Link>{" "}
              with your clinician.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              NRT stack: see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nrt-and-quit-smoking-app"
              >
                NRT + app
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Environment: rerun{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/prepare-to-quit-smoking"
              >
                prep checklist
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Full quit plan →
        </ButtonLink>
      </div>
    </div>
  );
}
