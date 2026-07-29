import Link from 'next/link';
import LanguageSwitcher from './language-switcher';

export default function Header({ lang }: { lang: string }) {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <span className="text-3xl font-black tracking-wider text-brand group-hover:scale-105 transition-transform">
            SAMER
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-400 border-l border-zinc-700 pl-3">
            TEMPO / B2B
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href={`/${lang}`} className="hover:text-brand transition-colors">
            Главная
          </Link>
          <Link href={`/${lang}/categories`} className="hover:text-brand transition-colors">
            Категории
          </Link>
          <Link href={`/${lang}/contact`} className="hover:text-brand transition-colors">
            Контакты
          </Link>
        </nav>

        <LanguageSwitcher currentLang={lang} />
      </div>
    </header>
  );
}