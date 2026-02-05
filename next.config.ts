import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Xiyar',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
