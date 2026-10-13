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

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-05-09";

export const metadata: Metadata = buildMetadata({
  title: "Blou vs QuitNow (2026): tracker vs community",
  description:
    "Blou vs QuitNow: an honest comparison. Choose Blou for simple visual progress on iPhone, or QuitNow if community support is what keeps you accountable.",
  path: "/blou-vs-quitnow",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "blou vs quitnow",
    "quitnow vs blou",
    "quit smoking app community",
    "quit smoking tracker app",
  ],
});

const faqItems = [
  {
    question: "Is Blou better than QuitNow?",
    answer:
      "It depends on what keeps you on track. If you quit best with simple visual progress and a fast craving tool, Blou is a strong fit on iPhone. If you quit best with peer accountability and forums, QuitNow can be the better choice.",
  },
  {
    question: "Which app is better for community support?",
    answer:
      "QuitNow is generally more community-forward, with social features that motivate some people to stay quit.",
  },
  {
    question: "Which app is better for tracking money saved?",
    answer:
      "Both can track savings, but the key is using the number to reward yourself weekly. You can also use the /tools/money-saved calculator regardless of app.",
  },
  {
    question: "What should I do if I slip?",
    answer:
      "Contain it quickly and return to plan. Use /i-smoked-one-cigarette for the first-hour playbook.",
  },
];

export default function BlouVsQuitNowPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Blou vs QuitNow (2026): tracker vs community",
    description:
      "An honest comparison of Blou and QuitNow for quitting smoking in 2026.",
    path: "/blou-vs-quitnow",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="blou-vs-qn-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs items={[{ name: "Blou vs QuitNow", path: "/blou-vs-quitnow" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Comparison
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Blou vs QuitNow
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          We make Blou, so we’re not neutral. This comparison is meant to help
          you choose the style of support you’ll actually use: visual tracking
          vs community accountability.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/best-quit-smoking-apps"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Best quit apps (2026) →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-quitnow", label: "Choose QuitNow if…" },
          { id: "how-to-decide", label: "How to decide in 2 minutes" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you want a clean iPhone tracker with fast craving support and simple visual progress. Choose QuitNow if peer community and accountability is your main driver—and you’ll actually post or read daily."
          facts={[
            "Cravings are short; the best support is the one you can use fast.",
            "Community works when you actually engage—not when it’s a guilt button.",
            "Pair either app with a concrete quit plan for best results.",
          ]}
        />
      </section>

      <section
        id="choose-blou"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Choose Blou if…</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You’re on iPhone and want a clean, lightweight tracker.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You want a fast craving tool you can use in seconds.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You’re motivated by money saved and milestones (see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                money saved
              </Link>
              ).
            </span>
          </li>
        </ul>
      </section>

      <section
        id="choose-quitnow"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Choose QuitNow if…
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You quit best with peer support (posting, reading, accountability).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You want cross-platform support (iOS + Android).</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>You’re motivated by social milestones and group progress.</span>
          </li>
        </ul>
      </section>

      <section
        id="how-to-decide"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How to decide in 2 minutes
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li>
            If you will actively use community daily, try QuitNow. If you won’t,
            choose a fast tracker.
          </li>
          <li>
            If your cravings are tied to cues (coffee, driving, stress), use a
            craving playbook like{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/guides/cravings"
            >
              cravings
            </Link>
            .
          </li>
          <li>
            Start with a real quit plan (see{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/how-to-quit-smoking"
            >
              how to quit smoking
            </Link>
            ).
          </li>
        </ol>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-blou-vs-quitnow" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/i-smoked-one-cigarette"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          If you slipped: first-hour plan →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/blou-vs-quitnow</code>
      </p>
    </div>
  );
}

