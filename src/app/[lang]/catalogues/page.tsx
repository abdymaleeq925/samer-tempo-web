import type { Metadata } from 'next';

import { getDictionary } from '@/lib/get-dictionary';
import { getLanguageAlternates } from "@/lib/utils";
import type { Locale } from '@/config/locales';
import { Catalog } from "@/components/catalog/catalog";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.catalogues?.title ?? 'Catalogues',
    description: dict.catalogues?.subtitle,
    alternates: getLanguageAlternates(lang, '/catalogues'),
    openGraph: {
      title: `${dict.catalogues?.title ?? 'Catalogues'} — Samer Tempo`,
      description: dict.catalogues?.subtitle,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'}/${lang}/catalogues`,
    },
  };
}

export default function Page() {
  return <Catalog/>
}