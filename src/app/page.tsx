import type { Metadata } from "next";
import Link from "next/link";
import { EndAppCta, HeroAppCta } from "@/components/marketing/AppCta";
import { AndroidWaitlistCard } from "@/components/marketing/AndroidWaitlistCard";
import { ProductIllustration } from "@/components/marketing/ProductIllustration";
import { FaqSection } from "@/components/blou/FaqSection";
import { Card, Kicker } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { milestoneGuides, symptomGuides } from "@/lib/blouGuides";
import { buildMetadata } from "@/lib/seo";
import { APP_FEATURES, PRICING_FAQ, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Blou – Quit Smoking App for iPhone: See Your Body Heal",
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "Blou quit smoking app",
    "quit smoking app",
    "quit smoking app iPhone",
    "quit smoking tracker",
    "what happens when you quit smoking",
  ],
});

const CAMPAIGN = "home";

const steps = [
  {
    title: "Start your free trial",
    body: "Install Blou on your iPhone and start the trial. Cancel anytime in the App Store before it renews.",
  },
  {
    title: "Check in as you go",
    body: "Add a photo and a quick breath check, so your progress is something you can see.",
  },
  {
    title: "Watch yourself heal",
    body: "Your timeline fills in day by day. When a craving hits, tap SOS.",
  },
] as const;

const startHere = [
  { href: "/how-to-quit-smoking", label: "How to quit smoking", note: "Step-by-step plan, from quit day to year one" },
  { href: "/nicotine-withdrawal-timeline", label: "Withdrawal timeline", note: "What to expect on days 1–30" },
  { href: "/i-smoked-one-cigarette", label: "I smoked one cigarette", note: "What to do in the next hour" },
] as const;

const popularSymptoms = [
  "dreams-and-sleep",
  "cravings",
  "insomnia",
  "headaches",
  "cough",
  "fatigue",
  "irritability",
  "brain-fog",
] as const;

const faqItems = [
  PRICING_FAQ,
  {
    question: "What does Blou do that a day counter doesn't?",
    answer:
      "A counter shows a number. Blou shows evidence: a photo timeline of your face, breath checks that track your lungs, SOS help when a craving hits, and every milestone on one visual timeline.",
  },
  {
    question: "Where should I start if I want to quit smoking?",
    answer:
      "Start with the step-by-step plan at /how-to-quit-smoking, set a quit date within the next 7–14 days, and line up one form of evidence-based support (NRT, varenicline, bupropion, or free quitline coaching).",
  },
  {
    question: "How long do nicotine cravings last?",
    answer:
      "Each individual craving typically lasts 3–5 minutes. Physical nicotine withdrawal peaks on days 2–3 and fades over 2–4 weeks. Cue-based urges can appear for months but become much less frequent.",
  },
  {
    question: "Is Blou available on Android?",
    answer:
      "Not yet. Blou is iPhone-only today. The guides, timelines, and calculators on this website work on any device.",
  },
  {
    question: "Is this website medical advice?",
    answer:
      "No. Blou content is for general education and motivation. It does not replace advice from a qualified clinician. If you have a medical condition or take prescription medication, talk to your clinician when making changes.",
  },
] as const;

