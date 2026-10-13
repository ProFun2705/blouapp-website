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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_nrt-and-quit-smoking-app";

export const metadata: Metadata = buildMetadata({
  title: "NRT and a quit smoking app: how to combine them",
  description:
    "Use NRT for baseline withdrawal and a quit app for cues, slips, and visibility. Simple week-by-week habits that keep both tools working together.",
  path: "/nrt-and-quit-smoking-app",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "NRT and quit app",
    "nicotine patch and app",
    "quit smoking app with NRT",
    "combination NRT tracking",
  ],
});

const faqItems = [
  {
    question: "Do I still need an app if I use the patch?",
    answer:
      "Often yes. The patch helps baseline withdrawal; apps help with cue-based cravings, slips, and keeping your quit date socially real. They solve different problems.",
  },
  {
    question: "Should I log every piece of gum?",
    answer:
      "You do not need perfect logs—consistency beats precision. Log breakthrough cravings and any fast-acting NRT you use so patterns become obvious by day 7.",
  },
  {
    question: "What if I forget the patch?",
    answer:
      "Follow product guidance and ask a pharmacist. Apps help by adding a daily check-in reminder, but they are not medical devices.",
  },
  {
    question: "Where do I learn dosing basics?",
    answer:
      "Start with our patch, gum, and lozenge pages, then confirm details with a clinician or pharmacist for your health history.",
  },
];

export default function NrtAndQuitSmokingAppPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "NRT and a quit smoking app: how to combine them",
    description:
      "How to combine nicotine replacement therapy with quit app tracking.",
    path: "/nrt-and-quit-smoking-app",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "NRT and quit smoking app", path: "/nrt-and-quit-smoking-app" },
        ]}
      />

      <ArticleHeader
        kicker="Combination support"
        title="NRT and a quit smoking app"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-smoking-with-nicotine-patch" variant="secondary">
            Patch plan →
          </ButtonLink>
        }
      >
        <p>
          NRT lowers nicotine withdrawal; a quit app lowers decision fatigue when
          a cue fires. Together they cover “body” and “habit.” This page is a
          simple operating rhythm—not dosing instructions.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "roles", label: "Who does what" },
          { id: "daily-loop", label: "Daily loop (week 1)" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use NRT as directed for baseline nicotine needs, and use a quit app for cue cravings: fast SOS help, slip recovery, and visible progress. Review your top cue once per day and update your replacement action."
          facts={[
            "Combination NRT (patch + fast acting) is common—get clinician/pharmacist guidance.",
            "Apps shine in the 3–5 minute craving window.",
            "If you slip, log it and read /i-smoked-one-cigarette the same day.",
          ]}
        />
      </section>

      <section
        id="roles"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Who does what</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>NRT</strong>: reduces withdrawal peaks (
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nicotine-withdrawal-timeline"
              >
                timeline
              </Link>
              ).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>App</strong>: makes your quit plan visible every morning and
              gives you a practiced move when a cue fires.
            </span>
          </li>
        </ul>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        That&apos;s the habit side Blou covers: its SOS button is there the
        second a cue fires, and your timeline shows every smoke-free day while
        NRT handles the withdrawal.
      </InlineAppCta>

      <section
        id="daily-loop"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Daily loop (week 1)</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>Morning: confirm NRT per label + open app for the day counter.</li>
          <li>During cravings: timer → move → water → replacement.</li>
          <li>
            Evening: one-line note on your strongest cue. Links:{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/quit-smoking-with-nicotine-gum"
            >
              gum
            </Link>
            ,{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/quit-smoking-with-nicotine-lozenge"
            >
              lozenge
            </Link>
            .
          </li>
        </ol>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
          Best quit smoking apps →
        </ButtonLink>
      </div>
    </div>
  );
}
