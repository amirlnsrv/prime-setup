import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
    });

    return config;
  },
};

export default nextConfig;
