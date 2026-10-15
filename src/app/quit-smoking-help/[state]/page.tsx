import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/marketing/ArticleHeader";
import { EndAppCta, InlineAppCta } from "@/components/marketing/AppCta";
import { FaqSection } from "@/components/blou/FaqSection";
import { MoneySavedCalculator } from "@/components/blou/MoneySavedCalculator";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";
import {
  MEDIAN_SMOKING_RATE,
  NATIONAL_QUITLINE,
  STATE_DATA_META,
  US_STATES,
  formatUsd,
  stateInSentence,
  usStateBySlug,
  type UsState,
} from "@/lib/stateData";

type Props = { params: Promise<{ state: string }> };

const PUBLISHED = "2026-10-15";

export function generateStaticParams() {
  return US_STATES.map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const s = usStateBySlug[slug];
  if (!s) return {};
  const where = stateInSentence(s.name);
  const program = s.quitline?.programName ?? "the state quitline";
  return buildMetadata({
    title: `Free help to quit smoking in ${s.name}`,
    description: `${program}, free nicotine patches, and what smoking costs in ${where}: ${formatUsd(s.cigaretteTaxPerPack)} state tax per pack. Sourced from CDC data.`.slice(0, 155),
    path: `/quit-smoking-help/${s.slug}`,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    keywords: [
      `quit smoking ${s.name}`,
      `free nicotine patches ${s.name}`,
      `${s.name} quitline`,
      `cigarette tax ${s.name}`,
      `cigarette prices in ${s.name}`,
    ],
  });
}

function nrtText(s: UsState): string {
  const q = s.quitline;
  if (!q || q.notice) return `Call ${NATIONAL_QUITLINE} and ask whether free nicotine patches, gum or lozenges are available to you.`;
  if (q.nrtSummary) return q.nrtSummary;
  if (q.freeNrt === "yes") return `${q.programName} offers free nicotine replacement to eligible residents. Ask about it when you enroll.`;
  if (q.freeNrt === "limited") return `${q.programName} offers free nicotine replacement to some callers. Ask whether you qualify.`;
  if (q.freeNrt === "no") return `${q.programName} does not list free nicotine replacement. Your pharmacy or insurance may still cover it.`;
  return `Ask ${q.programName} whether free nicotine patches, gum or lozenges are available to you.`;
}

