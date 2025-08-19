import { motion } from 'framer-motion';
import { ButtonProps } from './types';

export default function Button({ isActive, toggleMenu, shouldShowScrolledState }: ButtonProps) {
  return (
    <div className="relative">
      {/* Garden glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
        isActive 
          ? 'bg-gradient-to-r from-[rgb(var(--color-primary))]/20 via-[rgb(122,132,113)]/15 to-[rgb(var(--color-secondary))]/20 blur-lg scale-150 opacity-100' 
          : 'opacity-0 scale-100'
      }`}></div>
      
      {/* Enhanced botanical accents around button */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        <div className={`absolute -top-1 -right-1 w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full transition-all duration-500 ${
          isActive ? 'opacity-60 animate-pulse' : 'opacity-0'
        }`}></div>
        <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[rgb(122,132,113)] rounded-full transition-all duration-700 delay-200 ${
          isActive ? 'opacity-50 animate-pulse' : 'opacity-0'
        }`}></div>
      </div>

      <motion.div 
        className="relative w-28 h-11 cursor-pointer rounded-full overflow-hidden backdrop-blur-xl border group hover:scale-105 transition-transform duration-300"
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          backgroundColor: shouldShowScrolledState 
            ? 'rgba(var(--color-surface), 0.95)' 
            : 'rgba(var(--color-background), 0.1)',
          borderColor: isActive 
            ? 'rgba(var(--color-primary), 0.4)'
            : shouldShowScrolledState 
              ? 'rgba(var(--color-primary), 0.2)' 
              : 'rgba(255, 255, 255, 0.2)',
          boxShadow: isActive 
            ? '0 8px 25px -8px rgba(var(--color-primary), 0.3), 0 0 0 1px rgba(var(--color-primary), 0.1)'
            : shouldShowScrolledState 
              ? '0 4px 15px -4px rgba(0, 0, 0, 0.1)'
              : '0 4px 15px -4px rgba(0, 0, 0, 0.05)'
        }}
      >
        {/* Subtle garden background pattern inside button */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className={`absolute top-1/4 right-1/4 w-4 h-4 bg-[rgb(var(--color-primary))] rounded-full blur-md transition-all duration-500 ${
            isActive ? 'animate-pulse' : ''
          }`}></div>
          <div className={`absolute bottom-1/3 left-1/3 w-3 h-3 bg-[rgb(122,132,113)] rounded-full blur-sm transition-all duration-700 delay-300 ${
            isActive ? 'animate-pulse' : ''
          }`}></div>
        </div>

        <motion.div
          className="relative w-full h-full"
          animate={{ y: isActive ? "-100%" : "0%" }}
          transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Menu State */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <span className={`text-sm font-medium transition-all duration-300 tracking-wide ${
              shouldShowScrolledState ? 'text-[rgb(var(--color-text))]' : 'text-white'
            } group-hover:text-[rgb(var(--color-primary))]`}
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}>
              Menu
            </span>
          </div>
          
          {/* Close State */}
          <div className="absolute w-full h-full flex items-center justify-center top-full">
            <span className={`text-sm font-medium transition-all duration-300 tracking-wide ${
              shouldShowScrolledState ? 'text-[rgb(var(--color-text))]' : 'text-white'
            } group-hover:text-[rgb(var(--color-primary))]`}
            style={{
              textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}>
              Close
            </span>
          </div>
        </motion.div>

        {/* Elegant border accent that appears on hover/active */}
        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isActive 
            ? 'bg-gradient-to-r from-[rgb(var(--color-primary))]/10 via-transparent to-[rgb(var(--color-primary))]/10'
            : 'opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-[rgb(var(--color-primary))]/5 group-hover:via-transparent group-hover:to-[rgb(var(--color-primary))]/5'
        }`}></div>
      </motion.div>
    </div>
  );
}