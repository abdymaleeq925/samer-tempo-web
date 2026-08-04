'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useLang } from '@/context/lang-context';
import { MOCK_PRODUCTS } from '@/data/mock-catalog';

export function AppBreadcrumbs() {
  const pathname = usePathname();
  const { lang, dict } = useLang();
  const n = dict.navigation;

  if (pathname === '/' || pathname === `/${lang}`) {
    return null;
  }

  const rawSegments = pathname.split('/').filter(Boolean);
  const VIRTUAL_SEGMENTS = new Set(['products', 'product', 'categories', 'about']);
  const segments = rawSegments.filter((seg) => seg !== lang).filter((seg) => !VIRTUAL_SEGMENTS.has(seg));
  const lastSegment = segments[segments.length - 1];
  const currentProduct = MOCK_PRODUCTS.find( (p) => p.slug === lastSegment || p.id === lastSegment );

  return (
    <div className="px-4 py-4 xl:px-24 border-b border-zinc-800/80 backdrop-blur-md">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className='font-heading text-lg md:text-2xl'>
            <BreadcrumbLink href={`/${lang}`}>
              {n.home}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => {
            const pathUntilSegment = segments.slice(0, index + 1).join('/');
            const href = `/${lang}/${pathUntilSegment}`;
            const isLast = index === segments.length - 1;
            const translatedLabel =  n[segment as keyof typeof n] as string ||  n.sub?.[segment as keyof typeof n.sub] ||  segment.replace(/-/g, ' ');
            const label = translatedLabel.charAt(0).toUpperCase() + translatedLabel.slice(1);
            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className='font-heading text-lg md:text-2xl'>
                  {isLast && currentProduct ? (
                    <BreadcrumbPage>{currentProduct.title[lang]}</BreadcrumbPage>
                  ) : isLast ? (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>
                      {label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}