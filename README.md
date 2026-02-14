# 🏡 Cabană Website - Next.js 14 + App Router

Website modern, rapid și SEO-optimizat pentru promovarea unei cabane de închiriat, construit cu **Next.js 14**, **App Router**, **Tailwind CSS** și **TypeScript**.

---

## 📋 Cuprins

- [Caracteristici](#-caracteristici)
- [Tech Stack](#-tech-stack)
- [Structura Proiectului](#-structura-proiectului)
- [Instalare & Configurare](#-instalare--configurare)
- [Personalizare](#-personalizare)
- [Deployment](#-deployment)
- [SEO & Performance](#-seo--performance)
- [Checklist Pre-Launch](#-checklist-pre-launch)

---

## ✨ Caracteristici

### Funcționalități Principale
- ✅ **Next.js 14** cu App Router și Server Components
- ✅ **SSG** (Static Site Generation) + **ISR** (Incremental Static Regeneration)
- ✅ **Tailwind CSS** cu variabile CSS pentru paletă brand
- ✅ **TypeScript** pentru type safety
- ✅ **SEO complet**: Metadata API, JSON-LD schemas, sitemap, robots.txt
- ✅ **Formular rezervări** cu validare client-side și API route
- ✅ **Galerie foto** performantă cu lightbox și lazy-loading
- ✅ **Hartă interactivă** Leaflet (fără API keys)
- ✅ **Responsive design** pentru toate device-urile
- ✅ **Accesibilitate** (WCAG 2.1 AA compliant)
- ✅ **Core Web Vitals** optimizate

### Pagini
- 🏠 **Home** - Hero, USPs, testimoniale, mini-galerie, hartă
- 🏡 **Cabana** - Poveste, dotări, plan camere, "pentru cine"
- 📸 **Galerie** - Grid responsive cu filtre și lightbox
- 💰 **Tarife** - Tabel prețuri, politici, reduceri
- 📅 **Rezervări** - Formular validat cu anti-spam
- 📞 **Contact** - NAP, hartă, directions, social media
- ❓ **FAQ** - 15 întrebări cu schema JSON-LD
- 📄 **Termeni & Politica de Confidențialitate**

---

## 🛠 Tech Stack

| Categorie | Tehnologie |
|-----------|------------|
| **Framework** | Next.js 14.2+ (App Router) |
| **Language** | TypeScript 5.3+ |
| **Styling** | Tailwind CSS 3.4+ + CSS Variables |
| **Images** | Next/Image (WebP, AVIF, optimizare automată) |
| **Maps** | React Leaflet (OpenStreetMap, no API key) |
| **SEO** | next-sitemap, Metadata API, JSON-LD |
| **Linting** | ESLint + Prettier |
| **Package Manager** | npm / yarn / pnpm |

---

## 📁 Structura Proiectului

```
cabana-website/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Group pentru site public
│   │   ├── layout.tsx            # Layout cu Header + Footer
│   │   ├── page.tsx              # Homepage (/)
│   │   ├── cabana/
│   │   │   └── page.tsx          # /cabana
│   │   ├── galerie/
│   │   │   └── page.tsx          # /galerie
│   │   ├── tarife/
│   │   │   └── page.tsx          # /tarife
│   │   ├── rezervari/
│   │   │   └── page.tsx          # /rezervari
│   │   ├── contact/
│   │   │   └── page.tsx          # /contact
│   │   ├── faq/
│   │   │   └── page.tsx          # /faq
│   │   ├── termeni/
│   │   │   └── page.tsx          # /termeni
│   │   └── politica-confidentialitate/
│   │       └── page.tsx          # /politica-confidentialitate
│   ├── api/
│   │   └── booking/
│   │       └── route.ts          # API endpoint pentru rezervări
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Stiluri globale
│
├── components/                   # Componente React
│   ├── Header.tsx                # Navigare sticky + meniu mobil
│   ├── Footer.tsx                # NAP, links, social
│   ├── HeroCabana.tsx            # Hero section full-bleed
│   ├── USPList.tsx               # Lista de beneficii
│   ├── Gallery.tsx               # Grid galerie + lightbox
│   ├── Testimonial.tsx           # Recenzii clienți
│   ├── RateTable.tsx             # Tabel tarife + politici
│   └── Map.tsx                   # Hartă Leaflet
│
├── lib/                          # Utilities & helpers
│   └── seo/
│       ├── config.ts             # SEO config + metadata helpers
│       └── schema.tsx            # JSON-LD schemas
│
├── public/                       # Static assets
│   ├── images/                   # Imagini (WebP/AVIF)
│   │   ├── gallery/              # Imagini galerie
│   │   ├── hero-cabana.webp
│   │   ├── og-image.jpg
│   │   └── README.md             # Ghid imagini
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── robots.txt                # (generat automat)
│
├── styles/                       # Stiluri CSS
│   ├── globals.css               # Tailwind + componente custom
│   └── theme.css                 # Variabile CSS (paleta culori)
│
├── .env.example                  # Template variabile de mediu
├── next.config.mjs               # Configurare Next.js
├── next-sitemap.config.js        # Configurare sitemap
├── tailwind.config.js            # Configurare Tailwind
├── tsconfig.json                 # Configurare TypeScript
├── package.json                  # Dependencies
└── README.md                     # Acest fișier
```

---

## 🚀 Instalare & Configurare

### 1. Clonare & Instalare Dependințe

```bash
# Clone repository (dacă e în Git)
git clone <repository-url>
cd cabana-website

# Install dependencies
npm install
# sau
yarn install
# sau
pnpm install
```

### 2. Configurare Variabile de Mediu

Creează fișierul `.env.local` (copiază din `.env.example`):

```bash
cp .env.example .env.local
```

Editează `.env.local` cu datele reale:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://cabana-ta.ro
NEXT_PUBLIC_SITE_NAME=Cabana Paradis

# Contact (NAP - Local SEO)
NEXT_PUBLIC_PHONE=+40712345678
NEXT_PUBLIC_EMAIL=contact@cabana-ta.ro
NEXT_PUBLIC_ADDRESS=Strada Principală nr. 123
NEXT_PUBLIC_CITY=Brașov
NEXT_PUBLIC_REGION=Brașov
NEXT_PUBLIC_COUNTRY=România

# Coordonate GPS (pentru hartă)
NEXT_PUBLIC_LAT=45.6
NEXT_PUBLIC_LNG=25.6

# Social Media
NEXT_PUBLIC_FB_URL=https://facebook.com/cabana
NEXT_PUBLIC_IG_URL=https://instagram.com/cabana
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@cabana

# Analytics (opțional - activează după consimțământ GDPR)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 3. Rulare Locală

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

---

## 🎨 Personalizare

### Paleta de Culori

Editează `styles/theme.css` pentru a schimba culorile:

```css
:root {
  /* Actualele culori (earth tones) */
  --color-primary: #2C5F4D;      /* Verde pădure */
  --color-secondary: #8B6F47;    /* Maro lemn */
  --color-accent: #C17856;       /* Portocaliu teracotă */
  --color-bg: #F5F1E8;           /* Bej deschis */
  /* ... */
}
```

**Recomandare:** Folosește un generator de paletă precum [Coolors](https://coolors.co/) sau extrage culorile din logo-ul tău.

### Brand & Conț Cabana

**1. Date cabană** - Editează `lib/seo/config.ts`:
```typescript
export const siteConfig = {
  name: 'Cabana Paradis',
  tagline: 'Refugiul tău perfect la munte',
  // ... restul datelor
};
```

**2. Amenități** - Editează în `lib/seo/config.ts`:
```typescript
amenities: [
  'Ciubar',
  'Saună',
  // Adaugă/șterge după nevoie
]
```

**3. Imagini** - Vezi `public/images/README.md` pentru ghid complet.

### Conținut Text

Toate textele sunt editabile direct în componente și pagini:
- **Homepage**: `app/(site)/page.tsx`
- **Despre Cabană**: `app/(site)/cabana/page.tsx`
- **FAQ**: `app/(site)/faq/page.tsx`

Caută placeholder-urile `{{CABIN_NAME}}`, `{{REGION}}` etc. și înlocuiește-le.

---

## 🌐 Deployment

**📘 Pentru ghidul complet de deployment cu pași detaliați, vezi [DEPLOY_STATIC.md](./DEPLOY_STATIC.md)**

Site-ul este un proiect **Next.js cu middleware i18n** și necesită platforme de hosting care suportă **serverless functions** sau **Node.js runtime**.

### Opțiuni recomandate:

| Platformă | Dificultate | Timp Setup | Documentație |
|-----------|-------------|------------|--------------|
| **Vercel** | ⭐ Foarte ușor | 3 min | [DEPLOY_STATIC.md](./DEPLOY_STATIC.md#-deployment-pe-vercel-recomandat) |
| **Netlify** | ⭐ Foarte ușor | 3 min | [DEPLOY_STATIC.md](./DEPLOY_STATIC.md#-deployment-pe-netlify) |
| **Azure Static Web Apps** | ⭐⭐⭐ Mediu | 10 min | [DEPLOY_AZURE.md](./DEPLOY_AZURE.md) |

**Notă:** GitHub Pages și hosting static tradițional NU sunt compatibile cu acest proiect din cauza middleware-ului Next.js.

### Quick Start - Vercel (Recomandat pentru beginners)

1. Push codul pe GitHub
2. Mergi pe [vercel.com](https://vercel.com) și conectează repository-ul
3. Adaugă variabilele de mediu din `.env.local`
4. Click "Deploy" - gata! 🎉

### Build Local

```bash
# Instalează dependințele
npm install

# Build pentru producție
npm run build

# Pornește serverul de producție
npm start
```

Pentru deployment pas cu pas, vezi [DEPLOYMENT_QUICKSTART.md](./DEPLOYMENT_QUICKSTART.md) sau [DEPLOY_STATIC.md](./DEPLOY_STATIC.md).

---

## 🔍 SEO & Performance

### SEO Implementat

✅ **On-Page SEO**
- Metadata API cu titluri, descrieri, keywords unice
- Structură H1-H6 corectă (un singur H1/pagină)
- URL-uri clean și descriptive
- Alt text pentru toate imaginile
- Canonical URLs
- Open Graph & Twitter Cards

✅ **Technical SEO**
- JSON-LD schemas: LodgingBusiness, FAQPage, Breadcrumbs, Place
- Sitemap.xml automat (next-sitemap)
- Robots.txt
- Structured data validation (Google Rich Results Test)

✅ **Local SEO**
- NAP (Name, Address, Phone) consistent în footer
- Geo meta tags
- Google Maps embed (Leaflet)
- LocalBusiness schema cu coordonate

✅ **Performance**
- SSG + ISR pentru pagini rapide
- Next/Image cu WebP/AVIF
- Lazy loading pentru galerie
- CSS minimizat, JS optimizat
- Lighthouse score 90+

### Verificare SEO

1. **Google Search Console**
   - Adaugă proprietatea
   - Submit sitemap: `https://cabana-ta.ro/sitemap.xml`
   - Monitorizează indexare

2. **Google Rich Results Test**
   - Testează: https://search.google.com/test/rich-results
   - Verifică JSON-LD schemas

3. **PageSpeed Insights**
   - Testează: https://pagespeed.web.dev/
   - Țintă: 90+ pentru mobil și desktop

4. **Lighthouse** (Chrome DevTools)
   ```bash
   npm run build
   npm start
   # Apoi rulează Lighthouse în Chrome
   ```

### Cum Îmbunătățești SEO

1. **Content Marketing**
   - Creează blog cu articole despre zonă, activități
   - Adaugă `/blog` cu Next.js MDX

2. **Backlinks**
   - Listare pe Booking.com, Airbnb
   - Colaborări cu bloguri de travel
   - Press releases locale

3. **Schema.org Suplimentar**
   - Review schema (cu recenzii reale)
   - Event schema (evenimente speciale)
   - Video schema (tur virtual)

---

## ✅ Checklist Pre-Launch

### Conținut & Brand
- [ ] Înlocuit toate placeholder-urile (`{{CABIN_NAME}}`, etc.)
- [ ] Actualizat paleta de culori în `theme.css`
- [ ] Adăugat logo-ul în `public/images/logo.png`
- [ ] Generat favicon-uri (realfavicongenerator.net)
- [ ] Încărcat toate imaginile (min. 15 poze bune)
- [ ] Verificat descrierile SEO (max 160 caractere)
- [ ] Revizuit textele (greșeli gramaticale)

### Configurare
- [ ] Setat toate variabilele `.env.local`
- [ ] Configurat coordonate GPS corecte
- [ ] Verificat NAP (nume, adresă, telefon) consistent
- [ ] Testat formularul de rezervări
- [ ] Configurat email pentru notificări (vezi API route)

### SEO Tehnic
- [ ] Verificat sitemap.xml (http://localhost:3000/sitemap.xml)
- [ ] Testat JSON-LD în Google Rich Results Test
- [ ] Verificat Open Graph cu Facebook Debugger
- [ ] Generat og-image.jpg (1200x630px)
- [ ] Adăugat Google Analytics (după consimțământ)
- [ ] Setat Google Search Console
- [ ] Submit sitemap în GSC

### Performance
- [ ] Optimizat toate imaginile (WebP, <200KB)
- [ ] Rulat Lighthouse (score 90+)
- [ ] Testat pe mobil (responsive)
- [ ] Verificat viteza la PageSpeed Insights
- [ ] Testat în browsere multiple (Chrome, Safari, Firefox)

### Legal & GDPR
- [ ] Actualizat Termeni și Condiții cu date reale
- [ ] Revizuit Politica de Confidențialitate (GDPR)
- [ ] Implementat cookie banner (dacă folosești analytics)
- [ ] Verificat politici de anulare

### Funcționalități
- [ ] Testat toate link-urile (interne și externe)
- [ ] Verificat formularul de rezervări
- [ ] Testat galeria foto (lightbox, filtre)
- [ ] Verificat harta (coordonate corecte)
- [ ] Testat meniul mobil
- [ ] Verificat accesibilitate (keyboard navigation, screen readers)

### Pre-Deploy
- [ ] Rulat `npm run lint` (fără erori)
- [ ] Rulat `npm run build` (build success)
- [ ] Testat production build local (`npm start`)
- [ ] Verificat toate paginile în build
- [ ] Backup codebase (Git)

---

## 📚 Documentație Suplimentară

### Integrare Email (Formular Rezervări)

API route-ul (`app/api/booking/route.ts`) este placeholder. Pentru production:

**Opțiune 1: Resend (recomandat)**
```bash
npm install resend
```

```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'Cabana <rezervari@cabana-ta.ro>',
  to: email,
  subject: 'Confirmare cerere rezervare',
  html: `<p>Bună ${name}...</p>`
});
```

**Opțiune 2: SendGrid**
```bash
npm install @sendgrid/mail
```

**Opțiune 3: Nodemailer + SMTP**
```bash
npm install nodemailer
```

### Analytics & Tracking

**Google Analytics 4:**
```typescript
// app/layout.tsx
{process.env.NEXT_PUBLIC_GA4_ID && (
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
    strategy="afterInteractive"
  />
)}
```

**Cookie Consent:** Folosește `@cookiehub/cookiehub-sdk` sau `cookie-consent-sdk`.

### Database pentru Rezervări

**Opțiune 1: Supabase**
```bash
npm install @supabase/supabase-js
```

**Opțiune 2: Prisma + PostgreSQL**
```bash
npm install prisma @prisma/client
```

**Opțiune 3: MongoDB + Mongoose**
```bash
npm install mongoose
```

---

## 🤝 Contribuții & Suport

Acest website a fost dezvoltat ca template complet pentru cabane de închiriat. Dacă ai întrebări:

- 📧 Email: [Developer Email]
- 🐛 Issues: [GitHub Issues Link]
- 📖 Docs: [Documentation Link]

---

## 📄 Licență

Cod sursă: [MIT License / All Rights Reserved]  
Imagini: Trebuie să folosești propriile imagini sau imagini cu licență comercială.

---

## 🎯 Next Steps După Launch

1. **SEO continuu**: Monitoring GSC, creare conținut
2. **Marketing**: Social media, Google Ads, colaborări
3. **Îmbunătățiri**: A/B testing, analytics insights
4. **Noi features**: Sistem de calendar, checkout online, reviews
5. **Blog**: Adaugă secțiune blog pentru SEO long-tail

---

**Happy Hosting! 🏔️✨**

Pentru orice nelămurire, revino la questa`README.md` sau consultă documentația Next.js: https://nextjs.org/docs
