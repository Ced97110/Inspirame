import React from 'react'
import 'next-cloudinary/dist/cld-video-player.css';
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { SectionH2 } from '@components/components/layout/headers/sectionh2';
import { SectionSubheading } from '@components/components/layout/headers/sectionsubheading';
import initTranslations from '@components/app/i18n';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';


export const VisionAbout = async  ({params:{locale}}) => {
  const { t } = await initTranslations(locale, ['about-us']);

  return (
   
    <section className='w-full flex justify-center flex-col items-center md:flex-row py-8'>
      <MaxWidthWrapper>
      <div className="relative z-10 h-full flex flex-col items-center  md:flex-grow">
        <SectionHeadingSpacing>
          <SectionH2 persistCenter>{t('vision-title')}</SectionH2>
          <p className='max-w-xl text-center text-pretty text-base md:text-lg'> {t('vision-para-1')}</p>
          <p className='max-w-xl text-center text-pretty text-base md:text-lg'>{t('vision-para-2')}</p>
        </SectionHeadingSpacing>
      </div>
      </MaxWidthWrapper>
  </section>
  )
}
