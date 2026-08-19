'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CLOSE_DELAY, NAV_LINKS, OPEN_DELAY, type SubKey } from '@/constants';
import { useLang } from '@/context/lang-context';
import LanguageSwitcher from './language-switcher';
import MobileNavbar from './mobile-navbar';
import Navbar from './navigation-bar';
import OemSearchInput from './oem-search-bar';

export default function Header() {
  const { lang, dict } = useLang();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openWithDelay(key: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpenKey(key), OPEN_DELAY);
  }

  function closeWithDelay() {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), CLOSE_DELAY);
  }

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty('--header-h', `${entry.contentRect.height}px`);
    });
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.documentElement.style.removeProperty('--header-h');
      if (openTimer.current) clearTimeout(openTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    }
  }, []);
  
  return (
    <header className="sticky top-0 z-50 font-heading bg-stone-100 border-b border-ink px-4 lg:px-8 py-2.5 text-heading transition-colors" ref={headerRef}>
      <div className="max-w-8xl mx-auto xl:mx-8 flex items-center justify-between gap-3 lg:gap-6">
        <Link 
          href={`/${lang}`}
          className="flex items-center gap-3 shrink-0"
          aria-label={dict.accessibility.homeAriaLabel}
        >
          <Image
            src="/icon.png"
            alt="Samer Tempo Logo"
            width={70}
            height={70}
            priority
            className="w-14 h-14 lg:w-20 lg:h-20 object-contain transition-transform duration-200 hover:scale-105"
          />
        </Link>
        <nav aria-label={dict.accessibility.mainNavLabel} className="hidden md:block">
          <ul className="flex gap-4 md:gap-10">
            {NAV_LINKS.map((link) => (
              <Navbar
                key={link.key}
                link={link}
                lang={lang}
                label={dict.navigation[link.key] ?? link.key}
                isOpen={openKey === link.key}
                onOpen={() => openWithDelay(link.key)}
                onClose={closeWithDelay}
                onToggle={() => setOpenKey((prev) => (prev === link.key ? null : link.key))}
                getSubLabel={(key: SubKey) => dict.navigation.sub?.[key] ?? key}
              />
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 max-w-xs min-w-0">
          <OemSearchInput />
        </div>
        <div className="flex items-center sm:gap-4 shrink-0">
          <LanguageSwitcher currentLang={lang} />
          <MobileNavbar/>
        </div>
      </div>
    </header>
  );
}