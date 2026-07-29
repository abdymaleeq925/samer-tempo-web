import 'server-only';
import type { Locale } from '@/config/locales';

const dictionaries = {
  en: () => import('@/dict/en.json').then((module) => module.default),
  tr: () => import('@/dict/tr.json').then((module) => module.default),
  ru: () => import('@/dict/ru.json').then((module) => module.default),
  de: () => import('@/dict/de.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};