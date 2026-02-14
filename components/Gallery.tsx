'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  category?: 'interior' | 'exterior' | 'toate';
  width?: number;
  height?: number;
}

interface CategoryLabel {
  all: string;
  exterior: string;
  interior: string;
}

const defaultImages: GalleryImage[] = [
  {
    src: '/images/gallery/wanderlust-cottage-vedere-panoramica-primavara.webp',
    alt: 'Cabană de închiriat - vedere panoramică primăvara',
    category: 'exterior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-living.webp',
    alt: 'Living cabană - interior cochet și confortabil',
    category: 'interior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-exterior-cu-tereasa.webp',
    alt: 'Cabana Wanderlust Cottage cu terasă - relaxare în aer liber',
    category: 'exterior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-vedere-panoramica.webp',
    alt: 'Bucătărie complet utilată cabană',
    category: 'exterior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-camera.webp',
    alt: 'Cameră cabană - interior cochet și confortabil',
    category: 'interior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-iarna.webp',
    alt: 'Cabana Wanderlust Cottage iarna - peisaj de poveste',
    category: 'exterior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-bucataria.webp',
    alt: 'Bucătărie complet utilată cabană',
    category: 'interior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-bath.webp',
    alt: 'Cameră cabană - interior cochet și confortabil',
    category: 'interior',
  },
  {
    src: '/images/gallery/wanderlust-cottage-camera-2.webp',
    alt: 'Cameră cabană - interior cochet și confortabil',
    category: 'interior',
  },
];

interface GalleryProps {
  images?: GalleryImage[];
  showFilters?: boolean;
  columns?: 2 | 3 | 4;
  categoryLabels?: CategoryLabel;
}

export default function Gallery({
  images = defaultImages,
  showFilters = true,
  columns = 3,
  categoryLabels = {
    all: 'All',
    exterior: 'Exterior',
    interior: 'Interior',
  },
}: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('toate');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const categories = [
    { id: 'toate', label: categoryLabels.all },
    { id: 'exterior', label: categoryLabels.exterior },
    { id: 'interior', label: categoryLabels.interior },
  ];

  const filteredImages =
    selectedCategory === 'toate'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      <div className="space-y-8">
        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-surface text-text hover:bg-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns as 2 | 3 | 4]} gap-4`}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-cabin overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Închide"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-accent transition-colors"
            aria-label="Imaginea anterioară"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-accent transition-colors"
            aria-label="Imaginea următoare"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full p-8" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              sizes="90vw"
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
