import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "http", hostname: "googleusercontent.com" },
    ],
  },
  // Compress output for faster delivery
  compress: true,
};

export default nextConfig;
