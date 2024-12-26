'use client';


import React from 'react'
import { MdSensorOccupied, MdSportsScore } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineDiversity3 } from "react-icons/md";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { ShimmerBorderCard } from '@components/components/card/card';
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { SectionSubheading } from '../../../layout/headers/sectionsubheading';
import { MaxWidthWrapper } from '../../../layout/wrapperwidth/maxwidth';
import { SectionH2 } from '@components/components/layout/headers/sectionh2';


export const OurValues = () => {
  const { t } = useTranslation();

  const business = [
    {
      text: t('values-equity'),
      icon: <FaSchoolCircleCheck fontSize={56} className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" />,
      title: t('values-equity-title')
    },
    {
      text: t('values-inclusivity'),
      icon: <MdOutlineDiversity3 fontSize={56} className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" />,
      title: t('values-Inclusivity-title')
    },
    {
      text: t('values-innovation'),
      icon: <FaRegLightbulb fontSize={56} className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" />,
      title: t('values-innovation-title')
    },
    {
      text: t('values-Collaboration'),
      icon: <FaPeopleCarryBox fontSize={56} className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" />,
      title: t('values-Collaboration-title')
    },
    {
      text: t('values-empowerment'),
      icon: <MdSensorOccupied fontSize={56} className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" />,
      title: t('values-empowerment-title')
    },
    {
      text: t('values-resilience'),
      icon: <MdSportsScore  fontSize={56} className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" />,
      title: t('values-resilience-title')
    },
  ];

  return (
    <section className='w-full flex justify-center flex-col items-center py-12'>
      <MaxWidthWrapper>
      <div className="relative z-10 h-full flex flex-col items-center md:flex-grow">
        <SectionHeadingSpacing>
          <SectionH2 persistCenter>{t('values-title')}</SectionH2>
          <p className='max-w-xl text-center text-pretty text-base md:text-lg'>{t('values-subtitle')}</p>
        </SectionHeadingSpacing>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
        {business.map(({ text, icon, title }, i) => (
          <div
          key={i}
          className={`flex justify-between ${
            i === 3 || i === 4 ? 'lg:col-span-1 mx-auto' : ''
          }`}
        >
            <ShimmerBorderCard title={title} text={text} Icon={icon} className='h-96' />
          </div>
        ))}
      </div>
      </MaxWidthWrapper>
    </section>
  );
};