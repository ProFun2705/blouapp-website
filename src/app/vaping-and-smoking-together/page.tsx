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
  title: "Vaping and smoking together: how to quit dual use",
  description:
    "If you vape and still smoke cigarettes, you are in “dual use.” Here is a simple way to pick one quit path, reduce risk, and use tracking so progress sticks.",
  path: "/vaping-and-smoking-together",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "vape and smoke",
    "dual use vaping smoking",
    "quit vaping and smoking",
    "smoke sometimes vape",
  ],
});

const faqItems = [
  {
    question: "Is dual use less harmful than smoking only?",
    answer:
      "Switching fully away from combustible cigarettes is the biggest health win. Long-term dual use is still risky because you keep inhaling smoke toxins. The practical goal is usually to end cigarette smoking first, then taper nicotine with a clinician if needed.",
  },
  {
    question: "Should I quit cigarettes or the vape first?",
    answer:
      "Many clinicians prioritize ending combustible smoking first because smoke drives the largest disease risk. Your situation may differ—especially in pregnancy—so ask a clinician for personalized guidance.",
  },
  {
    question: "Why is dual use hard mentally?",
    answer:
      "You keep two cue systems alive (lighter/smoke breaks and vape hand-to-mouth). Tracking both and shrinking one channel at a time reduces decision fatigue.",
  },
  {
    question: "Can an app help?",
    answer:
      "Yes. A tracker makes “one fewer cigarette today” visible and gives you a fast craving loop when either habit fires.",
  },
];

export default function VapingAndSmokingTogetherPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Vaping and smoking together: how to quit dual use",
    description:
      "How to approach quitting when you both vape and smoke cigarettes.",
    path: "/vaping-and-smoking-together",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="dual-use-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Vaping and smoking together",
            path: "/vaping-and-smoking-together",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Dual use
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Vaping and smoking together
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          “Dual use” means you still smoke cigarettes while also vaping. It is
          common, and it is not a moral failure—it is a cue problem. The fix is
          a clearer plan: shrink one channel, track slips, and get medical
          support when you need it.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink
            campaign="pillar_dual_use"
            placement="article_intro"
          />
          <Link
            href="/quit-vaping"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Quit vaping plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "pick-path", label: "Pick one primary path" },
          { id: "tracking", label: "Track both for one week" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Dual use is easiest to unwind when you pick one primary quit pathway (often: end cigarettes first because combustible smoke drives the largest risk), track both behaviors for a week so you see real patterns, and use a fast craving tool when either cue fires."
          facts={[
            "Progress beats purity—small reductions in cigarettes still matter while you stabilize.",
            "Alcohol nights often break dual-use plans; plan those separately.",
            "A clinician can help you combine behavioral tools with NRT or medication if appropriate.",
          ]}
        />
      </section>

      <section
        id="pick-path"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Pick one primary path
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Use{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/how-to-quit-smoking"
          >
            the step-by-step quit plan
          </Link>{" "}
          as your backbone. If you slip on cigarettes, read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/i-smoked-one-cigarette"
          >
            I smoked one cigarette
          </Link>{" "}
          the same day—do not let dual use become “invisible” again.
        </p>
      </section>

      <section
        id="tracking"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Track both for one week
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Log time, cue, and which product you used. You are hunting for the
          top three triggers so you can pre-decide replacements—same method as{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/quit-smoking-tracker"
          >
            quit smoking tracker
          </Link>{" "}
          pages describe for cigarette-only quitters.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-dual-use" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_dual_use"
          placement="article_footer_card"
        />
        <Link
          href="/nrt-and-quit-smoking-app"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          NRT + app →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/vaping-and-smoking-together</code>
      </p>
    </div>
  );
}
