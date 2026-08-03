import 'server-only';

import type { Dictionary } from '@/context/dictionary';
import type { Locale } from '@/config/locales';

const dictionaries = {
  en: () => import('@/dict/en.json').then((module) => module.default),
  tr: () => import('@/dict/tr.json').then((module) => module.default),
  ru: () => import('@/dict/ru.json').then((module) => module.default),
  de: () => import('@/dict/de.json').then((module) => module.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader() as Promise<Dictionary>;
}