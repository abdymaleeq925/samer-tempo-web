
import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/constants';
import { useLang } from '@/context/lang-context';

export default function MobileNavbar() {
  const { lang, dict } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (key: string) => setExpandedSubMenu((prev) => (prev === key ? null : key));
  const handleLinkClick = () => setMobileMenuOpen(false);
  return (
    <div className="md:hidden">
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 h-10 w-10 rounded-xl"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          }
        />
        {/* Left-slide menu */}
        <SheetContent
          side="right"
          className="w-75 sm:w-95 bg-zinc-950 border-l border-white/10 p-0 text-white flex flex-col"
        >
          <SheetHeader className="p-6 border-b border-white/10 text-left">
            <SheetTitle className="text-white text-lg font-bold flex items-center gap-2">
              <Image src="/icon.png" alt="logo" width={32} height={32} />
              Samer Tempo
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const hasChildren = Boolean(link.children?.length);
              const linkLabel = dict.navigation[link.key] ?? link.key;
              const isExpanded = expandedSubMenu === link.key;

              if (hasChildren) {
                return (
                  <div key={link.key} className="rounded-xl overflow-hidden border border-white/5 bg-white/2">
                    {/* Шапка родительского пункта с дропдауном */}
                    <div className="flex items-center justify-between p-3">
                      <Link
                        href={`/${lang}${link.href}`}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 text-slate-100 font-medium hover:text-white transition-colors flex-1"
                      >
                        <Icon className="w-5 h-5 text-brand" />
                        <span>{linkLabel}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleSubMenu(link.key)}
                        className="p-2 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Toggle sub-menu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Выпадающий подсписок (Аккордеон) */}
                    {isExpanded && (
                      <div className="bg-black/40 px-3 py-2 space-y-1 border-t border-white/5">
                        {link.children?.map((child) => (
                          <Link
                            key={child.key}
                            href={`/${lang}${child.href}`}
                            onClick={handleLinkClick}
                            className="block py-2 px-8 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {dict.navigation.sub?.[child.key] ?? child.key}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.key}
                  href={`/${lang}${link.href}`}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-3 rounded-xl text-slate-100 font-medium hover:bg-white/5 hover:text-white transition-colors border border-transparent"
                >
                  <Icon className="w-5 h-5 text-brand" />
                  <span>{linkLabel}</span>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}