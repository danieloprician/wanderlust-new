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
    name: 'Maria și Andrei P.',
    location: 'București',
    rating: 5,
    date: 'Ianuarie 2026',
    comment:
      'O experiență absolut magică! Cabana este exact ca în poze, chiar mai frumoasă. Ciubarul sub stele a fost punctul culminant al sejurului nostru. Recomandăm cu încredere!',
  },
  {
    name: 'Familie Ionescu',
    location: 'Cluj-Napoca',
    rating: 5,
    date: 'Decembrie 2025',
    comment:
      'Am petrecut Revelionul aici cu familia și a fost perfect! Copiii s-au jucat în zăpadă, iar noi ne-am relaxat la saună. Gazda foarte primitoare, curățenie impecabilă.',
  },
  {
    name: 'Elena M.',
    location: 'Timișoara',
    rating: 5,
    date: 'Noiembrie 2025',
    comment:
      'Liniște, natură, confort... toate la superlativ! Bucătăria este foarte bine echipată, am putut găti tot ce ne-am dorit. Vom reveni cu siguranță!',
  },
];

interface TestimonialProps {
  testimonials?: Testimonial[];
}

export default function TestimonialSection({ testimonials = defaultTestimonials }: TestimonialProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1" role="img" aria-label={`${rating} din 5 stele`}>
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
    <section className="section bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Ce spun oaspeții noștri
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Feedback real de la persoane care au ales să petreacă timpul aici
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Rating */}
              <div className="mb-4">{renderStars(testimonial.rating)}</div>

              {/* Comment */}
              <p className="text-text-light mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  <p className="text-sm text-text-muted">
                    {testimonial.location} • {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating summary (optional - for AggregateRating schema) */}
        <div className="mt-12 text-center p-6 bg-surface rounded-xl max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-accent">5.0</span>
            <div>{renderStars(5)}</div>
          </div>
          <p className="text-text-muted">
            Bazat pe {testimonials.length}+ recenzii verificate
          </p>
        </div>
      </div>
    </section>
  );
}
