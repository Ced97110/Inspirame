'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import Image from "next/image";
import { SectionSubheading } from "../../../layout/headers/sectionsubheading";
import { useTranslation } from "react-i18next";
import { SectionH3 } from "@components/components/layout/headers/sectionh3";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth";




const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Blog = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const {t} = useTranslation()

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  const Card = ({ src, name, link, description, alt, button = false, tag }) => {
    const [isLoading, setLoading] = useState(true);
    const [placeholderSrc, setPlaceholderSrc] = useState(null);
    return (
      <a href={link} target="_blank" rel="noreferrer">
      <div
        className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT + 300, // Adding some space for text
          marginRight: MARGIN,
        }}
      >
        <div
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT + 20,
            overflow: 'overflow-scroll',
            marginBottom: 10,
            position: 'relative',
          }}
        >
          <Image
            src={src}
            className={`rounded-lg object-cover group-hover:opacity-75
                duration-700
                ease-in-out  grayscale-0 blur-0 scale-105'`}
            alt={`${name}`}
            style={{ transform: "translate3d(0, 0, 0)"}}
            priority={false}
           fill={true}
           onLoad={() => setLoading(false)}
          />
        </div>
        <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1  text-xs uppercase text-neutral-500">
          {tag}
        </span>
        <p className="mt-1.5 text-lg font-medium">{name}</p>
        <p className="text-sm text-neutral-300">{description}</p>
      </div>
    </a>
    );
  };

  return (
    <section className="bg-slate-100 py-16 mx-auto 2xl:px-60 pl-5" ref={ref}>
   
      <div className="relative overflow-hidden">
        {/* CARDS */}
        <div className="mx-auto">
          <div className="mb-8">
            <SectionH3>
              {t('blog-title')}
            </SectionH3>
              <SectionSubheading className="text-start max-w-2xl">
                {t('blog-subtitle')}
              </SectionSubheading>  
            </div>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[30%] z-30 rounded-r-xl bg-[#FCDC2A80] bg-opacity-50 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[30%] z-30 rounded-l-xl bg-[#FCDC2A80]  p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    
    </section>
  );
};



export default Blog;

const items = [
  {
    id: 1,
    name: "Startup of the Month: Inspirame",
    tag: "Article",
    description: "College and career navigation platform aims to repair education pipeline",
    src: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/blog/maria-medrano",
    alt: "Picture of Maria Medrano, CEO of Inspirame",
    link: "https://www.comstocksmag.com/web-only/startup-month-inspirame",
  },
  {
    id: 2,
    name: "TecoGuide app leverages technology to help first-generation Latinos enroll in college",
    tag: "Article",
    description: "Addressing California's Workforce Crisis with Educational Innovation for Low income students.",
    src: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/blog/mauricio-gonzalez",
    alt: "Picture of Mauricio Gonzalez, co-founder of Inspirame",
    link:"https://www.calonews.com/featured-topics/science/tecoguide-app-leverages-technology-to-help-first-generation-latinos-enroll-in-college/article_b1f4a120-a54b-5c87-abb9-9b79a6241315.html"
  },
  {
    id: 3,
    name: "The Bilingual Caretaker: Navigating Life, Family, and Tech",
    tag: "Podcast",
    description: "Tune into this empowering episode of JEFA Mode Live where host Rocio von Nierop explores Maria Medrano's inspiring journey to becoming VP, Global Head of Community, Diversity, and Belonging, alongside her entrepreneurial venture as Co-Founder of Inspirame.",
    src: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/blog/Maria-medrano-jefa-mode",
    alt: "Picture of Maria Medrano, CEO of Inspirame",
    link:"https://podcasts.apple.com/us/podcast/the-bilingual-caretaker-navigating-life-family-and-tech/id1719856765?i=1000650618232 "
  },
  {
    id: 4,
    name: "Maria Medrano: Take Advantage of the Opportunities Presented to You",
    tag: "Podcast",
    description: "Addressing California's Workforce Crisis with Educational Innovation for Low income students.",
    src: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/blog/maria-podcasts-american-dream",
    alt: "Picture of Maria Medrano, CEO of Inspirame",
    link:"https://www.americandream.life/?wchannelid=322n86o1uu"
  },
  {
    id: 5,
    name: "Necessity & Opportunity with Maria Medrano",
    tag: "Podcast",
    description: "Addressing California's Workforce Crisis with Educational Innovation for Low income students.",
    src: "https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/blog/Maria-medrano-your-story",
    alt: "Picture of Maria Medrano, CEO of Inspirame",
    link:"https://podcasts.apple.com/ie/podcast/necessity-and-opportunity-with-maria-medrano/id1516119363?i=1000626598437"
  },
  
];


