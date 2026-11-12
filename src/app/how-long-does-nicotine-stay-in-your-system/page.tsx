import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

const PUBLISHED = "2026-05-20";
const MODIFIED = "2026-11-12";
const CAMPAIGN = "article_how-long-does-nicotine-stay-in-your-system";
const PATH = "/how-long-does-nicotine-stay-in-your-system";

const TITLE = "How long does nicotine stay in your system?";
const DESCRIPTION =
  "Nicotine's half-life is 0.5–3 hours and cotinine's is about 15–20 hours. See what tests look for, how fast levels fall, and when withdrawal eases.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "how long does nicotine stay in your system",
    "how long does it take nicotine to leave your system",
    "how long does nicotine stay in blood",
    "nicotine urine test how long",
    "cotinine detection time",
  ],
});

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Biochemical verification of tobacco use and abstinence: cotinine protocol (half-lives and cutpoints)",
    href: "https://phenxtoolkit.org/protocols/view/91709",
    publisher: "PhenX Toolkit (RTI International, NIH-funded)",
  },
  {
    label: "Benowitz NL et al. Biochemical verification of tobacco use and abstinence: 2019 update. Nicotine Tob Res. 2020;22(7):1086–1097",
    href: "https://academic.oup.com/ntr/article/22/7/1086/5579733",
    publisher: "Nicotine & Tobacco Research (peer reviewed)",
  },
  {
    label: "Handling nicotine withdrawal and triggers when you decide to quit tobacco",
    href: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet",
    publisher: "National Cancer Institute",
  },
  {
    label: "Managing nicotine withdrawal",
    href: "https://smokefree.gov/challenges-when-quitting/withdrawal/understanding-withdrawal",
    publisher: "Smokefree.gov (National Cancer Institute)",
  },
  {
    label: "Quit smoking: benefits timeline",
    href: "https://www.nhs.uk/better-health/quit-smoking/",
    publisher: "NHS",
  },
];

const faqItems = [
  {
    question: "How long does nicotine stay in your blood?",
    answer:
      "Nicotine has a half-life of about 0.5 to 3 hours, so most of it is gone within a day. Tests usually look for cotinine instead. Cotinine has a half-life of about 15 to 20 hours, so it lasts longer. Exact detection times depend on how much you used and the lab's cutoff.",
  },
  {
    question: "How long does nicotine stay in urine?",
    answer:
      "Urine tests look for cotinine. Its half-life is about the same in urine as in blood and saliva, roughly 15 to 20 hours. By that math, levels fall by about 90 percent in 2 to 3 days after your last use. How long a test still reads positive depends on the lab's cutoff and how much you used.",
  },
  {
    question: "How long does nicotine stay in saliva?",
    answer:
      "Saliva tests also look for cotinine, which has about the same half-life in saliva as in blood and urine (roughly 15 to 20 hours). The time a test can detect it depends on the cutoff the lab uses.",
  },
  {
    question: "How long does nicotine stay in hair?",
    answer:
      "The half-life figures on this page do not apply to hair tests. If you have a hair test coming up, ask the lab or the person who ordered it what window the test covers.",
  },
  {
    question: "How long does it take nicotine to leave your body after quitting?",
    answer:
      "Nicotine itself falls fast, with a half-life of about 0.5 to 3 hours. Cotinine, its breakdown product, has a half-life of about 15 to 20 hours, so it takes a few days to fall to a small fraction of its starting level. Many people feel withdrawal peak around day 3, then ease over the first month.",
  },
  {
    question: "Does a nicotine test tell what product I used?",
    answer:
      "A cotinine test measures a breakdown product of nicotine, not the product it came from. If a test matters for your job, insurance or surgery, ask the lab what it measures and what cutoff it uses.",
  },
  {
    question: "How long do nicotine withdrawal symptoms last?",
    answer:
      "The National Cancer Institute says symptoms are usually worst in the first week, peaking around the first 3 days, and ease over the first month. Some people have symptoms for several months. Smokefree.gov says the worst symptoms last a few days to a couple of weeks.",
  },
  {
    question: "Can I make nicotine leave my body faster?",
    answer:
      "We found no reliable source showing that water, sweating or a special product speeds it up. Time is what lowers cotinine. If you are quitting, the useful step is getting through the first few days without using again.",
  },
];

