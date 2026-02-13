'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'flag-icons/css/flag-icons.min.css';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Andrei',
    location: 'Romania',
    rating: 5,
    date: 'April 2025',
    comment:
      'Beautiful location with mountain views. Far from the city, so peaceful and with a beautiful yard that the kids and dog used extensively. Large common area with perfectly equipped kitchen. We cooked several meals in the kitchen and felt at home, the espresso machine is fantastic, better than what we have at home. I would love to visit in summer to enjoy the outdoor cooking facilities. Overall wonderful and excellent value for money!',
  },
  {
    name: 'Tal',
    location: 'Israel',
    rating: 5,
    date: 'August 2024',
    comment:
      'The cabin is wonderful inside, recently furnished, and the owner provided us with many small treats! The gazebo is well equipped for whatever we wanted. The yard was amazing, both for children and with fruit trees. We had a wonderful time on our vacation here.',
  },  
  {
    name: 'Tomaescu',
    location: 'Romania',
    rating: 5,
    date: 'December 2025',
    comment:
      'Secluded location, very quiet, generous outdoor space. You have all the necessary facilities. Very kind owners. We hope to return in the warm season too.',
  },
  {
    name: 'Lorand',
    location: 'Germany',
    rating: 5,
    date: 'December 2024',
    comment:
      'The location of the House and the Barbecue area. The house and also the Barbecue area are well equipped.',
  },
  {
    name: 'Adriana',
    location: 'Romania',
    rating: 5,
    date: 'Aprilie 2024',
    comment:
      'The view is absolutey amazing. The yard a place for children and adults to enjoy, play or just listen peacefully to nature.',
  },
  {
    name: 'Daniel',
    location: 'Israel',
    rating: 4.5,
    date: 'September 2024',
    comment:
      'The house was very clean, equipped with a good A/C and everything needed to cook. Around the house there were fruits on the trees and a playground for our children. We really enjoyed and recommend it. The hostess was very helpful as well. Arvig is also very close to the places we wanted to go to. A pan was missing, but that`s not that critical.',
  },
];

interface TestimonialProps {
  testimonials?: Testimonial[];
}

export default function TestimonialSection({ testimonials = defaultTestimonials }: TestimonialProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const t = useTranslations('testimonials');

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCountryFlag = (location: string) => {
    const flagCodes: { [key: string]: string } = {
      'Romania': 'ro',
      'Israel': 'il',
      'USA': 'us',
      'UK': 'gb',
      'Germany': 'de',
      'France': 'fr',
      'Italy': 'it',
      'Spain': 'es',
    };
    return flagCodes[location] || 'xx';
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1" role="img" aria-label={t('rating', { rating })}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-accent fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e0;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #2C5F4D;
          width: 32px;
          border-radius: 6px;
        }
        .testimonials-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        .testimonials-swiper .swiper-slide > div {
          width: 100%;
          min-height: 340px;
        }
      `}</style>
      <section className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12 testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card p-6 flex flex-col h-full">
              {/* Author info - moved to top */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-14 h-14 flex-shrink-0">
                  {/* Colored ring */}
                  <div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
                  <div className="absolute inset-0.5 rounded-full bg-primary p-0.5">
                    {/* Inner white circle with initial */}
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  <p className="text-sm text-text-muted flex items-center gap-1.5">
                    <span className={`fi fi-${getCountryFlag(testimonial.location)} text-base rounded-sm`}></span>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">{renderStars(testimonial.rating)}</div>

              {/* Comment */}
              <div className="flex-grow mb-4">
                <p className={`text-text-light leading-relaxed italic ${
                  expandedIndex === index ? '' : 'line-clamp-3'
                }`}>
                  "{testimonial.comment}"
                </p>
                {testimonial.comment.length > 150 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-accent hover:text-accent/80 text-sm mt-2 font-medium transition-colors"
                  >
                    {expandedIndex === index ? t('showLess') : t('readMore')}
                  </button>
                )}
              </div>

              {/* Date - moved to bottom */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-text-muted text-center">{testimonial.date}</p>
              </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center opacity-0 md:opacity-100">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center opacity-0 md:opacity-100">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom mt-8 flex justify-center gap-2"></div>
        </div>

        {/* Overall rating summary (optional - for AggregateRating schema) */}
        <div className="mt-12 text-center p-6 bg-surface rounded-xl max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-accent">5.0</span>
            <div>{renderStars(5)}</div>
          </div>
          <p className="text-text-muted">
            {t('basedOn', { count: testimonials.length })}
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
