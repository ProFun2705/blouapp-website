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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-05-13";

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
      <Script id="lozenge-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking with nicotine lozenge",
            path: "/quit-smoking-with-nicotine-lozenge",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          NRT support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking with nicotine lozenges
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Lozenges are fast-acting NRT: useful for cue cravings and for
          combination plans with a patch. Follow the product label and your
          clinician’s advice—this page focuses on behavior and tracking.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_lozenge" placement="article_intro" />
          <Link
            href="/nrt-and-quit-smoking-app"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            NRT + app →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "when-to-use", label: "When lozenges help" },
          { id: "behavior", label: "Behavior loop" },
          { id: "social-proof", label: "App Store reviews" },
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

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-nicotine-lozenge" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_lozenge"
          placement="article_footer_card"
        />
        <Link
          href="/how-to-quit-smoking"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Full quit plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-with-nicotine-lozenge</code>
      </p>
    </div>
  );
}
