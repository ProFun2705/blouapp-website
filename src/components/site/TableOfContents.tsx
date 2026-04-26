import Link from "next/link";

export type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  items: TocItem[];
  className?: string;
};

/**
 * "On this page" jump links. Mobile: <details> so the outline does not push key content
 * down. md+: static nav. Only one block is visible at a breakpoint.
 */
export function TableOfContents({ items, className }: TableOfContentsProps) {
  if (items.length === 0) return null;

  const list = (
    <ol className="mt-0 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-teal-900">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={`#${item.id}`}
            className="text-teal-800 underline decoration-teal-300 underline-offset-2 transition hover:text-teal-950 hover:decoration-teal-500"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <div className={["md:hidden", className].filter(Boolean).join(" ")}>
        <details className="group rounded-2xl border border-teal-200 bg-teal-50/50 p-4 open:bg-white">
          <summary className="cursor-pointer list-none text-sm font-semibold text-teal-950 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-2">
              On this page
              <span
                aria-hidden
                className="text-teal-600 transition group-open:rotate-90"
              >
                ›
              </span>
            </span>
          </summary>
          {list}
        </details>
      </div>

      <nav
        aria-label="On this page"
        className={["hidden md:block", className].filter(Boolean).join(" ")}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          On this page
        </p>
        {list}
      </nav>
    </>
  );
}
