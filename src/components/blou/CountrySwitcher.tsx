import Link from "next/link";
import { countries } from "@/lib/countryData";

type CountrySwitcherProps = {
  currentSlug?: string;
};

export function CountrySwitcher({ currentSlug }: CountrySwitcherProps) {
  return (
    <nav aria-label="Country calculators" className="flex flex-wrap gap-2">
      <Link
        href="/tools/money-saved"
        aria-current={!currentSlug ? "page" : undefined}
        className={[
          "pressable inline-flex h-10 items-center rounded-sm border px-3 text-sm",
          !currentSlug
            ? "border-teal-900 bg-teal-900 text-white"
            : "border-teal-200 text-teal-900 hover:bg-teal-50",
        ].join(" ")}
      >
        Global
      </Link>
      {countries.map((country) => {
        const active = country.slug === currentSlug;
        return (
          <Link
            key={country.slug}
            href={`/calculators/${country.slug}`}
            aria-current={active ? "page" : undefined}
            className={[
              "pressable inline-flex h-10 items-center rounded-sm border px-3 text-sm",
              active
                ? "border-teal-900 bg-teal-900 text-white"
                : "border-teal-200 text-teal-900 hover:bg-teal-50",
            ].join(" ")}
          >
            {country.name}
          </Link>
        );
      })}
    </nav>
  );
}
