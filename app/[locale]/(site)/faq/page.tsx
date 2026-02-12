import { Metadata } from 'next';
import Link from 'next/link';
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

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions (FAQ) - Everything You Need to Know',
  description: `Answers to frequently asked questions about ${siteConfig.name}: booking policies, facilities, check-in/out, pets, cancellations and much more.`,
  path: '/faq',
});

export const revalidate = 604800; // 1 week

const faqs = [
  {
    question: 'What is the maximum capacity of the cabin?',
    answer:
      'The cabin can accommodate up to 8 people. We have 3 bedrooms with beds for 6 people + a sofa bed in the living room for exceptional cases.',
  },
  {
    question: 'What is the check-in and check-out policy?',
    answer: `Check-in: ${siteConfig.booking.checkInTime}. Check-out: ${siteConfig.booking.checkOutTime}. For late check-in or extended check-out, please contact us in advance - we will try to accommodate your requests based on availability.`,
  },
  {
    question: 'Are pets allowed?',
    answer:
      'No, unfortunately we do not accept pets. This measure is taken for the comfort of all guests, including those with allergies.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Yes, we have free private parking for up to 3 cars in the cabin yard. The parking is paved and lit at night.',
  },
  {
    question: 'Are the hot tub and sauna included in the price?',
    answer:
      'Yes, both the hot tub and Finnish sauna are included in the accommodation price. Firewood for heating the hot tub is also included. We will show you how to use them at check-in.',
  },
  {
    question: 'Is WiFi available?',
    answer:
      'Yes, we offer free high-speed WiFi throughout the cabin. The speed is sufficient for streaming, video conferencing and remote work.',
  },
  {
    question: 'How is access to the cabin in winter?',
    answer:
      'The road to the cabin is accessible year-round. In winter, in case of heavy snowfall, we recommend having winter tires. The last kilometer is on a forest road, but it is regularly maintained.',
  },
  {
    question: 'Is the kitchen fully equipped?',
    answer:
      'Yes, the kitchen is fully equipped with stove, oven, refrigerator, dishwasher, coffee maker, kettle, cooking utensils and cutlery. You only need to bring food.',
  },  
  {
    question: 'Ce atracții turistice sunt în apropiere?',
    answer: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span><FontAwesomeIcon icon={faMountain} className="text-primary" /></span> Nature & Landscapes
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li><strong>Avrig Valley</strong> – tourist area stretching along the Avrig River, with cabins, guesthouses and peaceful mountain landscapes</li>
            <li><strong>Poiana Neamțului</strong> – end point of the valley and starting place for mountain trails to Bârcaciu, Suru, Lake Avrig</li>
            <li><strong>Lake Avrig</strong> (2011 m alt.) – spectacular glacial lake, one of the most beautiful in the Făgăraș Mountains</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span><FontAwesomeIcon icon={faPersonHiking} className="text-primary" /></span> Mountain Trails
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li>Avrig → Izvorul Florii → Suru → Lake Avrig → Negoiu → Bâlea</li>
            <li>Poiana Neamțului → Bârcaciu Cabin → Lake Avrig → Suru</li>
            <li>Trails to peaks: Negoiu (2535m), Suru (2281m), Budislavu (2345m), Ciortea (2426m), Scara (2213m)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span><FontAwesomeIcon icon={faLandmark} className="text-primary" /></span> Cultural & Historical Sites (in Avrig)
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li><strong>Brukenthal Palace</strong> – baroque palace with park, alleys and historical areas</li>
            <li><strong>Avrig Museum</strong> – collections of folk art, glassware, Gheorghe Lazăr exhibitions</li>
            <li><strong>"Gheorghe Lazăr" Memorial House</strong></li>
            <li><strong>Evangelical Church</strong> (1265–1295) – the oldest monument in Avrig</li>
            <li><strong>Orthodox Church</strong> (1762) – valuable paintings by masters Ionașcu and Pană</li>
            <li><strong>Cârța Cistercian Monastery</strong> – ruined medieval Gothic ensemble, very well known (19th century)</li>
            <li><strong>The Calendar Story</strong> – theme park with 12 houses inspired by the traditional calendar</li>
            <li><strong>Clay Castle – Fairy Valley</strong> – one of the most photographed destinations in Romania</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span><FontAwesomeIcon icon={faHorse} className="text-primary" /></span> Recreational Activities
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li>Hiking on marked trails</li>
            <li>Electric bike tours</li>
            <li>Horse riding sessions</li>
            <li>Outdoor swimming pools</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span><FontAwesomeIcon icon={faChildren} className="text-primary" /></span> Modern Attractions / Parks
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li><strong>Brambura Park & Upside Down House</strong> – family attraction</li>
            <li><strong>Panoramic Park & Viking Village</strong> – theme park</li>
            <li><strong>Poiana Neamțului – Deer Farm</strong></li>
          </ul>
        </div>
      </div>
    ) as any,
  },
  {
    question: 'Do I need to bring bed linen and towels?',
    answer:
      'No, bed linen and towels are included in the price and are provided for each guest. If you need extra towels for the hot tub/sauna, please let us know.',
  },
  {
    question: 'Are there shops or restaurants nearby?',
    answer:
       `The nearest restaurant, Popasul Montan, is 3 minutes away by car or 5 min to Ghiocelul restaurant. In ${siteConfig.contact.city} (7.5 km) you will find supermarkets, stores and butcher shops. We recommend stocking up before arriving at the cabin.`,
  },
  {
    question: 'Is there phone signal?',
    answer:
      'Yes, there is signal for major networks (Orange, Vodafone, Telekom). Signal strength may vary depending on the operator. WiFi is available as an alternative for communication.',
  },
];

export default function FAQPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to know about the cabin, facilities and bookings
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
              <li className="text-text font-medium">FAQ</li>
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
              Still Have Questions?
            </h2>
            <p className="text-text-light mb-8">
              Didn't find the answer you were looking for? Contact us directly and we'll be happy to
              help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="btn-outline"
              >
                Send Email
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
              Useful Links
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/cabana" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-lg font-semibold text-primary mb-2">About the Cabin</h3>
                <p className="text-sm text-text-muted">
                  Amenities, facilities and room layout
                </p>
              </Link>
              <Link href="/tarife" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Rates & Policies</h3>
                <p className="text-sm text-text-muted">
                  Prices, discounts and cancellation policies
                </p>
              </Link>
              <Link href="/rezervari" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Bookings</h3>
                <p className="text-sm text-text-muted">
                  Online booking form
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
