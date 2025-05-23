import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "scontent.cdninstagram.com",
      "instagram.fxyz1-1.fna.fbcdn.net",
      // adicione outros domínios aqui conforme necessário
    ],
  },
};

export default nextConfig;
