"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function AndroidWaitlistCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      if (!email || !/.+@.+\..+/.test(email)) {
        throw new Error("Please enter a valid email address.");
      }

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "android_waitlist_signup", {
          event_category: "conversion",
          event_label: "android_waitlist",
          method: "website",
        });
      }

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, list: "android" }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <div className="section-block">
      <p className="text-sm font-medium text-teal-700">Android waitlist</p>
      <h3 className="mt-1 text-xl font-semibold text-teal-950">
        Want Blou on Android?
      </h3>
      <p className="mt-2 max-w-[65ch] text-base leading-6 text-teal-900/80">
        We&apos;re building an Android version next. Drop your email and we&apos;ll
        let you know the day it launches. No spam, unsubscribe anytime.
      </p>

      {status === "success" ? (
        <p
          className="mt-4 border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900"
          role="status"
          aria-live="polite"
        >
          You&apos;re on the list. Keep an eye on your inbox.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="android-waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="android-waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 w-full rounded-sm border border-teal-200 bg-white px-4 text-sm text-teal-950 placeholder:text-teal-700/50"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="pressable h-11 rounded-sm bg-teal-700 px-5 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:opacity-60"
          >
            {status === "submitting" ? "Joining…" : "Join waitlist"}
          </button>
        </form>
      )}
      {error ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
