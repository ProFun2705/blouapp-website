import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";

export const metadata: Metadata = {
  title: {
    absolute: "Bloü",
  },
  description:
    "Guides, timelines, and tools to support your quit. Explore calculators tailored by country.",
};

const heroHighlights = [
  "Daily momentum tracking",
  "Savings and health timelines",
  "Country-specific calculator assumptions",
] as const;

const featureCards = [
  {
    title: "Guided quitting paths",
    body: "Follow structured guides and milestones so each day has a clear next step.",
  },
  {
    title: "Recovery visibility",
    body: "See how your breathing, energy, and long-term health can improve over time.",
  },
  {
    title: "Money motivation",
    body: "Track cumulative savings to make your progress concrete and rewarding.",
  },
] as const;

const tools = [
  {
    href: "/blou/tools/money-saved",
    title: "Money saved calculator",
    subtitle: "Understand the financial upside of quitting",
    points: ["Custom daily spend", "Running totals by day, month, year", "Personal savings milestones"],
  },
  {
    href: "/blou/tools/lung-recovery",
    title: "Lung recovery timeline",
    subtitle: "Visualize what can improve after you quit",
    points: ["Short-term symptom milestones", "Long-term health checkpoints", "Clear timeline format"],
  },
] as const;

const countryLinks = [
  { href: "/blou/calculators/united-states", label: "United States" },
  { href: "/blou/calculators/united-kingdom", label: "United Kingdom" },
  { href: "/blou/calculators/australia", label: "Australia" },
  { href: "/blou/calculators/vietnam", label: "Vietnam" },
  { href: "/blou/calculators/indonesia", label: "Indonesia" },
] as const;

export default function BlouHubPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative overflow-hidden rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 shadow-sm md:p-12">
        <div className="relative z-10 max-w-3xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-800">
            Quit smoking platform
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-teal-950 md:text-5xl">
            Bloü helps you quit smoking with clarity and momentum
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-teal-900/80">
            A focused landing experience for guidance, practical tools, and
            calculators. Replace habit uncertainty with a plan you can follow.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/blou/tools"
              className="inline-flex h-11 items-center justify-center rounded-full bg-teal-600 px-5 text-sm font-medium text-white transition hover:bg-teal-700"
            >
              Explore tools
            </Link>
            <Link
              href="/blou/guides"
              className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
            >
              Read guides
            </Link>
            <AppStoreBadgeLink
              campaign="landing_hero"
              placement="landing_hero"
              height={64}
            />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-teal-200 bg-white/85 px-4 py-3 text-sm text-teal-900/80"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden">
        <AppStoreBadgeLink
          campaign="landing_sticky_mobile"
          placement="landing_sticky_mobile"
          height={56}
          className="inline-flex items-center rounded-xl bg-white/90 p-1 shadow-lg ring-1 ring-teal-200 backdrop-blur-sm transition motion-safe:hover:-translate-y-0.5"
        />
      </div>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
            Built for real quitting journeys
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-900/80">
            The same information architecture as AniDachi&apos;s Bloü section,
            adapted as a standalone product landing page.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-teal-200/90 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-teal-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-teal-900/80">
                {feature.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {tools.map((tool) => (
          <article
            key={tool.href}
            className="rounded-2xl border border-teal-200/90 bg-white p-7 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
              Tool
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-teal-950">
              {tool.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-teal-900/80">
              {tool.subtitle}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-teal-900/80">
              {tool.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <Link
              href={tool.href}
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-teal-200 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
            >
              Open tool
            </Link>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
              Calculators by country
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-900/80">
              Localized pages let you tailor assumptions and copy by market
              while preserving one clean user flow.
            </p>
          </div>
          <Link
            href="/blou/calculators"
            className="inline-flex h-10 items-center justify-center rounded-full bg-teal-600 px-4 text-sm font-medium text-white transition hover:bg-teal-700"
          >
            View all countries
          </Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {countryLinks.map((country) => (
            <Link
              key={country.href}
              href={country.href}
              className="rounded-xl border border-teal-200 px-4 py-3 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
            >
              {country.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
