import { useEffect, useRef, type RefObject } from 'react';

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  active: boolean
) {
  const savedHandler = useRef(handler);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!active) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) savedHandler.current();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [active, ref]);
}