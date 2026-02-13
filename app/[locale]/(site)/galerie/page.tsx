import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Gallery from '@/components/Gallery';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/seo/schema';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'gallery' });
  
  return generatePageMetadata({
    title: t('title'),
    description: t('subtitle'),
    path: '/galerie',
  });
}

export const revalidate = 604800; // 1 week

export default async function GaleriePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'gallery' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  
  const breadcrumbs = [
    { name: tCommon('home'), path: '/' },
    { name: tCommon('gallery'), path: '/galerie' },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('subtitle')}
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
                  {tCommon('home')}
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li className="text-text font-medium">{tCommon('gallery')}</li>
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
              {t('authenticity.title')}
            </h2>
            <p className="text-text-light mb-8">
              {t('authenticity.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">             
              <Link href="/contact" className="btn-outline">
                {t('cta.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
