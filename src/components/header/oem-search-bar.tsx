'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useLang } from '@/context/lang-context';

interface OemSearchInputProps {
  isHero?: boolean;
  onSearchSuccess?: () => void;
}

export default function OemSearchInput({
  isHero = false,
  onSearchSuccess,
}: OemSearchInputProps) {
  const { lang, dict } = useLang();
  const router = useRouter();

  const [query, setQuery] = useState('');

  const search = dict.common.search;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    if (onSearchSuccess) onSearchSuccess();

    router.push(`/${lang}/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} role="search" id="search">
        <div
          className={`min-w-0 flex items-center gap-2 border border-border-subtle/80 focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-all backdrop-blur-md shadow-2xl ${
            isHero
              ? 'h-12 sm:h-14 p-1.5 pl-3 sm:pl-4 rounded-2xl bg-ink border-white/20 '
              : 'bg-surface/90 h-10 sm:h-11 p-1 px-2.5 sm:px-3 rounded-xl'
          }`}
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={search.searchPlaceholder}
            aria-label={search.searchPlaceholder || 'Search products'}
            className={`flex-1 min-w-0 placeholder:text-muted-ink font-normal focus:outline-none truncate bg-transparent ${isHero ? 'text-white text-base' : 'text-ink text-[10px] sm:text-sm'}`}
          />
          <Button
            type="submit"
            aria-label={dict.accessibility?.searchSubmit || 'Submit search'}
            className={`shrink-0 hover:bg-transparent text-ink font-bold transition-all cursor-pointer ${
              isHero
                ? 'h-9 sm:h-11 px-3 rounded-xl bg-surface text-sm'
                : 'px-0 bg-transparent hover:scale-120'
            }`}
          >
            <Search />
          </Button>
        </div>
      </form>
    </div>
  );
}
