import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_quit-smoking-cold-turkey";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking cold turkey: when it works + safer plan",
  description:
    "Thinking about quitting smoking cold turkey? Here’s when it works, when to add NRT/medication support, and a simple plan for days 1–14.",
  path: "/quit-smoking-cold-turkey",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking cold turkey",
    "cold turkey quitting smoking",
    "quit smoking taper vs cold turkey",
    "best way to quit smoking",
  ],
});

const faqItems = [
  {
    question: "Is cold turkey the best way to quit smoking?",
    answer:
      "Cold turkey can work for some people, especially when paired with a fixed quit date and a plan for cravings and cues. Many people have higher odds when they add evidence-based support like NRT or medication.",
  },
  {
    question: "Is tapering better than cold turkey?",
    answer:
      "Tapering can work if it’s structured and leads to a firm quit date. The risk is drifting (“I’ll cut down forever”). Cold turkey can be simpler if you’re ready to stop completely on a date.",
  },
  {
    question: "What are the hardest days when quitting cold turkey?",
    answer:
      "Many people report days 2–3 are the toughest as withdrawal peaks. Plan those days like a recovery weekend: fewer triggers, more sleep, and fast craving tools.",
  },
  {
    question: "What if I slip after quitting cold turkey?",
    answer:
      "Contain it quickly and return to plan the same day. Use /i-smoked-one-cigarette and update your top cue so the same situation doesn’t repeat.",
  },
];

export default function QuitSmokingColdTurkeyPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking cold turkey: when it works + safer plan",
    description:
      "A practical plan for quitting cold turkey with predictable withdrawal and cue-based cravings.",
    path: "/quit-smoking-cold-turkey",
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
          { name: "Quit smoking cold turkey", path: "/quit-smoking-cold-turkey" },
        ]}
      />

      <ArticleHeader
        kicker="Method guide"
        title="Quit smoking cold turkey"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/prepare-to-quit-smoking" variant="secondary">
            Prep in 7 days →
          </ButtonLink>
        }
      >
        <p>
          Cold turkey can work when you pair it with a real plan: a fixed quit
          date, cue replacements, and a fast craving response for days 1–14.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "when-cold-turkey-works", label: "When cold turkey works" },
          { id: "a-simple-plan", label: "A simple cold-turkey plan" },
          { id: "days-2-3", label: "Protect days 2–3" },
          { id: "related", label: "Related guides" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Cold turkey works best when you set a quit date, plan around your top three cues, and use a fast craving response (timer + action) every time. If withdrawal is intense or past attempts failed, adding NRT or medication support can improve your odds."
          facts={[
            "Cravings usually come in short waves—fast tools help you outlast them.",
            "Withdrawal often peaks on days 2–3—plan those days carefully.",
            "A slip is common; what matters is containing it and updating the plan.",
          ]}
        />
      </section>

      <section
        id="when-cold-turkey-works"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          When cold turkey works
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You want a clean break on a specific date (no taper drift).</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You’ve planned replacements for your top cues (coffee, driving,
              after meals).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You’ll track cravings for 2 weeks and adjust your plan instead of
              relying on willpower.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="a-simple-plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          A simple cold-turkey plan (days 1–14)
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            Prep your quit date using{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/prepare-to-quit-smoking"
            >
              the checklist
            </Link>
            .
          </li>
          <li>
            Use one craving response every time: timer → change location → water
            → 2‑minute action (see{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/cravings"
            >
              cravings
            </Link>
            ).
          </li>
          <li>
            Track cravings (time + cue). Review nightly for 30 seconds and pick
            one cue to modify tomorrow.
          </li>
        </ol>
      </section>

      <section
        id="days-2-3"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Protect days 2–3
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Many people report days 2–3 feel hardest. Keep meals steady, reduce
          alcohol triggers (see{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/alcohol-and-quitting-smoking"
          >
            alcohol and quitting smoking
          </Link>
          ), and protect sleep (see{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/guides/insomnia"
          >
            insomnia
          </Link>
          ).
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Days 2–3 are usually the hardest. Blou&apos;s SOS button is there the
        second a craving hits, and your timeline shows every smoke-free day
        you&apos;ve already put behind you.
      </InlineAppCta>

      <section id="related" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            "prepare-to-quit-smoking",
            "how-to-quit-smoking",
            "cravings",
            "what-happens-after-3-days",
            "alcohol-and-quitting-smoking",
            "i-smoked-one-cigarette",
          ]}
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
          Withdrawal timeline →
        </ButtonLink>
      </div>
    </div>
  );
}

