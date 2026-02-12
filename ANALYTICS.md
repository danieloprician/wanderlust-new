# Analytics Setup Guide

This project supports multiple analytics and tracking platforms with **GDPR-compliant cookie consent**.

## Cookie Consent Implementation

✅ **This project includes a cookie consent banner** that complies with GDPR and privacy regulations.

### How it works:

1. **First Visit:** Users see a cookie consent banner at the bottom of the page
2. **Choice:** Users can choose:
   - "Accept All" - Enables all analytics (GA4, GTM, Meta Pixel, TikTok)
   - "Only Necessary" - Disables all analytics, only essential cookies
3. **Storage:** Choice is saved in `localStorage`
4. **Analytics:** Scripts only load if user accepts all cookies
5. **Manage Settings:** Users can change preferences anytime via footer link

### Files Involved:

- `components/CookieConsent.tsx` - Cookie consent banner
- `components/Analytics.tsx` - Scripts that load conditionally
- `components/CookieSettingsButton.tsx` - Footer button to reopen banner
- `messages/ro.json` & `messages/en.json` - Translations

### Customization:

To modify the cookie consent behavior, edit `components/CookieConsent.tsx`:

```typescript
// Show banner after 1 second (change delay)
setTimeout(() => setShowBanner(true), 1000);

// Storage key (change if needed)
localStorage.setItem('cookie-consent', 'all');
```

## Supported Platforms

### 1. Google Analytics 4 (GA4)
**What it does:** Website traffic analytics, user behavior tracking, conversion tracking

**Setup:**
1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 2. Google Tag Manager (GTM)
**What it does:** Centralized tag management, allows adding multiple tracking tools without code changes

**Setup:**
1. Create a GTM container at [Google Tag Manager](https://tagmanager.google.com)
2. Get your Container ID (format: `GTM-XXXXXXX`)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

**Note:** You can use either GA4 directly OR GTM with GA4 configured inside it. Using both may cause duplicate tracking.

### 3. Meta Pixel (Facebook)
**What it does:** Facebook/Instagram ad tracking, conversion tracking, audience building

**Setup:**
1. Create a Pixel in [Meta Events Manager](https://business.facebook.com/events_manager)
2. Get your Pixel ID (numeric)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=123456789012345
   ```

### 4. TikTok Pixel
**What it does:** TikTok ad tracking, conversion tracking

**Setup:**
1. Create a Pixel in [TikTok Ads Manager](https://ads.tiktok.com)
2. Get your Pixel Code
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_TIKTOK_PIXEL_ID=YOUR_TIKTOK_PIXEL_CODE
   ```

## Privacy & GDPR Compliance

✅ **GDPR Compliant Cookie Consent Implemented**

This project includes a built-in cookie consent solution that:
- Shows a banner on first visit
- Requires explicit user consent before loading analytics
- Stores user preference in localStorage
- Allows users to change preferences anytime
- Supports both Romanian and English
- Only loads tracking scripts after "Accept All" is clicked

### What's Included:

✅ Cookie consent banner with "Accept All" and "Only Necessary" options
✅ Conditional script loading based on user choice
✅ "Manage Cookie Settings" link in footer
✅ Bilingual support (Romanian/English)
✅ GDPR-compliant opt-in approach

### Additional Steps for Full Compliance:

1. **Privacy Policy** - Update `/politica-confidentialitate` page with:
   - What cookies are used
   - Which third-party services (GA4, Meta, TikTok)
   - How to manage cookie preferences
   - Data retention policies

2. **Terms & Conditions** - Update `/termeni` page if needed

3. **Data Processing Agreements:**
   - Sign DPA with Google (for GA4/GTM)
   - Review Meta's data processing terms
   - Review TikTok's data processing terms

### No Longer Needed:

~~You need to implement a cookie consent solution~~ - **Already implemented!**
~~Scripts should only load after user consent~~ - **Already implemented!**

### Already Using a Different Solution?

If you prefer to use CookieBot, OneTrust, or another solution:

1. Remove `<CookieConsent />` from `app/[locale]/layout.tsx`
2. Modify `components/Analytics.tsx` to check your consent solution's API
3. Integrate your preferred cookie consent service

## Testing

### Verify Analytics Installation:

**Google Analytics:**
```
1. Chrome DevTools → Network tab
2. Filter for "collect" or "analytics"
3. Look for requests to google-analytics.com or analytics.google.com
```

**Google Tag Manager:**
```
1. Install GTM Preview extension
2. Enable preview mode in GTM
3. Browse your site
```

**Meta Pixel:**
```
1. Install Meta Pixel Helper Chrome extension
2. Browse your site
3. Icon turns blue when pixel fires
```

**TikTok Pixel:**
```
1. Install TikTok Pixel Helper Chrome extension
2. Browse your site
3. Check for pixel events
```

## Tracking Events

### Standard Events (Automatically Tracked)
- Page views (all platforms)
- First visit
- Session start

### Custom Events (Add as needed)

You can track custom events by using the global functions:

**Google Analytics 4:**
```javascript
gtag('event', 'booking_initiated', {
  event_category: 'reservations',
  event_label: 'Cabin Booking',
  value: 500
});
```

**Meta Pixel:**
```javascript
fbq('track', 'InitiateCheckout', {
  content_name: 'Cabin Reservation',
  value: 500,
  currency: 'RON'
});
```

**TikTok Pixel:**
```javascript
ttq.track('InitiateCheckout', {
  content_name: 'Cabin Reservation',
  value: 500,
  currency: 'RON'
});
```

## Troubleshooting

### Scripts Not Loading
1. Check `.env.local` file exists and has correct variables
2. Restart dev server after changing environment variables
3. Check browser console for errors
4. Verify IDs are in correct format

### Duplicate Tracking
- Don't use both GA4 directly AND GA4 via GTM
- Check if theme or plugins already include tracking scripts

### Ad Blockers
- Analytics won't work for users with ad blockers
- This is expected and normal (typically 20-30% of users)

## File Locations

- **Configuration:** `lib/seo/config.ts`
- **Analytics Component:** `components/Analytics.tsx`
- **Layout Integration:** `app/[locale]/layout.tsx`
- **Environment Variables:** `.env.local` (create from `.env.example`)

## Support

For issues or questions:
1. Check Next.js analytics documentation
2. Review platform-specific documentation
3. Test in incognito mode to rule out browser extensions
