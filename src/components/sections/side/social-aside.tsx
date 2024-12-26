import clsx from 'clsx';
import React from 'react'


interface SocialProps {
  children:React.ReactNode;
  active?:string;
}


function SocialMediaAside ({active,children}: SocialProps){

  const asidePosition = clsx(
    'lg:block hidden w-20 fixed z-50 -right-4',
   {
    'bottom-24':active === 'active',
    'bottom-2':active !== 'active',
   }
  );

  return (
    
        <aside className={asidePosition}>
           {children}
        </aside>
  )
}

export default SocialMediaAside;