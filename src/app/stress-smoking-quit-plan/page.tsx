import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_stress-smoking-quit-plan";

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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Stress smoking quit plan", path: "/stress-smoking-quit-plan" }]}
      />

      <ArticleHeader
        kicker="Stress-first quitting"
        title="Stress smoking: a quit plan"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-smoking-with-anxiety" variant="secondary">
            Quitting with anxiety →
          </ButtonLink>
        }
      >
        <p>
          Stress smokers need redundancy: multiple 60-second tools, sleep
          guardrails, and a plan for the days when everything breaks at once.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "plan", label: "The plan" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        When stress spikes, Blou&apos;s SOS button is there the second a craving
        hits, and your timeline shows every smoke-free day that made it through
        a hard week.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/why-cant-i-quit-smoking" variant="secondary">
          Why it feels impossible →
        </ButtonLink>
      </div>
    </div>
  );
}
