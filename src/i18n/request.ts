import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid - default to 'en' if undefined
  const validLocale = locale && locales.includes(locale as Locale) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
