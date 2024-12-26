import { SectionH1 } from '@components/components/layout/headers/sectionh1'
import { SectionHeadingSpacing } from '@components/components/layout/headers/sectionheadingspacing'
import React from 'react'

export const TestimonyVideo = () => {
  return (
    <section className='w-full pt-6 pb-24'>
      <SectionHeadingSpacing>
        <SectionH1 persistCenter>
          What people are saying
        </SectionH1>
      </SectionHeadingSpacing>

      <div className='w-full h-auto flex justify-center items-center'>
        <video
          src="https://res.cloudinary.com/dqr6k0yey/video/upload/v1728016155/inspirame/testimonial.mp4"
          loop
          autoPlay
          muted
          playsInline
          className='w-full max-w-4xl h-auto object-contain md:rounded-lg'
        ></video>
      </div>
    </section>
  )
}
