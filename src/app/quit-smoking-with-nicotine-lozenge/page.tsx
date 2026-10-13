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
const CAMPAIGN = "article_quit-smoking-with-nicotine-lozenge";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking with nicotine lozenges: simple plan",
  description:
    "How to use nicotine lozenges to quit smoking: fast craving relief, pairing with patches, and how a quit app keeps dosing and slips visible.",
  path: "/quit-smoking-with-nicotine-lozenge",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "nicotine lozenge quit smoking",
    "quit smoking with lozenge",
    "nicotine lozenge cravings",
    "combination NRT lozenge",
  ],
});

const faqItems = [
  {
    question: "Are lozenges as effective as gum?",
    answer:
      "Both are fast-acting NRT forms. Some people prefer lozenges for discretion; others dislike the mouth feel. Choice is personal—ask a pharmacist if you are unsure.",
  },
  {
    question: "Can I use lozenges with the patch?",
    answer:
      "Combination NRT (patch + fast acting) is a common strategy with strong evidence, but dosing must be individualized. Confirm with a clinician or pharmacist.",
  },
  {
    question: "What if I get heartburn from lozenges?",
    answer:
      "Try a different formulation or timing, and discuss with a clinician or pharmacist—especially if you have reflux disease.",
  },
  {
    question: "How does an app help?",
    answer:
      "It logs breakthrough cravings so you can see patterns and practice a timer-based response between lozenge uses.",
  },
];

export default function QuitSmokingWithNicotineLozengePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking with nicotine lozenges: simple plan",
    description:
      "Practical guidance for quitting with nicotine lozenges plus tracking.",
    path: "/quit-smoking-with-nicotine-lozenge",
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
          {
            name: "Quit smoking with nicotine lozenge",
            path: "/quit-smoking-with-nicotine-lozenge",
          },
        ]}
      />

      <ArticleHeader
        kicker="NRT support"
        title="Quit smoking with nicotine lozenges"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/nrt-and-quit-smoking-app" variant="secondary">
            NRT + app →
          </ButtonLink>
        }
      >
        <p>
          Lozenges are fast-acting NRT: useful for cue cravings and for
          combination plans with a patch. Follow the product label and your
          clinician’s advice—this page focuses on behavior and tracking.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "when-to-use", label: "When lozenges help" },
          { id: "behavior", label: "Behavior loop" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use nicotine lozenges as fast-acting NRT for breakthrough cravings, ideally within a structured plan that includes cue replacements and—when appropriate—combination NRT with a patch. Track cravings so you adjust behavior, not just dose."
          facts={[
            "Do not exceed label limits; ask a pharmacist if unsure.",
            "Protect early quit days from alcohol—see /alcohol-and-quitting-smoking.",
            "Pair with /prepare-to-quit-smoking for environment changes.",
          ]}
        />
      </section>

      <section
        id="when-to-use"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">When lozenges help</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Lozenges shine when you need portable, discreet relief. Compare with{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/quit-smoking-with-nicotine-gum"
          >
            gum
          </Link>{" "}
          and{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/quit-smoking-with-nicotine-patch"
          >
            patch
          </Link>{" "}
          pages for the full NRT picture.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Lozenges cover the fast moments. Blou&apos;s SOS button is there the
        second a craving hits, and your timeline shows every smoke-free day
        you&apos;ve already put behind you.
      </InlineAppCta>

      <section
        id="behavior"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Behavior loop</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>Cue fires → start timer → use label-appropriate NRT if in plan.</li>
          <li>Still urge-heavy → do a 2-minute replacement walk or water.</li>
          <li>
            Log the cue in your app nightly. Use{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/cravings"
            >
              cravings guide
            </Link>{" "}
            for ideas.
          </li>
        </ol>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Full quit plan →
        </ButtonLink>
      </div>
    </div>
  );
}
