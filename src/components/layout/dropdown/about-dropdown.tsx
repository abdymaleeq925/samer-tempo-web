import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { itemVariants } from '@/lib/category-nav-motion';
import type { SubKey, SubNavItem } from '@/constants';

interface Props {
  items: readonly SubNavItem[];
  lang: string;
  getLabel: (key: SubKey) => string;
}

export default function NavTextList({ items, lang, getLabel }: Props) {
  return (
    <div className="relative flex flex-col gap-1">
      {items.map((child) => {
        const ChildIcon = child.icon;
        return (
          <motion.div key={child.key} variants={itemVariants}>
            <Link
              href={`/${lang}${child.href}`}
              className="group/item relative flex items-center gap-3 overflow-hidden rounded-xl px-3 py-3 transition-colors hover:bg-zinc-50"
            >
              <span className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-brand transition-all duration-200 group-hover/item:h-6" />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 transition-colors group-hover/item:bg-brand/10 group-hover/item:text-brand">
                {ChildIcon ? <ChildIcon className="h-4.5 w-4.5" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
              </span>
              <span className="flex-1 text-md font-semibold font-heading text-zinc-900 transition-colors group-hover/item:text-brand">
                {getLabel(child.key)}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}