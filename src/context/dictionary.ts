import type { CatKey, NavKey, SubcategoryId } from '@/constants';
import enDict from '@/dict/en.json';

export type Dictionary = typeof enDict;

type NavDictShape = Record<NavKey, string> & {
  category: Record<CatKey, string>;
};
type SubcategoryDictShape = Record<SubcategoryId, string>;

export const _subcategoryDictCheck: SubcategoryDictShape =
  {} as Dictionary['navigation']['category']['subcategories'];

export const _navDictCheck: NavDictShape = {} as Dictionary['navigation'];
