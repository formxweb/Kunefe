import type { NextConfig } from "next";

// GitHub Pages gibi alt dizinde yayınlamak için: NEXT_PUBLIC_BASE_PATH=/Kunefe
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
