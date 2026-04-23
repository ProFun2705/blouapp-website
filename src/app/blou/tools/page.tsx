import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";

export const metadata: Metadata = {
  title: "All tools",
  description:
    "Quit smoking tools: money saved, lung recovery, and country calculators.",
};

const tools = [
  {
    href: "/blou/tools/money-saved",
    title: "Money saved calculator",
    description: "Estimate how much you save by not smoking.",
  },
  {
    href: "/blou/tools/lung-recovery",
    title: "Lung recovery timeline",
    description: "Understand how recovery can unfold over time after you quit.",
  },
  {
    href: "/blou/calculators",
    title: "Calculators by country",
    description: "Tools localized for your region.",
  },
] as const;

export default function BlouToolsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>All tools</h1>
        <p>
          Calculators and timelines to support your quit. Interactive versions
          can be wired up when requirements are defined.
        </p>
      </div>

      <ul className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.href}>
            <Link
              href={tool.href}
              className="block rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-black"
            >
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {tool.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {tool.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
                Open
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
        <AppStoreBadgeLink campaign="tools_index" placement="tools_index" />
      </div>
    </div>
  );
}
