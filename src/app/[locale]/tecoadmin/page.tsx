import initTranslations from "@components/app/i18n";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";
import BridgingTheGap from "@components/components/sections/tecoadmin/bridging-the-gap";
import FAQSectionAdmin from "@components/components/sections/tecoadmin/faqadmin";
import HowitWorks from "@components/components/sections/tecoadmin/how-it-works";
import { TecoadminIntro } from "@components/components/sections/tecoadmin/intro-admin";
import { ShiftHightlightTabs } from "@components/components/sections/tecoadmin/partner";
import TranslationsProvider from "@components/utils/translationProvider";
import { Metadata } from "next";




export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalUrl = locale === 'en' ? `${baseUrl}/tecoadmin` : `${baseUrl}/${locale}/tecoadmin`;

  return {
    title: 'Inspirame',
    description: 'TecoGuide exposes and guides learners to training and education pathways to meet workforce deficiencies. TecoAdmin, our partner-facing platform, provides real-time business insights for schools and industry partners',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/tecoadmin`,
        es: `${baseUrl}/es/tecoadmin`,
        pt: `${baseUrl}/pt/tecoadmin`,
        zh: `${baseUrl}/zh/tedcoadmin`,
        hi: `${baseUrl}/hi/tedcoadmin`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}
  
  
  async function TecoAdmin({ params: { locale } }) {
   
    const i18nNamespaces = ['tecoadmin'];
  
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
  
   
  
    return (
  
  
       <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
          <main className='w-full min-h-screen'>
              <TecoadminIntro params={{ locale }}/>
              <ShiftHightlightTabs params={{locale}}/>
              <HowitWorks />
              <BridgingTheGap params={{ locale }} />
              <FAQSectionAdmin/>
          </main>
        </TranslationsProvider>
      
    );
  }
  
  export default TecoAdmin;
  
  
  