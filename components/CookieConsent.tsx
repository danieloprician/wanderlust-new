'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Dispatch event to notify Analytics component
      window.dispatchEvent(
        new CustomEvent('cookie-consent-changed', { detail: consent })
      );
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    window.dispatchEvent(
      new CustomEvent('cookie-consent-changed', { detail: 'all' })
    );
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    window.dispatchEvent(
      new CustomEvent('cookie-consent-changed', { detail: 'necessary' })
    );
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 border-primary shadow-2xl">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary mb-2">
              {t('title')}
            </h3>
            <p className="text-sm text-text-light mb-2">
              {t('description')}{' '}
              <Link
                href="/politica-confidentialitate"
                className="text-accent hover:underline font-medium"
              >
                {t('privacyPolicy')}
              </Link>
            </p>
            <p className="text-xs text-text-muted">
              {t('details')}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptNecessary}
              className="btn-outline btn-sm border-primary text-primary hover:bg-primary/10 whitespace-nowrap"
            >
              {t('necessary')}
            </button>
            <button
              onClick={acceptAll}
              className="btn-primary btn-sm whitespace-nowrap"
            >
              {t('acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
