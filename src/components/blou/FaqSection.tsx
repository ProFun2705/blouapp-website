import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
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
  /** Kept for backwards compatibility; native JSON-LD scripts need no id. */
  jsonLdId?: string;
};

// A site path like "/how-to-quit-smoking" or "/guides/cravings", only when it
// starts a word, so "24/7" or "and/or" stay plain text.
const INTERNAL_PATH = /(?<=^|[\s(])(\/[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)/g;

/** Turns site paths written inside answers ("see /how-to-quit-smoking") into links. */
function linkify(answer: string): ReactNode[] {
  return answer.split(INTERNAL_PATH).map((part, i) => {
    if (i % 2 === 1 && part.length > 1) {
      const label = part.split("/").filter(Boolean).at(-1)?.replace(/-/g, " ") ?? part;
      return (
        <Link key={`${part}-${i}`} href={part} className="font-medium text-accent-strong underline underline-offset-2">
          {label}
        </Link>
      );
    }
    return part;
  });
}

/**
 * Server-rendered FAQ. Expand tracking is handled by the global
 * AnalyticsListeners (`toggle` events on `details[data-faq]`).
 */
export function FaqSection({
  items,
  title = "Frequently asked questions",
  emitJsonLd = true,
}: FaqSectionProps) {
  return (
    <section className="rounded-card border border-line bg-surface p-6 shadow-card" aria-label={title}>
      {emitJsonLd ? <JsonLd data={buildFaqJsonLd(items)} /> : null}

      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            data-faq={item.question}
            className="group rounded-xl border border-line bg-surface-muted p-4 open:bg-surface"
          >
            <summary className="flex min-h-6 cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-ink">
              <span>{item.question}</span>
              <span
                aria-hidden
                className="ml-2 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line text-xs text-ink transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-ink-muted">{linkify(item.answer)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
