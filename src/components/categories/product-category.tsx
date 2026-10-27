import Image from 'next/image';

import { ProductCard } from '@/components/categories/product-card';
import type { ProductCardData } from '@/lib/product-card-data';

interface ProductCategoryPageProps {
  title: string;
  description: string;
  image: string;
  cards: ProductCardData[];
  lang: string;
  labels: {
    oem: string;
    viewDetails: string;
    related: string;
    noProducts: string;
  };
}

export function ProductCategoryPage({
  title,
  description,
  image,
  cards,
  lang,
  labels,
}: ProductCategoryPageProps) {
  return (
    <section className="py-10 min-h-screen">
      <div className="mx-auto px-4 lg:px-8 xl:px-18">
        <div className="mb-12 border-b border-border-subtle pb-12">
          <h1 className="text-3xl md:text-4xl font-bold capitalize mb-6">
            {title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
            <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden border border-border-strong">
              <Image
                src={image}
                alt={title}
                fill
                preload
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="xl:col-span-2">
              <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-6">
          {labels.related}
        </h2>
        {cards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cards.map((card) => (
              <ProductCard
                key={card.id}
                card={card}
                lang={lang}
                labels={{ oem: labels.oem, viewDetails: labels.viewDetails }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">{labels.noProducts}</div>
        )}
      </div>
    </section>
  );
}
