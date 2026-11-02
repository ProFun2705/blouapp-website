import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { RelatedGuides } from "@/components/marketing/RelatedGuides";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { appStoreHref } from "@/lib/appStore";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, PRICING_FAQ, PRICING_SHORT } from "@/lib/site";

const PUBLISHED = "2026-05-09";
const MODIFIED = "2026-11-02";
const CAMPAIGN = "article_quit-smoking-app-for-iphone";
const PATH = "/quit-smoking-app-for-iphone";
const CHECKED = "November 2, 2026";

const TITLE = "Best quit smoking app for iPhone: how to choose";
const DESCRIPTION =
  "The best quit smoking app for iPhone depends on what you need. Compare price, in-app purchases and iOS version, and learn how to cancel a trial in time.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "best quit smoking app for iphone",
    "quit smoking app for iphone",
    "stop smoking app iphone",
    "quit smoking app iphone free",
    "best free quit smoking app for iphone",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label:
      "Mobile phone text messaging and app-based interventions for smoking cessation. Cochrane Database of Systematic Reviews, 2019",
    href: "https://pubmed.ncbi.nlm.nih.gov/31638271/",
    publisher: "PubMed",
  },
  {
    label: "How to quit smoking",
    href: "https://www.cdc.gov/tobacco/about/how-to-quit.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "quitSTART app",
    href: "https://smokefree.gov/tools-tips/apps/quitstart",
    publisher: "Smokefree.gov (National Cancer Institute)",
  },
  {
    label: "Cancel a subscription from Apple",
    href: "https://support.apple.com/en-us/118428",
    publisher: "Apple Support",
  },
  {
    label: `App Store listings for each app in the table (checked ${CHECKED})`,
    href: "https://apps.apple.com/us/app/quitstart-quit-smoking/id494552000",
    publisher: "Apple App Store",
  },
];

type AppRow = {
  name: string;
  href: string;
  external: boolean;
  price: string;
  inAppPurchases: string;
  minIos: string;
  bestFor: string;
  compare?: string;
};

const apps: AppRow[] = [
  {
    name: "Blou",
    href: appStoreHref({ campaign: CAMPAIGN, placement: "table" }),
    external: false,
    price: PRICING_SHORT,
    inAppPurchases: "Yes (the subscription)",
    minIos: "iOS 17",
    bestFor: "Seeing your own recovery: photos, breath checks, milestones",
  },
  {
    name: "quitSTART",
    href: "https://apps.apple.com/us/app/quitstart-quit-smoking/id494552000",
    external: true,
    price: "Free",
    inAppPurchases: "None listed",
    minIos: "iOS 11",
    bestFor: "Paying nothing at all; made by Smokefree.gov",
    compare: "/blou-vs-quitstart",
  },
  {
    name: "Smoke Free",
    href: "https://apps.apple.com/us/app/smoke-free-quit-smoking-now/id577767592",
    external: true,
    price: "Free to download",
    inAppPurchases: "Yes",
    minIos: "iOS 16",
    bestFor: "Daily missions and tracking NRT use",
    compare: "/blou-vs-smoke-free",
  },
  {
    name: "QuitNow",
    href: "https://apps.apple.com/us/app/quitnow/id483994930",
    external: true,
    price: "Free to download",
    inAppPurchases: "Yes",
    minIos: "iOS 15.6",
    bestFor: "Talking with other people who are quitting",
    compare: "/blou-vs-quitnow",
  },
  {
    name: "Kwit",
    href: "https://apps.apple.com/us/app/quit-smoking-for-good-kwit/id525441365",
    external: true,
    price: "Free to download",
    inAppPurchases: "Yes",
    minIos: "iOS 18.1",
    bestFor: "Game-style levels and rewards",
    compare: "/blou-vs-kwit",
  },
  {
    name: "Flamy",
    href: "https://apps.apple.com/us/app/quit-smoking-smoke-free-flamy/id1462887052",
    external: true,
    price: "Free to download",
    inAppPurchases: "Yes",
    minIos: "iOS 15",
    bestFor: "Short daily check-ins and streaks",
    compare: "/blou-vs-flamy",
  },
];

