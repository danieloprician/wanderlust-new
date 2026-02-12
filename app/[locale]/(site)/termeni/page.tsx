import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Termeni și Condiții',
  description: `Termeni și condiții de utilizare și rezervare pentru ${siteConfig.name}.`,
  path: '/termeni',
  noIndex: true,
});

export default function TermeniPage() {
  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Termeni și Condiții
          </h1>
        </div>
      </section>

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
              <li className="text-text font-medium">Termeni și Condiții</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-text-muted"><em>Ultima actualizare: februarie 2026</em></p>

            <h2>1. Acceptarea Termenilor</h2>
            <p>
              Prin utilizarea website-ului {siteConfig.name} și/sau efectuarea unei rezervări,
              sunteți de acord cu acești termeni și condiții. Dacă nu sunteți de acord cu oricare
              dintre termeni, vă rugăm să nu folosiți acest site.
            </p>

            <h2>2. Rezervări și Plăți</h2>
            <h3>2.1 Proces de Rezervare</h3>
            <p>
              Toate rezervările se fac prin formularul online sau prin contact direct (telefon/email).
              Rezervarea este confirmată doar după plata avansului de 30% și primirea confirmării scrise.
            </p>

            <h3>2.2 Metode de Plată</h3>
            <p>
              Acceptăm: transfer bancar, card bancar (la check-in), numerar (la check-in).
              Plata integrală se face cu cel puțin 7 zile înainte de check-in sau la sosire.
            </p>

            <h3>2.3 Depozit de Garanție</h3>
            <p>
              Este necesar un depozit de garanție de 500 RON pentru acoperirea eventualelor daune.
              Acesta va fi returnat integral în maximum 7 zile după check-out, dacă nu există daune.
            </p>

            <h2>3. Politica de Anulare</h2>
            <ul>
              <li><strong>30+ zile înainte:</strong> Rambursare 100%</li>
              <li><strong>15-29 zile înainte:</strong> Rambursare 50%</li>
              <li><strong>Mai puțin de 14 zile:</strong> Fără rambursare</li>
            </ul>
            <p>
              În cazuri de forță majoră documentate (boală gravă, accident etc.), politica poate
              fi renegociată.
            </p>

            <h2>4. Check-in și Check-out</h2>
            <p>
              Check-in: {siteConfig.booking.checkInTime}<br />
              Check-out: {siteConfig.booking.checkOutTime}
            </p>
            <p>
              Check-in târziu sau check-out prelungit pot fi aranjate în prealabil, în funcție de
              disponibilitate.
            </p>

            <h2>5. Reguli de Utilizare</h2>
            <h3>5.1 Capacitate</h3>
            <p>
              Numărul maxim de oaspeți este 8 persoane. Orice oaspete suplimentar trebuie declarat
              și aprobat în prealabil.
            </p>

            <h3>5.2 Comportament</h3>
            <p>
              Oaspeții sunt rugați să respecte liniștea vecinilor (zgomot moderat după ora 22:00),
              să trateze proprietatea cu grijă și să urmeze instrucțiunile de utilizare a
              echipamentelor.
            </p>

            <h3>5.3 Fumat și Animale</h3>
            <p>
              Fumatul este permis doar în exterior. Animalele de companie nu sunt acceptate.
            </p>

            <h3>5.4 Daune</h3>
            <p>
              Oaspeții sunt responsabili pentru orice daune cauzate proprietății în timpul
              sejurului. Costul reparațiilor va fi dedus din depozitul de garanție sau facturat
              separat.
            </p>

            <h2>6. Responsabilități</h2>
            <p>
              Proprietarul nu își asumă răspunderea pentru:
            </p>
            <ul>
              <li>Daune, pierderi sau răni suferite de oaspeți pe proprietate</li>
              <li>Bunuri personale pierdute sau furate</li>
              <li>Întreruperi ale serviciilor publice (curent, apă, internet) din cauze independente</li>
            </ul>

            <h2>7. Forță Majoră</h2>
            <p>
              În cazul unor evenimente de forță majoră (calamități naturale, pandemii, restricții
              guvernamentale), ambele părți pot anula sau reprograma rezervarea fără penalități.
            </p>

            <h2>8. Confidențialitate</h2>
            <p>
              Datele personale sunt colectate și procesate conform{' '}
              <Link href="/politica-confidentialitate" className="text-primary hover:text-accent underline">
                Politicii de Confidențialitate
              </Link>.
            </p>

            <h2>9. Modificări ale Termenilor</h2>
            <p>
              Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor
              fi publicate pe această pagină cu o dată de actualizare.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pentru întrebări despre acești termeni, vă rugăm să ne contactați:
            </p>
            <p>
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-accent">
                {siteConfig.contact.email}
              </a><br />
              Telefon: <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:text-accent">
                {siteConfig.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
