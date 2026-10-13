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
  title: "Best quit smoking app for beginners: what to download first",
  description:
    "New to quit apps? Start with a tracker that does four jobs well: quit date, cravings, savings, slips—plus how Blou compares for iPhone beginners.",
  path: "/best-quit-smoking-app-for-beginners",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "best quit smoking app for beginners",
    "beginner quit smoking app",
    "simple quit smoking app",
    "first quit smoking app",
  ],
});

const faqItems = [
  {
    question: "What is the #1 beginner mistake?",
    answer:
      "Downloading three apps and using none. Pick one, delete the rest for 14 days, and commit to opening it during cravings.",
  },
  {
    question: "Should beginners use free apps?",
    answer:
      "Start free until you know your habits—see /free-quit-smoking-app for what free should include.",
  },
  {
    question: "Is Blou beginner-friendly?",
    answer:
      "Blou emphasizes visual progress and a fast craving loop on iPhone. If you need Android today, read /quit-smoking-app-android.",
  },
  {
    question: "Do I need premium features?",
    answer:
      "Not to start. Premium should add convenience—not lock basics like craving support behind short trials.",
  },
];

export default function BestQuitSmokingAppForBeginnersPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Best quit smoking app for beginners: what to download first",
    description:
      "Guide to choosing a quit smoking app for beginners, with comparison links.",
    path: "/best-quit-smoking-app-for-beginners",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="beginners-app-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Best quit smoking app for beginners",
            path: "/best-quit-smoking-app-for-beginners",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Beginner guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Best quit smoking app for beginners
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Beginners need clarity, not dashboards. Pick an app you can operate
          with one thumb in a parking lot—not one that needs a tutorial video.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_beginners_app" placement="article_intro" />
          <Link href="/best-quit-smoking-apps" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            Full comparison →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "checklist", label: "Beginner checklist" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="The best beginner quit app is the simplest one you will actually use during cravings: day counter, craving timer, money saved, and a slip path that does not shame you. On iPhone, Blou targets that minimal loop; cross-platform shoppers should read the full apps roundup."
          facts={[
            "Install /prepare-to-quit-smoking habits before hunting features.",
            "Beginners benefit from /first-week-quit-smoking structure.",
          ]}
        />
      </section>

      <section id="checklist" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Beginner checklist</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>One app only for 14 days.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>One quit date on calendar.</span></li>
          <li className="flex gap-2"><span className="mt-1 text-teal-600" aria-hidden>•</span><span>One person who gets a weekly text.</span></li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-beginners-app" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_beginners_app" placement="article_footer_card" />
        <Link href="/smoking-cessation-app" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Cessation app guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/best-quit-smoking-app-for-beginners</code>
      </p>
    </div>
  );
}
