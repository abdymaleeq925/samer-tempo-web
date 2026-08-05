'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { GRID_CELLS_COUNT, PRODUCT_IMAGES, SWAP_INTERVAL_MS } from '@/constants';
import OemSearchInput from '../layout/oem-search-bar';
import { useLang } from '@/context/lang-context';

export default function HeroCollage() {
  const [cellImages, setCellImages] = useState<number[]>(() =>
    Array.from({ length: GRID_CELLS_COUNT }, (_, i) => i % PRODUCT_IMAGES.length)
  );

  const { dict } = useLang();

  /* Periodically selects a random grid cell and swaps its image with an unrendered one. */
  useEffect(() => {
    // If the image pool has 8 or fewer items, continuous unique swapping is impossible
    if (PRODUCT_IMAGES.length <= GRID_CELLS_COUNT) return;

    const interval = setInterval(() => {
      setCellImages((prev) => {
        const next = [...prev];

        const randomCellIndex = Math.floor(Math.random() * GRID_CELLS_COUNT);

        const availableIndices = PRODUCT_IMAGES.map((_, idx) => idx).filter(
          (idx) => !next.includes(idx)
        );

        if (availableIndices.length === 0) return prev;

        const randomImageIndex =
          availableIndices[Math.floor(Math.random() * availableIndices.length)];

        next[randomCellIndex] = randomImageIndex;
        return next;
      });
    }, SWAP_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full overflow-hidden bg-zinc-950 flex items-center justify-center"
      style={{ height: "calc(100dvh - var(--header-h, 88px))" }}
      >
      {/* BACKGROUND LAYER: Skewed 2x4 Image Collage Grid */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="w-full h-full transform skew-x-6 sm:skew-x-12 scale-110 grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-1 bg-brand">
          {cellImages.map((imgIndex, cellIdx) => (
            <div
              key={cellIdx}
              className="relative w-full h-full overflow-hidden bg-zinc-900 border border-white/5"
            >
              <div className="absolute inset-0 transform -skew-x-6 sm:-skew-x-12 scale-125">
                <AnimatePresence>
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={PRODUCT_IMAGES[imgIndex]}
                      alt={(dict.homepage.hero.imageAlt ?? 'Auto part {index}').replace('{index}', String(imgIndex + 1))}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      priority={cellIdx < 4} // Priority load top row for LCP optimization
                      className="object-cover brightness-90 contrast-105"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-zinc-950/50 via-zinc-950/30 to-zinc-950/70 pointer-events-none z-10" />
      {/* Centralized OEM Search and Titles */}
      <div className="relative z-20 w-full max-w-3xl px-4 text-center flex flex-col items-center gap-6 sm:gap-8">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight drop-shadow-md">
            {dict.homepage.hero.title}
          </h1>
          <p className="text-sm sm:text-base text-white font-heading max-w-lg mx-auto drop-shadow-sm font-normal">
          {dict.homepage.hero.subtitle}
          </p>
        </div>
        <div className="w-full max-w-md md:max-w-xl shadow-2xl rounded-2xl transition-transform hover:scale-[1.01]">
          <OemSearchInput isHero />
        </div>
      </div>
    </section>
  );
}