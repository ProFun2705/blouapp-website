import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";

export const metadata: Metadata = {
  title: "Calculators by country",
  description:
    "Quit smoking calculators for the US, UK, Australia, Vietnam, and Indonesia.",
};

const countries = [
  { href: "/blou/calculators/united-states", label: "United States" },
  { href: "/blou/calculators/united-kingdom", label: "United Kingdom" },
  { href: "/blou/calculators/australia", label: "Australia" },
  { href: "/blou/calculators/vietnam", label: "Vietnam" },
  { href: "/blou/calculators/indonesia", label: "Indonesia" },
] as const;

export default function CalculatorsByCountryPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Calculators by country</h1>
        <p>
          Choose your country for localized assumptions and units. Each page is
          ready for region-specific calculator content.
        </p>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {countries.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="flex items-center justify-between rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-black/[0.03] dark:border-white/10 dark:bg-black dark:text-zinc-100 dark:hover:bg-white/10"
            >
              {c.label}
              <span aria-hidden className="text-zinc-400">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        <Link className="underline" href="/blou">
          ← Back to Bloü
        </Link>
      </p>
      <div>
        <AppStoreBadgeLink
          campaign="calculators_index"
          placement="calculators_index"
        />
      </div>
    </div>
  );
}
