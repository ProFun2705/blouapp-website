import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { SocialProof } from "@/components/marketing/SocialProof";
import { AndroidWaitlistCard } from "@/components/marketing/AndroidWaitlistCard";
import { QuitCalendar } from "@/components/marketing/QuitCalendar";
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

const featureRows = [
  {
    title: "See progress you can feel",
    body: "Turn abstract commitment into a visible streak. Every day smoke-free is a specific number: savings, cravings avoided, milestones reached.",
  },
  {
    title: "Plan, don't willpower",
    body: "Pre-commit a 2-minute action for each of your top cravings. The app nudges you through the first 3–5 minutes, which is all most cravings last.",
  },
  {
    title: "Recovery timeline, not vague promises",
    body: "Know what's typically happening in your body day 1, day 3, week 1, and beyond, backed by NHS, CDC, and Surgeon General public guidance.",
  },
] as const;

const tools = [
  {
    href: "/tools/money-saved",
    title: "Money saved calculator",
    subtitle: "What does your habit cost, and what does quitting return?",
  },
  {
    href: "/tools/lung-recovery",
    title: "Lung recovery timeline",
    subtitle: "Visualize what typically improves, and when.",
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
    href: "/compare",
    label: "Compare quit apps",
    description: "Blou vs Kwit, Smoke Free, and head-to-head matchups.",
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
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold tracking-tight text-teal-950 md:text-5xl">
            Quit smoking, tracked simply.
          </h1>
          <p className="mt-4 max-w-[65ch] text-base leading-7 text-teal-900/80">
            See each smoke-free day. Track savings and ride out the 3-minute
            craving. Free on the App Store.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <AppStoreBadgeLink
              campaign="landing_hero"
              placement="landing_hero"
              height={56}
            />
            <Link
              href="/how-to-quit-smoking"
              className="pressable inline-flex h-11 items-center justify-center rounded-sm border border-teal-200 bg-white px-5 text-sm font-medium text-teal-900 hover:bg-teal-50"
            >
              Read the quit plan
            </Link>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="hidden md:block">
            <QuitCalendar />
          </div>
          <div className="relative mx-auto w-full max-w-[220px]">
            <figure>
              <Image
                src="/product/blou-phone-streak.jpg"
                alt="Example iPhone view of Blou: a smoke-free streak and a month calendar with days marked off"
                width={900}
                height={1600}
                priority
                className="h-auto w-full"
              />
              <figcaption className="mt-2 text-xs text-teal-900/70">
                Example product view. Replace with App Store screenshots when
                they land.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <TableOfContents
        items={[
          { id: "why-tracker", label: "Why a tracker works" },
          { id: "tools", label: "Free tools" },
          { id: "plan", label: "Start a plan" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <section id="social-proof" className="scroll-mt-24">
        <SocialProof />
      </section>

      <section id="why-tracker" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
          Why a tracker works when willpower doesn&apos;t
        </h2>
        <p className="mt-2 max-w-[65ch] text-base leading-7 text-teal-900/80">
          Most quit attempts fail in the first two weeks, not because people
          lack motivation, but because the craving-response loop is invisible.
          Blou makes it visible so you can interrupt it.
        </p>
        <ol className="mt-8 divide-y divide-teal-200 border-y border-teal-200">
          {featureRows.map((feature, index) => (
            <li key={feature.title} className="grid gap-3 py-5 md:grid-cols-[4rem_1fr]">
              <span className="tabular text-sm font-medium text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-teal-950">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-[65ch] text-base leading-7 text-teal-900/80">
                  {feature.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="plan" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
          Start where you are
        </h2>
        <ul className="mt-6 divide-y divide-teal-200 border-y border-teal-200">
          {pillarLinks.map((pillar) => (
            <li key={pillar.href}>
              <Link
                href={pillar.href}
                className="flex flex-col gap-1 py-4 hover:text-teal-950"
              >
                <span className="font-semibold text-teal-950">{pillar.label}</span>
                <span className="text-sm text-teal-900/80">{pillar.description}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <p className="text-sm font-medium text-teal-800">If you slipped</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {RELAPSE_MAINTENANCE_LINKS.filter((item) => item.status === "live")
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section id="tools" className="scroll-mt-24 grid gap-8 md:grid-cols-2">
        {tools.map((tool) => (
          <article key={tool.href} className="section-block md:border-t-0 md:pt-0">
            <h3 className="text-2xl font-semibold tracking-tight text-teal-950">
              {tool.title}
            </h3>
            <p className="mt-2 text-base leading-6 text-teal-900/80">
              {tool.subtitle}
            </p>
            <Link
              href={tool.href}
              className="pressable mt-6 inline-flex h-10 items-center justify-center rounded-sm border border-teal-200 px-4 text-sm font-medium text-teal-900 hover:bg-teal-50"
            >
              Open tool
            </Link>
          </article>
        ))}
      </section>

      <section id="calculators" className="section-block scroll-mt-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-teal-950">
              Calculators by country
            </h2>
            <p className="mt-2 max-w-[65ch] text-base leading-7 text-teal-900/80">
              Start from a locally sourced pack price and see savings in your
              currency.
            </p>
          </div>
          <Link
            href="/calculators"
            className="pressable inline-flex h-10 items-center justify-center rounded-sm bg-teal-600 px-4 text-sm font-medium text-white hover:bg-teal-700"
          >
            View all countries
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {countryLinks.map((country) => (
            <Link
              key={country.href}
              href={country.href}
              className="pressable inline-flex h-10 items-center rounded-sm border border-teal-200 px-3 text-sm font-medium text-teal-900 hover:bg-teal-50"
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
    </div>
  );
}
