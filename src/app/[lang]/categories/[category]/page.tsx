import type { Metadata } from 'next';

import { ProductCategoryPage } from '@/components/product-category';
import type { Locale } from '@/config/locales';
import { MOCK_CATEGORIES } from '@/data/mock-catalog';

interface PageProps {
  params: Promise<{ lang: Locale; category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, category } = await params;
  const categoryData = MOCK_CATEGORIES.find((cat) => cat.id === `cat-${category}`);
  if (!categoryData) return {};

  return {
    title: categoryData.title[lang],
    description: categoryData.description[lang]?.slice(0, 160),
  };
}

export default function Page() {
  return <ProductCategoryPage/>
}