'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_IMAGES } from '@/constants';

export default function HeroCollage() {
  // Инициализируем 6 ячеек случайными индексами
  const [cellImages, setCellImages] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCellImages((prev) => {
        const next = [...prev];
        // Выбираем случайную ячейку для обновления
        const randomCellIndex = Math.floor(Math.random() * next.length);
        // Выбираем случайную картинку
        const randomImageIndex = Math.floor(Math.random() * PRODUCT_IMAGES.length);
        next[randomCellIndex] = randomImageIndex;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-112.5 overflow-hidden my-8">
      {/* Контейнер с наклоном всей сетки наискосок вправо */}
      <div className="w-full h-full transform skew-x-[-12deg] grid grid-cols-3 grid-rows-2 border-4 border-brand bg-brand overflow-hidden rounded-xl shadow-[0_0_25px_rgba(237,142,51,0.3)]">
        {cellImages.map((imgIndex, cellIdx) => (
          <div
            key={cellIdx}
            className="relative w-full h-full overflow-hidden bg-zinc-950 border border-brand"
          >
            {/* Обратный наклон внутренней картинки, чтобы само изображение не было искажено */}
            <div className="absolute inset-0 transform skew-x-[12deg] scale-125">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={PRODUCT_IMAGES[imgIndex]}
                  alt={`Product ${imgIndex}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover filter brightness-90 hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    // Плейсхолдер, если физических файлов еще нет в папке
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </AnimatePresence>
            </div>
            {/* Оверлей-градиент */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}