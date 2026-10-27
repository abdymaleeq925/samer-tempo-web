// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

import { locales } from '@/config/locales';
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/mock-catalog';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'
).replace(/\/$/, '');

type Item = {
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly';
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Item[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/catalogues', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/contacts', priority: 0.6, changeFrequency: 'monthly' },
  ];

  const categoryPages: Item[] = MOCK_CATEGORIES.map((cat) => ({
    // route segment = id without the "cat-" prefix (e.g. cat-tankCaps -> tankCaps)
    path: `/categories/${cat.id.replace(/^cat-/, '')}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  const productPages: Item[] = MOCK_PRODUCTS.map((p) => ({
    path: `/product/${p.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  }));

  const now = new Date();

  return [...staticPages, ...categoryPages, ...productPages].flatMap((item) => {
    const languages = {
      ...Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}${item.path}`]),
      ),
      'x-default': `${SITE_URL}/en${item.path}`,
    };
    return locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${item.path}`,
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
      alternates: { languages },
    }));
  });
}
