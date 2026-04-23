import Link from "next/link";

const footerLinkClass =
  "text-teal-900/80 hover:text-teal-900 hover:underline dark:text-teal-100/80 dark:hover:text-teal-100";

const bloüLinks = [
  { href: "/blou/guides", label: "Guides & timelines" },
  { href: "/blou/tools", label: "All tools" },
  { href: "/blou/tools/money-saved", label: "Money saved calculator" },
  { href: "/blou/tools/lung-recovery", label: "Lung recovery timeline" },
  { href: "/blou/calculators", label: "Calculators by country" },
] as const;

const countryLinks = [
  { href: "/blou/calculators/united-states", label: "United States" },
  { href: "/blou/calculators/united-kingdom", label: "United Kingdom" },
  { href: "/blou/calculators/australia", label: "Australia" },
  { href: "/blou/calculators/vietnam", label: "Vietnam" },
  { href: "/blou/calculators/indonesia", label: "Indonesia" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-teal-200/80 bg-teal-50 py-10 text-sm text-teal-900/80 dark:border-teal-800/80 dark:bg-teal-950/40 dark:text-teal-100/80">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-teal-950 dark:text-teal-100">
            Quit smoking (Bloü)
          </h2>
          <ul className="mt-3 space-y-2">
            {bloüLinks.map((item) => (
              <li key={item.href}>
                <Link className={footerLinkClass} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <ul className="space-y-1.5 border-l border-teal-300 pl-3 dark:border-teal-700">
                {countryLinks.map((item) => (
                  <li key={item.href}>
                    <Link className={footerLinkClass} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-teal-950 dark:text-teal-100">
            Site
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link className={footerLinkClass} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={footerLinkClass} href="/content">
                Content
              </Link>
            </li>
            <li>
              <Link className={footerLinkClass} href="/blou/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={footerLinkClass} href="/blou/terms">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-5xl border-t border-teal-200 px-6 pt-8 text-center dark:border-teal-800">
        © {new Date().getFullYear()} TryBlou
      </div>
    </footer>
  );
}
