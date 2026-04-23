import Link from "next/link";
import Image from "next/image";
import { buildAppStoreUrl } from "@/lib/appStore";

const navLinkClass = "text-teal-100/90 transition-colors hover:text-white";
const navAppStoreHref = buildAppStoreUrl({
  campaign: "site_header",
  itsct: "site_header",
  mttnsubad: "site_header",
});

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-700/40 bg-teal-900/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
          aria-label="Blou – Home"
        >
          <Image
            src="/logos/blou-logo-black-name.png"
            alt="Blou"
            width={80}
            height={24}
            className="h-6 w-auto brightness-0 invert"
            priority
          />
          <span className="sr-only">Blou</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm">
          <Link className={navLinkClass} href="/how-to-quit-smoking">
            Quit plan
          </Link>
          <Link className={navLinkClass} href="/guides">
            Guides
          </Link>
          <Link className={navLinkClass} href="/tools">
            Tools
          </Link>
          <Link className={navLinkClass} href="/best-quit-smoking-apps">
            Compare
          </Link>
          <a
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-teal-700"
            href={navAppStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="cta_click"
            data-event-label="header"
          >
            Start tracking – free
          </a>
        </nav>
      </div>
    </header>
  );
}
