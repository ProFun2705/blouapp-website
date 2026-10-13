import Link from "next/link";
import { AUTHOR, MEDICAL_REVIEWER } from "@/lib/site";

type BylineProps = {
  datePublished: string;
  dateModified: string;
  readTimeMinutes?: number;
};

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Byline({ datePublished, dateModified, readTimeMinutes }: BylineProps) {
  return (
    <div className="flex flex-col gap-1 text-xs text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
      <span>
        By{" "}
        <Link href={AUTHOR.url} className="font-medium text-ink hover:underline">
          {AUTHOR.name}
        </Link>
      </span>
      <span aria-hidden className="hidden sm:inline">·</span>
      <span>
        Reviewed by{" "}
        <Link
          href={MEDICAL_REVIEWER.url}
          className="font-medium text-ink hover:underline"
        >
          {MEDICAL_REVIEWER.name}
        </Link>
      </span>
      <span aria-hidden className="hidden sm:inline">·</span>
      <time dateTime={datePublished}>Published {formatDate(datePublished)}</time>
      {dateModified !== datePublished ? (
        <>
          <span aria-hidden className="hidden sm:inline">·</span>
          <time dateTime={dateModified}>Updated {formatDate(dateModified)}</time>
        </>
      ) : null}
      {readTimeMinutes ? (
        <>
          <span aria-hidden className="hidden sm:inline">·</span>
          <span>{readTimeMinutes} min read</span>
        </>
      ) : null}
    </div>
  );
}