const faqItems = [
  {
    question: "What is the best quit smoking app for iPhone?",
    answer:
      "It depends on what keeps you going. Blou suits you if seeing your own recovery helps (a photo timeline, breath checks and milestones). quitSTART suits you if you don't want to pay anything; it comes from Smokefree.gov. Smoke Free, QuitNow, Kwit and Flamy are free to download with paid extras. Whichever you pick, pair it with a quitline or medication.",
  },
  {
    question: "Is any quit smoking app for iPhone completely free?",
    answer:
      "Yes. quitSTART costs nothing. It comes from Smokefree.gov, a site created by the National Cancer Institute, and its App Store listing shows no in-app purchases. Smoke Free, QuitNow, Kwit and Flamy are free to download but sell upgrades inside the app.",
  },
  {
    question: PRICING_FAQ.question,
    answer: PRICING_FAQ.answer,
  },
  {
    question: "Which iPhones can run Blou?",
    answer:
      "Blou needs iOS 17 or later. To check your version, open Settings, then General, then About. Blou is iPhone only.",
  },
  {
    question: "How do I cancel a quit app free trial on iPhone?",
    answer:
      "Open Settings, tap your name, tap Subscriptions, pick the app, then tap Cancel Subscription. Apple says to cancel at least 24 hours before the trial ends if you don't want it to renew.",
  },
  {
    question: "Do quit smoking apps actually work?",
    answer:
      "The evidence for apps on their own is still weak. A 2019 Cochrane review rated it very low certainty, while text message programs did better. The CDC says counseling and medication together give you the best chance, so use an app alongside a quitline (1-800-QUIT-NOW) or nicotine replacement, not instead of them.",
  },
];

