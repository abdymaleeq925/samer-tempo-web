import type { Metadata } from 'next';

import { ProductCategoryPage } from '@/components/product-category';
import type { Locale } from '@/config/locales';
import { MOCK_CATEGORIES } from '@/data/mock-catalog';
import { getLanguageAlternates } from '@/lib/utils';

interface PageProps {
  params: Promise<{ lang: Locale; category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, category } = await params;
  const categoryData = MOCK_CATEGORIES.find((cat) => cat.id === `cat-${category}` || cat.slug === category || cat.id === category);
  if (!categoryData) return {};

  const title = categoryData.title[lang];
  const description = categoryData.description[lang]?.slice(0, 160);

  return {
    title,
    description,
    alternates: getLanguageAlternates(lang, `/categories/${category}`),
    openGraph: {
      title: `${title} — Samer Tempo`,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'}/${lang}/categories/${category}`,
    }
  };
}

export default function Page() {
  return <ProductCategoryPage/>
}