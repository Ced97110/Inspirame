'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { NavLink } from '../layout/navbar/navlinks';

import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { useTranslation } from 'react-i18next';



type DropDownProps = {
  TecoAdmin?: string;
  TecoGuide?: string;
  Langage?: string;
  option?:{
    url: string;
    Icon: IconType;
    text: string;
  }
};

export const DropDown = ({TecoAdmin,TecoGuide,Langage,option}: DropDownProps) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();



  return (
    <div className="flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-jaune transition-colors"
        >
          <span className="font-medium text-sm text-black">{t('Login')}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown className='text-black' />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option setOpen={setOpen} url={TecoGuide} Icon={FiEdit} text={`TecoGuide ${t('Tecoguide')}`} />
          <Option setOpen={setOpen} url={TecoAdmin} Icon={FiPlusSquare} text={`TecoGuide ${t('TecoAdmin')}`} />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon,url, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-black  transition-colors cursor-pointer"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" >{text}</a>
    </motion.li>
  );
};



const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

