import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blou", destination: "/", permanent: true },
      { source: "/blou/guides", destination: "/guides", permanent: true },
      { source: "/blou/guides/:slug", destination: "/guides/:slug", permanent: true },
      { source: "/blou/tools", destination: "/tools", permanent: true },
      { source: "/blou/tools/:path*", destination: "/tools/:path*", permanent: true },
      { source: "/blou/calculators", destination: "/calculators", permanent: true },
      { source: "/blou/calculators/:path*", destination: "/calculators/:path*", permanent: true },
      { source: "/blou/privacy", destination: "/privacy", permanent: true },
      { source: "/blou/terms", destination: "/terms", permanent: true },
      { source: "/content", destination: "/guides", permanent: true },
      { source: "/content/:path*", destination: "/guides", permanent: true },
      { source: "/quit-smoking", destination: "/guides", permanent: true },
      { source: "/quit-smoking/:path*", destination: "/guides/:path*", permanent: true },
      { source: "/tools/money-calculator", destination: "/tools/money-saved", permanent: true },
      {
        source: "/quit-smoking-calculator/:country",
        destination: "/calculators/:country",
        permanent: true,
      },
      // Oct 2026 consolidation: one owner URL per keyword cluster.
      { source: "/best-quit-smoking-app-for-heavy-smokers", destination: "/best-quit-smoking-apps", permanent: true },
      { source: "/best-quit-smoking-app-for-beginners", destination: "/best-quit-smoking-apps", permanent: true },
      { source: "/free-quit-smoking-app", destination: "/best-quit-smoking-apps", permanent: true },
      { source: "/smoking-cessation-app", destination: "/best-quit-smoking-apps", permanent: true },
      { source: "/quit-smoking-tracker", destination: "/", permanent: true },
      { source: "/stay-quit-after-one-month", destination: "/guides/what-happens-after-1-month", permanent: true },
      { source: "/guides/anxiety", destination: "/quit-smoking-with-anxiety", permanent: true },
      { source: "/guides/depression", destination: "/quit-smoking-with-depression", permanent: true },
      { source: "/guides/weight-gain", destination: "/quit-smoking-without-gaining-weight", permanent: true },
    ];
  },
};

export default nextConfig;
