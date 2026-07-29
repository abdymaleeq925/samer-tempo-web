'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OemSearchInput({ lang }: { lang: string }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // Нормализация артикула (удаление пробелов, дефисов и точек) согласно техническому плану проекта[cite: 1]
    const normalizedCode = query.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    router.push(`/${lang}/product/${normalizedCode}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по артикулу, OEM или названию (напр. 441-032-8080)..."
          className="w-full bg-zinc-900/90 border-2 border-zinc-800 focus:border-brand text-white rounded-xl py-4 pl-12 pr-32 outline-none transition-all duration-300 placeholder:text-zinc-500 shadow-lg"
        />
        <Search className="absolute left-4 w-5 h-5 text-zinc-400" />
        <button
          type="submit"
          className="absolute right-2 bg-brand hover:bg-brand text-black font-bold px-6 py-2.5 rounded-lg transition-colors duration-200"
        >
          Искать
        </button>
      </div>
    </form>
  );
}