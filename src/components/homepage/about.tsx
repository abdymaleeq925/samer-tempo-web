'use client';

import { useLang } from '@/context/lang-context';
import { Separator } from '@base-ui/react';
import { Award, CircleStar, Globe2 } from 'lucide-react';

export default function About() {
  const { dict } = useLang();
  const a = dict.about;

  return (
    <section className="w-full bg-[#F2F3F5] py-12 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Badge and Title */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <span className="inline-flex items-center gap-2 text-xs md:text-base font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
              {a.badge}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
              {a.heading}
            </h2>
            <Separator className="w-full h-1 bg-linear-to-r from-brand to-transparent rounded-full mt-2 border-none"/>
          </div>
          {/* Information*/}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <p className="text-base sm:text-lg font-semibold leading-relaxed">
              {a.lead}
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              {a.paragraph1}
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              {a.paragraph2}
            </p>
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
              <div className="flex items-center gap-3">
                <CircleStar className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand shrink-0" />
                <span className="text-sm sm:text-base font-semibold">{a.stats.experience}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand shrink-0" />
                <span className="text-sm sm:text-base font-semibold">{a.stats.export}</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand shrink-0" />
                <span className="text-sm sm:text-base font-semibold">{a.stats.certified}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}