"use client";

import Link from "next/link";
import Script from "next/script";
import { buildFaqJsonLd } from "@/lib/seo";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: ReadonlyArray<FaqItem>;
  title?: string;
  emitJsonLd?: boolean;
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

const TOKEN_RE = /(https?:\/\/[^\s]+|\/[a-z0-9][a-z0-9-/]*)/g;

function LinkedAnswer({ text }: { text: string }) {
  const parts = text.split(TOKEN_RE);
  return (
    <p className="mt-3 text-base leading-7 text-teal-900/85">
      {parts.map((part, index) => {
        if (part.startsWith("http")) {
          return <span key={index}>{part}</span>;
        }
        if (part.startsWith("/") && part.length > 2 && !part.includes(" ")) {
          const label = part.slice(1).replace(/-/g, " ");
          return (
            <Link
              key={`${part}-${index}`}
              href={part}
              className="font-medium text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
            >
              {label}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}

export function FaqSection({
  items,
  title = "Frequently asked questions",
  emitJsonLd = true,
  jsonLdId = "faq-json-ld",
}: FaqSectionProps) {
  return (
    <section className="section-block" aria-label={title}>
      {emitJsonLd ? (
        <Script id={jsonLdId} type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd(items))}
        </Script>
      ) : null}

      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      <div className="mt-2 divide-y divide-teal-200">
        {items.map((item) => (
          <details
            key={item.question}
            className="group py-4"
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open) {
                trackExpand(item.question);
              }
            }}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-teal-950 [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <span
                aria-hidden
                className="ml-2 text-teal-700 transition motion-safe:group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <LinkedAnswer text={item.answer} />
          </details>
        ))}
      </div>
    </section>
  );
}
