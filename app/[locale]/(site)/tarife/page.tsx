import { Metadata } from 'next';
import Link from 'next/link';
import RateTable from '@/components/RateTable';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tarife Cazare - Prețuri și Politici de Rezervare',
  description: `Vezi tarifele pentru ${siteConfig.name}. Prețuri competitive, politici transparente, discount pentru sejururi lungi. De la ${siteConfig.pricing.lowSeason} RON/noapte.`,
  path: '/tarife',
});

export const revalidate = 86400; // 24 hours

export default function TarifePage() {
  const breadcrumbs = [
    { name: 'Acasă', path: '/' },
    { name: 'Tarife', path: '/tarife' },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Tarife & Prețuri
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transparență totală, prețuri corecte, fără costuri ascunse
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-surface border-b border-border">
        <div className="container-custom py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-text-muted hover:text-accent">
                  Acasă
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li className="text-text font-medium">Tarife</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Rate Table */}
      <section className="section">
        <div className="container-custom max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Tarife Cazare
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Prețurile includ toate facilitățile: ciubar, saună, WiFi, parcare, lenjerie și
              prosoape
            </p>
          </div>
          <RateTable />
        </div>
      </section>

      {/* Discounts */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Reduceri & Oferte Speciale
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    📅
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Sejur Prelungit
                    </h3>
                    <p className="text-text-light mb-2">
                      <strong>10% reducere</strong> pentru rezervări de 5+ nopți
                    </p>
                    <p className="text-sm text-text-muted">
                      Valabil în afara sezonului înalt și sărbătorilor
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    🔁
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Oaspeți Fideli
                    </h3>
                    <p className="text-text-light mb-2">
                      <strong>15% reducere</strong> pentru a doua rezervare
                    </p>
                    <p className="text-sm text-text-muted">
                      Mulțumim că vă întoarceți la noi!
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Last Minute
                    </h3>
                    <p className="text-text-light mb-2">
                      <strong>20% reducere</strong> pentru rezervări cu 48h înainte
                    </p>
                    <p className="text-sm text-text-muted">
                      Doar în afara weekendurilor și sărbătorilor
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    👥
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Early Bird
                    </h3>
                    <p className="text-text-light mb-2">
                      <strong>10% reducere</strong> pentru rezervări cu 60+ zile înainte
                    </p>
                    <p className="text-sm text-text-muted">
                      Planifică din timp și economisește
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Informații Utile
            </h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Metode de Plată
                </h3>
                <p className="text-text-light mb-3">
                  Acceptăm următoarele metode de plată:
                </p>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Transfer bancar (IBAN furnizat la confirmare)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Card bancar (la check-in)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Numerar (la check-in)</span>
                  </li>
                </ul>
                <p className="text-sm text-text-muted mt-3">
                  <strong>Important:</strong> Un avans de 30% este necesar pentru confirmarea
                  rezervării.
                </p>
              </div>

              <div className="card p-6 bg-primary/5">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Ce NU Este Inclus în Preț
                </h3>
                <ul className="space-y-2 text-text-light">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Consumabile (alimente, băuturi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Transport către/de la cabană</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Activități opționale în zonă (schi, echitație etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Servicii de catering (disponibile la cerere, costuri suplimentare)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Gata Să Rezervi?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Verifică disponibilitatea și trimite-ne o cerere de rezervare. Îți vom răspunde în
            maximum 24 de ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezervari" className="btn-accent btn-lg">
              Rezervă acum
            </Link>
            <Link
              href="/contact"
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
