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

const PUBLISHED = "2026-05-20";
const MODIFIED = "2026-05-20";

export const metadata: Metadata = buildMetadata({
  title: "How to quit smoking when you have asthma: benefits and plan",
  description:
    "Quitting smoking is the single most effective action for asthma control. Learn what to expect, how breathing changes, and how to manage the first weeks.",
  path: "/quit-smoking-with-asthma",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking with asthma",
    "quitting smoking asthma benefits",
    "smoking and asthma",
    "how to quit smoking asthma",
    "asthma after quitting smoking",
  ],
});

const faqItems = [
  {
    question: "Will my asthma improve if I quit smoking?",
    answer:
      "For most people with asthma, quitting smoking leads to meaningful improvement in symptom control, fewer attacks, and reduced reliance on rescue inhalers. Some benefits begin within days; more substantial airway improvements develop over months. The degree of improvement depends on how long you've smoked and the severity of your asthma.",
  },
  {
    question: "Does coughing get worse when you quit smoking with asthma?",
    answer:
      "Coughing often increases temporarily in the first 1–2 weeks after quitting. This is a normal sign that the airways are clearing mucus and starting to heal—not a sign that quitting is harmful. If coughing is severe, prolonged, or accompanied by wheezing, blood, or chest pain, see your doctor.",
  },
  {
    question: "Should I change my inhaler when I quit smoking?",
    answer:
      "Possibly. Smoking affects airway inflammation and the metabolism of some inhaled medications. As your airways begin to recover after quitting, your asthma control may improve and your preventer inhaler dose may need reviewing. Tell your doctor you've quit—don't adjust doses on your own.",
  },
  {
    question: "Is the nicotine patch safe if I have asthma?",
    answer:
      "Nicotine replacement therapy (NRT) including patches is generally considered safe for people with asthma. It avoids the smoke, tar, carbon monoxide, and other irritants that make smoking harmful for airways. Discuss your full medication list with a pharmacist or clinician before starting NRT.",
  },
  {
    question: "How long before I notice breathing improvements after quitting?",
    answer:
      "Many people notice small breathing improvements within a few days (carbon monoxide clears quickly). More significant airway changes—reduced inflammation, improved lung function—develop over weeks to months. The timeline varies by smoking history and asthma severity.",
  },
];

export default function QuitSmokingWithAsthmaPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to quit smoking when you have asthma: benefits and plan",
    description:
      "A practical guide to quitting smoking when you have asthma, including what to expect, breathing improvements, and NRT safety.",
    path: "/quit-smoking-with-asthma",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="quit-asthma-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking with asthma",
            path: "/quit-smoking-with-asthma",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Quitting with a condition
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to quit smoking when you have asthma
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Quitting smoking is the single most impactful action for asthma
          control. Even after years of smoking, airways can recover
          meaningfully. This guide covers what to expect and how to prepare.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/how-to-quit-smoking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Full quit plan →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "why-smoking-worsens-asthma", label: "Why smoking worsens asthma" },
          { id: "benefits-timeline", label: "Breathing benefits timeline" },
          { id: "first-weeks", label: "Managing the first weeks" },
          { id: "nrt-inhalers", label: "NRT and inhalers" },
          { id: "when-to-seek-care", label: "When to seek care" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Quitting smoking is the most effective intervention for asthma—more impactful than any single medication. Breathing often begins improving within days, with more substantial airway recovery over months. Coughing may temporarily increase in the first two weeks as airways clear, which is a sign of healing."
          facts={[
            "Carbon monoxide clears from the blood within 24 hours of quitting.",
            "Airway inflammation begins decreasing within weeks of stopping smoking.",
            "Many people with asthma need fewer rescue inhaler puffs within 3 months of quitting.",
          ]}
        />
      </section>

      <section
        id="why-smoking-worsens-asthma"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Why smoking worsens asthma
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Cigarette smoke contains thousands of compounds that directly damage
          the airways. For people with asthma, this means:
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Increased airway inflammation:</strong> Smoke irritants
              trigger a chronic inflammatory response that sits on top of
              asthma-related inflammation, worsening symptoms.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Impaired mucociliary clearance:</strong> Cilia lining the
              airways are damaged by smoke, reducing the body&apos;s ability to
              clear mucus and pathogens.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Reduced inhaler effectiveness:</strong> Corticosteroid
              inhalers work less well in people who smoke, meaning higher
              doses may be needed for the same effect.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>More frequent attacks:</strong> Smoke-induced airway
              narrowing makes attacks more likely, more severe, and harder to
              abort with rescue medication.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="benefits-timeline"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Breathing benefits after quitting: what the timeline looks like
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">24 hours:</span>
            <span>
              Carbon monoxide clears from the blood. Oxygen delivery to tissues
              improves. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-day"
              >
                what happens after 1 day
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Days 3–7:</span>
            <span>
              Bronchial tubes begin relaxing slightly. Coughing may increase as
              cilia start functioning again and clearing accumulated mucus.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Weeks 2–4:</span>
            <span>
              Airway inflammation begins decreasing. Many people notice fewer
              wheezing episodes and better exercise tolerance.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">3 months:</span>
            <span>
              Lung function measurably improves for most people. Rescue inhaler
              use often decreases. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-3-months"
              >
                what happens after 3 months
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">1 year+:</span>
            <span>
              Sustained reduction in asthma attack frequency and severity for
              most people who stay smoke-free.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="first-weeks"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Managing the first weeks with asthma
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The first two weeks can feel counterintuitive—coughing and chest
          tightness may temporarily worsen. This is nearly always a sign of
          airway healing, not deterioration.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Keep your rescue inhaler close.</strong> Cue-based
              tightness or a craving-triggered breath can feel like an attack.
              Your inhaler is there for real respiratory distress—not for
              cravings.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Avoid smoke exposure.</strong> Second-hand smoke is an
              asthma trigger. If you live with a smoker, see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/living-with-a-smoker-while-quitting"
              >
                living with a smoker while quitting
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Track breathing daily.</strong> Note peak flow readings
              (if you measure them) alongside smoke-free days to see objective
              improvements over time.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Tell your GP or respiratory nurse you&apos;ve quit.</strong>{" "}
              They may want to review your preventer dose as your airways
              improve.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="nrt-inhalers"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          NRT and inhaler considerations
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          NRT (patches, gum, lozenges) is generally safe with asthma and
          avoids the smoke, carbon monoxide, and irritants that damage airways.
          The nicotine inhaler NRT product is not recommended for people with
          significant airway disease—discuss with a pharmacist.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Prescription options like varenicline and bupropion do not affect the
          airways and can be used alongside asthma medications. Always check
          with a clinician for your specific combination.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              See:{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-nicotine-patch"
              >
                nicotine patch
              </Link>
              ,{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/combination-nrt-quit-smoking"
              >
                combination NRT
              </Link>
              ,{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-varenicline"
              >
                varenicline
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="when-to-seek-care"
        className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          When to seek care
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Wheezing at rest that does not respond to your rescue inhaler.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Shortness of breath that is severe or rapidly worsening.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Coughing blood.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Chest pain or pressure not related to a craving.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Any breathing symptom that concerns you—trust your instincts.</span>
          </li>
        </ul>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-smoking-asthma" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/guides/shortness-of-breath"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Shortness of breath guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-with-asthma</code>
      </p>
    </div>
  );
}
