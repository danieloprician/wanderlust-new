interface USP {
  icon: string;
  title: string;
  description: string;
}

const defaultUSPs: USP[] = [
  {
    icon: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M2 12v5a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-5"/><path d="M6 12V6a2 2 0 0 1 2-2h1"/><path d="M9 4a1 1 0 0 1 1 1v1"/></svg>`,
    title: 'Ciubar cu apă caldă',
    description: 'Relaxare totală sub cerul înstelat, în ciubarul tradițional cu apă încălzită pe lemne',
  },
  {
    icon: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    title: 'Semineu & Fire Pit',
    description: 'Pentru seri memorabile în jurul focului, cu lemne de foc și șemineu interior pentru un plus de confort',
  },
  {
    icon: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 11H2L8 3z"/><circle cx="18" cy="4" r="2"/></svg>`,
    title: 'Natură 100%',
    description: 'Amplasată într-o zonă liniștită, înconjurată de pădure și cu privelişte spectaculoasă',
  },
  {
    icon: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><path d="M3 22v-4a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4"/><circle cx="18" cy="6" r="3"/><path d="M15 22v-4a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v4"/><circle cx="12" cy="10" r="2"/><path d="M10.5 22v-3a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5v3"/></svg>`,
    title: 'Perfect pentru Familii',
    description: 'Spațiu generos pentru 8 persoane, curte amenajată și activități pentru copii',
  },
  {
    icon: `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><circle cx="12" cy="20" r="1"/></svg>`,
    title: 'WiFi',
    description: 'Daca alegi sa lucrezi de la cabana, avem WiFi puternic pentru a te conecta cu lumea exterioară fără probleme',
  },
];

interface USPListProps {
  usps?: USP[];
  columns?: 2 | 3 | 4;
}

export default function USPList({ usps = defaultUSPs, columns = 3 }: USPListProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className="section bg-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            De ce să alegi cabana noastră?
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Oferim o experiență completă pentru o evadare perfectă din rutină
          </p>
        </div>

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {usps.map((usp, index) => (
            <div
              key={index}
              className="card-hover p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="inline-flex justify-center items-center w-16 h-16 mb-4 text-primary" 
                role="img" 
                aria-label={usp.title}
                dangerouslySetInnerHTML={{ __html: usp.icon }}
              />
              <h3 className="text-xl font-semibold text-primary mb-3">{usp.title}</h3>
              <p className="text-text-light leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
