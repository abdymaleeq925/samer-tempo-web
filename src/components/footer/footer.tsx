'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

import { useLang } from '@/context/lang-context';

export default function Footer() {
  const { lang, dict } = useLang();
  const f = dict.footer;

  return (
    <footer className="w-full bg-stone-100 border-t border-ink font-heading px-4 lg:px-8 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <Link 
              href={`/${lang}`} 
              className="inline-block text-2xl font-black text-ink tracking-tight focus:outline-none focus:ring-2 focus:ring-brand rounded-md w-max"
            >
              SAMER TEMPO
            </Link>
            <p className="text-xs sm:text-base leading-relaxed max-w-sm">
              {f.description}
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 bg-ink px-3 py-1.5 rounded-lg w-max mt-2">
              <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
              <span>{f.certifiedBadge}</span>
            </div>
          </div>
          <nav className="lg:col-span-3 flex flex-col space-y-3 sm:items-center lg:items-start" aria-label={dict.accessibility.footerNavAria}>
            <h3 className="text-base font-bold uppercase tracking-wider">
              {f.navigationTitle}
            </h3>
            
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <Link 
                  href={`/${lang}/catalogues`} 
                  className="hover:text-brand transition-colors focus:outline-none focus:text-brand"
                >
                  {f.nav.catalog}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/contacts`} 
                  className="hover:text-brand transition-colors focus:outline-none focus:text-brand"
                >
                  {f.nav.contact}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/about`} 
                  className="hover:text-brand transition-colors focus:outline-none focus:text-brand"
                >
                  {f.nav.about}
                </Link>
              </li>
            </ul>
          </nav>
          <address className="lg:col-span-4 flex flex-col space-y-3 not-italic">
            <h3 className="text-base font-bold uppercase tracking-wider">
              {f.contactTitle}
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-brand shrink-0" />
                <span>{f.address}</span>
              </li>
              <li>
                <a 
                  href="mailto:info@samer.com.tr" 
                  className="inline-flex items-center gap-2.5 hover:text-brand transition-colors focus:outline-none focus:text-brand"
                >
                  <Mail className="w-6 h-6 text-brand shrink-0" />
                  <span>info@samer.com.tr</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+902163647319" 
                  className="inline-flex items-center gap-2.5 hover:text-brand transition-colors focus:outline-none focus:text-brand"
                >
                  <Phone className="w-6 h-6 text-brand shrink-0" />
                  <span>+90 (216) 364 73 19-20</span>
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} SAMER TEMPO. {f.rights}</p>
          <p>
            {f.companyDivision}
          </p>
        </div>

      </div>
    </footer>
  );
}