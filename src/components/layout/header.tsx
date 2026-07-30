'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { NAV_LINKS } from '@/constants';
import { useLang } from '@/context/lang-context';
import LanguageSwitcher from './language-switcher';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../ui/hover-card';
import MobileNavbar from './mobile-navbar';

export default function Header() {
  const { lang, dict } = useLang();
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-3 group shrink-0 focus:outline-none"
          
        >
          <Image
            src="/icon.png"
            alt="Samer Tempo Logo"
            width={70}
            height={70}
            priority
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105"
          />
        </Link>
        <nav
          aria-label={dict.navigation.mainNavLabel}
          className="hidden md:block"
        >
          <ul className="flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const hasChildren = Boolean(link.children?.length);
              const linkLabel = dict.navigation[link.key] ?? link.key;

              if (hasChildren) {
                return (
                  <li key={link.key}>
                    <HoverCard>
                      <HoverCardTrigger
                        delay={0}
                        closeDelay={50}
                        render={
                          <Link
                            href={`/${lang}${link.href}`}
                            className="group flex flex-col items-center justify-center gap-1 outline-none transition-colors h-12 shrink-0"
                          >
                            <div className="flex items-center justify-center gap-1 h-6">
                              <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors shrink-0" />
                              <ChevronDown className="w-3.5 h-3.5 text-white/70 group-hover:text-black transition-transform duration-200 group-data-[state=open]:rotate-180 shrink-0" />
                            </div>
                            <span className="text-white group-hover:text-black transition-colors leading-none text-xs xl:text-sm font-medium">
                              {linkLabel}
                            </span>
                          </Link>
                        }
                      />
                      <HoverCardContent
                        align="center"
                        sideOffset={8}
                        className="w-56 bg-slate-900 border border-white/10 text-white shadow-xl rounded-xl p-1.5 flex flex-col gap-1 z-50"
                      >
                        {link.children?.map((child) => (
                          <Link
                            key={child.key}
                            href={`/${lang}${child.href}`}
                            className="w-full px-3 py-2 text-sm text-slate-200 hover:text-black hover:bg-white rounded-lg transition-colors block"
                          >
                            {dict.navigation.sub?.[child.key] ?? child.key}
                          </Link>
                        ))}
                      </HoverCardContent>
                    </HoverCard>
                  </li>
                );
              }

              return (
                <li key={link.key}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="group flex flex-col items-center justify-center gap-1 outline-none transition-colors h-12 shrink-0"
                  >
                    <div className="flex items-center justify-center h-6">
                      <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors shrink-0" />
                    </div>
                    <span className="text-white group-hover:text-black transition-colors leading-none text-xs xl:text-sm font-medium">
                      {linkLabel}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Language & Mobile Menu Icon */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <LanguageSwitcher currentLang={lang} />
          <MobileNavbar/>
        </div>
      </div>
    </header>
  );
}