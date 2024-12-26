import React from "react";
import { twMerge } from "tailwind-merge";

export const SectionH2 = ({
  children,
  persistCenter = false,
  className = '',
}: {
  children: React.ReactNode;
  persistCenter?: boolean;
  className?: string;
}) => {
  return (
    <h2
      className={twMerge(`text-center text-3xl  mx-auto font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight ${persistCenter ? "text-center" : "text-start"}`,className)}
    >
      {children}
    </h2>
  );
};




