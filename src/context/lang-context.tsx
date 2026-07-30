'use client';

import { createContext, useContext, ReactNode } from 'react';
import { type Locale } from '@/config/locales';
import enDict from '@/dict/en.json';

type Dictionary = typeof enDict;

interface LangContextType {
  lang: Locale;
  dict: Dictionary;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  return (
    <LangContext.Provider value={{ lang, dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}