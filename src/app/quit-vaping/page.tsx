import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_quit-vaping";

export const metadata: Metadata = buildMetadata({
  title: "How to quit vaping: a practical plan (2026)",
  description:
    "Quit vaping with a clear plan: set a stop date, handle nicotine urges, replace hand-to-mouth cues, and use a tracker app so progress stays visible.",
  path: "/quit-vaping",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit vaping",
    "how to quit vaping",
    "stop vaping",
    "vaping cessation",
    "nicotine vape quit",
  ],
});

const faqItems = [
  {
    question: "Is quitting vaping harder than quitting cigarettes?",
    answer:
      "It varies. Vapes can deliver nicotine in a highly reinforcing pattern, and the hand-to-mouth habit is strong. The same behavioral tools work: a fixed stop date, urge surfing, cue swaps, and daily tracking.",
  },
  {
    question: "Will I get nicotine withdrawal if I quit vaping?",
    answer:
      "Often yes—irritability, cravings, sleep changes, and difficulty concentrating are common in the first 1–2 weeks. If symptoms feel severe or you have heart or lung conditions, seek medical advice.",
  },
  {
    question: "Can a quit app help with vaping?",
    answer:
      "Yes, if it gives you a fast craving response and visible progress. Blou is built around cigarettes, but its SOS craving help and its visual timeline of smoke-free days and milestones work the same way when the nicotine comes from a vape.",
  },
  {
    question: "Should I use NRT to quit vaping?",
    answer:
      "Some people switch to FDA-regulated NRT with clinician or pharmacist guidance. It is a medical decision—especially if you are pregnant, young, or have cardiovascular disease.",
  },
];

export default function QuitVapingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to quit vaping: a practical plan (2026)",
    description:
      "A practical plan for stopping vaping: stop date, urges, cues, and tracking.",
    path: "/quit-vaping",
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

      <Breadcrumbs items={[{ name: "Quit vaping", path: "/quit-vaping" }]} />

      <ArticleHeader
        kicker="Vaping cessation"
        title="How to quit vaping"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/how-to-quit-smoking" variant="secondary">
            Core quit plan →
          </ButtonLink>
        }
      >
        <p>
          Treat quitting vaping like any nicotine quit: pick a stop date, plan
          your top cues, and use a tight loop when urges hit (timer → move →
          water → one replacement). Tracking makes the first two weeks survivable.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "seven-day-setup", label: "7-day setup" },
          { id: "urge-plan", label: "When an urge hits" },
          { id: "dual-use", label: "Still smoking sometimes?" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Pick a stop date in the next 7–14 days, remove devices and spare pods from easy reach, and pre-decide a 2-minute replacement for your three strongest cues (stress, driving, after meals). Use a tracker app so urges become data, not debates."
          facts={[
            "Most urges peak within minutes—speed of response matters more than motivation.",
            "Hand-to-mouth and flavor cues are real; swap them with gum, tea, or a short walk.",
            "If you also smoke cigarettes, address dual use explicitly—see the link below.",
          ]}
        />
      </section>

      <section
        id="seven-day-setup"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">7-day setup</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            Name the stop date and tell one person who will check in on days 1,
            3, and 7 (same playbook as{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/prepare-to-quit-smoking"
            >
              prepare to quit
            </Link>
            ).
          </li>
          <li>
            List your top cues and write one realistic replacement each—not a
            fantasy habit, something you will actually do in 120 seconds.
          </li>
          <li>
            Read{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/nicotine-withdrawal-timeline"
            >
              nicotine withdrawal timeline
            </Link>{" "}
            so days 2–3 do not feel like a surprise attack.
          </li>
        </ol>
      </section>

      <section
        id="urge-plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">When an urge hits</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Start a 3-minute timer, stand up, drink water, and do one pre-chosen
          action (walk around the block, brush teeth, text your check-in person).
          After the timer, decide whether you still need{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/guides/cravings"
          >
            craving tactics
          </Link>{" "}
          or medical support.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Blou&apos;s SOS craving help is built for exactly this moment: it is
        there the second an urge hits, and every day you stay off nicotine adds
        to one visual timeline.
      </InlineAppCta>

      <section
        id="dual-use"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Still smoking cigarettes sometimes?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Dual use keeps nicotine reinforcement high. Read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/vaping-and-smoking-together"
          >
            vaping and smoking together
          </Link>{" "}
          and pick one primary quit pathway with your clinician if needed.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/nrt-and-quit-smoking-app" variant="secondary">
          NRT + quit app →
        </ButtonLink>
      </div>
    </div>
  );
}
