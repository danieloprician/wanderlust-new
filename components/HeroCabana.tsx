'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface HeroCabanaProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  height?: 'small' | 'medium' | 'full';
}

export default function HeroCabana({
  title,
  subtitle,
  showCTA = true,
  imageUrl = '/images/cabana-exterior-vara.webp',
  imageAlt = 'Cabană de închiriat în Sibiu - exterior vara',
  height = 'full',
}: HeroCabanaProps) {
  const t = useTranslations('common');
  const tHero = useTranslations('hero');
  
  // Use translations for default values if props are not provided
  const displayTitle = title || tHero('title');
  const displaySubtitle = subtitle || tHero('subtitle');
  
  const heightClasses = {
    small: 'h-[400px] md:h-[500px]',
    medium: 'h-[500px] md:h-[600px] lg:h-[700px]',
    full: 'h-[600px] md:h-[700px] lg:h-[90vh]',
  };

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 overlay-gradient-dark" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 md:mb-6 text-balance">
              {displayTitle}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl text-balance">
              {displaySubtitle}
            </p>

            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/rezervari" className="btn-accent btn-lg flex items-center justify-center gap-2">
                  <Image
                    src="/images/booking.svg"
                    alt="Booking"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  {t('bookNow')}
                </Link>
                <Link href="/cabana" className="btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary">
                  {t('discoverCabin')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
