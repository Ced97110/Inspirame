'use client';


import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import initTranslations from '@components/app/i18n';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources
}) {
  const i18n = createInstance() as any;

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
