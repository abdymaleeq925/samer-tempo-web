import Link from 'next/link';

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-brand mb-4">SAMER TEMPO</h3>
          <p className="text-sm text-zinc-500">
            Качественные комплектующие для коммерческого транспорта, кабели, фитинги и противоугонные системы[cite: 1].
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Навигация</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${lang}/categories`} className="hover:text-brand">Категории</Link></li>
            <li><Link href={`/${lang}/contact`} className="hover:text-brand">Контакты</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand font-semibold mb-3">Контакты B2B</h4>
          <p className="text-sm">Turkey / Istanbul</p>
          <p className="text-sm">Email: export@samer.com.tr</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-8 pt-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} SAMER TEMPO. All rights reserved.
      </div>
    </footer>
  );
}