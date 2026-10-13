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
const CAMPAIGN = "article_nicotine-patch-vs-gum";

export const metadata: Metadata = buildMetadata({
  title: "Nicotine patch vs gum: which NRT to start with?",
  description:
    "Patch vs gum for quitting smoking: what each covers (baseline vs cue cravings), combination NRT basics, and how a quit app keeps both usable.",
  path: "/nicotine-patch-vs-gum",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine patch vs gum",
    "patch or gum to quit smoking",
    "NRT patch vs gum",
    "combination NRT patch gum",
  ],
});

const faqItems = [
  {
    question: "Can I use patch and gum together?",
    answer:
      "Combination NRT is a common, evidence-backed strategy for many smokers—but dosing and eligibility must be confirmed with a clinician or pharmacist.",
  },
  {
    question: "Is the patch better if I smoke a pack a day?",
    answer:
      "Higher dependence often benefits from baseline coverage (patch) plus fast-acting options for cues—but individualize with professional advice.",
  },
  {
    question: "What if gum irritates my jaw?",
    answer:
      "Try lozenges or discuss alternatives with a pharmacist. The goal is adherence, not suffering.",
  },
  {
    question: "Where does an app help?",
    answer:
      "Logging breakthrough cravings shows whether you need more behavioral support, faster-acting NRT discussion, or cue changes.",
  },
];

export default function NicotinePatchVsGumPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Nicotine patch vs gum: which NRT to start with?",
    description:
      "Comparison of nicotine patch and gum for smoking cessation support.",
    path: "/nicotine-patch-vs-gum",
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
        items={[{ name: "Nicotine patch vs gum", path: "/nicotine-patch-vs-gum" }]}
      />

      <ArticleHeader
        kicker="NRT choice"
        title="Nicotine patch vs gum"
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
          Simple frame: <strong>patch</strong> steadies background withdrawal;{" "}
          <strong>gum</strong> (or lozenge) fights cue spikes. Many successful plans
          use both—under guidance—not as a DIY contest.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "pick", label: "How to pick" },
          { id: "combo", label: "Combination NRT" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose a patch if you want once-daily baseline nicotine coverage and fewer dosing decisions. Choose gum (or lozenge) if your biggest problem is sudden cue cravings. Many people ultimately use patch + fast-acting NRT together—confirm with a clinician or pharmacist."
          facts={[
            "Read /combination-nrt-quit-smoking for the behavioral wrapper.",
            "Apps help you log spikes so adjustments are data-driven.",
            "Label directions still rule—this page is not dosing advice.",
          ]}
        />
      </section>

      <section id="pick" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">How to pick</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span className="mt-1 text-teal-600" aria-hidden>•</span>
            <span>
              Patch deep-dive:{" "}
              <Link className="font-medium text-teal-800 underline" href="/quit-smoking-with-nicotine-patch">
                quit smoking with nicotine patch
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 text-teal-600" aria-hidden>•</span>
            <span>
              Gum deep-dive:{" "}
              <Link className="font-medium text-teal-800 underline" href="/quit-smoking-with-nicotine-gum">
                quit smoking with nicotine gum
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 text-teal-600" aria-hidden>•</span>
            <span>
              Lozenge option:{" "}
              <Link className="font-medium text-teal-800 underline" href="/quit-smoking-with-nicotine-lozenge">
                nicotine lozenge plan
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Whichever NRT you start with, cue cravings still show up. Blou&apos;s SOS
        button is there the second one hits, alongside the plan you agree with
        your pharmacist or clinician.
      </InlineAppCta>

      <section id="combo" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Combination NRT</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If you are considering patch + gum together, start with{" "}
          <Link className="font-medium text-teal-800 underline" href="/combination-nrt-quit-smoking">
            combination NRT overview
          </Link>{" "}
          and{" "}
          <Link className="font-medium text-teal-800 underline" href="/nrt-and-quit-smoking-app">
            NRT + quit app
          </Link>
          .
        </p>
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
