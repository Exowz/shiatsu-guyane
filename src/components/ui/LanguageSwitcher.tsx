'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import type { Locale } from '@/lib/i18n-config';

const languages = {
  fr: { name: 'Français', flag: '🇫🇷', code: 'FR' },
  en: { name: 'English', flag: '🇺🇸', code: 'US' },
  pt: { name: 'Português', flag: '🇧🇷', code: 'BR' }
};

export const LanguageSwitcher = ({ lang, lightMode = false }: { lang: Locale; lightMode?: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getPathWithoutLocale = () => {
    if (pathname) {
      const parts = pathname.split('/');
      parts.splice(1, 1);
      return parts.join('/') || '/';
    }
    return '/';
  };
  
  const otherLanguages = Object.entries(languages).filter(([code]) => code !== lang);

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className={`flex items-center gap-2 px-4 py-3 h-12 rounded-full transition-color backdrop-blur-md hover:opacity-80 text-base ${
          lightMode ? 'text-gray-700' : 'text-white'
        }`}
        style={{ 
          backgroundColor: lightMode 
            ? 'rgba(var(--color-primary), 0.1)' 
            : 'rgba(var(--color-background), 0.1)'
        }}
      >
        <FiGlobe />
        <span className="text-xs font-medium">{languages[lang].code}</span>
        <span className="text-sm">{languages[lang].flag}</span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "bottom", translateX: "-50%", backgroundColor: 'rgba(var(--color-surface), 0.95)' }}
        className="flex flex-col gap-1 p-2 rounded-xl backdrop-blur-md shadow-xl absolute bottom-[120%] left-[50%] w-40 overflow-hidden"
      >
        {otherLanguages.map(([code, language]) => {
          const newPath = `/${code}${getPathWithoutLocale()}`;
          return (
            <Link key={code} href={newPath} onClick={() => setOpen(false)}>
              <motion.li
                variants={itemVariants}
                className={`flex items-center justify-between w-full p-2 text-xs font-medium whitespace-nowrap rounded-lg transition-colors cursor-pointer ${
                  lightMode ? 'text-gray-700 hover:bg-gray-100/50' : 'text-white hover:bg-white/10'
                }`}
                style={{ 
                  backgroundColor: 'transparent' 
                }}
              >
                <div className="flex items-center gap-2">
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                </div>
                <span className="text-xs opacity-70">{language.code}</span>
              </motion.li>
            </Link>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

// --- Framer Motion Variants (no changes needed) ---
const wrapperVariants = {
  open: { scaleY: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
  closed: { scaleY: 0, transition: { when: "afterChildren", staggerChildren: 0.1 } },
};
const itemVariants = {
  open: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
  closed: { opacity: 0, y: -15, transition: { when: "afterChildren" } },
};