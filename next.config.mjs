/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",
  i18n: {
    defaultLocale: "pl-PL",
    locales: ["pl-PL", "en"],
  },
};

export default config;
