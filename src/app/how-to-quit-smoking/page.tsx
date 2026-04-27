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
import { SocialProof } from "@/components/marketing/SocialProof";
import {
  buildArticleJsonLd,
  buildHowToJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { RELAPSE_MAINTENANCE_LINKS } from "@/lib/roadmapLinks";
import { RELATED_PILLAR_SLUGS } from "@/lib/relatedPillarSlugs";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PUBLISHED = "2026-03-01";
const MODIFIED = "2026-04-20";

export const metadata: Metadata = buildMetadata({
  title: "How to quit smoking: step-by-step plan (2026)",
  description:
    "A complete, evidence-based plan for quitting smoking. Set your quit date, choose NRT or medication, handle cravings, and stay quit for the long term.",
  path: "/how-to-quit-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "how to quit smoking",
    "quit smoking plan",
    "steps to quit smoking",
    "best way to quit smoking",
  ],
});

const steps = [
  {
    name: "1. Pick a quit date in the next 7–14 days",
    text: "Close enough that you can't avoid it, far enough to line up support. Choose a Monday or the start of a calmer week if you can.",
  },
  {
    name: "2. Decide on one form of evidence-based support",
    text: "Combination NRT (patch + gum/lozenge), varenicline, or bupropion roughly double or triple your success rate versus willpower alone. A free quitline (1-800-QUIT-NOW in the US; 0300 123 1044 in England) adds behavioral support at no cost.",
  },
  {
    name: "3. Plan around your top three cues",
    text: "Write down the three situations you most associate with smoking (morning coffee, driving, after dinner). Pre-decide a 2-minute replacement for each before quit day.",
  },
  {
    name: "4. Use day 1 to practice cravings, not defeat them",
    text: "Most cravings last 3–5 minutes. Time the first few. Stand up, drink water, change location. You are not losing — you are learning the shape.",
  },
  {
    name: "5. Protect days 2–3 when withdrawal peaks",
    text: "Irritability, insomnia, and cravings are strongest around days 2–3. Reduce overlap with alcohol, keep blood sugar steady, and sleep more than usual.",
  },
  {
    name: "6. Rebuild routines weeks 1–2",
    text: "Replace the trigger loop, not just the cigarette. Walk after meals, brush teeth after coffee, put the phone in a different hand. Reward yourself weekly with savings from the money saved calculator.",
  },
  {
    name: "7. Plan for slips at the 1–3 month mark",
    text: "A slip is not a failure unless you let it become one. If you smoke, throw out the rest, note the trigger, and keep your quit date. Most successful quitters report 3–5 attempts before staying stopped.",
  },
] as const;

const faqItems = [
  {
    question: "What's the single best way to quit smoking?",
    answer:
      "The combination with the strongest evidence is varenicline (Chantix) plus behavioral support, followed by combination NRT (patch + gum/lozenge) plus behavioral support. Pick whichever one you can actually start on your quit date.",
  },
  {
    question: "How long does it take to quit smoking?",
    answer:
      "Physical nicotine withdrawal lasts 2–4 weeks. Routine and cue-based urges fade over 3–6 months. 'Quit' as a verb is a single day; 'quit' as an identity takes roughly a year.",
  },
  {
    question: "Should I quit cold turkey or taper?",
    answer:
      "Cold turkey (stopping completely on your quit date) has slightly better success rates than a gradual taper in most trials, especially when combined with NRT. If you feel strongly about tapering, an app with tracking and a hard date still works.",
  },
  {
    question: "Can I quit smoking without medication?",
    answer:
      "Yes — but success rates are significantly higher with medication or NRT. If you prefer not to use pharmacotherapy, add a free quitline, structured daily routine, and a tracker to compensate.",
  },
  {
    question: "What if I've failed quit attempts before?",
    answer:
      "Most successful quitters make 3–5 serious attempts before staying stopped. Each attempt teaches you something. Review which cue broke the last one and plan around it this time.",
  },
] as const;

