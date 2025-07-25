'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarModeToggleProps {
  isScrolled: boolean;
}

export const NavbarModeToggle = ({ isScrolled }: NavbarModeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={`p-3 rounded-full transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? 'shadow-md hover:opacity-90'
            : 'hover:opacity-80'
        }`}
        style={{
          backgroundColor: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(var(--color-background), 0.1)'
        }}
      >
        <FiSun className={`h-5 w-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
      </button>
    );
  }

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
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={getButtonClasses()}
      style={getButtonStyle()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.15
          }}
        >
          {theme === 'dark' ? (
            <FiSun className={`h-5 w-5 ${isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'}`} />
          ) : (
            <FiMoon className={`h-5 w-5 ${isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'}`} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};