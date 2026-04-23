import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { milestoneGuides, symptomGuides } from "@/lib/blouGuides";

export const metadata: Metadata = {
  title: "Guides & timelines",
  description:
    "Quit smoking guides by milestone and symptom, based on AniDachi public guides.",
};

export default function BlouGuidesPage() {
  return (
    <div className="flex flex-col gap-10">
      <article className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking guides & tools
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/80">
          These pages explain what many people experience after stopping
          smoking by milestone and by symptom, with practical next steps and
          links to NHS, CDC, and WHO public guidance.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/blou/tools/money-saved"
            className="rounded-xl border border-teal-200 bg-teal-50/50 px-4 py-3 text-sm font-medium text-teal-900 hover:bg-teal-50"
          >
            Quit smoking money saved calculator
          </Link>
          <Link
            href="/blou/tools/lung-recovery"
            className="rounded-xl border border-teal-200 bg-teal-50/50 px-4 py-3 text-sm font-medium text-teal-900 hover:bg-teal-50"
          >
            Lung recovery timeline visualizer
          </Link>
        </div>
        <div className="mt-6">
          <AppStoreBadgeLink
            campaign="article_intro"
            placement="article_intro"
          />
        </div>
      </article>

      <section className="rounded-2xl border border-teal-200/90 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Milestones</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {milestoneGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/blou/guides/${guide.slug}`}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-sm text-teal-900 transition hover:bg-teal-50"
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-teal-200/90 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">Symptoms</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {symptomGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/blou/guides/${guide.slug}`}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-sm text-teal-900 transition hover:bg-teal-50"
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
