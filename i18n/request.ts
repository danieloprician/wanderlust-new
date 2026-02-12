import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // This is the new API for next-intl v4+
  let locale = await requestLocale;
  
  // Provide a fallback locale
  if (!locale || !['ro', 'en'].includes(locale)) {
    locale = 'ro';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
