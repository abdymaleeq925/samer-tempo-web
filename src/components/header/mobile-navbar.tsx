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
import { accordionVariants, itemVariants } from '@/lib/nav-motion';

export default function MobileNavbar() {
  const { lang, dict } = useLang();
  const accessibility = dict.accessibility;
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
              aria-label={accessibility.toggleMenu}
            >
              <Menu size={32} />
            </Button>
          }
        />
        <SheetContent
          side="right"
          closeLabel={accessibility.close}
          className="bg-stone-100 border-l border-white/30 flex flex-col"
        >
          <SheetHeader className="p-6 border-b border-ink text-left">
            <SheetTitle className="text-xl font-bold flex items-center gap-2">
              <Image src="/icon.png" alt="logo" width={32} height={32} />
              Samer Tempo
            </SheetTitle>
          </SheetHeader>
          <nav
            aria-label={accessibility.mainNavLabel}
            className="flex-1 overflow-y-auto px-3"
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
                  <div key={link.key} className="overflow-hidden">
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => toggleSubMenu(link.key)}
                      className="flex w-full items-center justify-between gap-3 p-3 font-medium hover:bg-white/5 hover:text-brand transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-brand" />
                        <span className='text-base'>{linkLabel}</span>
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
                          <div className="bg-transparent px-3 py-3">
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
                                      <ChildIcon className="w-4 h-4 shrink-0" />
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
                  className="flex items-center gap-3 p-3 text-base font-medium hover:bg-white/5 hover:text-brand transition-colors"
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