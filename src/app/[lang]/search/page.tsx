import type { Metadata } from 'next';;
import { getDictionary } from '@/lib/get-dictionary';
import { getLanguageAlternates } from '@/lib/utils';
import type { Locale } from '@/config/locales';
import SearchResultsPage from '@/components/catalog/search-results';

type Props = {
  params: Promise<{ lang: Locale }>;
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { lang } = await params;
  const { q } = await searchParams;
  const dict = await getDictionary(lang);

  const title = q
    ? `${dict.common.search?.title ?? 'Search'}: "${q}"`
    : dict.common.search?.title ?? 'Catalog Search';

  return {
    title: `${title} — Samer Tempo`,
    description: dict.meta.description,
    alternates: getLanguageAlternates(lang, '/search'),
  };
}

export default function Page() {
  return <SearchResultsPage />;
}