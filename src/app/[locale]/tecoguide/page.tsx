
import React  from 'react';
import TranslationsProvider from '@components/utils/translationProvider';
import initTranslations from '@components/app/i18n';
import Faq from '@components/components/sections/tecoguide/faq/faq-teco';
import { SimpleGrid } from '@components/components/sections/tecoguide/simplegrid/grid-benefits';
import { FeatureHero } from '@components/components/sections/tecoguide/feature';
import { Tutorial } from '@components/components/sections/tecoguide/tutorial-teco/tutorial';
import { Metadata } from 'next';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';



export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalUrl = locale === 'en' ? `${baseUrl}/tecoguide` : `${baseUrl}/${locale}/tecoguide`;

  return {
    title: 'Inspirame',
    description: 'TecoGuide is your free CA college & career planning app, Specifically designed to get you through college or industry pathways the Quickest & Most Affordable way possible!',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/tecoguide`,
        es: `${baseUrl}/es/tecoguide`,
        pt: `${baseUrl}/pt/tecoguide`,
        zh: `${baseUrl}/zh/tecoguide`,
        hi: `${baseUrl}/hi/tecoguide`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}


async function TecoGuide({ params: { locale } }) {
 
  const i18nNamespaces = ['tecoguide'];

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

 

  return (


     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <main className='w-full min-h-screen'>
            <FeatureHero params={{locale}}/>
            <SimpleGrid params={{locale}} />
            <Faq/>
        </main>
      </TranslationsProvider>
    
  );
}

export default TecoGuide;



