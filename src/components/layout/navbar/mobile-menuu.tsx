'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import NavLogo from "../logo/logo-file";
import { CTAs } from "./cta";
import useMeasure from "react-use-measure";
import { useTranslation } from "react-i18next";
import { CareersContent, CommunityCollegesContent, MediaKit, PricingContent, UniversityContent } from "./nav";

export const MobileMenuLink = ({ children, url, FoldContent, setMenuOpen }) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(false);
  
    return (
      <div className="relative text-neutral-950" role="menuitem">
        {FoldContent ? (
          <div
            className="flex w-full cursor-pointer items-center text-white justify-between border-b border-neutral-300 py-4 text-start text-xl font-semibold"
            onClick={() => setOpen((pv) => !pv)}
            role="button"
            aria-expanded={open}
            aria-haspopup="true"
          >
            <a
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(false);
              }}
              href={url}
              aria-label={`Navigate to ${children}`}
            >
              {children}
            </a>
            <motion.div
              animate={{ rotate: open ? "180deg" : "0deg" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              aria-hidden="true"
            >
              <FiChevronDown />
            </motion.div>
          </div>
        ) : (
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={url}
            className="flex w-full cursor-pointer items-center text-white justify-between border-b border-neutral-300 py-4 text-start text-xl font-semibold"
            aria-label={`Navigate to ${children}`}
          >
            <span>{children}</span>
            <FiArrowRight aria-hidden="true" />
          </a>
        )}
        {FoldContent && (
          <motion.div
            initial={false}
            animate={{
              height: open ? height : "0px",
              marginBottom: open ? "24px" : "0px",
              marginTop: open ? "12px" : "0px",
            }}
            className="overflow-hidden"
            role="menu"
            aria-hidden={!open}
          >
            <div ref={ref}>
              <FoldContent />
            </div>
          </motion.div>
        )}
      </div>
    );
  };
  
  export const MobileMenu = () => {
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
      { name: t('podcasts'), url: '/podcast', show: false, ariaLabel: t('podcasts') },
      { name: t('contact-us'), url: '/contact-us', ariaLabel: t('contact-us') },
    ]), [t]);
  
    
    const [open, setOpen] = useState(false);
    return (
      <div className="block lg:hidden">
        <button 
          onClick={() => setOpen(true)} 
          className="block text-3xl"
          aria-label="Open mobile menu"
          aria-expanded={open}
        >
          <FiMenu aria-hidden="true" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed px-5 left-0 mx-auto top-0 flex h-screen w-full py-6 flex-col bg-black"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between">
                <NavLogo width={56} height={56} aria-label="Company logo" />
                <button 
                  onClick={() => setOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <FiX className="text-3xl text-white" aria-hidden="true" />
                </button>
              </div>
              <div 
                className="overflow-y-scroll bg-black p-6"
                role="menu"
              >
                {menuItems.map(({name,component,url}) => (
                  <MobileMenuLink
                    key={name}
                    url={url}
                    FoldContent={component}
                    setMenuOpen={setOpen}
                  >
                    {name}
                  </MobileMenuLink>
                ))}
              </div>
              <div className="flex justify-end p-6">
                <CTAs />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    );
  };