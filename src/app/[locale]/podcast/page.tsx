import WrapperPodcats from '@components/components/sections/podcasts/wrapper-podcasts';
import TranslationsProvider from '@components/utils/translationProvider';
import initTranslations from '@components/app/i18n';
import { Metadata } from 'next';
import { PodcastIntro } from '@components/components/sections/podcasts/podcast-intro';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';



export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonicalUrl = locale === 'en' ? `${baseUrl}/media` : `${baseUrl}/${locale}/media`;

  return {
    title: 'Inspirame',
    description: 'Gain invaluable information from Professor G and his guests on the latest trends in higher education.',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/media`,
        es: `${baseUrl}/es/media`,
        pt: `${baseUrl}/pt/media`,
        zh: `${baseUrl}/zh/media`,
        hi: `${baseUrl}/hi/media`,
      },
    },
    openGraph: {
      images: '/og-image.png',
    },
  };
}

const i18nNamespaces = ['podcasts'];

const Media = async ({ params: { locale } }) => {

  const { i18n, resources } = await initTranslations(locale, i18nNamespaces);
 

  return (

    <TranslationsProvider
    namespaces={i18nNamespaces}
    locale={locale}
    resources={resources}>
    <main className='w-full  min-h-screen'>
      <MaxWidthWrapper>
        <PodcastIntro params={{locale}}/>
      </MaxWidthWrapper>
    </main>
    </TranslationsProvider>
  );
};

export default Media;