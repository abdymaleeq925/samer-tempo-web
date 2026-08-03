import type { Variants } from 'framer-motion';

export const panelVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.03 },
  },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.12, ease: 'easeIn' } },
} satisfies Variants;

export const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0 },
} satisfies Variants;