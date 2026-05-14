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

const PUBLISHED = "2026-05-14";
const MODIFIED = "2026-05-14";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking on a budget: free support + smart spending",
  description:
    "How to quit when money is tight: free quitlines, OTC NRT strategies to discuss with a pharmacist, generic meds, and free quit apps that still work.",
  path: "/quit-smoking-on-a-budget",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking on a budget",
    "free help quit smoking",
    "cheap way to quit smoking",
    "quit smoking no money",
  ],
});

const faqItems = [
  {
    question: "Is a quitline really free?",
    answer:
      "In many countries (e.g. US 1-800-QUIT-NOW, UK NHS services) behavioral coaching is free at the point of use. Availability varies—search your country + quitline.",
  },
  {
    question: "Are free quit apps enough?",
    answer:
      "They can be if they cover cravings, tracking, and slips. See /free-quit-smoking-app for what “free” should include.",
  },
  {
    question: "How do I afford NRT?",
    answer:
      "Store-brand NRT, sales, and pharmacist advice on duration can help. Some regions subsidize cessation products—ask a pharmacist or clinician.",
  },
  {
    question: "Does Blou cost money?",
    answer:
      "Blou is free to download with optional premium; core tracking is designed to be useful without a subscription.",
  },
];

export default function QuitSmokingOnABudgetPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking on a budget: free support + smart spending",
    description:
      "Budget-conscious strategies for quitting smoking with free and low-cost support.",
    path: "/quit-smoking-on-a-budget",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="budget-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Quit smoking on a budget", path: "/quit-smoking-on-a-budget" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Cost-conscious quitting
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking on a budget
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Money stress is a smoking trigger—so your quit plan should reduce
          financial surprises. Stack free coaching, generic products where
          appropriate, and visible savings so the quit pays you back.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_budget" placement="article_intro" />
          <Link href="/tools/money-saved" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Money saved tool →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "free", label: "Free first" },
          { id: "spend", label: "Where spending helps" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Start with free quitlines and a genuinely free tracker app, then spend selectively on evidence-based NRT or clinician-prescribed medications if eligible. Use a savings calculator so motivation compounds weekly."
          facts={[
            "Avoid subscription traps that lock craving tools—see /free-quit-smoking-app.",
            "Combination NRT can be cost-effective if it prevents relapse—ask a pharmacist.",
          ]}
        />
      </section>

      <section id="free" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Free first</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Quitline coaching (country-specific).</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>NHS/CDC reading lists linked from /how-to-quit-smoking.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>Community accountability that does not shame slips.</span></li>
        </ul>
      </section>

      <section id="spend" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Where spending helps</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Relapse costs more than a patch box. Compare{" "}
          <Link className="font-medium text-teal-800 underline" href="/nicotine-patch-vs-gum">
            patch vs gum
          </Link>{" "}
          and read{" "}
          <Link className="font-medium text-teal-800 underline" href="/quit-smoking-without-nrt">
            non-NRT paths
          </Link>{" "}
          only if you are sure—then commit.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-budget-quit" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_budget" placement="article_footer_card" />
        <Link href="/best-quit-smoking-apps" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          App comparisons →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-on-a-budget</code>
      </p>
    </div>
  );
}
