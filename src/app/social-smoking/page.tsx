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
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-04-27";
const MODIFIED = "2026-04-27";

export const metadata: Metadata = buildMetadata({
  title: "Social smoking: am I addicted if I only smoke sometimes?",
  description:
    "“Only on weekends” still exposes you to nicotine and smoking diseases. Learn how social patterns become dependence, what to track, and how to quit without a pack-a-day label.",
  path: "/social-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "social smoking",
    "I only smoke socially am I addicted",
    "weekend smoker",
    "occasional smoking risks",
  ],
});

const faqItems = [
  {
    question: "If I only smoke when I drink, am I addicted?",
    answer:
      "You can have a conditioned pattern (drinking predicts smoking) before you fit a textbook daily dependence. Occasional smoking still damages blood vessels and lungs and carries cancer risk—not zero risk because the frequency is lower.",
  },
  {
    question: "Is social smoking less harmful than daily smoking?",
    answer:
      "Less exposure is generally lower risk than more exposure, but there is no safe threshold for cardiovascular and cancer effects that public health messaging treats as harmless. The dose-response relationship favors fewer cigarettes, not “safe weekends.”",
  },
  {
    question: "Why can’t I stop after parties if I’m not a ‘real’ smoker?",
    answer:
      "Nicotine still rewards the brain on the nights you use it. Alcohol lowers inhibition, and social settings normalize the cue. That combination can feel like “only fun,” while your brain quietly learns the habit loop.",
  },
  {
    question: "Should I use NRT if I smoke five cigarettes a week?",
    answer:
      "Some intermittent smokers do use short-acting NRT around high-risk nights; others focus on behavioral plans first. A clinician can help you choose—especially if you also have heart rhythm issues or are pregnant.",
  },
] as const;

export default function SocialSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Social smoking: am I addicted if I only smoke sometimes?",
    description:
      "Risks and patterns of intermittent smoking, cue conditioning, and evidence-based quit paths without waiting for a pack-a-day label.",
    path: "/social-smoking",
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

  return (
    <div className="flex flex-col gap-10">
      <Script id="social-smoking-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "Social smoking", path: "/social-smoking" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Relapse &amp; maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Social smoking: am I addicted?
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          “Only with friends” is still smoking. The question is not whether you
          earn a label—it is whether nicotine and smoke are training your brain
          on a schedule you like but your lungs do not.
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
            Build a quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          {
            id: "is-social-smoking-addiction",
            label: "Is social smoking still addiction?",
          },
          {
            id: "health-risks-occasional",
            label: "What are the health risks of occasional smoking?",
          },
          {
            id: "patterns-that-predict-escalation",
            label: "Which patterns predict escalation from social to daily?",
          },
          {
            id: "how-to-quit-without-label",
            label: "How do you quit if you never bought a pack?",
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
          answer="Social smoking—only at parties, with alcohol, or on weekends—can still produce nicotine dependence and carries real cardiovascular and cancer risk, just on a different dose curve than a pack-a-day habit. If you cannot reliably say no once the cue stack appears, treat it as tobacco use disorder in practical terms: plan cues, consider medications with a clinician, and track slips honestly."
          facts={[
            "Tobacco smoke contains carcinogens even in intermittent exposure; risk scales with cumulative lifetime exposure.",
            "Nicotine reinforces behavior through reward learning whether the schedule is daily or weekly.",
            "Alcohol is one of the strongest triggers for social smoking slips when someone tries to quit.",
          ]}
        />
      </section>

      <section
        id="is-social-smoking-addiction"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Is social smoking still addiction?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Clinicians diagnose tobacco use disorder along severity bands—not only
          “two packs a day.” If you crave cigarettes on Friday afternoon before
          you even see friends, or feel irritable on the weekends you skip
          smoking, your brain is already negotiating with nicotine on a clock.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.who.int/news-room/fact-sheets/detail/tobacco"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHO tobacco fact sheet
          </a>{" "}
          describes nicotine as a major addictive component of tobacco products.
          That mechanism does not pause because your pattern is social instead of
          morning-break driven.
        </p>
      </section>

      <section
        id="health-risks-occasional"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What are the health risks of occasional smoking?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Public health summaries emphasize that quitting entirely yields the
          largest benefit. The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.cdc.gov/tobacco/about/benefits-of-quitting.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC benefits of quitting page
          </a>{" "}
          frames cessation as the primary win; it does not endorse “light”
          smoking as a stable endpoint. For heart attack risk, even low-rate
          smoking moves biomarkers and vessel function compared with not smoking.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If you tell yourself “at least I’m not like…” you may delay quitting
          until numbers worsen. A cleaner frame: compare future you to smoke-free
          weeks, not to a heavier smoker.
        </p>
      </section>

      <section
        id="patterns-that-predict-escalation"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Which patterns predict escalation from social to daily?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Watch for creeping frequency: two nights a month becomes every weekend,
          then “just one with coffee.” Watch for borrowing cigarettes instead of
          buying—financial denial often tracks with dependence denial. Watch for
          smoking alone after you swore you only smoke socially.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If alcohol is always in the story, read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/alcohol-and-quitting-smoking"
          >
            alcohol and quitting smoking
          </Link>{" "}
          before your next high-risk weekend so you are not improvising at 11
          p.m. If you already slipped, pair this page with{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href={`/${RELATED_PILLAR_SLUGS.iSmokedOneCigarette}`}
          >
            the one-cigarette recovery guide
          </Link>{" "}
          or{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href={`/${RELATED_PILLAR_SLUGS.howToStopARelapse}`}
          >
            full relapse recovery
          </Link>
          .
        </p>
      </section>

      <section
        id="how-to-quit-without-label"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How do you quit if you never bought a pack?
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Name your real triggers: certain friends, venues, or “permission
          nights.” Pre-decide alcohol limits or alcohol-free weeks while you
          break the pairing. Tell your crew you are not smoking tonight—specific
          beats vague. If you fear awkwardness, practice a one-sentence boundary
          while sober.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.nhs.uk/better-health/quit-smoking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NHS quit smoking hub
          </a>{" "}
          offers practical behavioral tips that apply even when your smoking diary
          looks sparse on paper. Combine those with Blou’s tracking if seeing
          patterns across weekends helps you believe the problem is real enough
          to invest in.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The{" "}
          <a
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020 Surgeon General report on cessation
          </a>{" "}
          supports combining counseling with medications for many people trying
          to quit—including those who do not identify as “heavy” smokers but
          struggle with lapses.
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
            You want to quit social smoking before pregnancy or surgery and need
            a medication plan timed to those events.
          </li>
          <li>
            You have chest pain, persistent cough, or shortness of breath even
            with “occasional” use—do not self-explain symptoms away.
          </li>
          <li>
            You also vape or use nicotine pouches—poly-use complicates dependence
            and deserves clinician guidance.
          </li>
        </ul>
      </section>

      <section id="stay-on-track" className="scroll-mt-24">
        <StayOnTrackCard
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-social-smoking" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking,
            RELATED_PILLAR_SLUGS.iSmokedOneCigarette,
            "how-to-quit-smoking",
            "cravings",
            RELATED_PILLAR_SLUGS.howToStopARelapse,
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
          href="/best-quit-smoking-apps"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Compare quit apps
        </Link>
        <AppStoreBadgeLink
          campaign="article_footer_card"
          placement="article_footer_card"
        />
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/social-smoking</code>
      </p>
    </div>
  );
}
