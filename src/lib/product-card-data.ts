import type { Locale } from '@/config/locales';
import type { Dictionary } from '@/context/dictionary';
import type { Product } from '@/data/mock-catalog';
import { normalizeCode } from '@/lib/utils';

export type ProductCardData = {
  id: string;
  slug: string;
  smrCode: string;
  title: string;
  image: string;
  categoryId: string;
  subcategoryId?: string;
  subcategory: string;
  oems: string[];
  oemMore: number;
  specs: { label: string; value: string }[];
  haystack: string;
};

export function toCardData(
  p: Product,
  lang: Locale,
  dict: Dictionary,
): ProductCardData {
  const subs = dict.navigation.category.subcategories as Record<string, string>;
  return {
    id: p.id,
    slug: p.slug,
    smrCode: p.smrCode,
    title: p.title[lang],
    image: p.images?.[0] ?? '/products/placeholder.png',
    categoryId: p.categoryId,
    subcategoryId: p.subcategoryId,
    subcategory:
      (p.subcategoryId && subs[p.subcategoryId]) || p.subcategoryId || '',
    oems: p.oemNumbers?.slice(0, 2) ?? [],
    oemMore: Math.max(0, (p.oemNumbers?.length ?? 0) - 2),
    specs: (p.specs ?? []).slice(0, 3).map((s) => ({
      label: s.label[lang],
      value: typeof s.value === 'string' ? s.value : s.value[lang],
    })),
    haystack: normalizeCode(
      [p.smrCode, ...(p.oemNumbers ?? []), ...Object.values(p.title)].join(' '),
    ),
  };
}
