'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, FilterX, SlidersHorizontal } from 'lucide-react';

import { useLang } from '@/context/lang-context';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';
import { ProductCard } from '@/components/categories/product-card';
import { normalizeCode, formatString } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function SearchResultsPage() {
  const { dict, lang } = useLang();
  const search = dict.common.search;
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeCode(query);

    return MOCK_PRODUCTS.filter((product) => {
      // Filter by category
      if (selectedCategory !== 'all' && product.categoryId !== selectedCategory) {
        return false;
      }

      // Shows all products if search bar is empty
      if (!normalizedSearch) return true;

      // Search by article
      if (normalizeCode(product.article).includes(normalizedSearch)) return true;

      // Search by OEM
      if (product.oemNumbers?.some((oem) => normalizeCode(oem).includes(normalizedSearch))) return true;

      // Search by Cross-numbers
      if (product.crossReferences?.some((cross) => normalizeCode(cross).includes(normalizedSearch))) return true;

      // Search by title
      if (typeof product.title === 'object') {
        const titles = Object.values(product.title) as string[];
        if (titles.some((t) => normalizeCode(t).includes(normalizedSearch))) return true;
      }

      return false;
    });
  }, [query, selectedCategory]);

  const resultsTitle = query
    ? formatString(dict.common.search?.resultsFor ?? 'Results for "{query}"', { query })
    : dict.common.search?.allProducts ?? 'All Products';

  const foundCountText = formatString(dict.common.search?.foundCount ?? 'Found {count} products', {
    count: filteredProducts.length,
  });

  return (
    <section className="py-10 min-h-screen font-heading">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 border-b border-zinc-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            {search?.title ?? 'Search Catalog'}
          </h1>
          <p className="text-zinc-600 text-sm md:text-lg">{resultsTitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-3 bg-stone-100 rounded-2xl border border-zinc-300 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <span className="font-bold text-lg flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-brand" />
                {dict.common?.allCategories ?? 'Filters'}
              </span>
              {(query || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-xs text-red-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <FilterX className="w-3.5 h-3.5" />
                  {search.resetFilters ?? 'Reset'}
                </button>
              )}
            </div>

            {/* Text Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {search.searchButton ?? 'Search'}
              </label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={search.searchPlaceholder}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-300 text-sm bg-white focus:outline-none focus:border-brand"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {search.filterCategory ?? 'Categories'}
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-brand text-black font-bold'
                      : 'hover:bg-zinc-200 text-zinc-700'
                  }`}
                >
                  {search.allProducts ?? 'All Categories'}
                </button>
                {MOCK_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-brand text-black font-bold'
                          : 'hover:bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      {cat.title[lang]}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Search Result */}
          <main className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between text-base font-medium text-zinc-500">
              <span>{foundCountText}</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-stone-50 rounded-2xl border border-dashed border-zinc-300 space-y-4">
                <p className="text-lg font-semibold text-zinc-600">
                  {dict.common?.noProducts ?? 'No products found'}
                </p>
                <Button
                  onClick={() => {
                    setQuery('');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                  className="border-black"
                >
                  {search.resetFilters ?? 'Clear Search'}
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}