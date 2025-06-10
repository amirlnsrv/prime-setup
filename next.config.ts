/* eslint-disable @typescript-eslint/no-require-imports */
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BASE_URL}/:path*`,
      },
    ];
  },
};

const withNextIntl = require("next-intl/plugin")("./src/lib/i18n/request.ts");

module.exports = withNextIntl(nextConfig);
