import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Byline } from "@/components/marketing/Byline";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { StayOnTrackCard } from "@/components/marketing/StayOnTrackCard";
import { TableOfContents } from "@/components/site/TableOfContents";
import { PILLAR_ARTICLE_REFERENCES } from "@/lib/pillarArticleReferences";
import { RELATED_PILLAR_SLUGS } from "@/lib/relatedPillarSlugs";
import {
  buildArticleJsonLd,
  buildHowToJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-04-27";
const MODIFIED = "2026-04-27";

export const metadata: Metadata = buildMetadata({
  title: "How to stop a relapse and recover your quit",
  description:
    "Smoking again after a quit doesn’t erase your progress forever. Re-set your plan with medication, support, cue changes, and shame-free accountability.",
  path: "/how-to-stop-a-relapse",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking relapse recovery",
    "how to stop smoking again after quitting",
    "smoking relapse what to do",
    "get back on track after smoking",
  ],
});

const recoverySteps = [
  {
    name: "1. Name the pattern in one sentence",
    text: "How many days in a row, which cues (stress, alcohol, work breaks), and whether cigarettes are back in the house. Facts first—verdicts later.",
  },
  {
    name: "2. Re-engage medical support within 48 hours",
    text: "Call your clinician or a quitline, restart or adjust NRT or prescription cessation meds as appropriate, and ask about dose if you are a heavier smoker returning after abstinence.",
  },
  {
    name: "3. Change the environment before the next urge",
    text: "Dispose of remaining packs, wash smoky jackets, change the route past the shop where you buy cigarettes, and temporarily avoid the highest-risk social settings.",
  },
  {
    name: "4. Re-pick a quit date you can defend",
    text: "Within 7 days is usually better than “next month.” Pair the date with one accountability text and one replacement behavior for your top cue.",
  },
  {
    name: "5. Treat shame as a risk factor",
    text: "Isolation after relapse predicts more smoking; connection predicts recovery. Tell one person the truth and schedule a follow-up check-in.",
  },
] as const;

const faqItems = [
  {
    question: "If I relapsed, do I have to wait until Monday to quit again?",
    answer:
      "No. Delaying re-quit often turns a short slip into weeks of daily smoking. Pick the soonest realistic fresh start—often tomorrow morning with medication lined up—rather than a symbolic calendar holiday.",
  },
  {
    question: "Should I use stronger nicotine patches after a relapse?",
    answer:
      "Dose depends on how much you are smoking now and your health profile. A clinician or pharmacist can help you choose patch strength and whether to add fast-acting NRT—do not stack products beyond labeled guidance without advice.",
  },
  {
    question: "Is it harder to quit the second time?",
    answer:
      "Not always psychologically, but cues may feel sharper because you “proved” you can smoke again. That makes planning and medication adherence more important, not less.",
  },
  {
    question: "When is a relapse actually depression or anxiety driving smoking?",
    answer:
      "If mood symptoms dominate, or smoking returns alongside hopelessness, panic, or drinking spikes, ask for mental health evaluation. Treating mood and substance together improves both.",
  },
] as const;

