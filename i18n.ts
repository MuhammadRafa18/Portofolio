import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'id'] as const;

export default getRequestConfig(async ({ locale }) => {
  
  const activeLocale = locale && locales.includes(locale as any) ? locale : 'en';

  return {
    locale: activeLocale,
    messages: (await import(`./app/messages/${activeLocale}.json`)).default
  };
});