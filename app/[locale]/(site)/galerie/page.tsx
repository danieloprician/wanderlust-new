import { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema } from '@/lib/seo/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Photo Gallery - Cabin Images, Interior, Exterior',
  description: `Complete photo gallery of ${siteConfig.name}. See images of the interior, exterior, hot tub, sauna, area landscapes and cabin facilities.`,
  path: '/galerie',
});

export const revalidate = 604800; // 1 week

export default function GaleriePage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/galerie' },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the beauty and comfort of our cabin through images
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
              <li className="text-text font-medium">Gallery</li>
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
              All images are authentic
            </h2>
            <p className="text-text-light mb-6">
              The photographs shown in the gallery are 100% authentic and reflect the reality
              of the cabin and surrounding area. We don't use filters or excessive editing - what
              you see is exactly what you'll find when you arrive here.
            </p>
            <p className="text-text-light mb-8">
              If you have questions about any aspect of the cabin or want more details,
              don't hesitate to contact us. We're happy to provide any additional information!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rezervari" className="btn-accent">
                Book Now
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
