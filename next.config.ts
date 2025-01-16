import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/.' : '',
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
