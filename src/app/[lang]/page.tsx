import HeroCollage from '@/components/homepage/hero-collage';
import FeatureCards from '@/components/homepage/feature-card';
import About from '@/components/homepage/about';
import CategoryShowcase from '@/components/homepage/category-showcase';

import type { Metadata } from 'next';
import { getDictionary } from '@/lib/get-dictionary';
import { getLanguageAlternates } from '@/lib/utils';
import type { Locale } from '@/config/locales';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: getLanguageAlternates(lang, ''),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'}/${lang}`,
    },
  };
}

export default function HomePage() {

  return (
    <>
      <HeroCollage/>
      <FeatureCards/> 
      <About/>
      <CategoryShowcase/>
    </>
  );
}