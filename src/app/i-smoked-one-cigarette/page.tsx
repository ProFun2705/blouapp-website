import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { buildArticleJsonLd, buildHowToJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-04-24";
const MODIFIED = "2026-04-24";

export const metadata: Metadata = buildMetadata({
  title: "I smoked one cigarette—what to do next",
  description:
    "A slip is not the same as starting over. Here is what to do in the first hour, how to avoid an all-or-nothing spiral, and when to get extra help.",
  path: "/i-smoked-one-cigarette",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "I smoked one cigarette",
    "smoked one cigarette after quitting",
    "quit smoking slip",
    "smoking relapse one cigarette",
  ],
});

const firstHourSteps = [
  {
    name: "1. Get rid of the rest",
    text: "If you have more cigarettes, matches, or a vape, move them out of reach or dispose of them now—not “after this pack.” A slip is easier to contain when the next puff is not on your person.",
  },
  {
    name: "2. Name what happened, without a verdict",
    text: "Say one sentence: which cue was it (stress, alcohol, a friend, habit location)? You are not collecting evidence to shame yourself; you are updating your quit plan.",
  },
  {
    name: "3. Do one small recovery action in the next 10 minutes",
    text: "Drink water, take a short walk, text your accountability person, or use NRT or stress relief the way you already planned. Motion breaks the “I already blew it” story.",
  },
  {
    name: "4. Re-commit to the rest of the day as smoke-free",
    text: "You do not need a new “quit date” to choose not to smoke for the next few hours. Many people who stay quit long-term had at least one slip; what matters is the next day, not a perfect scoreboard.",
  },
] as const;

const faqItems = [
  {
    question: "Does one cigarette put nicotine back in my system like day one?",
    answer:
      "A single slip does not usually reset the brain the same way as years of daily smoking, but you may feel cravings again for a while. That is temporary, not a sign you are “back to square one.”",
  },
  {
    question: "Should I reset my quit counter to zero?",
    answer:
      "Apps differ. The useful approach is to track the slip honestly but keep your smoke-free time visible if it helps motivation—then focus on the next 24 hours, not a binary score. What matters is learning from the slip, not winning a perfect streak on paper.",
  },
  {
    question: "When is a slip a real relapse that needs a new plan?",
    answer:
      "If smoking becomes daily again for a week, or you feel unable to stop after multiple slips, treat it as time to re-engage support: a clinician, quitline, or structured program—and revisit medication or NRT dosing with a professional. See your full plan at /how-to-quit-smoking.",
  },
  {
    question: "I feel like I’ve failed. What should I tell myself?",
    answer:
      "A slip is a behavior on one day, not a verdict on your character. The evidence-based move is: learn the cue, adjust the plan, and get help with shame that keeps you hidden. Isolation after a slip predicts more smoking; connection predicts recovery.",
  },
] as const;

export default function ISmokedOneCigarettePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "I smoked one cigarette—what to do next",
    description:
      "Practical steps after a single cigarette while quitting, without an all-or-nothing spiral.",
    path: "/i-smoked-one-cigarette",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  const howToJsonLd = buildHowToJsonLd({
    name: "What to do in the first hour after smoking one cigarette while quitting",
    description:
      "Short steps to contain a slip and return to a smoke-free plan without a full relapse.",
    path: "/i-smoked-one-cigarette",
    steps: firstHourSteps.map((s) => ({ name: s.name, text: s.text })),
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="slip-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="slip-howto-json-ld" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "I smoked one cigarette", path: "/i-smoked-one-cigarette" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Relapse &amp; maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          I smoked one cigarette—what to do next
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          A single slip is common. The goal is to interrupt the all-or-nothing
          story, contain the day, and update your plan—not to prove you are
          perfect.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <AppStoreBadgeLink
            campaign="article_intro"
            placement="article_intro"
          />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Revisit the full quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "slip-vs-relapse", label: "Slip vs. relapse" },
          { id: "first-hour", label: "What to do in the first hour" },
          { id: "shame-spiral", label: "Shame, guilt, and the next day" },
          { id: "extra-help", label: "When to get extra help" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "related-guides", label: "Related reading" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="One cigarette after a period of not smoking is a slip, not a reason to throw away your quit. Remove remaining cigarettes, name the cue, take one 10-minute recovery action, and treat the rest of the day as smoke-free."
          facts={[
            "Many long-term ex-smokers report at least one slip; sustained quit often comes after learning from it.",
            "All-or-nothing thinking (“I blew it, so I might as well smoke”) predicts continued smoking more than the slip itself.",
            "Strong social support and medication adherence after a slip improve outcomes compared to willpower alone.",
          ]}
        />
      </section>

      <section
        id="slip-vs-relapse"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Slip vs. relapse
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          In quit research, a <strong>slip</strong> is often one or a few
          smoking episodes you interrupt before daily smoking restarts. A{" "}
          <strong>relapse</strong> is when smoking becomes regular again for a
          period—often a week or more. The boundary is not about shame; it is
          about whether you need a bigger reset of support, medication, and
          environment. This page focuses on a single or rare slip. If you are
          back to daily smoking, use{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/how-to-quit-smoking"
          >
            the full quit plan
          </Link>{" "}
          and consider professional or quitline help.
        </p>
      </section>

      <section
        id="first-hour"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What to do in the first hour
        </h2>
        <ol className="mt-4 space-y-4 text-sm leading-7 text-teal-900/90">
          {firstHourSteps.map((step) => (
            <li key={step.name}>
              <p className="font-semibold text-teal-950">{step.name}</p>
              <p className="mt-1">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="shame-spiral"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Shame, guilt, and the next day
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          It is normal to feel disappointed. What usually hurts recovery is
          not the slip but hiding it. If you can, tell one person (or your app
          community) the truth: “I had one, I am back on plan.”
          Self-compassion in smoking cessation is associated with more adaptive
          coping, not with being “soft.”
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Tonight, do not negotiate with “I will quit again Monday.” The
          research-backed move is: sleep, then execute your first two hours
          of quit day the way you did before—this time with one new note on
          your top cue. See the{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/guides/cravings"
          >
            cravings guide
          </Link>{" "}
          for urge-surfing and replacement behaviors.
        </p>
      </section>

      <section
        id="extra-help"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          When to get extra help
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>Slips are clustering (several in a week) and feel out of your control.</li>
          <li>You are using smoking to manage depression, anxiety, or trauma symptoms.</li>
          <li>You are pregnant, nursing, or have heart or lung disease and smoked again.</li>
          <li>
            Alcohol is often in the room when you slip—see{" "}
            <Link
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              href="/alcohol-and-quitting-smoking"
            >
              alcohol and quitting smoking
            </Link>{" "}
            or ask your clinician for a plan.
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          In the U.S., <strong>1-800-QUIT-NOW</strong> connects to free
          coaching; in the U.K. call <strong>0300 123 1044</strong>. A doctor
          can adjust NRT, varenicline, or bupropion if you are eligible.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-one-cigarette" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            "how-to-quit-smoking",
            "alcohol-and-quitting-smoking",
            "how-to-stop-a-relapse",
            "cravings",
            "what-happens-after-1-day",
          ]}
        />
      </section>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/i-smoked-one-cigarette</code>
      </p>
    </div>
  );
}
