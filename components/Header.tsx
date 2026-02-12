'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/seo/config';

const navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'Cabana', href: '/cabana' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Tarife', href: '/tarife' },
  { name: 'Rezervări', href: '/rezervari' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Sari la conținut
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-surface/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="container-custom" aria-label="Navigare principală">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 text-2xl font-serif font-bold text-primary hover:text-accent transition-colors"
            >
              <div className="relative w-[110px] h-[110px] flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={`${siteConfig.name} Logo`}
                  width={150}
                  height={150}
                  className="rounded-lg object-contain brightness-0 saturate-100"
                  style={{ filter: 'invert(27%) sepia(18%) saturate(1545%) hue-rotate(118deg) brightness(95%) contrast(89%)' }}
                />
              </div>
              <span className="hidden sm:inline">{siteConfig.name}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-text hover:text-accent'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/rezervari" className="btn-accent btn-sm">
                Rezervă acum
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-text hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Deschide meniul"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-t border-border">
            <div className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-primary/10 text-accent'
                      : 'text-text hover:bg-primary/5 hover:text-accent'
                  }`}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/rezervari" className="btn-accent w-full mt-4">
                Rezervă acum
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}
