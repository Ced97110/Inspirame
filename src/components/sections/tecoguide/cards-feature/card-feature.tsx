import React from 'react';
import { MaxWidthWrapper } from '../../../layout/wrapperwidth/maxwidth';
import initTranslations from '@components/app/i18n';
import { ShimmerBorderCard } from '@components/components/card/card';

export default async function CardFeature({ params: { locale } }) {

  const { t } = await initTranslations(locale, ['tecoguide']);

  const items = [
    {
      title:t('Teco-card-community'),
      list:[t('Teco-card-community-1'),t('Teco-card-community-2'),t('Teco-card-community-3')]
    },
    {
      title:t('Teco-card-ged'),
      list:[t('Teco-card-ged-1'),t('Teco-card-ged-2'),t('Teco-card-ged-3')]
    },
    {
      title:t('Teco-card-industry'),
      list:[t('Teco-card-industry-1'),t('Teco-card-industry-2'),t('Teco-card-industry-3')]
    },

  ]
  

  return (
    <>
      <section className="relative z-20 flex-col items-center py-24 pb-8 w-full">
        <MaxWidthWrapper>
        <div className="relative h-full z-10 grid grid-cols-1 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
          {items.map(({title,list}, i) => (   
          <div key={i} className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 hover:scale-[1.01] hover:bg-slate-800/50 border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 py-3 px-4">
            <p className="font-bold text-xl mb-4 text-center">{title}</p>
            <ul>
              {list.map((item, i) => (
              <li key={i} className="mb-2 flex items-center pl-6 leading-6 tracking-wide">
                <span className="inline-block w-4 h-4 bg-jaune mr-2"></span>{item}
              </li>
              ))}
            </ul>
            <div
              className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                transformOrigin: "center",
                transform: "scale(1.75)",
                animation: "rotate 3.5s linear infinite",
              }}
            />
          </div>
          
          ))}
        </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}