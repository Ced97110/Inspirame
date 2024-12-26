import React from 'react'
import ResponsiveImage from '../hero/responsive-image';
import { nothing_mono } from '@components/app/font';
import initTranslations from '@components/app/i18n';
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { ButtonApp } from '@components/components/button/button-app';
import { SectionH2 } from '@components/components/layout/headers/sectionh2';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';

const IntroInspirame = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ['Homepage']);

  const paragraph = t('intro-paragraph-1');

  const paragraphe = t('About-fourth-para');

  // Regular expression to split by "Future of Work" or "futuro del trabajo"
  const regex = /(Future of Work|futuro del trabajo)/gi;

  // Split paragraph into array, keeping the delimiter in the result
  const partss = paragraphe.split(regex);

  const translationFirst = t('About-first-para');
  const formattedTranslation = translationFirst
    .replace(/Inspirame/g, '<strong>Inspirame</strong>')
    .replace(/diversity|diversidad/g, '<strong>$&</strong>')
    .replace(/equity|equidad/g, '<strong>$&</strong>')
    .replace(/inclusion|inclusión/g, '<strong>$&</strong>');

  const translationSecond = t('About-second-para');
  const formattedTranslationSecond = translationSecond
    .replace(/Inspirame/g, '<strong>Inspirame</strong>')
    .replace(/workforce|laboral/g, '<strong>$&</strong>');

  const translationThird = t('About-third-para');
  const formattedTranslationThird = translationThird
    .replace(/join them|unirse/g, '<strong>$&</strong>');

  return (
    <section className="relative z-10 py-12">
      <MaxWidthWrapper>
        <div className="relative w-full flex flex-col lg:flex-row justify-center items-center h-fit gap-8 2xl:gap-48">
          <div className="">
            <div className="max-w-[670px]">
              <SectionHeadingSpacing>
                <SectionH2>{t('About-title')}</SectionH2>
              </SectionHeadingSpacing>
              <div className="font-normal md:text-sm pb-4 leading-6 tracking-wide"></div>
              <p
                className="font-normal text-base md:text-lg pb-4 leading-6 tracking-wide"
                dangerouslySetInnerHTML={{ __html: formattedTranslation }}
              />
              <p
                className="font-normal text-base md:text-lg pb-4 leading-6 tracking-wide"
                dangerouslySetInnerHTML={{ __html: formattedTranslationSecond }}
              />
              <p
                className="font-normal text-base md:text-lg pb-4 leading-6 tracking-wide"
                dangerouslySetInnerHTML={{ __html: formattedTranslationThird }}
              />
              <p className="text-base md:text-xl pb-4 leading-6 tracking-wide">
                {partss.map((part, index) => {
                  // Check if the part is our target text
                  if (part.match(regex)) {
                    // Return the part in a span with special styling
                    return (
                      <span
                        key={index}
                        style={{ fontWeight: 700 }}
                        className={nothing_mono.className}
                      >
                        {part}
                      </span>
                    );
                  }
                  // Return normal text
                  return part;
                })}
              </p>
            </div>
            <div className="mt-4 flex">
              <ButtonApp
                ctaClasses="bg-jaune"
                isOddCard={true}
                route="/about-us"
                text={t('About-button')}
              />
            </div>
          </div>

          <div className="flex items-center mx-auto mt-28 lg:mt-0">
            <ResponsiveImage
              src="https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/primary-logo-svg"
              height={200}
              width={243}
              priority={false}
              alt="Logo of TecoGuide"
              className="relative object-cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default IntroInspirame;
