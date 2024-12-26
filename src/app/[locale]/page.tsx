
import React from 'react'
import initTranslations from '../i18n';
import TranslationsProvider from '@components/utils/translationProvider';
import { Metadata } from 'next';
import IntroInspirame from '@components/components/sections/homePage/introduction-inspirame/introduction-inspirame';
import ArticleSection1 from '@components/components/sections/homePage/articles/article';
import Blog from '@components/components/sections/homePage/blog/blog';
import DoubleScrollingLogos from '@components/components/sections/sponsor/logos';
import { WhatWedo } from '@components/components/sections/homePage/whatwedo/what-we-do';
import { ContentHero } from '@components/components/sections/homePage/hero/content';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';
import { TestimonyVideo } from '@components/components/sections/homePage/video';




const i18nNamespaces = ['Homepage'];



export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalUrl = locale === 'en' ? `${baseUrl}` : `${baseUrl}/${locale}`;

  return {
    title: 'Inspirame',
    description: 'Inspirame is an equity-driven technology company that creates products connecting learners, schools, and the workforce.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/`,
        es: `${baseUrl}/es`,
        pt: `${baseUrl}/pt`,
        zh: `${baseUrl}/zh`,
        hi: `${baseUrl}/hi`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}



async function HomeWrapper({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
       namespaces={i18nNamespaces}
       locale={locale}
        resources={resources}>
          
        <main className='min-h-screen w-full'>
      
            <ContentHero params={{locale}} />
            <IntroInspirame params={{locale}}/>
            <WhatWedo params={{locale}} />
            <DoubleScrollingLogos params={{locale}}/>
            <ArticleSection1 params={{locale}}/>
            <Blog />
            <TestimonyVideo/>
        
        </main>
        </TranslationsProvider>
  
  )
}

export default HomeWrapper;