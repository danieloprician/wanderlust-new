/**
 * JSON-LD Schema Helpers
 * https://schema.org/
 */

import { siteConfig } from './config';

/**
 * LodgingBusiness Schema
 * https://schema.org/LodgingBusiness
 */
export function generateLodgingBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,

    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: siteConfig.contact.country,
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },

    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,

    priceRange: siteConfig.pricing.priceRange,
    currenciesAccepted: siteConfig.pricing.currency,
    paymentAccepted: 'Cash, Card, Bank Transfer',

    checkinTime: siteConfig.booking.checkInTime,
    checkoutTime: siteConfig.booking.checkOutTime,

    amenityFeature: siteConfig.amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
      value: true,
    })),

    starRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },

    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ].filter(Boolean),

    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

/**
 * BreadcrumbList Schema
 * https://schema.org/BreadcrumbList
 */
export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/**
 * FAQPage Schema
 * https://schema.org/FAQPage
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * AggregateRating Schema
 * https://schema.org/AggregateRating
 */
export function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating: number = 5
) {
  return {
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating,
  };
}

/**
 * ImageObject Schema
 * https://schema.org/ImageObject
 */
export function generateImageObjectSchema(
  url: string,
  alt: string,
  width?: number,
  height?: number
) {
  return {
    '@type': 'ImageObject',
    url,
    name: alt,
    ...(width && { width }),
    ...(height && { height }),
  };
}

/**
 * Place Schema (pentru local SEO)
 * https://schema.org/Place
 */
export function generatePlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: siteConfig.name,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
  };
}

/**
 * WebPage Schema
 * https://schema.org/WebPage
 */
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string,
  breadcrumbs?: { name: string; path: string }[],
  locale: string = 'ro'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    ...(breadcrumbs && {
      breadcrumb: generateBreadcrumbSchema(breadcrumbs),
    }),
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/**
 * Helper to inject JSON-LD into page
 */
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
