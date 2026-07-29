'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'tr', label: 'TR' },
];

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLang;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5 text-sm">
      <Globe className="w-4 h-4 text-brand" />
      <div className="flex gap-1.5">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-colors ${
              currentLang === lang.code
                ? 'bg-brand text-black'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}