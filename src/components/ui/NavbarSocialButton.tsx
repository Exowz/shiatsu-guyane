'use client';

import { motion } from 'framer-motion';
import { FiShare2 } from 'react-icons/fi';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io';
import { Button } from '@/components/ui/button';

interface NavbarSocialButtonProps {
  isScrolled: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

export const NavbarSocialButton = ({ isScrolled, isOpen, onToggle }: NavbarSocialButtonProps) => {

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
    <motion.div 
      animate={isOpen ? "open" : "closed"} 
      className="relative navbar-drawer"
    >
      <button
        onClick={onToggle}
        className={getButtonClasses()}
        style={getButtonStyle()}
      >
        <FiShare2 className={`h-5 w-5 ${isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'}`} />
      </button>

      <motion.div
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ 
          originY: "top", 
          translateX: "-50%",
          backgroundColor: 'rgba(var(--color-surface), 0.95)' 
        }}
        className="flex flex-col gap-2 p-2 rounded-xl backdrop-blur-md shadow-xl absolute top-[120%] left-[50%] overflow-hidden"
      >
        <motion.div variants={itemVariants}>
          <Button asChild className="rounded-full h-10 w-10 p-0 hover:opacity-80" style={{ backgroundColor: 'rgba(var(--color-primary), 0.1)' }}>
            <a href="https://wa.me/594123456789" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className={`h-5 w-5 ${isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'}`} />
              <span className="sr-only">WhatsApp</span>
            </a>
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button asChild className="rounded-full h-10 w-10 p-0 hover:opacity-80" style={{ backgroundColor: 'rgba(var(--color-primary), 0.1)' }}>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className={`h-5 w-5 ${isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'}`} />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button asChild className="rounded-full h-10 w-10 p-0 hover:opacity-80" style={{ backgroundColor: 'rgba(var(--color-primary), 0.1)' }}>
            <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook className={`h-5 w-5 ${isScrolled ? 'text-[rgb(var(--color-text))]' : 'text-white'}`} />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Animation variants matching the original LanguageSwitcher
const wrapperVariants = {
  open: { scaleY: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
  closed: { scaleY: 0, transition: { when: "afterChildren", staggerChildren: 0.1 } },
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
  closed: { opacity: 0, y: -15, transition: { when: "afterChildren" } },
};