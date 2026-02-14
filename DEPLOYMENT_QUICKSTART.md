# 🎯 Pașii Rapidi pentru Deployment

## Ce trebuie să faci pentru a face deploy la site-ul tău:

### 1️⃣ Alege Platforma (Recomandat: Vercel)

**Cel mai simplu:** [Vercel](https://vercel.com) - 3 minute, gratuit, zero configurare

Alte opțiuni:
- [Netlify](https://netlify.com) - simplu, gratuit
- [Azure Static Web Apps](https://azure.microsoft.com) - gratuit, dar mai complicat

**⚠️ Important:** Site-ul folosește Next.js cu middleware, deci **NU funcționează pe GitHub Pages** sau hosting static tradițional!

---

### 2️⃣ Pași pentru Deployment pe Vercel (Recomandat)

#### A. Pregătire (5 minute)

1. **Instalează Node.js** (dacă nu ai):
   - Descarcă de la [nodejs.org](https://nodejs.org/) (versiunea 18+)

2. **Clonează/Deschide proiectul**:
   ```bash
   cd wanderlust-new
   npm install
   ```

3. **Testează local**:
   ```bash
   npm run dev
   ```
   Deschide http://localhost:4000 să vezi site-ul

#### B. Deployment (3 minute)

1. **Creează cont pe Vercel**:
   - Mergi pe [vercel.com](https://vercel.com)
   - Click "Sign Up" → "Continue with GitHub"

2. **Conectează repository-ul**:
   - După login: "Add New" → "Project"
   - Selectează `wanderlust-new`
   - Click "Import"

3. **Adaugă variabilele de mediu**:
   Scroll la "Environment Variables" și adaugă:
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

4. **Click "Deploy"** și așteaptă 2-3 minute

5. **🎉 Gata!** Site-ul e live la: `https://wanderlust-new.vercel.app`

---

### 3️⃣ După Deployment

✅ **Testează site-ul:**
- Verifică că toate paginile funcționează: `/ro`, `/ro/cabana`, `/ro/galerie`, etc.
- Testează pe mobil (responsive)
- Verifică harta pe pagina Contact
- Testează formularul de rezervări

✅ **Adaugă custom domain (opțional):**
1. În Vercel Dashboard → Settings → Domains
2. Adaugă domeniul tău (ex: `wanderlust-cottage.com`)
3. Actualizează DNS la provider-ul tău de domenii
4. SSL se configurează automat

✅ **Auto-deployment:**
De acum, fiecare `git push` pe branch-ul `main` va deploy automat! 🚀

---

## 📖 Documentație Completă

Pentru instrucțiuni detaliate pas cu pas, vezi:

- **[DEPLOY_STATIC.md](./DEPLOY_STATIC.md)** - Ghid complet cu toate platformele
- **[DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md)** - Deployment Vercel detaliat
- **[DEPLOY_AZURE.md](./DEPLOY_AZURE.md)** - Deployment Azure detaliat
- **[README.md](./README.md)** - Documentație generală a proiectului

---

## 🔧 Probleme Comune

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Environment variables nu funcționează
- Adaugă-le în Vercel Dashboard → Settings → Environment Variables
- Doar variabilele `NEXT_PUBLIC_*` sunt vizibile în browser

### Harta nu se încarcă
- Verifică coordonatele GPS în environment variables
- Trebuie să fie numere valide

### Custom domain nu funcționează
- Așteaptă 5-30 minute pentru propagare DNS
- Verifică DNS records la provider-ul de domenii

---

## 💡 Quick Tips

1. **SEO:** După deployment, adaugă site-ul în [Google Search Console](https://search.google.com/search-console)

2. **Analytics:** Configurează Google Analytics în environment variables (după consimțământ GDPR)

3. **Performance:** Testează cu [PageSpeed Insights](https://pagespeed.web.dev/) - țintă 80+

4. **Backup:** Fă git commit regulat:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

---

## 📞 Ai nevoie de ajutor?

1. **Citește documentația:** [DEPLOY_STATIC.md](./DEPLOY_STATIC.md)
2. **Vercel Support:** [vercel.com/support](https://vercel.com/support)
3. **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)

---

**Mult succes! 🏡✨**
