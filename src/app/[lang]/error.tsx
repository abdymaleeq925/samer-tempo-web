'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { useLang } from '@/context/lang-context';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { dict, lang } = useLang();

  useEffect(() => {
    console.error('Handled Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 font-heading space-y-6">
      <div className="p-4 bg-red-100 text-red-600 rounded-2xl border border-red-200">
        <AlertTriangle className="w-12 h-12" />
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-extrabold text-zinc-900">
          {dict.common.error?.title ?? 'Something went wrong!'}
        </h1>
        <p className="text-zinc-600 text-sm leading-relaxed">
          {dict.common.error?.description ?? 'An unexpected error occurred while processing your request.'}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          onClick={() => reset()}
          className="bg-brand text-black hover:bg-brand-dark font-bold gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          {dict.common.error?.retryBtn ?? 'Try Again'}
        </Button>

        <Button variant="outline" className="border-black gap-2" render={<Link href={`/${lang}`} />}>
          <Home className="w-4 h-4" />
          {dict.common.error?.homeBtn ?? 'Back to Home'}
        </Button>
      </div>
    </div>
  );
}