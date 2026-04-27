import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { SocialProof } from "@/components/marketing/SocialProof";
import { MobileStickyBadge } from "@/components/marketing/MobileStickyBadge";
import { AndroidWaitlistCard } from "@/components/marketing/AndroidWaitlistCard";
import { RELAPSE_MAINTENANCE_LINKS } from "@/lib/roadmapLinks";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `${SITE_NAME} – Quit Smoking Tracker for iPhone`,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "quit smoking app",
    "quit smoking tracker",
    "stop smoking iphone",
    "quit smoking timeline",
    "money saved quitting smoking",
  ],
});

const heroHighlights = [
  "Visual streaks & milestones",
  "Money saved & lung recovery",
  "Craving timer with short actions",
] as const;

const featureCards = [
  {
    title: "See progress you can feel",
    body: "Turn abstract commitment into a visible streak. Every day smoke-free is a specific number — savings, cravings avoided, milestones reached.",
  },
  {
    title: "Plan, don't willpower",
    body: "Pre-commit a 2-minute action for each of your top cravings. The app nudges you through the first 3–5 minutes, which is all most cravings last.",
  },
  {
    title: "Recovery timeline, not vague promises",
    body: "Know what's typically happening in your body day 1, day 3, week 1, and beyond — backed by NHS, CDC, and Surgeon General public guidance.",
  },
] as const;

const tools = [
  {
    href: "/tools/money-saved",
    title: "Money saved calculator",
    subtitle: "What does your habit cost — and what does quitting return?",
    points: [
      "Localized prices in 5 countries",
      "Savings from 1 day to 10 years",
      "Shareable link with your numbers",
    ],
  },
  {
    href: "/tools/lung-recovery",
    title: "Lung recovery timeline",
    subtitle: "Visualize what typically improves, and when",
    points: [
      "Short-term symptom milestones",
      "Long-term health checkpoints",
      "Links to original source guidance",
    ],
  },
] as const;

const countryLinks = [
  { href: "/calculators/united-states", label: "United States" },
  { href: "/calculators/united-kingdom", label: "United Kingdom" },
  { href: "/calculators/australia", label: "Australia" },
  { href: "/calculators/vietnam", label: "Vietnam" },
  { href: "/calculators/indonesia", label: "Indonesia" },
] as const;

const pillarLinks = [
  {
    href: "/how-to-quit-smoking",
    label: "How to quit smoking",
    description: "Step-by-step plan from first day to first year.",
  },
  {
    href: "/prepare-to-quit-smoking",
    label: "Prepare to quit smoking",
    description: "The 7-day checklist before your quit date.",
  },
  {
    href: "/best-quit-smoking-apps",
    label: "Best quit smoking apps",
    description: "Honest comparison of the leading quit trackers.",
  },
] as const;

const faqItems = [
  {
    question: "Is Blou free to use?",
    answer:
      "Yes. Blou is free to download on the App Store. Core tracking features — streak, money saved, cravings, milestones — are free. Optional premium features support ongoing development.",
  },
  {
    question: "Where should I start if I want to quit smoking?",
    answer:
      "Start with our free step-by-step guide at /how-to-quit-smoking, set a quit date within the next 7–14 days, and line up one form of evidence-based support (NRT, varenicline, bupropion, or free quitline coaching).",
  },
  {
    question: "What happens to your body after you quit smoking?",
    answer:
      "Recovery begins within hours and compounds for years. See our milestone guides from 1 day to 10 years smoke-free for timelines based on CDC and Surgeon General public summaries.",
  },
  {
    question: "How long do nicotine cravings last?",
    answer:
      "Each individual craving typically lasts 3–5 minutes. Physical nicotine withdrawal peaks on days 2–3 and fades over 2–4 weeks. Cue-based urges can appear for months but become much less frequent.",
  },
  {
    question: "Is Blou available on Android?",
    answer:
      "Not yet. Blou is iPhone-only today. Join the Android waitlist on this page and we'll let you know the day it launches.",
  },
  {
    question: "Is this website medical advice?",
    answer:
      "No. Blou content is for general education and motivation. It does not replace advice from a qualified clinician. If you have a medical condition or take prescription medication, talk to your clinician when making changes.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative overflow-hidden rounded-3xl border border-teal-200/80 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 shadow-sm md:p-12">
        <div className="relative z-10 max-w-3xl">
          <p className="inline-flex rounded-full border border-teal-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-800">
            Quit smoking tracker · iPhone
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-teal-950 md:text-5xl">
            Quit smoking, tracked simply.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-teal-900/80">
            Blou turns your quit into something you can see — streak, savings,
            cravings, and recovery milestones — so you stop relying on willpower
            alone. Free on the App Store.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <AppStoreBadgeLink
              campaign="landing_hero"
              placement="landing_hero"
              height={56}
            />
            <Link
              href="/how-to-quit-smoking"
              className="inline-flex h-11 items-center justify-center rounded-full border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
            >
              Read the quit plan
            </Link>
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

      <TableOfContents
        items={[
          { id: "social-proof", label: "Reviews & proof" },
          { id: "why-tracker", label: "Why a tracker works" },
          { id: "pillars", label: "Start where you are" },
          { id: "relapse-maintenance", label: "Relapse support" },
          { id: "tools", label: "Free tools" },
          { id: "calculators", label: "Calculators by country" },
          { id: "android-waitlist", label: "Android waitlist" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof />
      </section>

      <section id="why-tracker" className="scroll-mt-24">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
            Why a tracker works when willpower doesn&apos;t
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-900/80">
            Most quit attempts fail in the first two weeks — not because people
            lack motivation, but because the craving-response loop is invisible.
            Blou makes it visible so you can interrupt it.
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

      <section id="pillars" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
          Start where you are
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-900/80">
          Three step-by-step playbooks for the most common points in the quit
          journey.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {pillarLinks.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="block rounded-2xl border border-teal-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-teal-950">{pillar.label}</p>
              <p className="mt-1 text-sm text-teal-900/80">{pillar.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="relapse-maintenance"
        className="scroll-mt-24 rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
          Relapse support library
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-900/80">
          These pages are for real-world trigger moments: one-cigarette slips,
          alcohol nights, social smoking, and getting back on plan after relapse.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {RELAPSE_MAINTENANCE_LINKS.filter((item) => item.status === "live").map(
            (item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="rounded-xl border border-teal-200 px-4 py-3 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
              >
                {item.title}
              </Link>
            ),
          )}
        </div>
      </section>

      <section id="tools" className="scroll-mt-24 grid gap-5 lg:grid-cols-2">
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

      <section
        id="calculators"
        className="scroll-mt-24 rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm md:p-10"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
              Calculators by country
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-teal-900/80">
              Start from a locally sourced pack price — tax-adjusted, referenced
              — and see your real savings in your currency.
            </p>
          </div>
          <Link
            href="/calculators"
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

      <section id="android-waitlist" className="scroll-mt-24">
        <AndroidWaitlistCard />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-home" />
      </section>

      <MobileStickyBadge campaign="landing_sticky_mobile" />
    </div>
  );
}
