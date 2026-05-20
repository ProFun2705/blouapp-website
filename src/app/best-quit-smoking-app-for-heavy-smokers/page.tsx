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
  title: "Best quit smoking app for heavy smokers (2026): what actually works",
  description:
    "Heavy smokers face stronger withdrawal and more deeply ingrained habits. Here's what to look for in a quit app and which ones suit high-dependency quitters.",
  path: "/best-quit-smoking-app-for-heavy-smokers",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "best quit smoking app for heavy smokers",
    "quit smoking app heavy smoker",
    "quitting smoking pack a day",
    "best app to stop smoking heavy smoker",
    "high dependency smoker quit app",
  ],
});

const faqItems = [
  {
    question: "Can heavy smokers quit with an app alone?",
    answer:
      "An app is a tracking and support tool, not a replacement for medical support. Heavy smokers (20+ cigarettes per day) typically have high physical dependence and do best combining an app with NRT or prescription cessation medication. Discuss options with a clinician before your quit date.",
  },
  {
    question: "How many cigarettes is considered 'heavy smoking'?",
    answer:
      "Definitions vary, but smoking 20 or more cigarettes per day (one pack+) is commonly classified as heavy. People who smoke their first cigarette within 30 minutes of waking typically have higher nicotine dependence (measured by the Fagerström test) and may need higher-dose NRT.",
  },
  {
    question: "Is cold turkey more difficult for heavy smokers?",
    answer:
      "Yes. The intensity of nicotine withdrawal scales with dependence level. Heavy smokers who quit cold turkey experience more severe physical withdrawal symptoms in the first 72 hours. NRT or varenicline can significantly moderate withdrawal intensity and improve success rates.",
  },
  {
    question: "What NRT dose is best for a heavy smoker?",
    answer:
      "Heavy smokers often need higher-strength NRT (21mg patch, or 4mg gum/lozenge) and may benefit from combination NRT (patch for background coverage plus fast-acting NRT for cravings). Discuss your specific daily cigarette count with a pharmacist or clinician for appropriate dosing.",
  },
  {
    question: "How much money would I save if I quit smoking a pack a day?",
    answer:
      "It depends on local cigarette prices, but pack-a-day smokers typically spend between $3,000 and $6,000+ per year on cigarettes. Use our money-saved calculator to see your exact figure.",
  },
];

