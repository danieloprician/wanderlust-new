/**
 * SEO Configuration & Brand Constants
 */

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Wanderlust Cottage',
  tagline: '{{TAGLINE}}',
  description:
    'Cabană de închiriat în {{REGION}}, {{COUNTRY}}. Cazare perfectă pentru weekenduri la munte, vacanțe în natură și evenimente speciale. Dotări premium: ciubar, saună, semineu.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  locale: 'ro_RO',
  alternateLocale: 'en_US', // Pentru i18n viitor

  // Contact
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '0749140519',
    email: process.env.NEXT_PUBLIC_EMAIL || 'office@wanderlust-cottage.com',
    address: process.env.NEXT_PUBLIC_ADDRESS || 'Valea Avrigului 177A',
    city: process.env.NEXT_PUBLIC_CITY || 'Avrig',
    region: process.env.NEXT_PUBLIC_REGION || 'Sibiu',
    country: process.env.NEXT_PUBLIC_COUNTRY || 'România',
    postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE || '555200',
  },

  // Geo
  geo: {
    lat: parseFloat(process.env.NEXT_PUBLIC_LAT || '45.690617932401494'),
    lng: parseFloat(process.env.NEXT_PUBLIC_LNG || '24.443501425822152'),
  },

  // Social
  social: {
    facebook: process.env.NEXT_PUBLIC_FB_URL || 'https://www.facebook.com/profile.php?id=61557338263006',
    instagram: process.env.NEXT_PUBLIC_IG_URL || 'https://www.instagram.com/wanderlust_cottage_avrig',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || 'https://www.tiktok.com/@yourprofile',
    booking: process.env.NEXT_PUBLIC_BOOKING_URL || 'https://www.booking.com/hotel/ro/wanderlust-cottage-avrig.ro.html?aid=304142&label=gen173nr-10CAsowAFCDHlvdXJwcm9wZXJ0eUgzWARowAGIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AtWstMwGwAIB0gIkZmYwMWNmZGYtYWMxMC00ODJmLWE5MzUtYWY2M2Q3YjM0YjFm2AIB4AIB&sid=afa784f0db7942dedc0ab2a4663f0e41&dest_id=11986837&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1770854004&srpvid=a803a7f6437e005d&type=total&ucfs=1&',
    airbnb: process.env.NEXT_PUBLIC_AIRBNB_URL || 'https://www.airbnb.com.ro/rooms/1155126808745549348?check_in=2026-03-27&check_out=2026-03-29&search_mode=regular_search&source_impression_id=p3_1770921510_P3ljcZi6vYLtzHRs&previous_page_section_name=1000&federated_search_id=a8f3b413-d0cd-44b1-b73b-ad6607be9a6c',
  },

  // Analytics & Tracking
  analytics: {
    // Google Analytics 4
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    // Google Tag Manager
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
    // Meta Pixel (Facebook)
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
    // TikTok Pixel
    tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '',
  },

  // Booking
  booking: {
    checkInTime: '15:00',
    checkOutTime: '11:00',
    minNights: 2,
    maxGuests: 6,
  },

  // Pricing
  pricing: {
    currency: 'RON',
    priceRange: '$$',
    lowSeason: '400-500',
    highSeason: '600-800',
  },

  // Amenities (pentru schema.org)
  amenities: [
    'Ciubar',
    'Saună',
    'Semineu',
    'WiFi gratuit',
    'Parcare gratuită',
    'Bucătărie complet utilată',
    'Grătar',
    'Terasă',
    'Grădină',
    'Spațiu pentru copii',
  ],

  // SEO Keywords
  keywords: [
    // Romanian
    'cabana de inchiriat {{REGION}}',
    'cazare la munte {{REGION}}',
    'cabana cu ciubar {{CITY}}',
    'cabana cu sauna',
    'weekend la munte',
    'cazare familie montagna',    
    'inchiriere cabana',
    // English
    'cabin rental {{REGION}}',
    'mountain accommodation {{REGION}}',
    'cabin with hot tub {{CITY}}',
    'mountain weekend getaway',
    'family cabin rental',
    'Romania mountain cabin',
    'Transylvania cabin',
    'cottage rental {{REGION}}',
    'nature retreat Romania',
    'cabana de inchiriat Transilvania',
  ],

  // Open Graph & Social Sharing
  ogImage: '/images/og-image.jpg',
  ogImageAlt: 'Wanderlust Cottage - Cabană autentică în munții {{REGION}}',
  ogType: 'website',
  
  // Additional OG Images for different platforms
  images: {
    og: '/images/og-image.jpg', // 1200x630 for Facebook/LinkedIn
    twitter: '/images/twitter-card.jpg', // 1200x600 for Twitter
    square: '/images/og-square.jpg', // 1:1 for WhatsApp/Instagram
  },
  
  // Social Media
  twitterHandle: '@wanderlust_cottage',
  twitterCard: 'summary_large_image',
  
  // App Icons & Favicons
  icons: {
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
    icon32: '/favicon-32x32.png',
    icon16: '/favicon-16x16.png',
  },
};

/**
 * Generate page metadata
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.images.og;
  const imageAlt = siteConfig.ogImageAlt.replace('{{REGION}}', siteConfig.contact.region);

  return {
    title,
    description,
    keywords: siteConfig.keywords,

    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),

    alternates: {
      canonical: url,
      languages: {
        'ro-RO': `${siteConfig.url}/ro${path}`,
        'en-US': `${siteConfig.url}/en${path}`,
      },
    },

    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },

    openGraph: {
      type: siteConfig.ogType as 'website',
      locale: siteConfig.locale,
      alternateLocale: [siteConfig.alternateLocale],
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
        {
          url: siteConfig.images.square,
          width: 800,
          height: 800,
          alt: imageAlt,
        },
      ],
    },

    twitter: {
      card: siteConfig.twitterCard as 'summary_large_image',
      title,
      description,
      images: [siteConfig.images.twitter],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },

    other: {
      'geo.region': `${siteConfig.contact.country}-${siteConfig.contact.region}`,
      'geo.placename': siteConfig.contact.city,
      'geo.position': `${siteConfig.geo.lat};${siteConfig.geo.lng}`,
      ICBM: `${siteConfig.geo.lat}, ${siteConfig.geo.lng}`,
    },
  };
}
