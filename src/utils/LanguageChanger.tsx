'use client';



import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { i18nConfig } from "../../i18nConfig";

type LanguageOption = {
  code: string;
  label: string;
  flag: string;
};

const languages: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇲🇽" },
  { code: "zh", label: "國語", flag: "🇨🇳" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
];

export const DropDownLanguage = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
    setOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-jaune transition-colors"
        >
          <span className="font-medium text-sm text-black">{languages.find((lang) => lang.code === i18n.language)?.flag} {i18n.language.toUpperCase()}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown className="text-black" />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-fit overflow-hidden"
        >
          {languages.map((lang) => (
            <Option
              key={lang.code}
              text={`${lang.flag} ${lang.label}`}
              onClick={() => handleLanguageChange(lang.code)}
            />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-black transition-colors cursor-pointer"
    >
      {text}
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