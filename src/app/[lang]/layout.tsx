import { cache } from "react";
import type { Metadata } from "next";
import { Commissioner, PT_Sans_Caption, Mulish } from "next/font/google";

import { getDictionary } from '@/lib/get-dictionary';
import { locales, type Locale } from '@/config/locales';

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import LenisProvider from '@/components/providers/lenis-provider';

import "./globals.css";
import { LangProvider } from "@/context/lang-context";

const getCachedDictionary = cache(getDictionary);

const commissioner = Commissioner({
  subsets: ["latin", 'latin-ext', "cyrillic"],
  variable: "--font-commissioner",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mulish = Mulish({
  subsets: ["latin", 'latin-ext', "cyrillic"],
  variable: "--font-mulish",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin", 'latin-ext', "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-pt-caption",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const dict = await getCachedDictionary(lang);

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

export default async function RootLayout({ children, params }: Props) {

  const { lang } = (await params) as { lang: Locale };
  const dict = await getCachedDictionary(lang);
  return (
    <html
      lang={lang}
      className="h-full antialiased"
    >
      <body className={`${commissioner.variable} ${mulish.variable} ${ptSansCaption.variable} font-sans min-h-full flex flex-col`}>
        <LenisProvider>
          <LangProvider lang={lang} dict={dict}>
            <Header/>
              <main className="flex-1">
                {children}
              </main>
            <Footer/>
          </LangProvider>     
        </LenisProvider>
      </body>
    </html>
  );
}
