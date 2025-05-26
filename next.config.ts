/* eslint-disable @typescript-eslint/no-require-imports */
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
};

const withNextIntl = require("next-intl/plugin")("./src/lib/i18n/request.ts");

module.exports = withNextIntl(nextConfig);

const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
};
