import initTranslations from "@components/app/i18n";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";
import { Contact } from "@components/components/sections/contact/contact-wrapper";
import TranslationsProvider from "@components/utils/translationProvider";
import { Metadata } from "next";



export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalUrl = locale === 'en' ? `${baseUrl}/contact-us` : `${baseUrl}/${locale}/contact-us`;

  return {
    title: 'Inspirame',
    description: 'Get in Touch with Inspirame',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/contact-us`,
        es: `${baseUrl}/es/contact-us`,
        pt: `${baseUrl}/pt/contact-us`,
        zh: `${baseUrl}/zh/contact-us`,
        hi: `${baseUrl}/hi/contact-us`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}
  
  async function ContactPage({ params: { locale } }) {
   
    const i18nNamespaces = ['contact'];
  
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
  
   
  
    return (
  
  
       <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
          <main className='w-full min-h-screen'>
             <Contact params={{ locale }}/>
          </main>
        </TranslationsProvider>
      
    );
  }
  
  export default ContactPage;
  
  
  