import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faCookie, faGear, faChartLine, faSlidersH, faLink, faFileShield, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export function generateStaticParams() {
  return [
    { locale: 'ro' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'privacyPolicy' });
  
  return generatePageMetadata({
    title: t('title'),
    description: t('description', { siteName: siteConfig.name }),
    path: '/politica-confidentialitate',
    noIndex: true,
  });
}

export default async function PoliticaConfidentialitatePage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'privacyPolicy' });
  return (
    <>
      <section className="relative bg-primary text-white py-16 md:py-20">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/10">
            <FontAwesomeIcon icon={faShieldHalved} className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <div className="bg-surface border-b border-border">
        <div className="container-custom py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-text-muted hover:text-accent">
                  {t('breadcrumb.home')}
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li className="text-text font-medium">{t('breadcrumb.current')}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container-custom max-w-5xl">
          {/* Introduction */}
          <div className="card p-8 mb-8 bg-primary/5 border-l-4 border-primary">
            <p className="text-sm text-text-muted mb-4">
              <em>{t('lastUpdated', { date: 'februarie 2026' })}</em>
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              {t.rich('introduction.text', {
                bold: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
          </div>

          {/* What are cookies */}
          <div className="card p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FontAwesomeIcon icon={faCookie} className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">{t('sections.cookies.title')}</h2>
                <p className="text-text-light leading-relaxed">
                  {t('sections.cookies.content')}
                </p>
              </div>
            </div>
          </div>

          {/* What cookies we use */}
          <div className="card p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FontAwesomeIcon icon={faGear} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-2">{t('sections.typesOfCookies.title')}</h2>
                <p className="text-text-light leading-relaxed mb-4">
                  {t('sections.typesOfCookies.intro')}
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-surface rounded-lg">
                    <span className="text-accent mt-1">•</span>
                    <div>
                      <strong className="text-primary">{t('sections.typesOfCookies.types.technical.title')}</strong>
                      <p className="text-text-muted mt-1">{t('sections.typesOfCookies.types.technical.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-surface rounded-lg">
                    <span className="text-accent mt-1">•</span>
                    <div>
                      <strong className="text-primary">{t('sections.typesOfCookies.types.analytics.title')}</strong> <span className="text-sm text-text-muted">{t('sections.typesOfCookies.types.analytics.optional')}</span>
                      <p className="text-text-muted mt-1">{t('sections.typesOfCookies.types.analytics.description')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-accent/5 border-l-4 border-accent rounded">
                  <p className="text-text-light">
                    {t.rich('sections.typesOfCookies.note', {
                      bold: (chunks) => <strong>{chunks}</strong>
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How we use information */}
          <div className="card p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FontAwesomeIcon icon={faChartLine} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-2">{t('sections.usage.title')}</h2>
                <p className="text-text-light leading-relaxed mb-4">
                  {t('sections.usage.intro')}
                </p>

                <ul className="space-y-2">
                  {(t.raw('sections.usage.items') as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-text-light">
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cookie control */}
          <div className="card p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FontAwesomeIcon icon={faSlidersH} className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-2">{t('sections.control.title')}</h2>
                <p className="text-text-light leading-relaxed mb-4">
                  {t('sections.control.intro')}
                </p>

                <ul className="space-y-2">
                  {(t.raw('sections.control.items') as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-text-light">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-text-light mt-4">
                  {t('sections.control.footer')}
                </p>
              </div>
            </div>
          </div>

          {/* External links */}
          <div className="card p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FontAwesomeIcon icon={faLink} className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">{t('sections.externalLinks.title')}</h2>
                <p className="text-text-light leading-relaxed">
                  {t('sections.externalLinks.content')}
                </p>
              </div>
            </div>
          </div>

          {/* Policy changes */}
          <div className="card p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FontAwesomeIcon icon={faFileShield} className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">{t('sections.changes.title')}</h2>
                <p className="text-text-light leading-relaxed">
                  {t('sections.changes.content')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="card p-8 bg-primary text-white">
            <h2 className="text-2xl font-bold mb-4">{t('sections.contact.title')}</h2>
            <p className="text-white/90 mb-6">
              {t('sections.contact.intro')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">{t('sections.contact.email')}</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-accent font-medium">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/70">{t('sections.contact.phone')}</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-white hover:text-accent font-medium">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-white/90 text-sm">
                {t.rich('sections.contact.footer', {
                  bold: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
