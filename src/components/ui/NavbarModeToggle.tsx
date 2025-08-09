'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarModeToggleProps {
  isScrolled: boolean;
}

// Animation variants with proper TypeScript types
const iconVariants = {
  initial: { 
    y: -20, 
    opacity: 0, 
    rotate: -90,
    scale: 0.8
  },
  animate: { 
    y: 0, 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
      duration: 0.3
    }
  },
  exit: { 
    y: 20, 
    opacity: 0, 
    rotate: 90,
    scale: 0.8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
      duration: 0.2
    }
  }
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

export const NavbarModeToggle = ({ isScrolled }: NavbarModeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const getButtonClasses = () => 
    `group relative p-3 rounded-full transition-all duration-500 backdrop-blur-xl border overflow-hidden ${
      isScrolled
        ? 'shadow-xl hover:shadow-2xl border-[rgb(var(--color-primary))]/20 hover:border-[rgb(var(--color-primary))]/40'
        : 'hover:shadow-lg border-white/20 hover:border-white/40'
    }`;

  const getButtonStyle = () => ({
    backgroundColor: isScrolled 
      ? 'rgba(var(--color-surface), 0.95)' 
      : 'rgba(var(--color-background), 0.1)'
  });

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Loading state with skeleton
  if (!mounted) {
    return (
      <div
        className={getButtonClasses()}
        style={getButtonStyle()}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-secondary))]/20 animate-pulse"></div>
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={handleThemeToggle}
      className={getButtonClasses()}
      style={getButtonStyle()}
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Button glow effect */}
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
        isScrolled ? 'bg-[rgb(var(--color-primary))]' : 'bg-white'
      } blur-xl`}></div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10"
        animate={{
          background: isDark 
            ? 'linear-gradient(45deg, rgb(var(--color-primary)), rgb(var(--color-secondary)))'
            : 'linear-gradient(45deg, rgb(var(--color-secondary)), rgb(var(--color-primary)))'
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Icon container with enhanced animations */}
      <div className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex items-center justify-center"
          >
            {isDark ? (
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                <FiMoon className={`h-5 w-5 transition-colors duration-300 ${
                  isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'
                }`} />
              </motion.div>
            ) : (
              <motion.div
                animate={{ 
                  rotate: [0, -180],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                <FiSun className={`h-5 w-5 transition-colors duration-300 ${
                  isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'
                }`} />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Theme indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full shadow-lg"
        animate={{
          backgroundColor: isDark 
            ? 'rgb(var(--color-primary))' 
            : 'rgb(var(--color-secondary))',
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          backgroundColor: { duration: 0.3 },
          scale: { duration: 0.4, ease: "easeInOut" }
        }}
      >
        <div className="w-full h-full rounded-full animate-ping opacity-30 bg-current"></div>
      </motion.div>

      {/* Orbital animation for visual interest */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className={`absolute top-1 left-1/2 w-1 h-1 rounded-full opacity-30 ${
          isDark ? 'bg-yellow-400' : 'bg-blue-400'
        }`}></div>
      </motion.div>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 0, opacity: 0 }}
        whileTap={{ 
          scale: [1, 1.5], 
          opacity: [0.3, 0],
          transition: { duration: 0.4 }
        }}
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(var(--color-primary), 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(var(--color-secondary), 0.3) 0%, transparent 70%)'
        }}
      />
    </motion.button>
  );
};