export default function HowToStopARelapsePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to stop a relapse and recover your quit",
    description:
      "Structured recovery after smoking returns: medical support, environment, and behavioral re-commitment.",
    path: "/how-to-stop-a-relapse",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: PILLAR_ARTICLE_REFERENCES.map((r) => ({
      name: r.label,
      url: r.href,
      publisher: r.publisher,
    })),
  });

  const howToJsonLd = buildHowToJsonLd({
    name: "How to recover your quit after a smoking relapse",
    description:
      "Five-step relapse recovery path combining medical re-engagement, environment change, and accountability.",
    path: "/how-to-stop-a-relapse",
    steps: recoverySteps.map((s) => ({ name: s.name, text: s.text })),
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="relapse-recovery-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="relapse-recovery-howto-json-ld" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "How to stop a relapse", path: "/how-to-stop-a-relapse" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Relapse &amp; maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to stop a relapse and recover your quit
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          A relapse is information, not a tattoo. The fastest recoveries pair
          honesty with structure: medical tools, environmental edits, and
          relationships that pull you back instead of hiding you.
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
            Re-open the quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          {
            id: "slip-vs-full-relapse",
            label: "What is the difference between a slip and a full relapse?",
          },
          {
            id: "recovery-steps",
            label: "What steps stop a relapse fastest?",
          },
          {
            id: "medications-after-relapse",
            label: "Should you restart medications after a relapse?",
          },
          {
            id: "when-to-seek-medical-care",
            label: "When should you seek medical care?",
          },
          { id: "stay-on-track", label: "Stay on track" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "related-guides", label: "Related reading" },
          { id: "sources", label: "Sources & further reading" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="To stop a relapse, treat renewed daily smoking like a medical episode: re-engage your clinician or quitline, restart evidence-based medication or NRT as directed, remove cigarettes from your environment, and set a new quit date within the week with one accountability partner. Shame and delay usually extend the relapse more than nicotine itself."
          facts={[
            "Most quit attempts need multiple tries; long-term abstinence often follows cycles of quit, slip, and renewed planning.",
            "Combining behavioral support with cessation medication improves outcomes compared with unsupported quitting.",
            "Environmental access to cigarettes is one of the strongest predictors of continued smoking after a slip.",
          ]}
        />
      </section>

      <section
        id="slip-vs-full-relapse"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What is the difference between a slip and a full relapse?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          A <strong>slip</strong> is often one or a few cigarettes before you
          interrupt the chain. A <strong>relapse</strong> is when daily smoking
          returns for a stretch—days to weeks—and cues re-tighten around nicotine
          again. This page focuses on full relapse recovery; for a single
          cigarette, start with{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href={`/${RELATED_PILLAR_SLUGS.iSmokedOneCigarette}`}
          >
            I smoked one cigarette—what to do next
          </Link>
          .
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The distinction matters because the intervention depth differs. Slips
          need fast behavioral containment; relapses usually need medication
          review plus bigger environmental changes—not only “try harder.”
        </p>
      </section>

      <section
        id="recovery-steps"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What steps stop a relapse fastest?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Speed beats pride. The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Surgeon General’s 2020 cessation report
          </a>{" "}
          documents that professional support and FDA-approved medications raise
          quit success rates across populations—exactly the stack you want after
          a relapse, not a lonelier version of the attempt that just failed.
        </p>
        <ol className="mt-4 space-y-4 text-sm leading-7 text-teal-900/90">
          {recoverySteps.map((step) => (
            <li key={step.name}>
              <p className="font-semibold text-teal-950">{step.name}</p>
              <p className="mt-1">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="medications-after-relapse"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Should you restart medications after a relapse?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          In most cases, yes—if they were safe for you before and you stopped
          them only because you “failed.” Nicotine patches, gum, lozenges,
          varenicline, and bupropion each have eligibility nuances. The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.cdc.gov/tobacco/about/benefits-of-quitting.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC quit benefits page
          </a>{" "}
          is a reminder that every day off cigarettes buys health; medications
          are tools to compress the time you spend climbing back out.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If alcohol moved from occasional to heavy during your relapse, tell
          your prescriber before restarting certain drugs. See{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/alcohol-and-quitting-smoking"
          >
            alcohol and quitting smoking
          </Link>{" "}
          for cue planning alongside pharmacotherapy.
        </p>
      </section>

      <section
        id="when-to-seek-medical-care"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          When should you seek medical care?
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            You want to quit again but feel physically ill when you try to
            lower cigarettes—withdrawal can be medically managed.
          </li>
          <li>
            You have cardiovascular disease, are pregnant, or take psychiatric
            medications and need a tailored restart plan.
          </li>
          <li>
            Smoking returned together with depression, self-harm thoughts, or
            escalating substance use—ask for urgent coordinated care.
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Global burden data from the{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.who.int/news-room/fact-sheets/detail/tobacco"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO tobacco fact sheet
          </a>{" "}
          underscores why systems push quitlines and clinical pathways: tobacco
          dependence is a chronic, relapsing condition for many people, not a
          one-shot character test.
        </p>
      </section>

      <section id="stay-on-track" className="scroll-mt-24">
        <StayOnTrackCard
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-stop-relapse" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            RELATED_PILLAR_SLUGS.iSmokedOneCigarette,
            RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking,
            "how-to-quit-smoking",
            "prepare-to-quit-smoking",
            "cravings",
          ]}
        />
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Sources &amp; further reading
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {PILLAR_ARTICLE_REFERENCES.map((reference) => (
            <li key={reference.href}>
              <a
                className="underline decoration-teal-400 underline-offset-4"
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {reference.label}
              </a>{" "}
              <span className="text-teal-900/60">· {reference.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-teal-900/70">
          This guide is educational and does not replace medical advice. If you
          have pre-existing conditions or take prescription medication, talk to
          your clinician when making changes to your smoking.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/prepare-to-quit-smoking"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← Prep checklist
        </Link>
        <AppStoreBadgeLink
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/how-to-stop-a-relapse</code>
      </p>
    </div>
  );
}
