import React from 'react';
import { SectionHeadingSpacing } from '@components/components/layout/headers/sectionheadingspacing';
import { SectionH1 } from '@components/components/layout/headers/sectionh1';
import { ButtonApp } from '@components/components/button/button-app';
import initTranslations from '@components/app/i18n';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';
import { nothing_mono } from '@components/app/font';

export const TecoadminIntro = async ({ params: { locale } }) => {
    const { t } = await initTranslations(locale, ['tecoadmin']);


    const paragraphe = t('Teco-admin-title-2')

    const regex = /(Future of Work|futuro del trabajo)/gi;

    // Split paragraph into array, keeping the delimiter in the result
    const partss = paragraphe.split(regex);


    return (
        <section className='relative flex flex-col items-center justify-center pt-36 pb-12'>
            <MaxWidthWrapper>
            <div className="relative z-10 flex flex-col items-center">
                <SectionHeadingSpacing>
                    <SectionH1 className='text-white max-w-5xl text-4xl md:text-7xl text-center mb-4' persistCenter>
                        {t('Teco-admin-title-1')} <span className={'text-4xl text-jaune md:text-7xl py-4'}>
                        {partss.map((part, index) => {
                 
                  if (part.match(regex)) {
                    // Return the part in a span with special styling
                    return (
                      <p
                        key={index}
                        style={{ fontWeight: 700,paddingBlock:"22px" }}
                        className={nothing_mono.className}
                      >
                        {part}
                      </p>
                    );
                  }
                  // Return normal text
                  return part;
                })}
                        </span>
                    </SectionH1>
                    <p className='max-w-2xl mx-auto text-base md:text-lg text-center text-pretty'>
                        {t('Teco-admin-subtitle')}
                    </p>
                    <p className='max-w-2xl mx-auto  text-base md:text-lg text-center text-pretty'>
                        {t('Teco-admin-subtitle-2')}
                    </p>
                    <p className='max-w-2xl mx-auto text-base md:text-lg text-center text-pretty'>
                        {t('Teco-admin-subtitle-3')}
                    </p>
                </SectionHeadingSpacing>
                <div className="flex justify-center mt-4">
                    <ButtonApp route='/contact-us' isOddCard={true} ctaClasses='bg-jaune' text={t('Button-intro')} />
                </div>
            </div>
            </MaxWidthWrapper>
        </section>
    );
};
