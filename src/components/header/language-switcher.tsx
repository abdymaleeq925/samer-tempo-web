'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown, Check } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLang } from '@/context/lang-context';

const LANGUAGES = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'tr', label: 'TR' },
] as const;

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { dict } = useLang();

  const currentLangLabel = LANGUAGES.find((lang) => lang.code === currentLang)?.label ?? currentLang.toUpperCase();

  const handleLanguageChange = (newLang: string) => {
    if (!pathname || newLang === currentLang) return
    const segments = pathname.split('/');
    segments[1] = newLang;
    router.push(segments.join('/'));
  };

  return (
    <div className="shrink-0">
      {/* Mobile Version */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger
            type="button"
            className="flex items-center gap-1.5 bg-ink border border-zinc-800 hover:border-zinc-700 text-white px-2.5 py-1.5 rounded-xl text-xs font-bold font-caption transition-colors outline-none focus:ring-1 focus:ring-brand shrink-0"
            aria-label={dict.accessibility.selectLanguage}
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span>{currentLangLabel}</span>
            <ChevronDown className="w-3 h-3 text-zinc-400 shrink-0" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={6}
            className="w-19 bg-ink text-zinc-200 z-50 min-w-0"
          >
            {LANGUAGES.map((lang) => {
              const isActive = currentLang === lang.code;
              return (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center justify-between px-2.5 py-1.5 text-xs font-bold font-caption rounded-lg cursor-pointer transition-colors ${isActive
                    ? 'bg-brand/30 text-brand'
                    : ''
                    }`}
                >
                  <span>{lang.label}</span>
                  {isActive && <Check className="w-3.5 h-3.5 text-brand" />}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Desktop Version */}
      <div className="hidden lg:flex items-center gap-2 bg-ink border border-zinc-800 rounded-full px-3 py-1.5">
        <Globe className="w-4 h-4 text-white shrink-0" />
        <div className="flex gap-1" role="radiogroup" aria-label={dict.accessibility.selectLanguage}>
          {LANGUAGES.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageChange(lang.code)}
                aria-checked={isActive}
                role="radio"
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-caption transition-all cursor-pointer ${isActive
                  ? 'bg-white text-black'
                  : 'text-zinc-200 hover:text-brand'
                  }`}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}