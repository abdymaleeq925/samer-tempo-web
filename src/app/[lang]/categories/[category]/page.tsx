"use client"

import { useParams } from 'next/navigation';
import { ProductCard } from '@/components/catalog/product-card';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';
import { useLang } from '@/context/lang-context';
import Image from 'next/image';

export default function ProductCategoryPage() {
  const { dict, lang } = useLang();
  const { category } = useParams();
  const currentCategoryData = MOCK_CATEGORIES.find((cat) => cat.id === `cat-${category}`);
  const categoryProducts = MOCK_PRODUCTS.filter((product) => product.categoryId === `cat-${category}`);
  return (
    <section className="py-10 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12 border-b border-zinc-800 pb-12">
          <h1 className="text-3xl md:text-4xl font-bold capitalize mb-6">
            {currentCategoryData?.title[lang]}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {currentCategoryData && (
              <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden border border-black">
                <Image
                  src={currentCategoryData.image}
                  alt={currentCategoryData.slug}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="md:col-span-2">
              <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">
                {currentCategoryData?.description[lang]}
              </p>
            </div>
          </div>
        </div>
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            {dict.common.noProducts}
          </div>
        )}

      </div>
    </section>
  );
}