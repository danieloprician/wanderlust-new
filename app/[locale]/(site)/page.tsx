import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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

export function generateStaticParams() {
  return [
    { locale: 'ro' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return generatePageMetadata({
    title: t('metadata.title', { siteName: siteConfig.name, region: siteConfig.contact.region }),
    description: t('metadata.description', { siteName: siteConfig.name, region: siteConfig.contact.region }),
    path: '/',
  });
}

// ISR: Revalidate every 24 hours
export const revalidate = 86400;

export default async function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tHero = await getTranslations({ locale, namespace: 'hero' });
  const tHome = await getTranslations({ locale, namespace: 'home' });
  const tGallery = await getTranslations({ locale, namespace: 'gallery' });
  
  const breadcrumbs = [{ name: tCommon('home'), path: '/' }];

  const categoryLabels = {
    all: tGallery('categories.all'),
    exterior: tGallery('categories.exterior'),
    interior: tGallery('categories.interior'),
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <JsonLd data={generateLodgingBusinessSchema()} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <HeroCabana
        title={tHero('title')}
        subtitle={tHero('subtitle')}
      />

      {/* USPs */}
      <USPList locale={locale} />

      {/* Quick CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {tHome('cta.heading')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {tHome('cta.description')}
          </p>
          
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {tHome('gallery.heading')}
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto mb-6">
              {tHome('gallery.description')}
            </p>
          </div>
          <Gallery columns={3} showFilters={false} categoryLabels={categoryLabels} />
          <div className="text-center mt-8">
            <Link href="/galerie" className="btn-primary">
              {tHome('gallery.viewAll')}
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
              {tHome('seo.heading', { region: siteConfig.contact.region })}
            </h2>
            <div className="prose prose-lg max-w-none text-text-light space-y-4">
              <p>
                <strong>{siteConfig.name}</strong>{' '}
                {tHome('seo.paragraph1', { 
                  siteName: '', 
                  region: siteConfig.contact.region 
                }).replace(/^/, '')}
              </p>
              <p>{tHome('seo.paragraph2')}</p>
              <p>{tHome('seo.paragraph3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Map */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {tHome('map.heading')}
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
              {tHome('map.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
