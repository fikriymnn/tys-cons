/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  //experimental: true,
  serverlessConfig: {
    experimental: {
      ssr: {
        cache: "full",
      },
    },
  },
};

module.exports = nextConfig;
