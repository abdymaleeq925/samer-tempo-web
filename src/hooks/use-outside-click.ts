import { useEffect, type RefObject } from 'react';

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  active: boolean
) {
  useEffect(() => {
    if (!active) return;
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) handler();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [active, ref, handler]);
}