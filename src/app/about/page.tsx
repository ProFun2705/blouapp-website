import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { AUTHOR, CONTACT_EMAIL, MEDICAL_REVIEWER, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `About ${SITE_NAME}`,
  description:
    "Blou is a quit smoking tracker built by a solo founder. Learn who makes it, our editorial process, and how we keep guides grounded in public-health evidence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="flex flex-col gap-8">
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          About Blou
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-teal-900/85">
          Blou is a quit smoking tracker for iPhone, built by a small team that
          believes quitting works best when the invisible becomes visible —
          cravings, savings, and recovery milestones you can actually see.
        </p>
      </header>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Our mission</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Most people quit smoking multiple times before it sticks. We don&apos;t
          think that means quitting is hopeless; we think it means the usual
          tools (willpower, generic advice) aren&apos;t good enough. Blou tries to
          help by turning your quit into a visible, repeatable loop:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/85">
          <li>• Track your streak, cravings, and savings without friction.</li>
          <li>• Interrupt the craving → smoke loop with a 2-minute action.</li>
          <li>• See recovery milestones so progress feels real, not abstract.</li>
        </ul>
      </section>

      <section
        id="editorial"
        className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Editorial process (E-E-A-T)
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Quit smoking guidance is a health topic that affects real outcomes.
          We take that seriously and follow a published process:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/85">
          <li>
            <strong>Source-first drafting.</strong> Every guide starts from
            NHS, CDC, US Surgeon General, WHO, and peer-reviewed references.
          </li>
          <li>
            <strong>Attribution and dates.</strong> Pages carry a visible
            published date and an updated date. Major changes are re-dated.
          </li>
          <li>
            <strong>Editorial review.</strong> Content is reviewed against the
            most recent public-health guidance we can identify. We welcome
            clinician feedback and correct errors promptly.
          </li>
          <li>
            <strong>Scope.</strong> We provide education, not personal medical
            advice. We never substitute for a clinician.
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          People behind Blou
        </h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-teal-950">
              {AUTHOR.name}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
              {AUTHOR.role}
            </p>
            <p className="mt-2 text-sm leading-6 text-teal-900/85">
              Builds the product, writes most of the guides, and answers email
              from users. Reach out anytime at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline decoration-teal-400 underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-teal-950">
              {MEDICAL_REVIEWER.name}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
              {MEDICAL_REVIEWER.role}
            </p>
            <p className="mt-2 text-sm leading-6 text-teal-900/85">
              Every medically relevant guide is cross-checked against current
              NHS, CDC, and WHO public guidance. If you&apos;re a clinician and
              want to collaborate on review, please get in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          Corrections & feedback
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          If you find an error, an outdated statistic, or a source we should
          cite, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-teal-400 underline-offset-4"
          >
            {CONTACT_EMAIL}
          </a>
          . We correct in the next update cycle and note significant changes
          in each page&apos;s &ldquo;Updated&rdquo; date.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/guides"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Read the guides
        </Link>
        <Link
          href="/privacy"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Terms of Service
        </Link>
      </div>
    </article>
  );
}
