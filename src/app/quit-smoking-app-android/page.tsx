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
  title: "Quit smoking app for Android: options today + Blou waitlist",
  description:
    "Looking for a quit smoking app on Android? Here are solid cross-platform picks today, plus how to join the Blou Android waitlist if you want our tracker next.",
  path: "/quit-smoking-app-android",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit smoking app android",
    "android quit smoking app",
    "stop smoking app android",
    "quit tracker android",
  ],
});

const faqItems = [
  {
    question: "Is Blou on Android?",
    answer:
      "Not yet. Blou is iPhone-only today. If you want to be notified when Android ships, join the waitlist on the homepage (Android waitlist section).",
  },
  {
    question: "Which quit smoking apps support Android right now?",
    answer:
      "Widely used options include Smoke Free and QuitNow!—both appear in our /best-quit-smoking-apps comparison. Pick based on whether you want missions, community, or a simpler tracker.",
  },
  {
    question: "Can I use Blou on the web instead?",
    answer:
      "Blou is a native iOS app experience; there is no web substitute today. Android users should use a cross-platform app until Blou launches.",
  },
  {
    question: "Do Android quit apps work?",
    answer:
      "They can help with consistency—quit date, craving logging, and savings visibility. Pair any app with NRT or medication if your clinician recommends it.",
  },
];

export default function QuitSmokingAppAndroidPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking app for Android: options today + Blou waitlist",
    description:
      "Android quit smoking app options and the Blou Android waitlist.",
    path: "/quit-smoking-app-android",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <Script id="android-app-article-json-ld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Breadcrumbs
        items={[
          { name: "Quit smoking app Android", path: "/quit-smoking-app-android" },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Platform guide
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking app for Android
        </h1>
        <p className="mt-4 text-base leading-7 text-teal-900/90">
          If you are on Android, you deserve a real quit app today—not a landing
          page that pretends one exists. Here is the honest split: strong
          Android apps you can download now, and where to join the Blou Android
          waitlist if you want our iOS-style tracker later.
        </p>
        <div className="mt-5">
          <Byline datePublished={PUBLISHED} dateModified={MODIFIED} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="/#android-waitlist"
            className="inline-flex h-11 items-center justify-center rounded-full bg-teal-700 px-5 text-sm font-medium text-white transition hover:bg-teal-800"
          >
            Join Blou Android waitlist →
          </Link>
          <Link
            href="/best-quit-smoking-apps"
            className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
            >
            Compare Android apps →
          </Link>
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "android-today", label: "Android options today" },
          { id: "blou-ios", label: "Blou on iPhone today" },
          { id: "social-proof", label: "App Store reviews (iOS)" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use a cross-platform quit app on Android today (see the apps roundup). Blou is iOS-only in 2026—join the Android waitlist on the homepage if you want us to notify you at launch."
          facts={[
            "The best app is the one you open during cravings; platform support matters more than branding.",
            "Pair apps with quitlines and medications when appropriate.",
            "iPhone users can download Blou immediately from the badge below.",
          ]}
        />
      </section>

      <section
        id="android-today"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Android options today
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Read{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/best-quit-smoking-apps"
          >
            best quit smoking apps
          </Link>{" "}
          for a short comparison, then install one and pair it with{" "}
          <Link
            className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            href="/how-to-quit-smoking"
          >
            the quit plan
          </Link>
          .
        </p>
      </section>

      <section
        id="blou-ios"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Blou on iPhone today</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          If you also have an iPhone, you can use Blou now while you keep your
          Android device for everything else.
        </p>
        <div className="mt-4">
          <AppStoreBadgeLink
            campaign="pillar_android_page_ios_users"
            placement="article_intro"
          />
        </div>
      </section>

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof compact />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-quit-android" />
      </section>

      <div className="flex flex-wrap items-center gap-3">
        <AppStoreBadgeLink
          campaign="pillar_android_page_footer"
          placement="article_footer_card"
        />
        <Link
          href="/#android-waitlist"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Android waitlist →
        </Link>
      </div>

      <p className="text-[11px] text-teal-900/60">
        Canonical: <code>{SITE_URL}/quit-smoking-app-android</code>
      </p>
    </div>
  );
}
