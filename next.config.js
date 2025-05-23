/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent.cdninstagram.com",
      "instagram.fxyz1-1.fna.fbcdn.net",
      "scontent-gig4-1.cdninstagram.com",
      "scontent.xx.fbcdn.net",
      // Adicione outros domínios que apareçam nas URLs das imagens, se necessário!
    ],
  },
};

module.exports = nextConfig;
