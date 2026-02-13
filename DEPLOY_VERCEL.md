# Deploy pe Vercel cu GitHub Actions (Auto-Deploy)

Ghid complet pentru setup-ul deployment-ului pe Vercel.

## 1. Setup rapid pe Vercel (2 minute)

### Pas 1: Mergi pe Vercel
1. Accesează [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Autorizează Vercel să acceseze repourile tale

### Pas 2: Importă proiectul
1. După login, click **"Add New..."** → **"Project"**
2. Selectează repository-ul **`wanderlust-new`**
3. Click **"Import"**

### Pas 3: Configurează Build Settings
Vercel detectează automat Next.js. Setările sunt OK din start:
- **Framework**: Next.js ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm ci` ✅

**NU schimba nimic!** Apasă **"Deploy"**

### Pas 4: Așteptă Deploy
- Build-ul durează ~2-3 minute
- După acela, site-ul e **live** 🎉

## 2. Link GitHub pentru Auto-Deploy

Vercel e deja conectat la GitHub. Acum:
- Orice **push** la `main` triggeaza deploy automat
- Orice **PR** primește un preview link automat
- Status apare direct pe GitHub

## 3. Verifică Deploy

1. **Vercel Dashboard**: https://vercel.com/dashboard
   - Vezi toate deployment-urile și statusul
2. **GitHub**: Repository → Actions
   - Vercel postează status pe fiecare commit
3. **Site URL**: Ceva de genul `cabana-site.vercel.app`
   - Îl găsești în Vercel Dashboard → Domains

## 4. Adaugă Custom Domain (opțional)

În Vercel Dashboard:
1. Mergi la Project → Settings → Domains
2. Adaugă domeniu (ex: `cabana.com`)
3. Update DNS records la registrar-ul tău
4. Vercel confirmă și setează SSL automat

## 5. Environment Variables (dacă ai nevoie)

Dacă booking-ul tău are nevoie de env vars (ex: email, API keys):

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Adaugă variabilele (ex: `SMTP_PASSWORD`)
3. Redeployeaza (push pe main sau click "Redeploy" în Vercel)

Exemplu pentru booking email:
```
NEXT_PUBLIC_SMTP_HOST=smtp.gmail.com
NEXT_PUBLIC_SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## 6. Integrare Email pentru Booking (opțional)

Dacă vrei să primești emails din booking:

### Opțiunea A: Resend (Recomandată - Vercel-integrated)
```bash
npm install resend
```

Adaugă în `app/api/booking/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    await resend.emails.send({
      from: 'noreply@cabana.com',
      to: 'you@cabana.com',
      subject: `Nouă rezervare - ${body.name}`,
      html: `<p>Nume: ${body.name}</p><p>Email: ${body.email}</p>...`
    });
    
    return NextResponse.json({ message: 'Booking saved' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

Adaugă API key în Vercel Environment Variables:
- `RESEND_API_KEY=re_xxxxx` (din [resend.com](https://resend.com))

### Opțiunea B: SendGrid
Asemănător cu Resend, dar mai complex.

## 7. Monitoring & Analytics

1. **Vercel Analytics**:
   - Dashboard → Project → Analytics
   - Vezi traffic, performance, errors

2. **Vercel Error Tracking**:
   - Funcție automată
   - Server errors și client errors tracked

## 8. Troubleshooting

### Build fails
- Vercel arată log-ul complet în Dashboard
- Click "Deployments" → click build-ul failed
- Citește error message din "Build Logs"

### API route nu funcționează
- Vercel suportă API routes 100%
- Verifică că ruta e în `/app/api/...`
- Test local: `npm run build && npm start`

### Middleware issues
- Vercel suportă middleware Next.js
- Trebuie redeployment după schimbare

### Preview deployments nu funcționează
- Configurează în Vercel Dashboard → Settings → Git
- Auto-redeploy trebuie enabled

## Costuri

**Vercel FREE TIER**:
- Bandwidth: 100 GB/lună
- Funcții serverless: 100 execuții/zi
- Build minutes: 6000/lună
- **Pret**: 0 $ 🎉

## Comenzi utile

```bash
# Instaleaza Vercel CLI (local testing)
npm install -g vercel

# Test deploy local
vercel dev

# Deploy manual
vercel deploy --prod
```

## Comandă rapidă (Local Testing)

```bash
npm install
npm run build
npm start
```

Mergi la `http://localhost:3000` și testează booking-ul.

## Support

- **Docs**: https://vercel.com/docs
- **Status**: https://www.vercelstatus.com
- **Community**: https://vercel.com/community

---

**Gata!** Site-ul tău e live pe Vercel cu auto-deploy din GitHub. 🚀
