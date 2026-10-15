"use client";

import { useState } from "react";

type EmbedCalculatorSnippetProps = {
  title?: string;
  description?: string;
  code: string;
};

export function EmbedCalculatorSnippet({
  title = "Embed this tool on your site",
  description = "Free to embed on blogs, clinic sites, and quit programs. Please keep the attribution link to tryblou.com.",
  code,
}: EmbedCalculatorSnippetProps) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <section className="rounded-card border border-line bg-surface p-6 shadow-card">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-ink-muted">{description}</p>
      <pre className="mt-4 overflow-x-auto rounded-xl bg-ink p-4 text-xs text-teal-50">
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={onCopy}
        className="mt-3 min-h-11 rounded-full bg-accent-strong px-5 text-sm font-semibold text-white transition hover:bg-ink"
      >
        {copied ? "Copied" : "Copy embed code"}
      </button>
    </section>
  );
}
