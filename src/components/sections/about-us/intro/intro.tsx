'use client'
import React from 'react';
import 'next-cloudinary/dist/cld-video-player.css';
import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import { useTranslation } from 'react-i18next';
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { SectionH1 } from '../../../layout/headers/sectionh1';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';
import { nothing_mono } from '@components/app/font';


export const IntroAbout = () => {
  const { t } = useTranslation();
  const hello = 'https://res.cloudinary.com/dqr6k0yey/video/upload/q_auto/f_webm,vc_vp9/v1714757596/inspirame/video-ceo';



  const translation = t('Intro-para-1');
  const formattedTranslation = translation
    .replace(/Inspirame/g, '<strong>Inspirame</strong>')
  

  return (
    <section className="w-full flex flex-col items-center pt-2 pb-24 md:pt-32">
      <MaxWidthWrapper className="w-full flex flex-col md:flex-row md:items-center pt-36 md:pt-0">
        {/* Text Section */}
        <div className="relative z-10 h-full flex flex-col items-center md:items-start md:flex-grow p-4">
          <SectionHeadingSpacing>
            <SectionH1 className={`${nothing_mono.className} text-center md:text-left text-jaune font-extrabold text-4xl md:text-7xl`}>{t('Intro-title')}</SectionH1>
            <p
                className="max-w-3xl text-base md:text-lg py-3"
                dangerouslySetInnerHTML={{ __html: formattedTranslation }}
              />
            <p className='max-w-3xl text-base md:text-lg text-pretty'>{t('Intro-para-2')}</p>
          </SectionHeadingSpacing>
        </div>

        {/* Video Section */}
        <div className="w-full mt-6 md:mt-0 md:w-1/2 md:ml-6">
          <CldVideoPlayer
            width="1920"
            height="1080"
            logo={{
              imageUrl: getCldImageUrl({
                src: 'poster-video-inspirame'
              }),
              onClickUrl: '/'
            }}
            bigPlayButton={true}
            className="video-player"
            src={hello}
            poster={getCldImageUrl({
              src: 'poster-video-inspirame',
              crop: { type: 'fill_pad', aspectRatio: '16:9', width: '1920', height: '1080' }
            })}
            colors={{
              base: '#000',
              text: '#FCDC2A'
            }}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
