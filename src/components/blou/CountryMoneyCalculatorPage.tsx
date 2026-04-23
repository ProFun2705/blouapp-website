import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { FaqSection } from "@/components/blou/FaqSection";
import { MoneySavedCalculator } from "@/components/blou/MoneySavedCalculator";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import type { CountryCalculator } from "@/lib/countryData";

type CountryMoneyCalculatorPageProps = {
  country: CountryCalculator;
};

export function CountryMoneyCalculatorPage({
  country,
}: CountryMoneyCalculatorPageProps) {
  const campaignSlug = `country_calculator_${country.slug}`;

  const faqItems = [
    {
      question: `What's the average cigarette pack price in ${country.name}?`,
      answer: `This page starts with an estimated ${country.defaultPackPrice} ${country.currencyCode} per pack as of ${country.priceAsOf}, based on ${country.priceSource.name}. Prices vary by region, tax policy, and brand — adjust the calculator to match what you were actually paying.`,
    },
    {
      question: `What is smoking prevalence in ${country.name}?`,
      answer: country.smokingPrevalence,
    },
    {
      question: `Where can I get free cessation help in ${country.name}?`,
      answer: country.hotlines
        .map((h) => `${h.name} — ${h.detail}`)
        .join(" "),
    },
    {
      question: "Can I change cigarettes per day and pack price?",
      answer:
        "Yes. Both fields are editable, and the result updates instantly. Your inputs are not sent anywhere — the calculation happens in your browser.",
    },
  ] as const;

  return (
    <article className="flex flex-col gap-8">
      <Breadcrumbs
        items={[
          { name: "Calculators", path: "/calculators" },
          { name: country.name, path: `/calculators/${country.slug}` },
        ]}
      />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Quit smoking calculator · {country.name}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking money saved calculator ({country.name})
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/85">
          Estimate how much you would keep by quitting smoking in {country.name},
          using a default pack price of{" "}
          <strong>
            {country.defaultPackPrice} {country.currencyCode}
          </strong>{" "}
          (
          <a
            href={country.priceSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-teal-400 underline-offset-4"
          >
            {country.priceSource.name}, {country.priceAsOf}
          </a>
          ). Edit the fields below to match your own smoking history.
        </p>
      </header>

      <MoneySavedCalculator
        defaultPackPrice={country.defaultPackPrice}
        currencyCode={country.currencyCode}
        locale={country.locale}
        instanceId={`country_${country.slug}`}
        title={`${country.name} money saved calculator`}
        description={`Local pricing in ${country.currencyCode}. Adjust inputs to reflect your actual spend.`}
      />

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-950">
            Local context
          </h2>
          <dl className="mt-4 space-y-3 text-sm leading-6 text-teal-900/90">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-teal-700">
                Smoking prevalence
              </dt>
              <dd className="mt-1">{country.smokingPrevalence}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-teal-700">
                Legal purchase age
              </dt>
              <dd className="mt-1">{country.legalAgePurchase}</dd>
            </div>
            {country.popularBrands?.length ? (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-teal-700">
                  Commonly sold brands
                </dt>
                <dd className="mt-1">{country.popularBrands.join(", ")}</dd>
              </div>
            ) : null}
          </dl>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-teal-900/90">
            {country.localContext.map((line) => (
              <li key={line} className="flex gap-2">
                <span aria-hidden className="mt-1 text-teal-600">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-950">
            Free quit help in {country.name}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-teal-900/90">
            {country.hotlines.map((line) => (
              <li key={line.name}>
                <p className="font-medium text-teal-950">
                  {line.url ? (
                    <a
                      href={line.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-teal-400 underline-offset-4"
                    >
                      {line.name}
                    </a>
                  ) : (
                    line.name
                  )}
                </p>
                <p>{line.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-5 text-teal-900/70">
            This page is educational and not medical advice. If you are in a
            medical emergency, contact your local emergency services.
          </p>
        </article>
      </section>

      <FaqSection
        items={faqItems}
        jsonLdId={`faq-json-ld-${country.slug}`}
        title={`Frequently asked questions – ${country.name}`}
      />

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/calculators"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← All country calculators
        </Link>
        <Link
          href="/tools/money-saved"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Global calculator
        </Link>
        <AppStoreBadgeLink
          campaign={campaignSlug}
          placement={`country_calculator_${country.slug}`}
        />
      </div>
    </article>
  );
}
