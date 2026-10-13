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
const CAMPAIGN = "article_quit-smoking-on-a-budget";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking on a budget: free help + smart spending",
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
      "They can be if they cover cravings, tracking, and slips. See /best-quit-smoking-apps for how the main apps compare, including what each one costs.",
  },
  {
    question: "How do I afford NRT?",
    answer:
      "Store-brand NRT, sales, and pharmacist advice on duration can help. Some regions subsidize cessation products—ask a pharmacist or clinician.",
  },
  {
    question: "Does Blou cost money?",
    answer:
      "Yes. Blou is a subscription app with a free trial, and nothing in the app works without an active subscription. Cancel anytime in your Apple ID subscriptions before it renews. The guides, calculators, and tools on this website are free.",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "Quit smoking on a budget", path: "/quit-smoking-on-a-budget" }]}
      />

      <ArticleHeader
        kicker="Cost-conscious quitting"
        title="Quit smoking on a budget"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/tools/money-saved" variant="secondary">
            Money saved tool →
          </ButtonLink>
        }
      >
        <p>
          Money stress is a smoking trigger—so your quit plan should reduce
          financial surprises. Stack free coaching, generic products where
          appropriate, and visible savings so the quit pays you back.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "free", label: "Free first" },
          { id: "spend", label: "Where spending helps" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Start with free quitlines and a genuinely free tracker app, then spend selectively on evidence-based NRT or clinician-prescribed medications if eligible. Use a savings calculator so motivation compounds weekly."
          facts={[
            "Check what an app costs before you commit—see /best-quit-smoking-apps.",
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

      <InlineAppCta campaign={CAMPAIGN}>
        A relapse is the most expensive outcome. Blou&apos;s SOS craving help is
        there the second a craving hits, and every milestone sits on one visual
        timeline so you can see what you are protecting.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
          App comparisons →
        </ButtonLink>
      </div>
    </div>
  );
}
