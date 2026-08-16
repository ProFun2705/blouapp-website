"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildAppStoreUrl } from "@/lib/appStore";

const navLinkClass =
  "text-sm text-white/80 transition-colors hover:text-white pressable";

const links = [
  { href: "/how-to-quit-smoking", label: "Quit plan" },
  { href: "/guides", label: "Guides" },
  { href: "/tools", label: "Tools" },
  { href: "/best-quit-smoking-apps", label: "Compare" },
] as const;

const navAppStoreHref = buildAppStoreUrl({
  campaign: "site_header",
  itsct: "site_header",
  mttnsubad: "site_header",
});

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--ink)]">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight text-white"
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

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              className={navLinkClass}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="pressable inline-flex h-10 items-center justify-center rounded-sm bg-teal-600 px-4 text-sm font-medium text-white transition hover:bg-teal-700"
            href={navAppStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="cta_click"
            data-event-label="header"
          >
            Start tracking – free
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            className="pressable inline-flex h-10 items-center justify-center rounded-sm bg-teal-600 px-3 text-xs font-medium text-white"
            href={navAppStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="cta_click"
            data-event-label="header"
          >
            Get the app
          </a>
          <button
            type="button"
            className="pressable inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 text-white"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden className="text-lg leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="block py-2 text-base text-white"
                  href={link.href}
                  aria-current={
                    isCurrent(pathname, link.href) ? "page" : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
