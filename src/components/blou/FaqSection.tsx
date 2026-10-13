"use client";

import Script from "next/script";
import { buildFaqJsonLd } from "@/lib/seo";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: ReadonlyArray<FaqItem>;
  title?: string;
  /** Whether to emit FAQPage JSON-LD for this section. Default true. */
  emitJsonLd?: boolean;
  /** Unique id used for the JSON-LD script, required if more than one FAQ is on the page. */
  jsonLdId?: string;
};

function trackExpand(question: string) {
  if (typeof window === "undefined") return;
  const anyWindow = window as unknown as {
    gtag?: (...args: unknown[]) => void;
  };
  if (typeof anyWindow.gtag === "function") {
    anyWindow.gtag("event", "faq_expand", {
      event_category: "engagement",
      event_label: question,
    });
  }
}

export function FaqSection({
  items,
  title = "Frequently asked questions",
  emitJsonLd = true,
  jsonLdId = "faq-json-ld",
}: FaqSectionProps) {
  return (
    <section
      className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
      aria-label={title}
    >
      {emitJsonLd ? (
        <Script id={jsonLdId} type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd(items))}
        </Script>
      ) : null}

      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-teal-200 bg-teal-50/30 p-4 open:bg-white"
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open) {
                trackExpand(item.question);
              }
            }}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-teal-950">
              <span>{item.question}</span>
              <span
                aria-hidden
                className="ml-2 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-teal-300 text-xs text-teal-900 transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-teal-900/85">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
