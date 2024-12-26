import React from 'react'
import initTranslations from '@components/app/i18n';
import TranslationsProvider from '@components/utils/translationProvider';
import FlyoutNav from './nav';


const i18nNamespaces = ['menuinspi'];


async function Header ({params:{ locale }}) {

    const { resources } = await initTranslations(locale, i18nNamespaces);
    

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <header className='w-full'>
             <FlyoutNav />
        </header>
     </TranslationsProvider>
  )
}

export default Header;