import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Only effective over HTTPS (ignored on http://localhost).
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF is smaller but slower to encode on a cold cache (first request per image).
    // If LCP is bad on a fresh server, drop 'image/avif' or warm the cache after deploy.
    formats: ['image/avif', 'image/webp'],
    qualities: [55, 75],
    // Product photos keep their file names when replaced: 7 days is a safe middle ground.
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  // output: 'standalone', // enable if you deploy with Docker / a Node server
};

export default nextConfig;
