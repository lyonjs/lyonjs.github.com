import { NextRequest, NextResponse } from 'next/server';

const IS_PROD_ENV = process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'preview';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    default-src 'none';
    script-src 'self' 'nonce-${nonce}' https://vercel.live/;
    img-src 'self' 'nonce-${nonce}' https://secure-content.meetupstatic.com/ https://images.ctfassets.net/ https://assets.vercel.com/ https://secure.meetupstatic.com/ https://img.youtube.com/;
    style-src 'self' 'unsafe-inline';
    frame-src https://www.youtube.com/ https://vercel.live/;
    manifest-src 'self';
    object-src 'none';
    form-action 'none';
    connect-src 'self' https://vitals.vercel-insights.com/ https://vercel.live/;
    font-src 'self';
    base-uri 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const requestHeaders = new Headers(request.headers);

  if (IS_PROD_ENV) {
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  IS_PROD_ENV && response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
