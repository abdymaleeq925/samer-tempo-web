import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { locales, type Locale } from '@/config/locales';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLanguageAlternates(lang: Locale, path: string = '') {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';

  const languages: Record<string, string> = {};
  locales.forEach((locale) => {
    languages[locale] = `${SITE_URL}/${locale}${cleanPath}`;
  });

  languages['x-default'] = `${SITE_URL}/en${cleanPath}`;

  return {
    canonical: `${SITE_URL}/${lang}${cleanPath}`,
    languages,
  };
}