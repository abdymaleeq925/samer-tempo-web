import { View } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import type { ProductCardData } from '@/lib/product-card-data';

interface ProductCardProps {
  card: ProductCardData;
  lang: string;
  labels: { oem: string; viewDetails: string };
}

export function ProductCard({ card, lang, labels }: ProductCardProps) {
  const href = `/${lang}/product/${card.slug}`;

  return (
    <div className="group flex flex-col h-full rounded-xl border border-border-subtle p-4 transition-all duration-300 hover:scale-99 hover:shadow-xl">
      <Link href={href} prefetch={false} className="block group/image">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4 border border-border-strong">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <span className="absolute top-2.5 left-2.5 rounded-md bg-ink/80 backdrop-blur-md px-2 py-1 text-xs font-caption font-semibold text-brand-text border border-white/10">
            {card.smrCode}
          </span>
        </div>
      </Link>

      {card.oems.length > 0 && (
        <div className="mb-2 flex h-12 flex-wrap items-start xl:items-center gap-1 overflow-hidden text-sm">
          <span className="font-caption">{labels.oem}:</span>
          {card.oems.map((oem) => (
            <span
              key={oem}
              className="px-1 rounded border border-border-strong"
            >
              {oem}
            </span>
          ))}
          {card.oemMore > 0 && <span>+{card.oemMore}</span>}
        </div>
      )}

      <div className="h-14 mb-3 flex items-start">
        <Link
          href={href}
          prefetch={false}
          className="hover:text-brand transition-colors"
        >
          <span className="text-xs text-brand-text font-caption uppercase tracking-wide mb-1 block">
            {card.subcategory}
          </span>
          <h2 className="text-base font-semibold line-clamp-2 leading-snug">
            {card.title}
          </h2>
        </Link>
      </div>

      {card.specs.length > 0 && (
        <div className="mb-4 space-y-1.5 border-t border-border-strong pt-3">
          {card.specs.map((spec, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-2 text-sm items-start"
            >
              <span className="font-caption wrap-break-word leading-tight">
                {spec.label}:
              </span>
              <span className="font-medium text-right wrap-break-word leading-tight">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto pt-3 border-t border-border-strong">
        <Button
          nativeButton={false}
          variant="outline"
          className="w-full border-border-strong bg-transparent font-medium text-base transition-colors"
          render={
            <Link
              href={href}
              prefetch={false}
              className="inline-flex items-center justify-center gap-2"
            >
              <View className="w-3.5 h-3.5" />
              {labels.viewDetails}
            </Link>
          }
        />
      </div>
    </div>
  );
}
