'use client'


import React from 'react';
import { FaUserPlus, FaPaperPlane, FaChartBar, FaSchool } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { MaxWidthWrapper } from '../../layout/wrapperwidth/maxwidth';
import { SectionSubheading } from '../../layout/headers/sectionsubheading';
import { SectionHeadingSpacing } from '../../layout/headers/sectionheadingspacing';
import { ButtonApp } from '@components/components/button/button-app';
import { SectionH2 } from '@components/components/layout/headers/sectionh2';


const HowitWorks = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const { t } = useTranslation();

  const business = [
    {
      text: t('Teco-how-text-4'),
      icon: <FaUserPlus className="text-[#FCDC2A] text-[40px] md:text-[40px] block mb-2" />,
      title: t('Teco-how-title-4'),
      description: t('Teco-how-description-4'),
    },
    {
      text: t('Teco-how-text-2'),
      icon: <FaPaperPlane className="text-[#FCDC2A] text-[40px] md:text-[40px] block mb-2" />,
      title: t('Teco-how-title-2'),
      description: t('Teco-how-description-2')
    },
    {
      text: t('Teco-how-text-3'),
      icon: <FaChartBar className="text-[#FCDC2A] text-[40px] md:text-[40px] block mb-2" />,
      title: t('Teco-how-title-3'),
      description: t('Teco-how-description-3')
    },
    {
      text: t('Teco-how-text-1'),
      icon: <FaSchool className="text-[#FCDC2A] text-[40px] md:text-[40px] block mb-2" />,
      title: t('Teco-how-title-1'),
      description: t('Teco-how-description-1')
    },
  ];

  return (
    <section className='relative py-12'>
      <MaxWidthWrapper>
        <SectionHeadingSpacing>
          <SectionH2>{t('Teco-how-title')}</SectionH2>
          <SectionSubheading className='text-start'>
            {t('Teco-how-subtitle')}
          </SectionSubheading>
        </SectionHeadingSpacing>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 lg:mt-0'>
          <div className='w-full flex items-center'>
            <div>
              <h5 className='text-2xl font-bold'> {t('Teco-exposure-title')}</h5>
              <ul className="pl-6">
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-exposure-1')}</li>
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-exposure-2')}</li>
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-exposure-3')}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            {business.slice(0, 2).map((item, i) => (
              <div key={i} className="p-2 md:w-1/2 w-full flex justify-center rounded-lg">
                <div
                  className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 hover:scale-[1.01] hover:bg-slate-800/50 border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-4 transition-transform duration-300 ease-in-out"
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="font-semibold text-white text-xl mb-4">{item.title}</h3>
                    <p className='text-white mb-8 text-pretty'>{hoverIndex === i ? item.description : item.text}</p>
                    {hoverIndex === i && (
                      <ButtonApp route='/contact-us' text={t('Teco-button')} isOddCard={true} ctaClasses='bg-jaune' />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 lg:mt-0'>
          <div className='w-full flex items-center'>
            <div className='w-full'>
              <h5 className='text-2xl font-bold'>{t('Teco-tools-title')}</h5>
              <ul className="pl-6">
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-tools-1')}</li>
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-tools-2')}</li>
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-tools-3')}</li>
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-tools-4')}</li>
                <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('Teco-tools-5')}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            {business.slice(2, 4).map((item, i) => (
              <div key={i + 2} className="p-2 md:w-1/2 w-full flex justify-center rounded-lg">
                <div
                  className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 hover:scale-[1.01] hover:bg-slate-800/50 border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-4"
                  onMouseEnter={() => setHoverIndex(i + 2)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="font-semibold text-white text-xl mb-4">{item.title}</h3>
                    <p className='text-white mb-8 text-pretty'>{hoverIndex === i + 2 ? item.description : item.text}</p>
                    {hoverIndex === i + 2 && (
                      <ButtonApp route='/contact-us' text={t('Teco-button')} isOddCard={true} ctaClasses='bg-jaune' />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowitWorks;