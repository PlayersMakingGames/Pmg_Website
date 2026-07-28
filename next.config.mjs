/** @type {import('next').NextConfig} */
const nextConfig = {
  // Focus_Website is its own separate Next.js app/deployment (own repo, own
  // Vercel project, own Supabase reads for the leaderboard/shop) — this
  // transparently proxies pmg.cards/focus/* to it, so visitors never see
  // the underlying focus-website-phi.vercel.app URL. That deployment has
  // basePath: "/focus" set, so its own routes already expect this prefix.
  async rewrites() {
    return [
      {
        source: "/focus",
        destination: "https://focus-website-phi.vercel.app/focus",
      },
      {
        source: "/focus/:path*",
        destination: "https://focus-website-phi.vercel.app/focus/:path*",
      },
    ];
  },
};

export default nextConfig;
