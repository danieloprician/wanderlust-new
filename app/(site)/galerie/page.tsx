import { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Galerie Foto - Imagini Cabană, Interior, Exterior',
  description: `Galerie foto completă ${siteConfig.name}. Vezi imagini cu interiorul, exteriorul, ciubarul, sauna, peisajele din zonă și facilitățile cabanei.`,
  path: '/galerie',
});

export const revalidate = 604800; // 1 week

export default function GaleriePage() {
  const breadcrumbs = [
    { name: 'Acasă', path: '/' },
    { name: 'Galerie', path: '/galerie' },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Galerie Foto
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Descoperă frumusețea și confortul cabanei noastre prin imagini
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
              <li className="text-text font-medium">Galerie</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Gallery */}
      <section className="section">
        <div className="container-custom">
          <Gallery columns={3} showFilters={true} />
        </div>
      </section>

      {/* Info */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              Toate imaginile sunt reale
            </h2>
            <p className="text-text-light mb-6">
              Fotografiile prezentate în galerie sunt 100% autentice și reflectă realitatea
              cabanei și a zonei înconjurătoare. Nu folosim filtre sau editări excesive - ceea
              ce vezi este exact ceea ce vei găsi când vei ajunge aici.
            </p>
            <p className="text-text-light mb-8">
              Dacă ai întrebări despre orice aspect al cabanei sau dorești mai multe detalii,
              nu ezita să ne contactezi. Suntem bucuroși să îți oferim orice informații
              suplimentare!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rezervari" className="btn-accent">
                Rezervă acum
              </Link>
              <Link href="/contact" className="btn-outline">
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
