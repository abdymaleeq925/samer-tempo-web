'use client';

import { Check, ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const { dict } = useLang();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const currentLangLabel =
    LANGUAGES.find((lang) => lang.code === currentLang)?.label ??
    currentLang.toUpperCase();

  // Ссылка на ту же страницу, но на другом языке: /en/about -> /ru/about
  const hrefFor = (code: string) => {
    const segments = (pathname || `/${currentLang}`).split('/');
    segments[1] = code;
    return segments.join('/');
  };

  // Закрываем меню по клику вне него и по Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="shrink-0">
      {/* Mobile Version */}
      <div ref={rootRef} className="relative lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${currentLangLabel} — ${dict.accessibility.selectLanguage}`}
          className="flex items-center gap-1 border border-border-subtle p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-bold font-caption transition-colors outline-none shrink-0"
        >
          <Globe className="w-3.5 h-3.5 shrink-0" />
          <span>{currentLangLabel}</span>
          <ChevronDown className="w-3 h-3 shrink-0" />
        </button>

        {open && (
          <ul className="absolute right-0 top-full mt-1.5 w-19 rounded-lg bg-ink text-zinc-200 z-50 p-1 shadow-md ring-1 ring-foreground/10">
            {LANGUAGES.map((lang) => {
              const isActive = currentLang === lang.code;
              return (
                <li key={lang.code}>
                  <Link
                    href={hrefFor(lang.code)}
                    prefetch={false}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center justify-between px-2.5 py-1.5 text-xs font-bold font-caption rounded-lg transition-colors ${
                      isActive ? 'bg-brand/30 text-brand' : ''
                    }`}
                  >
                    <span>{lang.label}</span>
                    {isActive && <Check className="w-3.5 h-3.5 text-brand" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex items-center gap-2 bg-ink border border-border-subtle rounded-full px-3 py-1.5">
        <Globe className="w-4 h-4 text-white shrink-0" />
        <nav
          className="flex gap-1"
          aria-label={dict.accessibility.selectLanguage}
        >
          {LANGUAGES.map((lang) => {
            const isActive = currentLang === lang.code;
            return (
              <Link
                key={lang.code}
                href={hrefFor(lang.code)}
                prefetch={false}
                aria-current={isActive ? 'true' : undefined}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-caption transition-all ${
                  isActive
                    ? 'bg-surface text-ink'
                    : 'text-zinc-200 hover:text-brand'
                }`}
              >
                {lang.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
