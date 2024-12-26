import React from 'react'
import initTranslations from "@components/app/i18n";
import { MaxWidthWrapper } from '../../layout/wrapperwidth/maxwidth';
import { SectionSubheading } from '../../layout/headers/sectionsubheading';
import { SectionHeadingSpacing } from '../../layout/headers/sectionheadingspacing';
import Image from 'next/image';
import { SectionH1 } from '@components/components/layout/headers/sectionh1';


const ArticleIntro = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['research']);

  return (
      <section className='min-h-screen w-full flex flex-col items-center md:flex-row pt-36 md:pt-0'>
        <div className="relative z-10 h-full flex flex-col items-center md:items-start md:flex-grow p-4">
          <SectionHeadingSpacing>
            <SectionH1 persistCenter> {t('research-title')}</SectionH1>
            <SectionSubheading>  {t('research-subtitle')}</SectionSubheading>
          </SectionHeadingSpacing>
        </div>
        <div className="w-full flex justify-center md:w-1/2 mt-6 md:mt-0">
          <Image src='/research.svg' alt='research' width={450} height={450} className='object-cover' />
        </div>
    </section>
  );
};

export default ArticleIntro;