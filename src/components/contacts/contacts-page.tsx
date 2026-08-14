'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import { useLang } from '@/context/lang-context';
import { ContactForm } from './contact-form';
import { GoogleMap } from './google-map';
import { MAP_EMBED_URL } from '@/constants';

export default function ContactsPage() {
  const { dict } = useLang();
  const contacts = dict.contacts;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
          {contacts.title ?? 'Contact Us'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          {contacts?.subtitle ??
            'Have questions about our commercial vehicle parts? Get in touch with our expert sales team.'}
        </p>
      </div>
      {/* Main Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        {/* Contacts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-transparent font-heading rounded-2xl p-6 sm:p-8 border-2 border-brand space-y-6">
            <h2 className="text-xl font-bold text-ink mb-4">
              {contacts?.infoTitle ?? 'Get in Touch'}
            </h2>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-100 text-brand rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">
                  {contacts?.addressLabel ?? 'Address'}
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {dict.footer.address}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-100 text-brand rounded-xl shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">
                  {contacts?.phoneLabel ?? 'Phone'}
                </h3>
                <a
                  href="tel:+902163647319"
                  className="text-sm font-medium text-gray-600 hover:text-brand transition-colors block mt-1"
                >
                  +90 (216) 364 73 19-20
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-100 text-brand rounded-xl shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">
                  {contacts?.emailLabel ?? 'Email'}
                </h3>
                <a
                  href="mailto:info@samer.com.tr"
                  className="text-sm font-medium text-gray-600 hover:text-brand transition-colors block mt-1"
                >
                  info@samer.com.tr
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-ink">
              <div className="p-3 bg-stone-100 text-brand rounded-xl shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">
                  {contacts?.workingHoursLabel}
                </h3>
                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line leading-relaxed">
                  {contacts?.workingHours}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
      <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-100">
        <GoogleMap embedUrl={MAP_EMBED_URL} title="Samer Otomotiv Location" />
      </div>
    </div>
  );
}