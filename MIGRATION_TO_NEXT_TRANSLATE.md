# Migration from next-intl to next-translate

This guide explains how to update your components to use **next-translate** for Azure Static Web Apps compatibility.

## Key Differences

### Old (next-intl):
```tsx
'use server'
import { getTranslations } from 'next-intl/server';

export async function MyComponent() {
  const t = await getTranslations({ locale, namespace: 'common' });
  return <div>{t('home')}</div>;
}
```

### New (next-translate):
```tsx
'use client'
import useTranslation from 'next-translate/useTranslation';

export function MyComponent() {
  const { t } = useTranslation('common');
  return <div>{t('home')}</div>;
}
```

## Installation

```bash
npm install next-translate
```

## Usage Examples

### 1. Simple Component with Single Namespace

```tsx
'use client'
import useTranslation from 'next-translate/useTranslation';

export function HeaderNav() {
  const { t } = useTranslation('nav');
  
  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/gallery">{t('gallery')}</a>
      <a href="/contact">{t('contact')}</a>
    </nav>
  );
}
```

### 2. Using Multiple Namespaces

```tsx
'use client'
import useTranslation from 'next-translate/useTranslation';

export function ContactPage() {
  const { t: tCommon } = useTranslation('common');
  const { t: tContact } = useTranslation('contact');
  
  return (
    <div>
      <h1>{tContact('title')}</h1>
      <p>{tCommon('phone')}: {tContact('phoneSchedule')}</p>
    </div>
  );
}
```

### 3. Using String Interpolation

```tsx
'use client'
import useTranslation from 'next-translate/useTranslation';

export function Gallery() {
  const { t } = useTranslation('home');
  
  // Translation: "Discover {siteName}, the perfect cottage..."
  return <h1>{t('seo_heading', { siteName: 'Wanderlust Cabin' })}</h1>;
}
```

### 4. Working with Arrays (from JSON)

```tsx
'use client'
import useTranslation from 'next-translate/useTranslation';

export function TestimonialList() {
  const { t } = useTranslation('testimonials');
  
  // testimonials.json has: "items": [{ "name": "...", ... }]
  const testimonials = t('items', {}, { returnObjects: true });
  
  return (
    <div>
      {testimonials.map((item: any, i: number) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
}
```

## Accessing Current Locale

To get the current locale in your component:

```tsx
'use client'
import useTranslation from 'next-translate/useTranslation';

export function LanguageSwitcher() {
  const { lang } = useTranslation();
  
  return (
    <div>
      <p>Current language: {lang}</p>
      <a href={`/en/page`}>English</a>
      <a href={`/ro/page`}>Română</a>
    </div>
  );
}
```

## Namespace Configuration

The namespaces are defined in **next-translate.config.js**:

```js
module.exports = {
  locales: ['en', 'ro'],
  defaultLocale: 'en',
  ns: ['common', 'nav', 'footer', 'home', 'cabin', 'contact', ...],
  defaultNS: 'common',
};
```

## File Structure

```
locales/
├── en/
│   ├── common.json
│   ├── nav.json
│   ├── footer.json
│   ├── home.json
│   ├── contact.json
│   └── ...
└── ro/
    ├── common.json
    ├── nav.json
    ├── footer.json
    ├── home.json
    ├── contact.json
    └── ...
```

## Component Migration Steps

1. **Remove `'use server'`** directive from the top
2. **Add `'use client'`** directive
3. **Replace imports:**
   ```tsx
   // OLD
   import { getTranslations } from 'next-intl/server';
   const t = await getTranslations({ locale, namespace: '...' });
   
   // NEW
   import useTranslation from 'next-translate/useTranslation';
   const { t } = useTranslation('namespace');
   ```

4. **Remove async/await** - components become regular client components
5. **Test translations** in both languages

## Important Notes for Azure Static Web Apps

✅ **next-translate works perfectly with static export** because:
- Translations are bundled at build time
- No server-side rendering required
- All logic is client-side
- Compatible with `next export`

## Building for Production

When building for Azure Static Web Apps:

```bash
npm run build
# This produces a static export in the out/ folder
```

In `next.config.mjs`, ensure you have:

```js
export default {
  output: 'export',
  // ... other config
};
```

## Example - Converting Header.tsx

**Before (next-intl):**
```tsx
'use server'
import { getTranslations } from 'next-intl/server';

export async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'nav' });
  
  return (
    <header>
      <nav>
        <a href="/">{t('home')}</a>
        <a href="/cabin">{t('cabin')}</a>
      </nav>
    </header>
  );
}
```

**After (next-translate):**
```tsx
'use client'
import useTranslation from 'next-translate/useTranslation';

export function Header() {
  const { t } = useTranslation('nav');
  
  return (
    <header>
      <nav>
        <a href="/">{t('home')}</a>
        <a href="/cabin">{t('cabin')}</a>
      </nav>
    </header>
  );
}
```

That's it! The locale is automatically handled through the URL structure (`/en/page`, `/ro/page`).
