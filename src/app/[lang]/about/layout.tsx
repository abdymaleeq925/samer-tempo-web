import Link from 'next/link';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Шапка раздела */}
      <h1 className="text-3xl font-bold mb-6">О нас</h1>

      {/* Поднавигация (Вкладки / Выборка) */}
      <nav className="flex space-x-4 border-b border-zinc-700 pb-3 mb-6">
        <Link
          href="/about"
          className="px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          О компании
        </Link>
        <Link
          href="/about/team"
          className="px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          Команда
        </Link>
        <Link
          href="/about/history"
          className="px-3 py-2 rounded-md hover:bg-zinc-800 transition"
        >
          История
        </Link>
      </nav>

      {/* Здесь будет рендериться контент из page.tsx выбранного раздела */}
      <main>{children}</main>
    </div>
  );
}