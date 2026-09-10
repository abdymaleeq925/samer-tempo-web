import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductCategoryPage } from '@/components/categories/product-category';
import type { Locale } from '@/config/locales';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';
import { getLanguageAlternates } from '@/lib/utils';

interface PageProps {
  params: Promise<{ lang: Locale; category: string }>;
}

function findCategory(category: string) {
  return MOCK_CATEGORIES.find(
    (cat) =>
      cat.id === `cat-${category}` ||
      cat.slug === category ||
      cat.id === category,
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, category } = await params;
  const categoryData = MOCK_CATEGORIES.find(
    (cat) =>
      cat.id === `cat-${category}` ||
      cat.slug === category ||
      cat.id === category,
  );
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
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  const categoryData = findCategory(category);
  if (!categoryData) notFound();
  const categoryProducts = MOCK_PRODUCTS.filter(
    (product) => product.categoryId === categoryData.id,
  );

  return (
    <ProductCategoryPage category={categoryData} products={categoryProducts} />
  );
}
