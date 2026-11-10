import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";

const LINK =
  "font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950";
const CARD = "scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm";
const H2 = "text-xl font-semibold text-teal-950";
const BODY = "mt-3 text-sm leading-7 text-teal-900/90";

const PUBLISHED = "2026-05-13";
const MODIFIED = "2026-11-10";
const CAMPAIGN = "article_quit-vaping";

export const metadata: Metadata = buildMetadata({
  title: "How to quit vaping: a practical plan (2026)",
  description:
    "Quit vaping with a clear plan: set a stop date, handle nicotine urges, replace hand-to-mouth cues, and use a tracker app so progress stays visible.",
  path: "/quit-vaping",
  type: "article",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "quit vaping",
    "how to quit vaping",
    "stop vaping",
    "vaping cessation",
    "nicotine vape quit",
    "best way to quit vaping",
    "quitting vaping cold turkey",
  ],
});

type Source = { label: string; href: string; publisher: string };

const SOURCES: Source[] = [
  {
    label: "Quitting e-cigarettes",
    href: "https://www.cdc.gov/tobacco/e-cigarettes/quitting.html",
    publisher: "Centers for Disease Control and Prevention",
  },
  {
    label: "Handling nicotine withdrawal and triggers when you decide to quit tobacco",
    href: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet",
    publisher: "National Cancer Institute",
  },
  {
    label: "Nicotine and tobacco withdrawal (Medical Encyclopedia)",
    href: "https://medlineplus.gov/ency/article/000953.htm",
    publisher: "MedlinePlus, U.S. National Library of Medicine",
  },
  {
    label: "Vaping to quit smoking",
    href: "https://www.nhs.uk/better-health/quit-smoking/vaping-to-quit-smoking/",
    publisher: "NHS",
  },
  {
    label: "EX Program, a free digital quitting program",
    href: "https://truthinitiative.org/",
    publisher: "Truth Initiative",
  },
];

const faqItems = [
  {
    question: "Can I quit vaping cold turkey?",
    answer:
      "Yes. Many people stop all at once. Pick a date, clear out your devices and pods, and plan for the first days, when cravings and irritability are strongest. If stopping all at once feels like too much, cutting down on a set schedule and then stopping on a fixed date is another option.",
  },
  {
    question: "What is the best way to quit vaping?",
    answer:
      "The CDC says the best odds come from combining support with a plan. Make a quit plan, talk with a health care provider about your options, and use counseling or a quitline such as 1-800-QUIT-NOW. The best way is the one you will actually stick with.",
  },
  {
    question: "Is quitting vaping harder than quitting cigarettes?",
    answer:
      "The CDC says quitting vaping is likely similar to quitting smoking, because both involve nicotine addiction. Some people find the constant, easy access of a vape makes it feel harder. The same tools work: a stop date, a plan for cues, and support.",
  },
  {
    question: "Will I get withdrawal symptoms if I quit vaping?",
    answer:
      "You might. The National Cancer Institute lists cravings, irritability, trouble concentrating, and sleep changes as common nicotine withdrawal symptoms. See /vape-withdrawal-symptoms for what to expect and /quit-vaping-timeline for how it usually unfolds.",
  },
  {
    question: "Can a quit app help with vaping?",
    answer:
      "It can help with the parts of quitting that are about habit and motivation. Blou supports quitting vaping. It gives you SOS craving help, lung checks, a photo timeline, and a visual timeline of your milestones. It does not replace medical advice or nicotine treatment.",
  },
  {
    question: "Should I use nicotine replacement to quit vaping?",
    answer:
      "Ask a clinician or pharmacist. The CDC says the FDA has approved seven medications to help people quit smoking and has not approved any e-cigarette as a quit aid. See /nrt-and-quit-smoking-app for how replacement products fit with a quit plan.",
  },
];

const stepsRows = [
  {
    option: "Cold turkey",
    fit: "You want a clean break and can handle a rough first few days.",
    watch: "Cravings and irritability hit all at once.",
  },
  {
    option: "Taper, then stop",
    fit: "A sudden stop feels too hard, or you vape all day.",
    watch: "Without a firm end date, tapering can drift for months.",
  },
];

