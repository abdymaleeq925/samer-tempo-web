'use client';

import Link from 'next/link';
import { FileQuestion, Home, Grid } from 'lucide-react';
import { useLang } from '@/context/lang-context';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { dict, lang } = useLang();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 font-heading space-y-6">
      <div className="p-4 bg-brand/10 text-brand rounded-2xl border border-brand/20">
        <FileQuestion className="w-16 h-16" />
      </div>

      <div className="space-y-2 max-w-md">
        <span className="text-5xl font-black text-black">404</span>
        <h1 className="text-2xl font-bold text-zinc-900">
          {dict.common.notFound?.title ?? 'Page Not Found'}
        </h1>
        <p className="text-zinc-600 text-sm leading-relaxed">
          {dict.common.notFound?.description ?? 'The page or spare part you are looking for does not exist.'}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          className="bg-black text-white hover:bg-zinc-800 font-bold gap-2"
          render={<Link href={`/${lang}`} />}
        >
          <Home className="w-4 h-4" />
          {dict.common.notFound?.homeBtn ?? 'Back to Home'}
        </Button>

        <Button
          variant="outline"
          className="border-black gap-2"
          render={<Link href={`/${lang}/catalogues`} />}
        >
          <Grid className="w-4 h-4" />
          {dict.common.notFound?.catalogBtn ?? 'Browse Catalog'}
        </Button>
      </div>
    </div>
  );
}