import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { APP_STORE_CANONICAL_URL } from "@/lib/appStore";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TryBlou",
  description: "TryBlou website",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TryBlou",
  url: "https://tryblou.com",
  sameAs: [APP_STORE_CANONICAL_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L5RLBSF7KK"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L5RLBSF7KK');
      `}</Script>
      <Script id="org-json-ld" type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </Script>
      <body className="flex min-h-full flex-col">
        <SiteHeader />

        <main className="flex-1">
          <div className="mx-auto w-full max-w-5xl px-6 py-10">
            {children}
          </div>
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
