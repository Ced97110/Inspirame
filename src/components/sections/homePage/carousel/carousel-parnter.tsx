import React from 'react'
import { urlPhoto } from '../../../../../data/data-sponsorship/data-sponsorship'
import Image from 'next/image'


export const CarouselParnter = () => {

    const partners = [... urlPhoto,... urlPhoto,... urlPhoto,... urlPhoto,... urlPhoto]


  return (

        <div className='bg-white w-screen lg:mx-0 py-8 section-hero transition'>
         <div className="w-full overflow-x-auto">
            <ul className="flex animate-carousel justify-between items-center w-full">
              {partners.map((partner, i) => (
                <li
                  key={i}
                  className="relative aspect-square  max-h-[80px] w-1/3 max-w-[250px] flex-none md:w-1/4 px-2"
                >
                  <div className="relative h-[80px] w-full">
                    <a href={partner.url}>
                    <Image
                      alt={partner.alt}
                      src={partner.src}
                     fill={true}
                     priority={false}
                      sizes='100vw'
                      className="object-contain transition"
                     
                  />
                    </a>
                   
                  </div>
                </li>
              ))}
            </ul>
          </div>  
        </div>
    
    
  )
}
