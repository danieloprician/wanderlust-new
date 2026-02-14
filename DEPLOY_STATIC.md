# 🚀 Ghid Complet de Deployment pe Static Web Hosting

Acest document conține **pașii exacți** pentru a face deploy la site-ul tău pe diferite platforme de hosting.

---

## ⚠️ Notă Importantă despre Deployment

Acest site Next.js folosește **i18n middleware** și **Server Components**, ceea ce înseamnă că necesită un **server Node.js** sau **serverless functions** pentru a funcționa corect.

**NU poate fi deployment ca static HTML simplu!**

### Platforme recomandate (cu suport pentru Next.js):
- ✅ **Vercel** - Perfect pentru Next.js (creat de aceeași echipă)
- ✅ **Azure Static Web Apps** - Suport Next.js cu Standalone mode
- ✅ **Netlify** - Suport pentru Next.js
- ❌ **GitHub Pages** - NU suportă Next.js cu middleware
- ❌ **Hosting static tradițional** - NU funcționează cu middleware

---

## 📋 Cuprins

1. [Ce trebuie să știi înainte de deploy](#-ce-trebuie-să-știi-înainte-de-deploy)
2. [Prepararea pentru deployment](#-prepararea-pentru-deployment)
3. [Deployment pe Vercel (RECOMANDAT)](#-deployment-pe-vercel-recomandat)
4. [Deployment pe Azure Static Web Apps](#-deployment-pe-azure-static-web-apps)
5. [Deployment pe Netlify](#-deployment-pe-netlify)
6. [Verificare după deployment](#-verificare-după-deployment)
7. [Troubleshooting](#-troubleshooting)

---

## 🎯 Ce trebuie să știi înainte de deploy

### De ce nu pot folosi hosting static simplu?

Site-ul folosește:
- **Middleware** pentru routing i18n (ro/en)
- **Server Components** pentru performance
- **Dynamic routing** pentru pagini multilingve

Aceste features necesită un server sau serverless functions.

### Ce platformă să alegi?

| Platformă | Dificultate | Timpul de setup | Cost | Recomandat pentru |
|-----------|-------------|-----------------|------|-------------------|
| **Vercel** | ⭐ Foarte ușor | 3 minute | Gratuit | Toată lumea |
| **Azure Static Web Apps** | ⭐⭐⭐ Mediu | 10 minute | Gratuit | Utilizatori Azure |
| **Netlify** | ⭐⭐ Ușor | 5 minute | Gratuit | Alternative la Vercel |

**Recomandare:** Începe cu **Vercel** - e cea mai simplă opțiune și oferă cel mai bun suport pentru Next.js.

---

## 🔧 Prepararea pentru deployment

### Pasul 1: Verifică că ai toate tool-urile necesare

```bash
# Verifică versiunea Node.js (trebuie să fie 18+)
node --version

# Verifică versiunea npm
npm --version

# Verifică că ai Git instalat
git --version
```

Dacă nu ai Node.js instalat:
- **Windows/Mac**: Descarcă de la [nodejs.org](https://nodejs.org/)
- **Linux**: `sudo apt install nodejs npm`

### Pasul 2: Clonează repository-ul (dacă nu l-ai făcut deja)

```bash
# Dacă ai deja codul local, sari peste acest pas
git clone https://github.com/danieloprician/wanderlust-new.git
cd wanderlust-new
```

### Pasul 3: Instalează dependințele

```bash
npm install --legacy-peer-deps
```

**Notă:** Folosim `--legacy-peer-deps` pentru a evita conflicte de dependințe.

Așteaptă 1-2 minute până se instalează toate dependințele.

### Pasul 4: Configurează variabilele de mediu

**IMPORTANT:** Creează fișierul `.env.local` cu datele cabinei tale:

```bash
# Copiază fișierul exemplu
cp .env.example .env.local
```

Apoi editează `.env.local` și completează cu datele reale:

```env
# Adresa site-ului tău (o să o schimbi după ce faci deploy)
NEXT_PUBLIC_SITE_URL=https://wanderlust-cottage.com/
NEXT_PUBLIC_SITE_NAME=Wanderlust Cottage

# Datele tale de contact
NEXT_PUBLIC_PHONE=0749140519
NEXT_PUBLIC_EMAIL=office@wanderlust-cottage.com
NEXT_PUBLIC_ADDRESS=Valea Avrigului 177A
NEXT_PUBLIC_CITY=Avrig
NEXT_PUBLIC_REGION=Sibiu
NEXT_PUBLIC_COUNTRY=România

# Coordonatele GPS pentru hartă (găsește-le pe Google Maps)
NEXT_PUBLIC_LAT=45.690617932401494
NEXT_PUBLIC_LNG=24.443501425822152

# Social Media (completează cu link-urile tale sau lasă gol)
NEXT_PUBLIC_FB_URL=https://facebook.com/wanderlust
NEXT_PUBLIC_IG_URL=https://instagram.com/wanderlust
NEXT_PUBLIC_TIKTOK_URL=
```

**Cum găsești coordonatele GPS?**
1. Mergi pe [Google Maps](https://maps.google.com)
2. Click dreapta pe locația cabinei tale
3. Click pe coordonatele care apar (ex: 45.690617, 24.443501)
4. Copiază-le în `.env.local`

### Pasul 5: Testează site-ul local

```bash
# Rulează serverul de development
npm run dev
```

Deschide browser-ul la [http://localhost:4000](http://localhost:4000) și verifică că totul arată bine.

Apasă `Ctrl+C` pentru a opri serverul.

### Pasul 6: Testează build-ul de producție (opțional)

```bash
# Build-ul pentru producție
npm run build

# Pornește serverul de producție
npm start
```

Dacă vezi erori la build, vezi secțiunea [Troubleshooting](#-troubleshooting).

---

## ⚡ Deployment pe Vercel (RECOMANDAT)

**Dificultate:** ⭐ Foarte ușor | **Timp:** 3 minute | **Cost:** Gratuit

Vercel este creat de echipa Next.js, deci este perfect pentru proiectul tău.

### Pasul 1: Creează cont pe Vercel

1. Mergi pe [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Selectează **"Continue with GitHub"**
4. Autorizează Vercel să acceseze contul tău GitHub

### Pasul 2: Push codul pe GitHub (dacă nu e deja acolo)

```bash
# Adaugă toate fișierele
git add .

# Commit
git commit -m "Ready for deployment"

# Push pe GitHub (dacă nu ai făcut deja)
git push origin main
```

### Pasul 3: Importă proiectul în Vercel

1. După login pe Vercel, click **"Add New..."** → **"Project"**
2. Găsește repository-ul `wanderlust-new` în listă
3. Click **"Import"**

### Pasul 4: Configurează build settings

Vercel detectează automat Next.js. **NU schimba nimic!**

Setările default sunt corecte:
- **Framework Preset:** Next.js ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** (autodetectat) ✅
- **Install Command:** `npm install` ✅

### Pasul 5: Adaugă Environment Variables

**IMPORTANT:** Scroll în jos la secțiunea **"Environment Variables"** și adaugă:

Click pe **"Add"** pentru fiecare variabilă:

```
NEXT_PUBLIC_SITE_URL = https://wanderlust-cottage.vercel.app
NEXT_PUBLIC_SITE_NAME = Wanderlust Cottage
NEXT_PUBLIC_PHONE = 0749140519
NEXT_PUBLIC_EMAIL = office@wanderlust-cottage.com
NEXT_PUBLIC_ADDRESS = Valea Avrigului 177A
NEXT_PUBLIC_CITY = Avrig
NEXT_PUBLIC_REGION = Sibiu
NEXT_PUBLIC_COUNTRY = România
NEXT_PUBLIC_LAT = 45.690617932401494
NEXT_PUBLIC_LNG = 24.443501425822152
NEXT_PUBLIC_FB_URL = https://facebook.com/wanderlust
NEXT_PUBLIC_IG_URL = https://instagram.com/wanderlust
```

**Notă:** Nu e nevoie să adaugi TOATE variabilele din `.env.local` - doar cele care încep cu `NEXT_PUBLIC_`

### Pasul 6: Deploy!

Click pe butonul mare **"Deploy"** și așteaptă 2-3 minute.

Vei vedea un progress bar și log-uri în timp real.

### Pasul 7: Vezi site-ul live!

După ce deployment-ul s-a terminat cu succes:
1. Click pe **"Visit"** sau **"Go to Dashboard"**
2. Site-ul tău este live la: `https://wanderlust-new.vercel.app`
3. Testează toate paginile: `/ro`, `/ro/cabana`, `/ro/galerie`, etc.

### Pasul 8: Adaugă custom domain (opțional)

Dacă ai un domeniu propriu (ex: `wanderlust-cottage.com`):

1. În Vercel Dashboard → Project → **"Settings"** → **"Domains"**
2. Click **"Add"** și introdu domeniul tău
3. Urmează instrucțiunile pentru a actualiza DNS records la provider-ul tău de domenii:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME Record:** `www` → `cname.vercel-dns.com`
4. Vercel va configura SSL automat (HTTPS) în ~5 minute

### Auto-deployment

De acum înainte, **fiecare push** pe branch-ul `main` va declanșa automat un deployment nou pe Vercel! 🎉

Vei vedea statusul în:
- GitHub (commit status)
- Vercel Dashboard (Deployments tab)

---

## ☁️ Deployment pe Azure Static Web Apps

**Dificultate:** ⭐⭐⭐ Mediu | **Timp:** 10 minute | **Cost:** Gratuit

Există deja fișiere de configurare pentru Azure în repository.

**Vezi documentația detaliată:** [DEPLOY_AZURE.md](./DEPLOY_AZURE.md)

### Pași rapizi:

1. **Creează cont Azure** (free tier disponibil)
2. **Creează Static Web App** în Azure Portal
3. **Conectează la GitHub** repository
4. **Configurează build settings:**
   - App location: `/`
   - Output location: `` (gol - pentru standalone mode)
5. **Deployment automat** prin GitHub Actions

**Notă:** Azure Static Web Apps folosește Standalone output mode pentru a rula Next.js cu middleware.

---

## 🌊 Deployment pe Netlify

**Dificultate:** ⭐⭐ Ușor | **Timp:** 5 minute | **Cost:** Gratuit

### Pasul 1: Creează cont pe Netlify

1. Mergi pe [netlify.com](https://netlify.com)
2. Click **"Sign up"**
3. Selectează **"Sign up with GitHub"**
4. Autorizează Netlify

### Pasul 2: Importă site-ul

1. După login, click **"Add new site"** → **"Import an existing project"**
2. Click **"GitHub"**
3. Selectează repository-ul `wanderlust-new`

### Pasul 3: Configurează build settings

Completează:
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Functions directory:** `.netlify/functions` (opțional)

### Pasul 4: Adaugă Environment Variables

Click pe **"Show advanced"** → **"New variable"** și adaugă toate variabilele `NEXT_PUBLIC_*`:

```
NEXT_PUBLIC_SITE_URL = https://wanderlust-cottage.netlify.app
NEXT_PUBLIC_SITE_NAME = Wanderlust Cottage
NEXT_PUBLIC_PHONE = 0749140519
# ... etc
```

### Pasul 5: Deploy!

Click **"Deploy site"** și așteaptă 2-3 minute.

### Pasul 6: Configurează Next.js runtime (IMPORTANT)

Netlify are nevoie de un plugin pentru Next.js:

1. În dashboard, mergi la **Site settings** → **Build & deploy** → **Build settings**
2. Click **"Edit settings"**
3. Adaugă în **"Build command":**
   ```bash
   npm run build
   ```
4. Salvează

Sau creează fișierul `netlify.toml` în root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Pasul 7: Redeploy

După adăugarea configurației, trigger un nou deployment:
```bash
git add netlify.toml
git commit -m "Add Netlify configuration"
git push
```

Site-ul va fi la: `https://your-site-name.netlify.app`

---

## ✅ Verificare după deployment

După ce ai făcut deploy, verifică:

### 1. Site-ul se încarcă

- Deschide URL-ul site-ului în browser
- Verifică că homepage-ul se încarcă corect

### 2. Toate paginile funcționează

Testează fiecare pagină și ambele limbi:

**Română (RO):**
- `/ro` - Homepage ✅
- `/ro/cabana` - Despre cabană ✅
- `/ro/galerie` - Galerie ✅
- `/ro/tarife` - Tarife ✅
- `/ro/rezervari` - Formular rezervări ✅
- `/ro/contact` - Contact ✅
- `/ro/faq` - FAQ ✅

**Engleză (EN):**
- `/en` - Homepage ✅
- `/en/cabin` - About cabin ✅
- `/en/gallery` - Gallery ✅
- (și restul paginilor)

### 3. Imaginile se încarcă

- Verifică că toate imaginile din galerie se văd
- Verifică imaginea hero de pe homepage
- Verifică că imaginile sunt optimizate (format WebP/AVIF)

### 4. Harta funcționează

- Mergi pe pagina Contact
- Verifică că harta Leaflet se încarcă și afișează locația corectă
- Verifică că poți da zoom in/out

### 5. Language switching

- Click pe butonul de schimbare limbă (RO/EN)
- Verifică că URL-ul se schimbă (de la `/ro/...` la `/en/...`)
- Verifică că textele se traduc corect

### 6. Formularul de rezervări

- Testează formularul de rezervări
- Verifică validarea câmpurilor
- Încearcă să trimiți un formular

### 7. Responsive design

- Testează pe mobil (folosește Chrome DevTools → Toggle device toolbar)
- Verifică că meniul mobil funcționează
- Verifică că galeria se afișează corect pe mobil

### 8. Performance & SEO

Testează site-ul cu:

**Google PageSpeed Insights:**
- Mergi pe [pagespeed.web.dev](https://pagespeed.web.dev/)
- Introdu URL-ul site-ului
- Țintă: Score 80+ pe mobil și 90+ pe desktop

**Verifică SEO:**
```bash
# Verifică sitemap
https://your-site.com/sitemap.xml

# Verifică robots.txt
https://your-site.com/robots.txt
```

**Google Search Console:**
1. Mergi pe [search.google.com/search-console](https://search.google.com/search-console)
2. Adaugă proprietatea (site-ul tău)
3. Submit sitemap: `https://your-site.com/sitemap.xml`

---

## 🔧 Troubleshooting

### Eroare: "Build failed"

**Cauză:** Lipsesc dependințe sau erori în cod.

**Soluție:**
```bash
# Șterge node_modules și reinstalează
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Încearcă build din nou
npm run build
```

Dacă tot nu merge, verifică erorile în console.

---

### Eroare: "Error: Route with `dynamic = "error"` couldn't be rendered statically"

**Cauză:** Încerci să faci static export dar proiectul folosește middleware.

**Soluție:** 
- NU folosi `output: 'export'` în `next.config.mjs`
- Deploy pe Vercel, Netlify sau Azure Static Web Apps (nu pe GitHub Pages)

---

### Eroare: "Middleware is not supported in static export"

**Cauză:** La fel ca mai sus - middleware nu funcționează cu static export.

**Soluție:**
- Deploy pe platforme care suportă Next.js cu middleware (Vercel, Netlify, Azure)
- Middleware-ul este necesar pentru i18n (ro/en)

---

### Paginile nu se încarcă (404 error)

**Cauză:** Routing-ul nu e configurat corect.

**Soluție pentru Vercel:**
- Ar trebui să funcționeze automat
- Dacă nu, verifică că nu ai `output: 'export'` în `next.config.mjs`

**Soluție pentru Netlify:**
- Asigură-te că ai plugin-ul `@netlify/plugin-nextjs`
- Verifică `netlify.toml`

---

### Imaginile nu se încarcă

**Cauză 1:** Calea către imagini nu e corectă.

**Soluție:**
1. Verifică că imaginile sunt în `public/images/`
2. Verifică că în cod folosești calea corectă: `/images/nume-imagine.webp`
3. Rebuild: `npm run build`

**Cauză 2:** Next/Image optimization nu e suportată de hosting-ul tău.

**Soluție:**
- Vercel/Netlify/Azure: Suport automat ✅
- Altfel: Adaugă `unoptimized: true` la config imagini în `next.config.mjs`

---

### Environment variables nu funcționează

**Cauză:** Variabilele de mediu nu sunt setate în platforma de hosting.

**Soluție:**

**Pentru Vercel:**
1. Dashboard → Project → Settings → Environment Variables
2. Adaugă toate variabilele `NEXT_PUBLIC_*` din `.env.local`
3. Click "Redeploy"

**Pentru Netlify:**
1. Site settings → Build & deploy → Environment
2. Adaugă variabilele
3. Trigger new deploy

**Pentru Azure:**
1. Static Web App → Configuration
2. Adaugă Application settings
3. Sau adaugă în GitHub Secrets pentru GitHub Actions

**Notă:** Doar variabilele care încep cu `NEXT_PUBLIC_` sunt vizibile în browser.

---

### Site-ul e lent

**Cauze posibile:**
- Imagini mari
- CSS/JS neoptimizat
- Hosting lent

**Soluții:**

**1. Optimizează imaginile:**
- Folosește format WebP (deja configurat)
- Comprimă imaginile sub 200KB
- Folosește Next/Image pentru lazy loading (deja implementat)

**2. Enable compression:**
- Vercel/Netlify/Azure: Activat automat ✅
- Altfel: Configurează Gzip în server

**3. Folosește CDN:**
- Vercel/Netlify/Azure: CDN inclus ✅
- Altfel: Cloudflare (gratuit)

**4. Verifică Performance:**
```bash
# Rulează Lighthouse în Chrome DevTools
# Performance → Generate report
# Țintă: 80+ pe mobil, 90+ pe desktop
```

---

### Harta nu se încarcă

**Cauză:** Leaflet CSS/JS nu se încarcă sau coordonatele sunt greșite.

**Soluție:**
1. Verifică variabilele `NEXT_PUBLIC_LAT` și `NEXT_PUBLIC_LNG` în environment variables
2. Asigură-te că sunt numere valide
3. Testează local: `npm run dev`
4. Verifică console-ul browserului pentru erori JavaScript

---

### Language switch nu funcționează

**Cauză:** Middleware sau routing i18n nu e configurat corect.

**Soluție:**
1. Verifică că `middleware.ts` există
2. Verifică configurația în `i18n/routing.ts`
3. Asigură-te că deployment-ul suportă middleware (Vercel/Netlify/Azure)

---

### Custom domain nu funcționează

**Cauză:** DNS records nu sunt configurate corect.

**Soluție:**

**Pentru Vercel:**
1. Adaugă domeniul în Vercel Dashboard → Domains
2. La provider-ul de domenii (GoDaddy, Namecheap, etc.), adaugă:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

**Pentru Netlify:**
1. Adaugă domeniul în Netlify Dashboard
2. La provider de domenii:
   ```
   Type: CNAME
   Name: @
   Value: your-site.netlify.app

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

Așteaptă 5-30 minute pentru propagare DNS.

Verifică cu:
```bash
nslookup your-domain.com
```

---

### Build-ul durează prea mult

**Cauză:** Dependințe multe sau imagini mari.

**Soluție:**
1. Folosește `npm ci` în loc de `npm install` (mai rapid)
2. Enable build cache pe platformă (Vercel/Netlify o au by default)
3. Optimizează imaginile înainte de commit

---

## 📞 Suport

Dacă ai întrebări sau probleme:

### Documentație

- [README.md](./README.md) - Documentație generală
- [DEPLOY_AZURE.md](./DEPLOY_AZURE.md) - Deployment Azure detaliat
- [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) - Deployment Vercel detaliat

### Resurse externe

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)

### Community

- [Next.js Discord](https://nextjs.org/discord)
- [Stack Overflow - Next.js](https://stackoverflow.com/questions/tagged/next.js)
- [Vercel Community](https://vercel.com/community)

### Issues

Dacă întâmpini probleme specifice proiectului:
1. Verifică că ai ultima versiune: `git pull`
2. Reinstalează dependințele: `npm install --legacy-peer-deps`
3. Testează local: `npm run dev`
4. Verifică log-urile de build în platforma de deployment

---

## 🎉 Felicitări!

Ai făcut deploy la site-ul tău Next.js! 

### Next steps după deployment:

1. **SEO:** 
   - Submit site-ul în Google Search Console
   - Submit sitemap-ul: `https://your-site.com/sitemap.xml`
   - Verifică structured data cu Google Rich Results Test

2. **Analytics:**
   - Adaugă Google Analytics (după consimțământ GDPR)
   - Configurează Google Tag Manager
   - Monitor traffic și conversii

3. **Marketing:**
   - Promovează site-ul pe social media
   - Listează pe Booking.com, Airbnb
   - Colaborări cu bloguri de travel

4. **Îmbunătățiri continue:**
   - Monitorizează feedback-ul utilizatorilor
   - A/B testing pentru conversii
   - Optimizare continuă SEO

5. **Mentenanță:**
   - Update dependințe: `npm update`
   - Verifică security alerts în GitHub
   - Backup regulat al codului

---

**Mult succes cu cabana ta! 🏡✨**

Pentru orice nelămurire, consultă documentația sau contactează echipa de suport a platformei pe care ai deployment.

---

## 📋 Cuprins

1. [Ce trebuie să știi înainte de deploy](#-ce-trebuie-să-știi-înainte-de-deploy)
2. [Prepararea pentru deployment](#-prepararea-pentru-deployment)
3. [Deployment pe GitHub Pages](#-deployment-pe-github-pages)
4. [Deployment pe Vercel](#-deployment-pe-vercel)
5. [Deployment pe Netlify](#-deployment-pe-netlify)
6. [Deployment pe Azure Static Web Apps](#-deployment-pe-azure-static-web-apps)
7. [Deployment manual (orice hosting)](#-deployment-manual-orice-hosting)
8. [Verificare după deployment](#-verificare-după-deployment)
9. [Troubleshooting](#-troubleshooting)

---

## 🎯 Ce trebuie să știi înainte de deploy

### Ce este un static website?

Site-ul tău este un **static website** - adică este generat într-un set de fișiere HTML/CSS/JS care pot fi servite direct de pe orice hosting, fără nevoie de server Node.js.

### Avantaje:
- ✅ **Gratuit** - majoritatea platformelor oferă hosting gratuit
- ✅ **Rapid** - fișierele statice se încarcă foarte repede
- ✅ **Sigur** - nu există vulnerabilități de server
- ✅ **Scalabil** - poate gestiona mult trafic

### Ce platformă să alegi?

| Platformă | Dificultate | Timpul de setup | Custom Domain | Recomandat pentru |
|-----------|-------------|-----------------|---------------|-------------------|
| **Vercel** | ⭐ Foarte ușor | 3 minute | ✅ Gratuit | Beginners |
| **GitHub Pages** | ⭐⭐ Ușor | 5 minute | ✅ Gratuit | GitHub users |
| **Netlify** | ⭐ Foarte ușor | 3 minute | ✅ Gratuit | Beginners |
| **Azure Static Web Apps** | ⭐⭐⭐ Mediu | 10 minute | ✅ Gratuit | Advanced users |

---

## 🔧 Prepararea pentru deployment

### Pasul 1: Verifică că ai toate tool-urile necesare

```bash
# Verifică versiunea Node.js (trebuie să fie 18+)
node --version

# Verifică versiunea npm
npm --version

# Verifică că ai Git instalat
git --version
```

Dacă nu ai Node.js instalat:
- **Windows/Mac**: Descarcă de la [nodejs.org](https://nodejs.org/)
- **Linux**: `sudo apt install nodejs npm`

### Pasul 2: Clonează repository-ul (dacă nu l-ai făcut deja)

```bash
# Dacă ai deja codul local, sari peste acest pas
git clone https://github.com/danieloprician/wanderlust-new.git
cd wanderlust-new
```

### Pasul 3: Instalează dependințele

```bash
npm install
```

Așteaptă 1-2 minute până se instalează toate dependințele.

### Pasul 4: Configurează variabilele de mediu

**IMPORTANT:** Creează fișierul `.env.local` cu datele cabinei tale:

```bash
# Copiază fișierul exemplu
cp .env.example .env.local
```

Apoi editează `.env.local` și completează cu datele reale:

```env
# Adresa site-ului tău (o să o schimbi după ce faci deploy)
NEXT_PUBLIC_SITE_URL=https://wanderlust-cottage.com/
NEXT_PUBLIC_SITE_NAME=Wanderlust Cottage

# Datele tale de contact
NEXT_PUBLIC_PHONE=0749140519
NEXT_PUBLIC_EMAIL=office@wanderlust-cottage.com
NEXT_PUBLIC_ADDRESS=Valea Avrigului 177A
NEXT_PUBLIC_CITY=Avrig
NEXT_PUBLIC_REGION=Sibiu
NEXT_PUBLIC_COUNTRY=România

# Coordonatele GPS pentru hartă (găsește-le pe Google Maps)
NEXT_PUBLIC_LAT=45.690617932401494
NEXT_PUBLIC_LNG=24.443501425822152

# Social Media (completează cu link-urile tale sau lasă gol)
NEXT_PUBLIC_FB_URL=https://facebook.com/wanderlust
NEXT_PUBLIC_IG_URL=https://instagram.com/wanderlust
NEXT_PUBLIC_TIKTOK_URL=
```

**Cum găsești coordonatele GPS?**
1. Mergi pe [Google Maps](https://maps.google.com)
2. Click dreapta pe locația cabinei tale
3. Click pe coordonatele care apar (ex: 45.690617, 24.443501)
4. Copiază-le în `.env.local`

### Pasul 5: Testează site-ul local

```bash
# Rulează serverul de development
npm run dev
```

Deschide browser-ul la [http://localhost:4000](http://localhost:4000) și verifică că totul arată bine.

Apasă `Ctrl+C` pentru a opri serverul.

### Pasul 6: Construiește versiunea de producție

```bash
# Build-ul pentru producție
npm run build
```

Așteaptă 1-2 minute. Dacă vezi erori, vezi secțiunea [Troubleshooting](#-troubleshooting).

Dacă build-ul s-a terminat cu succes, vei vedea un folder nou `out/` cu toate fișierele site-ului.

---

## 🌐 Deployment pe GitHub Pages

**Dificultate:** ⭐⭐ Ușor | **Timp:** 5 minute | **Cost:** Gratuit

### Pasul 1: Creează un repository pe GitHub (dacă nu există deja)

1. Mergi pe [github.com](https://github.com)
2. Click pe **"New repository"** (butonul verde)
3. Nume: `wanderlust-new` (sau alt nume)
4. Selectează **"Public"**
5. Click **"Create repository"**

### Pasul 2: Push codul pe GitHub (dacă nu e deja acolo)

```bash
# Adaugă toate fișierele
git add .

# Commit
git commit -m "Initial commit"

# Conectează la GitHub (înlocuiește USERNAME cu username-ul tău)
git remote add origin https://github.com/USERNAME/wanderlust-new.git

# Push
git push -u origin main
```

### Pasul 3: Activează GitHub Pages

1. Mergi pe repository-ul tău pe GitHub
2. Click pe **"Settings"** (tab-ul de sus)
3. În meniul din stânga, click pe **"Pages"**
4. La **"Source"**, selectează **"GitHub Actions"**

### Pasul 4: Creează workflow-ul de deployment

Creează fișierul `.github/workflows/deploy-github-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://${{ github.repository_owner }}.github.io/${{ github.event.repository.name }}
          NEXT_PUBLIC_SITE_NAME: Wanderlust Cottage
          NEXT_PUBLIC_PHONE: 0749140519
          NEXT_PUBLIC_EMAIL: office@wanderlust-cottage.com
          NEXT_PUBLIC_ADDRESS: Valea Avrigului 177A
          NEXT_PUBLIC_CITY: Avrig
          NEXT_PUBLIC_REGION: Sibiu
          NEXT_PUBLIC_COUNTRY: România
          NEXT_PUBLIC_LAT: 45.690617932401494
          NEXT_PUBLIC_LNG: 24.443501425822152
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Pasul 5: Commit și push workflow-ul

```bash
git add .github/workflows/deploy-github-pages.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Pasul 6: Așteaptă deployment-ul

1. Mergi pe repository → **"Actions"** tab
2. Vezi workflow-ul în progres
3. Așteaptă 2-3 minute
4. Site-ul va fi live la: `https://USERNAME.github.io/wanderlust-new`

### Pasul 7: Actualizează base path (dacă ai nevoie)

Dacă site-ul nu arată bine (imagini lipsă, CSS lipsă), actualizează `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/wanderlust-new', // numele repository-ului
  images: {
    unoptimized: true,
  },
  // ... rest of config
};
```

Apoi:
```bash
git add next.config.mjs
git commit -m "Add basePath for GitHub Pages"
git push
```

---

## ⚡ Deployment pe Vercel

**Dificultate:** ⭐ Foarte ușor | **Timp:** 3 minute | **Cost:** Gratuit

Vercel este creat de echipa Next.js, deci este perfect pentru proiectul tău.

### Pasul 1: Creează cont pe Vercel

1. Mergi pe [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Selectează **"Continue with GitHub"**
4. Autorizează Vercel să acceseze contul tău GitHub

### Pasul 2: Importă proiectul

1. După login, click **"Add New..."** → **"Project"**
2. Găsește repository-ul `wanderlust-new` în listă
3. Click **"Import"**

### Pasul 3: Configurează build settings

Vercel detectează automat Next.js. **NU schimba nimic!**

Setările default sunt corecte:
- **Framework Preset:** Next.js ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** (autodetectat) ✅

### Pasul 4: Adaugă Environment Variables

**IMPORTANT:** Scroll în jos la secțiunea **"Environment Variables"** și adaugă:

```
NEXT_PUBLIC_SITE_URL = https://wanderlust-cottage.vercel.app
NEXT_PUBLIC_SITE_NAME = Wanderlust Cottage
NEXT_PUBLIC_PHONE = 0749140519
NEXT_PUBLIC_EMAIL = office@wanderlust-cottage.com
NEXT_PUBLIC_ADDRESS = Valea Avrigului 177A
NEXT_PUBLIC_CITY = Avrig
NEXT_PUBLIC_REGION = Sibiu
NEXT_PUBLIC_COUNTRY = România
NEXT_PUBLIC_LAT = 45.690617932401494
NEXT_PUBLIC_LNG = 24.443501425822152
NEXT_PUBLIC_FB_URL = https://facebook.com/wanderlust
NEXT_PUBLIC_IG_URL = https://instagram.com/wanderlust
```

Click **"Add"** pentru fiecare variabilă.

### Pasul 5: Deploy!

Click pe butonul mare **"Deploy"** și așteaptă 2-3 minute.

### Pasul 6: Vezi site-ul live

După ce deployment-ul s-a terminat:
1. Click pe **"Visit"** sau **"Go to Dashboard"**
2. Site-ul tău este live la: `https://wanderlust-new.vercel.app`

### Pasul 7: Adaugă custom domain (opțional)

Dacă ai un domeniu propriu (ex: `cabana.com`):

1. În Vercel Dashboard → Project → **"Settings"** → **"Domains"**
2. Adaugă domeniul tău
3. Urmează instrucțiunile pentru a actualiza DNS records la provider-ul tău de domenii
4. Vercel va configura SSL automat (HTTPS) în ~5 minute

### Auto-deployment

De acum înainte, **fiecare push** pe GitHub va declanșa automat un deployment nou pe Vercel! 🎉

---

## 🌊 Deployment pe Netlify

**Dificultate:** ⭐ Foarte ușor | **Timp:** 3 minute | **Cost:** Gratuit

### Pasul 1: Creează cont pe Netlify

1. Mergi pe [netlify.com](https://netlify.com)
2. Click **"Sign up"**
3. Selectează **"Sign up with GitHub"**
4. Autorizează Netlify

### Pasul 2: Importă site-ul

1. După login, click **"Add new site"** → **"Import an existing project"**
2. Click **"GitHub"**
3. Selectează repository-ul `wanderlust-new`

### Pasul 3: Configurează build settings

Completează:
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `out`

### Pasul 4: Adaugă Environment Variables

Click pe **"Show advanced"** → **"New variable"** și adaugă toate variabilele din `.env.local`:

```
NEXT_PUBLIC_SITE_URL = https://wanderlust-cottage.netlify.app
NEXT_PUBLIC_SITE_NAME = Wanderlust Cottage
NEXT_PUBLIC_PHONE = 0749140519
NEXT_PUBLIC_EMAIL = office@wanderlust-cottage.com
# ... și restul
```

### Pasul 5: Deploy!

Click **"Deploy site"** și așteaptă 2-3 minute.

### Pasul 6: Configurează redirects pentru routing

Creează fișierul `public/_redirects`:

```
/*    /index.html   200
```

Apoi push pe GitHub:
```bash
git add public/_redirects
git commit -m "Add Netlify redirects"
git push
```

Site-ul va fi la: `https://your-site-name.netlify.app`

### Schimbă numele site-ului (opțional)

1. Site settings → **"Change site name"**
2. Schimbă în: `wanderlust-cottage`
3. Noul URL: `https://wanderlust-cottage.netlify.app`

---

## ☁️ Deployment pe Azure Static Web Apps

**Dificultate:** ⭐⭐⭐ Mediu | **Timp:** 10 minute | **Cost:** Gratuit

Vezi fișierul [DEPLOY_AZURE.md](./DEPLOY_AZURE.md) pentru instrucțiuni detaliate.

**Pașii rapizi:**

1. Creează cont Azure (free tier)
2. Creează Static Web App în Azure Portal
3. Conectează la GitHub repository
4. Build settings:
   - **App location:** `/`
   - **Output location:** `out`
5. Deployment-ul se face automat prin GitHub Actions

---

## 🖥️ Deployment manual (orice hosting)

Dacă ai un hosting propriu (Hostinger, Bluehost, etc.) sau vrei să deploy manual:

### Pasul 1: Build local

```bash
npm run build
```

### Pasul 2: Găsește fișierele

Toate fișierele pentru deployment sunt în folder-ul `out/`:

```
out/
├── index.html
├── cabana.html
├── galerie.html
├── _next/
│   ├── static/
│   └── ...
├── images/
└── ...
```

### Pasul 3: Upload pe server

**Metoda A: FTP/SFTP**
1. Deschide FileZilla (sau alt client FTP)
2. Conectează-te la serverul tău
3. Upload **toate fișierele** din `out/` în root folder-ul site-ului (ex: `public_html/`)

**Metoda B: cPanel File Manager**
1. Login în cPanel
2. Mergi la **"File Manager"**
3. Navighează la `public_html/`
4. Upload fișierele din `out/`

**Metoda C: Git pe server**
```bash
# Pe server, prin SSH
git clone https://github.com/USERNAME/wanderlust-new.git
cd wanderlust-new
npm install
npm run build
# Apoi copiază din out/ în public_html/
cp -r out/* /var/www/html/
```

### Pasul 4: Configurează server

**Pentru Apache (.htaccess):**

Creează fișierul `out/.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect all requests to index.html for Next.js routing
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  
  # Gzip compression
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
  </IfModule>
  
  # Cache static assets
  <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
  </IfModule>
</IfModule>
```

**Pentru Nginx:**

Adaugă în config:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|webp|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Next.js routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ✅ Verificare după deployment

După ce ai făcut deploy, verifică:

### 1. Site-ul se încarcă

- Deschide URL-ul site-ului în browser
- Verifică că homepage-ul se încarcă corect

### 2. Toate paginile funcționează

Testează fiecare pagină:
- `/` - Homepage ✅
- `/ro/cabana` - Pagina cabană ✅
- `/ro/galerie` - Galerie ✅
- `/ro/tarife` - Tarife ✅
- `/ro/rezervari` - Formular rezervări ✅
- `/ro/contact` - Contact ✅
- `/ro/faq` - FAQ ✅

### 3. Imaginile se încarcă

- Verifică că toate imaginile din galerie se văd
- Verifică imaginea hero de pe homepage

### 4. Harta funcționează

- Mergi pe pagina Contact
- Verifică că harta Leaflet se încarcă și afișează locația corectă

### 5. Formularul de rezervări

- Testează formularul de rezervări
- Verifică validarea câmpurilor

### 6. Responsive design

- Testează pe mobil (folosește Chrome DevTools → Toggle device toolbar)
- Verifică că meniul mobil funcționează

### 7. Performance & SEO

Testează site-ul cu:

**Google PageSpeed Insights:**
- Mergi pe [pagespeed.web.dev](https://pagespeed.web.dev/)
- Introdu URL-ul site-ului
- Țintă: Score 90+ pe mobil și desktop

**Verifică SEO:**
```bash
# Verifică sitemap
https://your-site.com/sitemap.xml

# Verifică robots.txt
https://your-site.com/robots.txt
```

**Google Search Console:**
1. Mergi pe [search.google.com/search-console](https://search.google.com/search-console)
2. Adaugă proprietatea (site-ul tău)
3. Submit sitemap: `https://your-site.com/sitemap.xml`

---

## 🔧 Troubleshooting

### Eroare: "Build failed"

**Cauză:** Lipsesc dependințe sau erori în cod.

**Soluție:**
```bash
# Șterge node_modules și reinstalează
rm -rf node_modules package-lock.json
npm install

# Încearcă build din nou
npm run build
```

Dacă tot nu merge, verifică erorile în console și caută soluții pe Google.

---

### Eroare: "Page not found" pe rute

**Cauză:** Server-ul nu e configurat corect pentru Next.js routing.

**Soluție pentru Netlify:**
Creează `public/_redirects`:
```
/*    /index.html   200
```

**Soluție pentru Apache:**
Vezi secțiunea `.htaccess` de mai sus.

---

### Imaginile nu se încarcă

**Cauză:** Calea către imagini nu e corectă.

**Soluție:**
1. Verifică că imaginile sunt în `public/images/`
2. Verifică că în cod folosești calea corectă: `/images/nume-imagine.webp`
3. Rebuild: `npm run build`

---

### Environment variables nu funcționează

**Cauză:** Variabilele de mediu nu sunt setate în platforma de hosting.

**Soluție:**

**Pentru Vercel:**
1. Dashboard → Project → Settings → Environment Variables
2. Adaugă toate variabilele din `.env.local`
3. Redeploy

**Pentru Netlify:**
1. Site settings → Build & deploy → Environment
2. Adaugă variabilele
3. Trigger new deploy

**Pentru GitHub Pages:**
Adaugă variabilele în workflow (`.github/workflows/deploy-github-pages.yml`)

---

### Site-ul e lent

**Cauze posibile:**
- Imagini mari
- CSS/JS neoptimizat
- Server lent

**Soluții:**

**1. Optimizează imaginile:**
```bash
# Convertește toate imaginile la WebP
npm run convert-to-webp

# Sau manual cu Sharp
npx sharp -i input.jpg -o output.webp --webp
```

Țintă: < 200KB per imagine

**2. Enable compression:**
- Vercel/Netlify: Activat automat ✅
- Manual: Vezi config `.htaccess` sau `nginx.conf` de mai sus

**3. Folosește CDN:**
- Vercel/Netlify: CDN inclus ✅
- Altfel: Cloudflare (gratuit)

---

### Harta nu se încarcă

**Cauză:** Leaflet CSS/JS nu se încarcă sau coordonatele sunt greșite.

**Soluție:**
1. Verifică variabilele `NEXT_PUBLIC_LAT` și `NEXT_PUBLIC_LNG`
2. Asigură-te că sunt numere, nu string-uri
3. Testează local: `npm run dev`

---

### Formularul de rezervări nu trimite

**Cauză:** API route-ul nu funcționează pe static hosting.

**Soluție:**

Static hosting **NU suportă** API routes de Next.js. Ai 2 opțiuni:

**Opțiunea 1: Deploy pe Vercel/Netlify** (suport pentru serverless functions)

**Opțiunea 2: Folosește un serviciu extern pentru email**
- [Formspree](https://formspree.io/) - Gratuit, 50 submissions/lună
- [EmailJS](https://www.emailjs.com/) - Gratuit, 200 emails/lună
- [Web3Forms](https://web3forms.com/) - Gratuit, nelimitat

Exemplu cu Formspree:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message"></textarea>
  <button type="submit">Trimite</button>
</form>
```

---

### Custom domain nu funcționează

**Cauză:** DNS records nu sunt configurate corect.

**Soluție:**

**Pentru Vercel/Netlify:**
1. Adaugă domeniul în dashboard
2. La provider-ul de domenii (GoDaddy, Namecheap, etc.), adaugă:
   - **A Record:** `@` → IP-ul dat de platformă
   - **CNAME Record:** `www` → URL-ul dat de platformă

**Exemplu pentru Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Așteaptă 5-30 minute pentru propagare DNS.

Verifică cu:
```bash
nslookup your-domain.com
```

---

## 📞 Suport

Dacă ai întrebări sau probleme:

1. **Verifică documentația:**
   - [README.md](./README.md) - Documentație generală
   - [DEPLOY_AZURE.md](./DEPLOY_AZURE.md) - Deployment Azure
   - [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) - Deployment Vercel

2. **Resurse externe:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com)
   - [GitHub Pages Docs](https://docs.github.com/en/pages)

3. **Community:**
   - [Next.js Discord](https://nextjs.org/discord)
   - [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 🎉 Felicitări!

Ai făcut deploy la site-ul tău static! 

### Next steps:

1. **SEO:** Submit site-ul în Google Search Console
2. **Analytics:** Adaugă Google Analytics (după consimțământ GDPR)
3. **Marketing:** Promovează site-ul pe social media
4. **Îmbunătățiri:** Monitorizează feedback-ul utilizatorilor și îmbunătățește

**Mult succes cu cabana ta! 🏡✨**
