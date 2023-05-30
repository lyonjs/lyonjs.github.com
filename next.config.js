const withMDX = require('@next/mdx')();

const ContentSecurityPolicy = `
  default-src 'self' 'unsafe-inline' https://lyonjs.org;
  script-src 'self' 'unsafe-inline' https://vercel.live/;
  img-src 'self' https://secure-content.meetupstatic.com/ https://images.ctfassets.net/ https://assets.vercel.com/;
  frame-src https://www.youtube.com/;
  connect-src 'self' https://vitals.vercel-insights.com/;
`;

let CSP_RULE = [];

if (process.env.NODE_ENV !== 'development') {
  CSP_RULE = [
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    },
  ];
}

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
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          ...CSP_RULE,
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
