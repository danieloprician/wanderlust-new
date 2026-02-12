import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
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

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale });
  
  return generatePageMetadata({
    title: `${siteConfig.name} - Cabană de închiriat în ${siteConfig.contact.region}`,
    description: `Descoperă ${siteConfig.name}, cabana perfectă pentru vacanțe la munte în ${siteConfig.contact.region}. Ciubar, saună, semineu și natură autentică. Rezervă acum!`,
    path: '/',
  });
}

// ISR: Revalidate every 24 hours
export const revalidate = 86400;

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  const breadcrumbs = [{ name: t('common.home'), path: '/' }];

  return (
    <>
      {/* JSON-LD Schemas */}
      <JsonLd data={generateLodgingBusinessSchema()} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <HeroCabana
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
      />

      {/* USPs */}
      <USPList />

      {/* Quick CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {t('home.cta.heading')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezervari" className="btn-accent btn-lg">
              {t('home.cta.bookNow')}
            </Link>
            <Link
              href="/tarife"
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              {t('home.cta.seeRates')}
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {t('home.gallery.heading')}
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto mb-6">
              {t('home.gallery.description')}
            </p>
          </div>
          <Gallery columns={3} showFilters={false} />
          <div className="text-center mt-8">
            <Link href="/galerie" className="btn-primary">
              {t('home.gallery.viewAll')}
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
              {t('home.seo.heading', { region: siteConfig.contact.region })}
            </h2>
            <div className="prose prose-lg max-w-none text-text-light space-y-4">
              <p>
                <strong>{siteConfig.name}</strong>{' '}
                {t('home.seo.paragraph1', { 
                  siteName: '', 
                  region: siteConfig.contact.region 
                }).replace(/^/, '')}
              </p>
              <p>{t('home.seo.paragraph2')}</p>
              <p>{t('home.seo.paragraph3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Map */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {t('home.map.heading')}
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
              {t('home.map.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
