'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useLang } from '@/context/lang-context';

export function AppBreadcrumbs() {
  const pathname = usePathname();
  const { lang, dict } = useLang();
  const n = dict.navigation;

  const isHome = pathname === '/' || pathname === `/${lang}`;
  const rawSegments = pathname.split('/').filter(Boolean);
  const VIRTUAL_SEGMENTS = new Set(['products', 'product', 'categories']);

  const displaySegments =
    rawSegments[0] === lang ? rawSegments.slice(1) : rawSegments;

  if (isHome || displaySegments[0] === 'product') return null;

  function resolveLabel(segment: string): string {
    const navValue = n[segment as keyof typeof n];
    if (typeof navValue === 'string') return navValue;

    const subValue = n.category?.[segment as keyof typeof n.category];
    if (typeof subValue === 'string') return subValue;

    return segment.replace(/-/g, ' ');
  }

  return (
    <div className="p-4 lg:px-8 xl:px-18 border-b border-border-strong">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="font-heading font-medium text-lg md:text-2xl">
            <BreadcrumbLink render={<Link href={`/${lang}`} />}>
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
                <BreadcrumbItem className="font-heading font-medium text-lg md:text-2xl">
                  {isLast || isNonClickable ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink render={<Link href={href} />}>
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
