'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useLang } from '@/context/lang-context';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CATEGORY_META } from '@/constants';

const tabContentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -8, 
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } 
  },
} as const;

export default function CategoryShowcase() {
  const { dict, lang } = useLang();
  const showcaseDict = dict.categoryShowcase;
  const categories = showcaseDict?.items ?? [];
  const defaultTab = categories[0]?.id ?? 'cables';

  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeMeta = CATEGORY_META[activeTab as keyof typeof CATEGORY_META];
  const activeImages = activeMeta?.imageSrc && activeMeta.imageSrc.length > 0
    ? activeMeta.imageSrc
    : ['/products/placeholder.png'];

  useEffect(() => {
    if (activeImages.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activeImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeImages.length, isPaused, activeTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentIndex(0);
  };

  if (!categories.length) return null;

  return (
    <section
      aria-labelledby="category-showcase-heading"
      className="w-full py-12 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col items-start gap-2 max-w-2xl">
          <h2
            id="category-showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight"
          >
            {showcaseDict?.title}
          </h2>
          <p className="text-md sm:text-lg text-zinc-600 font-heading">
            {showcaseDict?.subtitle}
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full space-y-6"
        >
          {/* Horizontal scroll tab bar*/}
          <div className="relative w-full overflow-hidden">
            <TabsList
              className={cn(
                "flex w-full h-12! overflow-x-auto scrollbar-none justify-start items-stretch",
                "bg-brand-dark p-0 rounded-xl border border-zinc-800",
                "snap-x snap-mandatory gap-1"
              )}
              aria-label={dict.accessibility?.selectCategory || "Select category"}
            >
              {categories.map((cat) => {
                const meta = CATEGORY_META[cat.id as keyof typeof CATEGORY_META];
                const Icon = meta?.icon;

                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className={cn(
                      "snap-start shrink-0 h-full flex items-center gap-2.5 px-4 rounded-lg text-md font-medium font-heading transition-all duration-200 select-none cursor-pointer",
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
                    <span>{cat.name}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Selected category content */}
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat.id as keyof typeof CATEGORY_META];
            const imageSrc = meta?.imageSrc || ['/products/placeholder.png'];
            const href = meta?.href;
            const isActive = activeTab === cat.id;
            return (
              <TabsContent
                key={cat.id}
                value={cat.id}
                className={cn(
                  "mt-0 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-2xl",
                  "data-[state=inactive]:hidden"
                )}
              >
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={cat.id}
                      variants={tabContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 lg:p-10"
                    >
                      {/* Text content */}
                      <div className="flex flex-col items-start justify-between space-y-6 order-2 lg:order-1">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold font-heading uppercase tracking-wider">
                            {cat.tagline}
                          </div>

                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                            {cat.title}
                          </h3>

                          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                            {cat.description}
                          </p>

                          {/* Specifications and category advantages */}
                          {cat.highlights && cat.highlights.length > 0 && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                              {cat.highlights.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <Button
                          size="lg"
                          nativeButton={false}
                          className="w-full sm:w-auto gap-2 group"
                          render={
                            <Link href={`/${lang}${href}`}>
                              <span>{showcaseDict?.exploreBtn}</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          }
                        />
                      </div>

                      {/* Image section */}
                      <div
                        className="relative w-full aspect-16/10 sm:aspect-video lg:aspect-4/3 rounded-xl overflow-hidden bg-zinc-800/50 border border-zinc-700/50 order-1 lg:order-2 group"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        {/* Лента со слайдами */}
                        <div
                          className="flex h-full w-full transition-transform duration-700 ease-out"
                          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                          {imageSrc.map((src, index) => (
                            <div key={`${src}-${index}`} className="relative h-full w-full shrink-0">
                              <Image
                                src={src}
                                alt={`${cat.title} - ${index + 1}`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                priority={cat.id === defaultTab && index === 0}
                              />
                            </div>
                          ))}
                        </div>

                        {/* Градиентный оверлей */}
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />

                        {/* Точки-индикаторы слайдов */}
                        {imageSrc.length > 1 && (
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                            {imageSrc.map((_, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setCurrentIndex(idx)}
                                className={cn(
                                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                                  currentIndex === idx
                                    ? "w-6 bg-brand"
                                    : "w-1.5 bg-white/50 hover:bg-white/80"
                                )}
                                aria-label={ dict.accessibility?.goToSlide?.replace('{slide}', String(idx + 1)) }
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}