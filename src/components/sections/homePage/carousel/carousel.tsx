'use client'

import { motion } from "framer-motion";
import { urlPhoto } from "../../../../../data/data-sponsorship/data-sponsorship";
import Image from "next/image";


export const Logos = () => {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden py-6 w-full">
    
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>

      <div className="absolute bottom-0 left-0 top-0 w-1/4 max-w-64 bg-gradient-to-r from-zinc-950 to-zinc-950/0" />
      <div className="absolute bottom-0 right-0 top-0 w-1/4 max-w-64 bg-gradient-to-l from-zinc-950 to-zinc-950/0" />
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
     className="flex gap-12 px-6  bg-white  py-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItems = () => (
  <>
   <div className="flex items-center justify-center space-x-6 w-full">
     {urlPhoto.map((partner, i) => (
        <a key={i} href={partner.url} className="block relative w-40 h-24 aspect-square">
          <Image
            src={partner.src}
            alt={partner.alt}
            fill={true}
            className="object-contain"
          />
        </a>
        ))}
   </div>
  </>
);

