'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { CLOSE_DELAY, NAV_LINKS, OPEN_DELAY, type SubKey } from '@/constants';
import { useLang } from '@/context/lang-context';
import LanguageSwitcher from './language-switcher';
import MobileNavbar from './mobile-navbar';
import NavBar from './navigation-bar';
import OemSearchInput from './oem-search-bar';

export default function Header() {
  const { lang, dict } = useLang();
  const pathname = usePathname();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHomePage = [`/${lang}`, `/${lang}/`, '/'].includes(pathname);
  
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
    <header className="sticky top-0 z-50 font-heading bg-stone-100/95 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-6 py-2.5 text-heading transition-colors" ref={headerRef}>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        <Link 
          href={`/${lang}`}
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
          aria-label={dict.accessibility.homeAriaLabel}
        >
          <Image
            src="/icon.png"
            alt="Samer Tempo Logo"
            width={70}
            height={70}
            priority
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        <nav aria-label={dict.accessibility.mainNavLabel} className="hidden md:block">
          <ul className="flex items-center gap-3 lg:gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <NavBar
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

        {!isHomePage && (
          <div className="hidden md:flex flex-1 max-w-xs md:max-w-sm mx-auto min-w-0">
            <OemSearchInput />
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <LanguageSwitcher currentLang={lang} />
          <MobileNavbar isHomePage={isHomePage}/>
        </div>

      </div>
    </header>
  );
}