export default function HowToQuitSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to quit smoking: step-by-step plan (2026)",
    description:
      "An evidence-based plan for quitting smoking — quit date, medication, cravings, and long-term maintenance.",
    path: "/how-to-quit-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  const howToJsonLd = buildHowToJsonLd({
    name: "How to quit smoking",
    description: "Seven-step evidence-based quit smoking plan",
    path: "/how-to-quit-smoking",
    steps: steps.map((s) => ({ name: s.name, text: s.text })),
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="how-to-quit-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="how-to-quit-howto-json-ld" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>

      <Breadcrumbs
        items={[{ name: "How to quit smoking", path: "/how-to-quit-smoking" }]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Pillar guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to quit smoking: step-by-step plan (2026)
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          A complete, evidence-based plan for the first 90 days and beyond.
          Pick a quit date, line up one form of medical support, plan around
          your top three cues, and use a tracker to make progress visible.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/prepare-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Start with the 7-day prep →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "seven-step-plan", label: "The 7-step quit plan" },
          { id: "if-you-had-a-slip", label: "If you had a slip" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "quit-day", label: "What to do on quit day" },
          { id: "quit-help-by-country", label: "Free quit help by country" },
          { id: "relapse-maintenance", label: "Relapse & maintenance" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "related-guides", label: "Related reading" },
          { id: "sources", label: "Sources & further reading" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="The most effective quit plans combine a specific quit date with one form of evidence-based support (NRT, varenicline, or bupropion) and pre-planned responses for your top three cues. Most successful quitters report 3–5 attempts before staying stopped."
          facts={[
            "Combination NRT (patch + gum/lozenge) roughly doubles quit success versus willpower alone.",
            "Physical nicotine withdrawal peaks on days 2–3 and mostly fades over 2–4 weeks.",
            "Free quitlines (US 1-800-QUIT-NOW; UK 0300 123 1044) add structured behavioral support at no cost.",
          ]}
        />
      </section>

      <section
        id="seven-step-plan"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          The 7-step quit plan
        </h2>
        <ol className="mt-4 space-y-4 text-sm leading-7 text-teal-900/90">
          {steps.map((step) => (
            <li key={step.name}>
              <p className="font-semibold text-teal-950">{step.name}</p>
              <p className="mt-1">
                {step.text}
                {step.name.startsWith("7.") ? (
                  <>
                    {" "}
                    <Link
                      className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                      href={`/${RELATED_PILLAR_SLUGS.iSmokedOneCigarette}`}
                    >
                      After one cigarette, use this first-hour playbook
                    </Link>
                    .
                  </>
                ) : null}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="if-you-had-a-slip"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          If you had a slip
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          A single cigarette is a slip, not permission to return to full-time
          smoking. Read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href={`/${RELATED_PILLAR_SLUGS.iSmokedOneCigarette}`}
          >
            what to do in the first hour
          </Link>
          , then come back to this plan and update your top cue the same day. If
          smoking has already crept back for several days, use{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href={`/${RELATED_PILLAR_SLUGS.howToStopARelapse}`}
          >
            how to stop a relapse
          </Link>
          . If alcohol is part of the pattern, read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href={`/${RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking}`}
          >
            alcohol and quitting smoking
          </Link>{" "}
          before your next high-risk night.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section
        id="quit-day"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What to do on quit day
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Throw out or lock away remaining cigarettes, lighters, and ashtrays.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Start your NRT or medication as directed.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Tell one person who will check in on days 1, 3, and 7.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Use your pre-decided replacement for your first two cues of the day.</span></li>
          <li className="flex gap-2"><span aria-hidden className="mt-1 text-teal-600">•</span><span>Drink more water than usual, eat something protein-rich, get outside for 10 minutes.</span></li>
        </ul>
      </section>

      <section
        id="quit-help-by-country"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Free quit help by country
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li>🇺🇸 US — 1-800-QUIT-NOW and <a className="underline decoration-teal-400 underline-offset-4" href="https://smokefree.gov" target="_blank" rel="noopener noreferrer">smokefree.gov</a></li>
          <li>🇬🇧 UK — NHS <a className="underline decoration-teal-400 underline-offset-4" href="https://www.nhs.uk/better-health/quit-smoking/" target="_blank" rel="noopener noreferrer">Better Health Quit Smoking</a></li>
          <li>🇦🇺 AU — Quitline 13 7848 and <a className="underline decoration-teal-400 underline-offset-4" href="https://www.quit.org.au/" target="_blank" rel="noopener noreferrer">quit.org.au</a></li>
        </ul>
      </section>

      <section
        id="relapse-maintenance"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Relapse & maintenance pages
        </h2>
        <p className="mt-2 text-sm leading-6 text-teal-900/80">
          Use this cluster when your quit gets shaky after day one. Published
          pages are linked below; planned pages are listed so we can switch them
          live without forgetting internal links.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {RELAPSE_MAINTENANCE_LINKS.map((item) => (
            <li key={item.slug}>
              {item.status === "live" ? (
                <Link
                  href={item.href}
                  className="block rounded-xl border border-teal-200 px-4 py-3 text-sm text-teal-900 transition hover:bg-teal-50"
                >
                  <span className="block text-[10px] font-medium uppercase tracking-wide text-teal-700">
                    Live
                  </span>
                  <span className="mt-1 block font-medium">{item.title}</span>
                </Link>
              ) : (
                <div className="rounded-xl border border-dashed border-teal-200 px-4 py-3 text-sm text-teal-900/75">
                  <span className="block text-[10px] font-medium uppercase tracking-wide text-teal-700/80">
                    Planned
                  </span>
                  <span className="mt-1 block font-medium">{item.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-how-to-quit" />
      </section>

      <section id="related-guides" className="scroll-mt-24">
        <RelatedGuides
          slugs={[
            "prepare-to-quit-smoking",
            RELATED_PILLAR_SLUGS.iSmokedOneCigarette,
            RELATED_PILLAR_SLUGS.howToStopARelapse,
            RELATED_PILLAR_SLUGS.alcoholAndQuittingSmoking,
            RELATED_PILLAR_SLUGS.socialSmoking,
            "what-happens-after-1-day",
            "what-happens-after-3-days",
            "what-happens-after-1-week",
            "cravings",
            "tools/money-saved",
          ]}
        />
      </section>

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Sources & further reading
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          <li><a className="underline decoration-teal-400 underline-offset-4" href="https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/2020-cessation-sgr/index.html" target="_blank" rel="noopener noreferrer">US Surgeon General&apos;s Report on Smoking Cessation (2020)</a></li>
          <li><a className="underline decoration-teal-400 underline-offset-4" href="https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/guide/index.html" target="_blank" rel="noopener noreferrer">CDC Tips From Former Smokers – Quit Guide</a></li>
          <li><a className="underline decoration-teal-400 underline-offset-4" href="https://www.nhs.uk/better-health/quit-smoking/" target="_blank" rel="noopener noreferrer">NHS Better Health: Quit Smoking</a></li>
          <li><a className="underline decoration-teal-400 underline-offset-4" href="https://www.who.int/news-room/fact-sheets/detail/tobacco" target="_blank" rel="noopener noreferrer">WHO: Tobacco key facts</a></li>
        </ul>
      </section>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/how-to-quit-smoking</code>
      </p>
    </div>
  );
}
