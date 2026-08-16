import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

const footerLinkClass =
  "text-teal-900/80 hover:text-teal-950 hover:underline";

const quitLinks = [
  { href: "/how-to-quit-smoking", label: "How to quit smoking" },
  { href: "/guides", label: "Guides & timelines" },
  { href: "/tools", label: "Tools & calculators" },
  { href: "/best-quit-smoking-apps", label: "Compare quit apps" },
] as const;

const companyLinks = [
  { href: "/about", label: "About Blou" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-teal-200 bg-teal-50 py-10 text-sm text-teal-900/80">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-teal-950">Quit smoking</p>
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
          <p className="text-sm font-semibold text-teal-950">Company</p>
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
      <div className="mx-auto mt-10 w-full max-w-5xl border-t border-teal-200 px-6 pt-8 text-xs text-teal-900/70">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. Content on this site is for
          general education and does not replace advice from a qualified
          clinician. If you are in a medical emergency, contact local emergency
          services.
        </p>
      </div>
    </footer>
  );
}
