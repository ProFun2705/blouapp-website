import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalyticsListeners } from "@/components/site/AnalyticsListeners";
import { CookieConsent } from "@/components/site/CookieConsent";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  ORG_JSON_LD,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOFTWARE_APPLICATION_JSON_LD,
  WEBSITE_JSON_LD,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} – Quit Smoking Tracker (iOS)`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  category: "health",
  keywords: [
    "quit smoking app",
    "quit smoking tracker",
    "stop smoking app",
    "nicotine withdrawal",
    "smoke free tracker",
    "quit smoking timeline",
    "money saved quitting smoking",
    "Blou app",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Quit Smoking Tracker (iOS)`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Quit Smoking Tracker`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Quit Smoking Tracker (iOS)`,
    description: SITE_DESCRIPTION,
    images: ["/og/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    title: SITE_NAME,
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
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
        window.gtag = gtag;
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          wait_for_update: 500
        });
        gtag('js', new Date());
        gtag('config', 'G-L5RLBSF7KK', { anonymize_ip: true });
      `}</Script>
      <Script id="org-json-ld" type="application/ld+json">
        {JSON.stringify(ORG_JSON_LD)}
      </Script>
      <Script id="website-json-ld" type="application/ld+json">
        {JSON.stringify(WEBSITE_JSON_LD)}
      </Script>
      <Script id="software-app-json-ld" type="application/ld+json">
        {JSON.stringify(SOFTWARE_APPLICATION_JSON_LD)}
      </Script>
      <body className="flex min-h-full flex-col">
        <SiteHeader />

        <main className="flex-1">
          <div className="mx-auto w-full max-w-5xl px-6 py-10">
            {children}
          </div>
        </main>

        <SiteFooter />
        <AnalyticsListeners />
        <CookieConsent />
      </body>
    </html>
  );
}
