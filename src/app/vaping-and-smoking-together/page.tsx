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

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_vaping-and-smoking-together";

export const metadata: Metadata = buildMetadata({
  title: "Vaping and smoking together: how to quit dual use",
  description:
    "If you vape and still smoke cigarettes, you are in “dual use.” A simple way to pick one quit path, reduce risk, and use tracking so progress sticks.",
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
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          {
            name: "Vaping and smoking together",
            path: "/vaping-and-smoking-together",
          },
        ]}
      />

      <ArticleHeader
        kicker="Dual use"
        title="Vaping and smoking together"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/quit-vaping" variant="secondary">
            Quit vaping plan →
          </ButtonLink>
        }
      >
        <p>
          “Dual use” means you still smoke cigarettes while also vaping. It is
          common, and it is not a moral failure—it is a cue problem. The fix is
          a clearer plan: shrink one channel, track slips, and get medical
          support when you need it.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "pick-path", label: "Pick one primary path" },
          { id: "tracking", label: "Track both for one week" },
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

      <InlineAppCta campaign={CAMPAIGN}>
        Whichever path you pick, Blou&apos;s SOS craving help is there when
        either habit fires, and its lung checks let you see your breathing
        change once the cigarettes stop.
      </InlineAppCta>

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
            href="/"
          >
            quit smoking tracker
          </Link>{" "}
          pages describe for cigarette-only quitters.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/nrt-and-quit-smoking-app" variant="secondary">
          NRT + app →
        </ButtonLink>
      </div>
    </div>
  );
}
