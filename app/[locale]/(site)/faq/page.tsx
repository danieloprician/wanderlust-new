import { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/schema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMountain, 
  faPersonHiking, 
  faLandmark, 
  faHorse,
  faChildren 
} from '@fortawesome/free-solid-svg-icons';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'faq' });
  
  return generatePageMetadata({
    title: t('title'),
    description: t('subtitle'),
    path: '/faq',
  });
}

export const revalidate = 604800; // 1 week

export default async function FAQPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'faq' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  
  // Build FAQs array with translations
  const faqs = [
    {
      question: t('questions.q1.question'),
      answer: t('questions.q1.answer'),
    },
    {
      question: t('questions.q2.question'),
      answer: t('questions.q2.answer', { 
        checkIn: siteConfig.booking.checkInTime, 
        checkOut: siteConfig.booking.checkOutTime 
      }),
    },
    {
      question: t('questions.q3.question'),
      answer: t('questions.q3.answer'),
    },
    {
      question: t('questions.q4.question'),
      answer: t('questions.q4.answer'),
    },
    {
      question: t('questions.q5.question'),
      answer: t('questions.q5.answer'),
    },
    {
      question: t('questions.q6.question'),
      answer: t('questions.q6.answer'),
    },
    {
      question: t('questions.q7.question'),
      answer: t('questions.q7.answer'),
    },
    {
      question: t('questions.q8.question'),
      answer: t('questions.q8.answer'),
    },  
    {
      question: t('questions.q9.question'),
      answer: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <span><FontAwesomeIcon icon={faMountain} className="text-primary" /></span> {t('questions.q9.categories.nature')}
            </h4>
            <ul className="space-y-1 ml-6 list-disc">
              <li><strong>{t('questions.q9.attractions.avrigValley').split(' – ')[0]}</strong> – {t('questions.q9.attractions.avrigValley').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.poianaNea').split(' – ')[0]}</strong> – {t('questions.q9.attractions.poianaNea').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.lakeAvrig').split(' – ')[0]}</strong> – {t('questions.q9.attractions.lakeAvrig').split(' – ')[1]}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <span><FontAwesomeIcon icon={faPersonHiking} className="text-primary" /></span> {t('questions.q9.categories.trails')}
            </h4>
            <ul className="space-y-1 ml-6 list-disc">
              <li>{t('questions.q9.attractions.trail1')}</li>
              <li>{t('questions.q9.attractions.trail2')}</li>
              <li>{t('questions.q9.attractions.trail3')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <span><FontAwesomeIcon icon={faLandmark} className="text-primary" /></span> {t('questions.q9.categories.cultural')}
            </h4>
            <ul className="space-y-1 ml-6 list-disc">
              <li><strong>{t('questions.q9.attractions.brukenthal').split(' – ')[0]}</strong> – {t('questions.q9.attractions.brukenthal').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.museum').split(' – ')[0]}</strong> – {t('questions.q9.attractions.museum').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.memorial')}</strong></li>
              <li><strong>{t('questions.q9.attractions.evangelical').split(' – ')[0]}</strong> – {t('questions.q9.attractions.evangelical').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.orthodox').split(' – ')[0]}</strong> – {t('questions.q9.attractions.orthodox').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.carta').split(' – ')[0]}</strong> – {t('questions.q9.attractions.carta').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.calendar').split(' – ')[0]}</strong> – {t('questions.q9.attractions.calendar').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.clay').split(' – ')[0]}</strong> – {t('questions.q9.attractions.clay').split(' – ')[1]}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <span><FontAwesomeIcon icon={faHorse} className="text-primary" /></span> {t('questions.q9.categories.activities')}
            </h4>
            <ul className="space-y-1 ml-6 list-disc">
              <li>{t('questions.q9.attractions.hiking')}</li>
              <li>{t('questions.q9.attractions.bikes')}</li>
              <li>{t('questions.q9.attractions.horse')}</li>
              <li>{t('questions.q9.attractions.pools')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <span><FontAwesomeIcon icon={faChildren} className="text-primary" /></span> {t('questions.q9.categories.modern')}
            </h4>
            <ul className="space-y-1 ml-6 list-disc">
              <li><strong>{t('questions.q9.attractions.brambura').split(' – ')[0]}</strong> – {t('questions.q9.attractions.brambura').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.panoramic').split(' – ')[0]}</strong> – {t('questions.q9.attractions.panoramic').split(' – ')[1]}</li>
              <li><strong>{t('questions.q9.attractions.deer')}</strong></li>
            </ul>
          </div>
        </div>
      ) as any,
    },
    {
      question: t('questions.q10.question'),
      answer: t('questions.q10.answer'),
    },
    {
      question: t('questions.q11.question'),
      answer: t('questions.q11.answer', { city: siteConfig.contact.city }),
    },
    {
      question: t('questions.q12.question'),
      answer: t('questions.q12.answer'),
    },
  ];

  const breadcrumbs = [
    { name: tCommon('home'), path: '/' },
    { name: tCommon('faq'), path: '/faq' },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

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
              <li className="text-text font-medium">{tCommon('faq')}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* FAQs */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="card group overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-primary/5 transition-colors">
                  <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                  <svg
                    className="w-6 h-6 text-accent flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-text-light leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="card p-8 md:p-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 mx-auto">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              {t('stillHaveQuestions.heading')}
            </h2>
            <p className="text-text-light mb-8">
              {t('stillHaveQuestions.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                {t('stillHaveQuestions.contactUs')}
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="btn-outline"
              >
                {t('stillHaveQuestions.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 text-center">
              {t('usefulLinks.heading')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/cabana" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t('usefulLinks.aboutCabin.title')}</h3>
                <p className="text-sm text-text-muted">
                  {t('usefulLinks.aboutCabin.description')}
                </p>
              </Link>
              <Link href="/tarife" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t('usefulLinks.ratesPolicies.title')}</h3>
                <p className="text-sm text-text-muted">
                  {t('usefulLinks.ratesPolicies.description')}
                </p>
              </Link>
              <Link href="/rezervari" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{t('usefulLinks.bookings.title')}</h3>
                <p className="text-sm text-text-muted">
                  {t('usefulLinks.bookings.description')}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
