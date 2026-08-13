'use client';

import Image from 'next/image';
import Link from 'next/link';
import { View } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLang } from '@/context/lang-context';
import { Product } from '@/data/mock-catalog';
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dict, lang } = useLang();
  const displayedOems = product.oemNumbers?.slice(0, 2) || [];
  const hasMoreOems = (product.oemNumbers?.length || 0) > 2;
  const productImg = product.images?.[0] || '/products/placeholder.png';

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-black p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <>
        <Link href={`/${lang}/product/${product.slug}`} className="block group/image">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-transparent mb-4 border border-black">
            <Image
              src={productImg}
              alt={product.title[lang]}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <span className="absolute top-2.5 left-2.5 rounded-md bg-ink/80 backdrop-blur-md px-2 py-1 text-xs font-caption font-semibold text-brand border border-white/10">
              {product.article}
            </span>
          </div>
        </Link>
        {displayedOems.length > 0 && (
          <div className="mb-2 flex h-14 flex-wrap items-center gap-1 overflow-hidden text-sm">
            <span className='font-caption'>{dict.common.oemNumber}:</span>
            {displayedOems.map((oem) => (
              <span
                key={oem}
                className="px-1 py-0.5 rounded border border-black"
              >
                {oem}
              </span>
            ))}
            {hasMoreOems && (
              <span>+{product.oemNumbers!.length - 2}</span>
            )}
          </div>
        )}
        <div className="h-12 mb-3 flex items-start">
          <Link href={`/${lang}/product/${product.slug}`} className="hover:text-brand transition-colors">
            <h3 className="text-base font-semibold line-clamp-2 leading-snug">
              {product.title[lang]}
            </h3>
          </Link>
        </div>

        {product.specs && product.specs.length > 0 && (
          <div className="mb-4 space-y-1.5 border-t border-black pt-3">
            {product.specs.map((spec, index) => {
              return (
                <div key={index} className="grid grid-cols-2 gap-2 text-sm items-start">
                  <span className="font-caption wrap-break-word leading-tight">
                    {spec.label[lang]}:
                  </span>
                  <span className="font-medium text-right wrap-break-word leading-tight">
                    {typeof spec.value === "string" ? spec.value : spec.value[lang]}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </>
      <div className="mt-4 pt-3 border-t border-black">
        <Button
          nativeButton={false}
          className="w-full border-black bg-transparent text-black font-medium text-base transition-colors hover:bg-black hover:text-white"
          render={
            <Link
              href={`/${lang}/product/${product.slug}`}
              className="inline-flex items-center justify-center gap-2"
            >
              <View className="w-3.5 h-3.5" />
              {dict.common.viewDetails}
            </Link>
          }
        />
      </div>
    </div>
  );
}