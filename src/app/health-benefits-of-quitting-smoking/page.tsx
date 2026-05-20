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
  title: "Health benefits of quitting smoking: what happens to your body",
  description:
    "The health benefits of quitting smoking begin within 20 minutes and compound for decades. Here's a full timeline from hours to 15 years.",
  path: "/health-benefits-of-quitting-smoking",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "health benefits of quitting smoking",
    "benefits of quitting smoking timeline",
    "what happens when you quit smoking",
    "quitting smoking benefits body",
    "smoking cessation benefits",
  ],
});

const faqItems = [
  {
    question: "How quickly do health benefits start after quitting smoking?",
    answer:
      "Within 20 minutes of your last cigarette, heart rate and blood pressure begin to normalize. Within 8–24 hours, carbon monoxide clears from the blood and oxygen delivery improves. Within 48–72 hours, taste and smell begin recovering. The health benefits are real and measurable from day one.",
  },
  {
    question: "Can lungs fully recover after years of smoking?",
    answer:
      "Lungs can recover substantially, though the degree depends on how long and how heavily you smoked. Cilia function returns, mucus clears, inflammation decreases, and lung function measurably improves—especially in the first year. Some damage (like emphysema, if present) cannot fully reverse, but progression stops and many functional improvements are significant.",
  },
  {
    question: "How long does it take for heart disease risk to decrease after quitting?",
    answer:
      "After one year smoke-free, the risk of heart disease drops to about half that of a current smoker. After 5–10 years, the risk of stroke approaches that of someone who never smoked. After 15 years, the risk of heart disease is similar to that of a lifetime non-smoker.",
  },
  {
    question: "Does quitting smoking reduce cancer risk?",
    answer:
      "Yes. Risk for lung cancer, throat cancer, mouth cancer, esophageal cancer, and several other cancers decreases steadily after quitting. After 10 years smoke-free, lung cancer risk is about half that of a current smoker. After 15 years, the risk of several cancers is close to that of someone who never smoked.",
  },
  {
    question: "What are the mental health benefits of quitting smoking?",
    answer:
      "After the initial withdrawal period (typically 2–6 weeks), many ex-smokers report improved mood, reduced anxiety, and better stress resilience. Long-term studies show that anxiety and depression levels in ex-smokers tend to be lower than in continuing smokers—contrary to the belief that smoking helps manage stress.",
  },
  {
    question: "Is it too late to benefit from quitting smoking?",
    answer:
      "No. People who quit at 40 gain roughly 9 years of life expectancy compared to continuing smokers. Quitting at 60 still produces measurable health and longevity benefits. The earlier you quit the more you gain, but the benefits of quitting are real at any age.",
  },
];

export default function HealthBenefitsOfQuittingSmokingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Health benefits of quitting smoking: what happens to your body",
    description:
      "A full timeline of the health benefits of quitting smoking, from minutes to decades.",
    path: "/health-benefits-of-quitting-smoking",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="health-benefits-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Health benefits of quitting smoking",
            path: "/health-benefits-of-quitting-smoking",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Why quit
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Health benefits of quitting smoking
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          The benefits start within minutes of your last cigarette and compound
          for 15 years. This page gives a full timeline so you can see exactly
          what your body is doing as you quit.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/nicotine-withdrawal-timeline"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Withdrawal timeline →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "hours", label: "Minutes to hours" },
          { id: "days", label: "Days 1–7" },
          { id: "weeks", label: "Weeks 2–12" },
          { id: "months-years", label: "Months to years" },
          { id: "mental-health", label: "Mental health benefits" },
          { id: "financial", label: "Financial benefits" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Health benefits of quitting smoking start within 20 minutes (heart rate normalizes) and continue for 15+ years (heart disease risk approaches that of a non-smoker). At one year, heart disease risk is halved. At 10 years, lung cancer risk is roughly halved. The body has remarkable capacity to recover at any age."
          facts={[
            "Heart rate and blood pressure begin normalizing within 20–30 minutes of the last cigarette.",
            "Lung cancer risk is approximately halved 10 years after quitting.",
            "Life expectancy gain from quitting at age 40 is roughly 9 years compared to continuing.",
          ]}
        />
      </section>

      <section
        id="hours"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Minutes to 24 hours: immediate changes
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">20–30 min:</span>
            <span>
              Heart rate drops toward normal. Blood pressure begins to ease.
              Hands and feet may feel warmer as circulation improves slightly.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">8 hours:</span>
            <span>
              Carbon monoxide in the blood drops significantly. Oxygen levels
              rise. CO in cigarette smoke binds to hemoglobin 200x more tightly
              than oxygen, so clearing it is a rapid and major benefit.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">24 hours:</span>
            <span>
              Carbon monoxide is largely cleared. Heart attack risk begins
              declining. Nicotine has mostly metabolized. See the detailed{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-day"
              >
                1-day milestone guide
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="days"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Days 1–7: senses and airways
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">48 hours:</span>
            <span>
              Nerve endings begin regenerating. Taste and smell start
              recovering—many people notice food tastes different by day 2. See
              the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/taste-and-smell"
              >
                taste and smell guide
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">72 hours:</span>
            <span>
              Bronchial tubes begin to relax, making breathing slightly easier.
              Nicotine is fully cleared—withdrawal peaks around this point and
              then begins to ease. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-3-days"
              >
                the 3-day milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">1 week:</span>
            <span>
              Cough may temporarily worsen as cilia recover and start clearing
              mucus. Energy levels begin improving as withdrawal intensity
              drops. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-week"
              >
                1-week milestone
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="weeks"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Weeks 2–12: lung and circulation recovery
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">2 weeks:</span>
            <span>
              Circulation continues improving. Walking and exercise feel
              noticeably easier for many people. The hardest withdrawal
              symptoms have usually passed. See the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-2-weeks"
              >
                2-week milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">1 month:</span>
            <span>
              Lung function begins measurably improving. Coughing and
              breathlessness reduce. Mood stabilizes. Many people feel their
              best of the quit period so far. See the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-month"
              >
                1-month milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">3 months:</span>
            <span>
              Circulation is substantially improved. Lung capacity has
              measurably increased. Exercise tolerance may be noticeably better.
              See the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-3-months"
              >
                3-month milestone
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="months-years"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Months to 15 years: long-term disease risk
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">6 months:</span>
            <span>
              Coughing and breathlessness continue declining. Cilia have
              largely regenerated. Immune function improving. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-6-months"
              >
                6-month milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">1 year:</span>
            <span>
              Heart disease risk has roughly halved compared to continuing
              smokers. A significant, measurable milestone. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-year"
              >
                1-year milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">5 years:</span>
            <span>
              Stroke risk has declined to near that of someone who never smoked.
              Mouth, throat, and esophageal cancer risks have significantly
              reduced. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-5-years"
              >
                5-year milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">10 years:</span>
            <span>
              Lung cancer risk is about half that of a current smoker. Pancreatic
              and laryngeal cancer risks have significantly reduced. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-10-years"
              >
                10-year milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">15 years:</span>
            <span>
              Heart disease risk is similar to that of someone who has never
              smoked. Life expectancy has largely recovered toward non-smoker
              levels for most people who quit by middle age.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="mental-health"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Mental health benefits
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Many smokers believe cigarettes help manage stress. The evidence shows
          the opposite long-term: nicotine creates the anxiety and stress it
          temporarily relieves. After the withdrawal period (typically 2–6
          weeks), most ex-smokers report:
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Lower baseline anxiety and stress levels.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Improved mood and emotional stability.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Better sleep quality (after the withdrawal-disruption phase).</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Improved self-efficacy and confidence from having quit.</span>
          </li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          See:{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/quit-smoking-with-anxiety"
          >
            quitting with anxiety
          </Link>{" "}
          and{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/quit-smoking-with-depression"
          >
            quitting with depression
          </Link>
          .
        </p>
      </section>

      <section
        id="financial"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Financial benefits
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          The financial benefits of quitting compound just like the health ones.
          An average smoker of 10 cigarettes a day can save $1,500–$3,000 per
          year. A pack-a-day smoker saves $3,500–$6,000+ per year depending on
          their country and local cigarette prices.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Use the{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/tools/money-saved"
          >
            money saved calculator
          </Link>{" "}
          to see your specific figure, then use it as a daily motivator.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-health-benefits-quitting" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/nicotine-withdrawal-timeline"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Withdrawal timeline →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/health-benefits-of-quitting-smoking</code>
      </p>
    </div>
  );
}
