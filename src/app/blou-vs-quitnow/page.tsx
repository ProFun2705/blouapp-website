import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_blou-vs-quitnow";

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
      "It depends on what keeps you on track. If you quit best by seeing your own progress (a photo timeline, lung checks, every milestone on one visual timeline) with SOS craving help, Blou fits on iPhone; it is a subscription with a free trial. If you quit best with peer accountability and forums, QuitNow can be the better choice.",
  },
  {
    question: "Which app is better for community support?",
    answer:
      "QuitNow is generally more community-forward, with social features that motivate some people to stay quit.",
  },
  {
    question: "Which app is better for tracking money saved?",
    answer:
      "Blou focuses on your body's recovery rather than money. Whichever app you use, the /tools/money-saved calculator on this site is free, and the key is using the number to reward yourself weekly.",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Blou vs QuitNow", path: "/blou-vs-quitnow" }]} />

      <ArticleHeader
        kicker="Comparison"
        title="Blou vs QuitNow"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
            Best quit apps (2026) →
          </ButtonLink>
        }
      >
        <p>
          We make Blou, so we’re not neutral. This comparison is meant to help
          you choose the style of support you’ll actually use: visual tracking
          vs community accountability.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "choose-blou", label: "Choose Blou if…" },
          { id: "choose-quitnow", label: "Choose QuitNow if…" },
          { id: "how-to-decide", label: "How to decide in 2 minutes" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Choose Blou if you are on iPhone and want to see your own recovery (photo timeline, lung checks) with SOS craving help, on a subscription with a free trial. Choose QuitNow if peer community and accountability is your main driver—and you’ll actually post or read daily."
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
            <span>You want SOS craving help the second a craving hits.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You’re motivated by seeing your recovery: a photo timeline, lung
              checks, and every milestone on one visual timeline (pair it with
              our{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/money-saved"
              >
                money saved
              </Link>{" "}
              calculator).
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              You’re fine with a subscription once the free trial ends; nothing
              in Blou works without one.
            </span>
          </li>
        </ul>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        If that sounds like you, Blou for iPhone gives you a photo timeline, lung
        checks, SOS craving help, and every milestone on one visual timeline.
      </InlineAppCta>

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

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/i-smoked-one-cigarette" variant="secondary">
          If you slipped: first-hour plan →
        </ButtonLink>
      </div>
    </div>
  );
}

