'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { NAV_LINKS, type SubKey } from '@/constants';
import { useLang } from '@/context/lang-context';
import LanguageSwitcher from './language-switcher';
import MobileNavbar from './mobile-navbar';
import NavBar from './navigation-bar';

export default function Header() {
  const { lang, dict } = useLang();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openWithDelay(key: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setOpenKey(key), 60);
  }

  function closeWithDelay() {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 150);
  }

  return (
    <header className="sticky top-0 z-50 text-heading bg-stone-100 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link href={`/${lang}`} className="flex items-center gap-3 group shrink-0 focus:outline-none">
          <Image
            src="/icon.png"
            alt="Samer Tempo Logo"
            width={70}
            height={70}
            priority
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain transition-transform group-hover:scale-105"
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

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <LanguageSwitcher currentLang={lang} />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}