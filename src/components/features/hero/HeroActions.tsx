'use client';

import { Button } from '@/components/ui/button';
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Locale } from '@/lib/i18n-config';
import type { Dictionary } from '@/types/dictionary';

// Animation variants for staggered entrance with proper TypeScript types
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
} as const;

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 25
    }
  }
} as const;

const socialIconVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    y: -2,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 15
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

const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/594123456789',
    icon: IoLogoWhatsapp,
    gradient: 'from-green-500 to-green-600',
    shadow: 'shadow-green-500/30',
    hoverShadow: 'hover:shadow-green-500/50'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nathalie.jean.547/',
    icon: IoLogoInstagram,
    gradient: 'from-pink-500 to-purple-600',
    shadow: 'shadow-pink-500/30',
    hoverShadow: 'hover:shadow-pink-500/50'
  }
];

interface HeroActionsProps {
  lang: Locale;
  dictionary: Dictionary;
}

export const HeroActions = ({ dictionary }: HeroActionsProps) => {
  return (
    <motion.div 
      className="absolute bottom-0 left-0 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced glassmorphism backdrop */}
      
      {/* Main content container with responsive positioning */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 h-auto sm:h-12">
        
        {/* 1. ENHANCED SOCIAL ICONS (responsive positioning) */}
        <motion.div 
          className="flex items-center gap-2 sm:gap-3 order-2 sm:order-1"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.div
                key={social.name}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <Button 
                  asChild 
                  className="group relative rounded-2xl backdrop-blur-xl border border-white/20 hover:border-white/40 text-white h-11 w-11 sm:h-12 sm:w-12 p-0 overflow-hidden transition-all duration-300"
                  style={{ backgroundColor: 'rgba(var(--color-background), 0.1)' }}
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    {/* Enhanced background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${social.shadow} blur-lg`}></div>
                    
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 transition-all duration-300 group-hover:scale-110" />
                    
                    <span className="sr-only">
                      {social.name.toLowerCase() === 'whatsapp' ? dictionary.components?.hero?.socialLabels?.whatsapp :
                       social.name.toLowerCase() === 'instagram' ? dictionary.components?.hero?.socialLabels?.instagram :
                       social.name}
                    </span>
                    
                    {/* Ripple effect on click */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-30 bg-white transition-opacity duration-200"></div>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 2. ENHANCED SCROLL INDICATOR (responsive center positioning) */}
        <motion.div 
          className="order-1 sm:order-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 animate-bounce"
          variants={itemVariants}
        >
          <span className="text-xs text-white/70 font-medium tracking-wide">
            {dictionary.components.hero.discover}
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
          <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-white/60" />
        </motion.div>

        {/* 3. ENHANCED MODE TOGGLE (responsive right positioning) */}
        <motion.div 
          className="flex items-center gap-3 order-3"
          variants={itemVariants}
        > 
          <div className="relative">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl"></div>
            <ModeToggle />
          </div>
        </motion.div>

      </div>

      {/* Enhanced floating action elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-4 left-8 w-2 h-2 bg-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-4 right-12 w-1.5 h-1.5 bg-white/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/25 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </motion.div>
  );
};