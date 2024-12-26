import React from 'react'
import Image from 'next/image'

export const CardBlog = ({ name, description, img, link,tag='' }) => {


    const CARD_WIDTH = 350;
    const CARD_HEIGHT = 350;
    const MARGIN = 20;
   
  return (
    <a href={link} target="_blank" rel="noreferrer">
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT + 150, // Adding space for the text and description
        marginRight: MARGIN,
      }}
    >
      <div
        className="relative mb-4"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          overflow: 'hidden',
          position: 'relative',
        }}
        
      >
        <Image
          src={img}
          alt={name}
          fill={true} // Fill the container completely
          className="rounded-lg object-cover" // Use object-cover to make the image cover the container consistently
          style={{
            width: '100%', // Ensuring it takes up full width
            height: '100%', // Ensuring it takes up full height
          }}
          priority={false}
        />
      </div>
      {tag && (
        <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1  text-xs uppercase text-neutral-500">
          {tag}
        </span>
      )}
      <p className="mt-1.5 text-lg font-medium">{name}</p>
      <p className="text-sm text-neutral-300">{description}</p>
    </div>
  </a>
  )
}