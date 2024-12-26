import React, { useState } from "react";
import { SectionHeadingSpacing } from "../../layout/headers/sectionheadingspacing";
import initTranslations from "@components/app/i18n";
import { SectionH2 } from "@components/components/layout/headers/sectionh2";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";


export const ShiftHightlightTabs = async ({params:{locale}}) => {

  const { t } = await initTranslations(locale, ['tecoadmin']);



const TAB_DATA = [
  {
    id: 1,
    title: t('tab-data-1'),
  },
  {
    id: 2,
    title: t('tab-data-2'),
  },
  {
    id: 3,
    title: t('tab-data-3'),
  },
  {
    id: 4,
    title: t('tab-data-4'),
  },
  {
    id: 5,
    title: t('tab-data-5'),
  },
  {
    id: 6,
    title: t('tab-data-6'),
  },
  {
    id: 7,
    title: t('tab-data-7'),
  },
  {
    id: 8,
    title: t('tab-data-8'),
  },
];



  return (
    <section className="relative py-12">
      <MaxWidthWrapper>
      <SectionHeadingSpacing>
        <SectionH2 persistCenter>
          {t('partner-title')}
        </SectionH2>

      </SectionHeadingSpacing>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-8 pb-12 pt-4 lg:grid-cols-4">
        {TAB_DATA.map((t) => (
          <ToggleButton
            key={t.id}     
          >
            {t.title}
          </ToggleButton>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mx-auto">
         <div className="md:w-[450px] shadow-lg mb-4 rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6">
            <p className=" font-bold text-xl mb-4 text-center text-pretty">{t('partner-title-para1')}</p>
            <ul className="mx-auto">
              <li className="mb-2 flex items-center pl-6 leading-6 tracking-wide">
                <span className="inline-block w-4 h-4 bg-jaune mr-2"></span>{t('partner-title-para1-1')}

              </li>
              <li className="mb-2 flex items-center pl-6 leading-6 tracking-wide">
                <span className="inline-block w-4 h-4 bg-jaune mr-2"></span>{t('partner-title-para1-2')}

              </li>
              <li className="mb-2 flex items-start pl-6 leading-6 tracking-wide">
               <span className="inline-block w-4 h-4 bg-jaune mr-2 mt-1"></span>
              <div>
              {t('partner-title-para1-3')}
                <ul className="pl-6">
                  <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('partner-title-para1-3-1')}</li>
                  <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('partner-title-para1-3-2')}</li>
                  <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('partner-title-para1-3-3')}</li>
                </ul>
              </div>
            </li>
            </ul>
          </div>
          <div className="md:w-[450px] shadow-lg mb-4 rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6">
            <p className=" font-bold text-xl mb-4 text-center text-pretty">{t('partner-title-para2')} </p>
            <ul className="">
              <li className="mb-2 flex items-center pl-6 leading-6 tracking-wide">
                <span className="inline-block w-4 h-4 bg-jaune mr-2"></span>{t('partner-title-para2-1')}

              </li>
              <li className="mb-2 flex items-center pl-6 leading-6 tracking-wide">
                <span className="inline-block w-4 h-4 bg-jaune mr-2"></span>{t('partner-title-para2-2')}
              </li>
              <li className="mb-2 flex items-start pl-6 leading-6 tracking-wide">
              <span className="inline-block w-4 h-4 bg-jaune mr-2 mt-1"></span>
              <div>
              {t('partner-title-para2-3')}
                <ul className="pl-6">
                  <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('partner-title-para2-3-1')}</li>
                  <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('partner-title-para2-3-2')}</li>
                  <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('partner-title-para2-3-3')}</li>
                  <li><span className="inline-block w-2 h-2 bg-jaune mr-2"></span>{t('partner-title-para2-3-4')}</li>
                </ul>
              </div>
            </li>
            </ul>
          </div>
      </div>
      </MaxWidthWrapper>
    </section>
  );
};

const ToggleButton = ({ children }) => {
  return (
   
      <div
        className="w-full flex items-center justify-center text-xs text-center font-medium transition-all md:text-base rounded-2xl border border-jaune bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-3 text-pretty">
        {children}
      </div>
  
  );
};
