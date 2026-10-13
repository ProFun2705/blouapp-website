import Link from "next/link";
import Image from "next/image";
import { appStoreHref } from "@/lib/appStore";
import { MobileMenu } from "@/components/site/MobileMenu";

export const NAV_LINKS = [
  { href: "/how-to-quit-smoking", label: "Quit plan" },
  { href: "/guides", label: "Guides" },
  { href: "/tools", label: "Tools" },
  { href: "/best-quit-smoking-apps", label: "Compare apps" },
] as const;

const headerCtaHref = appStoreHref({ campaign: "site", placement: "header" });

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-white" aria-label="Blou home">
          <Image
            src="/logos/blou-logo.png"
            alt=""
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">Blou</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} className="text-teal-50/85 transition-colors hover:text-white" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-ink transition hover:bg-accent-soft"
            href={headerCtaHref}
            target="_blank"
            rel="noopener"
            data-event="app_store_click"
            data-event-label="header"
          >
            Get the app
          </a>
          <MobileMenu links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
