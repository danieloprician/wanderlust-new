// Re-export routing configuration for easy imports
export { routing } from './i18n/routing';
export { Link, redirect, usePathname, useRouter } from './i18n/routing';

// Re-export locales for backward compatibility
export const locales = ['ro', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ro';
