'use client'

import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

export const ButtonScrolltop = () => {
  return (
    <>
     <button
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-jaune flex w-8 h-8 justify-center items-center rounded-full  mx-auto text-black hover:text-zinc-200 transition-colors"
    >
        <FaArrowUp /> 
     </button>
    </>
  )
}
