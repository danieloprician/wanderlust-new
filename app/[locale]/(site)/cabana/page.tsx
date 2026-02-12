import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo/schema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faUsers, faHeart, faGift, faCheck } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = generatePageMetadata({
  title: 'About the Cabin - Amenities, Facilities and Story',
  description: `Discover ${siteConfig.name}: premium amenities, complete facilities, generous spaces and a unique story. Cabin for 8 people with hot tub, sauna and fireplace.`,
  path: '/cabana',
});

export const revalidate = 604800; // 1 week

export default function CabanaPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Cabin', path: '/cabana' },
  ];

  const amenities = [
    { category: 'Relaxation', items: ['Hot tub', 'Finnish sauna', 'Stone fireplace', 'Terrace with view'] },
    { category: 'Kitchen', items: ['Stove', 'Oven', 'Refrigerator', 'Dishwasher', 'Complete utensils', 'Coffee maker'] },
    { category: 'Bedrooms', items: ['3 bedrooms', 'Beds for 8 people', 'Premium linen', 'Spacious wardrobes'] },
    { category: 'Bathrooms', items: ['2 complete bathrooms', 'Hydromassage shower', 'Underfloor heating', 'Towels included'] },
    { category: 'Entertainment', items: ['Smart TV', 'High-speed WiFi', 'Audio system', 'Board games'] },
    { category: 'Outdoor', items: ['Barbecue', 'Garden furniture', 'Swings for children', 'Private parking', 'Play area'] },
  ];

  return (
    <>
      <JsonLd
        data={generateWebPageSchema(
          'About the Cabin - Amenities and Facilities',
          metadata.description as string,
          `${siteConfig.url}/cabana`,
          breadcrumbs
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
              About the Cabin
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              An authentic retreat with modern amenities in the heart of nature
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
                  Home
                </Link>
              </li>
              <li className="text-text-muted">/</li>
              <li className="text-text font-medium">Cabin</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-text-light space-y-4">
              <p>
                <strong>{siteConfig.name}</strong> was built with the idea of offering an
                authentic experience in nature, without compromising modern comfort. Located in
                the heart of {siteConfig.contact.region}, our cabin is the result of a passion
                for traditional Romanian architecture and the desire to create a space
                where people can reconnect with nature.
              </p>
              <p>
                Completely renovated in 2024, the cabin combines traditional elements - solid wood,
                natural stone, rustic fireplace - with the modern facilities necessary for a
                comfortable stay: central heating, WiFi, fully equipped kitchen.
              </p>
              <p>
                We are proud to offer our guests not just a place to stay, but a
                complete experience: the hot tub under the starry sky, the sauna after a day in the mountains,
                the peace of the forest and the clean mountain air.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Amenities & Facilities
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
            Room Layout
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Ground Floor</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Main Living:</span>
                  <span>Sofa bed, fireplace, smart TV, terrace access (35m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Kitchen:</span>
                  <span>Fully equipped, table for 8 people, bar (25m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Bathroom:</span>
                  <span>Shower, WC, sink, underfloor heating (6m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Bedroom 1:</span>
                  <span>Double bed, wardrobe, direct garden access (18m²)</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">First Floor</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Bedroom 2:</span>
                  <span>Double bed, desk, balcony with view (20m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Bedroom 3:</span>
                  <span>2 bunk beds, children's play area (16m²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Bathroom:</span>
                  <span>Bathtub, WC, sink, washing machine (7m²)</span>
                </li>
              </ul>
            </div>

            <div className="card p-6 bg-primary/5">
              <h3 className="text-2xl font-semibold text-primary mb-4">Outdoor</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Hot Tub:</span>
                  <span>Wood-heated, capacity 6 people</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Sauna:</span>
                  <span>Finnish, capacity 4 people, changing rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Barbecue:</span>
                  <span>Covered area, outdoor table, chairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-accent min-w-[140px]">Garden:</span>
                  <span>500m², swings, children's playhouse, parking for 3 cars</span>
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
            Who is the cabin perfect for?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faUserGroup} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Families with Children</h3>
              <p className="text-text-light">
                Spacious area, safe yard, games for children and complete facilities for
                the comfort of the whole family.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faUsers} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Groups of Friends</h3>
              <p className="text-text-light">
                Perfect for reunions, relaxing weekends or private parties in nature.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faHeart} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Romantic Couples</h3>
              <p className="text-text-light">
                Intimacy, peace, hot tub under the stars and spectacular sunsets for
                unforgettable moments.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-primary">
                <FontAwesomeIcon icon={faGift} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Special Events</h3>
              <p className="text-text-light">
                Birthdays, marriage proposals, team-building or celebrations in a private and
                exclusive setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Convinced? Book now!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let someone else take your perfect weekend. Check availability and
            book today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rezervari" className="btn-accent btn-lg">
              Check Availability
            </Link>
            <Link
              href="/galerie"
              className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              See More Photos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
