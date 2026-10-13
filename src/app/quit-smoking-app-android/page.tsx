import type { Metadata } from "next";
import Link from "next/link";
import { AndroidWaitlistCard } from "@/components/marketing/AndroidWaitlistCard";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-10-13";
const CAMPAIGN = "article_quit-smoking-app-android";

export const metadata: Metadata = buildMetadata({
  title: "Quit smoking app for Android: options today",
  description:
    "Looking for a quit smoking app on Android? Solid cross-platform picks you can install today, plus an honest note: Blou is iPhone-only for now.",
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
      "Not yet. Blou is iPhone-only for now, and there is no Android version or sign-up list yet. The guides, calculators, and tools on this website work on any phone.",
  },
  {
    question: "Which quit smoking apps support Android right now?",
    answer:
      "Widely used options include Smoke Free and QuitNow!—both appear in our /best-quit-smoking-apps comparison. Pick based on whether you want missions, community, or a simpler tracker.",
  },
  {
    question: "Can I use Blou on the web instead?",
    answer:
      "No. Blou is a native iPhone app, and there is no web version. On Android, use a cross-platform quit app; the guides and calculators on this website work in any browser.",
  },
  {
    question: "Do Android quit apps work?",
    answer:
      "They can help with consistency—quit date, craving logging, and savings visibility. Pair any app with NRT or medication if your clinician recommends it.",
  },
];

export default function QuitSmokingAppAndroidPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "Quit smoking app for Android: options today",
    description:
      "Android quit smoking app options today. Blou is iPhone-only for now.",
    path: "/quit-smoking-app-android",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Quit smoking app Android", path: "/quit-smoking-app-android" },
        ]}
      />

      <ArticleHeader
        kicker="Platform guide"
        title="Quit smoking app for Android"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
            Compare Android apps →
          </ButtonLink>
        }
      >
        <p>
          If you are on Android, you deserve a real quit app today—not a landing
          page that pretends one exists. Here is the honest split: strong
          Android apps you can download now, and a plain note that Blou is
          iPhone-only for now.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "android-today", label: "Android options today" },
          { id: "blou-android", label: "Is Blou on Android?" },
          { id: "blou-ios", label: "Blou on iPhone today" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Use a cross-platform quit app on Android today (see the apps roundup). Blou is iPhone-only for now, and there is no Android version yet."
          facts={[
            "The best app is the one you open during cravings; platform support matters more than branding.",
            "Pair apps with quitlines and medications when appropriate.",
            "If you also have an iPhone, Blou is on the App Store as a subscription with a free trial.",
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

      <section id="blou-android" className="scroll-mt-24">
        <AndroidWaitlistCard />
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
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        On iPhone, Blou gives you a photo timeline, lung checks, and SOS craving
        help, with every milestone and smoke-free day on one visual timeline.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Have an iPhone too?"
        description="Blou is iPhone-only for now. If you have an iPhone, it shows what is happening to you, from your first smoke-free day."
      />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
          Compare Android apps →
        </ButtonLink>
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Read the quit plan →
        </ButtonLink>
      </div>
    </div>
  );
}
