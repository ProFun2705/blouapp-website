import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
      <body className="min-h-full flex flex-col">
        <header className="border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <a href="/" className="text-sm font-semibold tracking-tight">
              TryBlou
            </a>
            <nav className="flex items-center gap-4 text-sm text-zinc-700 dark:text-zinc-200">
              <a className="hover:underline" href="/about">
                About
              </a>
              <a className="hover:underline" href="/content">
                Content
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto w-full max-w-5xl px-6 py-10">
            {children}
          </div>
        </main>

        <footer className="border-t border-black/10 py-8 text-center text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          <div className="mx-auto w-full max-w-5xl px-6">
            © {new Date().getFullYear()} TryBlou
          </div>
        </footer>
      </body>
    </html>
  );
}
