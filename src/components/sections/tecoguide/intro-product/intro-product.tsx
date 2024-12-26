import initTranslations from '@components/app/i18n';
import React from 'react'
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { SectionSubheading } from '../../../layout/headers/sectionsubheading';
import { SectionH1 } from '@components/components/layout/headers/sectionh1';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';





export const IntroProduct = async ({params:{locale}}) => {

  const i18nNamespaces = ['tecoguide'];

  const { t } = await initTranslations(locale, i18nNamespaces);


  const translation = t('Tecoguide-para');
  const formattedTranslation = translation
    .replace(/TecoGuide/g, '<strong>TecoGuide</strong>')
  


  return (
    <section className='relative flex flex-col items-center justify-center pt-36 pb-16'>
      <MaxWidthWrapper>
        <div>
           <SectionHeadingSpacing>
              <SectionH1 className='text-white max-w-5xl text-4xl md:text-7xl text-center mb-4 text-pretty'>
              {t('Tecoguide-title')}
              </SectionH1>  
              <p className=' text-jaune max-w-3xl text-base md:text-lg text-center py-4' >
                {t('Tecoguide-para-3')}
              </p> 
              <p  className='max-w-3xl text-base md:text-lg text-center py-3 font-bold' >
                {t('Tecoguide-para-4')}
              </p> 
              <p
                className="max-w-3xl text-base md:text-lg text-center py-3"
                dangerouslySetInnerHTML={{ __html: formattedTranslation }}
              />
           </SectionHeadingSpacing>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
 