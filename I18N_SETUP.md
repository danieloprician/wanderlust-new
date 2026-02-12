# Internationalization (i18n) Setup

## ✅ What's Been Completed

### 1. Infrastructure Setup
- **next-intl** package installed
- Configured `next.config.mjs` with next-intl plugin
- Created `i18n.ts` configuration file with supported locales (ro, en)
- Created `middleware.ts` for automatic locale detection and routing

### 2. Directory Structure
- Restructured app to use `app/[locale]/` pattern
- Moved all pages to `app/[locale]/(site)/`
- Created locale-aware layouts

### 3. Translation Files
- Created `messages/ro.json` with Romanian translations
- Created `messages/en.json` with English translations
- Translations cover: common texts, navigation, hero, USP, cabin, contact, footer

### 4. Components
- Created `LanguageSwitcher` component
- Added language switcher to Header (desktop & mobile)

## 🔄 Current Status

The site is now bilingual-ready with the following URL structure:
- Romanian (default): `/` (displays Romanian content)
- English: `/en/` (displays English content)

**Language Switcher:** Added to header navigation - users can switch between RO/EN

## ⚠️ What Still Needs To Be Done

The pages are currently still displaying hardcoded Romanian text. To complete the translation:

### Pages that need updating:
1. Homepage (`app/[locale]/(site)/page.tsx`)
2. Contact Page (`app/[locale]/(site)/contact/page.tsx`)
3. Cabin Page (`app/[locale]/(site)/cabana/page.tsx`)
4. FAQ Page (`app/[locale]/(site)/faq/page.tsx`)
5. Gallery Page (`app/[locale]/(site)/galerie/page.tsx`)
6. Rates Page (`app/[locale]/(site)/tarife/page.tsx`)
7. Reservations Page (`app/[locale]/(site)/rezervari/page.tsx`)

### Components that need updating:
1. `Header.tsx` - navigation items
2. `Footer.tsx` - footer texts
3. `HeroCabana.tsx` - hero section
4. `USPList.tsx` - USP texts
5. Other components as needed

## 🚀 How to Update a Page

Example for updating the homepage:

```tsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  
  return (
    <h1>{t('hero.title')}</h1>
    <p>{t('hero.subtitle')}</p>
  );
}
```

## 📝 Adding New Translations

To add new translations, update both:
- `messages/ro.json`
- `messages/en.json`

## 🔗 URL Structure

- `/` or `/ro/` → Romanian homepage
- `/en/` → English homepage  
- `/contact` or `/ro/contact` → Romanian contact page
- `/en/contact` → English contact page

## 🌍 Supported Locales

- `ro` (Romanian) - Default
- `en` (English)

## 📚 Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- Translation files location: `/messages/{locale}.json`
- i18n config: `/i18n.ts`
- Middleware: `/middleware.ts`
