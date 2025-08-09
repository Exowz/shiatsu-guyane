'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiGlobe, FiCheck } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import type { Locale } from '@/lib/i18n-config';

const languages = {
  fr: { name: 'Français', flag: '🇫🇷', code: 'FR', region: 'France' },
  en: { name: 'English', flag: '🇬🇧', code: 'GB', region: 'United Kingdom' },
  'pt-BR': { name: 'Português', flag: '🇧🇷', code: 'BR', region: 'Brasil' },
  es: { name: 'Español', flag: '🇪🇸', code: 'ES', region: 'España' },
  'zh-cn': { name: '简体中文', flag: '🇨🇳', code: 'CN', region: '中国'},
  hmn: { name: 'Hmong', flag: '🏳️', code: 'HMN', region: 'Global'},
};

// Enhanced animation variants with proper TypeScript types
const dropdownVariants = {
  open: { 
    scaleY: 1, 
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
      when: "beforeChildren" as const, 
      staggerChildren: 0.05
    } 
  },
  closed: { 
    scaleY: 0.8, 
    opacity: 0,
    y: -10,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
      when: "afterChildren" as const, 
      staggerChildren: 0.03,
      staggerDirection: -1
    } 
  },
} as const;

const itemVariants = {
  open: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 20
    } 
  },
  closed: { 
    opacity: 0, 
    y: -8, 
    scale: 0.95,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 20
    } 
  },
} as const;

const buttonVariants = {
  idle: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring" as const,
      stiffness: 600,
      damping: 25
    }
  }
} as const;

interface LanguageSwitcherProps {
  lang: Locale;
  lightMode?: boolean;
}

export const LanguageSwitcher = ({ lang, lightMode = false }: LanguageSwitcherProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getPathWithoutLocale = () => {
    if (pathname) {
      const parts = pathname.split('/');
      parts.splice(1, 1);
      return parts.join('/') || '/';
    }
    return '/';
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);
  
  // Ensure current language exists in languages object, fallback to 'fr' if not
  const currentLang = languages[lang] ? lang : 'fr';
  const otherLanguages = Object.entries(languages).filter(([code]) => code !== currentLang);

  const getButtonClasses = () => 
    `group relative flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full transition-all duration-500 backdrop-blur-md border overflow-hidden ${
      lightMode
        ? 'shadow-lg hover:shadow-xl border-[rgb(var(--color-primary))]/20 hover:border-[rgb(var(--color-primary))]/40 text-[rgb(var(--color-text))]'
        : 'hover:shadow-lg border-white/20 hover:border-white/40 text-white'
    }`;

  const getButtonStyle = () => ({
    backgroundColor: lightMode 
      ? 'backdrop-blur-md' 
      : 'backdrop-blur-md'
  });

  return (
    <div ref={dropdownRef} className="relative">
      {/* Enhanced Language Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className={getButtonClasses()}
        style={getButtonStyle()}
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        aria-label="Language switcher"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {/* Button glow effect */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
          lightMode ? 'bg-[rgb(var(--color-primary))]' : 'bg-white'
        } blur-xl`}></div>

        {/* Globe icon with rotation animation */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <FiGlobe className="h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-300 relative z-10" />
        </motion.div>

        {/* Current language info */}
        <div className="flex items-center gap-2 relative z-10">
          <div className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
            {languages[currentLang]?.flag || '🌐'}
          </div>
          <div className="hidden sm:flex flex-col items-start">
            <span className="text-sm font-semibold leading-tight">{languages[currentLang]?.name || 'Unknown'}</span>
            <span className="text-xs opacity-70 leading-tight">{languages[currentLang]?.region || 'N/A'}</span>
          </div>
          <span className="sm:hidden text-xs font-bold px-2 py-1 bg-white/20 rounded-md">
            {languages[currentLang]?.code || 'N/A'}
          </span>
        </div>

        {/* Dropdown indicator */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10"
        >
          <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>

        {/* Active state indicator */}
        {open && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full shadow-lg"
          >
            <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full animate-ping"></div>
          </motion.div>
        )}
      </motion.button>

      {/* Enhanced Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            style={{ 
              originY: "bottom",
              translateX: "-50%",
            }}
            className="absolute bottom-[120%] left-[50%] w-72 sm:w-80 overflow-hidden z-50"
            role="listbox"
            aria-label="Available languages"
          >
            <div className={`backdrop-blur-md rounded-3xl shadow-2xl p-4 border ${
              lightMode 
                ? 'backdrop-blur-md border-[rgb(var(--color-primary))]/20' 
                : 'backdrop-blur-md border-white/20'
            }`}>
              {/* Header */}
              <motion.div 
                variants={itemVariants}
                className="px-3 py-2 border-b border-[rgb(var(--color-primary))]/15 mb-3"
              >
                <div className="flex items-center gap-2">
                  <FiGlobe className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">
                    Choose Language
                  </span>
                </div>
              </motion.div>

              {/* Current Language - Highlighted */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between w-full p-4 text-sm font-medium rounded-2xl bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 border border-[rgb(var(--color-primary))]/25 mb-3"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl animate-bounce">
                    {languages[currentLang]?.flag || '🌐'}
                  </div>
                  <div>
                    <span className="text-white font-bold text-base block">
                      {languages[currentLang]?.name || 'Unknown'}
                    </span>
                    <span className="text-xs text-white opacity-80">
                      {languages[currentLang]?.region || 'N/A'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white font-medium px-3 py-1.5 bg-[rgb(var(--color-primary))]/20 rounded-full">
                    {languages[currentLang]?.code || 'N/A'}
                  </span>
                  <FiCheck className="w-5 h-5 text-[rgb(var(--color-primary))]" />
                </div>
              </motion.div>
              
              {/* Other Languages */}
              <motion.div variants={itemVariants} className="space-y-1">
                {otherLanguages.map(([code, language]) => {
                  const newPath = `/${code}${getPathWithoutLocale()}`;
                  return (
                    <Link key={code} href={newPath} onClick={() => setOpen(false)}>
                      <motion.div
                        variants={itemVariants}
                        className="group flex items-center justify-between w-full p-4 text-sm font-medium rounded-2xl transition-all duration-300 cursor-pointer hover:bg-[rgb(var(--color-primary))]/8 hover:border hover:border-[rgb(var(--color-primary))]/20 hover:shadow-lg"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        role="option"
                        aria-label={`Switch to ${language.name}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-xl transition-transform duration-300 group-hover:scale-125">
                            {language.flag}
                          </div>
                          <div>
                            <span className="text-white group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300 font-semibold text-base block">
                              {language.name}
                            </span>
                            <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {language.region}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-white font-medium px-3 py-1.5 bg-[rgb(var(--color-text-secondary))]/10 rounded-full group-hover:bg-[rgb(var(--color-primary))]/20 transition-colors duration-300">
                            {language.code}
                          </span>
                          
                          {/* Arrow indicator */}
                          <motion.div 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 0 }}
                            whileHover={{ x: 5, opacity: 1 }}
                            className="w-6 h-6 rounded-full bg-[rgb(var(--color-primary))]/10 flex items-center justify-center"
                          >
                            <svg className="w-3 h-3 text-[rgb(var(--color-primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>

              {/* Footer */}
              <motion.div 
                variants={itemVariants}
                className="px-3 py-2 border-t border-[rgb(var(--color-primary))]/15 mt-3 text-center"
              >
                <p className="text-xs text-white">
                  {otherLanguages.length + 1} languages available
                </p>
              </motion.div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};