import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { QuickAnswerBox } from "@/components/marketing/QuickAnswerBox";
import { EmbedCalculatorSnippet } from "@/components/blou/EmbedCalculatorSnippet";
import { FaqSection } from "@/components/blou/FaqSection";
import { PackYearCalculator } from "@/components/blou/PackYearCalculator";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { ButtonLink } from "@/components/ui/Button";
import { buildEmbedCode } from "@/lib/embed";
import { buildArticleJsonLd, buildHowToJsonLd, buildMetadata, buildWebApplicationJsonLd } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER, SITE_URL } from "@/lib/site";

const PATH = "/tools/pack-year-calculator";
const CAMPAIGN = "tool_pack-year-calculator";
const PUBLISHED = "2026-10-15";
const MODIFIED = "2026-10-28";
const TITLE = "Pack Year Calculator: How to Calculate Pack Years";
const DESCRIPTION =
  "Use this pack year calculator to work out your smoking history in pack years, see the formula with examples, and check lung cancer screening criteria.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  keywords: [
    "pack year calculator",
    "pack years",
    "how to calculate pack years",
    "how to work out pack years",
    "pack years of smoking calculator",
    "pack year smoker",
    "pack year formula",
    "pack year smoking history",
    "20 pack year smoking history",
    "lung cancer screening eligibility",
  ],
});

const SOURCES = [
  {
    label: "Screening for Lung Cancer",
    publisher: "CDC",
    href: "https://www.cdc.gov/lung-cancer/screening/index.html",
  },
  {
    label: "Benefits of Quitting",
    publisher: "CDC",
    href: "https://www.cdc.gov/tobacco/about/benefits-of-quitting.html",
  },
  {
    label: "Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement (JAMA, 2021)",
    publisher: "USPSTF",
    href: "https://pubmed.ncbi.nlm.nih.gov/33687470/",
  },
  {
    label: "Lung Cancer: Screening (2021 recommendation)",
    publisher: "USPSTF",
    href: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening",
  },
  {
    label: "Screening for lung cancer: 2023 guideline update (CA: A Cancer Journal for Clinicians, 2024)",
    publisher: "American Cancer Society",
    href: "https://pubmed.ncbi.nlm.nih.gov/37909877/",
  },
  {
    label: "Can Lung Cancer Be Found Early?",
    publisher: "American Cancer Society",
    href: "https://www.cancer.org/cancer/types/lung-cancer/detection-diagnosis-staging/detection.html",
  },
  {
    label: "Lung cancer screening",
    publisher: "NHS",
    href: "https://www.nhs.uk/conditions/lung-cancer-screening/",
  },
] as const;

const CHART_CIGARETTES = [5, 10, 15, 20, 30, 40] as const;
const CHART_YEARS = [10, 20, 30, 40] as const;

const levels = [
  { py: 20, means: "1 pack a day for 20 years, or 2 packs a day for 10 years" },
  { py: 30, means: "1 pack a day for 30 years, or 15 cigarettes a day for 40 years" },
  { py: 40, means: "1 pack a day for 40 years, or 2 packs a day for 20 years" },
] as const;

const faqItems = [
  {
    question: "What is a pack year?",
    answer:
      "A pack year is a way to measure how much you have smoked over time. One pack year means smoking an average of one pack (20 cigarettes) a day for one year.",
  },
  {
    question: "How do you calculate pack years?",
    answer:
      "Multiply the packs you smoked per day by the years you smoked. If you count cigarettes, divide cigarettes per day by 20 first. For example, 10 cigarettes a day is half a pack, so 10 a day for 30 years is 15 pack years.",
  },
  {
    question: "How do I work out pack years if I smoked on and off?",
    answer:
      "Work out each smoking period on its own, then add them up. Leave out the years you did not smoke. For example, 20 a day for 10 years, a 5-year break, then 10 a day for 6 years is 10 + 3 = 13 pack years.",
  },
  {
    question: "What does a 20 pack year smoking history mean?",
    answer:
      "It means you smoked the same as one pack a day for 20 years. Two packs a day for 10 years is also 20 pack years. In the US, 20 pack years is the smoking history used in lung cancer screening guidelines.",
  },
  {
    question: "Do cigars, roll-your-own or vapes count?",
    answer:
      "The pack year formula is built for cigarettes, and there is no standard way to convert other products. If you smoke roll-your-own, cigars or a pipe, or you vape, tell your doctor what and how much. They can judge your risk.",
  },
  {
    question: "Who should get lung cancer screening?",
    answer:
      "In the US, the USPSTF and CDC recommend a yearly low-dose CT scan for adults aged 50 to 80 with 20 or more pack years who smoke now or quit in the past 15 years. The American Cancer Society uses the same age and pack years but no quit-time limit. In England, the NHS offers lung health checks to people aged 55 to 74 who have ever smoked, in areas where checks run.",
  },
  {
    question: "Does quitting lower my lung cancer risk if I have many pack years?",
    answer:
      "Yes. Your pack years stay the same, but your risk falls the longer you stay smoke-free. The CDC says the added risk of lung cancer drops by half 10 to 15 years after quitting.",
  },
] as const;

