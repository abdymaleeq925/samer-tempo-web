'use client';

import { useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLang } from '@/context/lang-context';
import { MOCK_PRODUCTS } from '@/data/mock-catalog';

interface OemSearchInputProps {
  isHero?: boolean;
}

function normalizeCode(code: string): string {
  return code.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

export default function OemSearchInput({ isHero = false }: OemSearchInputProps) {
  const [query, setQuery] = useState('');
  const [notFoundQuery, setNotFoundQuery] = useState<string | null>(null);
  const router = useRouter();
  const { lang, dict } = useLang();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    const normalizedQuery = normalizeCode(trimmed);

    const match = MOCK_PRODUCTS.find((p) => {
      if (normalizeCode(p.article) === normalizedQuery) return true;
      if (p.oemNumbers?.some((oem) => normalizeCode(oem) === normalizedQuery)) return true;
      if (normalizeCode(p.slug) === normalizedQuery) return true;
      return false;
    });

    if (match) {
      setNotFoundQuery(null);
      router.push(`/${lang}/product/${match.slug}`);
    } else {
      setNotFoundQuery(trimmed);
    }
  };

  const notFoundMessage = notFoundQuery
    ? (dict.common?.searchNotFound ?? 'No results found for "{query}"').replace('{query}', notFoundQuery)
    : null;

  return (
    <>
      <form onSubmit={handleSearch} className="w-full min-w-0">
        <div
          className={`w-full min-w-0 flex items-center gap-2 bg-zinc-900/90 border border-zinc-700/80 focus-within:border-white focus-within:ring-1 focus-within:ring-white transition-all backdrop-blur-md shadow-2xl ${isHero
              ? 'h-12 sm:h-14 p-1.5 pl-3 sm:pl-4 rounded-2xl border-white/20'
              : 'h-10 sm:h-11 p-1 pl-2.5 sm:pl-3 rounded-xl'
            }`}
        >
          <Search
            className={`shrink-0 text-zinc-400 pointer-events-none ${isHero ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-4 h-4'
              }`}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setNotFoundQuery(null);
            }}
            placeholder={dict.common?.searchPlaceholder}
            className={`flex-1 min-w-0 bg-transparent text-white placeholder:text-zinc-500 font-normal focus:outline-none truncate ${isHero ? 'text-xs sm:text-base' : 'text-xs sm:text-sm'
              }`}
          />
          <Button
            type="submit"
            className={`shrink-0 bg-white hover:bg-brand text-black hover:text-white font-bold transition-all cursor-pointer ${isHero
                ? 'h-9 sm:h-11 px-3 sm:px-6 rounded-xl text-xs sm:text-sm'
                : 'h-8 sm:h-9 px-2.5 sm:px-4 rounded-lg text-xs'
              }`}
          >
            <span className="hidden xs:inline sm:inline font-heading">
              {dict.common?.searchButton}
            </span>
            <Search className="w-4 h-4 xs:hidden sm:hidden" />
          </Button>
        </div>
      </form>
      {notFoundMessage && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-white/80" role="status">
          <SearchX className="w-3.5 h-3.5 shrink-0" />
          {notFoundMessage}
        </p>
      )}
    </>
  );
}