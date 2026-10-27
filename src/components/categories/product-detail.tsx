'use client';

import { ChevronRight, Play, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { ProductCard } from '@/components/categories/product-card';

import { useLang } from '@/context/lang-context';
import type { Product } from '@/data/mock-catalog';
import type { ProductCardData } from '@/lib/product-card-data';

interface ProductDetailProps {
  product: Product;
  relatedCards: ProductCardData[];
}

// Превращает ссылку YouTube в embed-ссылку. Если ссылки нет или она неверная, вернёт null.
function getEmbedVideoUrl(url?: string) {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube-nocookie.com/embed/${match[2]}?autoplay=1`
    : null;
}

export default function ProductDetail({
  product,
  relatedCards,
}: ProductDetailProps) {
  const { dict, lang } = useLang();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [videoIsShown, setVideoIsShown] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const zoomRef = useRef<HTMLDivElement>(null);

  const images = product.images?.length
    ? product.images
    : ['/products/placeholder.png'];
  const mainImage = images[selectedImageIndex] ?? images[0];

  const mainImageAlt = (dict.product?.imageAlt ?? '{title} — photo {index}')
    .replace('{title}', product.title[lang])
    .replace('{index}', String(selectedImageIndex + 1));

  const embedUrl = getEmbedVideoUrl(product.videoUrl);

  // Зум: двигаем точку, вокруг которой увеличивается картинка
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    if (zoomRef.current) {
      zoomRef.current.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
    }
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* MAIN PRODUCT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* GALLERY (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div
            className="group relative aspect-square overflow-hidden rounded-xl border border-border-subtle bg-surface lg:cursor-zoom-in"
            onMouseMove={onMove}
          >
            <div
              ref={zoomRef}
              className="absolute inset-0 transition-transform duration-200 ease-out lg:group-hover:scale-[2.2]"
            >
              <Image
                src={mainImage}
                alt={mainImageAlt}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-contain p-6"
                quality={55}
                preload
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Подсказка про зум */}
            <div className="absolute top-3 right-3 z-10 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 opacity-80 group-hover:opacity-0 transition-opacity pointer-events-none">
              <ZoomIn className="w-3.5 h-3.5 text-brand" />
              <span>{dict.product?.hoverToZoom ?? 'Hover to zoom'}</span>
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => {
                const isSelected = selectedImageIndex === idx;
                const thumbnailLabel = (
                  dict.product?.thumbnailAlt ?? 'View photo {index}'
                ).replace('{index}', String(idx + 1));
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    aria-label={thumbnailLabel}
                    aria-pressed={isSelected}
                    className={`relative w-20 h-20 shrink-0 rounded-lg border-2 overflow-hidden cursor-pointer transition-all ${
                      isSelected
                        ? 'border-brand-dark bg-transparent'
                        : 'border-border-subtle hover:border-border-subtle'
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* PRODUCT INFO (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col gap-4 border-b-2 border-border-subtle pb-4">
              <span className="text-base w-fit font-caption font-bold border rounded-xl p-2 border-border-strong uppercase tracking-wider">
                {product.smrCode}
              </span>
              <span className="text-sm font-caption">
                {dict.navigation.category.subcategories?.[
                  (product.subcategoryId as keyof typeof dict.navigation.category.subcategories) ??
                    ''
                ] ?? product.subcategoryId}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-ink leading-tight">
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
              <div className="bg-surface-sunken rounded-xl p-4 sm:p-5 border border-border-subtle">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {product.specs?.map((spec, index) => (
                    <div
                      key={index}
                      className="flex flex-col py-2 border-b border-border-subtle last:border-b-0 sm:last:border-b border-solid"
                    >
                      <dt className="text-md font-caption font-medium text-muted-ink uppercase tracking-wide">
                        {spec.label[lang]}
                      </dt>
                      <dd className="text-md font-semibold text-ink mt-0.5 wrap-break-word">
                        {typeof spec.value === 'string'
                          ? spec.value
                          : spec.value[lang]}
                      </dd>
                    </div>
                  ))}
                  {product.oemNumbers && (
                    <div className="flex flex-col justify-between py-2 border-b border-border-subtle last:border-b-0 sm:last:border-b border-solid">
                      <dt className="text-md font-caption font-medium text-muted-ink uppercase tracking-wide">
                        {dict.common.oemNumber}
                      </dt>
                      <dd className="text-md font-semibold text-ink mt-0.5 wrap-break-word">
                        {Array.isArray(product.oemNumbers)
                          ? product.oemNumbers.join(', ')
                          : product.oemNumbers}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>

            {/* ВИДЕО: весь блок показываем только если есть рабочая ссылка */}
            {embedUrl && (
              <div className="pt-4 border-t border-border-subtle space-y-3">
                <button
                  className="text-lg font-bold flex items-center gap-2 cursor-pointer hover:-translate-y-1 transition-all"
                  onClick={() => setVideoIsShown(!videoIsShown)}
                  aria-expanded={videoIsShown}
                >
                  <Play
                    className={`w-5 h-5 text-brand fill-current ${
                      videoIsShown ? 'rotate-90' : ''
                    }`}
                  />
                  {dict.product?.videoTab ?? 'Video Review'}
                </button>
                {videoIsShown && (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-ink border border-border-subtle">
                    {isVideoLoaded ? (
                      <iframe
                        src={embedUrl}
                        title={`${product.title[lang]} - Video Review`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    ) : (
                      <button
                        onClick={() => setIsVideoLoaded(true)}
                        className="w-full h-full flex flex-col items-center justify-center gap-3 bg-ink hover:bg-surface-sunken text-white transition-colors group cursor-pointer"
                      >
                        <div className="w-16 h-16 rounded-full bg-brand text-ink flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-8 h-8 fill-current translate-x-0.5" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-300">
                          {dict.product?.clickToPlayVideo ??
                            'Click to watch video overview'}
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SIMILAR PRODUCTS */}
      {relatedCards.length > 0 && (
        <div className="mt-16 pt-12 border-t border-border-subtle">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-ink">
              {dict.product.relatedProducts}
            </h2>
            <Link
              href={`/${lang}/categories/${product.categoryId.replace(/^cat-/, '')}`}
              className="flex items-center text-base font-semibold hover:text-brand-dark transition-colors"
            >
              {dict.product.viewAll} <ChevronRight />
            </Link>
          </div>
          <ul
            tabIndex={0}
            aria-label={dict.common.productsCarouselLabel ?? 'Products'}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none"
          >
            {relatedCards.map((card) => (
              <li key={card.id} className="snap-start shrink-0 w-64 sm:w-72">
                <ProductCard
                  card={card}
                  lang={lang}
                  labels={{
                    oem: dict.common.oemNumber,
                    viewDetails: dict.common.viewDetails,
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
