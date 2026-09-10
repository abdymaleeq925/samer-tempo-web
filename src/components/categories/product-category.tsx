'use client';

import Image from 'next/image';

import { ProductCard } from '@/components/categories/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useLang } from '@/context/lang-context';
import { Category, Product } from '@/data/mock-catalog';

interface ProductCategoryPageProps {
  category: Category;
  products: Product[];
}

export function ProductCategoryPage({
  category,
  products,
}: ProductCategoryPageProps) {
  const { dict, lang } = useLang();

  return (
    <section className="py-10 min-h-screen">
      <div className="mx-auto px-4 lg:px-8 xl:px-18">
        <div className="mb-12 border-b border-zinc-800 pb-12">
          <h1 className="text-3xl md:text-4xl font-bold capitalize mb-6">
            {category?.title[lang]}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
            {category && (
              <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden border border-black">
                <Image
                  src={category.image}
                  alt={category.slug}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            )}
            <div className="xl:col-span-2">
              <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">
                {category?.description[lang]}
              </p>
            </div>
          </div>
        </div>
        <>
          <h2 className="text-3xl md:text-4xl font-bold capitalize mb-6">
            {dict.product?.relatedProducts}
          </h2>
          {products.length > 0 ? (
            <Carousel
              opts={{
                align: 'start',
                loop: false,
              }}
              className="w-full"
              aria-label={dict.common.search.title ?? 'Products carousel'}
            >
              <CarouselContent className="-ml-4">
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/6"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="text-center py-20">{dict.common.noProducts}</div>
          )}
        </>
      </div>
    </section>
  );
}
