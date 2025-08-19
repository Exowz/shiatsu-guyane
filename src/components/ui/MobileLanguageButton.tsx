'use client';

import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Check } from 'lucide-react';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n-config';

const languages = {
  fr: { name: 'Français', flag: '🇫🇷', code: 'FR' },
  en: { name: 'English', flag: '🇬🇧', code: 'GB' },
  'pt-BR': { name: 'Português', flag: '🇧🇷', code: 'BR' },
  es: { name: 'Español', flag: '🇪🇸', code: 'ES' },
  'zh-cn': { name: '简体中文', flag: '🇨🇳', code: 'CN'},
  hmn: { name: 'Hmong', flag: '🏳️', code: 'HMN'},
  'zh-hk': { name: '繁體中文', flag: '🇭🇰', code: 'HK'},
};

interface MobileLanguageButtonProps {
  lang: Locale;
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

// Animation variants optimized for mobile
const mobileDropdownVariants = {
  open: { 
    scaleY: 1, 
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring" as const,
      stiffness: 300,
      damping: 25,
      when: "beforeChildren" as const, 
      staggerChildren: 0.06
    } 
  },
  closed: { 
    scaleY: 0.8, 
    opacity: 0,
    y: -20,
    transition: { 
      type: "spring" as const,
      stiffness: 300,
      damping: 25,
      when: "afterChildren" as const, 
      staggerChildren: 0.03,
      staggerDirection: -1
    } 
  },
} as const;

const mobileItemVariants = {
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
    y: -15, 
    scale: 0.9,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 20
    } 
  },
} as const;

export const MobileLanguageButton = ({ lang, isOpen = false, onToggle, onClose }: MobileLanguageButtonProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const pathname = usePathname();

  // Use external state if provided, otherwise use internal state
  const isDropdownOpen = onToggle ? isOpen : internalOpen;

  const getPathWithoutLocale = () => {
    if (pathname) {
      const parts = pathname.split('/');
      parts.splice(1, 1);
      return parts.join('/') || '/';
    }
    return '/';
  };
  
  // Ensure current language exists in languages object, fallback to 'fr' if not
  const currentLang = languages[lang] ? lang : 'fr';
  const otherLanguages = Object.entries(languages).filter(([code]) => code !== currentLang);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const handleLanguageSelect = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Mobile Language Button */}
      <motion.button
        onClick={handleToggle}
        className="group relative p-4 rounded-full transition-all duration-300 backdrop-blur-xl border border-[rgb(var(--color-primary))]/20 shadow-xl hover:shadow-2xl active:scale-95"
        style={{
          backgroundColor: 'rgba(var(--color-surface), 0.95)'
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Language switcher"
      >
        <motion.div
          animate={{ 
            rotate: isDropdownOpen ? 360 : 0,
            scale: isDropdownOpen ? 1.1 : 1 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <FiGlobe className="h-6 w-6 text-[rgb(var(--color-text))] transition-colors duration-300" />
        </motion.div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-20 transition-opacity duration-200 bg-[rgb(var(--color-primary))] blur-xl"></div>
        
        {/* Current language indicator */}
        <motion.div 
          className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
          animate={{ 
            scale: isDropdownOpen ? 1.1 : 1,
            rotate: isDropdownOpen ? 10 : 0 
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {languages[currentLang]?.code || 'FR'}
        </motion.div>
      </motion.button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileDropdownVariants}
            style={{ 
              originY: "bottom",
              translateX: "-50%",
            }}
            className="absolute bottom-[120%] left-[50%] w-72 overflow-hidden z-[60]"
          >
            <div className="bg-[rgb(var(--color-surface))]/98 backdrop-blur-xl border border-[rgb(var(--color-primary))]/20 rounded-3xl shadow-2xl p-4 max-h-[70vh] overflow-y-auto">
              {/* Header */}
              <motion.div 
                variants={mobileItemVariants}
                className="text-center pb-4 border-b border-[rgb(var(--color-primary))]/15"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 rounded-full">
                  <FiGlobe className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                  <span className="text-sm font-semibold text-[rgb(var(--color-text))]">
                    Choisir la langue
                  </span>
                </div>
              </motion.div>

              {/* Current Language - Highlighted */}
              <motion.div
                variants={mobileItemVariants}
                className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-[rgb(var(--color-primary))]/15 to-[rgb(var(--color-secondary))]/15 border border-[rgb(var(--color-primary))]/25"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl animate-bounce">
                      {languages[currentLang]?.flag || '🌐'}
                    </div>
                    <div>
                      <span className="text-[rgb(var(--color-text))] font-bold text-lg block">
                        {languages[currentLang]?.name || 'Unknown'}
                      </span>
                      <span className="text-xs text-[rgb(var(--color-text-secondary))]">
                        Langue actuelle
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[rgb(var(--color-text-secondary))] font-medium px-3 py-1.5 bg-[rgb(var(--color-primary))]/20 rounded-full">
                      {languages[currentLang]?.code || 'N/A'}
                    </span>
                    <Check className="w-5 h-5 text-[rgb(var(--color-primary))]" />
                  </div>
                </div>
              </motion.div>
              
              {/* Other Languages */}
              <motion.div variants={mobileItemVariants} className="space-y-2 mt-4">
                {otherLanguages.map(([code, language]) => {
                  const newPath = `/${code}${getPathWithoutLocale()}`;
                  return (
                    <Link key={code} href={newPath} onClick={handleLanguageSelect}>
                      <motion.div
                        variants={mobileItemVariants}
                        className="group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-[rgb(var(--color-primary))]/8 active:scale-98"
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-xl transition-transform duration-300 group-hover:scale-125">
                            {language.flag}
                          </div>
                          <div>
                            <span className="text-[rgb(var(--color-text))] group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300 font-semibold text-lg block">
                              {language.name}
                            </span>
                            <span className="text-xs text-[rgb(var(--color-text-secondary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Changer la langue
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-[rgb(var(--color-text-secondary))] font-medium px-3 py-1.5 bg-[rgb(var(--color-text-secondary))]/10 rounded-full group-hover:bg-[rgb(var(--color-primary))]/20 transition-colors duration-300">
                            {language.code}
                          </span>
                          
                          {/* Arrow indicator */}
                          <motion.div 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 0 }}
                            whileHover={{ x: 5, opacity: 1 }}
                            className="w-6 h-6 rounded-full bg-[rgb(var(--color-primary))]/10 flex items-center justify-center"
                          >
                            <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>

              {/* Footer */}
              <motion.div 
                variants={mobileItemVariants}
                className="pt-4 mt-4 border-t border-[rgb(var(--color-primary))]/15 text-center"
              >
                <p className="text-xs text-[rgb(var(--color-text-secondary))]">
                  {otherLanguages.length + 1} langues disponibles
                </p>
              </motion.div>
            </div>
            
            {/* Dropdown arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
              <div className="w-4 h-4 bg-[rgb(var(--color-surface))]/98 border-r border-b border-[rgb(var(--color-primary))]/30 rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};