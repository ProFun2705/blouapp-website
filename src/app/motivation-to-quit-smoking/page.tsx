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
const CAMPAIGN = "article_motivation-to-quit-smoking";

export const metadata: Metadata = buildMetadata({
  title: "Motivation to quit smoking: turn it into a plan",
  description:
    "Motivation spikes and fades—use these prompts to lock a quit date, list reasons that survive cravings, and pair them with apps, quitlines, and medications.",
  path: "/motivation-to-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "motivation to quit smoking",
    "reasons to quit smoking",
    "want to quit smoking",
    "quit smoking inspiration",
  ],
});

const faqItems = [
  {
    question: "What if I feel motivated at night and lose it by morning?",
    answer:
      "That is normal—motivation is volatile. Commitment tools (quit date in calendar, app installed, meds picked up) survive low-motivation mornings better than feelings alone.",
  },
  {
    question: "Should I focus on health or money?",
    answer:
      "Use both. Health reasons matter long-term; money and time saved matter this week. Blou puts every milestone and smoke-free day on one visual timeline so the benefits stay concrete.",
  },
  {
    question: "How do I handle friends who smoke?",
    answer:
      "Pre-write two sentences you will say when offered a cigarette, and plan an exit for high-risk nights—see /social-smoking.",
  },
  {
    question: "Is it okay to quit for someone else?",
    answer:
      "External reasons can start the journey, but pair them with a plan you own. Otherwise resentment can erode the quit when relationships strain.",
  },
];

export default function MotivationToQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Motivation to quit smoking: turn it into a plan",
    description:
      "How to convert motivation into a quit plan with dates, support, and tracking.",
    path: "/motivation-to-quit-smoking",
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
          { name: "Motivation to quit smoking", path: "/motivation-to-quit-smoking" },
        ]}
      />

      <ArticleHeader
        kicker="Mindset + execution"
        title="Motivation to quit smoking"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/prepare-to-quit-smoking" variant="secondary">
            7-day prep →
          </ButtonLink>
        }
      >
        <p>
          Motivation gets you to the starting line; systems get you through week
          three. Capture your reasons once, then invest energy into a dated plan,
          meds/NRT if appropriate, and craving drills you can repeat tired.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "reasons", label: "Write reasons that survive cravings" },
          { id: "systems", label: "Stack systems, not slogans" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Write three reasons in plain language, then schedule a quit date within 7–14 days, install a tracker, and line up one evidence-based support channel (quitline, NRT, or clinician-guided medication). Motivation fluctuates; calendars and apps do not."
          facts={[
            "Visible progress (money, days, milestones) sustains motivation better than willpower alone.",
            "Cravings are minutes long—train a timer habit with /guides/cravings.",
            "If you feel stuck, read /why-cant-i-quit-smoking before changing the plan.",
          ]}
        />
      </section>

      <section
        id="reasons"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Write reasons that survive cravings
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Immediate</strong>: taste, smell, stamina today.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>People</strong>: who you want to be present for (without
              guilt-tripping yourself).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Money</strong>: plug numbers into{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                money saved
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Reasons hold up better when you can see them paying off. Blou&apos;s photo timeline and lung
        checks show your own changes, with every milestone on one visual timeline.
      </InlineAppCta>

      <section
        id="systems"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Stack systems, not slogans
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Follow{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/how-to-quit-smoking"
          >
            how to quit smoking
          </Link>
          , add{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/nrt-and-quit-smoking-app"
          >
            NRT + app
          </Link>{" "}
          if using patches or gum, and bookmark{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/trying-to-quit-smoking-again"
          >
            trying again
          </Link>{" "}
          before you need it.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
          Compare apps →
        </ButtonLink>
      </div>
    </div>
  );
}
