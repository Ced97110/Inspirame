import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { IconType } from "react-icons";
import Link from "next/link";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";
import NavLogo from "../logo/logo-file";
import { BsTiktok } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { FaArrowUp, FaFacebook } from "react-icons/fa";
import { ButtonScrolltop } from "./buttonscrolltop";
import initTranslations from "@components/app/i18n";


export const Footer = async ({params:{locale}}) => {

  const { t } = await initTranslations(locale, ['menuinspi']);
  return (
    <footer className="relative overflow-hidden py-12 p-2 bg-slate-300">
      <MaxWidthWrapper className="relative z-20 grid grid-cols-12 gap-x-1.5 gap-y-6">
        <LogoColumn />
        <GenericColumn
          title={t('quick-links')}
          links={[
            {
              title: t('about-us'),
              href: "/about-us",
            },
            {
              title:  t('research'),
              href: "/research-articles",
              show:false
            },
            {
              title: t('podcasts'),
              href: "/media", 
              show:false
            },
          ]}
        />
        <GenericColumn
          title={t('our-products')}
          links={[
            {
              title: "TecoGuide",
              href: "/tecoguide",
            },
            {
              title: "TecoAdmin",
              href: "/tecoadmin",
            },
            {
              title: "FAQs",
              href: "/tecoguide/#faq",
            },
          ]}
        />
       
        <GenericColumn
          title={t('socials')}
          links={[
            {
              title: "TikTok",
              href: "https://www.tiktok.com/@tecoguide.com",
              Icon: BsTiktok,
              social: true,
            },
            {
              title: "Instagram",
              href: "https://www.instagram.com/tecoguide_/",
              Icon: SiInstagram,
              social: true,
            },
            {
              title: "YouTube",
              href: "https://www.youtube.com/@tecoguide/videos",
              Icon: SiYoutube,
              social: true,
            },
            {
              title: "LinkedIn",
              href: "https://www.linkedin.com/company/inspirame23/",
              Icon: LuLinkedin,
              social: true,
            },
            {
              title: "Facebook",
              href: "https://www.facebook.com/TecoGuide916/",
              Icon: FaFacebook,
              social: true,
            },
          ]}
          classname=""
        />
        <div className="md:hidden w-fit pt-12">
        <ButtonScrolltop/>
      </div>
      </MaxWidthWrapper>
    </footer>
  );
};

const LogoColumn = () => {
  return (
    <div className="col-span-6 md:col-span-4">
      <NavLogo height={99} width={99}  />
      <span className="mt-3 inline-block text-xs text-zinc-400">
        © Inspirame - All rights reserved.
      </span>
      <div className="hidden md:block w-fit pt-12">
        <ButtonScrolltop/>
      </div>
    </div>
  );
};

const GenericColumn = ({
  title,
  links,
  classname,
}: {
  title: string;
  links: { title: string; href: string; Icon?: IconType;  show?: boolean; social?: boolean; }[];
  classname?: string,
 

}) => {
  return (
    <div className={`col-span-6 space-y-2 text-sm md:col-span-2 ${classname}`}>
  <span className="block text-zinc-50 font-bold">{title}</span>
  {links.map((l) => {
    if (l.show !== false && !l.social) {
      // Use Next.js Link for regular internal links
      return (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      );
    } else if (l.social === true) {
      // Use <a> tag for external/social links that need to open in a new tab
      return (
        <a
          key={l.title}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </a>
      );
    }
    return null;
  })}
</div>
  );
};
