interface RateRow {
  period: string;
  weekendRate: string;
  weekRate: string;
  highlight?: boolean;
}

const defaultRates: RateRow[] = [
  {
    period: 'Sezon Scăzut (Noiembrie - Martie, exclusiv sărbători)',
    weekendRate: '450 RON',
    weekRate: '400 RON/noapte',
    highlight: false,
  },
  {
    period: 'Sezon Mediu (Aprilie - Mai, Septembrie - Octombrie)',
    weekendRate: '550 RON',
    weekRate: '500 RON/noapte',
    highlight: false,
  },
  {
    period: 'Sezon Înalt (Iunie - August)',
    weekendRate: '650 RON',
    weekRate: '600 RON/noapte',
    highlight: true,
  },
  {
    period: 'Sărbători (Crăciun, Revelion, Paște)',
    weekendRate: '800 RON',
    weekRate: '750 RON/noapte',
    highlight: true,
  },
];

interface RateTableProps {
  rates?: RateRow[];
}

export default function RateTable({ rates = defaultRates }: RateTableProps) {
  return (
    <div className="space-y-8">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-surface rounded-xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-4 text-left font-semibold">Perioadă</th>
              <th className="px-6 py-4 text-left font-semibold">
                Weekend<span className="block text-sm font-normal opacity-90">(Vineri - Duminică)</span>
              </th>
              <th className="px-6 py-4 text-left font-semibold">
                Săptămână<span className="block text-sm font-normal opacity-90">(Luni - Joi)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr
                key={index}
                className={`border-t border-border transition-colors ${
                  rate.highlight
                    ? 'bg-accent/5 hover:bg-accent/10'
                    : 'hover:bg-primary/5'
                }`}
              >
                <td className="px-6 py-4 font-medium text-text">
                  {rate.period}
                  {rate.highlight && (
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent text-white">
                      Popular
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-text-light font-semibold">{rate.weekendRate}</td>
                <td className="px-6 py-4 text-text-light font-semibold">{rate.weekRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Policies */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Politică de Rezervare
          </h3>
          <ul className="space-y-2 text-text-light">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Sejur minim: 2 nopți (3 nopți în weekend-uri lungi și sărbători)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Check-in: după ora 15:00 | Check-out: până la ora 11:00</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Depozit de garanție: 500 RON (returnabil la plecare)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Capacitate maximă: 8 persoane</span>
            </li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Politică de Anulare
          </h3>
          <ul className="space-y-2 text-text-light">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Anulare cu 30+ zile înainte: rambursare 100%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Anulare cu 15-29 zile înainte: rambursare 50%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Anulare cu mai puțin de 14 zile: fără rambursare</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>În caz de forță majoră, politica poate fi renegociată</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Included */}
      <div className="card p-6 bg-primary/5">
        <h3 className="text-xl font-semibold text-primary mb-4">Ce Este Inclus în Preț</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-text-light">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>WiFi nelimitat</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Parcare gratuită</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Ciubar + Saună</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Lemne pentru foc</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Lenjerie de pat</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Prosoape</span>
          </div>
        </div>
      </div>
    </div>
  );
}
