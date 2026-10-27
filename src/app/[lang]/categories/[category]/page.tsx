import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProductCategoryPage } from '@/components/categories/product-category';
import { locales, type Locale } from '@/config/locales';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';
import { getLanguageAlternates } from '@/lib/utils';
import { getDictionary } from '@/lib/get-dictionary';
import { toCardData } from '@/lib/product-card-data';

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

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    MOCK_CATEGORIES.map((c) => ({ lang, category: c.id.replace(/^cat-/, '') })),
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
  const { lang, category } = await params;
  const categoryData = findCategory(category);
  if (!categoryData) notFound();

  const dict = await getDictionary(lang);

  const categoryProducts = MOCK_PRODUCTS.filter(
    (product) => product.categoryId === categoryData.id,
  ).map((product) => toCardData(product, lang, dict));

  return (
    <ProductCategoryPage
      title={categoryData.title[lang]}
      description={categoryData.description[lang]}
      image={categoryData.image}
      cards={categoryProducts}
      lang={lang}
      labels={{
        oem: dict.common.oemNumber,
        viewDetails: dict.common.viewDetails,
        related: dict.product?.relatedProducts ?? '',
        noProducts: dict.common.noProducts,
      }}
    />
  );
}
