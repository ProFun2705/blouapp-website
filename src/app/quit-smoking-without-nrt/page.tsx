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
const CAMPAIGN = "article_quit-smoking-without-nrt";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking without NRT: what actually improves odds",
  description:
    "If you prefer not to use nicotine replacement, stack quitlines, cue planning, sleep, and a tracker app—plus know when to reconsider NRT with a clinician.",
  path: "/quit-smoking-without-nrt",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking without NRT",
    "quit smoking no patch",
    "natural quit smoking",
    "quit smoking without nicotine replacement",
  ],
});

const faqItems = [
  {
    question: "Is quitting without NRT harder?",
    answer:
      "On average, medications and NRT improve quit rates versus unsupported attempts. If you decline NRT, you should compensate with stronger behavioral scaffolding.",
  },
  {
    question: "Is this the same as cold turkey?",
    answer:
      "Cold turkey usually means stopping cigarettes abruptly on a quit date—often still the most common path. This page is broader: any plan that avoids nicotine replacement while still using other supports.",
  },
  {
    question: "When should I reconsider NRT?",
    answer:
      "If you have repeated intense withdrawal, multiple lapses in week one, or medical conditions that make unmedicated quitting risky—ask a clinician.",
  },
  {
    question: "How does Blou help without NRT?",
    answer:
      "SOS help the second a craving hits, simple lung checks, a photo timeline, and every milestone and smoke-free day on one visual timeline—behavioral visibility that adds some of the structure NRT would otherwise provide.",
  },
];

export default function QuitSmokingWithoutNrtPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking without NRT: what actually improves odds",
    description:
      "Behavioral strategies for quitting smoking without nicotine replacement therapy.",
    path: "/quit-smoking-without-nrt",
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
        items={[{ name: "Quit smoking without NRT", path: "/quit-smoking-without-nrt" }]}
      />

      <ArticleHeader
        kicker="Non-NRT path"
        title="Quit smoking without NRT"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-smoking-cold-turkey" variant="secondary">
            Cold turkey guide →
          </ButtonLink>
        }
      >
        <p>
          Choosing not to use nicotine replacement is valid—but it is not the same
          as “white knuckle only.” Add quitline coaching, airtight cue plans, and
          tracking so the attempt teaches you something even if it wobbles.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "stack", label: "Stack these supports" },
          { id: "reconsider", label: "When to reconsider NRT" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="If you will not use NRT, maximize free behavioral support (quitline), pre-decide cue responses, protect sleep, and track cravings so slips become plan updates. Non-pharmacologic prescription options (e.g. varenicline, bupropion) may still be on the table—ask a clinician."
          facts={[
            "Combine with /how-to-quit-smoking for the seven-step backbone.",
            "Alcohol is a common breaker—see /alcohol-and-quitting-smoking.",
            "Week one playbook: /first-week-quit-smoking.",
          ]}
        />
      </section>

      <section id="stack" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Stack these supports</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>Fixed quit date + /prepare-to-quit-smoking checklist.</li>
          <li>Daily craving logging (app) + /guides/cravings tactics.</li>
          <li>Stress plan: /stress-smoking-quit-plan.</li>
        </ol>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Without NRT, a fast response to each craving matters even more.
        Blou&apos;s SOS button is there the second one hits, and your timeline
        shows every smoke-free day you&apos;ve already put behind you.
      </InlineAppCta>

      <section id="reconsider" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">When to reconsider NRT</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If withdrawal dominates life or lapses repeat, read{" "}
          <Link className="font-medium text-teal-800 underline" href="/nicotine-patch-vs-gum">
            patch vs gum
          </Link>{" "}
          and{" "}
          <Link className="font-medium text-teal-800 underline" href="/nrt-and-quit-smoking-app">
            NRT + app
          </Link>{" "}
          with a pharmacist—switching paths is data, not failure.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
          Withdrawal timeline →
        </ButtonLink>
      </div>
    </div>
  );
}
