import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the bloü application.",
};

const sections = [
  {
    title: "Nature of the service",
    paragraphs: [
      'The Application is a general wellness and motivation app. The tips, insights, and other content it provides are for informational and motivational support only and are not medical or professional health advice. If you have health concerns or need support with quitting, you should consult a qualified healthcare provider. This policy describes how we collect and use data in providing that wellness support.',
    ],
  },
  {
    title: "1. Information We Collect",
    paragraphs: [
      "The Application collects information when you download and use it. This information may include:",
    ],
    bullets: [
      "Your device's Internet Protocol address (e.g. IP address)",
      "The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages",
      "The time spent on the Application overall",
      "The operating system you use on your mobile device",
      "Crash logs (via Apple's diagnostics tools)",
      "App usage data (via Apple and Superwall)",
    ],
    trailingParagraphs: [
      "The Application does not gather precise information about the location of your mobile device.",
      "For a better experience, the Service Provider may require you to provide certain personally identifiable information, including but not limited to: name, age range, sex, and face photos. The information that the Service Provider requests will be retained and used as described in this privacy policy.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: [
      "Information we collect is used to operate and improve the Application and the service. Personally identifiable information you provide is retained by the Service Provider and used as described in this privacy policy.",
    ],
  },
  {
    title: "3. Third-Party Services",
    paragraphs: [
      "Only aggregated, anonymized data is periodically transmitted to external services to help the Service Provider improve the Application and the service. The Service Provider may share your information with third parties in the ways described in this privacy statement.",
      "The Application relies on the following third-party tools:",
    ],
    bullets: [
      "Apple App Store & Analytics - for purchases and usage insights",
      "Superwall - to manage subscriptions",
      "Gemini API (Google) - to generate AI-altered images and AI-based quitting tips",
    ],
    trailingParagraphs: [
      "These providers may collect anonymized data according to their own privacy practices. No personally identifiable information is intentionally transmitted to them.",
    ],
  },
  {
    title: "4. Use of Artificial Intelligence",
    paragraphs: [
      "The Application uses Artificial Intelligence (AI) technologies to enhance user experience and provide certain features. The AI components may process user data to deliver personalized content, recommendations, or automated functionalities. All AI processing is performed in accordance with this privacy policy and applicable laws. If you have questions about the AI features or data processing, please contact the Service Provider.",
    ],
  },
  {
    title: "5. Your Rights and Choices",
    paragraphs: [
      "Opt-out. You can stop all collection of information by the Application by uninstalling it. You may use the standard uninstall processes available as part of your mobile device or via the mobile application marketplace or network.",
      "Data deletion. If you would like the Service Provider to delete User Provided Data that you have provided via the Application, please contact them at hello.blou.app@gmail.com. They will respond within a reasonable time.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "The Service Provider will retain User Provided Data for as long as you use the Application and for a reasonable time thereafter. For requests to delete User Provided Data, see section 5 above.",
    ],
  },
  {
    title: "7. Children's Privacy",
    paragraphs: [
      "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.",
      "The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages children never to submit personally identifiable information through the Application and/or services. The Service Provider encourages parents and legal guardians to monitor their children's internet usage and to help enforce this policy by instructing their children never to provide personally identifiable information through the Application and/or services without permission.",
      "If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or services, please contact the Service Provider at hello.blou.app@gmail.com so that they can take the necessary actions.",
      "You must be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries the Service Provider may allow your parent or guardian to do so on your behalf).",
    ],
  },
  {
    title: "8. Security",
    paragraphs: [
      "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect the information they process and maintain.",
    ],
  },
  {
    title: "9. Changes to This Privacy Policy",
    paragraphs: [
      "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes; continued use of the Application is deemed approval of all changes.",
    ],
  },
  {
    title: "10. Your Consent",
    paragraphs: [
      "By using the Application, you consent to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.",
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: [
      "If you have any questions regarding privacy while using the Application, or about the practices described here, please contact the Service Provider via email at hello.blou.app@gmail.com.",
    ],
  },
] as const;

export default function BlouPrivacyPage() {
  return (
    <article className="flex flex-col gap-8">
      <header className="rounded-3xl border border-teal-200/90 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-teal-950">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          Application: bloü · Effective date: 2026-02-14
        </p>
        <p className="mt-3 text-sm leading-7 text-teal-900/85">
          This privacy policy applies to the bloü app (the &quot;Application&quot;) for
          mobile devices, created by Heorhi Talochka (the &quot;Service Provider&quot;)
          as a commercial service. This service is intended for use &quot;AS IS&quot;.
        </p>
      </header>

      {sections.map((section) => (
        <section
          key={section.title}
          className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-teal-950">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-7 text-teal-900/85">
              {paragraph}
            </p>
          ))}
          {"bullets" in section && section.bullets ? (
            <ul className="mt-3 space-y-2 text-sm leading-7 text-teal-900/85">
              {section.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
          ) : null}
          {"trailingParagraphs" in section && section.trailingParagraphs
            ? section.trailingParagraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-teal-900/85">
                  {paragraph}
                </p>
              ))
            : null}
        </section>
      ))}

      <div className="flex flex-wrap gap-3">
        <Link
          href="/blou"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          ← Back to Bloü
        </Link>
        <Link
          href="/blou/terms"
          className="inline-flex h-10 items-center justify-center rounded-full border border-teal-300 px-4 text-sm font-medium text-teal-900 transition hover:bg-teal-50"
        >
          Terms of Service
        </Link>
      </div>
    </article>
  );
}
