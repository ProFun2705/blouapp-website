import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms of service for the Blou quit smoking tracker app and tryblou.com website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="flex flex-col gap-8">
      <Breadcrumbs items={[{ name: "Terms of Service", path: "/terms" }]} />

      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Application: Blou · Effective date: 2026-02-14 · Updated: 2026-04-20
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          These terms of service (&quot;Terms&quot;) apply to the Blou app (the
          &quot;Application&quot;) for mobile devices, created by Heorhi Talochka (the
          &quot;Service Provider&quot;) as a commercial service.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          By downloading or using the Application, you agree to these Terms.
          Please read them carefully before using the Application.
        </p>
      </header>

      {[
        {
          title: "1. Acknowledgement",
          body: "You and the Service Provider acknowledge that this agreement is concluded between you and the Service Provider only, and not with Apple Inc. (\"Apple\"). The Service Provider, not Apple, is solely responsible for the Application and the content thereof.",
        },
        {
          title: "2. Scope of license",
          body: "The license granted to you for the Application is limited to a non-transferable license to use the Application on Apple-branded products that you own or control, as permitted by the Apple Media Services Terms and Conditions.",
        },
        {
          title: "3. Intellectual property",
          body: "Unauthorized copying, modification, source extraction, translation, or derivative works are prohibited. All trademarks, copyrights, database rights, and intellectual property rights related to the Application remain the property of the Service Provider.",
        },
        {
          title: "4. Changes to the Application and charges",
          body: "The Service Provider may modify the Application or charge for services at any time and for any reason. Any applicable charges will be clearly communicated before they apply.",
        },
        {
          title: "5. Data and device security",
          body: "The Application stores and processes data you provide to deliver the service. Data relating to your quit is primarily stored locally on your device, and you are responsible for maintaining device security.",
        },
        {
          title: "6. Disclaimers and limitations of responsibility",
          body: "Some functions of the Application require an active internet connection. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance. Third-party services (Apple App Store & Analytics, Superwall, Gemini API) are used to deliver functionality.",
        },
        {
          title: "7. Not medical or professional advice",
          body: "The Application and all content provided through it — including tips, insights, weekly analyses, and any other text or features — are for general wellness and motivational support only. They do not constitute medical, psychological, or other professional health advice. If you have concerns about your physical or mental health, nicotine dependence, or quitting smoking, you should consult a doctor or other appropriate healthcare professional.",
        },
        {
          title: "8. Artificial intelligence",
          body: "The Application may use AI technologies to provide features. By using the Application, you acknowledge AI may process data to deliver those functionalities.",
        },
        {
          title: "9. Subscription and payment terms",
          body: "The Application is free to download, but key features may require a paid subscription processed through Apple's App Store. Purchases are final except where required by law or Apple policy.",
        },
        {
          title: "10. Warranty",
          body: "The Service Provider is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the Application to you.",
        },
        {
          title: "11. Maintenance and support",
          body: "The Service Provider is solely responsible for providing any maintenance and support services with respect to the Application, as specified in these Terms or as required under applicable law.",
        },
        {
          title: "12. Updates and termination",
          body: "The Service Provider may update the Application from time to time. The Service Provider may cease providing the Application and may terminate your right to use it at any time without notice.",
        },
        {
          title: "13. Legal compliance",
          body: "You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo or designated by the U.S. Government as a \"terrorist supporting\" country, and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.",
        },
        {
          title: "14. Third-party terms and beneficiary",
          body: "When using the Application, you must comply with all applicable third-party terms of agreement (for example, your wireless data service agreement when using the Application over a mobile network). Apple and Apple's subsidiaries are third-party beneficiaries of these Terms.",
        },
        {
          title: "15. Developer contact",
          body: "For questions, complaints, or claims with respect to the Application, contact the Service Provider at hello.blou.app@gmail.com.",
        },
      ].map((s) => (
        <section
          key={s.title}
          className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-teal-950">{s.title}</h2>
          <p className="mt-3 text-sm leading-7 text-teal-900/85">{s.body}</p>
        </section>
      ))}

      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← Back to home
        </Link>
        <Link
          href="/privacy"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Privacy Policy
        </Link>
      </div>
    </article>
  );
}
