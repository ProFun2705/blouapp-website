import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  BLOU_VS_PAGES,
  COMPETITOR_PAIR_PAGES,
} from "@/lib/competitors";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compare quit smoking apps (2026)",
  description:
    "Honest quit-smoking app comparisons: Blou vs Kwit, Smoke Free, QuitNow, and more. Plus head-to-head competitor matchups.",
  path: "/compare",
  keywords: [
    "quit smoking app comparison",
    "blou vs kwit",
    "best quit smoking app",
    "smoke free vs kwit",
  ],
});

const blouVsLinks = BLOU_VS_PAGES.map((p) => ({
  href: p.path,
  title: p.h1,
  description: p.metaDescription,
}));

const pairLinks = COMPETITOR_PAIR_PAGES.map((p) => ({
  href: p.path,
  title: p.h1,
  description: p.metaDescription,
}));

export default function CompareHubPage() {
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumbs items={[{ name: "Compare apps", path: "/compare" }]} />

      <header className="masthead">
        <p className="text-sm font-medium text-teal-700">Compare</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Compare quit smoking apps
        </h1>
        <p className="mt-4 max-w-[65ch] text-base leading-7 text-teal-900/90">
          We make Blou, so we&apos;re not neutral on Blou vs pages—but every
          comparison here is written to help you pick the app you&apos;ll
          actually open when a craving hits.
        </p>
        <div className="mt-6">
          <AppStoreBadgeLink
            campaign="compare_hub"
            placement="article_intro"
          />
        </div>
      </header>

      <section className="section-block">
        <h2 className="text-xl font-semibold text-teal-950">Blou vs others</h2>
        <ul className="mt-4 space-y-4">
          {blouVsLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium text-teal-800 underline decoration-teal-400 underline-offset-4 hover:text-teal-950"
              >
                {link.title}
              </Link>
              <p className="mt-1 text-sm leading-6 text-teal-900/75">
                {link.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block">
        <h2 className="text-xl font-semibold text-teal-950">
          Competitor vs competitor
        </h2>
        <p className="mt-2 max-w-[65ch] text-sm leading-7 text-teal-900/85">
          Head-to-head comparisons between other quit apps—with Blou noted as a
          third option when relevant.
        </p>
        <ul className="mt-4 space-y-4">
          {pairLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base font-medium text-teal-800 underline decoration-teal-400 underline-offset-4 hover:text-teal-950"
              >
                {link.title}
              </Link>
              <p className="mt-1 text-sm leading-6 text-teal-900/75">
                {link.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block">
        <h2 className="text-xl font-semibold text-teal-950">Also see</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link
              href="/best-quit-smoking-apps"
              className="underline decoration-teal-400 underline-offset-4"
            >
              Best quit smoking apps roundup
            </Link>
          </li>
          <li>
            <Link
              href="/how-to-quit-smoking"
              className="underline decoration-teal-400 underline-offset-4"
            >
              How to quit smoking — step-by-step plan
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
