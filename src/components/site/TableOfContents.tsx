import Link from "next/link";

export type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  items: TocItem[];
  className?: string;
};

export function TableOfContents({ items, className }: TableOfContentsProps) {
  if (items.length === 0) return null;

  const list = (
    <ol className="mt-2 space-y-1.5 text-sm leading-6 text-teal-900">
      {items.map((item, index) => (
        <li key={item.id} className="flex gap-3">
          <span className="tabular w-6 shrink-0 text-teal-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Link
            href={`#${item.id}`}
            className="text-teal-800 underline decoration-teal-300 underline-offset-2 transition hover:text-teal-950"
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
        <details className="group border border-teal-200 px-4 py-3">
          <summary className="cursor-pointer list-none text-sm font-semibold text-teal-950 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-2">
              On this page
              <span
                aria-hidden
                className="text-teal-600 transition motion-safe:group-open:rotate-90"
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
        <p className="text-sm font-medium text-teal-700">On this page</p>
        {list}
      </nav>
    </>
  );
}
