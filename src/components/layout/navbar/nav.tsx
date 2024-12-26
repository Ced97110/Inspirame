'use client'

import React, { useMemo, useState } from "react";
import NavLogo from "../logo/logo-file";
import { NavLink } from "./navlinks";
import { CTAs } from "./cta";
import { MobileMenu } from "./mobile-menuu";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";




const FlyoutNav = () => {

  const { t } = useTranslation();

  const menuItems = useMemo(() => ([
    { name: t('about-us'), url: '/about-us', ariaLabel: t('about-us') },
    { name: t('Learners'), url: '/tecoguide', ariaLabel: t('learners') },
    { name: t('Other Partnerships'), url: '/tecoadmin', ariaLabel: t('learners') },
    {
      name: t('customers'),
      component: CareersContent,
      submenu: [
        { text: 'College & University', url: '/One-Pager-TecoGuide-College-Services-Transfer.pdf', isDownload: true, ariaLabel: 'Download College & University brochure' },
        { text: 'Justice Involved', url: '/One-Pager-TecoGuide-Justice-Involved.pdf', isDownload: true, ariaLabel: 'Download Justice Involved brochure' },
      ],
      show: true,
      ariaLabel: t('customers')
    },
    {
      name: t('Media'),
      component: MediaKit,
      submenu: [
        { text: 'Maria Medrano Media Kit', url: '/Media-Kit_Maria-Medrano.pdf', isDownload: true, ariaLabel: 'Download Maria Medrano Media Kit' },
      ],
      show: true,
      ariaLabel: t('Media')
    },
    { name: t('research'), url: '/research-articles', show: false, ariaLabel: t('research') },
    { name: t('podcasts'), url: '/podcast', show: true, ariaLabel: t('podcasts') },
    { name: t('contact-us'), url: '/contact-us', ariaLabel: t('contact-us') },
  ]), [t]);

  const Links = () => {
    return (
      <div className="flex items-center gap-6" role="navigation" aria-label="Main navigation">
      {menuItems.map(({ name, component, url, show, ariaLabel }) => {
        if (show !== false) {
          return (
            <NavLink 
              key={name} 
              FlyoutContent={component} 
              url={url}
              ariaLabel={ariaLabel}
            >
              {name}
            </NavLink>
          );
        }
        return null;
      })}
      </div>
    );
  };

    return (
      <>
        <nav
          className={`fixed top-0 left-0 right-0 z-50 w-full text-white 
          transition-all duration-300 ease-out px-5 lg:px-8 2xl:px-96 "bg-neutral-950 shadow-xl bg-black py-6`}
          role="navigation"
          aria-label="Primary navigation"
        >  
          <div className="flex items-center justify-between">
            <NavLogo width={56} height={56} aria-label="Company logo" />
            <div className="hidden gap-4 lg:flex">
              <Links />
              <CTAs />
            </div>
            <MobileMenu aria-label="Mobile menu" />
          </div>
        </nav>
      </>
    );
  };

  export const PricingContent = () => {
    const { t } = useTranslation();
    return (
      <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl" role="menu">
        <div className="grid grid-cols-2 lg:grid-cols-1">
          <div className="mb-3 space-y-3">
            <h3 className="font-semibold" id="products-menu">{t('Tecomenu-title')}</h3>
            <a 
              href="/tecoguide" 
              className="block text-sm hover:underline"
              role="menuitem"
              aria-label={`TecoGuide - ${t('Tecoguide')}`}
            >
              TecoGuide <span className="italic">{t('Tecoguide')}</span>
            </a>
            <a 
              href="/tecoadmin" 
              className="block text-sm hover:underline"
              role="menuitem"
              aria-label={`TecoAdmin - ${t('TecoAdmin')}`}
            >
              TecoAdmin <span className="italic">{t('TecoAdmin')}</span>
            </a>
          </div>
        </div>
        <button 
          className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white"
          aria-label={t('contact-sales')}
        >
          <a href="/contact-us" className="block text-sm hover:underline">
            {t('contact-sales')}
          </a>
        </button>
      </div>
    );
  };

  export const CareersContent = ({data}) => {
    const { t } = useTranslation();
    return (
      <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl" role="menu">
        <div className="grid grid-cols-2 lg:grid-cols-1">
          <div className="mb-3 space-y-3">
            <h3 className="font-semibold" id="brochures-menu">Brochures</h3>
            <a 
              href="/One-Pager-TecoGuide-College-Services-Transfer.pdf" 
              target="_blank" 
              rel="nofollow" 
              className="block text-sm hover:underline"
              role="menuitem"
              aria-label="Download College & University brochure"
              onClick={(e) => {
                e.preventDefault();
                window.open('/One-Pager-TecoGuide-College-Services-Transfer.pdf', '_blank', 'width=800,height=600');
              }}
            >
              College & University
            </a>
            <a 
              href="/One-Pager-TecoGuide-Justice-Involved.pdf" 
              target="_blank" 
              rel="nofollow" 
              className="block text-sm hover:underline"
              role="menuitem"
              aria-label="Download Justice Involved Service brochure"
              onClick={(e) => {
                e.preventDefault();
                window.open('/One-Pager-TecoGuide-Justice-Involved.pdf', '_blank', 'width=800,height=600');
              }}
            >
              Justice Involved Service
            </a>
          </div>
        </div>
        <button 
          className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white"
          aria-label={t('contact-sales')}
        >
          <a href="/contact-us" className="block text-sm hover:underline">
            {t('contact-sales')}
          </a>
        </button>
      </div>
    );
  };

  export const MediaKit = ({data}) => {
    const { t } = useTranslation();
    return (
      <div className="w-full bg-white p-6 shadow-none lg:w-[250px] lg:shadow-xl" role="menu">
        <div className="grid grid-cols-2 lg:grid-cols-1">
          <div className="mb-3 space-y-3">
            <h3 className="font-semibold" id="media-kit-menu">Media Kit</h3>
            <a 
              href="/Maria-Kit_Maria-Medrano.pdf" 
              target="_blank" 
              rel="nofollow" 
              className="block text-sm hover:underline"
              role="menuitem"
              aria-label="Download Maria Medrano Media Kit"
              onClick={(e) => {
                e.preventDefault();
                window.open('/Media-Kit_Maria-Medrano.pdf', '_blank', 'width=800,height=600');
              }}
            >
              Maria Medrano
            </a>
          </div>
        </div>
        <button 
          className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white"
          aria-label={t('contact-us')}
        >
          <a href="/contact-us" className="block text-sm hover:underline">
            {t('contact-us')}
          </a>
        </button>
      </div>
    );
  };


  export const CommunityCollegesContent = () => {
    return (
      <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
        <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-white">Community Colleges</h2>
            <p className="text-sm text-indigo-100">
              We ve built a fast-growing network of California Community Colleges committed to supporting transfer students
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-xs text-indigo-200 hover:underline"
          >
            Careers site <FiArrowRight />
          </a>
        </div>
        <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-semibold">Business</h3>
            <a href="#" className="block text-sm hover:underline">
              Marketing
            </a>
            <a href="#" className="block text-sm hover:underline">
              Finance
            </a>
            <a href="#" className="block text-sm hover:underline">
              Legal
            </a>
            <a href="#" className="block text-sm hover:underline">
              Sales
            </a>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Engineering</h3>
            <a href="#" className="block text-sm hover:underline">
              Full stack
            </a>
            <a href="#" className="block text-sm hover:underline">
              Dev ops
            </a>
            <a href="#" className="block text-sm hover:underline">
              QA
            </a>
            <a href="#" className="block text-sm hover:underline">
              Data
            </a>
            <a href="#" className="block text-sm hover:underline">
              Machine learning
            </a>
            <a href="#" className="block text-sm hover:underline">
              Management
            </a>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">More</h3>
            <a href="#" className="block text-sm hover:underline">
              Support
            </a>
            <a href="#" className="block text-sm hover:underline">
              Office
            </a>
            <a href="#" className="block text-sm hover:underline">
              Other
            </a>
          </div>
        </div>
      </div>
    );
  };



  export const UniversityContent = () => {
    return (
      <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
        <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-semibold text-white">University Partnerships</h2>
            <p className="text-sm text-indigo-100">
              Technology-Driven Transfer Pathways
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-xs text-indigo-200 hover:underline"
          >
            Careers site <FiArrowRight />
          </a>
        </div>
        <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-semibold">Business</h3>
            <a href="#" className="block text-sm hover:underline">
              Marketing
            </a>
            <a href="#" className="block text-sm hover:underline">
              Finance
            </a>
            <a href="#" className="block text-sm hover:underline">
              Legal
            </a>
            <a href="#" className="block text-sm hover:underline">
              Sales
            </a>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Engineering</h3>
            <a href="#" className="block text-sm hover:underline">
              Full stack
            </a>
            <a href="#" className="block text-sm hover:underline">
              Dev ops
            </a>
            <a href="#" className="block text-sm hover:underline">
              QA
            </a>
            <a href="#" className="block text-sm hover:underline">
              Data
            </a>
            <a href="#" className="block text-sm hover:underline">
              Machine learning
            </a>
            <a href="#" className="block text-sm hover:underline">
              Management
            </a>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">More</h3>
            <a href="#" className="block text-sm hover:underline">
              Support
            </a>
            <a href="#" className="block text-sm hover:underline">
              Office
            </a>
            <a href="#" className="block text-sm hover:underline">
              Other
            </a>
          </div>
        </div>
      </div>
    );
  };

export default FlyoutNav;
