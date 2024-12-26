'use client'

import React from 'react'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import { defaultRevealOptions } from '@components/utils/config'

export const PictureWrapper = () => {
  return (
   <>
     <RevealWrapper  {...defaultRevealOptions}>
      <Image
          src="https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/inspirame/tecoguide-app-picture"
          alt="Picture of a phone displaying the Tecoguide app"
          width={300}
          height={470}
          style={{ transform: "translate3d(0, 0, 0)"}}
          priority={true}
          className="object-contain"
      />
     </RevealWrapper>
   </>
  )
}
