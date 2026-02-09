'use client';

import { motion, AnimatePresence } from "framer-motion";
import { FiShare2 } from 'react-icons/fi';
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io';

interface NavbarSocialButtonProps {
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

const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/594123456789',
    icon: IoLogoWhatsapp,
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nathalie.jean.547/',
    icon: IoLogoInstagram,
    color: 'from-pink-500 to-purple-600',
    hoverColor: 'hover:from-pink-600 hover:to-purple-700'
  }
];

export const NavbarSocialButton = ({ isScrolled, isOpen, onToggle }: NavbarSocialButtonProps) => {
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

  return (
    <div className="relative">
      {/* Enhanced Button */}
      <button
        onClick={onToggle}
        className={getButtonClasses()}
        style={getButtonStyle()}
        aria-label="Social media links"
      >
        <FiShare2 className={`h-5 w-5 transition-all duration-300 group-hover:rotate-12 ${
          isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'
        }`} />
        
        {/* Button glow effect */}
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
          isScrolled ? 'bg-[rgb(var(--color-primary))]' : 'bg-white'
        } blur-xl`}></div>
        
        {/* Active indicator */}
        {isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full shadow-lg animate-pulse"></div>
        )}
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
            className="absolute top-[120%] left-[50%] w-48 overflow-hidden z-50"
          >
            <div className="bg-[rgb(var(--color-surface))]/95 backdrop-blur-xl border border-[rgb(var(--color-primary))]/20 rounded-2xl shadow-2xl p-2">
              {/* Header */}
              <motion.div 
                variants={itemVariants}
                className="px-3 py-2 border-b border-[rgb(var(--color-primary))]/10 mb-2"
              >
                <p className="text-xs font-semibold text-[rgb(var(--color-text-secondary))] uppercase tracking-wide">
                  Follow Us
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="space-y-1">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      className="group flex items-center gap-3 w-full p-3 text-sm font-medium rounded-xl transition-all duration-300 cursor-pointer hover:bg-[rgb(var(--color-primary))]/10 hover:border hover:border-[rgb(var(--color-primary))]/20 hover:shadow-lg"
                      onClick={onToggle} // Close dropdown when clicking a social link
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${social.color} ${social.hoverColor} transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[rgb(var(--color-text))] group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300 font-medium">
                        {social.name}
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full"></div>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Footer */}
              <motion.div 
                variants={itemVariants}
                className="px-3 py-2 border-t border-[rgb(var(--color-primary))]/10 mt-2"
              >
                <p className="text-xs text-[rgb(var(--color-text-secondary))] text-center">
                  Connectez-vous avec nous
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