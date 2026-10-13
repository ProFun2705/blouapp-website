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
  title: "How to quit smoking when you have depression: what to know",
  description:
    "Quitting smoking with depression requires extra preparation. Learn how nicotine affects mood, what the timeline looks like, and how to stay safe.",
  path: "/quit-smoking-with-depression",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking with depression",
    "quitting smoking depression worse",
    "nicotine withdrawal depression",
    "smoking and depression",
    "how to quit smoking when depressed",
  ],
});

const faqItems = [
  {
    question: "Does quitting smoking cause depression?",
    answer:
      "Some people experience low mood or depressive symptoms during nicotine withdrawal, typically peaking in the first 1–2 weeks. For many, this is temporary. However, people with a history of major depression are at higher risk of a depressive episode after quitting. Tell your clinician you are planning to quit so they can monitor and support you.",
  },
  {
    question: "How long does low mood last after quitting smoking?",
    answer:
      "For most people without a history of depression, withdrawal-related low mood resolves within 2–4 weeks. Research consistently shows that long-term mood in ex-smokers is generally better than in continuing smokers—quitting is ultimately beneficial for mental health.",
  },
  {
    question: "Is bupropion better for quitting if I have depression?",
    answer:
      "Bupropion (also marketed as Wellbutrin for depression) is an antidepressant that is also approved as a smoking cessation aid. It may be a particularly good fit for people who have both depression and tobacco use disorder. A psychiatrist or prescribing clinician can advise whether it's appropriate for your specific situation.",
  },
  {
    question: "Can I quit cold turkey if I have depression?",
    answer:
      "It is possible, but the abrupt drop in nicotine can intensify low mood and withdrawal symptoms. People with depression often do better with a supported quit plan that includes NRT or cessation medication to moderate withdrawal intensity. Discuss your options with a clinician before choosing a method.",
  },
  {
    question: "What should I do if I feel very low after quitting?",
    answer:
      "Tell your doctor or mental health provider right away. They can assess whether symptoms represent normal withdrawal or a depressive episode requiring treatment. If you have thoughts of suicide or self-harm, seek emergency care immediately.",
  },
];

export default function QuitSmokingWithDepressionPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to quit smoking when you have depression: what to know",
    description:
      "A practical guide to quitting smoking safely when you have depression or a history of depressive episodes.",
    path: "/quit-smoking-with-depression",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="quit-depression-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Quit smoking with depression",
            path: "/quit-smoking-with-depression",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Quitting with a condition
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          How to quit smoking when you have depression
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Smoking rates are significantly higher among people with depression.
          Quitting is still one of the most important things you can do for your
          health—but it requires extra preparation and support.
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
          { id: "nicotine-mood-link", label: "Nicotine and mood: the link" },
          { id: "withdrawal-timeline", label: "Mood during withdrawal" },
          { id: "strategies", label: "Strategies that help" },
          { id: "medication", label: "Medication options" },
          { id: "when-to-seek-care", label: "When to seek care" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Quitting smoking with depression is possible and beneficial long-term—ex-smokers report better mood than continuing smokers. The first 2–4 weeks may bring temporary low mood from withdrawal. If you have a history of depression, quit with a clinician's support and a plan for monitoring mood."
          facts={[
            "People with depression smoke at roughly twice the rate of the general population.",
            "Nicotine withdrawal can trigger low mood, but this typically resolves within 2–4 weeks.",
            "Long-term mood outcomes are generally better after quitting than while continuing to smoke.",
          ]}
        />
      </section>

      <section
        id="nicotine-mood-link"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Nicotine and mood: understanding the link
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Nicotine stimulates dopamine release, which temporarily improves
          mood. Over time, the brain downregulates its own dopamine production
          in response. This means a smoker&apos;s baseline mood depends partially
          on nicotine input—when it&apos;s absent, mood drops, and the next
          cigarette appears to restore it.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          For people with depression, the dopamine pathway is already
          dysregulated. This creates a heightened sensitivity to nicotine
          withdrawal, making mood dips feel more intense and harder to attribute
          to withdrawal rather than the underlying condition.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Smoking relieves the mood drop that smoking itself created—this
              is the same cycle as{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-anxiety"
              >
                anxiety and smoking
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              People with depression who quit smoking report better long-term
              mental health outcomes on average than those who continue.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="withdrawal-timeline"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What mood looks like during withdrawal
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Hours 0–72:</span>
            <span>
              Mood is most volatile. Irritability, restlessness, and a flat or
              empty feeling are common. This is peak withdrawal—see{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-3-days"
              >
                what happens after 3 days
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Week 1–2:</span>
            <span>
              Low mood, emotional blunting, or crying spells may continue.
              Sleep disruption can amplify all mood symptoms. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/depression"
              >
                depression as a withdrawal symptom
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Week 2–4:</span>
            <span>
              Most people notice a steady improvement. Energy and mood
              gradually stabilize. The{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/what-happens-after-1-month"
              >
                one-month milestone
              </Link>{" "}
              often feels significantly better than week one.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 font-bold text-teal-700">Month 2+:</span>
            <span>
              Improved baseline mood as dopamine regulation normalizes. For
              some people, ongoing depression treatment may also become more
              effective once the nicotine interference is removed.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="strategies"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Strategies that help
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Tell your mental health provider before you quit.</strong>{" "}
              They can establish a mood baseline, monitor for relapse during the
              first month, and adjust treatment if needed.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Use NRT or cessation medication</strong> to moderate
              withdrawal intensity. Abrupt nicotine removal is harder for people
              with depression.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Protect sleep.</strong> Sleep disruption amplifies
              depression symptoms. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/guides/insomnia"
              >
                insomnia after quitting
              </Link>{" "}
              for practical sleep tips.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Daily movement.</strong> Exercise is one of the
              best-evidenced interventions for both depression and smoking
              cessation. Even short walks help.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Track progress visibly.</strong> A daily log of
              smoke-free hours, money saved, and health milestones gives your
              brain a positive signal that replaces the nicotine reward.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Avoid alcohol</strong> in the first weeks—it lowers
              inhibitions, worsens depression, and is a strong relapse trigger.
              See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/alcohol-and-quitting-smoking"
              >
                alcohol and quitting smoking
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="medication"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Medication options to discuss with your clinician
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Two prescription cessation medications have particular relevance for
          people with depression:
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Bupropion (Wellbutrin/Zyban)</strong> is both an
              antidepressant and an approved cessation aid. It may suit people
              who have depression alongside tobacco use disorder. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-bupropion"
              >
                quitting with bupropion
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Varenicline (Champix/Chantix)</strong> reduces cravings
              and is generally well-tolerated. Research found it safe for most
              people with stable depression, though close monitoring in the
              first weeks is recommended. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-varenicline"
              >
                quitting with varenicline
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>NRT</strong> is available over the counter and can help
              moderate withdrawal. It does not interact with most depression
              medications. See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nrt-and-quit-smoking-app"
              >
                NRT and a quit app
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
          When to seek care urgently
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Seek immediate professional help if you experience:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Thoughts of suicide or self-harm — contact a crisis line or emergency services now.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>Severe depressive symptoms (inability to function, not eating, not sleeping) that persist beyond a few days.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>New or worsening mood changes while using varenicline or bupropion.</span>
          </li>
        </ul>
        <p className="mt-3 text-sm text-teal-900/70">
          Quitting smoking is important for your health, but never at the cost
          of your mental safety. Your clinician can help you slow down or adjust
          your plan if needed.
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-smoking-depression" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/guides/depression"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Depression withdrawal guide →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-with-depression</code>
      </p>
    </div>
  );
}
