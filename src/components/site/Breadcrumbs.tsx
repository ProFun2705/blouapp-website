import Link from "next/link";
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <Script id="breadcrumb-json-ld" type="application/ld+json">
        {JSON.stringify(buildBreadcrumbJsonLd(trail))}
      </Script>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-teal-800/80">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1">
                {isLast ? (
                  <span className="font-medium text-teal-900">{item.name}</span>
                ) : (
                  <Link
                    href={item.path}
                    className="underline-offset-2 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast ? <span aria-hidden>/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
