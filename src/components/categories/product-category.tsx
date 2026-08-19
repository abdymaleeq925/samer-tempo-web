"use client"

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';

import { ProductCard } from '@/components/categories/product-card';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';
import { useLang } from '@/context/lang-context';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductCategoryPage() {
  const { dict, lang } = useLang();
  const { category } = useParams();
  const currentCategoryData = MOCK_CATEGORIES.find((cat) => cat.id === `cat-${category}`);
  if (!currentCategoryData) notFound();
  const categoryProducts = MOCK_PRODUCTS.filter((product) => product.categoryId === `cat-${category}`);
  return (
    <section className="py-10 min-h-screen">
      <div className="mx-auto px-4 lg:px-8 xl:px-18">
        <div className="mb-12 border-b border-zinc-800 pb-12">
          <h1 className="text-3xl md:text-4xl font-bold capitalize mb-6">
            {currentCategoryData?.title[lang]}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
            {currentCategoryData && (
              <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden border border-black">
                <Image
                  src={currentCategoryData.image}
                  alt={currentCategoryData.slug}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="xl:col-span-2">
              <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">
                {currentCategoryData?.description[lang]}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold capitalize mb-6">
            {dict.product?.relatedProducts}
          </h1>
          { categoryProducts.length > 0 ? (
              <Carousel
                opts={{
                  align: "start",
                  loop: false
                }}
                className='w-full'
                aria-label={dict.common.allCategories ?? "Products carousel"}
              >
                <CarouselContent className='-ml-4'>
                  {categoryProducts.map((product) => (
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
              <div className="text-center py-20">
                {dict.common.noProducts}
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}