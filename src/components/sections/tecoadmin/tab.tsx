'use client'



import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonApp } from '@components/components/button/button-app';
import { AnimatePresence, motion } from "framer-motion";
import { MaxWidthWrapper } from '../../layout/wrapperwidth/maxwidth';
import { FaChartBar, FaPaperPlane, FaSchool, FaUserPlus } from 'react-icons/fa';




const VerticalSlideFeaturesAdmin = () => {
  const [selected, setSelected] = useState(0);

  const { t } = useTranslation();

const FEATURESS = [
  {
    title: t('Teco-title'),
    description: t('Tecogpt-description'),
    text: t('Teco-text'),
    image:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/tecoguide/tecoguide'
  },
  {
    title: t('Search-title'),
    description: t('Search-description'),
    text: t('Search-text'),
    image:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/tecoguide/teco-fetaure-1'
  },
  {
    title: t('Fulfill-title'),
    description: t('Fulfill-description'),
    text: t('Fulfill-text'),
    image:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/tecoguide/feature-2'
    
  },
  {
    title: t('Map-title'),
    description: t('Map-description'),
    text: t('Map-text'),
    image:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/tecoguide/teco-feature-3'
    
  },
  {
    title: t('Resources-title'),
    description: t('Resources-description'),
    text: t('Resources-text'),
    image:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/tecoguide/tecoguide'
   
  },
];


const FEATURES = [
    {
      text: t('Teco-how-text-1'),
      icon: <FaSchool className="text-[#FCDC2A] text-[70px] md:text-[100px] block mb-2" />,
      title: t('Teco-how-title-1'),
      description: t('Teco-how-description-1')
    },
    {
      text: t('Teco-how-text-2'),
      icon: <FaPaperPlane className="text-[#FCDC2A] text-[70px] md:text-[100px] block mb-2" />,
      title: t('Teco-how-title-2'),
      description: t('Teco-how-description-2')
    },
    {
      text: t('Teco-how-text-3'),
      icon: <FaChartBar className="text-[#FCDC2A] text-[70px] md:text-[100px] block mb-2" />,
      title: t('Teco-how-title-3'),
      description:t('Teco-how-description-3')
    },
    {
      text: t('Teco-how-text-4'),
      icon: <FaUserPlus className="text-[#FCDC2A] text-[70px] md:text-[100px] block mb-2" />,
      title: t('Teco-how-title-4'),
      description: t('Teco-how-description-4'),
    },
  ];

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};


const TextElement = ({ text, description }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <h5 className='font-bold mb-4 text-3xl'>{description}</h5>
        <p className='text-lg mb-4'>{text}</p>
        <div className='flex'>
           <ButtonApp route="https://app.tecoguide.com/accountcreation" text='Get Started' ctaClasses='bg-blue-500' isOddCard={true}   /> 
        </div>
      </div>
    </div>
  );
};
  
  return (
    <MaxWidthWrapper className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-12 md:gap-12 md:px-8 rounded-2xl relative z-20">
    <div className='col-span-1 lg:col-span-1 lg:flex lg:justify-center'>
      <Tabs selected={selected} setSelected={setSelected} />
    </div>
    <AnimatePresence mode="wait">
      {FEATURES.map((tab, index) => {
        return selected === index ? (
          <>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            key={index}
            className="col-span-1 lg:col-span-1 flex flex-col lg:flex-row items-start lg:items-center"
          >
            <div className="flex w-full lg:w-full items-start lg:items-center h-[350px] lg:h-[450px] relative mb-6 lg:mb-0">
            
            </div>
          </motion.div>
           <div className="col-span-2 lg:col-span-2 w-full lg:w-full flex items-start lg:items-center">
           <TextElement text={tab.text} description={tab.description} />
         </div>
         </>
        ) : null;
      })}
    </AnimatePresence>
  </MaxWidthWrapper>
  );
};



const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-1/2 md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[50px] max-w-[80px] lg:max-w-[180px] text-start text-md font-bold transition-colors md:text-xl ${
            selected
              ? "text-jaune"
              : "text-slate-400 group-hover:text-slate-500"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-jaune md:w-2"
        />
      )}
    </div>
  );
};

export default VerticalSlideFeaturesAdmin;

