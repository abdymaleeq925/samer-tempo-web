'use client';

import { FilterX, Search, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import { ProductCard } from '@/components/categories/product-card';
import { Button } from '@/components/ui/button';
import { SUBCATEGORIES, type CatKey } from '@/constants';
import { useLang } from '@/context/lang-context';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';
import { formatString, normalizeCode } from '@/lib/utils';

const ALL_CATEGORIES = 'all';
const ALL_SUBCATEGORIES = 'all';

export default function SearchResultsPage() {
  const { dict, lang } = useLang();
  const search = dict.common.search;
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(urlQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    query.length > 0 ? '' : 'all',
  );
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<string>(ALL_SUBCATEGORIES);
  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);

  if (urlQuery !== lastUrlQuery) {
    setLastUrlQuery(urlQuery);
    setQuery(urlQuery);
    setSelectedCategory(urlQuery.length > 0 ? '' : ALL_CATEGORIES);
    setSelectedSubcategory(ALL_SUBCATEGORIES);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setSelectedCategory((prev) => {
      if (value.trim().length > 0) return prev === ALL_CATEGORIES ? '' : prev;
      return prev === '' ? ALL_CATEGORIES : prev;
    });
  }

  function handleCategoryChange(categoryId: string) {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(ALL_SUBCATEGORIES);
  }

  function resetAll() {
    setQuery('');
    setSelectedCategory(ALL_CATEGORIES);
    setSelectedSubcategory(ALL_SUBCATEGORIES);
  }

  const availableSubcategories = useMemo(() => {
    if (selectedCategory === ALL_CATEGORIES || selectedCategory === '')
      return [];
    const categoryKey = selectedCategory.replace(/^cat-/, '') as CatKey;
    return SUBCATEGORIES.filter((s) => s.categoryKey === categoryKey);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeCode(query);
    const hasActiveCategory =
      selectedCategory !== ALL_CATEGORIES && selectedCategory !== '';
    const hasActiveSubcategory = selectedSubcategory !== ALL_SUBCATEGORIES;

    return MOCK_PRODUCTS.filter((product) => {
      // Filter by category
      if (hasActiveCategory && product.categoryId !== selectedCategory)
        return false;
      if (hasActiveSubcategory && product.subcategoryId !== selectedSubcategory)
        return false;

      // Shows all products if search bar is empty
      if (!normalizedSearch) return true;

      // Search by smrCode
      if (normalizeCode(product.smrCode).includes(normalizedSearch))
        return true;

      // Search by OEM
      if (
        product.oemNumbers?.some((oem) =>
          normalizeCode(oem).includes(normalizedSearch),
        )
      )
        return true;

      // Search by Cross-numbers
      if (
        product.crossReferences?.some((cross) =>
          normalizeCode(cross).includes(normalizedSearch),
        )
      )
        return true;

      // Search by title
      if (typeof product.title === 'object') {
        const titles = Object.values(product.title) as string[];
        if (titles.some((t) => normalizeCode(t).includes(normalizedSearch)))
          return true;
      }

      return false;
    });
  }, [query, selectedCategory, selectedSubcategory]);

  const resultsTitle = query
    ? formatString(dict.common.search?.resultsFor ?? 'Results for "{query}"', {
        query,
      })
    : (dict.common.search?.allProducts ?? 'All Products');

  const foundCountText = formatString(
    dict.common.search?.foundCount ?? 'Found {count} products',
    {
      count: filteredProducts.length,
    },
  );

  return (
    <section className="py-10 min-h-screen font-heading">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-8 border-b border-border-subtle pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            {search?.title ?? 'Search Catalog'}
          </h1>
          <p className="text-muted-ink text-sm md:text-lg">{resultsTitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-3 rounded-2xl border border-border-subtle p-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-border-subtle pb-3">
              <span className="font-bold text-lg flex items-center gap-2 whitespace-nowrap shrink-0">
                <SlidersHorizontal className="w-5 h-5 text-brand shrink-0" />
                {dict.common?.allCategories ?? 'Filters'}
              </span>
              {(query || selectedCategory !== ALL_CATEGORIES) && (
                <button
                  onClick={resetAll}
                  className="ml-auto shrink-0 whitespace-nowrap text-xs text-red-600 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <FilterX className="w-3.5 h-3.5 shrink-0" />
                  {search.resetFilters ?? 'Reset'}
                </button>
              )}
            </div>

            {/* Text Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-ink">
                {search.searchButton ?? 'Search'}
              </label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleQueryChange(e.target.value)}
                  placeholder={search.searchPlaceholder}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-border-subtle text-sm focus:outline-none focus:border-brand"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-ink">
                {search.filterCategory ?? 'Categories'}
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory(ALL_CATEGORIES)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                    selectedCategory === ALL_CATEGORIES
                      ? 'bg-brand text-ink font-bold'
                      : 'hover:bg-surface-sunken text-muted-ink'
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
                          ? 'bg-brand text-ink font-bold'
                          : 'hover:bg-surface-sunken text-muted-ink'
                      }`}
                    >
                      {cat.title[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {availableSubcategories.length > 0 && (
              <div className="space-y-2 border-t border-border-subtle pt-4">
                <label className="text-xs font-bold uppercase tracking-wider">
                  {dict.navigation?.subcategory ?? 'Subcategory'}
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedSubcategory(ALL_SUBCATEGORIES)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                      selectedSubcategory === ALL_SUBCATEGORIES
                        ? 'bg-brand/20 text-brand-dark font-bold'
                        : 'hover:bg-border-subtle'
                    }`}
                  >
                    {dict.common?.allSubcategories ?? 'All'}
                  </button>
                  {availableSubcategories.map((sub) => {
                    const isActive = selectedSubcategory === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubcategory(sub.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                          isActive
                            ? 'bg-brand/20 text-brand-dark font-bold'
                            : 'hover:bg-border-subtle'
                        }`}
                      >
                        {dict.navigation.category.subcategories?.[sub.id] ??
                          sub.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>

          {/* Search Result */}
          <main className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between text-base font-medium text-muted-ink">
              <span>{foundCountText}</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 rounded-2xl border border-dashed border-border-subtle space-y-4">
                <p className="text-lg font-semibold text-muted-ink">
                  {dict.common?.noProducts ?? 'No products found'}
                </p>
                <Button
                  onClick={() => {
                    setQuery('');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                  className="border-border-strong cursor-pointer"
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
