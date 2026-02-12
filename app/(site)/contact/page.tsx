import { Metadata } from 'next';
import Link from 'next/link';
import Map from '@/components/Map';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generatePlaceSchema } from '@/lib/seo/schema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faCar, faBus, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact - Adresă, Telefon, Program și Hartă',
  description: `Contact ${siteConfig.name}. Telefon: ${siteConfig.contact.phone}. Email: ${siteConfig.contact.email}. Adresă: ${siteConfig.contact.address}, ${siteConfig.contact.city}.`,
  path: '/contact',
});

export const revalidate = 604800; // 1 week

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Acasă', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generatePlaceSchema()} />

      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Contactează-ne</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Suntem aici să răspundem la toate întrebările tale
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
              <li className="text-text font-medium">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Info */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Telefon</h3>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-lg text-text hover:text-accent transition-colors font-medium"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-sm text-text-muted mt-2">Luni - Duminică, 9:00 - 21:00</p>
            </div>

            {/* Email */}
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-lg text-text hover:text-accent transition-colors font-medium break-all"
              >
                {siteConfig.contact.email}
              </a>
              <p className="text-sm text-text-muted mt-2">Răspundem în max 24h</p>
            </div>

            {/* Address */}
            <div className="card p-6 text-center md:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <FontAwesomeIcon icon={faLocationDot} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Adresă</h3>
              <address className="not-italic text-text-light">
                {siteConfig.contact.address}
                <br />
                {siteConfig.contact.city}, {siteConfig.contact.region}
                <br />
                {siteConfig.contact.country}
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Locația Pe Hartă
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Coordonate GPS: {siteConfig.geo.lat}, {siteConfig.geo.lng}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Map
              lat={siteConfig.geo.lat}
              lng={siteConfig.geo.lng}
              zoom={14}
              markerTitle={siteConfig.name}
            />
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Cum Ajungi La Cabană
            </h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCar} className="w-6 h-6" />
                  Cu Mașina
                </h3>
                <div className="space-y-3 text-text-light">
                  <p>
                    <strong>Din București (aprox. 170 km, 3 ore):</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Autostrada A1 până la ieșirea Brașov</li>
                    <li>DN73A spre Fundata/Bran</li>
                    <li>Urmați indicațiile GPS către cabană</li>
                    <li>Ultima porțiune: drum forestier 3km (accesibil orice anotimp)</li>
                  </ul>
                  <p className="text-sm bg-primary/5 p-3 rounded-lg mt-4">
                    <strong>Important:</strong> Drumul este accesibil cu orice tip de vehicul.
                    Iarna recomandăm cauciucuri de iarnă/lanțuri în caz de ninsoare abundentă.
                  </p>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faBus} className="w-6 h-6" />
                  Cu Transportul în Comun
                </h3>
                <div className="space-y-2 text-text-light">
                  <p>
                    <strong>Tren:</strong> Până la gara Brașov, apoi taxi/transfer (15 km,
                    ~20 min)
                  </p>
                  <p>
                    <strong>Autobuz:</strong> Curse regulate București - Brașov, stație în centru
                  </p>
                  <p className="text-sm text-text-muted mt-3">
                    * Putem organiza transfer de la gară/autogară la cerere (cost suplimentar)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Quick Links */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
              Urmărește-ne pe social media
            </h2>
            <p className="text-lg text-text-light mb-8">
              Descoperă cele mai recente update-uri, oferte speciale și poze frumoase din zonă
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-14 h-14 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-7 h-7" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-14 h-14 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
                </a>
              )}
              {siteConfig.social.booking && (
                <a
                  href={siteConfig.social.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Booking.com"
                  className="inline-flex items-center justify-center w-14 h-14 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faCalendarDays} className="w-7 h-7" />
                </a>
              )}
              {siteConfig.social.airbnb && (
                <a
                  href={siteConfig.social.airbnb}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Airbnb"
                  className="inline-flex items-center justify-center w-14 h-14 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110"
                >
                  <FontAwesomeIcon icon={faAirbnb} className="w-7 h-7" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Hai să planificăm sejurul tău!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dacă ai întrebări suplimentare sau vrei să rezervi direct, suntem la un telefon
            distanță
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezervari" className="btn-accent btn-lg">
              Formular de rezervare
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Sună acum
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
