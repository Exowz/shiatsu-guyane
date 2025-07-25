'use client';

import { motion } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import type { Locale } from '@/lib/i18n-config';

const languages = {
  fr: { name: 'Français', flag: '🇫🇷', code: 'FR' },
  en: { name: 'English', flag: '🇺🇸', code: 'US' },
  pt: { name: 'Português', flag: '🇧🇷', code: 'BR' }
};

interface NavbarLanguageButtonProps {
  lang: Locale;
  isScrolled: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

export const NavbarLanguageButton = ({ lang, isScrolled, isOpen, onToggle }: NavbarLanguageButtonProps) => {
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

  const getButtonClasses = () => 
    `p-3 rounded-full transition-all duration-300 backdrop-blur-md ${
      isScrolled
        ? 'shadow-md hover:opacity-90'
        : 'hover:opacity-80'
    }`;

  const getButtonStyle = () => ({
    backgroundColor: isScrolled 
      ? 'rgba(var(--color-surface), 0.95)' 
      : 'rgba(var(--color-background), 0.1)'
  });

  return (
    <motion.div animate={isOpen ? "open" : "closed"} className="relative navbar-drawer">
      <button
        onClick={onToggle}
        className={getButtonClasses()}
        style={getButtonStyle()}
      >
        <FiGlobe className={`h-5 w-5 ${isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'}`} />
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ 
          originY: "top", 
          translateX: "-50%", 
          backgroundColor: 'rgba(var(--color-surface), 0.95)' 
        }}
        className="flex flex-col gap-1 p-2 rounded-xl backdrop-blur-md shadow-xl absolute top-[120%] left-[50%] w-40 overflow-hidden"
      >
        {/* Current Language - Highlighted */}
        <motion.li
          variants={itemVariants}
          className={`flex items-center justify-between w-full p-2 text-xs font-medium whitespace-nowrap rounded-lg transition-colors ${
            isScrolled ? 'text-[rgb(var(--color-text))] bg-[rgba(var(--color-primary),0.2)]' : 'text-white bg-white/20'
          }`}
        >
          <div className="flex items-center gap-2">
            <span>{languages[lang].flag}</span>
            <span>{languages[lang].name}</span>
          </div>
          <span className="text-xs opacity-70">{languages[lang].code}</span>
        </motion.li>
        
        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className={`h-px mx-2 ${isScrolled ? 'bg-[rgba(var(--color-text),0.2)]' : 'bg-white/20'}`}
        />
        
        {/* Other Languages */}
        {otherLanguages.map(([code, language]) => {
          const newPath = `/${code}${getPathWithoutLocale()}`;
          return (
            <Link key={code} href={newPath} onClick={onToggle}>
              <motion.li
                variants={itemVariants}
                className={`flex items-center justify-between w-full p-2 text-xs font-medium whitespace-nowrap rounded-lg transition-colors cursor-pointer ${
                  isScrolled ? 'text-[rgb(var(--color-text))] hover:bg-[rgba(var(--color-primary),0.1)]' : 'text-white hover:bg-white/10'
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

// EXACT same animation variants as original LanguageSwitcher
const wrapperVariants = {
  open: { scaleY: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
  closed: { scaleY: 0, transition: { when: "afterChildren", staggerChildren: 0.1 } },
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
  closed: { opacity: 0, y: -15, transition: { when: "afterChildren" } },
};