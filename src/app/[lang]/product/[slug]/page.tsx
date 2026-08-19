import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import ProductDetail from '@/components/categories/product-detail';
import type { Locale } from '@/config/locales';
import { getLanguageAlternates } from '@/lib/utils';
import { MOCK_PRODUCTS } from '@/data/mock-catalog';

interface PageProps {
  params: Promise<{ lang: Locale; slug: string;}>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
  if (!product) return {};

  const title = `${product.title[lang]} — ${product.article}`;
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

export default async function Page ({ params }: PageProps) {
  const { slug, lang } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  if (!product) notFound();

  const relatedProducts = MOCK_PRODUCTS.filter( (p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title[lang],
    image: product.images,
    description: product.description?.[lang],
    sku: product.article,
    mpn: product.article,
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
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </>
  );
};