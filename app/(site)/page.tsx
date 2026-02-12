import { Metadata } from 'next';
import Link from 'next/link';
import HeroCabana from '@/components/HeroCabana';
import USPList from '@/components/USPList';
import TestimonialSection from '@/components/Testimonial';
import Gallery from '@/components/Gallery';
import Map from '@/components/Map';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import {
  JsonLd,
  generateLodgingBusinessSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/schema';

export const metadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} - Cabană de închiriat în ${siteConfig.contact.region}`,
  description: `Descoperă ${siteConfig.name}, cabana perfectă pentru vacanțe la munte în ${siteConfig.contact.region}. Ciubar, saună, semineu și natură autentică. Rezervă acum!`,
  path: '/',
});

// ISR: Revalidate every 24 hours
export const revalidate = 86400;

export default function HomePage() {
  const breadcrumbs = [{ name: 'Acasă', path: '/' }];

  return (
    <>
      {/* JSON-LD Schemas */}
      <JsonLd data={generateLodgingBusinessSchema()} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <HeroCabana
        title="Refugiul tău perfect în inima naturii"
        subtitle="Descoperă liniștea și confortul în lumea Wanderlust"
      />

      {/* USPs */}
      <USPList />

      {/* Quick CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Gata să creezi amintiri de neuitat?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rezervă acum și bucură-te de o experiență unică la munte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezervari" className="btn-accent btn-lg">
              Rezervă acum
            </Link>
            <Link
              href="/tarife"
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Vezi tarifele
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Galerie Foto
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto mb-6">
              Descoperă frumusețea cabanei noastre prin imagini
            </p>
          </div>
          <Gallery columns={3} showFilters={false} />
          <div className="text-center mt-8">
            <Link href="/galerie" className="btn-primary">
              Vezi toată galeria
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Local SEO Section */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-center">
              Cabană de Închiriat în {siteConfig.contact.region}
            </h2>
            <div className="prose prose-lg max-w-none text-text-light space-y-4">
              <p>
                <strong>{siteConfig.name}</strong> este amplasată în inima{' '}
                {siteConfig.contact.region}, o zonă renumită pentru frumusețea naturală și
                liniștea absolută. Perfectă pentru{' '}
                <strong>weekend-uri la munte</strong>, <strong>vacanțe în familie</strong> sau{' '}
                <strong>evenimente speciale</strong>, cabana noastră oferă o experiență
                autentică departe de agitația urbană.
              </p>
              <p>
                În apropiere găsiți numeroase <strong>trasee montane</strong>, pârtii de schi,
                cascade spectaculoase și obiective turistice renumite. Locația ideală pentru
                iubitorii de natură, fotografie și aventură.
              </p>
              <p>
                Dotările premium includ <strong>ciubar cu apă caldă</strong>,{' '}
                <strong>saună finlandeză</strong>, <strong>semineu rustic</strong>, bucătărie
                complet utilată și WiFi gratuit. Cazare pentru până la 8 persoane, perfectă
                pentru grupuri de prieteni sau familii extinse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Map */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Locația Cabanei
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              {siteConfig.contact.address}, {siteConfig.contact.city},{' '}
              {siteConfig.contact.region}
            </p>
          </div>
          <Map
            lat={siteConfig.geo.lat}
            lng={siteConfig.geo.lng}
            markerTitle={siteConfig.name}
            className="max-w-5xl mx-auto"
          />
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-secondary">
              Informații contact complete
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
