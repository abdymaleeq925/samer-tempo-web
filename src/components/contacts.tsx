'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLang } from '@/context/lang-context';
import { ContactForm } from '@/components/layout/contact-form';
import { GoogleMap } from './layout/google-map';

export default function ContactsPage() {
  const { dict } = useLang();
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.21862133833227!2d29.180518880710313!3d40.99247328745507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cace1cd4b6194b%3A0x6868e26aee2e8465!2sAcar%20Metal%20Kalip%20Sanayi%20Ve%20Ticaret%20Limited%20%C5%9Eirketi!5e0!3m2!1sen!2str!4v1785917352893!5m2!1sen!2str";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      
      {/* ЗАГОЛОВОК СТРАНИЦЫ */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          {dict.contacts?.title ?? 'Contact Us'}
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          {dict.contacts?.subtitle ?? 
            'Have questions about our commercial vehicle parts? Get in touch with our expert sales team.'}
        </p>
      </div>

      {/* ОСНОВНОЙ БЛОК: ИНФОРМАЦИЯ + ФОРМА */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        
        {/* ЛЕВАЯ КОЛОНКА: КОНТАКТНЫЕ ДАННЫЕ (5 колонок) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {dict.contacts?.infoTitle ?? 'Get in Touch'}
            </h2>

            {/* Адрес */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-brand rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {dict.contacts?.addressLabel ?? 'Address'}
                </h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  {dict.footer.address}
                </p>
              </div>
            </div>

            {/* Телефон */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-brand rounded-xl shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {dict.contacts?.phoneLabel ?? 'Phone'}
                </h3>
                <a 
                  href="tel:+902163647319" 
                  className="text-sm font-medium text-gray-900 hover:text-brand transition-colors block mt-1"
                >
                  +90 (216) 364 73 19-20
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-brand rounded-xl shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {dict.contacts?.emailLabel ?? 'Email'}
                </h3>
                <a 
                  href="mailto:info@samer.com.tr" 
                  className="text-sm font-medium text-gray-900 hover:text-brand transition-colors block mt-1"
                >
                  info@samer.com.tr
                </a>
              </div>
            </div>

            {/* Рабочие часы */}
            <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
              <div className="p-3 bg-blue-50 text-brand rounded-xl shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  {dict.contacts?.workingHoursLabel}
                </h3>
                <p className="text-sm text-gray-600 mt-1 whitespace-pre-line leading-relaxed">
                  {dict.contacts?.workingHours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: ФОРМА ОБРАТНОЙ СВЯЗИ (7 колонок) */}
        <div className="lg:col-span-7">
          <ContactForm/>
        </div>

      </div>

      {/* НИЖНИЙ БЛОК: КАРТА ИЛИ ИНТЕРАКТИВНАЯ ЗАГЛУШКА */}
      <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-100">
      
      <GoogleMap embedUrl={mapEmbedUrl} title="Samer Otomotiv Location" />
      </div>

    </div>
  );
}