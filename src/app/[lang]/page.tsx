import HeroCollage from '@/components/layout/hero-collage';
import OemSearchInput from '@/components/catalog/oem-search-bar';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cable, Truck } from 'lucide-react';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 px-6 text-center space-y-6">
        <div className="inline-block bg-zinc-900 border border-brand/40 text-brand text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-2">
          B2B каталог автозапчастей
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto">
          Надежные комплектующие для <span className="text-brand">Truck & Trailer</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Кабели, пневмосоединения, крышки бака и антикражные системы напрямую от производителя[cite: 1].
        </p>

        {/* Умный поиск */}
        <div className="pt-4">
          <OemSearchInput lang={lang} />
        </div>

        {/* Слитый коллаж со срезанными границами наискосок */}
        <HeroCollage />
      </section>

      {/* Особенности / Преимущества */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl space-y-3">
          <Cable className="w-10 h-10 text-brand" />
          <h3 className="text-xl font-bold">Electrical Cables</h3>
          <p className="text-zinc-400 text-sm">Спиральные и прямые электрические кабели высочайшего качества[cite: 1].</p>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl space-y-3">
          <Truck className="w-10 h-10 text-brand" />
          <h3 className="text-xl font-bold">Air Couplings</h3>
          <p className="text-zinc-400 text-sm">Надежные соединения пневмосистем для тягачей и прицепов[cite: 1].</p>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl space-y-3">
          <ShieldCheck className="w-10 h-10 text-brand" />
          <h3 className="text-xl font-bold">Anti-theft Systems</h3>
          <p className="text-zinc-400 text-sm">Противоугонные системы и крышки топливных баков[cite: 1].</p>
        </div>
      </section>
    </div>
  );
}