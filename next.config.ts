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
    ];
  },
};

export default nextConfig;
