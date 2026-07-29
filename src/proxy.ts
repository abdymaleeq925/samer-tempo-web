import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/config/locales';

const countryToLocaleMap: Record<string, string> = {
  TR: 'tr', CY: 'tr', AZ: 'tr', //Turkish
  RU: 'ru', BY: 'ru', KZ: 'ru', AM: 'ru', KG: 'ru', UZ: 'ru', TJ: 'ru', TM: 'ru', MD: 'ru', // Russian
  DE: 'de', AT: 'de', CH: 'de', LI: 'de', LU: 'de' // German
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore images, favicons, static files, and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Excludes files with extensions (.png, .svg, etc.)
  ) {
    return;
  }

  // Check if the URL already contains a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Detect country via Vercel GeoIP header
  const country = request.headers.get('x-vercel-ip-country') || '';
  let targetLocale = countryToLocaleMap[country];

  // Fallback to Accept-Language header if country is not mapped
  if (!targetLocale) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    if (acceptLanguage.includes('tr')) targetLocale = 'tr';
    else if (acceptLanguage.includes('ru')) targetLocale = 'ru';
    else if (acceptLanguage.includes('de')) targetLocale = 'de';
    else targetLocale = defaultLocale;
  }

  // Redirect to the URL prefixed with the detected locale
  request.nextUrl.pathname = `/${targetLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
};