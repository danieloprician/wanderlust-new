import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faFire, faMountain, faUsers, faWifi } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface USP {
  icon: IconDefinition;
  title: string;
  description: string;
}

const defaultUSPs: USP[] = [
  {
    icon: faBath,
    title: 'Ciubar cu apă caldă',
    description: 'Relaxare totală sub cerul înstelat, în ciubarul tradițional cu apă încălzită pe lemne',
  },
  {
    icon: faFire,
    title: 'Semineu & Fire Pit',
    description: 'Pentru seri memorabile în jurul focului, cu lemne de foc și șemineu interior pentru un plus de confort',
  },
  {
    icon: faMountain,
    title: 'Natură 100%',
    description: 'Amplasată într-o zonă liniștită, înconjurată de pădure și cu privelişte spectaculoasă',
  },
  {
    icon: faUsers,
    title: 'Perfect pentru Familii',
    description: 'Spațiu generos pentru 8 persoane, curte amenajată și activități pentru copii',
  },
  {
    icon: faWifi,
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
              >
                <FontAwesomeIcon icon={usp.icon} className="w-14 h-16" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{usp.title}</h3>
              <p className="text-text-light leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
