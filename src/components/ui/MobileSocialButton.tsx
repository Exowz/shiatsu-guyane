'use client';

interface MobileSocialButtonProps {
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

import { motion, AnimatePresence } from "framer-motion";
import { FiShare2 } from 'react-icons/fi';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io';
import { useState } from 'react';

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
      staggerChildren: 0.08
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

const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/594123456789',
    icon: IoLogoWhatsapp,
    gradient: 'from-green-500 to-green-600',
    shadow: 'shadow-green-500/30'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/your-profile',
    icon: IoLogoInstagram,
    gradient: 'from-pink-500 to-purple-600',
    shadow: 'shadow-pink-500/30'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/your-page',
    icon: IoLogoFacebook,
    gradient: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-500/30'
  }
];

export const MobileSocialButton = ({ isOpen = false, onToggle, onClose }: MobileSocialButtonProps = {}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  // Use external state if provided, otherwise use internal state
  const isDropdownOpen = onToggle ? isOpen : internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Mobile Social Button */}
      <motion.button
        onClick={handleToggle}
        className="group relative p-4 rounded-full transition-all duration-300 backdrop-blur-xl border border-[rgb(var(--color-primary))]/20 shadow-xl hover:shadow-2xl active:scale-95"
        style={{
          backgroundColor: 'rgba(var(--color-surface), 0.95)'
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Social media links"
      >
        <motion.div
          animate={{ 
            rotate: isDropdownOpen ? 180 : 0,
            scale: isDropdownOpen ? 1.1 : 1 
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <FiShare2 className="h-6 w-6 text-[rgb(var(--color-text))] transition-colors duration-300" />
        </motion.div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-20 transition-opacity duration-200 bg-[rgb(var(--color-primary))] blur-xl"></div>
        
        {/* Active indicator */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full shadow-lg"
            >
              <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full animate-ping"></div>
            </motion.div>
          )}
        </AnimatePresence>
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
            className="absolute bottom-[120%] left-[50%] w-64 overflow-hidden z-[60]"
          >
            <div className="bg-[rgb(var(--color-surface))]/98 backdrop-blur-xl border border-[rgb(var(--color-primary))]/20 rounded-3xl shadow-2xl p-4">
              {/* Header */}
              <motion.div 
                variants={mobileItemVariants}
                className="text-center pb-4 border-b border-[rgb(var(--color-primary))]/15"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 rounded-full">
                  <FiShare2 className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                  <span className="text-sm font-semibold text-[rgb(var(--color-text))]">
                    Suivez-nous
                  </span>
                </div>
              </motion.div>

              {/* Social Links Grid */}
              <motion.div 
                variants={mobileItemVariants}
                className="grid grid-cols-1 gap-3 pt-4"
              >
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={mobileItemVariants}
                      onClick={handleLinkClick}
                      className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-[rgb(var(--color-primary))]/5 active:scale-98"
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`relative p-3 rounded-xl bg-gradient-to-r ${social.gradient} ${social.shadow} shadow-lg transition-all duration-300 group-hover:scale-110 group-active:scale-105`}>
                        <IconComponent className="w-6 h-6 text-white" />
                        
                        {/* Icon glow effect */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg`}></div>
                      </div>
                      
                      <div className="flex-1">
                        <span className="text-[rgb(var(--color-text))] group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300 font-semibold text-lg">
                          {social.name}
                        </span>
                        <div className="text-xs text-[rgb(var(--color-text-secondary))] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Connectez-vous
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <motion.div 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 5, opacity: 1 }}
                        className="w-6 h-6 rounded-full bg-[rgb(var(--color-primary))]/10 flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full"></div>
                      </motion.div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Footer */}
              <motion.div 
                variants={mobileItemVariants}
                className="pt-4 mt-4 border-t border-[rgb(var(--color-primary))]/15 text-center"
              >
                <p className="text-xs text-[rgb(var(--color-text-secondary))]">
                  Restez connecté avec Shiatsu Guyane
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