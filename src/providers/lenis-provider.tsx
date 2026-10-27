'use client';

import { type ReactNode, useEffect } from 'react';

/**
 * Smooth scrolling only where it helps: devices with a mouse and users who
 * did not ask for reduced motion. On phones Lenis did nothing useful but
 * still shipped its code and ran a requestAnimationFrame loop forever.
 * The library is loaded lazily, after the page is interactive.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (!finePointer || reduceMotion) return;

    let cancelled = false;
    let rafId = 0;
    let instance: { raf: (t: number) => void; destroy: () => void } | undefined;

    const start = () => {
      import('lenis').then(({ default: Lenis }) => {
        if (cancelled) return;
        // autoResize (default in lenis >= 1.1) replaces the manual ResizeObserver
        instance = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        const loop = (time: number) => {
          instance?.raf(time);
          rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);
      });
    };

    // Do not compete with hydration / LCP.
    const idle = (
      window as Window & {
        requestIdleCallback?: (
          cb: () => void,
          o?: { timeout: number },
        ) => number;
      }
    ).requestIdleCallback;
    const timer = idle
      ? idle(start, { timeout: 2000 })
      : window.setTimeout(start, 1200);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      if (!idle) window.clearTimeout(timer);
      instance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
