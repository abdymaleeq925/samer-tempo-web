"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

import { panelVariants, itemVariants } from '@/lib/nav-motion';
import type { SubKey, SubNavItem } from '@/constants';

interface NavDropdownPanelProps {
  panelId: string;
  triggerId: string;
  lang: string;
  fallbackIcon: LucideIcon;
  items: readonly SubNavItem[];
  getLabel: (key: SubKey) => string;
  onClose: () => void;
}

export default function NavDropdownPanel({
  panelId,
  triggerId,
  lang,
  fallbackIcon: FallbackIcon,
  items,
  getLabel,
  onClose
}: NavDropdownPanelProps) {
  // Checking if there is at least 1 picture
  const hasImages = items.some((c) => Boolean(c.image));

  if (!items.length || !hasImages) return null;

  return (
    <motion.div
      id={panelId}
      role="group"
      aria-labelledby={triggerId}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl border border-zinc-200/80 bg-stone-100 shadow-2xl shadow-black/10 p-3 z-50 w-[min(90vw,26rem)] sm:w-120"
    >
      <div className="relative grid grid-cols-2 gap-2">
        {items.map((child) => (
          <motion.div key={child.key} variants={itemVariants}>
            <Link
              href={`/${lang}${child.href}`}
              onClick={onClose}
              className="group/item relative flex items-end aspect-4/3 overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200"
            >
              {child.image ? (
                <Image
                  src={child.image}
                  alt={getLabel(child.key)}
                  fill
                  sizes="(min-width: 640px) 220px, 40vw"
                  className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center">
                  <FallbackIcon className="w-8 h-8 text-zinc-300" />
                </span>
              )}
              <span className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
              <span className="relative z-10 p-3 text-base sm:text-lg font-bold font-heading leading-tight text-white group-hover/item:text-brand transition-colors">
                {getLabel(child.key)}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}