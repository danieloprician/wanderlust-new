import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo/schema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faUsers, faHeart, faGift, faCheck } from '@fortawesome/free-solid-svg-icons';
import BookNowButton from '@/components/BookNowButton';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'cabin' });
  
  return generatePageMetadata({
    title: t('title'),
    description: t('subtitle'),
    path: '/cabana',
  });
}

export const revalidate = 604800; // 1 week

export default async function CabanaPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'cabin' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  
  const breadcrumbs = [
    { name: tCommon('home'), path: '/' },
    { name: tCommon('cabin'), path: '/cabana' },
  ];

  const amenities = [
    { category: t('amenities.relaxation'), items: t.raw('amenities.items.relaxation') as string[] },
    { category: t('amenities.kitchen'), items: t.raw('amenities.items.kitchen') as string[] },
    { category: t('amenities.bedrooms'), items: t.raw('amenities.items.bedrooms') as string[] },
    { category: t('amenities.bathrooms'), items: t.raw('amenities.items.bathrooms') as string[] },
    { category: t('amenities.entertainment'), items: t.raw('amenities.items.entertainment') as string[] },
    { category: t('amenities.outdoor'), items: t.raw('amenities.items.outdoor') as string[] },
  ];

  return (
    <>
      <JsonLd
        data={generateWebPageSchema(
          t('title'),
          t('subtitle'),
          `${siteConfig.url}/cabana`,
          breadcrumbs,
          locale
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
              {t('title')}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {t('subtitle')}
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
                  {tCommon('home')}
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li className="text-text font-medium">{tCommon('cabin')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              {t('story.heading')}
            </h2>
            <div className="prose prose-lg max-w-none text-text-light space-y-4">
              <p>
                <strong>{siteConfig.name}</strong> {t('story.paragraph1', { region: siteConfig.contact.region })}
              </p>
              <p>
                {t('story.paragraph2')}
              </p>
              <p>
                {t('story.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            {t('amenities.heading')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((section, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4" />
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
            {t('floorPlan.heading')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('floorPlan.groundFloor')}</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.mainLiving.label')}</span>
                  <span>{t('floorPlan.rooms.mainLiving.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.kitchen.label')}</span>
                  <span>{t('floorPlan.rooms.kitchen.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.bathroom1.label')}</span>
                  <span>{t('floorPlan.rooms.bathroom1.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.bedroom1.label')}</span>
                  <span>{t('floorPlan.rooms.bedroom1.description')}</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('floorPlan.firstFloor')}</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.bedroom2.label')}</span>
                  <span>{t('floorPlan.rooms.bedroom2.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.bedroom3.label')}</span>
                  <span>{t('floorPlan.rooms.bedroom3.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.bathroom2.label')}</span>
                  <span>{t('floorPlan.rooms.bathroom2.description')}</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-primary/5">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('floorPlan.outdoor')}</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.hotTub.label')}</span>
                  <span>{t('floorPlan.rooms.hotTub.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.sauna.label')}</span>
                  <span>{t('floorPlan.rooms.sauna.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.barbecue.label')}</span>
                  <span>{t('floorPlan.rooms.barbecue.description')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">{t('floorPlan.rooms.garden.label')}</span>
                  <span>{t('floorPlan.rooms.garden.description')}</span>
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
            {t('forWhom.heading')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faUserGroup} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('forWhom.families.title')}</h3>
              <p className="text-text-light">
                {t('forWhom.families.description')}
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faUsers} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('forWhom.friends.title')}</h3>
              <p className="text-text-light">
                {t('forWhom.friends.description')}
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faHeart} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('forWhom.couples.title')}</h3>
              <p className="text-text-light">
                {t('forWhom.couples.description')}
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faGift} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t('forWhom.events.title')}</h3>
              <p className="text-text-light">
                {t('forWhom.events.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            {t('cta.heading')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton size="lg" />
            <Link
              href="/galerie"
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              {t('cta.viewGallery')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
