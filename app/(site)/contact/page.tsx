import { Metadata } from 'next';
import Link from 'next/link';
import Map from '@/components/Map';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generatePlaceSchema } from '@/lib/seo/schema';

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
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
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
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
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
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
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
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
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
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
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
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
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
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
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
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h7c2.21 0 4 1.79 4 4 0 1.1-.45 2.1-1.17 2.83A3.99 3.99 0 0118 14c0 2.21-1.79 4-4 4H6V4zm3 2v4h4c1.1 0 2-.9 2-2s-.9-2-2-2H9zm0 6v4h5c1.1 0 2-.9 2-2s-.9-2-2-2H9z"/>
                  </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640">
                    <path d="M320.5 437.1C295.3 405.4 280.4 377.7 275.5 353.9C253 265.9 388.1 265.9 365.6 353.9C360.2 378.1 345.3 405.9 320.6 437.1L320.5 437.1zM458.7 510.3C416.6 528.6 375 499.4 339.4 459.8C443.3 329.7 385.5 259.8 320.6 259.8C265.7 259.8 235.4 306.3 247.3 360.3C254.2 389.5 272.5 422.7 301.7 459.8C269.2 495.8 241.2 512.5 216.5 514.7C166.5 522.1 127.4 473.6 145.2 423.6C160.3 384.4 256.9 192.4 261.1 182C276.9 151.9 286.7 124.6 320.5 124.6C352.8 124.6 363.9 150.5 380.9 184.5C416.9 255.1 470.3 362 495.7 423.6C508.9 456.7 494.3 494.9 458.7 510.2zM505.7 374.2C376.8 99.9 369.7 96 320.6 96C275.1 96 255.7 127.7 235.9 168.8C129.7 381.1 119.5 411.2 118.6 413.8C93.4 483.1 145.3 544 208.2 544C229.9 544 268.8 537.9 320.6 481.6C379.3 545.4 421.9 544 433 544C495.9 544.1 547.9 483.1 522.6 413.8C522.6 409.9 505.8 374.9 505.8 374.2L505.8 374.2z"/>
                  </svg>
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
