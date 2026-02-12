import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faLocationDot,
  faPhone,
  faEnvelope,
  faWifi,
  faCar,
  faSnowflake,
  faFire,
  faMapLocationDot,
  faCalendarDays,
  faCircleCheck,
  faStar,
  faUsers,
  faBed,
  faUtensils,
  faMountain,
  faTree,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Font Awesome Icon Examples
 * 
 * Usage:
 * 
 * 1. Import the FontAwesomeIcon component:
 *    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 * 
 * 2. Import specific icons:
 *    import { faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
 * 
 * 3. Use the icon:
 *    <FontAwesomeIcon icon={faHouse} />
 * 
 * 4. Add styling with className:
 *    <FontAwesomeIcon icon={faHouse} className="w-5 h-5 text-primary" />
 * 
 * 5. Add size prop (xs, sm, lg, xl, 2x, 3x, etc.):
 *    <FontAwesomeIcon icon={faHouse} size="2x" />
 */

export default function FontAwesomeExample() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-primary">Font Awesome Icons Examples</h2>
      
      {/* Basic Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Basic Icons</h3>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faHouse} className="w-6 h-6 text-primary" />
          <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-accent" />
          <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-green-600" />
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Sized Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Different Sizes</h3>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon icon={faStar} size="xs" className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} size="sm" className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} size="lg" className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} size="xl" className="text-yellow-500" />
          <FontAwesomeIcon icon={faStar} size="2x" className="text-yellow-500" />
        </div>
      </div>

      {/* Cabana/Tourism Related Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Cabana Features Icons</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faWifi} className="w-8 h-8 text-primary" />
            <span className="text-sm">WiFi</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faCar} className="w-8 h-8 text-primary" />
            <span className="text-sm">Parcare</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faFire} className="w-8 h-8 text-primary" />
            <span className="text-sm">Ciubar</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faSnowflake} className="w-8 h-8 text-primary" />
            <span className="text-sm">Iarnă</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faBed} className="w-8 h-8 text-primary" />
            <span className="text-sm">Cazare</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-primary" />
            <span className="text-sm">8 persoane</span>
          </div>
        </div>
      </div>

      {/* Nature/Mountain Icons */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Natură & Activități</h3>
        <div className="flex gap-6 items-center">
          <FontAwesomeIcon icon={faMountain} className="w-10 h-10 text-green-700" />
          <FontAwesomeIcon icon={faTree} className="w-10 h-10 text-green-600" />
          <FontAwesomeIcon icon={faWater} className="w-10 h-10 text-blue-500" />
          <FontAwesomeIcon icon={faMapLocationDot} className="w-10 h-10 text-red-500" />
        </div>
      </div>

      {/* With Buttons */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Icons in Buttons</h3>
        <div className="flex gap-4">
          <button className="btn-primary flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarDays} />
            Rezervă Acum
          </button>
          <button className="btn-outline flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            Contactează-ne
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} />
            Confirmat
          </button>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Quick Usage Example:</h3>
        <pre className="text-sm overflow-x-auto">
{`import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faHouse} className="w-6 h-6 text-primary" />`}
        </pre>
      </div>
    </div>
  );
}