const embedCode = buildEmbedCode({
  url: `${SITE_URL}${PATH}`,
  title: "Pack-year calculator",
  height: 980,
});

const linkClass = "text-ink underline decoration-accent/50 underline-offset-4";

function formatPy(n: number) {
  return String(Math.round(n * 100) / 100);
}

export default function PackYearCalculatorPage() {
  const toolJsonLd = buildWebApplicationJsonLd({
    name: "Pack year calculator",
    description: "Calculates smoking pack years across one or more periods and checks lung cancer screening criteria.",
    path: PATH,
  });
  const howToJsonLd = buildHowToJsonLd({
    name: "How to calculate pack years",
    description: "Work out your smoking history in pack years.",
    path: PATH,
    steps: [
      { name: "Convert to packs per day", text: "Divide the cigarettes you smoked per day by 20." },
      { name: "Multiply by years", text: "Multiply packs per day by the number of years you smoked at that rate." },
      { name: "Add each period", text: "If your smoking changed over time, repeat for each period and add the results." },
    ],
  });
  const articleJsonLd = buildArticleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    isMedical: true,
    citation: SOURCES.map((s) => ({ name: s.label, url: s.href, publisher: s.publisher })),
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={[toolJsonLd, howToJsonLd, articleJsonLd]} />
      <Breadcrumbs
        items={[
          { name: "Tools", path: "/tools" },
          { name: "Pack-year calculator", path: PATH },
        ]}
      />

      <ArticleHeader
        kicker="Free tool"
        title="Pack year calculator"
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        campaign={CAMPAIGN}
      >
        <p>
          This pack year calculator works out your smoking history in pack years, even if the amount
          you smoked changed over time. It also shows if you fit the US or NHS lung cancer screening
          rules. It runs in your browser, and nothing is saved.
        </p>
      </ArticleHeader>

      <section id="quick-answer" className="scroll-mt-24">
        <QuickAnswerBox
          answer="To calculate pack years, multiply the packs you smoked per day by the years you smoked. A pack is 20 cigarettes. For example, 1 pack a day for 20 years is 20 pack years, and so is 10 cigarettes a day for 40 years."
          facts={[
            "Pack years = packs per day × years smoked.",
            "Count cigarettes? Divide by 20 to get packs per day.",
            "Smoking changed over time? Work out each period and add them up.",
            "US screening guidelines use 20 or more pack years (CDC, USPSTF).",
          ]}
        />
      </section>

      <section id="calculator" className="scroll-mt-24">
        <PackYearCalculator />
      </section>

      <TableOfContents
        items={[
          { id: "how-to-calculate", label: "How to calculate pack years" },
          { id: "chart", label: "Pack years chart" },
          { id: "levels", label: "What 20, 30 and 40 pack years mean" },
          { id: "screening", label: "Pack years and lung cancer screening" },
          { id: "quitting", label: "Does quitting still help?" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="how-to-calculate" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">How to calculate pack years</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          <strong className="text-ink">Pack years = packs smoked per day × years smoked.</strong> The CDC
          defines one pack year as smoking an average of one pack a day for one year.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-ink-muted">
          <li>
            <strong className="text-ink">Turn cigarettes into packs.</strong> Divide the cigarettes you
            smoked each day by 20. Ten a day is 0.5 packs.
          </li>
          <li>
            <strong className="text-ink">Multiply by years.</strong> Multiply packs per day by the years
            you smoked that much.
          </li>
          <li>
            <strong className="text-ink">Add each period.</strong> If your smoking changed, do steps 1
            and 2 for each period and add the totals. Skip the years you did not smoke.
          </li>
        </ol>
        <p className="mt-4 text-sm leading-7 text-ink-muted">
          <strong className="text-ink">Worked example:</strong> you smoked 15 a day for 10 years, then
          30 a day for 10 years. That is 0.75 × 10 = 7.5, plus 1.5 × 10 = 15. Your total is 22.5 pack
          years.
        </p>
      </section>

      <section id="chart" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Pack years chart: common values</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Find how many cigarettes you smoked a day, then read across to how many years you smoked.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[22rem] text-left text-sm">
            <caption className="sr-only">Pack years by cigarettes per day and years smoked</caption>
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">Cigarettes a day</th>
                {CHART_YEARS.map((y) => (
                  <th key={y} scope="col" className="py-2 pr-4 font-semibold">
                    {y} years
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              {CHART_CIGARETTES.map((c) => (
                <tr key={c} className="border-b border-line last:border-0">
                  <th scope="row" className="py-2 pr-4 font-medium text-ink">
                    {c} ({formatPy(c / 20)} {c === 20 ? "pack" : "packs"})
                  </th>
                  {CHART_YEARS.map((y) => (
                    <td key={y} className="py-2 pr-4">
                      {formatPy((c / 20) * y)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="levels" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">What 20, 30 and 40 pack years mean</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Different habits can add up to the same number. The CDC gives this example: one pack a day for
          20 years and two packs a day for 10 years are both 20 pack years.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-ink-muted">
          {levels.map((l) => (
            <li key={l.py}>
              <strong className="text-ink">{l.py} pack years:</strong> {l.means}.
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          In the US, 20 pack years is the line used for lung cancer screening. A number above it does not
          mean you are sick. It means it is worth a talk with your doctor.
        </p>
      </section>

      <section id="screening" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Pack years and lung cancer screening</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Screening uses a low-dose CT scan once a year. Each guideline sets its own rules:
        </p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-ink-muted">
          <li>
            <strong className="text-ink">USPSTF and CDC (US):</strong> age 50 to 80, 20 or more pack
            years, and you smoke now or quit in the past 15 years. Screening stops once you have been
            smoke-free for 15 years.
          </li>
          <li>
            <strong className="text-ink">American Cancer Society (US):</strong> age 50 to 80, you smoke
            or used to smoke, and 20 or more pack years. There is no limit on how long ago you quit.
          </li>
          <li>
            <strong className="text-ink">NHS (England):</strong> lung health checks for people aged 55 to
            74 who have ever smoked and are registered with a GP. The checks only run in some parts of
            England so far.
          </li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Meeting the rules is a reason to talk to your doctor, not a diagnosis. Your doctor will also
          look at your overall health. If you are in your 50s or older, our guide to{" "}
          <Link className={linkClass} href="/quitting-smoking-after-50">
            quitting smoking after 50
          </Link>{" "}
          covers what screening means once you stop.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Every year without smoking lowers your lung cancer risk. Blou&apos;s lung checks and timeline let
        you watch your own recovery from the first smoke-free day.
      </InlineAppCta>

      <section id="quitting" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Does quitting still help if you have many pack years?</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Yes. Your pack years never go down, but your risk does. The CDC says the added risk of lung
          cancer drops by half 10 to 15 years after you quit.
        </p>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Other changes start much sooner. See{" "}
          <Link className={linkClass} href="/can-lungs-heal-after-smoking">
            how your lungs heal after smoking
          </Link>
          , the full{" "}
          <Link className={linkClass} href="/quit-smoking-timeline">
            quit smoking timeline
          </Link>
          , and{" "}
          <Link className={linkClass} href="/smokers-lungs-vs-healthy-lungs">
            smokers&apos; lungs vs healthy lungs
          </Link>
          .
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EmbedCalculatorSnippet code={embedCode} />

      <EndAppCta campaign={CAMPAIGN} />

      <section id="sources" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Sources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {SOURCES.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {s.publisher}: {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          Sources checked October 28, 2026. This calculator is educational and does not replace medical
          advice.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/can-lungs-heal-after-smoking" variant="secondary">
          Can your lungs heal?
        </ButtonLink>
        <ButtonLink href="/quit-smoking-timeline" variant="secondary">
          Quit smoking timeline
        </ButtonLink>
        <ButtonLink href="/tools" variant="secondary">
          All tools
        </ButtonLink>
      </div>
    </div>
  );
}
