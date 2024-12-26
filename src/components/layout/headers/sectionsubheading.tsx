import React from "react";
import { twMerge } from "tailwind-merge";

export const SectionSubheading = ({
  children,
  persistCenter = false,
  className = "",
}: {
  children: React.ReactNode;
  persistCenter?: boolean;
  className?: string;
}) => {
  return (
    <p
      className={twMerge(`text-center text-pretty text-base text-zinc-300 md:text-base ${persistCenter ? "" : "mx-auto max-w-md md:mx-0 md:text-start"}`, className)}
    >
      {children}
    </p>
  );
};
