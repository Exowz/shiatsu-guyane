import { motion } from 'framer-motion';
import Link from 'next/link';
import { perspective, slideIn } from "./anim";
import { NavProps } from './types';
import type { Locale } from '@/lib/i18n-config';
import { NavbarModeToggle } from '@/components/ui/NavbarModeToggle';
import { MobileSocialButton } from '@/components/ui/MobileSocialButton';
import { MobileLanguageButton } from '@/components/ui/MobileLanguageButton';

export default function Nav({ navLinks, lang, onLinkClick, socialOpen, setSocialOpen, languageOpen, setLanguageOpen }: NavProps) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
      {/* Enhanced garden background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary botanical elements */}
        <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-gradient-to-br from-[rgb(122,132,113)]/10 to-[rgb(var(--color-primary))]/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-[rgb(var(--color-secondary))]/8 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/6 to-[rgb(122,132,113)]/4 rounded-full blur-3xl animate-pulse delay-300"></div>
        
        {/* Additional organic accents */}
        <div className="absolute top-1/2 left-1/12 w-24 h-24 bg-[rgb(122,132,113)]/6 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/6 right-1/8 w-36 h-36 bg-gradient-to-tl from-[rgb(var(--color-primary))]/7 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Subtle botanical shapes */}
        <div className="absolute top-1/4 left-1/2 w-20 h-20 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-lg animate-pulse delay-800"></div>
      </div>

      {/* Top spacer for better vertical centering */}
      <div className="flex-1 max-h-20"></div>

      {/* Main Navigation Links - Enhanced with botanical accents */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10">
        {navLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`nav_${i}`} className="group relative overflow-hidden" style={{ perspective: '1200px' }}>
              {/* Botanical accent for each link */}
              <div className="absolute -left-8 top-1/2 w-1 h-0 bg-gradient-to-b from-[rgb(var(--color-primary))] to-[rgb(122,132,113)] rounded-full opacity-0 group-hover:opacity-60 group-hover:h-12 transition-all duration-500 transform -translate-y-1/2"></div>
              
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className="perspective-link"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                <Link
                  href={`/${lang}${href}`}
                  onClick={onLinkClick}
                  className="block text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center hover:text-[rgb(var(--color-primary))] transition-all duration-700 py-3 md:py-4 px-6 rounded-xl group-hover:bg-white/5 group-hover:backdrop-blur-sm border border-transparent group-hover:border-white/10 tracking-wide"
                  style={{
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  {title}
                </Link>
              </motion.div>
              
              {/* Right botanical accent */}
              <div className="absolute -right-8 top-1/2 w-1 h-0 bg-gradient-to-t from-[rgb(var(--color-primary))] to-[rgb(122,132,113)] rounded-full opacity-0 group-hover:opacity-60 group-hover:h-12 transition-all duration-500 transform -translate-y-1/2 delay-100"></div>
            </div>
          );
        })}
      </div>

      {/* Elegant garden footer */}
      <motion.div 
        className="relative z-10 flex flex-col items-center space-y-4 mt-8"
        variants={slideIn}
        custom={navLinks.length}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {/* Top botanical divider */}
        <div className="flex md:hidden items-center justify-center space-x-3 opacity-40 mb-6 pb-6 border-b border-white/10">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))] to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-[rgb(122,132,113)] animate-pulse"></div>
          <div className="w-12 h-px bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(122,132,113)] to-[rgb(var(--color-primary))]"></div>
          <div className="w-1 h-1 rounded-full bg-[rgb(var(--color-secondary))] animate-pulse delay-300"></div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent via-[rgb(var(--color-primary))] to-transparent"></div>
        </div>

        {/* Mobile-only utility buttons - using mobile components that open upward */}
        <div className="relative flex md:hidden items-center justify-center space-x-4">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <MobileSocialButton 
              isOpen={socialOpen}
              onToggle={() => setSocialOpen(!socialOpen)}
            />
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <MobileLanguageButton 
              lang={lang as Locale}
              isOpen={languageOpen}
              onToggle={() => setLanguageOpen(!languageOpen)}
            />
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <NavbarModeToggle isScrolled={true} />
          </div>
        </div>
      </motion.div>

      {/* Bottom spacer */}
      <div className="flex-1 max-h-16"></div>
    </div>
  );
}