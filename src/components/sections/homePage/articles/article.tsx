import React from 'react'
import ResponsiveImage from '../hero/responsive-image'
import initTranslations from "@components/app/i18n";
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { ButtonApp } from '@components/components/button/button-app';
import { SectionH3 } from '@components/components/layout/headers/sectionh3';
import Image from 'next/image';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';


const ArticleSection1 = async ({params:{locale}}) => {

 const { t } = await initTranslations(locale, ['Homepage']);

 const para = t('marathon-subtitle');
 const formatted = para.replace(/Inspírame/g, '<strong>Inspírame</strong>').replace(/EdTech Mentor/g, '<strong>EdTech Mentor</strong>');

 const link = 'https://27zero-new-site.webflow.io/edtech-mentor-interviews/maria-medrano'

  return (
    <section className='relative flex flex-col md:flex-row justify-around items-center py-24 xl:py-12 pb-0'>
      <MaxWidthWrapper>
       <div className='w-full relative lg:mx-auto flex flex-col lg:flex-row items-center'>
          
       <div className='relative w-full lg:w-1/2 px-4'>
          <SectionHeadingSpacing>
             <h5 className="text-start max-w-xl text-jaune">{t('Bridge-intro-overline')}</h5>
             <SectionH3>{t('marathon-title')}</SectionH3>
          </SectionHeadingSpacing>
          <div className='relative mt-6 maw-w-xl'>
             <p className='font-normal max-w-xl md:text-lg pb-4 text-pretty leading-6 tracking-wide'  dangerouslySetInnerHTML={{ __html:formatted  }}/>
             <div className='flex mt-4'>
                <a href={link}  className=' bg-jaune shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white] items-center gap-2 rounded px-5 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg'  target="_blank" rel="noreferrer">
                  {t('Bridge-intro-button')}
                </a>
             </div>
          </div>
       </div>
       
       <div className='w-full lg:w-1/2 md:px-4 mt-8'>
         <div className='relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg'>
            <Image 
               alt='Latino family posing for a picture' 
               src='https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/marathon'
               className='absolute object-contain w-full h-full rounded-lg' 
               fill={true}  
               priority={false}
            />
         </div>
      </div>
       
    </div>
    </MaxWidthWrapper>
 </section>

  )
}

export default ArticleSection1

