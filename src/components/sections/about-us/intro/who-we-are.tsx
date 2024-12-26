import React from 'react'
import ResponsiveImage from '../../homePage/hero/responsive-image'
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { MaxWidthWrapper } from '../../../layout/wrapperwidth/maxwidth';
import initTranslations from '@components/app/i18n';
import OppoScroll from './opp-scroll';
import { SectionH3 } from '@components/components/layout/headers/sectionh3';




export const WhoWeAre = async ({params:{locale}}) => {


  const { t } = await initTranslations(locale, ['about-us']);



  const translationSubtitle = t('who-subtitle')
  const formattedTranslationSubtitle = translationSubtitle
  .replace(/Lived|vivida/g, '<strong>$&</strong>')
  .replace(/Professional|profesional/g, '<strong>$&</strong>')

  const translationFirst = t('who-we-are-para-1');
  const formattedTranslation = translationFirst
    .replace(/Maria Medrano|María Medrano/g, '<a href="https://www.linkedin.com/in/mariamedrano" target="_blank"><strong>Maria Medrano</strong></a>')
    .replace(/Mauricio Gonzalez|Mauricio González/g, '<a href="https://www.linkedin.com/in/mauricio-gonzalez-14170346" target="_blank"><strong>Mauricio Gonzalez</strong></a>')
    .replace(/(aka Professor G)/g, '<strong>$1</strong>')
    .replace(/low-income Mexican American backgrounds|entornos mexicano-estadounidenses de bajos ingresos/g, '<strong>$&</strong>');
  
  


  const translationSecond = t('who-para-2');
  const formattedTranslationSecond = translationSecond
  .replace(/Professor G/g, '<strong>Professor G</strong>')
  .replace(/counselor and teacher at community colleges|consejero y maestro en colegios comunitarios,/g, '<strong>$&</strong>')
 


  const translationThird = t('who-para-3');
  const formattedTranslationThird = translationThird
  .replace(/Mauricio/g, '<strong>Mauricio</strong>')
  .replace(/executive roles at major global corporations|puestos ejecutivos en importantes corporaciones globales,/g, '<strong>$&</strong>')
 

  const translationFourth = t('who-para-4');
  const formattedTranslationFourth = translationFourth
  .replace(/TecoGuide/g, '<strong>TecoGuide</strong>')

  const translationFourthOne = t('who-para-4-4');

 
const items = [
  {
    id: 1,
    title: "",
    description:formattedTranslation,
    img: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/maria-mauricio-sacramento",
  },
  {
    id: 2,
    title: "",
    description:formattedTranslationSecond ,
    img: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/mauricio",
  },
  {
    id: 3,
    title: "",
    description:formattedTranslationThird,
    img: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/Maria",
  },
  {
    id: 4,
    title: "",
    description:formattedTranslationFourth,
    img: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/maria-mauricio-cosecha",
  },
 
];


  
  return (
    <section className='relative py-12'>
      <MaxWidthWrapper>
      <SectionHeadingSpacing>
        <SectionH3 persistCenter>{t('who-title')}</SectionH3>
        <p
        className='font-normal text-pretty text-center text-base pb-4 leading-6 tracking-wide max-w-xl mx-auto'
        dangerouslySetInnerHTML={{ __html: formattedTranslationSubtitle }}
      />
      </SectionHeadingSpacing>
      <p
        className='font-normal text-pretty text-base  pb-4 leading-6 tracking-wide lg:hidden'
        dangerouslySetInnerHTML={{ __html: formattedTranslation }}
      />
      <div className='grid grid-cols-2'>
        <div className='col-span-2 justify-center lg:col-span-1 flex items-center lg:hidden'>
          <p
            className='font-normal text-pretty text-base  pb-4 leading-6 tracking-wide'
            dangerouslySetInnerHTML={{ __html: formattedTranslationSecond }}
          />
        </div>
        <div className='col-span-2 md:flex md:justify-center lg:col-span-1 lg:hidden my-4'>
          <ResponsiveImage
            src='https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/mauricio'
            className='rounded-xl'
            height={600}
            width={600}
            alt='Mauricio co-founder inspirame'
            priority={false}
          />
        </div>
        <div className='lg:hidden justify-center col-span-2 md:col-span-2 flex items-center'>
          <p
            className='font-normal text-pretty text-base  pb-4 leading-6 tracking-wide lg:hidden'
            dangerouslySetInnerHTML={{ __html: formattedTranslationThird }}
          />
        </div>
        <div className='col-span-2 md:flex md:justify-center lg:col-span-1 lg:hidden my-4'>
          <ResponsiveImage
            src='https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/about-us/Maria'
            className='rounded-xl'
            height={600}
            width={600}
            alt='Mauricio co-founder inspirame'
            priority={false}
          />
        </div>
        <div className='col-span-2 lg:hidden'>
          <p
            className='font-normal text-pretty text-base  pb-4 leading-6 tracking-wide'
            dangerouslySetInnerHTML={{ __html: formattedTranslationFourth }}
          />
        </div>
      </div>
      </MaxWidthWrapper>
      <div className='hidden lg:block'>
        <OppoScroll items={items} />
      </div>
  </section>
  )
}
