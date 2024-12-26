/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  
});


const path = require('path');

const nextConfig = {
  
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subset: ["latin"] } },
    ],
    taint: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "pbcdn1.podbean.com",
      }
    ],
  },
  webpack: (config) => {
    // Resolve the '@' alias to the project root directory
    config.resolve.alias['@'] = path.resolve(__dirname);

    // Include any additional webpack configuration here

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
