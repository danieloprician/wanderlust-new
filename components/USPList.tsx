import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faFire, faMountain, faUsers, faWifi } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { getTranslations } from 'next-intl/server';

interface USP {
  icon: IconDefinition;
  title: string;
  description: string;
}

interface USPListProps {
  locale: string;
  columns?: 2 | 3 | 4;
}

export default async function USPList({ locale, columns = 3 }: USPListProps) {
  const t = await getTranslations({ locale, namespace: 'usp' });
  
  const usps: USP[] = [
    {
      icon: faBath,
      title: t('hotTub.title'),
      description: t('hotTub.description'),
    },
    {
      icon: faFire,
      title: t('firepit.title'),
      description: t('firepit.description'),
    },
    {
      icon: faMountain,
      title: t('nature.title'),
      description: t('nature.description'),
    },
    {
      icon: faUsers,
      title: t('family.title'),
      description: t('family.description'),
    },
    {
      icon: faWifi,
      title: t('wifi.title'),
      description: t('wifi.description'),
    },
  ];
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
            {t('heading')}
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            {t('description')}
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
