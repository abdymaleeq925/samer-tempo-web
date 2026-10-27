// src/app/robots.ts
import type { MetadataRoute } from 'next';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'
).replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  // Set ALLOW_INDEXING=false on staging/preview deployments.
  const allowIndexing = process.env.ALLOW_INDEXING !== 'false';

  if (!allowIndexing) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