function neighbours(slug: string, n = 6): UsState[] {
  const i = US_STATES.findIndex((s) => s.slug === slug);
  const out: UsState[] = [];
  for (let k = 1; out.length < n && k < US_STATES.length; k++) {
    const next = US_STATES[(i + k) % US_STATES.length];
    const prev = US_STATES[(i - k + US_STATES.length) % US_STATES.length];
    if (out.length < n) out.push(next);
    if (out.length < n) out.push(prev);
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

export default async function StateHelpPage({ params }: Props) {
  const { state: slug } = await params;
  const s = usStateBySlug[slug];
  if (!s) notFound();

  const where = stateInSentence(s.name);
  const path = `/quit-smoking-help/${s.slug}`;
  const campaign = `state_${s.slug}`;
  const q = s.quitline;
  const program = q?.programName ?? "Your state quitline";
  const phone = q?.phone ?? NATIONAL_QUITLINE;
  const packPrice = s.estimatedPackPrice ?? s.avgPackPrice2019 ?? 8;
  const yearlyPackADay = Math.round(packPrice * 365);
  const rateVsMedian =
    s.adultSmokingRate === null
      ? null
      : s.adultSmokingRate > MEDIAN_SMOKING_RATE + 0.5
        ? "higher than"
        : s.adultSmokingRate < MEDIAN_SMOKING_RATE - 0.5
          ? "lower than"
          : "close to";

  const faqItems = [
    {
      question: `Can I get free nicotine patches in ${s.name}?`,
      answer: nrtText(s),
    },
    {
      question: `What is the quitline number in ${s.name}?`,
      answer: `${program} can be reached at ${phone}. ${NATIONAL_QUITLINE} also connects you to your state's quitline from anywhere in the US.`,
    },
    {
      question: `What is the cigarette tax in ${s.name}?`,
      answer: `The state excise tax is ${formatUsd(s.cigaretteTaxPerPack)} per pack of 20 (CDC STATE System, ${STATE_DATA_META.taxAsOf}), on top of the ${formatUsd(STATE_DATA_META.federalTaxPerPack)} federal tax. That ranks ${s.taxRank} of 51 for the highest state cigarette tax.`,
    },
    {
      question: `How much is a pack of cigarettes in ${s.name}?`,
      answer: `The average price was ${formatUsd(s.avgPackPrice2019)} in 2019, the last year the CDC published state averages. Adding state tax increases since then gives an estimate of about ${formatUsd(s.estimatedPackPrice)} today, before manufacturer price rises, so many stores charge more.`,
    },
    {
      question: `How much would I save by quitting smoking in ${s.name}?`,
      answer: `At about ${formatUsd(packPrice)} a pack, a pack a day costs roughly ${formatUsd(yearlyPackADay)} a year. Use the calculator on this page with your own price and amount.`,
    },
  ];

  const articleJsonLd = buildArticleJsonLd({
    title: `Free help to quit smoking in ${s.name}`,
    description: `Quitline, free nicotine replacement, and the cost of smoking in ${where}.`,
    path,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { name: AUTHOR.name, url: AUTHOR.url },
    reviewer: { name: MEDICAL_REVIEWER.name, url: MEDICAL_REVIEWER.url },
    citation: [
      ...(q ? [{ name: `${q.programName} (official)`, url: q.sourceUrl }] : []),
      { name: "CDC STATE System: Cigarette excise taxes", url: STATE_DATA_META.sources.tax },
      { name: "CDC: The Tax Burden on Tobacco, 1970–2019", url: STATE_DATA_META.sources.price2019 },
      { name: "CDC BRFSS prevalence data", url: STATE_DATA_META.sources.smoking },
    ],
  });

  return (
    <div className="flex flex-col gap-10">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[
          { name: "Quit help by state", path: "/quit-smoking-help" },
          { name: s.name, path },
        ]}
      />

      <ArticleHeader
        kicker="Quit help by state"
        title={`Free help to quit smoking in ${s.name}`}
        datePublished={PUBLISHED}
        dateModified={PUBLISHED}
        campaign={campaign}
        actions={
          <ButtonLink href="/quit-smoking-help" variant="secondary">
            All states →
          </ButtonLink>
        }
      >
        <p>
          Free coaching, possibly free nicotine patches, and what smoking really costs in {where}. Quitline
          details are checked against the official program site; costs come from CDC data.
        </p>
      </ArticleHeader>

      <section id="quitline" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card" data-unique-data="state-quitline">
        <h2 className="text-xl font-semibold text-ink">
          {q?.notice ? `Free quit coaching in ${s.name}` : `${program}: free quit coaching`}
        </h2>
        {q?.notice ? (
          <p role="note" className="mt-3 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm leading-6 text-ink">
            {q.notice}
          </p>
        ) : null}
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Call</dt>
            <dd className="mt-1 text-lg font-semibold text-ink">{phone}</dd>
          </div>
          {q ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Online</dt>
              <dd className="mt-1">
                <a href={q.url} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
                  {q.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              </dd>
            </div>
          ) : null}
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Free nicotine patches, gum or lozenges</dt>
            <dd className="mt-1 text-sm leading-6 text-ink">{nrtText(s)}</dd>
          </div>
          {q?.services?.length ? (
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Ways to get support</dt>
              <dd className="mt-1 text-sm text-ink">{q.services.join(" · ")}</dd>
            </div>
          ) : null}
        </dl>
        {q ? (
          <p className="mt-4 text-xs text-ink-muted">
            Checked on {q.verifiedOn} against{" "}
            <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              the official program page
            </a>
            . Offers change, so confirm eligibility when you call.
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-6 text-ink-muted">
          Quitline coaching is free and confidential. Combining coaching with nicotine replacement or a
          prescription medicine gives you better odds than going it alone. See the{" "}
          <Link href="/how-to-quit-smoking" className="font-medium text-accent-strong underline underline-offset-2">
            step-by-step quit plan
          </Link>
          .
        </p>
      </section>

      <section id="cost" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card" data-unique-data="state-cost">
        <h2 className="text-xl font-semibold text-ink">What smoking costs in {where}</h2>
        <dl className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-line bg-surface-muted p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-accent">State cigarette tax</dt>
            <dd className="mt-1 text-2xl font-semibold text-ink">{formatUsd(s.cigaretteTaxPerPack)}</dd>
            <dd className="text-xs text-ink-muted">per pack · #{s.taxRank} highest of 51</dd>
          </div>
          <div className="rounded-xl border border-line bg-surface-muted p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-accent">Estimated pack price</dt>
            <dd className="mt-1 text-2xl font-semibold text-ink">{formatUsd(s.estimatedPackPrice)}</dd>
            <dd className="text-xs text-ink-muted">2019 average {formatUsd(s.avgPackPrice2019)} + tax rises since</dd>
          </div>
          <div className="rounded-xl border border-line bg-surface-muted p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-accent">A pack a day costs</dt>
            <dd className="mt-1 text-2xl font-semibold text-ink">{formatUsd(yearlyPackADay)}</dd>
            <dd className="text-xs text-ink-muted">a year, at the estimated price</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm leading-6 text-ink-muted">
          The federal tax of {formatUsd(STATE_DATA_META.federalTaxPerPack)} per pack applies on top of the
          state tax. Some cities and counties add their own. Prices in stores vary, so enter yours below.
        </p>
        <div className="mt-6">
          <MoneySavedCalculator
            instanceId={campaign}
            defaultPackPrice={Math.round(packPrice * 100) / 100}
            title={`Quit smoking savings in ${s.name}`}
            description="Adjust to what you actually smoke and pay."
            shareable={false}
          />
        </div>
      </section>

      {s.adultSmokingRate !== null ? (
        <section id="smoking-rate" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card" data-unique-data="state-rate">
          <h2 className="text-xl font-semibold text-ink">How many adults smoke in {where}</h2>
          <p className="mt-3 text-sm leading-7 text-ink-muted">
            In {s.adultSmokingRateYear}, {s.adultSmokingRate.toFixed(1)}% of adults in {where} said they
            currently smoke, {rateVsMedian} the state median of {MEDIAN_SMOKING_RATE.toFixed(1)}% (CDC
            BRFSS). You&apos;re far from alone in trying to stop, and the quitline exists for exactly that.
          </p>
        </section>
      ) : null}

      <InlineAppCta campaign={campaign}>
        Pair the quitline with Blou: SOS help the second a craving hits between coaching calls, and every
        smoke-free day on one visual timeline.
      </InlineAppCta>

      <section id="first-days" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">What to expect in your first days</h2>
        <p className="mt-3 text-sm leading-7 text-ink-muted">
          Cravings can start within an hour or two of your last cigarette, withdrawal usually peaks in the
          first 3 days, and it typically eases over the first month. The{" "}
          <Link href="/quit-smoking-timeline" className="font-medium text-accent-strong underline underline-offset-2">
            quit smoking timeline
          </Link>{" "}
          shows where you are and what comes next.
        </p>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} title={`Quitting smoking in ${s.name}: FAQ`} />
      </section>

      <EndAppCta campaign={campaign} />

      <section id="sources" className="scroll-mt-24 rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-xl font-semibold text-ink">Sources</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {q ? (
            <li>
              <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
                {q.programName}
              </a>{" "}
              <span className="text-ink-muted">· checked {q.verifiedOn}</span>
            </li>
          ) : null}
          <li>
            <a href={STATE_DATA_META.sources.tax} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
              CDC STATE System: excise taxes on cigarettes
            </a>{" "}
            <span className="text-ink-muted">· {STATE_DATA_META.taxAsOf}{s.taxCitation ? ` · ${s.taxCitation}` : ""}</span>
          </li>
          <li>
            <a href={STATE_DATA_META.sources.price2019} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
              CDC: The Tax Burden on Tobacco (Orzechowski and Walker), 2019 prices
            </a>
          </li>
          <li>
            <a href={STATE_DATA_META.sources.smoking} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-accent/50 underline-offset-4">
              CDC Behavioral Risk Factor Surveillance System (BRFSS)
            </a>
          </li>
        </ul>
        <p className="mt-4 text-xs leading-5 text-ink-muted">
          This page is educational and does not replace medical advice. In an emergency, call 911.
        </p>
      </section>

      <nav aria-label="Other states" className="rounded-card border border-line bg-surface p-6 shadow-card">
        <h2 className="text-base font-semibold text-ink">Quit help in other states</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {neighbours(s.slug).map((n) => (
            <li key={n.slug}>
              <Link href={`/quit-smoking-help/${n.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-ink hover:bg-surface-muted">
                {n.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/quit-smoking-help" className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-accent-strong underline underline-offset-2">
              All 50 states + DC
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