export default function QuitVapingPage() {
  const articleJsonLd = buildArticleJsonLd({
    title: "How to quit vaping: a practical plan (2026)",
    description:
      "A practical plan for stopping vaping: stop date, urges, cues, and tracking.",
    path: "/quit-vaping",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    about: { "@type": "MedicalCondition", name: "Tobacco use disorder" },
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />

      <Breadcrumbs items={[{ name: "Quit vaping", path: "/quit-vaping" }]} />

      <ArticleHeader
        kicker="Vaping cessation"
        title="How to quit vaping"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
        actions={
          <ButtonLink href="/how-to-quit-smoking" variant="secondary">
            Core quit plan →
          </ButtonLink>
        }
      >
        <p>
          To quit vaping, pick a stop date, clear out your devices, plan a swap
          for each cue, and line up free support. Cravings come in waves, so
          plan for the first days and keep going if you slip.
        </p>
      </ArticleHeader>

      <TableOfContents
        items={[
          { id: "quick-answer", label: "Quick answer" },
          { id: "plan", label: "Step-by-step plan" },
          { id: "method", label: "Cold turkey or taper" },
          { id: "withdrawal", label: "What withdrawal feels like" },
          { id: "urge-plan", label: "When an urge hits" },
          { id: "nrt", label: "Nicotine replacement" },
          { id: "free-help", label: "Free help" },
          { id: "dual-use", label: "Still smoking too?" },
          { id: "slip", label: "If you slip" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="Pick a stop date in the next 7 to 14 days. Decide if you will stop all at once or taper to that date. Get rid of devices and spare pods, plan a swap for your three strongest cues, and tell one person. Add free support such as 1-800-QUIT-NOW."
          facts={[
            "The CDC says quitting vaping is likely similar to quitting smoking, because both involve nicotine addiction.",
            "Cravings are strongest in the first days. A plan for them matters more than willpower.",
            "Vaping is not a quit method. The NHS says the healthiest option is not to smoke or vape.",
          ]}
        />
      </section>

      <section id="plan" className={CARD}>
        <h2 className={H2}>Step-by-step plan to quit vaping</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            <strong>Pick a stop date.</strong> Choose a day in the next two weeks. Write it
            down. A calm day beats a perfect one. Our{" "}
            <Link className={LINK} href="/prepare-to-quit-smoking">
              prepare to quit guide
            </Link>{" "}
            walks through the setup.
          </li>
          <li>
            <strong>Choose how you will stop.</strong> Cold turkey or a short taper. See the
            table below.
          </li>
          <li>
            <strong>Clear out your devices.</strong> On your stop date, throw away your vape,
            pods, and chargers. If they are within reach, a bad moment gets harder.
          </li>
          <li>
            <strong>Name your top three cues.</strong> Common ones are stress, driving,
            coffee, and being around friends who vape.
          </li>
          <li>
            <strong>Plan one swap for each cue.</strong> Pick something you will really do in
            two minutes: gum, water, a short walk, or brushing your teeth.
          </li>
          <li>
            <strong>Line up support.</strong> Tell one person your date. Save a quitline
            number in your phone. Read the{" "}
            <Link className={LINK} href="/nicotine-withdrawal-timeline">
              nicotine withdrawal timeline
            </Link>{" "}
            so the first week holds no surprises.
          </li>
        </ol>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Blou supports quitting vaping. Use SOS craving help the second an urge hits,
        and watch every smoke-free day add up on one visual timeline.
      </InlineAppCta>

      <section id="method" className={CARD}>
        <h2 className={H2}>Cold turkey or tapering?</h2>
        <p className={BODY}>
          Both work for some people. What matters is that you end on a fixed date. If you
          want more on the all-at-once route, read{" "}
          <Link className={LINK} href="/quit-smoking-cold-turkey">
            quitting cold turkey
          </Link>
          .
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <caption className="sr-only">Cold turkey compared with tapering to quit vaping</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">Method</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Fits you if</th>
                <th scope="col" className="py-2 font-semibold">Watch out for</th>
              </tr>
            </thead>
            <tbody className="align-top text-ink-muted">
              {stepsRows.map((row) => (
                <tr key={row.option} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pr-4 font-medium text-ink">{row.option}</th>
                  <td className="py-3 pr-4 leading-6">{row.fit}</td>
                  <td className="py-3 leading-6">{row.watch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="withdrawal" className={CARD}>
        <h2 className={H2}>What withdrawal feels like</h2>
        <p className={BODY}>
          Expect some nicotine withdrawal. The National Cancer Institute lists cravings,
          irritability, trouble concentrating, and sleep changes among the common
          symptoms. MedlinePlus covers them too. They are uncomfortable, and they do
          pass.
        </p>
        <p className={BODY}>
          For a full list, see{" "}
          <Link className={LINK} href="/vape-withdrawal-symptoms">
            vape withdrawal symptoms
          </Link>
          . For what usually happens week by week, see the{" "}
          <Link className={LINK} href="/quit-vaping-timeline">
            quit vaping timeline
          </Link>
          .
        </p>
      </section>

      <section id="urge-plan" className={CARD}>
        <h2 className={H2}>When an urge hits</h2>
        <p className={BODY}>
          Start a 3-minute timer. Stand up, drink water, and do one swap you chose ahead
          of time. When the timer ends, check how you feel. Most urges ease if you wait
          them out. More ideas are in our{" "}
          <Link className={LINK} href="/guides/cravings">
            craving guide
          </Link>
          .
        </p>
      </section>

      <section id="nrt" className={CARD}>
        <h2 className={H2}>Does nicotine replacement help?</h2>
        <p className={BODY}>
          It can, and it is a medical choice. The CDC says the FDA has approved seven
          medications to help people quit smoking. The FDA has not approved any
          e-cigarette to help people quit. Talk with a clinician or pharmacist, especially
          if you are pregnant, young, or have a heart or lung condition.
        </p>
        <p className={BODY}>
          Our guide to{" "}
          <Link className={LINK} href="/nrt-and-quit-smoking-app">
            nicotine replacement and a quit app
          </Link>{" "}
          shows how the two fit together.
        </p>
      </section>

      <section id="free-help" className={CARD}>
        <h2 className={H2}>Free help to quit vaping</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-teal-900/90">
          <li>
            <strong>1-800-QUIT-NOW:</strong> a free, confidential quitline with trained
            coaches, listed by the CDC.
          </li>
          <li>
            <strong>Text and online programs:</strong> the CDC lists SmokefreeTXT, Smokefree.gov,
            and the quitSTART app.
          </li>
          <li>
            <strong>EX Program:</strong> a free digital quitting program from Truth
            Initiative and Mayo Clinic for any tobacco or nicotine product.
          </li>
        </ul>
      </section>

      <section id="dual-use" className="scroll-mt-24 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-6 shadow-sm">
        <h2 className={H2}>Still smoking cigarettes too?</h2>
        <p className={BODY}>
          The CDC says using e-cigarettes and cigarettes together is not an effective way
          to protect your health. If you do both, read{" "}
          <Link className={LINK} href="/vaping-and-smoking-together">
            vaping and smoking together
          </Link>{" "}
          and pick one clear quit plan, ideally with a clinician.
        </p>
      </section>

      <section id="slip" className={CARD}>
        <h2 className={H2}>If you slip</h2>
        <p className={BODY}>
          One puff does not erase your progress. Ask what set it off, throw away any
          device you bought, and go back to your plan today. Many people need more than
          one try. Each attempt teaches you which cues matter most.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta campaign={CAMPAIGN} />

      <section id="sources" className={CARD}>
        <h2 className={H2}>Sources &amp; further reading</h2>
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
          This page is educational and is not medical advice. Blou is not a medical device and
          does not replace medical care. If you have a health condition, are pregnant, or take
          medication, talk to a clinician before changing how you use nicotine.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/quit-smoking-app-for-iphone" variant="secondary">
          Quit app for iPhone →
        </ButtonLink>
        <ButtonLink href="/nrt-and-quit-smoking-app" variant="secondary">
          NRT + quit app →
        </ButtonLink>
      </div>
    </div>
  );
}
