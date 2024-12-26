'use client'
import React from 'react';
import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { useTranslation } from 'react-i18next';
import { SectionHeadingSpacing } from '../../../layout/headers/sectionheadingspacing';
import { SectionSubheading } from '../../../layout/headers/sectionsubheading';
import dynamic from 'next/dynamic';
import { SectionH3 } from '@components/components/layout/headers/sectionh3';

export const Tutorial = () => {
  const { t } = useTranslation();

  const CldVideoPlayer = dynamic(() =>
    import('next-cloudinary').then((mod) => mod.CldVideoPlayer)
  );

  return (
    <section className='md:min-h-max py-24 min-h-screen relative z-10'>
      <SectionHeadingSpacing>
        <SectionH3 className='text-4xl text-center text-gray-200 font-bold mb-8' persistCenter>
          {t('Teco-tuto-title')}
        </SectionH3>
        <SectionSubheading className='max-w-4xl mx-auto' persistCenter>
          {t('Teco-tuto-para')}
        </SectionSubheading>
      </SectionHeadingSpacing>
      <div className='md:flex md:justify-center md:max-w-2xl md:mx-auto'>
        <CldVideoPlayer
          id='tutorial-video'
          width='1920'
          height='1080'
          logo={{
            imageUrl: getCldImageUrl({
              src: 'poster-video-inspirame',
            }),
            onClickUrl: '/',
          }}
          bigPlayButton={true}
          className='video-player'
          src='inspirame/teco-tutorial'
          colors={{
            base: '#000',
            text: '#FCDC2A',
          }}
        />
      </div>
    </section>
  );
};
