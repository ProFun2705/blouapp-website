import type { Metadata } from "next";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { EmbedCalculatorSnippet } from "@/components/blou/EmbedCalculatorSnippet";
import { FaqSection } from "@/components/blou/FaqSection";
import { PackYearCalculator } from "@/components/blou/PackYearCalculator";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { ButtonLink } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Card";
import { buildEmbedCode } from "@/lib/embed";
import { buildHowToJsonLd, buildMetadata, buildWebApplicationJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const PATH = "/tools/pack-year-calculator";
const CAMPAIGN = "tool_pack-year-calculator";

export const metadata: Metadata = buildMetadata({
  title: "Pack-year calculator: smoking history + screening",
  description:
    "Calculate your pack-years of smoking, even if your habit changed over time, and see whether you fit USPSTF, ACS, or NHS lung cancer screening criteria.",
  path: PATH,
  keywords: [
    "pack years calculator",
    "calculate pack years smoking",
    "pack year smoker",
    "pack year history",
    "pack year formula",
    "lung cancer screening eligibility",
  ],
});

const sources = [
  {
    name: "US Preventive Services Task Force: Lung cancer screening (2021)",
    url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening",
  },
  {
    name: "American Cancer Society: Can lung cancer be found early?",
    url: "https://www.cancer.org/cancer/types/lung-cancer/detection-diagnosis-staging/detection.html",
  },
  {
    name: "NHS: Lung cancer screening",
    url: "https://www.nhs.uk/conditions/lung-cancer-screening/",
  },
] as const;

const examples = [
  { history: "1 pack a day for 20 years", py: 20 },
  { history: "10 cigarettes a day for 40 years", py: 20 },
  { history: "2 packs a day for 15 years", py: 30 },
  { history: "15 a day for 10 years, then 30 a day for 10 years", py: 22.5 },
] as const;

const faqItems = [
  {
    question: "What is a pack-year?",
    answer:
      "A pack-year is a way to measure how much you have smoked over time. One pack-year equals smoking an average of 20 cigarettes (one pack) a day for one year.",
  },
  {
    question: "How do you calculate pack-years?",
    answer:
      "Multiply the number of packs you smoked per day by the number of years you smoked. If you smoked cigarettes rather than counting packs, divide cigarettes per day by 20 first. If your smoking changed over time, work out each period separately and add them together.",
  },
  {
    question: "What does a 20 pack-year smoking history mean?",
    answer:
      "It means the equivalent of a pack a day for 20 years, for example 10 cigarettes a day for 40 years, or 2 packs a day for 10 years. In the US, 20 pack-years is the threshold used in lung cancer screening guidelines.",
  },
  {
    question: "Who should get lung cancer screening?",
    answer:
      "In the US, the USPSTF recommends yearly low-dose CT screening for adults aged 50 to 80 with at least 20 pack-years who smoke now or quit within the past 15 years. The American Cancer Society uses the same age and pack-year limits but does not stop screening based on years since quitting. In England, the NHS offers lung health checks to people aged 55 to 74 who have ever smoked, where the programme runs.",
  },
  {
    question: "Do years I didn't smoke count?",
    answer:
      "No. Only count the years you actually smoked. If you quit for a few years and started again, leave the smoke-free years out.",
  },
  {
    question: "Does quitting lower my lung cancer risk if I have many pack-years?",
    answer:
      "Yes. Risk falls the longer you stay smoke-free: after about 10 years, lung cancer risk is around half that of someone who still smokes. See /quit-smoking-timeline for the full recovery timeline.",
  },
] as const;

const embedCode = buildEmbedCode({
  url: `${SITE_URL}${PATH}`,
  title: "Pack-year calculator",
  height: 980,
});

export default function PackYearCalculatorPage() {
  const toolJsonLd = buildWebApplicationJsonLd({
    name: "Pack-year calculator",
    description: "Calculates smoking pack-years across one or more periods and checks lung cancer screening criteria.",
    path: PATH,
  });
  const howToJsonLd = buildHowToJsonLd({
    name: "How to calculate pack-years",
    description: "Work out your smoking history in pack-years.",
    path: PATH,
    steps: [
      { name: "Convert to packs per day", text: "Divide the cigarettes you smoked per day by 20." },
      { name: "Multiply by years", text: "Multiply packs per day by the number of years you smoked at that rate." },
      { name: "Add each period", text: "If your smoking changed over time, repeat for each period and add the results." },
    ],
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={[toolJsonLd, howToJsonLd]} />
      <Breadcrumbs
        items={[
          { name: "Tools", path: "/tools" },
          { name: "Pack-year calculator", path: PATH },
        ]}
      />

      <header className="rounded-panel border border-line bg-surface p-6 shadow-card md:p-8">
        <Kicker>Free tool</Kicker>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">Pack-year calculator</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">
          Work out your smoking history in pack-years, even if the amount you smoked changed over the
          years, and see whether you fall within the US (USPSTF, American Cancer Society) or NHS lung
          cancer screening criteria. Everything runs in your browser.
        </p>
      </header>

      <section id="calculator" className="scroll-mt-24">
        <PackYearCalculator />
      </section>

      <TableOfContents
        items={[
          { id: "formula", label: "The pack-year formula" },
          { id: "examples", label: "Examples" },
          { id: "screening", label: "What pack-years mean for screening" },
          { id: "faq", label: "Frequently asked questions" },
          { id: "sources", label: "Sources" },
        ]}
      />

      <section id="formula" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">The pack-year formula</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          <strong className="text-ink">Pack-years = packs smoked per day × years smoked.</strong> A pack
          is 20 cigarettes, so if you count cigarettes, divide by 20 first. The USPSTF defines one
          pack-year as the equivalent of smoking an average of 20 cigarettes a day for a year.
        </p>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          If you smoked different amounts at different times, calculate each period and add them up.
          Leave out any years you didn&apos;t smoke.
        </p>
      </section>

      <section id="examples" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Pack-year examples</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[22rem] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-ink">
                <th scope="col" className="py-2 pr-4 font-semibold">Smoking history</th>
                <th scope="col" className="py-2 font-semibold">Pack-years</th>
              </tr>
            </thead>
            <tbody className="text-ink-muted">
              {examples.map((e) => (
                <tr key={e.history} className="border-b border-line last:border-0">
                  <td className="py-2 pr-4">{e.history}</td>
                  <td className="py-2 font-medium text-ink">{e.py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="screening" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">What your pack-years mean for lung cancer screening</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-ink-muted">
          <li>
            <strong className="text-ink">USPSTF (US, 2021):</strong> yearly low-dose CT for adults aged 50
            to 80 with a 20 pack-year history who smoke now or quit within the past 15 years. Screening
            stops once you have not smoked for 15 years.
          </li>
          <li>
            <strong className="text-ink">American Cancer Society (US):</strong> yearly low-dose CT for
            people aged 50 to 80 who smoke or used to smoke and have at least a 20 pack-year history, with
            no cut-off for years since quitting.
          </li>
          <li>
            <strong className="text-ink">NHS (England):</strong> lung health checks for people aged 55 to
            74 who have ever smoked, in areas where the programme runs.
          </li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Meeting the criteria is a reason to talk to your doctor, not a diagnosis. Your doctor will also
          consider your overall health.
        </p>
      </section>

      <InlineAppCta campaign={CAMPAIGN}>
        Every year without smoking lowers your lung cancer risk. Blou&apos;s lung checks and timeline let
        you watch your own recovery from the first smoke-free day.
      </InlineAppCta>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EmbedCalculatorSnippet code={embedCode} />

      <EndAppCta campaign={CAMPAIGN} />

      <section id="sources" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Sources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This calculator is educational and does not replace medical advice.
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
