# Font Awesome Usage Guide

## Installation ✅

Font Awesome has been installed with the following packages:
- `@fortawesome/fontawesome-svg-core` - Core library
- `@fortawesome/free-solid-svg-icons` - Free solid icons (900+ icons)
- `@fortawesome/free-regular-svg-icons` - Free regular icons (150+ icons)
- `@fortawesome/react-fontawesome` - React component

## Basic Usage

### 1. Import the component and icons

```tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
```

### 2. Use the icon in your component

```tsx
<FontAwesomeIcon icon={faHouse} />
```

### 3. Add styling with Tailwind classes

```tsx
<FontAwesomeIcon icon={faHouse} className="w-6 h-6 text-primary" />
```

## Common Icon Examples for Your Cabana Website

### Navigation & Contact
```tsx
import { 
  faHouse,          // Home
  faPhone,          // Phone
  faEnvelope,       // Email
  faLocationDot,    // Location pin
  faMapLocationDot, // Map with pin
} from '@fortawesome/free-solid-svg-icons';
```

### Cabana Features
```tsx
import {
  faWifi,           // WiFi
  faCar,            // Parking
  faFire,           // Fireplace/Hot tub
  faSnowflake,      // Winter/AC
  faBed,            // Bedroom
  faUtensils,       // Kitchen
  faShower,         // Bathroom
  faDoorOpen,       // Check-in
  faKey,            // Keys
} from '@fortawesome/free-solid-svg-icons';
```

### Activities & Nature
```tsx
import {
  faMountain,       // Mountains
  faTree,           // Forest
  faWater,          // Lake/Water
  faPersonHiking,   // Hiking
  faPersonSkiing,   // Skiing
  faBiking,         // Cycling
  faCamera,         // Photography
} from '@fortawesome/free-solid-svg-icons';
```

### Booking & Reservations
```tsx
import {
  faCalendarDays,   // Calendar
  faCalendarCheck,  // Booking confirmation
  faCircleCheck,    // Confirmed
  faClock,          // Time
  faMoneyBill,      // Payment
  faCreditCard,     // Credit card
} from '@fortawesome/free-solid-svg-icons';
```

### UI Elements
```tsx
import {
  faStar,           // Rating
  faUsers,          // Capacity
  faCircleInfo,     // Info
  faCircleQuestion, // FAQ
  faChevronDown,    // Dropdown
  faChevronRight,   // Arrow right
  faBars,           // Menu
  faXmark,          // Close
} from '@fortawesome/free-solid-svg-icons';
```

## Advanced Usage

### Sizing Options

```tsx
<FontAwesomeIcon icon={faStar} size="xs" />   // Extra small
<FontAwesomeIcon icon={faStar} size="sm" />   // Small
<FontAwesomeIcon icon={faStar} size="lg" />   // Large
<FontAwesomeIcon icon={faStar} size="xl" />   // Extra large
<FontAwesomeIcon icon={faStar} size="2x" />   // 2x
<FontAwesomeIcon icon={faStar} size="3x" />   // 3x
```

Or use Tailwind classes:
```tsx
<FontAwesomeIcon icon={faStar} className="w-6 h-6" />
```

### With Buttons

```tsx
<button className="btn-primary flex items-center gap-2">
  <FontAwesomeIcon icon={faCalendarDays} />
  Rezervă Acum
</button>
```

### Icon List

```tsx
<ul className="space-y-2">
  <li className="flex items-center gap-2">
    <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />
    <span>WiFi gratuit de mare viteză</span>
  </li>
  <li className="flex items-center gap-2">
    <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />
    <span>Parcare privată gratuită</span>
  </li>
</ul>
```

### Replacing Emoji in FAQ

You can replace the emoji icons (🏞️, 🥾, 🏛️) with Font Awesome icons:

```tsx
import { faMountain, faPersonHiking, faLandmark } from '@fortawesome/free-solid-svg-icons';

<h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
  <FontAwesomeIcon icon={faMountain} className="text-green-600" />
  Natură & Peisaje
</h4>
```

## Browse All Icons

Find more icons at: **https://fontawesome.com/icons**
- Filter by "Free" to see all available icons
- Use the search to find specific icons
- Copy the import name (e.g., `faHouse`)

## Tips

1. **Import only what you need** - Don't import all icons, only import the ones you use
2. **Use consistent sizing** - Stick to `w-5 h-5` or `w-6 h-6` for consistency
3. **Match your color scheme** - Use `text-primary`, `text-accent`, etc.
4. **Combine with Tailwind** - Use Tailwind utilities for spacing, colors, and responsive design

## Example Component

See `components/FontAwesomeExample.tsx` for a complete working example!
