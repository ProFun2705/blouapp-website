import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the bloü application.",
};

export default function BlouTermsPage() {
  return (
    <article className="flex flex-col gap-8">
      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Application: bloü · Effective date: 2026-02-14
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          These terms of service (&quot;Terms&quot;) apply to the bloü app (the
          &quot;Application&quot;) for mobile devices, created by Heorhi Talochka (the
          &quot;Service Provider&quot;) as a commercial service.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          By downloading or using the Application, you agree to these Terms.
          Please read them carefully before using the Application.
        </p>
      </header>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">1. Acknowledgement</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          You and the Service Provider acknowledge that this agreement is
          concluded between you and the Service Provider only, and not with
          Apple Inc. (&quot;Apple&quot;). The Service Provider, not Apple, is solely
          responsible for the Application and the content thereof.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">2. Scope of License</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The license granted to you for the Application is limited to a
          non-transferable license to use the Application on Apple-branded
          products that you own or control, as permitted by the Apple Media
          Services Terms and Conditions.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">3. Intellectual Property</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Unauthorized copying, modification, source extraction, translation, or
          derivative works are prohibited. All trademarks, copyrights, database
          rights, and intellectual property rights related to the Application
          remain the property of the Service Provider.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          4. Changes to the Application and Charges
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Service Provider may modify the Application or charge for services
          at any time and for any reason. Any applicable charges will be clearly
          communicated before they apply.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">5. Data and Device Security</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Application stores and processes data you provide to deliver the
          service. All data is stored locally on your device, and you are
          responsible for maintaining device security.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">
          6. Disclaimers and Limitations of Responsibility
        </h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Some features require internet connectivity. Carrier/data charges may
          apply. The Service Provider cannot be held responsible for outages,
          third-party service issues, or device limitations outside their
          control.
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/85">
          <li>- Apple App Store & Analytics - for purchases and usage insights</li>
          <li>- Superwall - to manage subscriptions</li>
          <li>- Gemini API (Google) - to generate AI-altered images and AI-based quitting tips</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">7. Not Medical or Professional Advice</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Application and its content are for general wellness and
          motivational support only and do not constitute medical or
          psychological advice. Consult a qualified healthcare professional for
          personal care needs.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">8. Artificial Intelligence</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Application may use AI technologies to provide features. By using
          the Application, you acknowledge AI may process data to deliver those
          functionalities.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">9. Subscription and Payment Terms</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Application is free to download, but key features may require a
          paid subscription processed through Apple&apos;s App Store. Purchases
          are final except where required by law or Apple policy.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">10-15. Additional Legal Terms</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Warranty, maintenance/support, updates/termination, legal compliance,
          third-party terms, and third-party beneficiary provisions apply as
          described on AniDachi&apos;s official terms page for bloü.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">16. Developer Name and Address</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          For questions, complaints, or claims with respect to the Application,
          contact the Service Provider.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/blou"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← Back to Bloü
        </Link>
        <Link
          href="/blou/privacy"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Privacy Policy
        </Link>
      </div>
    </article>
  );
}
