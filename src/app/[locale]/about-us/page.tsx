
import React from 'react'
import TranslationsProvider from '@components/utils/translationProvider'
import initTranslations from '@components/app/i18n';
import { IntroAbout } from '@components/components/sections/about-us/intro/intro';
import { VisionAbout } from '@components/components/sections/about-us/intro/vision';
import { OurValues } from '@components/components/sections/about-us/intro/our-values';
import { WhoWeAre } from '@components/components/sections/about-us/intro/who-we-are';
import OurTeam from '@components/components/sections/about-us/intro/people';
import { Metadata } from 'next';


export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalUrl = locale === 'en' ? `${baseUrl}/about-us` : `${baseUrl}/${locale}/about-us`;

  return {
    title: 'Inspirame',
    description: 'Inspirame is an equity-driven technology company that creates products connecting learners, schools, and the workforce.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/about-us`,
        es: `${baseUrl}/es/about-us`,
        pt: `${baseUrl}/pt/about-us`,
        zh: `${baseUrl}/zh/about-us`,
        hi: `${baseUrl}/hi/about-us`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}


const i18nNamespaces = ['about-us'];

 const AboutPage = async ({ params: { locale } }) => {

  const { i18n, resources } = await initTranslations(locale, i18nNamespaces);

  return (


     <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className='min-h-screen w-full'>
          <IntroAbout/>
          <VisionAbout params={{ locale }}/>
          <OurValues/>
          <WhoWeAre params={{ locale }}/>
          <OurTeam params={{ locale }} />  
      </main>
    </TranslationsProvider>
  )
}

export default AboutPage