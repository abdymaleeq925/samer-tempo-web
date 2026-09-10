import type { Metadata } from 'next';
import { Commissioner, Mulish, PT_Sans_Caption } from 'next/font/google';
import { notFound } from 'next/navigation';
import { cache } from 'react';

import { locales, type Locale } from '@/config/locales';
import { getDictionary } from '@/lib/get-dictionary';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import LenisProvider from '@/providers/lenis-provider';

import { AppBreadcrumbs } from '@/components/header/breadcrumbs';
import { Toaster } from '@/components/ui/sonner';
import { LangProvider } from '@/context/lang-context';
import './globals.css';

const getCachedDictionary = cache(getDictionary);

const commissioner = Commissioner({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-commissioner',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const mulish = Mulish({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-mulish',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-pt-caption',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr';

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

function assertLocale(lang: string): asserts lang is Locale {
  if (!(locales as readonly string[]).includes(lang)) notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  assertLocale(lang);
  const dict = await getCachedDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s — Samer Tempo`,
    },
    description: dict.meta.description,
    // Explicitly set the favicon icon
    icons: {
      icon: [{ url: '/icon.png', type: 'image/png' }],
      shortcut: '/icon.png',
      apple: '/icon.png',
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: 'Samer Tempo',
      locale: lang,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  assertLocale(lang);
  const dict = await getCachedDictionary(lang);
  return (
    <html lang={lang} className="h-full antialiased">
      <body
        className={`${commissioner.variable} ${mulish.variable} ${ptSansCaption.variable} font-sans min-h-full flex flex-col`}
      >
        <LenisProvider>
          <LangProvider lang={lang} dict={dict}>
            <Header />
            <AppBreadcrumbs />
            <main className="flex-1"> {children} </main>
            <Toaster />
            <Footer />
          </LangProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
