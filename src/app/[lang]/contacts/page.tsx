import type { Metadata } from 'next';

import { getDictionary } from '@/lib/get-dictionary';
import { getLanguageAlternates } from "@/lib/utils";
import type { Locale } from '@/config/locales';
import ContactsPage from "@/components/contacts/contacts-page";

type Props = {
  params: Promise<{lang: Locale}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.contacts?.title ?? 'Contact Us',
    description: dict.contacts?.subtitle,
    alternates: getLanguageAlternates(lang, '/contacts'),
    openGraph: {
      title: `${dict.contacts?.title ?? 'Contact Us'} — Samer Tempo`,
      description: dict.contacts?.subtitle,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr'}/${lang}/contacts`,
    },
  };
}

export default function Page() {
  return <ContactsPage/>
}