'use client';

import { LazyMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const loadFeatures = () =>
  import('./motion-features').then((mod) => mod.default);

/**
 * Put this once in src/app/[lang]/layout.tsx (around the page content).
 * Then in ALL files that use framer-motion replace:
 *   import { motion } from 'framer-motion'   ->   import { m } from 'framer-motion'
 *   <motion.div ...>                          ->   <m.div ...>
 * `strict` throws if a leftover `motion.*` component is found, so nothing is missed silently.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