function Section({
  id,
  title,
  children,
  tone = "default",
}: {
  id: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "amber";
}) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200/80 bg-amber-50/90"
      : "border-teal-200 bg-white";
  return (
    <section id={id} className={`scroll-mt-24 rounded-2xl border p-6 shadow-sm ${toneClass}`}>
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-7 text-teal-900/90">{children}</p>;
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="mt-1 text-teal-600">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function QuitSmokingAppForIphonePage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[
          { name: "Best quit smoking apps", path: "/best-quit-smoking-apps" },
          { name: "Quit smoking app for iPhone", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="iPhone app guide"
        title="Best quit smoking app for iPhone"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/best-quit-smoking-apps" variant="secondary">
            Full app comparison →
          </ButtonLink>
        }
      >
        <p>
          <strong className="font-semibold text-ink">Updated November 2026.</strong> There is
          no single best quit app for every iPhone. Here is what each one costs on the App
          Store, which iOS it needs, who it suits, and how to avoid paying for a trial you
          forgot about. Blou is our app, and we judge it by the same rules.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "at-a-glance", label: "iPhone quit apps at a glance" },
          { id: "which-one", label: "Which one should you pick?" },
          { id: "blou-on-iphone", label: "What Blou does on iPhone" },
          { id: "free-trials", label: "Before you start a free trial" },
          { id: "do-apps-work", label: "Do quit apps work?" },
          { id: "first-week", label: "Using an app in your first week" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="The best quit smoking app for iPhone is the one that fits how you quit. Pick Blou if seeing your own recovery keeps you going. Pick quitSTART if you want an app from Smokefree.gov that costs nothing. Smoke Free, QuitNow, Kwit and Flamy are free to download with paid extras. Any app works better next to a quitline or nicotine replacement."
          facts={[
            "Blou needs iOS 17 or later. Free trial, then a subscription.",
            "quitSTART lists no in-app purchases on the App Store.",
            "Cancel a trial at least 24 hours before it ends (Apple).",
          ]}
        />
      </section>

      <Section id="at-a-glance" title="iPhone quit apps at a glance">
        <P>
          These facts come from each app&apos;s App Store listing, checked on {CHECKED}. Prices
          and iOS needs change, so tap through and check before you download.
        </P>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">
              Quit smoking apps for iPhone: price, in-app purchases, minimum iOS and best fit
            </caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">App</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Price on the App Store</th>
                <th scope="col" className="py-2 pr-4 font-semibold">In-app purchases</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Needs</th>
                <th scope="col" className="py-2 font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {apps.map((app) => (
                <tr key={app.name} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">
                    {app.external ? (
                      <a className={LINK} href={app.href} target="_blank" rel="noopener noreferrer">
                        {app.name}
                      </a>
                    ) : (
                      <a className={LINK} href={app.href}>
                        {app.name}
                      </a>
                    )}
                    {app.compare ? (
                      <span className="mt-1 block text-xs font-normal">
                        <Link className={LINK} href={app.compare}>
                          vs Blou
                        </Link>
                      </span>
                    ) : null}
                  </th>
                  <td className="py-3 pr-4 leading-6">{app.price}</td>
                  <td className="py-3 pr-4 leading-6">{app.inAppPurchases}</td>
                  <td className="py-3 pr-4 leading-6">{app.minIos} or later</td>
                  <td className="py-3 leading-6">{app.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <P>
          &quot;Free to download&quot; is not the same as free. Look for the &quot;In-App
          Purchases&quot; line under the Get button on the listing. It means some features
          cost money. Want longer reviews with pros and cons? See{" "}
          <Link className={LINK} href="/best-quit-smoking-apps">
            the full quit app comparison
          </Link>
          .
        </P>
      </Section>

      <Section id="which-one" title="Which one should you pick?">
        <Bullets
          items={[
            <>
              <strong>Pick Blou</strong> if you quit better when you can see proof. It shows
              your face changing in a photo timeline, your breath getting stronger, and every
              milestone on one timeline. The downsides: it is iPhone only, there is no
              community forum, and it is a subscription after the free trial.
            </>,
            <>
              <strong>Pick quitSTART</strong> if money is tight or you don&apos;t want any
              subscription. It comes from Smokefree.gov and gives tips, challenges and craving
              help. See{" "}
              <Link className={LINK} href="/blou-vs-quitstart">
                Blou vs quitSTART
              </Link>
              .
            </>,
            <>
              <strong>Pick Smoke Free</strong> if daily missions keep you busy, or you want to
              log patches and gum. See{" "}
              <Link className={LINK} href="/blou-vs-smoke-free">
                Blou vs Smoke Free
              </Link>
              .
            </>,
            <>
              <strong>Pick QuitNow</strong> if talking with other people who are quitting helps
              you. See{" "}
              <Link className={LINK} href="/blou-vs-quitnow">
                Blou vs QuitNow
              </Link>
              .
            </>,
            <>
              <strong>Want a coach?</strong> Quit Genius pairs you with human coaching, often
              through an employer or health plan. See{" "}
              <Link className={LINK} href="/blou-vs-quit-genius">
                Blou vs Quit Genius
              </Link>
              .
            </>,
          ]}
        />
        <P>
          Not sure? Try one for your first week. If you stop opening it, switch. The app you
          actually use during a craving beats the one with the longest feature list.
        </P>
      </Section>

      <InlineAppCta campaign={CAMPAIGN}>
        If seeing proof keeps you going, Blou shows it on your iPhone: a photo timeline, lung
        checks, and SOS craving help the second an urge hits.
      </InlineAppCta>

      <Section id="blou-on-iphone" title="What Blou does on iPhone">
        <P>Blou is built for iPhone and needs iOS 17 or later. It does four things:</P>
        <Bullets
          items={[
            <>
              <strong>Photo timeline.</strong> See your face change over time in one place.
            </>,
            <>
              <strong>Lung checks.</strong> Simple breath checks that show your lungs getting
              stronger.
            </>,
            <>
              <strong>SOS craving help.</strong> Help the second a craving hits, so you have
              something to do besides light up.
            </>,
            <>
              <strong>Every milestone visualized.</strong> Your whole quit, day by day, on one
              visual timeline.
            </>,
          ]}
        />
        <P>
          It also works if you are quitting vaping. Pricing: {PRICING_SHORT.toLowerCase()}. You
          can cancel anytime in the App Store. There is no Android version yet; if that&apos;s
          you, see{" "}
          <Link className={LINK} href="/quit-smoking-app-android">
            quit apps for Android
          </Link>
          .
        </P>
      </Section>

      <Section id="free-trials" title="Before you start a free trial on iPhone" tone="amber">
        <P>
          Many quit apps, Blou included, start with a free trial that turns into a paid
          subscription. Apple handles the billing, so you cancel in Settings, not in the app.
        </P>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>Open the Settings app and tap your name.</li>
          <li>Tap Subscriptions.</li>
          <li>Tap the quit app.</li>
          <li>Tap Cancel Subscription. You may need to scroll down.</li>
        </ol>
        <P>
          Apple says to cancel at least 24 hours before the trial ends if you don&apos;t want it
          to renew. A simple trick: set a reminder for two days before the trial ends, the
          moment you start it.
        </P>
      </Section>

      <Section id="do-apps-work" title="Do quit smoking apps work?">
        <P>
          Honestly, the research on apps alone is thin. A 2019 Cochrane review pooled 5
          studies with 3,079 people and found no clear difference between quit apps and
          lighter support. It rated that evidence very low certainty, meaning better studies
          could change the answer.
        </P>
        <P>
          Text message programs looked better. Across 13 studies with 14,133 people, they
          raised quit rates by about half compared with minimal support (moderate certainty).
        </P>
        <P>
          The CDC says using counseling and medication together gives you the best chance of
          quitting for good. So treat an app as one piece of your plan:
        </P>
        <Bullets
          items={[
            <>Call 1-800-QUIT-NOW for free, confidential coaching (US).</>,
            <>
              Ask a pharmacist or doctor about nicotine replacement or a quit medicine. Here is{" "}
              <Link className={LINK} href="/nrt-and-quit-smoking-app">
                how to use NRT with a quit app
              </Link>
              .
            </>,
            <>Use the app for the moments in between: cravings, slips, and checking progress.</>,
          ]}
        />
      </Section>

      <Section id="first-week" title="How to use a quit app in your first week">
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            Set your quit date in the app, then follow{" "}
            <Link className={LINK} href="/prepare-to-quit-smoking">
              the 7-day prep checklist
            </Link>
            .
          </li>
          <li>
            Open the craving tool on the first small urge each day, not just the big ones. You
            are practicing for the hard moments.
          </li>
          <li>
            Note what set off each craving: coffee, driving, stress. The{" "}
            <Link className={LINK} href="/guides/cravings">
              cravings guide
            </Link>{" "}
            has ideas for each one.
          </li>
          <li>
            If you slip, log it and keep going. A slip is not a restart. Read{" "}
            <Link className={LINK} href="/i-smoked-one-cigarette">
              what to do after one cigarette
            </Link>
            .
          </li>
        </ol>
      </Section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Want to see your own recovery on iPhone?"
        description="Blou shows proof you're healing: a photo timeline, lung checks, SOS craving help, and every milestone on one visual timeline."
      />

      <section
        id="sources"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">Sources &amp; further reading</h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-900">
          {SOURCES.map((s) => (
            <li key={s.href}>
              <a
                className="underline decoration-teal-400 underline-offset-4"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>{" "}
              <span className="text-ink-muted">· {s.publisher}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          App Store details (price, in-app purchases, minimum iOS) were checked on {CHECKED} and
          can change. This page is educational and is not medical advice. Talk to a clinician
          before starting a quit medicine.
        </p>
      </section>

      <RelatedGuides
        slugs={[
          "best-quit-smoking-apps",
          "first-week-quit-smoking",
          "quit-smoking-on-a-budget",
          "blou-vs-flamy",
          "blou-vs-quit-genius",
        ]}
      />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/how-to-quit-smoking" variant="secondary">
          Read the quit plan →
        </ButtonLink>
      </div>
    </div>
  );
}
