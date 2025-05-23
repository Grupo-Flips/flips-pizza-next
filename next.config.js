/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent-gig4-1.cdninstagram.com",
      "scontent.cdninstagram.com",
      "instagram.fxyz1-1.fna.fbcdn.net",
      "scontent.xx.fbcdn.net",
      "scontent.xx.cdninstagram.com",
      // adicione outros domínios se necessário, copiando do link das imagens quebradas
    ],
  },
};

module.exports = nextConfig;
