/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    domains: ['pbs.twimg.com'],
  },
};

module.exports = nextConfig;
