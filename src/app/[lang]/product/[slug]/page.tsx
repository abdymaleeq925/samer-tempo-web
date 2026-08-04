'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLang } from '@/context/lang-context';
import { MOCK_PRODUCTS } from '@/data/mock-catalog';
import { notFound, useParams } from 'next/navigation';

export default function ProductDetail () {
  const { dict, lang } = useLang();

  const { slug } = useParams();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = MOCK_PRODUCTS.filter( (p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  const images = product.images?.length ? product.images : [product.images[0]];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* --- ЛЕВАЯ КОЛОНКА: ГАЛЕРЕЯ ИЗОБРАЖЕНИЙ (5 колонок на lg) --- */}
        <div className="lg:col-span-5 space-y-4">
          {/* Главное фото */}
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden">
            <Image
              src={images[selectedImageIndex]}
              alt={product.title[lang]}
              fill
              className="object-contain p-6 transition-all duration-300"
              priority
            />
            {product.oemNumbers && (
              <span className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md font-mono">
                OEM: {product.oemNumbers}
              </span>
            )}
          </div>

          {/* Миниатюры (Thumbnails) */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 shrink-0 rounded-lg bg-gray-50 border-2 overflow-hidden transition-all ${selectedImageIndex === idx
                      ? 'border-blue-600 ring-2 ring-blue-600/20'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- ПРАВАЯ КОЛОНКА: ИНФОРМАЦИЯ И СПЕЦИФИКАЦИИ (7 колонок на lg) --- */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-6">

            {/* Заголовок и Бренд */}
            <div className="space-y-2 border-b border-gray-100 pb-4">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {product.article}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {product.title[lang]}
              </h1>
            </div>

            {/* Описание (если есть) */}
            {product.description && (
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {product.description[lang]}
              </p>
            )}

            {/* Блок Таблицы Спецификаций */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-gray-900">
                {dict.common.specifications}
              </h2>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200/80">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between py-2 border-b border-gray-200/60 last:border-b-0 sm:last:border-b border-solid"
                    >
                      <dt className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {spec.label[lang]}
                      </dt>
                      <dd className="text-sm font-semibold text-gray-900 mt-0.5 wrap-break-word">
                        {typeof spec.value === "string" ? spec.value : spec.value[lang]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

          </div>

          {/* --- ПОХОЖИЕ ТОВАРЫ (RELATED PRODUCTS) --- */}
          {relatedProducts && relatedProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {dict.product.relatedProducts}
                </h2>

                {/* Кнопка "Смотреть все" (опционально) */}
                <a
                  href={`/${lang}/categories/${product.categoryId.slice(4)}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {dict.product.viewAll}
                </a>
              </div>

              {/* Сетка похожих товаров */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.slice(0, 4).map((item) => (
                  <a
                    key={item.id}
                    href={`/${lang}/product/${item.slug || item.id}`}
                    className="group flex flex-col justify-between bg-white rounded-2xl border border-gray-200/80 hover:border-blue-500/50 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Контейнер изображения с фиксацией пропорций */}
                    <div className="relative aspect-square w-full rounded-xl bg-gray-50 border border-gray-100 overflow-hidden mb-4 group-hover:bg-blue-50/30 transition-colors">
                      <Image
                        src={item.images[0]}
                        alt={item.title[lang]}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.oemNumbers && (
                        <span className="absolute top-2 left-2 bg-gray-900/70 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                          {item.oemNumbers}
                        </span>
                      )}
                    </div>

                    {/* Информационный блок карточки */}
                    <div className="flex flex-col grow justify-between space-y-3">
                      <div>
                        {item.article && (
                          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                            {item.article}
                          </span>
                        )}

                        {/* line-clamp-2 выравнивает сетку при названиях разной длины */}
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {item.title[lang]}
                        </h3>
                      </div>

                      {/* Компактный вывод первыx 2 ключевых характеристик */}
                      {item.specs && item.specs.length > 0 && (
                        <div className="pt-2 border-t border-gray-100 space-y-1">
                          {item.specs.slice(0, 2).map((spec, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-gray-500">
                              <span className="truncate pr-2">{spec.label[lang]}:</span>
                              <span className="font-medium text-gray-800 truncate">{typeof spec.value === "string" ? spec.value : spec.value[lang]}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Кнопка перехода / CTA снизу карточки */}
                      <div className="pt-2">
                        <span className="w-full inline-flex items-center justify-center bg-gray-100 group-hover:bg-blue-600 text-gray-700 group-hover:text-white font-medium text-xs py-2 px-3 rounded-lg transition-colors">
                          {dict.common.viewDetails}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};