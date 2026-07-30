'use client';

import { FEATURES_ICONS } from '@/constants';
import { useLang } from '@/context/lang-context';

export default function FeatureCards() {
  const { dict } = useLang();

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 md:px-8 lg:px-20">
      {dict.features.map((feature, index) => {
        const Icon = FEATURES_ICONS[index];

        return (
          <div key={feature.title} className="flex items-start gap-3 sm:gap-4 bg-transparent select-none min-w-0">
            <Icon 
              className="w-8 h-8 sm:w-12 sm:h-12 text-brand shrink-0"
              strokeWidth={1.75}
            />
            <div className="flex flex-col items-start min-w-0 w-full">
              <h4 className="text-sm sm:text-base md:text-xl font-semibold leading-tight truncate w-full">
                {feature.title}
              </h4>
              <p className="text-start text-md md:text-lg text-zinc-500 leading-snug line-clamp-2">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}