export default function HomePage() {
  const symptomLinks = popularSymptoms
    .map((slug) => symptomGuides.find((g) => g.slug === slug))
    .filter((g) => g !== undefined);

  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-10 rounded-panel border border-line bg-gradient-to-br from-accent-soft/50 via-surface to-surface p-6 shadow-card md:grid-cols-[1.25fr_1fr] md:p-12">
        <div>
          <Kicker>Quit smoking app for iPhone</Kicker>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            See your body heal after your last cigarette.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-ink-muted">
            Blou tracks every smoke-free day, shows how your lungs and face change, and helps the
            second a craving hits.
          </p>
          <div className="mt-7">
            <HeroAppCta campaign={CAMPAIGN} />
          </div>
        </div>
        <ProductIllustration />
      </section>

      <section id="what-blou-shows" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Proof you&apos;re healing, not just a counter
        </h2>
        <p className="mt-2 max-w-2xl text-base leading-7 text-ink-muted">
          Most quit apps count days and money from averages. Blou shows your own change.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {APP_FEATURES.map((feature) => (
            <li key={feature.title} className="rounded-card border border-line bg-surface p-5 shadow-card">
              <h3 className="text-base font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="how-it-works" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">How it works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-card border border-line bg-surface p-5 shadow-card">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent-strong">
                {i + 1}
              </span>
              <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <Card id="guides" size="lg">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Free guides for every stage</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
              What&apos;s happening in your body, day by day, based on NHS, CDC, and WHO public guidance.
            </p>
          </div>
          <ButtonLink href="/guides" variant="secondary">
            All guides
          </ButtonLink>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {startHere.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-line bg-surface-muted p-4 transition-colors hover:border-accent/40"
            >
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-ink-muted">{item.note}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">After you quit</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {milestoneGuides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="text-ink underline-offset-2 hover:underline">
                    {g.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Common symptoms</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {symptomLinks.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="text-ink underline-offset-2 hover:underline">
                    {g.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <section id="tools" className="grid scroll-mt-24 gap-4 md:grid-cols-3">
        <Link href="/quit-smoking-timeline" className="rounded-card border border-line bg-surface p-5 shadow-card transition-colors hover:border-accent/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Free tool</p>
          <p className="mt-2 text-base font-semibold text-ink">Quit smoking timeline</p>
          <p className="mt-1 text-sm text-ink-muted">Enter your quit date and see what your body is doing right now.</p>
        </Link>
        <Link href="/tools/pack-year-calculator" className="rounded-card border border-line bg-surface p-5 shadow-card transition-colors hover:border-accent/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Free tool</p>
          <p className="mt-2 text-base font-semibold text-ink">Pack-year calculator</p>
          <p className="mt-1 text-sm text-ink-muted">Your smoking history in pack-years, plus a lung screening check.</p>
        </Link>
        <Link href="/quit-zyn" className="rounded-card border border-line bg-surface p-5 shadow-card transition-colors hover:border-accent/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Nicotine pouches</p>
          <p className="mt-2 text-base font-semibold text-ink">Quitting Zyn and pouches</p>
          <p className="mt-1 text-sm text-ink-muted">Taper plans, withdrawal timeline, and a pouch calculator.</p>
        </Link>
        <Link href="/tools/money-saved" className="rounded-card border border-line bg-surface p-5 shadow-card transition-colors hover:border-accent/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Free tool</p>
          <p className="mt-2 text-base font-semibold text-ink">Money saved calculator</p>
          <p className="mt-1 text-sm text-ink-muted">What your habit costs, and what quitting gives back.</p>
        </Link>
        <Link href="/tools/lung-recovery" className="rounded-card border border-line bg-surface p-5 shadow-card transition-colors hover:border-accent/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Free tool</p>
          <p className="mt-2 text-base font-semibold text-ink">Lung recovery timeline</p>
          <p className="mt-1 text-sm text-ink-muted">What typically improves, and when, with sources.</p>
        </Link>
        <Link href="/quit-smoking-help" className="rounded-card border border-line bg-surface p-5 shadow-card transition-colors hover:border-accent/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">By US state</p>
          <p className="mt-2 text-base font-semibold text-ink">Free quitlines and patches</p>
          <p className="mt-1 text-sm text-ink-muted">Your state&apos;s free quit help, cigarette tax, and costs.</p>
        </Link>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </section>

      <EndAppCta
        campaign={CAMPAIGN}
        title="Your quit, with proof"
        description="See every smoke-free day add up: your photo timeline, your lung checks, and help the moment a craving hits."
      />

      <section id="android" className="scroll-mt-24">
        <AndroidWaitlistCard />
      </section>
    </div>
  );
}
