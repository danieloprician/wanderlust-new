import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generatePlaceSchema } from '@/lib/seo/schema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faCar, faBus, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Dynamically import Map component with SSR disabled
const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded-lg bg-surface flex items-center justify-center">
      <div className="animate-pulse text-text-muted">Loading map...</div>
    </div>
  ),
});

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact - Address, Phone, Schedule and Map',
  description: `Contact ${siteConfig.name}. Phone: ${siteConfig.contact.phone}. Email: ${siteConfig.contact.email}. Address: ${siteConfig.contact.address}, ${siteConfig.contact.city}.`,
  path: '/contact',
});

export const revalidate = 604800; // 1 week

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
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
            Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're here to answer all your questions
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
                  Home
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
              <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-lg text-text hover:text-accent transition-colors font-medium"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-sm text-text-muted mt-2">Monday - Sunday, 9:00 AM - 9:00 PM</p>
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
              <p className="text-sm text-text-muted mt-2">We respond within 24 hours</p>
            </div>

            {/* Address */}
            <div className="card p-6 text-center md:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <FontAwesomeIcon icon={faLocationDot} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Address</h3>
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
              Location on Map
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              GPS Coordinates: {siteConfig.geo.lat}, {siteConfig.geo.lng}
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
              How to Get to the Cabin
            </h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCar} className="w-6 h-6" />
                  By Car
                </h3>
                <div className="space-y-3 text-text-light">
                  <p>
                    <strong>From Bucharest (approx. 170 km, 3 hours):</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>A1 Highway to Brașov exit</li>
                    <li>DN73A towards Fundata/Bran</li>
                    <li>Follow GPS directions to the cabin</li>
                    <li>Last section: 3km forest road (accessible year-round)</li>
                  </ul>
                  <p className="text-sm bg-primary/5 p-3 rounded-lg mt-4">
                    <strong>Important:</strong> The road is accessible with any type of vehicle.
                    In winter, we recommend winter tires/chains in case of heavy snowfall.
                  </p>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faBus} className="w-6 h-6" />
                  By Public Transport
                </h3>
                <div className="space-y-2 text-text-light">
                  <p>
                    <strong>Train:</strong> To Brașov station, then taxi/transfer (15 km,
                    ~20 min)
                  </p>
                  <p>
                    <strong>Bus:</strong> Regular routes Bucharest - Brașov, stop in the city center
                  </p>
                  <p className="text-sm text-text-muted mt-3">
                    * We can arrange transfer from the train/bus station upon request (additional cost)
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
              Follow us on social media
            </h2>
            <p className="text-lg text-text-light mb-8">
              Discover the latest updates, special offers and beautiful photos from the area
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
            Let's plan your stay!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If you have additional questions or want to book directly, we're just a phone call
            away
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezervari" className="btn-accent btn-lg">
              Booking Form
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
