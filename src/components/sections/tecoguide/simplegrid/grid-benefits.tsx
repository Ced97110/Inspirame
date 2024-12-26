import React from "react";
import { IconType } from "react-icons";
import { MaxWidthWrapper } from "../../../layout/wrapperwidth/maxwidth";
import { AiOutlineDollar } from "react-icons/ai";
import { IoWatchOutline } from "react-icons/io5";
import { MdOutlinePower } from "react-icons/md";
import initTranslations from "@components/app/i18n";

export const SimpleGrid = async ({params:{locale}}) => {


  const { t } = await initTranslations(locale, ['tecoguide']);

  return (

  <section className="relative w-full pb-12">
    <MaxWidthWrapper>
    <div className="my-12 w-full md:my-20" />
    <div className="relative z-10 grid grid-cols-1 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
      <Item
        Icon={ AiOutlineDollar}
        title={t('Teco-item-1')}
        subtitle={t('Teco-item-1-para')}
      />
      <Item
        Icon={IoWatchOutline}
        title={t('Teco-item-2')}
        subtitle={t('Teco-item-2-para')}
      />
      <Item
        Icon={MdOutlinePower}
        title={t('Teco-item-3')}
        subtitle={t('Teco-item-3-para')}
      />
    </div>
    </MaxWidthWrapper>
  </section>
)};

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="w-full text-xs text-center font-medium transition-all md:text-base rounded-2xl border border-jaune bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-3">
      <h4 className="mb-1.5 flex items-center justify-center mx-auto text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-white" />
        {title}
      </h4>
      <p className="text-sm md:text-base text-pretty">{subtitle}</p>
    </div>
  );
};
