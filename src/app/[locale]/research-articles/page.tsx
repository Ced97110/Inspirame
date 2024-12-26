import initTranslations from "@components/app/i18n";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";
import { Articles } from "@components/components/sections/research/articles";
import { ArticlesWrapper } from "@components/components/sections/research/research-wrapper";
import TranslationsProvider from "@components/utils/translationProvider";
import { Metadata } from "next";
import * as cheerio from 'cheerio';

  

  

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalUrl = locale === 'en' ? `${baseUrl}/research-articles` : `${baseUrl}/${locale}/research-articles`;

  return {
    title: 'Inspirame',
    description: 'Discover thought leadership, strategies, and the latest trends in higher education.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/research-articles`,
        es: `${baseUrl}/es/research-articles`,
        pt: `${baseUrl}/pt/research-articles`,
        zh: `${baseUrl}/zh/research-articles`,
        hi: `${baseUrl}/hi/research-articles`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}

  
  async function ResearchPage({ params: { locale } }) {
   
    const i18nNamespaces = ['research'];
  
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
  
    return (
  
  
       <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
          <main className='w-full'>
            <MaxWidthWrapper>
              <Articles  />
            </MaxWidthWrapper>
          </main>
        </TranslationsProvider>
      
    );
  }
  
  export default ResearchPage;
  
  