import React from 'react';
import initTranslations from '@components/app/i18n';
import { SectionH3 } from '@components/components/layout/headers/sectionh3';
import { MaxWidthWrapper } from '@components/components/layout/wrapperwidth/maxwidth';

const BridgingTheGap = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ['tecoadmin']);

  return (
    <section className="min-h-max bg-black py-12">
     <MaxWidthWrapper>
      <div className="flex flex-col items-center">
        <div className="text-center mb-4">
          <SectionH3 className="text-3xl font-bold text-white mb-8 text-pretty text-center">
            {t('Teco-bridge-title')}
          </SectionH3>
          <div className='flex flex-col items-center'>
            <p className="text-white text-base md:text-xl max-w-xl mb-8">
              {t('Teco-bridge-para-1')}
            </p>
            <p className="text-white text-base md:text-xl max-w-xl mb-8">
              {t('Teco-bridge-para-2')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-4 md:col-span-2 flex justify-center items-center w-full mb-4">
            <div className="w-full md:w-11/12 xl:w-10/12"></div>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BridgingTheGap;
