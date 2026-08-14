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

  if (pathname === '/' || pathname === `/${lang}`) return null;

  const rawSegments = pathname.split('/').filter(Boolean);
  const VIRTUAL_SEGMENTS = new Set(['products', 'product', 'categories']);

  const displaySegments = rawSegments.filter((seg) => seg !== lang);
  const lastSegment = displaySegments[displaySegments.length - 1];
  const currentProduct = MOCK_PRODUCTS.find((p) => p.slug === lastSegment || p.id === lastSegment);

  function resolveLabel(segment: string): string {
    const navValue = n[segment as keyof typeof n];
    if (typeof navValue === 'string') return navValue;

    const subValue = n.sub?.[segment as keyof typeof n.sub];
    if (typeof subValue === 'string') return subValue;

    return segment.replace(/-/g, ' ');
  }

  return (
    <div className="px-4 py-4 lg:px-8 xl:px-24 border-b border-ink">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className='font-heading font-medium text-lg md:text-2xl'>
            <BreadcrumbLink href={`/${lang}`}>
              {n.home}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {displaySegments.map((segment, index) => {
            const isLast = index === displaySegments.length - 1;
            const isNonClickable = VIRTUAL_SEGMENTS.has(segment);
            const realPath = displaySegments.slice(0, index + 1).join('/');
            const href = `/${lang}/${realPath}`;

            const rawLabel = resolveLabel(segment);
            const label = rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);
            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className='font-heading font-medium text-lg md:text-2xl'>
                  {isLast && currentProduct ? (
                    <BreadcrumbPage>{currentProduct.title[lang]}</BreadcrumbPage>
                  ) : isLast || isNonClickable ? (
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