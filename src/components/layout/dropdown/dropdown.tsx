import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

import { panelVariants } from '@/lib/category-nav-motion';
import type { SubKey, SubNavItem } from '@/constants';
import NavImageGrid from './category-dropdown';

interface Props {
  panelId: string;
  triggerId: string;
  lang: string;
  fallbackIcon: LucideIcon;
  items: readonly SubNavItem[];
  getLabel: (key: SubKey) => string;
  onClose: () => void;
}

export default function NavDropdownPanel({ panelId, triggerId, lang, fallbackIcon, items, getLabel, onClose }: Props) {
  const showImages = items.some((c) => c.image);

  return (
    <motion.div
      id={panelId}
      role="group"
      aria-labelledby={triggerId}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl border border-zinc-200/80 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 p-3 z-50 ${
        showImages ? 'w-[min(90vw,26rem)] sm:w-120' : 'w-[min(90vw,20rem)] sm:w-80'
      }`}
    >
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-zinc-200/80" />
      {showImages && (
        <NavImageGrid items={items} lang={lang} fallbackIcon={fallbackIcon} getLabel={getLabel} onClose={onClose}/>
      )}
    </motion.div>
  );
}