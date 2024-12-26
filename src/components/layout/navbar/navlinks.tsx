'use client'

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


export const NavLink = ({ children, FlyoutContent, url, ariaLabel }) => {
    const [open, setOpen] = useState(false);
    
    const showFlyout = FlyoutContent && open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit"
        role="navigation"
      >
        <a 
          href={url} 
          className="relative"
          aria-label={ariaLabel}
          aria-expanded={open}
          aria-haspopup={FlyoutContent ? "true" : undefined}
        >
          {children}
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-jaune transition-transform duration-300 ease-out"
            aria-hidden="true"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black"
              role="menu"
              aria-label={`${children} submenu`}
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div 
                className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
                aria-hidden="true"
              />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };