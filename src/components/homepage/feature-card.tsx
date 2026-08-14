'use client';

import { FEATURES_ICONS } from '@/constants';
import { useLang } from '@/context/lang-context';

export default function FeatureCards() {
  const { dict } = useLang();
  const features = dict.homepage.features;
  return (
    <section className="w-full font-heading grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 lg:px-8 xl:px-20 py-4 md:py-8 lg:py-12">
      {features.map((feature, index) => {
        const Icon = FEATURES_ICONS[index];
        if (!Icon) return null;
        return (
          <div key={feature.title || index} className="flex items-start gap-3 md:gap-4 bg-transparent select-none min-w-0">
            <Icon 
              className="w-8 h-8 md:w-12 md:h-12 text-brand shrink-0"
              strokeWidth={1.75}
            />
            <div className="flex flex-col items-start justify-center min-w-0 w-full">
              <h4 className="text-base md:text-xl font-semibold leading-tight wrap-break-word line-clamp-2 w-full">
                {feature.title}
              </h4>
              <p className="text-sm md:text-lg text-zinc-500 leading-snug">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}