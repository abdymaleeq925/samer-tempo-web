import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { getDictionary } from '@/lib/get-dictionary';
import { locales, type Locale } from '@/config/locales';

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LenisProvider from '@/components/providers/lenis-provider';

import "./globals.css";


const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    // Explicitly set the favicon icon
    icons: {
      icon: [
        { url: '/icon.png', type: 'image/png' },
      ],
      shortcut: '/icon.png',
      apple: '/icon.png',
    },
    alternates: {
      canonical: `https://samer.com.tr/${lang}`,
      languages: {
        'en-US': 'https://samer.com.tr/en',
        'tr-TR': 'https://samer.com.tr/tr',
        'ru-RU': 'https://samer.com.tr/ru',
        'de-DE': 'https://samer.com.tr/de',
      },
    },
  };
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children, params
}: Props) {

  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <Header lang={lang}/>
          {children}
          <Footer lang={lang}/>
        </LenisProvider>
      </body>
    </html>
  );
}
