'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, type NavKey } from '@/constants';
import { useLang } from '@/context/lang-context';
import { itemVariants } from '@/lib/category-nav-motion';
import OemSearchInput from './oem-search-bar';

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.03 },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } },
} as const;

interface MobileNavbarProps {
  isHomePage?: boolean;
}

export default function MobileNavbar({ isHomePage = false }: MobileNavbarProps) {
  const { lang, dict } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedKey, setExpandedKey] = useState<NavKey | null>(null);

  const toggleSubMenu = (key: NavKey) =>
    setExpandedKey((prev) => (prev === key ? null : key));
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <div className="md:hidden">
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/10 w-12 h-12 rounded-xl"
              aria-label={dict.accessibility.toggleMenu}
            >
              <Menu size={32} />
            </Button>
          }
        />
        <SheetContent
          side="right"
          closeLabel={dict.accessibility.close}
          className="w-75 sm:w-95 bg-stone-100 border-l border-white/10 p-0 flex flex-col"
        >
            <SheetHeader className="p-6 border-b border-white/10 text-left">
              <SheetTitle className="text-xl font-bold flex items-center gap-2">
                <Image src="/icon.png" alt="logo" width={32} height={32} />
                Samer Tempo
              </SheetTitle>
            </SheetHeader>

            {!isHomePage && (
              <div className="p-4 border-b border-zinc-200 bg-stone-200/50">
                <OemSearchInput onSearchSuccess={handleLinkClick} />
              </div>
            )}

            <nav
              aria-label={dict.accessibility.mainNavLabel}
              className="flex-1 overflow-y-auto px-4 py-6 space-y-1"
            >
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const hasChildren = Boolean(link.children?.length);
                const linkLabel = dict.navigation[link.key] ?? link.key;
                const isExpanded = expandedKey === link.key;
                const panelId = `mobile-panel-${link.key}`;
                const triggerId = `mobile-trigger-${link.key}`;

                if (hasChildren) {
                  return (
                    <div key={link.key} className="rounded-xl overflow-hidden">
                      <button
                        id={triggerId}
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={panelId}
                        onClick={() => toggleSubMenu(link.key)}
                        className="flex w-full items-center justify-between gap-3 p-3 rounded-xl font-medium hover:bg-white/5 hover:text-brand transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-brand" />
                          <span>{linkLabel}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={panelId}
                            role="group"
                            aria-labelledby={triggerId}
                            variants={accordionVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden"
                          >
                            <div className="bg-stone-200 px-3 py-2 space-y-1 border-t border-white/5">
                              {link.children?.map((child) => {
                                const ChildIcon = child.icon;
                                return (
                                  <motion.div key={child.key} variants={itemVariants}>
                                    <Link
                                      href={`/${lang}${child.href}`}
                                      onClick={handleLinkClick}
                                      className="flex items-center gap-3 py-2 px-3 text-sm rounded-lg hover:bg-white/50 hover:text-brand transition-colors"
                                    >
                                      {ChildIcon ? (
                                        <ChildIcon className="w-4 h-4 text-zinc-500 shrink-0" />
                                      ) : (
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 ml-1.5 mr-1.5" />
                                      )}
                                      <span>{dict.navigation.sub?.[child.key] ?? child.key}</span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.key}
                    href={`/${lang}${link.href}`}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 p-3 rounded-xl font-medium hover:bg-white/5 hover:text-brand transition-colors border border-transparent"
                  >
                    <Icon className="w-5 h-5 text-brand" />
                    <span>{linkLabel}</span>
                  </Link>
                );
              })}
            </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}