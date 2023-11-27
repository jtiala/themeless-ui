import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // TODO: Remove when https://github.com/vercel/next.js/issues/33693 gets resolved
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
};

export default withContentlayer(nextConfig);
