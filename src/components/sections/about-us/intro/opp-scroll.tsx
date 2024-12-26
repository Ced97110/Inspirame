'use client'

import { LazyMotion, MotionValue, m, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "@components/components/layout/wrapperwidth/maxwidth.tsx";

const OppoScroll = ({items}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <div className="text-black  grid place-items-center">
        <FiArrowDown className="text-xl" />
      </div>
      <section ref={targetRef} className="bg-black flex  100vh">
          <Content content={items} />
          <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
      <div className="bg-black p-2 grid place-items-center">
      </div>
    </>
  );
};

const Content = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={idx}
          className={`p-8 h-[600px] flex flex-col  ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-3xl font-medium text-pretty">{title}</h3>
          <p className="font-light w-full max-w-md text-lg text-pretty" dangerouslySetInnerHTML={{ __html: description}}></p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {

  const loadFeatures = () =>
  import("../../../../utils/feature.tsx").then(res => res.default)
  
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <LazyMotion features={loadFeatures}>
      <m.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <div key={id} className="relative h-screen">
            <Image
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
            fill={true}
          />
          </div>
        ))}
      </m.div>
      </LazyMotion>
    </div>
  );
};

export default OppoScroll;
