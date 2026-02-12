import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';
import { JsonLd, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Întrebări Frecvente (FAQ) - Tot Ce Trebuie Să Știi',
  description: `Răspunsuri la întrebările frecvente despre ${siteConfig.name}: politici de rezervare, facilități, check-in/out, animale de companie, anulări și multe altele.`,
  path: '/faq',
});

export const revalidate = 604800; // 1 week

const faqs = [
  {
    question: 'Care este capacitatea maximă a cabanei?',
    answer:
      'Cabana poate găzdui până la 8 persoane. Avem 3 dormitoare cu paturi pentru 6 persoane + o canapea extensibilă în living pentru cazuri excepționale.',
  },
  {
    question: 'Care este politica de check-in și check-out?',
    answer: `Check-in: ${siteConfig.booking.checkInTime}. Check-out: ${siteConfig.booking.checkOutTime}. Pentru check-in târziu sau check-out prelungit, vă rugăm să ne contactați în avans - vom încerca să vă acomodăm cererile în funcție de disponibilitate.`,
  },
  {
    question: 'Sunt acceptate animale de companie?',
    answer:
      'Nu, din păcate nu acceptăm animale de companie. Această măsură este luată pentru confortul tuturor oaspeților, inclusiv a celor cu alergii.',
  },
  {
    question: 'Există parcare disponibilă?',
    answer:
      'Da, avem parcare privată gratuită pentru până la 3 mașini, în curtea cabanei. Parcarea este pavată și iluminată noaptea.',
  },
  {
    question: 'Ciubarul și sauna sunt incluse în preț?',
    answer:
      'Da, atât ciubarul cu apă caldă cât și sauna finlandeză sunt incluse în prețul cazării. Lemnele pentru încălzirea ciubarului sunt de asemenea incluse. Îți vom arăta cum să le folosești la check-in.',
  },
  {
    question: 'Este disponibil WiFi?',
    answer:
      'Da, oferim WiFi gratuit de mare viteză în toată cabana. Viteza este suficientă pentru streaming, videoconferințe și muncă remote.',
  },
  {
    question: 'Cum este accesul la cabană iarna?',
    answer:
      'Drumul către cabană este accesibil tot anul. Iarna, în caz de ninsoare abundentă, recomandăm să aveți cauciucuri de iarnă. Ultimul kilometru este pe drum forestier, dar acesta este întreținut regulat.',
  },
  {
    question: 'Bucătăria este echipată complet?',
    answer:
      'Da, bucătăria este complet utilată cu aragaz, cuptor, frigider, mașină de spălat vase, cafetieră, fierbător, ustensile de gătit și tacâmuri. Nu trebuie să aduci decât alimentele.',
  },
  {
    question: 'Care este politica de anulare?',
    answer:
      'Anulare cu 30+ zile înainte: rambursare 100%. Anulare cu 15-29 zile înainte: rambursare 50%. Anulare cu mai puțin de 14 zile: fără rambursare. În cazuri de forță majoră, politica poate fi renegociată.',
  },
  {
    question: 'Ce atracții turistice sunt în apropiere?',
    answer: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span>🏞️</span> Natură & Peisaje
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li><strong>Valea Avrigului</strong> – zonă turistică ce se întinde de-a lungul râului Avrig, cu cabane, pensiuni și peisaje montane liniștite</li>
            <li><strong>Poiana Neamțului</strong> – punct final al văii și loc de plecare pe trasee montane spre Bârcaciu, Suru, Lacul Avrig</li>
            <li><strong>Lacul Avrig</strong> (2011 m alt.) – lac glaciar spectaculos, unul dintre cele mai frumoase din Munții Făgăraș</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span>🥾</span> Trasee Montane
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li>Avrig → Izvorul Florii → Suru → Lacul Avrig → Negoiu → Bâlea</li>
            <li>Poiana Neamțului → Cabana Bârcaciu → Lacul Avrig → Suru</li>
            <li>Trasee spre vârfuri: Negoiu (2535m), Suru (2281m), Budislavu (2345m), Ciortea (2426m), Scara (2213m)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span>🏛️</span> Obiective Culturale & Istorice (în Avrig)
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li><strong>Palatul Brukenthal</strong> – palat baroc cu parc, alei și zone istorice</li>
            <li><strong>Muzeul Avrig</strong> – colecții de artă populară, sticlărie, expoziții Gheorghe Lazăr</li>
            <li><strong>Casa memorială „Gheorghe Lazăr"</strong></li>
            <li><strong>Biserica Evanghelică</strong> (1265–1295) – cel mai vechi monument din Avrig</li>
            <li><strong>Biserica Ortodoxă</strong> (1762) – picturi valoroase realizate de meșterii Ionașcu și Pană</li>
            <li><strong>Mănăstirea Cisterciană Cârța</strong> – ansamblu gotic medieval în ruină, foarte cunoscut. (sec. XIX)</li>
            <li><strong>Povestea Calendarului</strong> – parc tematic cu 12 căsuțe inspirate din calendarul tradițional</li>
            <li><strong>Castelul de Lut – Valea Zânelor</strong> – una dintre cele mai fotografiate destinații din România</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span>🐎</span> Activități Recreative
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li>Drumeții pe trasee marcate</li>
            <li>Ture cu biciclete electrice</li>
            <li>Ședințe de echitație</li>
            <li>Piscine în aer liber</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <span>🎠</span> Atracții Moderne / Parcuri
          </h4>
          <ul className="space-y-1 ml-6 list-disc">
            <li><strong>Brambura Park & Casa Întoarsă</strong> – atracție pentru familii</li>
            <li><strong>Panoramic Park & Viking Village</strong> – parc tematic</li>
            <li><strong>Poiana Neamțului – Ferma de Cerbi</strong></li>
          </ul>
        </div>
      </div>
    ) as any,
  },
  {
    question: 'Trebuie să aduc lenjerie de pat și prosoape?',
    answer:
      'Nu, lenjeriile de pat și prosoapele sunt incluse în preț și sunt puse la dispoziție pentru fiecare oaspete. Dacă ai nevoie de prosoape suplimentare pentru ciubar/saună, te rugăm să ne anunți.',
  },
  {
    question: 'Există magazine sau restaurante în apropiere?',
    answer:
      'Cel mai apropiat magazin alimentar este la 5 km (10 minute cu mașina). În {{CITY}} (15 km) găsiți supermarketuri și restaurante. Recomandăm să vă aprovizionați înainte de a ajunge la cabană.',
  },
  {
    question: 'Pot organiza un eveniment privat (aniversare, petrecere)?',
    answer:
      'Da, cabana este perfectă pentru evenimente private mici (până la 8 persoane). Pentru evenimente mai mari sau cu muzică puternică după ora 22:00, vă rugăm să ne contactați în avans pentru a discuta detaliile.',
  },
  {
    question: 'Este posibilă plata cu cardul?',
    answer:
      'Da, acceptăm plata cu cardul la check-in. De asemenea, puteți face transfer bancar (IBAN furnizat la confirmare). Un avans de 30% este necesar pentru confirmarea rezervării.',
  },
  {
    question: 'Există semnal telefonic?',
    answer:
      'Da, există semnal pentru principalele rețele (Orange, Vodafone, Telekom). Intensitatea semnalului poate varia în funcție de operator. WiFi-ul este disponibil ca alternativă pentru comunicare.',
  },
];

export default function FAQPage() {
  const breadcrumbs = [
    { name: 'Acasă', path: '/' },
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
            Întrebări Frecvente
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tot ce trebuie să știi despre cabană, facilități și rezervări
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
              Încă Mai Ai Întrebări?
            </h2>
            <p className="text-text-light mb-8">
              Nu ai găsit răspunsul pe care îl căutai? Contactează-ne direct și vom fi bucuroși să
              te ajutăm!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contactează-ne
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="btn-outline"
              >
                Trimite email
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
              Link-uri Utile
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/cabana" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Despre Cabană</h3>
                <p className="text-sm text-text-muted">
                  Dotări, facilități și plan camere
                </p>
              </Link>
              <Link href="/tarife" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Tarife & Politici</h3>
                <p className="text-sm text-text-muted">
                  Prețuri, reduceri și politici de anulare
                </p>
              </Link>
              <Link href="/rezervari" className="card-hover p-6 text-center">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Rezervări</h3>
                <p className="text-sm text-text-muted">
                  Formular de rezervare online
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
