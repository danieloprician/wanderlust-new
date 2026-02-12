'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale('ro')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'ro'
            ? 'bg-primary text-white'
            : 'text-text-muted hover:text-primary'
        }`}
        aria-label="Romana"
      >
        RO
      </button>
      <span className="text-text-muted">|</span>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-primary text-white'
            : 'text-text-muted hover:text-primary'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
