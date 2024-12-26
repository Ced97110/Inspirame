import { ShimmerBorderCard } from "@components/components/card/card";
import { MaxWidthWrapper } from "../../layout/wrapperwidth/maxwidth";
import { SectionH1 } from "../../layout/headers/sectionh1";
import { SectionHeadingSpacing } from "../../layout/headers/sectionheadingspacing";
import { SectionSubheading } from "../../layout/headers/sectionsubheading";
import initTranslations from "@components/app/i18n";
import { IoIosInformationCircle } from "react-icons/io";
import { BsPersonRaisedHand } from "react-icons/bs";
import { GiNewspaper } from "react-icons/gi";
import ContactForm from "./contact-form";
import { BiSupport } from "react-icons/bi";

export const Contact = async ({ params: { locale } }) => {
    const i18nNamespaces = ['contact'];

    const { t } = await initTranslations(locale, i18nNamespaces);

    const data = [
        {
            title: t('Contact-general-title'),
            icon: <IoIosInformationCircle className="text-[#FCDC2A] text-[70px] md:text-[50px] block mb-2" />,
            text: t('Contact-general-para'),
           
        },
        {
            title: t('Contact-career-title'),
            icon: <BsPersonRaisedHand className="text-[#FCDC2A] text-[70px] md:text-[50px] block mb-2" />,
            text: t('Contact-career-para'),
           
        },
        {
            title: t('Contact-media-title'),
            icon: <GiNewspaper className="text-[#FCDC2A] text-[70px] md:text-[50px] block mb-2" />,
            text: t('Contact-media-para'),
           
        },
        {
            title: t('Contact-tech-title'),
            icon: <BiSupport  className="text-[#FCDC2A] text-[70px] md:text-[50px] block mb-2" />,
            text: t('Contact-tech-para'),
           
        }
    ];

    return (
        <>
            <section className="overflow-hidden flex flex-col items-center relative z-20 pt-36 pb-4">
                <MaxWidthWrapper>
                <SectionHeadingSpacing>
                    <SectionH1 className="text-white max-w-3xl text-4xl md:text-6xl text-center mx-auto mb-4 font-bold" persistCenter>
                        {t('Contact-title')}
                    </SectionH1>
                    <p className='text-center text-base md:text-xl max-w-2xl mx-auto text-pretty'>
                        {t('Contact-para')}
                    </p>
                </SectionHeadingSpacing>
                </MaxWidthWrapper>
            </section>
            <section>
             <MaxWidthWrapper>
                 <ContactForm />
            </MaxWidthWrapper>
            </section>
        </>
    );
};
