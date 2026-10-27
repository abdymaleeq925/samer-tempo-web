import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductDetail from '@/components/categories/product-detail';
import { ProductBreadcrumbs } from '@/components/header/product-breadcrumbs';
import { locales, type Locale } from '@/config/locales';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';
import { getDictionary } from '@/lib/get-dictionary';
import { toCardData } from '@/lib/product-card-data';
import { getLanguageAlternates } from '@/lib/utils';

interface PageProps {
  params: Promise<{ lang: Locale; slug: string }>;
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    MOCK_PRODUCTS.map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
  if (!product) return {};

  const title = `${product.smrCode} - ${product.title[lang]}`;
  const description = product.description?.[lang]?.slice(0, 160);

  return {
    title,
    description,
    alternates: getLanguageAlternates(lang, `/product/${product.slug}`),
    openGraph: {
      title: `${title} — Samer Tempo`,
      description,
      images: product.images?.[0] ? [{ url: product.images[0] }] : [],
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'}/${lang}/product/${product.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug, lang } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  if (!product) notFound();

  const dict = await getDictionary(lang);
  const category = MOCK_CATEGORIES.find((c) => c.id === product.categoryId);
  const relatedCards = MOCK_PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id,
  )
    .slice(0, 8)
    .map((p) => toCardData(p, lang, dict));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title[lang],
    image: product.images,
    description: product.description?.[lang],
    sku: product.smrCode,
    mpn: product.smrCode,
    brand: {
      '@type': 'Brand',
      name: 'Samer Tempo',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductBreadcrumbs
        lang={lang}
        homeLabel={dict.navigation.home}
        categoryLabel={category?.title[lang]}
        categoryHref={
          category
            ? `/${lang}/categories/${category.id.replace(/^cat-/, '')}`
            : undefined
        }
        productTitle={product.title[lang]}
      />
      <ProductDetail product={product} relatedCards={relatedCards} />
    </>
  );
}
