const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    domains: ['pbs.twimg.com'],
    unoptimized: true, // disable as we use export mode (which is not compatible see https://nextjs.org/docs/messages/export-image-api)
  },
};

module.exports = withMDX(nextConfig);
