import AboutPage from "@/components/about-page";

import type { Metadata } from 'next';
import { getDictionary } from '@/lib/get-dictionary';
import { getLanguageAlternates } from "@/lib/utils";
import type { Locale } from '@/config/locales';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.about?.company?.badge ?? 'About Us',
    description: dict.about?.company?.heading,
    alternates: getLanguageAlternates(lang, '/about'),
    openGraph: {
      title: `${dict.about?.company?.badge ?? 'About Us'} — Samer Tempo`,
      description: dict.about?.company?.heading,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'}/${lang}/about`,
    },
  };
}

export default function Page() {
  return <AboutPage/>
}