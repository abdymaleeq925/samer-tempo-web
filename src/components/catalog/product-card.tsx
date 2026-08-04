'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FileText, View } from 'lucide-react';

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

  return (
    <div className="group flex flex-col justify-between rounded-xl border border-black p-4 transition-all duration-300">
      <div>
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-transparent mb-4 border border-black">
          {product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={product.title[lang]}
              fill
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <FileText className="h-12 w-12" />
            </div>
          )}
          <span className="absolute top-2.5 left-2.5 rounded-md bg-black px-2 py-1 text-xs font-caption font-semibold text-brand border backdrop-blur-md">
            {product.article}
          </span>
        </div>
        {displayedOems.length > 0 && (
          <div className="mb-2 flex flex-wrap items-center gap-1.5 text-xs font-sans">
            <span>{dict.common.oemNumber}:</span>
            {displayedOems.map((oem) => (
              <span
                key={oem}
                className="bg-black px-1.5 py-0.5 rounded border text-brand"
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
          <h3 className="text-base font-semibold line-clamp-2 leading-snug">
            {product.title[lang]}
          </h3>
        </div>

        {product.specs && product.specs.length > 0 && (
          <div className="mb-4 space-y-1.5 border-t border-black pt-3">
            {product.specs.map((spec, index) => {
              return (
                <div key={index} className="grid grid-cols-2 gap-2 text-sm items-start">
                  <span className="wrap-break-word leading-tight">
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
      </div>
      <div className="mt-4 pt-3 border-t border-zinc-800/80">
        <Button
          nativeButton={false}
          className="w-full bg-black hover:bg-transparent text-brand font-medium text-sm h-9 transition-colors"
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