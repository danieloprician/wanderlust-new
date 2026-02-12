import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@/lib/seo/config';

export const metadata: Metadata = generatePageMetadata({
  title: 'Politica de Confidențialitate',
  description: `Politica de confidențialitate și protecție a datelor personale pentru ${siteConfig.name}.`,
  path: '/politica-confidentialitate',
  noIndex: true,
});

export default function PoliticaConfidentialitatePage() {
  return (
    <>
      <section className="section bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Politica de Confidențialitate
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
              <li className="text-text font-medium">Politica de Confidențialitate</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-text-muted"><em>Ultima actualizare: februarie 2026</em></p>

            <h2>1. Introducere</h2>
            <p>
              {siteConfig.name} respectă confidențialitatea vizitatorilor și clienților săi.
              Această politică explică ce date personale colectăm, cum le folosim și cum le protejăm,
              în conformitate cu GDPR (Regulamentul General privind Protecția Datelor).
            </p>

            <h2>2. Ce Date Colectăm</h2>
            <h3>2.1 Date Furnizate Direct de Dvs.</h3>
            <p>Când faceți o rezervare sau ne contactați, colectăm:</p>
            <ul>
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Date despre sejur (check-in, check-out, număr de persoane)</li>
              <li>Preferințe și cerințe speciale (opțional)</li>
            </ul>

            <h3>2.2 Date Colectate Automat</h3>
            <p>Când vizitați site-ul nostru, colectăm automat:</p>
            <ul>
              <li>Adresa IP</li>
              <li>Tipul de browser și device</li>
              <li>Paginile vizitate și durata vizitei</li>
              <li>Informații despre cum ați ajuns pe site (referrer)</li>
            </ul>

            <h2>3. Cum Folosim Datele</h2>
            <p>Folosim datele dumneavoastră personale pentru:</p>
            <ul>
              <li>Procesarea și confirmarea rezervărilor</li>
              <li>Comunicare cu dumneavoastră (email, telefon, SMS)</li>
              <li>Îmbunătățirea serviciilor și a experienței pe site</li>
              <li>Trimiterea de oferte și promoții (doar dacă ați consimțit)</li>
              <li>Respectarea obligațiilor legale (contabilitate, fiscalitate)</li>
            </ul>

            <h2>4. Baza Legală a Prelucrării</h2>
            <p>Prelucrăm datele dumneavoastră pe baza:</p>
            <ul>
              <li><strong>Contractului:</strong> Pentru executarea rezervării</li>
              <li><strong>Consimțământului:</strong> Pentru marketing și newsletter</li>
              <li><strong>Interesului legitim:</strong> Pentru îmbunătățirea serviciilor</li>
              <li><strong>Obligației legale:</strong> Pentru conformitate fiscală</li>
            </ul>

            <h2>5. Partajarea Datelor</h2>
            <p>
              Nu vindem datele dumneavoastră către terți. Le partajăm doar cu:
            </p>
            <ul>
              <li><strong>Furnizori de servicii:</strong> Hosting, email, procesare plăți
                (care respectă GDPR)</li>
              <li><strong>Autorități:</strong> Când este cerut legal</li>
            </ul>

            <h2>6. Cookies și Tehnologii Similar</h2>
            <p>
              Site-ul folosește cookies pentru:
            </p>
            <ul>
              <li><strong>Cookies esențiale:</strong> Funcționare site (nu pot fi dezactivate)</li>
              <li><strong>Cookies analitice:</strong> Google Analytics (opțional, cu consimțământ)</li>
              <li><strong>Cookies marketing:</strong> Facebook Pixel, Google Ads (opțional)</li>
            </ul>
            <p>
              Puteți gestiona preferințele pentru cookies din browser-ul dumneavoastră.
            </p>

            <h2>7. Securitatea Datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice pentru protejarea datelor:
            </p>
            <ul>
              <li>Criptare SSL/TLS pentru transmiterea datelor</li>
              <li>Acces restricționat la date (doar personal autorizat)</li>
              <li>Backup-uri regulate și securizate</li>
              <li>Formare regulată a personalului în GDPR</li>
            </ul>

            <h2>8. Perioada de Stocare</h2>
            <ul>
              <li><strong>Date de rezervare:</strong> 5 ani (obligații contabile)</li>
              <li><strong>Marketing/newsletter:</strong> Până la retragerea consimțământului</li>
              <li><strong>Date analitice:</strong> 14-26 luni (Google Analytics)</li>
            </ul>

            <h2>9. Drepturile Dumneavoastră (GDPR)</h2>
            <p>Aveți dreptul de a:</p>
            <ul>
              <li><strong>Accesa</strong> datele dumneavoastră personale</li>
              <li><strong>Rectifica</strong> date inexacte sau incomplete</li>
              <li><strong>Șterge</strong> datele ("dreptul de a fi uitat")</li>
              <li><strong>Restricționa</strong> prelucrarea</li>
              <li><strong>Opune-vă</strong> prelucrării (ex: marketing)</li>
              <li><strong>Portabilitatea</strong> datelor</li>
              <li><strong>Retrage consimțământul</strong> în orice moment</li>
            </ul>
            <p>
              Pentru exercitarea acestor drepturi, contactați-ne la{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-accent">
                {siteConfig.contact.email}
              </a>.
            </p>

            <h2>10. Transferul Datelor în Afara UE</h2>
            <p>
              Unii furnizori de servicii (ex: Google Analytics) pot transfera date în afara UE.
              Ne asigurăm că acești furnizori respectă standardele de protecție adecvate (ex:
              Privacy Shield, SCC).
            </p>

            <h2>11. Minori</h2>
            <p>
              Site-ul nu este destinat persoanelor sub 18 ani. Nu colectăm cu bună știință date
              de la minori fără consimțământul părinților.
            </p>

            <h2>12. Modificări ale Politicii</h2>
            <p>
              Ne rezervăm dreptul de a actualiza această politică. Modificările vor fi publicate
              pe această pagină cu dată actualizării. Vă încurajăm să revedeți periodic această
              politică.
            </p>

            <h2>13. Contact & Reclamații</h2>
            <p>
              Pentru întrebări despre această politică sau exercitarea drepturilor GDPR:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-accent">
                {siteConfig.contact.email}
              </a><br />
              <strong>Telefon:</strong>{' '}
              <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:text-accent">
                {siteConfig.contact.phone}
              </a>
            </p>
            <p>
              Aveți dreptul să depuneți o plângere la Autoritatea Națională de Supraveghere a
              Prelucrării Datelor cu Caracter Personal (ANSPDCP) dacă considerați că drepturile
              dumneavoastră nu sunt respectate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
