# Cookie Consent Implementation

## Overview

This project includes a **GDPR-compliant cookie consent solution** that ensures analytics scripts only load after user consent.

## Features

✅ **Cookie Consent Banner**
- Appears on first visit after 1 second
- Bilingual (Romanian/English)
- Clean, modern design matching site theme
- Fixed bottom position, doesn't block content

✅ **User Choices**
- **Accept All** - Enables Google Analytics, Meta Pixel, TikTok Pixel
- **Only Necessary** - Disables all analytics, keeps site functional

✅ **Preference Management**
- Choice saved in `localStorage`
- "Manage Cookie Settings" link in footer
- Can change preference anytime
- Page reloads to apply changes

✅ **Privacy Link**
- Direct link to Privacy Policy in banner
- Users can read details before deciding

## User Flow

```
First Visit → Cookie Banner Appears → User Chooses:
├─ "Accept All" → Analytics loads → Choice saved
└─ "Only Necessary" → No analytics → Choice saved

Later Visit → No banner (choice remembered)
             ↓
       Footer "Manage Settings" → Opens banner again → Can change choice
```

## Technical Implementation

### Components

**`components/CookieConsent.tsx`**
- Cookie banner UI
- Handles user choice
- Dispatches custom event `cookie-consent-changed`
- Saves to `localStorage` key: `cookie-consent`

**`components/Analytics.tsx`**
- Listens for consent events
- Only loads scripts if `consent === 'all'`
- Supports GA4, GTM, Meta Pixel, TikTok Pixel

**`components/CookieSettingsButton.tsx`**
- Footer button to reopen banner
- Clears localStorage and reloads page

### Storage

```javascript
// Values in localStorage['cookie-consent']:
'all'       // User accepted all cookies → Analytics loads
'necessary' // User accepted only necessary → No analytics
null        // No choice yet → Banner shows
```

### Events

```javascript
// Custom event dispatched on consent change
window.dispatchEvent(
  new CustomEvent('cookie-consent-changed', { 
    detail: 'all' | 'necessary' 
  })
);
```

## Translations

Translations available in `messages/ro.json` and `messages/en.json`:

```json
{
  "cookieConsent": {
    "title": "Cookie-uri și Confidențialitate",
    "description": "Folosim cookie-uri...",
    "details": "Cookie-urile de marketing...",
    "privacyPolicy": "Politica de confidențialitate",
    "acceptAll": "Acceptă toate",
    "necessary": "Doar necesare",
    "manageSettings": "Gestionează preferințele"
  }
}
```

## Customization

### Change Banner Delay

Edit `components/CookieConsent.tsx`:

```typescript
// Default: 1 second
setTimeout(() => setShowBanner(true), 1000);

// Change to 3 seconds
setTimeout(() => setShowBanner(true), 3000);
```

### Change Storage Key

Search and replace in:
- `components/CookieConsent.tsx`
- `components/Analytics.tsx`
- `components/CookieSettingsButton.tsx`

```typescript
// Change from:
localStorage.getItem('cookie-consent')

// To:
localStorage.getItem('your-custom-key')
```

### Add More Options

To add granular cookie categories (e.g., "Analytics Only", "Marketing Only"):

1. Update `CookieConsent.tsx` with more buttons
2. Save different values: `'analytics'`, `'marketing'`, etc.
3. Update `Analytics.tsx` to check for specific categories
4. Load scripts conditionally based on category

## Testing

### Test Banner Appearance
1. Open site in incognito/private window
2. Banner should appear after 1 second
3. No banner on regular window if already chosen

### Test "Accept All"
1. Click "Accept All"
2. Open DevTools → Network tab
3. Filter for `analytics`, `facebook`, `tiktok`
4. Reload page
5. Should see analytics scripts loading

### Test "Only Necessary"
1. Clear localStorage in DevTools
2. Reload page
3. Click "Only Necessary"
4. Open Network tab
5. No analytics scripts should load

### Test Preference Change
1. Scroll to footer
2. Click "Manage Cookie Settings" (Romanian) or "Manage preferences" (English)
3. Banner reappears
4. Change choice → Page reloads → New choice applied

## GDPR Compliance

✅ **Opt-in approach** - No analytics until user clicks "Accept All"
✅ **Clear communication** - User knows what they're accepting
✅ **Easy to decline** - "Only Necessary" option prominent
✅ **Easy to change** - Footer link always available
✅ **Privacy policy linked** - Direct access to full policy

### Still Needed for Full Compliance:

- [ ] Update Privacy Policy page with cookie details
- [ ] Sign Data Processing Agreements with Google, Meta, TikTok
- [ ] Add cookie list to Privacy Policy
- [ ] Document data retention periods
- [ ] Add "Right to be Forgotten" request form (optional)

## Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ localStorage required (99%+ browser support)
- ⚠️ Won't work in private/incognito if cookies disabled

## Troubleshooting

### Banner doesn't appear
- Check if localStorage has `cookie-consent` key
- Clear it: `localStorage.removeItem('cookie-consent')`
- Reload page

### Analytics still loading when declined
- Check console for errors
- Verify `Analytics.tsx` checks consent correctly
- Check environment variables are set

### Preference not persisting
- Check browser allows localStorage
- Check for extensions blocking storage
- Try normal (non-incognito) window

## Files Modified

- ✅ `components/CookieConsent.tsx` - Created
- ✅ `components/Analytics.tsx` - Modified to check consent
- ✅ `components/CookieSettingsButton.tsx` - Created
- ✅ `components/Footer.tsx` - Added settings button
- ✅ `app/[locale]/layout.tsx` - Added CookieConsent component
- ✅ `messages/ro.json` - Added translations
- ✅ `messages/en.json` - Added translations
- ✅ `ANALYTICS.md` - Updated documentation

## Support

For issues or questions:
1. Check browser console for errors
2. Verify localStorage is enabled
3. Test in incognito mode
4. Check translations are loaded correctly
