import Link from "next/link";

const navLinkClass =
  "text-teal-100/90 transition-colors hover:text-white";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-700/40 bg-teal-900/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4">
        <Link
          href="/blou"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Blou App
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm">
          <Link className={navLinkClass} href="/blou">
            Bloü
          </Link>
          <Link className={navLinkClass} href="/blou/guides">
            Quit smoking guides
          </Link>
          <Link className={navLinkClass} href="/blou/tools">
            Quit smoking tools
          </Link>
          <Link className={navLinkClass} href="/about">
            About
          </Link>
          <Link className={navLinkClass} href="/content">
            Content
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-teal-700"
            href="/blou/tools"
          >
            Start with tools
          </Link>
        </nav>
      </div>
    </header>
  );
}
