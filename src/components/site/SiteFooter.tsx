import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

const footerLinkClass =
  "text-teal-900/80 hover:text-teal-900 hover:underline dark:text-teal-100/80 dark:hover:text-teal-100";

const quitLinks = [
  { href: "/how-to-quit-smoking", label: "How to quit smoking" },
  { href: "/prepare-to-quit-smoking", label: "Prepare to quit" },
  { href: "/guides", label: "Guides & timelines" },
  { href: "/tools", label: "All tools" },
  { href: "/tools/money-saved", label: "Money saved calculator" },
  { href: "/tools/lung-recovery", label: "Lung recovery timeline" },
  { href: "/calculators", label: "Calculators by country" },
  { href: "/best-quit-smoking-apps", label: "Best quit smoking apps" },
] as const;

const countryLinks = [
  { href: "/calculators/united-states", label: "United States" },
  { href: "/calculators/united-kingdom", label: "United Kingdom" },
  { href: "/calculators/australia", label: "Australia" },
  { href: "/calculators/vietnam", label: "Vietnam" },
  { href: "/calculators/indonesia", label: "Indonesia" },
] as const;

const companyLinks = [
  { href: "/about", label: "About Blou" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-teal-200/80 bg-teal-50 py-10 text-sm text-teal-900/80 dark:border-teal-800/80 dark:bg-teal-950/40 dark:text-teal-100/80">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 md:grid-cols-3">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-teal-950 dark:text-teal-100">
            Quit smoking
          </h2>
          <ul className="mt-3 space-y-2">
            {quitLinks.map((item) => (
              <li key={item.href}>
                <Link className={footerLinkClass} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-teal-950 dark:text-teal-100">
            By country
          </h2>
          <ul className="mt-3 space-y-2">
            {countryLinks.map((item) => (
              <li key={item.href}>
                <Link className={footerLinkClass} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-teal-950 dark:text-teal-100">
            Company
          </h2>
          <ul className="mt-3 space-y-2">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link className={footerLinkClass} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a className={footerLinkClass} href={`mailto:${CONTACT_EMAIL}`}>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-5xl border-t border-teal-200 px-6 pt-8 text-xs text-teal-900/70 dark:border-teal-800 dark:text-teal-100/70">
        <p className="text-center">
          © {new Date().getFullYear()} {SITE_NAME}. Content on this site is for
          general education and does not replace advice from a qualified
          clinician. If you are in a medical emergency, contact local emergency
          services.
        </p>
      </div>
    </footer>
  );
}
