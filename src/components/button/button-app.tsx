'use client'

import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"


export const ButtonApp = ({route, ctaClasses, isOddCard, text}) => {
  return (
    <Link
    href={route}
    className={`flex items-center gap-2 rounded px-5 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
      ctaClasses
    } ${
      isOddCard
      ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
      : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
    }`}
    >
    <span>{text}</span>
    <FiArrowRight />
    </Link>
  )

}