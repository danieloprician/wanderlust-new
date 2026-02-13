# Deploy pe Azure Static Web Apps cu GitHub Actions

Ghid complet pentru setup-ul deployment-ului pe Azure Static Web Apps (FREE TIER).

⚠️ **Notă**: API routes sunt dezactivate. Dacă ai nevoie de backend, folosește Vercel sau Azure App Service.

## 1. Setup Azure Static Web Apps

### Opțiunea A: Creează prin Azure Portal
1. Accesează [Azure Portal](https://portal.azure.com)
2. Caută "Static Web Apps" și click "Create"
3. Completează:
   - **Resource Group**: Crează nou (ex: `cabana-rg`)
   - **Name**: `cabana-site` (trebuie unic)
   - **Plan**: Free
   - **Region**: West Europe (cel mai apropiat)
4. Click "Next: Deployment details"
5. Selectează:
   - **Source**: GitHub
   - Click "Sign in with GitHub" dacă e necesar
   - **Organization**: Alege organizația/contul tău
   - **Repository**: `wanderlust-new`
   - **Branch**: `main`
6. Build presets:
   - **Build Presets**: Custom
   - **App location**: `/`
   - **Api location**: (lasă gol)
   - **Output location**: `out`
7. Click "Review + create" → "Create"

### Opțiunea B: Creează cu Azure CLI
```bash
# Login la Azure
az login

# Crează resource group
az group create --name cabana-rg --location westeurope

# Crează Static Web App
az staticwebapp create \
  --name cabana-site \
  --resource-group cabana-rg \
  --source https://github.com/YOUR_USERNAME/wanderlust-new \
  --branch main \
  --app-location "out" \
  --build-command "npm run build"
```

## 2. Configurează GitHub Secrets

După crearea resursei Azure:

1. Mergi la Static Web App-ul creat în Azure Portal
2. Caută "Manage deployment token"
3. Copy token-ul (API token)
4. Mergi la GitHub: Repository → Settings → Secrets and variables → Actions
5. Click "New repository secret"
6. Crează secret cu nume: `AZURE_STATIC_WEB_APPS_API_TOKEN`
7. Paste token-ul copiat și click "Add secret"

## 3. Activează Auto-Deploy

Odată ce e setat:
- Orice **push** la branch `main` va trigga build-ul și deploy-ul automat
- Status se vede în GitHub Actions tab
- Merge de PR-uri nu vor declanșa deploy automat (doar preview)

## 4. Verifică Deployment

- Azure Portal: Deployment history
- GitHub: Actions tab
- Site URL: Vei vedea în Azure Static Web App settings (typeof `https://YOUR_UNIQUE_NAME.azurestaticapps.net`)

## 5. Configurări suplimentare (opțional)

### Adaugă custom domain
```bash
az staticwebapp hostname set \
  --name cabana-site \
  --resource-group cabana-rg \
  --hostname yourdomain.com
```

### ENV variables (dacă ai nevoie)
Adaugă în `.github/workflows/deploy-azure.yml` la step-ul Build:
```yaml
- name: Build Next.js app
  env:
    NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
  run: npm run build
```

Apoi adaugă secret în GitHub.

## 6. Troubleshooting

### Build fails
- Verifica logs în Azure Portal: Static Web App → Deployment history
- Clickeaza pe build-ul failed pt error messages
- De obicei e problema cu Node version sau dependencies

### 404 pe rute dinamice
- ✅ Configurarea e deja setată în `staticwebapp.config.json`
- Rute dinamice (ex: `/[locale]/page.tsx`) sunt handled automat

### Build timeout
- Crește timeout în Azure Portal: Static Web App → Configuration
- Limit implicit e 15 min pentru free tier
- Verifica `npm ci` nu e prea lent

### Build îl blocheaza pe Azure
- Local test: `npm run build` - daca merge local, merge pe Azure
- Verifica dependencies: `npm ci` trebuie sa fie rapid

## Environment necesar

- Node.js 18+ ✅
- npm/yarn ✅
- GitHub account ✅
- Azure account (free tier disponibil) ✅

## Costuri

- **Azure Static Web Apps FREE TIER**:
  - Bandwidth: 100 GB/lună
  - Build minutes: 100/lună
  - Gestion SSL: inclus
  - Custom domain: inclus
  - **Pret**: 0 $ 🎉

## Starter Checklist

- [ ] 1. Creat subscription Azure
- [ ] 2. Creat Static Web App
- [ ] 3. Conectat GitHub repo
- [ ] 4. Setat API token în GitHub Secrets
- [ ] 5. First deployment triggered
- [ ] 6. Verific site URL
- [ ] 7. Custom domain (opțional)

## Contact & Support

Dacă ceva nu merge:
1. Verific logs în GitHub Actions
2. Verific build errors în Azure Portal
3. Rune local: `npm run build` și `npm start`
