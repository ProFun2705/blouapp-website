import Link from "next/link";

export default function NotFound() {
  return (
    <div className="masthead">
      <p className="text-sm font-medium text-teal-700">Page not found</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-teal-950">
        This page is not on the calendar.
      </h1>
      <p className="mt-4 max-w-[65ch] text-base leading-7 text-teal-900/85">
        The link may be old, or the page may have moved. Start from the quit
        plan, the guides, or the homepage.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="pressable inline-flex h-11 items-center justify-center rounded-sm bg-teal-600 px-5 text-sm font-medium text-white hover:bg-teal-700"
        >
          Home
        </Link>
        <Link
          href="/how-to-quit-smoking"
          className="pressable inline-flex h-11 items-center justify-center rounded-sm border border-teal-200 px-5 text-sm font-medium text-teal-900 hover:bg-teal-50"
        >
          Quit plan
        </Link>
        <Link
          href="/guides"
          className="pressable inline-flex h-11 items-center justify-center rounded-sm border border-teal-200 px-5 text-sm font-medium text-teal-900 hover:bg-teal-50"
        >
          Guides
        </Link>
      </div>
    </div>
  );
}
