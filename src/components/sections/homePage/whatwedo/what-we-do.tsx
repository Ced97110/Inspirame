import { ShimmerBorderCard } from "@components/components/card/card";
import { FaDisplay } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { RiGuideFill } from "react-icons/ri";
import { MaxWidthWrapper } from "../../../layout/wrapperwidth/maxwidth";
import { t } from "i18next";
import initTranslations from "@components/app/i18n";




export const WhatWedo = async ({params:{locale}}) => {

  const { t } = await initTranslations(locale, ['Homepage']);

    const CARDS = [
      {
        id: 1,
        Icon: <FaDisplay  className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" /> ,
        title: (
          <div className="flex flex-col">
            <p className="text-4xl">
              {t('Teco-whatwedo-exposee').split(' ')[0]} {/* "Exposure" */}
            </p>
            <p className="text-2xl">
              {t('Teco-whatwedo-exposee').split(' ').slice(1).join(' ')} {/* "to opportunities" */}
            </p>
          </div>
        ),
        text: t('Teco-whatwedo-expose-text'),
        ctaClasses: "bg-violet-300",
        routeTo: "#",
        
      },
      {
        id: 2,
        Icon: <GiTeacher  className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune"/>,
        title: (
          <div className="flex flex-col">
            <p className="text-4xl">
              {t('Teco-whatwedo-teach').split(' ')[0]} {/* "Exposure" */}
            </p>
            <p className="text-2xl">
              {t('Teco-whatwedo-teach').split(' ').slice(1).join(' ')} {/* "to opportunities" */}
            </p>
          </div>
        ),
        text: t('Teco-whatwedo-teach-text'),
        ctaClasses: "bg-pink-300",
        routeTo: "#",
        
      },
      {
        id: 3,
        Icon: (
          <RiGuideFill className="relative z-10 mb-10 mt-2 rounded-full border-2 border-jaune bg-slate-900 p-4 text-7xl text-jaune" />
        ),
        title: (
          <div className="flex flex-col">
            <p className="text-4xl">
              {t('Teco-whatwedo-guide').split(' ')[0]} {/* "Exposure" */}
            </p>
            <p className="text-2xl">
              {t('Teco-whatwedo-guide').split(' ').slice(1).join(' ')} {/* "to opportunities" */}
            </p>
          </div>
        ),
        text: t('Teco-whatwedo-guide-text'),
        ctaClasses: "bg-red-300",
        routeTo: "#",
      },
    ];
  return (
    <section className="w-full py-16">
      <MaxWidthWrapper>
      <div className="bg-slate-950 flex flex-col lg:flex-row gap-y-4 gap-x-4 pb-10 pt-12 ">
      {CARDS.map(({id,text,title,Icon}) => (
        <ShimmerBorderCard key={id} title={title} text={text} Icon={Icon} />
        ))}
      </div>
      </MaxWidthWrapper>
    </section>
  
  );
};




