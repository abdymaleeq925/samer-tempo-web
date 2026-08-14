'use client';

import { useState, useSyncExternalStore } from 'react';
import { MapPin, ShieldAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLang } from '@/context/lang-context';

interface GoogleMapProps {
  embedUrl: string;
  className?: string;
  title?: string;
}

function getMapConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookie_consent_maps') === 'true';
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export function GoogleMap({ embedUrl, className = "border-0 filter grayscale hover:grayscale-0 transition-all duration-500", title = "Office Location Map",}: GoogleMapProps) {
  const { dict } = useLang();
  const isClientConsent = useSyncExternalStore(
    subscribe,
    getMapConsent,
    () => false
  );

  const [userAccepted, setUserAccepted] = useState(false);

  const hasConsent = isClientConsent || userAccepted;

  const handleAccept = () => {
    localStorage.setItem('cookie_consent_maps', 'true');
    setUserAccepted(true);
    window.dispatchEvent(new Event('storage'));
  };

  if (hasConsent) {
    return (
      <iframe
        title={title}
        src={embedUrl}
        width="100%"
        height="100%"
        className={className}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="relative w-full h-full min-h-88 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [bg-size-[16px_16px] opacity-40 pointer-events-none" />
      <div className="relative z-10 p-3 rounded-full bg-brand/10 text-brand">
        <MapPin className="w-8 h-8" />
      </div>
      <div className="relative z-10 max-w-sm space-y-2">
        <h3 className="text-lg font-bold text-white">
          {dict?.contacts.mapConsent?.title || 'Google Maps is disabled'}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          {dict?.contacts.mapConsent?.description || 
            'To view our interactive location map, please accept Google Maps privacy and cookie policies.'}
        </p>
      </div>
      <Button
        onClick={handleAccept}
        size="sm"
        className="relative z-10 bg-brand hover:bg-brand-dark text-black font-semibold gap-2"
      >
        <ShieldAlert className="w-4 h-4" />
        {dict?.contacts.mapConsent?.acceptBtn || 'Allow Google Maps'}
      </Button>
    </div>
  );
}