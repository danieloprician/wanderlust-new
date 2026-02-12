'use client';

import { useTranslations } from 'next-intl';

export default function CookieSettingsButton() {
  const t = useTranslations('cookieConsent');

  const openSettings = () => {
    // Remove the consent to trigger the banner again
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  return (
    <button
      onClick={openSettings}
      className="text-white/80 hover:text-accent transition-colors text-sm text-left"
    >
      {t('manageSettings')}
    </button>
  );
}
