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
  title: "Living with a smoker while quitting: boundaries that work",
  description:
    "If someone at home still smokes, you need air rules, emotional boundaries, and a craving plan that does not depend on their behavior.",
  path: "/living-with-a-smoker-while-quitting",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "living with a smoker quit smoking",
    "quit smoking partner smokes",
    "household smoking quit",
    "secondhand smoke quitting",
  ],
});

const faqItems = [
  {
    question: "Can I quit if my partner will not?",
    answer:
      "Yes, but your plan must assume cues will remain. Outdoor-only smoking rules, air filtration where appropriate, and agreed storage can reduce trigger load—negotiate calmly, not mid-craving.",
  },
  {
    question: "Is secondhand smoke dangerous if I already quit?",
    answer:
      "Secondhand smoke still harms health. Public-health guidance is to make indoor spaces smoke-free. For medical specifics, see CDC/WHO resources.",
  },
  {
    question: "What if they mock my quit attempt?",
    answer:
      "Reduce debate moments; lean on external support (quitline, friend, app community elsewhere). Your quit does not require their endorsement.",
  },
  {
    question: "How can Blou help?",
    answer:
      "Private tracking and craving drills give you a neutral “third place” when home feels high-friction.",
  },
];

export default function LivingWithASmokerWhileQuittingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Living with a smoker while quitting: boundaries that work",
    description:
      "How to quit smoking when someone you live with still smokes.",
    path: "/living-with-a-smoker-while-quitting",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="live-with-smoker-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Living with a smoker while quitting",
            path: "/living-with-a-smoker-while-quitting",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Household triggers
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Living with a smoker while quitting
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Your quit is still yours. The goal is to shrink sensory reminders you
          control and build a craving protocol that works even when someone else
          lights up on the porch.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="pillar_live_with_smoker" placement="article_intro" />
          <Link href="/how-to-help-someone-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
            If you are the supporter →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "boundaries", label: "House rules" },
          { id: "escape", label: "Escape hatches" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Negotiate smoke-free indoor air, agreed outdoor smoking spots, and no ashtrays in shared spaces. Pair environmental changes with a personal craving loop you can run without arguing—timer, walk, quitline, app."
          facts={[
            "If negotiation fails, prioritize leaving the room over debating mid-urge.",
            "See /trying-to-quit-smoking-again if this context broke a past attempt.",
          ]}
        />
      </section>

      <section id="boundaries" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">House rules</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Write three rules you both can live with. Revisit after week one when
          withdrawal noise drops. Link out:{" "}
          <Link className="font-medium text-teal-800 underline" href="/social-smoking">
            social smoking
          </Link>{" "}
          if weekends are the friction.
        </p>
      </section>

      <section id="escape" className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Escape hatches</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Pre-pick a nearby walk loop, a friend to text, and a “I’m stepping out
          for 5” script that is socially acceptable. Combine with{" "}
          <Link className="font-medium text-teal-800 underline" href="/stress-smoking-quit-plan">
            stress plan
          </Link>
          .
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-live-with-smoker" />
      </section>

      <div className="flex flex-wrap gap-3">
        <AppStoreBadgeLink campaign="pillar_live_with_smoker" placement="article_footer_card" />
        <Link href="/prepare-to-quit-smoking" className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50">
          Prep checklist →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/living-with-a-smoker-while-quitting</code>
      </p>
    </div>
  );
}
