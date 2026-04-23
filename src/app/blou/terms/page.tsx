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
          responsible for the Application and the content thereof. These Terms
          may not provide for usage rules that conflict with the Apple Media
          Services Terms and Conditions as of the effective date (which the
          Service Provider acknowledges having had the opportunity to review).
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">2. Scope of License</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The license granted to you for the Application is limited to a
          non-transferable license to use the Application on Apple-branded
          products that you own or control, as permitted by the Apple Media
          Services Terms and Conditions. The Application may be accessed and
          used by other accounts associated with the purchaser via Family
          Sharing or volume purchasing as permitted by Apple.
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
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          In the event of any third-party claim that the Application or your
          possession or use of the Application infringes that third party&apos;s
          intellectual property rights, the Service Provider, not Apple, will
          be solely responsible for the investigation, defense, settlement, and
          discharge of any such claim.
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
          Internet and connectivity. Some functions of the Application require
          an active internet connection (Wi-Fi or mobile network). The Service
          Provider cannot be held responsible if the Application does not
          function at full capacity due to lack of access to Wi-Fi or if you
          have exhausted your data allowance.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Carrier and data charges. If you use the Application outside a Wi-Fi
          area, your mobile network provider&apos;s agreement terms still apply.
          You may incur charges from your mobile provider for data usage, or
          other third-party charges.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          By using the Application, you accept responsibility for any such
          charges, including roaming data charges if you use the Application
          outside your home territory without disabling data roaming. If you are
          not the bill payer for the device, the Service Provider assumes that
          you have obtained permission from the bill payer.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Device and usage. The Service Provider cannot always assume
          responsibility for your use of the Application. For example, it is
          your responsibility to ensure that your device remains charged. If
          your device runs out of battery and you are unable to access the
          service, the Service Provider cannot be held responsible.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Third-party services. The Service Provider strives to keep the
          Application updated and accurate but relies on third parties to provide
          information and functionality. These include:
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/85">
          <li>- Apple App Store & Analytics – for purchases and usage insights</li>
          <li>- Superwall – to manage subscriptions</li>
          <li>- Gemini API (Google) – to generate AI-altered images and AI-based quitting tips</li>
        </ul>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Service Provider accepts no liability for any loss, direct or
          indirect, that you experience as a result of relying on this
          functionality.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Product claims. You and the Service Provider acknowledge that the
          Service Provider, not Apple, is responsible for addressing any claims
          by you or any third party relating to the Application or your
          possession or use of the Application.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">7. Not Medical or Professional Advice</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Application and all content provided through it—including tips,
          insights, weekly analyses, and any other text or features—are for
          general wellness and motivational support only. They do not constitute
          medical, psychological, or other professional health advice.
          Application is not a substitute for advice, diagnosis, or treatment
          from a qualified healthcare provider.
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          If you have concerns about your physical or mental health, nicotine
          dependence, or quitting smoking, you should consult a doctor or other
          appropriate healthcare professional. Use of the app does not create a
          doctor–patient, therapist–client, or other professional relationship
          between you and the Application.
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
        <h2 className="text-xl font-semibold text-teal-950">10. Warranty</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Service Provider is solely responsible for any product warranties,
          whether express or implied by law, to the extent not effectively
          disclaimed. In the event of any failure of the Application to conform
          to any applicable warranty, you may notify Apple, and Apple will
          refund the purchase price for the Application to you.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">11. Maintenance and Support</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Service Provider is solely responsible for providing any
          maintenance and support services with respect to the Application, as
          specified in these Terms or as required under applicable law.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">12. Updates and Termination</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          The Service Provider may update the Application from time to time. The
          Service Provider may cease providing the Application and may terminate
          your right to use it at any time without notice.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">13. Legal Compliance</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          You represent and warrant that (i) you are not located in a country
          that is subject to a U.S. Government embargo or designated by the U.S.
          Government as a &quot;terrorist supporting&quot; country, and (ii) you are
          not listed on any U.S. Government list of prohibited or restricted
          parties.
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">14. Third-Party Terms</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          When using the Application, you must comply with all applicable
          third-party terms of agreement (for example, your wireless data
          service agreement when using the Application over a mobile network).
        </p>
      </section>

      <section className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-950">15. Third-Party Beneficiary</h2>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          You and the Service Provider acknowledge and agree that Apple, and
          Apple&apos;s subsidiaries, are third-party beneficiaries of these Terms.
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
