import Link from 'next/link';
import { siteConfig } from '@/lib/seo/config';

const footerLinks = {
  explorare: [
    { name: 'Cabana', href: '/cabana' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Tarife', href: '/tarife' },
    { name: 'Rezervări', href: '/rezervari' },
  ],
  informatii: [
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Termeni și condiții', href: '/termeni' },
    { name: 'Politica de confidențialitate', href: '/politica-confidentialitate' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-serif font-bold text-white">
                  {siteConfig.name}
                </span>
              </Link>
              <p className="text-white/80 mb-4 leading-relaxed">
                {siteConfig.tagline}
              </p>
              <p className="text-sm text-white/70 mb-6">
                Cabană de închiriat în {siteConfig.contact.region},{' '}
                {siteConfig.contact.country}. Experiență unică în natură, cu dotări premium
                pentru confortul tău.
              </p>

              {/* NAP - Local SEO */}
              <address className="not-italic text-sm text-white/80 space-y-2">
                <p>
                  <strong>Adresă:</strong> {siteConfig.contact.address},{' '}
                  {siteConfig.contact.city}, {siteConfig.contact.region}
                </p>
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </address>
            </div>

            {/* Explorare */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explorare</h3>
              <ul className="space-y-2">
                {footerLinks.explorare.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informații */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Informații</h3>
              <ul className="space-y-2">
                {footerLinks.informatii.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">Urmărește-ne</h4>
                <div className="flex space-x-4">
                  {siteConfig.social.facebook && (
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.social.tiktok && (
                    <a
                      href={siteConfig.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>
              &copy; {currentYear} {siteConfig.name}. Toate drepturile rezervate.
            </p>
            <p className="mt-2 md:mt-0">
              Dezvoltat cu ❤️ pentru experiențe unice în natură
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
