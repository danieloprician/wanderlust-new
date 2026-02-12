'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieSettings() {
  const t = useTranslations('cookieConsent');
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent');
    setConsent(storedConsent);
  }, []);

  const updateConsent = (newConsent: string) => {
    localStorage.setItem('cookie-consent', newConsent);
    setConsent(newConsent);
    window.dispatchEvent(
      new CustomEvent('cookie-consent-changed', { detail: newConsent })
    );
    
    // Reload page to apply changes
    window.location.reload();
  };

  if (!consent) return null;

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-primary mb-4">
        {t('title')}
      </h3>
      <p className="text-text-light mb-4">
        {t('description')}
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 border border-border rounded-lg">
          <div>
            <p className="font-medium text-primary">Cookie-uri necesare</p>
            <p className="text-sm text-text-muted">
              Esențiale pentru funcționarea site-ului
            </p>
          </div>
          <span className="text-sm font-medium text-accent">Întotdeauna active</span>
        </div>

        <div className="flex items-center justify-between p-4 border border-border rounded-lg">
          <div>
            <p className="font-medium text-primary">Cookie-uri de analiză</p>
            <p className="text-sm text-text-muted">
              Google Analytics, Meta Pixel, TikTok Pixel
            </p>
          </div>
          <button
            onClick={() => updateConsent(consent === 'all' ? 'necessary' : 'all')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              consent === 'all' ? 'bg-accent' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                consent === 'all' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => updateConsent('necessary')}
          className="btn-outline flex-1"
        >
          {t('necessary')}
        </button>
        <button
          onClick={() => updateConsent('all')}
          className="btn-primary flex-1"
        >
          {t('acceptAll')}
        </button>
      </div>
    </div>
  );
}
