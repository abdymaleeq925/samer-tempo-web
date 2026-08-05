'use client';

import { useState } from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Globe2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/lang-context';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const { dict } = useLang();
  const aboutDict = dict?.about;

  // Активная вкладка по умолчанию — 'company'
  const [activeTab, setActiveTab] = useState<'company' | 'mission' | 'vision' | 'certificates'>('company');

  if (!aboutDict) return null;

  const tabs = [
    { id: 'company', label: aboutDict.company?.badge || 'Company', icon: Building2 },
    { id: 'mission', label: aboutDict.mission?.badge || 'Mission', icon: Target },
    { id: 'vision', label: aboutDict.vision?.badge || 'Vision', icon: Eye },
    { id: 'certificates', label: aboutDict.certificates?.badge || 'Certificates', icon: ShieldCheck },
  ] as const;

  return (
    <section aria-labelledby="about-heading" className="min-h-screen bg-black text-zinc-100 py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
        
        {/* Шапка раздела */}
        <div className="space-y-3 border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider">
            Samer Otomotiv
          </div>
          <h1 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {aboutDict.company?.heading}
          </h1>
        </div>

        {/* Переключатель вкладок (Табы) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-zinc-800/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer select-none",
                  isActive
                    ? "bg-brand text-black shadow-lg shadow-brand/20 font-semibold scale-[1.02]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-black" : "text-zinc-400")} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Контентный блок с анимацией появления */}
        <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
          {/* Акцентный фоновый градиент */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {/* 1. О КОМПАНИИ */}
            {activeTab === 'company' && (
              <motion.div
                key="company"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {aboutDict.company?.heading}
                </h2>
                <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
                  {aboutDict.company?.paragraph?.split('\n').map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 2. МИССИЯ */}
            {activeTab === 'mission' && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {aboutDict.mission?.heading}
                </h2>
                <div className="grid gap-4 mt-6">
                  {aboutDict.mission?.paragraph?.split('\n').map((point, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition duration-200"
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-0.5" />
                      <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 3. ВИДЕНИЕ */}
            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {aboutDict.vision?.heading}
                </h2>
                <div className="relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-zinc-900 via-zinc-900/80 to-black border border-zinc-800 space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-brand/10 text-brand">
                    <Eye className="w-8 h-8" />
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                    {aboutDict.vision?.paragraph}
                  </p>
                </div>
              </motion.div>
            )}

            {/* 4. СЕРТИФИКАТЫ И СТАТИСТИКА */}
            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {aboutDict.certificates?.heading}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-brand/40 transition duration-300">
                    <div className="p-3 rounded-xl bg-brand/10 text-brand mb-4">
                      <Award className="w-8 h-8" />
                    </div>
                    <span className="text-lg font-bold text-white">
                      {aboutDict.certificates?.stats?.experience}
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-brand/40 transition duration-300">
                    <div className="p-3 rounded-xl bg-brand/10 text-brand mb-4">
                      <Globe2 className="w-8 h-8" />
                    </div>
                    <span className="text-lg font-bold text-white">
                      {aboutDict.certificates?.stats?.export}
                    </span>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-brand/40 transition duration-300">
                    <div className="p-3 rounded-xl bg-brand/10 text-brand mb-4">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <span className="text-lg font-bold text-white">
                      {aboutDict.certificates?.stats?.certified}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}