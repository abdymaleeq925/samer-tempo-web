import { MOCK_PRODUCTS } from '@/data/mock-catalog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProductDetail from '@/components/catalog/product-detail';
import type { Locale } from '@/config/locales';

interface PageProps {
  params: Promise<{ lang: Locale; slug: string;}>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
  if (!product) return {};

  return {
    title: `${product.title[lang]} — ${product.article}`,
    description: product.description?.[lang]?.slice(0, 160),
  };
}

export default async function Page ({ params }: PageProps) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  if (!product) notFound();

  const relatedProducts = MOCK_PRODUCTS.filter( (p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  return (
    <ProductDetail product={product} relatedProducts={relatedProducts}/>
  );
};