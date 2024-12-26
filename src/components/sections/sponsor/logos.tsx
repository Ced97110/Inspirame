
import { ButtonApp } from "@components/components/button/button-app";
import { CarouselParnter } from "../homePage/carousel/carousel-parnter";
import { SectionHeadingSpacing } from "../../layout/headers/sectionheadingspacing";
import { SectionSubheading } from "../../layout/headers/sectionsubheading";
import initTranslations from "@components/app/i18n";
import { SectionH3 } from "@components/components/layout/headers/sectionh3";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";
import { Logos } from "../homePage/carousel/carousel";



const DoubleScrollingLogos = async ({params:{locale}}) => {


  const ToggleButton = ({ children }) => {
    return (
     
        <div
          className="w-full text-xs text-center font-medium transition-all md:text-base rounded-2xl border border-jaune bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-3">
          {children}
        </div>
    
    );
  };
  
  const TAB_DATA = [
    {
      id: 1,
      title: "High Schools",
    },
    {
      id: 2,
      title: "Community Colleges",
    },
    {
      id: 3,
      title: "Universities",
    },
    {
      id: 4,
      title: "Categorical Programs",
    },
    {
      id: 5,
      title: "NonProfits",
    },
    {
      id: 6,
      title: "Government",
    },
    {
      id: 7,
      title: "Industry",
    },
    {
      id: 8,
      title: "Foundations",
    },
  ];

  const { t } = await initTranslations(locale, ['Homepage']);

  return (
  <section className="flex flex-col items-center py-12">
   
    
     <SectionHeadingSpacing>
      <SectionH3 persistCenter>
       {t('partners-title')}
      </SectionH3>
      <SectionSubheading className="max-w-2xl mx-auto" persistCenter>
      {t('Partners-para-1')}
      </SectionSubheading>
      

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 px-8 pb-12 pt-4 lg:grid-cols-4">
        {TAB_DATA.map((t) => (
          <ToggleButton
            key={t.id}     
          >
            {t.title}
          </ToggleButton>
        ))}
      </div>
      <p className='text-center text-base md:text-xl max-w-2xl mx-auto text-pretty'>
      {t('partners-subtitle')}
      </p>
    </SectionHeadingSpacing>

    <div className="flex justify-center">
     <ButtonApp route='/tecoadmin' isOddCard={true} ctaClasses='bg-jaune' text={t('Partners-button')} />
    </div>
   
  
     <Logos />
   
  </section>
  
 
  );
};



export default DoubleScrollingLogos;