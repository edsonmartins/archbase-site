import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n/request';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure locale is valid
  const validLocale = (locales as readonly string[]).includes(locale) ? locale : 'en';

  // Providing all messages to the client
  const messages = await getMessages({ locale: validLocale });

  return (
    <NextIntlClientProvider messages={messages} locale={validLocale}>
      {children}
    </NextIntlClientProvider>
  );
}
