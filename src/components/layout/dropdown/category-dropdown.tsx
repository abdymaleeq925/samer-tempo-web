import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { itemVariants } from '@/lib/category-nav-motion';
import type { SubKey, SubNavItem } from '@/constants';

interface Props {
  items: readonly SubNavItem[],
  lang: string;
  fallbackIcon: LucideIcon;
  getLabel: (key: SubKey) => string;
}

export default function NavImageGrid({ items, lang, fallbackIcon: FallbackIcon, getLabel }: Props) {
  return (
    <div className="relative grid grid-cols-2 gap-2">
      {items.map((child) => (
        <motion.div key={child.key} variants={itemVariants}>
          <Link
            href={`/${lang}${child.href}`}
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
  );
}