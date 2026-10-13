"use client";

import { useState } from "react";

type EmbedCalculatorSnippetProps = {
  title?: string;
  description?: string;
  code: string;
};

export function EmbedCalculatorSnippet({
  title = "Embed this calculator on your site",
  description = "Copy the snippet below to embed Blou's money saved calculator in your blog or publication. Use of the calculator requires attribution to tryblou.com.",
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
    <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-teal-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-teal-900/80">{description}</p>
      <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-50">
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={onCopy}
        className="mt-3 rounded-xl bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
      >
        {copied ? "Copied" : "Copy snippet"}
      </button>
    </section>
  );
}
