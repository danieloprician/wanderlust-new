import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Despre Cabană - Dotări, Facilități și Poveste',
  description: `Descoperă ${siteConfig.name}: dotări premium, facilități complete, spații generoase și o poveste unică. Cabană pentru 8 persoane cu ciubar, saună și semineu.`,
  path: '/cabana',
});

export const revalidate = 604800; // 1 week

export default function CabanaPage() {
  const breadcrumbs = [
    { name: 'Acasă', path: '/' },
    { name: 'Cabana', path: '/cabana' },
  ];

  const amenities = [
    { category: 'Relaxare', items: ['Ciubar cu apă caldă', 'Saună finlandeză', 'Semineu de piatră', 'Terasă cu privelişte'] },
    { category: 'Bucătărie', items: ['Aragaz', 'Cuptor', 'Frigider', 'Mașină de spălat vase', 'Ustensile complete', 'Cafetieră'] },
    { category: 'Dormitoare', items: ['3 dormitoare', 'Paturi pentru 8 persoane', 'Lenjerie premium', 'Dulapuri spațioase'] },
    { category: 'Băi', items: ['2 băi complete', 'Duș cu hidromasaj', 'Încălzire în pardoseală', 'Prosoape incluse'] },
    { category: 'Entertainment', items: ['TV Smart', 'WiFi de mare viteză', 'Sistem audio', 'Jocuri de masă'] },
    { category: 'Exterior', items: ['Grătar', 'Mobilier de grădină', 'Leagăne pentru copii', 'Parcare privată', 'Spațiu joacă'] },
  ];

  return (
    <>
      <JsonLd
        data={generateWebPageSchema(
          'Despre Cabană - Dotări și Facilități',
          metadata.description as string,
          `${siteConfig.url}/cabana`,
          breadcrumbs
        )}
      />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src="/images/cabana-exterior-vara.webp"
          alt="Cabană de închiriat - vedere exterioară"
          fill
          priority
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 overlay-gradient-primary" />
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Despre Cabană
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Un refugiu autentic cu dotări moderne în inima naturii
            </p>
          </div>
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
              <li className="text-text font-medium">Cabana</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Povestea Noastră
            </h2>
            <div className="prose prose-lg max-w-none text-text-light space-y-4">
              <p>
                <strong>{siteConfig.name}</strong> a fost construită cu gândul de a oferi o
                experiență autentică în natură, fără a compromite confortul modern. Amplasată în
                inima {siteConfig.contact.region}, cabana noastră este rezultatul unei pasiuni
                pentru arhitectura tradițională românească și a dorinței de a crea un spațiu
                unde oamenii pot reconecta cu natura.
              </p>
              <p>
                Renovată complet în 2024, cabana îmbină elementele tradiționale - lemn masiv,
                piatră naturală, șemineu rustic - cu facilitățile moderne necesare unui sejur
                confortabil: încălzire centrală, WiFi, bucătărie complet utilată.
              </p>
              <p>
                Suntem mândri să oferim oaspeților noștri nu doar un loc de cazare, ci o
                experiență completă: ciubarul sub cerul înstelat, sauna după o zi pe munte,
                liniștea pădurii și aerul curat al munților.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Dotări & Facilități
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((section, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-text-light flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Plan Camere
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Parter (Ground Floor)</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Living Principal:</span>
                  <span>Canapea extensibilă, semineu, TV smart, acces la terasă (35m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Bucătărie:</span>
                  <span>Complet utilată, masă pentru 8 persoane, bar (25m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Baie:</span>
                  <span>Duș, WC, lavabo, încălzire în pardoseală (6m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Cameră 1:</span>
                  <span>Pat matrimonial, dulap, acces direct la grădină (18m²)</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Etaj (First Floor)</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Cameră 2:</span>
                  <span>Pat matrimonial, birou, balcon cu privelişte (20m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Cameră 3:</span>
                  <span>2 paturi suprapuse, spațiu joacă copii (16m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Baie:</span>
                  <span>Cadă, WC, lavabo, mașină de spălat (7m²)</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-primary/5">
              <h3 className="text-2xl font-semibold text-primary mb-4">Exterior</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Ciubar:</span>
                  <span>Încălzit pe lemne, capacitate 6 persoane</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Saună:</span>
                  <span>Finlandeză, capacitate 4 persoane, vestiare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Grătar:</span>
                  <span>Zonă acoperită, masă exterior, scaune</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Grădină:</span>
                  <span>500m², leagăne, căsuță pentru copii, parcare 3 mașini</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="section bg-surface">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Pentru Cine Este Potrivită Cabana?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Familii cu Copii</h3>
              <p className="text-text-light">
                Spațiu amplu, curte sigură, jocuri pentru copii și facilități complete pentru
                confortul întregii familii.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">👫</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Grupuri de Prieteni</h3>
              <p className="text-text-light">
                Perfectă pentru reuniuni, weekend-uri relaxante sau petreceri private în natură.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">💑</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Cupluri Romantice</h3>
              <p className="text-text-light">
                Intimitate, liniște, ciubar sub stele și apusuri spectaculoase pentru momente de
                neuitat.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Evenimente Speciale</h3>
              <p className="text-text-light">
                Aniversări, cereri în căsătorie, team-building sau sărbători în cadru privat și
                exclusivist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Convins? Rezervă Acum!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nu lăsa pe altcineva să îți ia weekendul perfect. Verifică disponibilitatea și
            rezervă astăzi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezervari" className="btn-accent btn-lg">
              Verifică disponibilitatea
            </Link>
            <Link
              href="/galerie"
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Vezi mai multe poze
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
