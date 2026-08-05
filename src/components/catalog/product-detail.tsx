'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/lang-context';
import { Product } from '@/data/mock-catalog';
import { ProductCard } from './product-card';
import { ChevronRight } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const { dict, lang } = useLang();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = product.images?.length > 0 ? product.images : ['/products/placeholder.png'];

  const mainImageAlt = (dict.product?.imageAlt ?? '{title} — photo {index}')
    .replace('{title}', product.title[lang])
    .replace('{index}', String(selectedImageIndex + 1));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* GALLERY */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-square w-full rounded-2xl border border-black overflow-hidden">
            <Image
              src={images[selectedImageIndex] || images[0]}
              alt={mainImageAlt}
              fill
              className="object-contain p-6 transition-all duration-300"
              priority
            />
          </div>

          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => {
                const isSelected = selectedImageIndex === idx;
                const thumbnailLabel = (dict.product?.thumbnailAlt ?? 'View photo {index}').replace('{index}', String(idx + 1));
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    aria-label={thumbnailLabel}
                    aria-pressed={isSelected}
                    className={`relative w-20 h-20 shrink-0 rounded-lg border-2 overflow-hidden cursor-pointer transition-all ${
                      isSelected
                        ? 'border-brand-dark bg-transparent'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-contain p-2" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* PRODUCT INFO */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b-2 border-zinc-400 pb-4">
              <span className="text-base w-fit font-caption font-bold border rounded-xl p-2 border-black uppercase tracking-wider">
                {product.article}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight">
                {product.title[lang]}
              </h1>
            </div>

            {product.description && (
              <p className="leading-relaxed text-base sm:text-lg">
                {product.description[lang]}
              </p>
            )}

            <div className="space-y-3">
              <h2 className="text-xl font-bold font-heading">
                {dict.common.specifications}
              </h2>
              <div className="bg-zinc-100 rounded-xl p-4 sm:p-5 border border-zinc-200/80">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {product.specs?.map((spec, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between py-2 border-b border-zinc-200/60 last:border-b-0 sm:last:border-b border-solid"
                    >
                      <dt className="text-md font-caption font-medium text-zinc-500 uppercase tracking-wide">
                        {spec.label[lang]}
                      </dt>
                      <dd className="text-md font-semibold text-zinc-900 mt-0.5 wrap-break-word">
                        {typeof spec.value === 'string' ? spec.value : spec.value[lang]}
                      </dd>
                    </div>
                  ))}
                  {product.oemNumbers && (
                    <div className="flex flex-col justify-between py-2 border-b border-zinc-200/60 last:border-b-0 sm:last:border-b border-solid">
                      <dt className="text-md font-caption font-medium text-zinc-500 uppercase tracking-wide">
                        {dict.common.oemNumber}
                      </dt>
                      <dd className="text-md font-semibold text-zinc-900 mt-0.5 wrap-break-word">
                        {Array.isArray(product.oemNumbers) ? product.oemNumbers.join(', ') : product.oemNumbers}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SIMILAR PRODUCTS */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="mt-16 pt-12 border-t border-zinc-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
              {dict.product.relatedProducts}
            </h2>

            <Link
              href={`/${lang}/categories/${product.categoryId.replace(/^cat-/, '')}`}
              className="flex items-center text-base font-semibold hover:text-brand-dark transition-colors"
            >
              {dict.product.viewAll} <ChevronRight/>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((item) => <ProductCard key={item.id} product={item}/>)}
          </div>
        </div>
      )}
    </div>
  );
}