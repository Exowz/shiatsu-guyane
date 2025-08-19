'use client';

import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Check } from 'lucide-react';
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

interface NavbarLanguageButtonProps {
  lang: Locale;
  isScrolled: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

// Animation variants with proper TypeScript types
const dropdownVariants = {
  open: { 
    scaleY: 1, 
    opacity: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 30,
      when: "beforeChildren" as const, 
      staggerChildren: 0.05
    } 
  },
  closed: { 
    scaleY: 0, 
    opacity: 0,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 30,
      when: "afterChildren" as const, 
      staggerChildren: 0.05,
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
      damping: 25
    } 
  },
  closed: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95,
    transition: { 
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    } 
  },
} as const;

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
  
  // Ensure current language exists in languages object, fallback to 'fr' if not
  const currentLang = languages[lang] ? lang : 'fr';
  const otherLanguages = Object.entries(languages).filter(([code]) => code !== currentLang);

  const getButtonClasses = () => 
    `group relative p-3 rounded-full transition-all duration-500 backdrop-blur-xl border hover:transform hover:scale-105 ${
      isScrolled
        ? 'shadow-xl hover:shadow-2xl border-[rgb(var(--color-primary))]/20 hover:border-[rgb(var(--color-primary))]/40'
        : 'hover:shadow-lg border-white/20 hover:border-white/40'
    }`;

  const getButtonStyle = () => ({
    backgroundColor: isScrolled 
      ? 'rgba(var(--color-surface), 0.95)' 
      : 'rgba(var(--color-background), 0.1)'
  });

  const handleLanguageSelect = () => {
    onToggle(); // Close the dropdown when a language is selected
  };

  return (
    <div className="relative">
      {/* Enhanced Button */}
      <button
        onClick={onToggle}
        className={getButtonClasses()}
        style={getButtonStyle()}
        aria-label="Language switcher"
      >
        <FiGlobe className={`h-5 w-5 transition-all duration-300 group-hover:rotate-12 ${
          isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'
        }`} />
        
        {/* Button glow effect */}
        <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
          isScrolled ? 'bg-[rgb(var(--color-primary))]' : 'bg-white'
        } blur-xl`}></div>
        
        {/* Current language indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          {languages[currentLang]?.code || 'FR'}
        </div>
      </button>

      {/* Enhanced Dropdown with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            style={{ 
              originY: "top", 
              translateX: "-50%",
            }}
            className="absolute top-[120%] left-[50%] w-56 overflow-hidden z-50"
          >
            <div className="bg-[rgb(var(--color-surface))]/95 backdrop-blur-xl border border-[rgb(var(--color-primary))]/20 rounded-2xl shadow-2xl p-2">
              {/* Header */}
              <motion.div 
                variants={itemVariants}
                className="px-3 py-2 border-b border-[rgb(var(--color-primary))]/10 mb-2"
              >
                <p className="text-xs font-semibold text-[rgb(var(--color-text-secondary))] uppercase tracking-wide">
                  Choose Language
                </p>
              </motion.div>

              {/* Current Language - Highlighted */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between w-full p-3 text-sm font-medium rounded-xl bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 border border-[rgb(var(--color-primary))]/20 mb-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{languages[currentLang]?.flag || '🌐'}</span>
                  <span className="text-[rgb(var(--color-text))] font-semibold">{languages[currentLang]?.name || 'Unknown'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[rgb(var(--color-text-secondary))] font-medium px-2 py-1 bg-[rgb(var(--color-primary))]/20 rounded-md">
                    {languages[currentLang]?.code || 'N/A'}
                  </span>
                  <Check className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                </div>
              </motion.div>
              
              {/* Other Languages */}
              <motion.div variants={itemVariants} className="space-y-1">
                {otherLanguages.map(([code, language]) => {
                  const newPath = `/${code}${getPathWithoutLocale()}`;
                  return (
                    <Link key={code} href={newPath} onClick={handleLanguageSelect}>
                      <motion.div
                        variants={itemVariants}
                        className="group flex items-center justify-between w-full p-3 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer hover:bg-[rgb(var(--color-primary))]/10 hover:border hover:border-[rgb(var(--color-primary))]/20 hover:shadow-lg"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                            {language.flag}
                          </span>
                          <span className="text-[rgb(var(--color-text))] group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300">
                            {language.name}
                          </span>
                        </div>
                        <span className="text-xs text-[rgb(var(--color-text-secondary))] font-medium px-2 py-1 bg-[rgb(var(--color-text-secondary))]/10 rounded-md group-hover:bg-[rgb(var(--color-primary))]/20 transition-colors duration-300">
                          {language.code}
                        </span>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>

              {/* Footer */}
              <motion.div 
                variants={itemVariants}
                className="px-3 py-2 border-t border-[rgb(var(--color-primary))]/10 mt-2"
              >
                <p className="text-xs text-[rgb(var(--color-text-secondary))] text-center">
                  {otherLanguages.length + 1} langues disponibles
                </p>
              </motion.div>
            </div>
            
            {/* Dropdown arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="w-4 h-4 bg-[rgb(var(--color-surface))]/95 border-l border-t border-[rgb(var(--color-primary))]/20 rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};