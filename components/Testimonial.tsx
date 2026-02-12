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
    name: 'Elena M.',
    location: 'Timișoara',
    rating: 5,
    date: 'November 2025',
    comment:
      'Peace, nature, comfort... all in superlatives! The kitchen is very well equipped, we could cook everything we wanted. We will definitely return!',
  },
  {
    name: 'Tomaescu',
    location: 'Romania',
    rating: 5,
    date: 'December 2025',
    comment:
      'Secluded location, very quiet, generous outdoor space. You have all the necessary facilities. Very kind owners. We hope to return in the warm season too.',
  },
];

interface TestimonialProps {
  testimonials?: Testimonial[];
}

export default function TestimonialSection({ testimonials = defaultTestimonials }: TestimonialProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
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
            What Our Guests Say
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Real feedback from people who chose to spend time here
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
            Based on {testimonials.length}+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