const HALF_LIFE_ROWS = [
  { time: "1 day", left: "about 33–44%" },
  { time: "2 days", left: "about 11–19%" },
  { time: "3 days", left: "about 4–8%" },
  { time: "4 days", left: "about 1–4%" },
  { time: "7 days", left: "under 1%" },
];

export default function HowLongDoesNicotineStayInSystemPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description:
      "How fast nicotine and cotinine fall after your last use, what nicotine tests look for, and how that lines up with withdrawal.",
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Nicotine withdrawal" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs
        items={[{ name: "How long does nicotine stay in your system", path: PATH }]}
      />

      <ArticleHeader
        kicker="Nicotine & your body"
        title={TITLE}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/nicotine-withdrawal-timeline" variant="secondary">
            Withdrawal timeline →
          </ButtonLink>
        }
      >
        <p>
          Nicotine itself leaves your body fast. What most tests look for is cotinine, which
          lasts longer. Here is how quickly each one falls, what tests measure, and what that
          means for withdrawal.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "nicotine-vs-cotinine", label: "Nicotine vs cotinine" },
          { id: "detection-by-test", label: "Blood, urine, saliva and hair" },
          { id: "how-fast", label: "How fast levels fall" },
          { id: "factors", label: "What changes the timing" },
          { id: "withdrawal", label: "Clearance and withdrawal" },
          { id: "faq", label: "FAQ" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Nicotine has a half-life of about 0.5 to 3 hours, so most of it is gone within a day. Tests for blood, urine and saliva usually look for cotinine, a breakdown product with a half-life of about 15 to 20 hours. That means cotinine falls to a small fraction in about 3 to 4 days. How long a test still reads positive depends on the lab's cutoff and how much you used."
          facts={[
            "Nicotine half-life: about 0.5 to 3 hours.",
            "Cotinine half-life: about 15 to 20 hours, about the same in blood, urine and saliva.",
            "Withdrawal is usually worst around day 3 and eases over the first month.",
          ]}
        />
      </section>

      <section
        id="nicotine-vs-cotinine"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Nicotine vs cotinine: what a test actually looks for
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Your body breaks nicotine down into cotinine. Nicotine has a half-life of about 0.5 to
          3 hours. Cotinine has a half-life of about 15 to 20 hours.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          A half-life is the time it takes for the amount to drop by half. Because cotinine
          lasts so much longer, labs measure it instead of nicotine to see if someone has used
          tobacco or nicotine.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          A cotinine test measures a breakdown product of nicotine, not the product it came
          from. Labs also pick their own cutoff level. One review puts the usual line between
          people who use nicotine and people who do not at 3 to 10 ng/mL, and says it depends
          on things like secondhand smoke exposure.
        </p>
      </section>

      <section
        id="detection-by-test"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Blood, urine, saliva and hair tests
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm text-teal-900/90">
            <thead>
              <tr className="border-b border-teal-200 text-teal-950">
                <th className="py-2 pr-4 font-semibold">Test</th>
                <th className="py-2 pr-4 font-semibold">What it looks for</th>
                <th className="py-2 font-semibold">What to know</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-teal-100 align-top">
                <td className="py-2 pr-4 font-medium">Blood</td>
                <td className="py-2 pr-4">Cotinine (sometimes nicotine)</td>
                <td className="py-2">Cotinine half-life about 15–20 hours.</td>
              </tr>
              <tr className="border-b border-teal-100 align-top">
                <td className="py-2 pr-4 font-medium">Urine</td>
                <td className="py-2 pr-4">Cotinine</td>
                <td className="py-2">Same half-life as blood. The lab sets the cutoff.</td>
              </tr>
              <tr className="border-b border-teal-100 align-top">
                <td className="py-2 pr-4 font-medium">Saliva</td>
                <td className="py-2 pr-4">Cotinine</td>
                <td className="py-2">Same half-life as blood. The lab sets the cutoff.</td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4 font-medium">Hair</td>
                <td className="py-2 pr-4">Varies by lab</td>
                <td className="py-2">The half-life math below does not apply. Ask the lab what window it covers.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          We do not list a single &quot;number of days&quot; for each test. Cutoffs and methods
          differ by lab, and we did not find one source we could stand behind for every test
          type. The next section shows how fast cotinine falls, so you can see the shape of it.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Nicotine leaves in days, but cravings can last longer. Blou&apos;s SOS button is there
        when one hits, and your timeline counts every smoke-free day since your last cigarette.
      </InlineAppCta>

      <section
        id="how-fast"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">How fast cotinine falls</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          This is simple math from the half-life of about 15 to 20 hours. Each half-life cuts
          the amount in half. It is an illustration, not a test result.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[20rem] text-left text-sm text-teal-900/90">
            <thead>
              <tr className="border-b border-teal-200 text-teal-950">
                <th className="py-2 pr-4 font-semibold">After your last use</th>
                <th className="py-2 font-semibold">Cotinine left (estimate)</th>
              </tr>
            </thead>
            <tbody>
              {HALF_LIFE_ROWS.map((row) => (
                <tr key={row.time} className="border-b border-teal-100 last:border-0">
                  <td className="py-2 pr-4 font-medium">{row.time}</td>
                  <td className="py-2">{row.left}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Whether a test still reads positive depends on where you started and on the lab&apos;s
          cutoff. Someone who used a lot starts higher, so it takes longer to drop below the
          line.
        </p>
      </section>

      <section
        id="factors"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">What changes the timing</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>How much you used.</strong> A higher starting level takes longer to fall
              under a cutoff.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>The lab&apos;s cutoff.</strong> A review puts typical cutpoints at 3 to
              10 ng/mL, and they shift with secondhand smoke exposure.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>The sample type.</strong> Blood, urine, saliva and hair are different
              tests. Ask what yours measures.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="mt-1 text-teal-600">•</span>
            <span>
              <strong>Your own body.</strong> People break nicotine down at different speeds, so
              the 15 to 20 hour figure is a typical value, not a promise.
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          Blou cannot speed any of this up, and nothing on this page is advice for passing a
          test. If a test matters, ask the lab or the person who ordered it.
        </p>
      </section>

      <section
        id="withdrawal"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Nicotine clearance and the withdrawal timeline
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/90">
          Nicotine falls fast, so withdrawal starts early. Here is what the public health
          sources say.
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-teal-900/90">
          <li className="flex gap-2">
            <span className="mt-1 font-bold text-teal-700">First hours:</span>
            <span>
              Cravings can start within an hour or two of your last use (National Cancer
              Institute).
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 font-bold text-teal-700">8 to 48 hours:</span>
            <span>
              Blood carbon monoxide is halved at 8 hours and matches a non-smoker&apos;s at 48
              hours (NHS). See the{" "}
              <Link className={LINK} href="/guides/what-happens-after-1-day">
                1-day milestone
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 font-bold text-teal-700">Around day 3:</span>
            <span>
              Symptoms usually peak around the first 3 days (National Cancer Institute). Read{" "}
              <Link className={LINK} href="/guides/what-happens-after-3-days">
                what happens after 3 days
              </Link>
              .
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 font-bold text-teal-700">Week 1 to 2:</span>
            <span>
              Smokefree.gov says the worst symptoms last a few days to a couple of weeks, and
              the first week is when relapse risk is highest.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 font-bold text-teal-700">First month:</span>
            <span>
              Symptoms ease over the first month. Some people have them for several months
              (National Cancer Institute).
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-7 text-teal-900/90">
          For the full picture, see the{" "}
          <Link className={LINK} href="/nicotine-withdrawal-timeline">
            nicotine withdrawal timeline
          </Link>
          , the{" "}
          <Link className={LINK} href="/quit-smoking-timeline">
            quit smoking timeline
          </Link>
          , or{" "}
          <Link className={LINK} href="/zyn-withdrawal">
            Zyn withdrawal
          </Link>{" "}
          if you use pouches.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

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
          This page is educational and is not medical advice. Half-life figures are typical
          values and vary from person to person. If you have a health condition, are pregnant,
          or take medication, talk to a clinician before changing how you use nicotine.
        </p>
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/guides/what-happens-after-3-days" variant="secondary">
          Day 3 milestone guide →
        </ButtonLink>
        <ButtonLink href="/quit-smoking-app-for-iphone" variant="secondary">
          Quit smoking app for iPhone →
        </ButtonLink>
      </div>
    </div>
  );
}
