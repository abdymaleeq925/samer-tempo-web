import { useEffect } from 'react';

export function useEscapeKey(handler: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') handler();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active, handler]);
}