'use client'

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { SectionSubheading } from '../../../layout/headers/sectionsubheading';
import { SectionH3 } from '@components/components/layout/headers/sectionh3';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';






function FAQSection() {



    const { t } = useTranslation();

 

let faq = [
    {
        id: 1,
        question: t('Teco-faq-1-q'),
        answer: t('Teco-faq-1-r')
    },
    {
        id: 2,
        question: t('Teco-faq-2-q'),
        answer: t('Teco-faq-2-r')
    },
    {
        id: 3,
        question: t('Teco-faq-3-q'),
        answer: t('Teco-faq-3-r')
    },
    {
        id: 4,
        question: t('Teco-faq-4-q'),
        answer: t('Teco-faq-4-r')
    },
    {
        id: 5,
        question: t('Teco-faq-5-q'),
        answer: t('Teco-faq-5-r')
    },
    {
        id: 6,
        question: t('Teco-faq-6-q'),
        answer: t('Teco-faq-6-r')
    },
    {
        id: 7,
        question: t('Teco-faq-7-q'),
        answer: t('Teco-faq-7-r')
    },
    {
        id: 8,
        question: t('Teco-faq-8-q'),
        answer: t('Teco-faq-8-r')
    },
    {
        id: 9,
        question: t('Teco-faq-9-q'),
        answer: t('Teco-faq-9-r')
    },
  ];


  const [questions, setQuestions] = useState(faq.slice(0, 9));
  const [visibleCount, setVisibleCount] = useState(4);
  const [expanded, setExpanded] = useState(null);


  const handleChange = (panel) => {
      setExpanded(expanded === panel ? null : panel);
  };

  

  return (
      <section className="relative z-10 py-16 pb-36">
        <MaxWidthWrapper>
          <SectionHeadingSpacing>
              <SectionH3 className="text-4xl text-jaune  md:text-5xl font-bold mb-4" persistCenter>{t('faq-title')}</SectionH3>
              <SectionSubheading persistCenter>{t('faq-subtitle')}</SectionSubheading>
          </SectionHeadingSpacing>
          <div className="flex flex-col items-center">
              {questions.map((item, index) => (
                  <div key={item.id} className="w-full max-w-4xl mb-4">
                      <div
                          className={`cursor-pointer p-4 border rounded-lg ${expanded === index ? 'bg-white' : 'bg-gray-100'}`}
                          onClick={() => handleChange(index)}
                      >
                          <div className="flex justify-between items-center">
                              <h4 className="font-semibold text-black">{item.question}</h4>
                              {expanded === index ? <FaChevronUp className='text-black' /> : <FaChevronDown className='text-black' />}
                          </div>
                          {expanded === index && (
                              <p className="mt-4 text-black text-pretty">{item.answer}</p>
                          )}
                      </div>
                  </div>
              ))}
          </div>
          </MaxWidthWrapper>
      </section>
  );
}

export default FAQSection;