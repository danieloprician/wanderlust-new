'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/seo/config';

interface BookNowButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'accent' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

export default function BookNowButton({
  size = 'md',
  variant = 'accent',
  className = '',
  fullWidth = false,
}: BookNowButtonProps) {
  const t = useTranslations('common');

  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn',
    lg: 'btn-lg',
  };

  const iconSizes = {
    sm: { width: 18, height: 18, className: 'w-[18px] h-[18px]' },
    md: { width: 20, height: 20, className: 'w-5 h-5' },
    lg: { width: 20, height: 20, className: 'w-5 h-5' },
  };

  const variantClass = variant === 'accent' ? 'btn-accent' : 'btn-outline';
  const widthClass = fullWidth ? 'w-full' : '';

  const iconSize = iconSizes[size];

  return (
    <a
      href={siteConfig.social.booking}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${sizeClasses[size]} ${widthClass} flex items-center justify-center gap-2 ${className}`}
    >
      <Image
        src="/images/booking.svg"
        alt="Booking"
        width={iconSize.width}
        height={iconSize.height}
        className={iconSize.className}
      />
      {t('bookNow')}
    </a>
  );
}
