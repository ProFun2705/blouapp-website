import type { Metadata } from "next";
import Link from "next/link";
import { AppStoreBadgeLink } from "@/components/marketing/AppStoreBadgeLink";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TableOfContents } from "@/components/site/TableOfContents";
import { FaqSection } from "@/components/blou/FaqSection";
import { buildMetadata } from "@/lib/seo";
import { countries } from "@/lib/countryData";

export const metadata: Metadata = buildMetadata({
  title: "Free quit smoking tools: calculators & timelines",
  description:
    "Free tools for people quitting smoking: money saved calculator, lung recovery timeline, and country-specific calculators with locally sourced pack prices.",
  path: "/tools",
  keywords: [
    "quit smoking calculator",
    "money saved calculator",
    "lung recovery timeline",
    "smoke free tools",
  ],
});

const tools = [
  {
    href: "/tools/money-saved",
    badge: "Calculator",
    title: "Money saved calculator",
    description:
      "How much do you keep by not smoking? Adjust cigarettes per day and pack price; see 1 day through 10 years of savings.",
  },
  {
    href: "/tools/lung-recovery",
    badge: "Timeline",
    title: "Lung recovery timeline",
    description:
      "Enter days smoke-free and see which recovery milestones you've reached, based on public-health summaries.",
  },
  {
    href: "/calculators",
    badge: "By country",
    title: "Country money calculators",
    description:
      "Start from a locally sourced pack price for the US, UK, Australia, Vietnam, or Indonesia — no conversion required.",
  },
] as const;

const faqItems = [
  {
    question: "Are these tools free?",
    answer:
      "Yes. All calculators and timelines on Blou's website are free, no account required, and run entirely in your browser. Nothing you enter is transmitted to our servers.",
  },
  {
    question: "How accurate are the savings numbers?",
    answer:
      "They are a direct calculation: pack price ÷ 20 cigarettes × cigarettes per day × days. We do not adjust for inflation, tax changes, or special purchases. The figure reflects steady-state spend at your current price.",
  },
  {
    question: "Can I embed the calculator on my site?",
    answer:
      "Yes. On /tools/money-saved we provide a copyable embed snippet. Embeds must link back to tryblou.com with a do-follow link.",
  },
  {
    question: "Do you have tools for cravings or milestones?",
    answer:
      "The companion Blou iPhone app adds a craving timer, daily streak, and day-by-day milestone unlocks. Downloads are free on the App Store.",
  },
] as const;

export default function ToolsIndexPage() {
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumbs items={[{ name: "Tools", path: "/tools" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Free quit smoking tools
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
          Quit smoking calculators & timelines
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-900/80">
          Simple, reference-first tools for the most common questions in a quit
          attempt — how much you save, what recovers and when, and what local
          prices actually look like.
        </p>
        <div className="mt-6">
          <AppStoreBadgeLink campaign="tools_index" placement="tools_index" />
        </div>
      </header>

      <TableOfContents
        items={[
          { id: "tool-cards", label: "Tools" },
          { id: "country-calculators", label: "Country calculators" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <section
        id="tool-cards"
        className="scroll-mt-24 grid gap-4 md:grid-cols-3"
      >
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block rounded-2xl border border-teal-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-700">
              {tool.badge}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-teal-950">
              {tool.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-teal-900/80">
              {tool.description}
            </p>
          </Link>
        ))}
      </section>

      <section
        id="country-calculators"
        className="scroll-mt-24 rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-teal-950">
          Country calculators
        </h2>
        <p className="mt-2 text-sm leading-6 text-teal-900/80">
          Each country calculator starts with a sourced pack price and local
          currency formatting.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {countries.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/calculators/${c.slug}`}
                className="block rounded-xl border border-teal-200 px-4 py-3 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" className="scroll-mt-24">
        <FaqSection items={faqItems} jsonLdId="faq-tools-index" />
      </section>
    </div>
  );
}
