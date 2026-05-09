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
  title: "Quit smoking cold turkey: when it works (and a safer plan)",
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
    title: "Quit smoking cold turkey: when it works (and a safer plan)",
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
      <Script id="cold-turkey-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Quit smoking cold turkey", path: "/quit-smoking-cold-turkey" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Method guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking cold turkey
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Cold turkey can work when you pair it with a real plan: a fixed quit
          date, cue replacements, and a fast craving response for days 1–14.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/prepare-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Prep in 7 days →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "when-cold-turkey-works", label: "When cold turkey works" },
          { id: "a-simple-plan", label: "A simple cold-turkey plan" },
          { id: "days-2-3", label: "Protect days 2–3" },
          { id: "social-proof", label: "App Store reviews" },
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

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

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
        <FaqSection items={faqItems} jsonLdId="faq-cold-turkey" />
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
        Canonical: <code>{SITE_URL}/quit-smoking-cold-turkey</code>
      </p>
    </div>
  );
}