export default function BestQuitSmokingAppForHeavySmokersPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Best quit smoking app for heavy smokers (2026): what actually works",
    description:
      "A guide to the best quit smoking apps for heavy smokers, including what features matter most for high-dependency quitters.",
    path: "/best-quit-smoking-app-for-heavy-smokers",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="best-app-heavy-smokers-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          {
            name: "Best quit smoking app for heavy smokers",
            path: "/best-quit-smoking-app-for-heavy-smokers",
          },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Best for heavy smokers
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Best quit smoking app for heavy smokers
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          Quitting when you smoke a pack a day is harder than quitting at 5
          cigarettes per day—physically and habit-wise. This guide covers what
          features actually matter for high-dependency quitters, and why heavy
          smokers typically need more than an app alone.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AppStoreBadgeLink campaign="article_intro" placement="article_intro" />
          <Link
            href="/best-quit-smoking-apps"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
          >
            Full apps roundup →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "why-different", label: "Why heavy smokers need more" },
          { id: "what-to-look-for", label: "What to look for in an app" },
          { id: "blou-for-heavy-smokers", label: "How Blou helps heavy smokers" },
          { id: "combine-with-nrt", label: "Combining app with NRT" },
          { id: "savings", label: "The savings motivation" },
          { id: "social-proof", label: "App Store reviews" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Heavy smokers need an app that works fast during intense cravings, shows real health milestones, and tracks the substantial savings from quitting. But apps are support tools—heavy smokers typically need NRT or prescription medication alongside an app to manage strong physical withdrawal."
          facts={[
            "Heavy smokers (20+ per day) experience more intense physical withdrawal for the first 3–7 days.",
            "High-dose NRT combined with an app can roughly double quit success rates vs app alone.",
            "A pack-a-day smoker can save $3,000–$6,000 per year after quitting.",
          ]}
        />
      </section>

      <section
        id="why-different"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Why heavy smokers face different challenges
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Physical nicotine dependence scales with daily cigarette count.
          Someone smoking 30 cigarettes a day has nicotine in their system
          almost continuously—their brain&apos;s reward and stress systems adapt
          around that constant supply. When it stops, withdrawal is more
          intense.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              More daily smoking means more deeply wired behavioral triggers—each
              hour of the day has an associated cigarette cue.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Withdrawal symptoms (irritability, headaches, cravings, brain fog)
              are often more intense and last slightly longer. See the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nicotine-withdrawal-timeline"
              >
                nicotine withdrawal timeline
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Many heavy smokers have tried to quit before—which is normal, not
              a failure. Each attempt provides data about what triggers relapse.
              See{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/trying-to-quit-smoking-again"
              >
                trying to quit again
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="what-to-look-for"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          What to look for in a quit app if you're a heavy smoker
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Fast craving tool.</strong> When withdrawal is intense,
              you need a craving response you can start in under 5 seconds.
              Timer-based tools that walk you through a 3-minute breathing or
              movement exercise work best.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Frequent milestone markers.</strong> For a heavy smoker,
              every hour in the first 48 hours is an achievement. An app that
              celebrates smaller increments keeps motivation high in the
              critical early window.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Savings tracker calibrated to high daily counts.</strong>{" "}
              The financial impact of quitting a pack-a-day habit is very large.
              Seeing real money accumulating is a strong daily motivator.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Craving logging.</strong> Heavy smokers have more cues to
              address. Logging cravings with context (time, location, emotion)
              reveals patterns you can plan around.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Low friction daily habit.</strong> You need an app you
              open every day, not just in crises. Clean design with a clear
              one-screen dashboard makes daily check-ins feel worth the 30
              seconds.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="blou-for-heavy-smokers"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          How Blou helps heavy smokers specifically
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Blou is designed around the moments that matter most: the first 72
          hours, each milestone crossed, and each craving that passes. For
          heavy smokers, it provides:
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              A savings counter that updates in real-time based on your daily
              cigarette count and local price.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Health milestones that map directly to medical evidence—see the{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/tools/lung-recovery"
              >
                lung recovery timeline
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              A fast craving tool for the spike moments that dominate the first
              week.
            </span>
          </li>
        </ul>
        <div className="mt-5">
          <AppStoreBadgeLink campaign="article_mid" placement="article_intro" />
        </div>
      </section>

      <section
        id="combine-with-nrt"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Why heavy smokers should combine an app with NRT
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          An app addresses behavioral and psychological dependency. NRT or
          medication addresses physical dependency. Heavy smokers have both in
          abundance. Evidence consistently shows higher success rates when
          behavioral support (tracking, craving management) is combined with
          pharmacotherapy.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/combination-nrt-quit-smoking"
              >
                Combination NRT
              </Link>{" "}
              (patch + fast-acting gum or lozenge) is often recommended for
              heavy smokers and can be more effective than a single NRT form.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              Prescription medications like{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/quit-smoking-with-varenicline"
              >
                varenicline
              </Link>{" "}
              have strong evidence in heavy smokers and significantly reduce
              craving intensity.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              See:{" "}
              <Link
                className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                href="/nrt-and-quit-smoking-app"
              >
                NRT and a quit app together
              </Link>
              .
            </span>
          </li>
        </ul>
      </section>

      <section
        id="savings"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          The savings motivation: use it
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Heavy smokers have the most to gain financially. A pack-a-day habit
          at current prices costs most people $3,500–$6,000 per year depending
          on location. Over 5 years, quitting can free up $15,000–$30,000+.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Use the{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/tools/money-saved"
          >
            money saved calculator
          </Link>{" "}
          to see your exact figure. Then set a goal for the first month: what
          would you do with $300?
        </p>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-best-app-heavy-smokers" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="article_footer"
          placement="article_footer_card"
        />
        <Link
          href="/tools/money-saved"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Calculate my savings →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/best-quit-smoking-app-for-heavy-smokers</code>
      </p>
    </div>
  );
}
