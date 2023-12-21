/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  serverlessConfig: {
    experimental: {
      ssr: {
        cache: "none",
      },
    },
  },
};

module.exports = nextConfig;
