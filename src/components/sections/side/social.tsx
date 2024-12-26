import React from 'react'
import Link from 'next/link';
import SocialMediaAside from './social-aside';
import { SocialMedia } from '@components/components/icons/socialmedia';




function SocialMediaIcons(){

  
  return (

        
            <SocialMediaAside>
                <ul className='flex flex-col items-center m-0 p-0 list-none'>
                  {SocialMedia && SocialMedia.map(({url,name,icon},i) => (
                    <li key={i} className='mb-5  rounded-full'>
                      <a href={url} target="_blank" rel="noreferrer" className="rounded-full flex justify-center items-center w-[24px] h-[24px]  hover:translate-y-[-4px] text-decoration-none text-jaune relative transition-all hover:text-white focus:text-white focus:outline-none focus: ring-white cursor-pointer">
                       {icon}
                      </a>
                    </li> 
                  ))} 
                </ul>
            </SocialMediaAside>
        
       
  );
};

export default SocialMediaIcons;