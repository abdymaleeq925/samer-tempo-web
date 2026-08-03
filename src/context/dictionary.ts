import type { NavKey, SubKey } from '@/constants';
import enDict from '@/dict/en.json';

export type Dictionary = typeof enDict;

type NavDictShape = Record<NavKey, string> & { sub: Record<SubKey, string> };
export const _navDictCheck: NavDictShape = {} as Dictionary['navigation'];