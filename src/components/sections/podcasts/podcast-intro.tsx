import initTranslations from '@components/app/i18n';
import { ButtonApp } from '@components/components/button/button-app';
import { SectionH1 } from '@components/components/layout/headers/sectionh1';
import { SectionHeadingSpacing } from '@components/components/layout/headers/sectionheadingspacing';
import { SectionSubheading } from '@components/components/layout/headers/sectionsubheading';
import Image from 'next/image';
// Adjust the import path as needed

export const PodcastIntro = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ['podcasts']);

  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-center md:flex-row pt-36 md:pt-0">
        <div className="relative z-10 h-full flex flex-col items-center p-4 w-full mx-auto">
          <SectionHeadingSpacing>
            <SectionH1 className="text-white max-w-4xl text-center text-3xl md:text-5xl mb-4 font-bold">
              {t('podcasts-title')}
            </SectionH1>
            <SectionSubheading className="max-w-xl text-center md:text-start mb-8">
              {t('podcasts-subtitle')}
            </SectionSubheading>
          </SectionHeadingSpacing>
   
          <div className='md:w-1/2 w-full'>
            <iframe
              title="TecoGuide Podcast"
              allowTransparency={true}
              height="315"
              width="100%"
              style={{ border: 'none', minWidth: 'min(100%, 430px)', height: '315px' }}
              scrolling="no"
              data-name="pb-iframe-player"
              src="https://www.podbean.com/player-v2/?i=smatf-fea6e6-pbblog-playlist&share=1&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&order=episodic&limit=11&filter=all&ss=1832f5564256d939247dc6d8cad1f4fb&btn-skin=666666&size=315"
              loading="lazy"
              allowFullScreen
            ></iframe>
        </div>
          </div>
      </section>
    </>
  );
};