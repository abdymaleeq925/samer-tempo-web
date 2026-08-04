import { MOCK_PRODUCTS } from '@/data/mock-catalog';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/catalog/product-detail';

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export default async function Page ({ params }: PageProps) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = MOCK_PRODUCTS.filter( (p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  return (
    <ProductDetail product={product} relatedProducts={relatedProducts}/>
  );
};