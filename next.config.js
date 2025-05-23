/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent.cdninstagram.com",
      "instagram.fxyz1-1.fna.fbcdn.net",
      "scontent-gig4-1.cdninstagram.com",
      "scontent.cdninstagram.com",
      // outros domínios se necessário
    ],
    // remotePatterns: [ ... ] // você pode usar isso no lugar de domains para domínios dinâmicos ou subdomínios
  },
};

module.exports = nextConfig;
