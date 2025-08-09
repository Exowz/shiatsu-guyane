'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { NavbarSocialButton } from '@/components/ui/NavbarSocialButton';
import { NavbarLanguageButton } from '@/components/ui/NavbarLanguageButton';
import { MobileSocialButton } from '@/components/ui/MobileSocialButton';
import { MobileLanguageButton } from '@/components/ui/MobileLanguageButton';
import { NavbarModeToggle } from '@/components/ui/NavbarModeToggle';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Locale } from '@/lib/i18n-config';
import type { Dictionary } from '@/types/dictionary';

type OpenDrawer = 'social' | 'language' | 'mobile' | 'mobile-social' | 'mobile-language' | null;


interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  dictionary: Dictionary;
  lang: Locale;
}

export const Navbar = ({ dictionary, lang }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<OpenDrawer>(null);
  const [mobileSocialOpen, setMobileSocialOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  
  // Refs for click outside detection
  const socialRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Check if we're on the homepage
  const isHomepage = pathname === `/${lang}` || pathname === '/';
  
  // Determine if navbar should be in "scrolled" state
  const shouldShowScrolledState = !isHomepage || isScrolled;

  // Handle mounting for SSR
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enhanced scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const triggerPoint = window.innerHeight * 0.9;
          setIsScrolled(window.scrollY > triggerPoint);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced outside click handler with proper ref checking
  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Element;
    
    // Don't interfere with link clicks
    if (target.closest('a[href]')) {
      return;
    }
    
    // Handle social dropdown
    if (openDrawer === 'social') {
      if (socialRef.current && !socialRef.current.contains(target)) {
        setOpenDrawer(null);
      }
      return;
    }
    
    // Handle language dropdown
    if (openDrawer === 'language') {
      if (languageRef.current && !languageRef.current.contains(target)) {
        setOpenDrawer(null);
      }
      return;
    }
    
    // Handle mobile menu - only close if clicking completely outside
    if (openDrawer === 'mobile') {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setOpenDrawer(null);
      }
    }
  }, [openDrawer]);

  useEffect(() => {
    if (openDrawer) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      if (openDrawer === 'mobile') {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [openDrawer, handleClickOutside]);

  // Enhanced drawer management with specific handlers
  const handleSocialToggle = useCallback(() => {
    setOpenDrawer(prev => prev === 'social' ? null : 'social');
  }, []);

  const handleLanguageToggle = useCallback(() => {
    setOpenDrawer(prev => prev === 'language' ? null : 'language');
  }, []);

  const handleMobileToggle = useCallback(() => {
    setOpenDrawer(prev => prev === 'mobile' ? null : 'mobile');
  }, []);

  // Mobile-specific handlers with mutual exclusivity
  const handleMobileSocialToggle = useCallback(() => {
    setMobileSocialOpen(prev => {
      const newState = !prev;
      if (newState) {
        setMobileLanguageOpen(false); // Close language when opening social
      }
      return newState;
    });
  }, []);

  const handleMobileLanguageToggle = useCallback(() => {
    setMobileLanguageOpen(prev => {
      const newState = !prev;
      if (newState) {
        setMobileSocialOpen(false); // Close social when opening language
      }
      return newState;
    });
  }, []);

  const handleMobileClose = useCallback(() => {
    setMobileSocialOpen(false);
    setMobileLanguageOpen(false);
  }, []);

  // Close mobile dropdowns on route change
  useEffect(() => {
    setOpenDrawer(null);
    setMobileSocialOpen(false);
    setMobileLanguageOpen(false);
  }, [pathname]);

  const navLinks: NavLink[] = [
    { href: '/about', label: dictionary.navbar.about },
    { href: '/le-shiatsu', label: dictionary.navbar.whatIsShiatsu },
    { href: '/pour-qui', label: dictionary.navbar.whoIsItFor },
    { href: '/services-pricing', label: dictionary.navbar.services },
    { href: '/infos-pratiques', label: dictionary.navbar.practicalInfo },
    { href: '/contact', label: dictionary.navbar.contact },
  ];

  // Enhanced CTA button component
  const CTAButton = ({ className = "", mobile = false }: { className?: string; mobile?: boolean }) => (
    <Button 
      asChild 
      className={`transition-all duration-300 font-semibold rounded-full shadow-lg hover:shadow-xl hover:transform hover:scale-105 ${
        mobile 
          ? 'w-full justify-center bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-6 py-3'
          : shouldShowScrolledState
            ? 'text-white hover:opacity-90 px-4 py-2 text-sm bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]'
            : 'text-white hover:opacity-80 px-4 py-2 text-sm'
      } ${className}`}
      style={!mobile && !shouldShowScrolledState ? {
        backgroundColor: 'rgba(var(--color-background), 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      } : {}}
    >
      <a 
        href="https://www.resalib.fr/praticien/64776-nathalie-jean-praticien-shiatsu-remire-montjoly#newrdvmodal" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {dictionary.ctaSection.button}
      </a>
    </Button>
  );

  // Enhanced navigation link component
  const NavLinkComponent = ({ link, mobile = false }: { link: NavLink; mobile?: boolean }) => {
    const isActive = pathname === `/${lang}${link.href}`;
    
    return (
      <Link
        href={`/${lang}${link.href}`}
        className={`
          relative font-medium transition-all duration-300 group
          ${mobile 
            ? 'block w-full text-left py-4 px-6 text-lg border-b border-white/10 hover:bg-white/5' 
            : 'px-3 py-2 rounded-full text-sm'
          }
          ${shouldShowScrolledState && !mobile
            ? `text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-primary))] hover:bg-[rgba(var(--color-primary),0.1)] ${isActive ? 'text-[rgb(var(--color-primary))] bg-[rgba(var(--color-primary),0.1)]' : ''}`
            : mobile 
              ? 'text-white hover:text-[rgb(var(--color-primary))]'
              : `text-white/90 hover:text-white hover:bg-white/10 ${isActive ? 'text-white bg-white/10' : ''}`
          }
        `}
        onClick={() => {
          // Close mobile menu when clicking a nav link
          if (mobile && openDrawer === 'mobile') {
            setOpenDrawer(null);
          }
        }}
      >
        <span className="relative z-10">{link.label}</span>
        {!mobile && isActive && (
          <motion.div
            className="absolute inset-0 rounded-full"
            layoutId="activeTab"
            style={{
              backgroundColor: shouldShowScrolledState 
                ? 'rgba(var(--color-primary), 0.1)' 
                : 'rgba(255, 255, 255, 0.1)'
            }}
          />
        )}
      </Link>
    );
  };

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <Link
          href={`/${lang}`}
          className={`relative p-3 rounded-full transition-all duration-500 backdrop-blur-xl border group hover:transform hover:scale-105 ${
            shouldShowScrolledState
              ? 'shadow-xl hover:shadow-2xl border-[rgb(var(--color-primary))]/20'
              : 'hover:shadow-lg border-white/20'
          }`}
          style={{
            backgroundColor: shouldShowScrolledState 
              ? 'rgba(var(--color-surface), 0.95)' 
              : 'rgba(var(--color-background), 0.1)'
          }}
        >
          <Image
            src="/logo.png" 
            alt="Shiatsu Guyane Logo"
            width={55}
            height={55}
            priority
            className="transition-transform duration-300 group-hover:rotate-3"
          />
          {/* Logo glow effect */}
          <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
            shouldShowScrolledState 
              ? 'bg-[rgb(var(--color-primary))]' 
              : 'bg-white'
          } blur-xl`}></div>
        </Link>

        {/* Center Section - Floating buttons when scrolled */}
        {shouldShowScrolledState && (
          <div className="hidden md:flex items-center space-x-3">
            <div ref={socialRef}>
              <NavbarSocialButton 
                isScrolled={shouldShowScrolledState} 
                isOpen={openDrawer === 'social'}
                onToggle={handleSocialToggle}
              />
            </div>
            <div ref={languageRef}>
              <NavbarLanguageButton 
                lang={lang} 
                isScrolled={shouldShowScrolledState}
                isOpen={openDrawer === 'language'}
                onToggle={handleLanguageToggle}
              />
            </div>
            <NavbarModeToggle isScrolled={shouldShowScrolledState} />
          </div>
        )}

        {/* Desktop Navigation - Enhanced */}
        <div className={`hidden lg:flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-500 border ${
          shouldShowScrolledState 
            ? 'backdrop-blur-xl shadow-xl border-[rgb(var(--color-primary))]/20'
            : 'backdrop-blur-xl border-white/20'
        }`}
        style={{
          backgroundColor: shouldShowScrolledState 
            ? 'rgba(var(--color-surface), 0.95)' 
            : 'rgba(var(--color-background), 0.1)'
        }}>
          {navLinks.map((link) => (
            <NavLinkComponent key={link.href} link={link} />
          ))}
          <CTAButton className="ml-2" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileToggle}
          className={`lg:hidden p-3 rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
            shouldShowScrolledState
              ? 'border-[rgb(var(--color-primary))]/20 shadow-lg'
              : 'border-white/20'
          }`}
          style={{
            backgroundColor: shouldShowScrolledState 
              ? 'rgba(var(--color-surface), 0.95)' 
              : 'rgba(var(--color-background), 0.1)'
          }}
          aria-label="Toggle mobile menu"
        >
          {openDrawer === 'mobile' ? (
            <X className={`w-6 h-6 transition-colors duration-300 ${
              shouldShowScrolledState ? 'text-[rgb(var(--color-text))]' : 'text-white'
            }`} />
          ) : (
            <Menu className={`w-6 h-6 transition-colors duration-300 ${
              shouldShowScrolledState ? 'text-[rgb(var(--color-text))]' : 'text-white'
            }`} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {openDrawer === 'mobile' && (
          <div className="lg:hidden fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-50" ref={mobileMenuRef}>
            <div className="bg-gradient-to-br from-[rgb(var(--color-surface))]/95 to-[rgb(var(--color-background))]/95 backdrop-blur-xl w-full h-full flex flex-col">
              {/* Mobile Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <Image
                  src="/logo.png" 
                  alt="Shiatsu Guyane Logo"
                  width={40}
                  height={40}
                />
                <button
                  onClick={() => setOpenDrawer(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                <nav className="py-6">
                  {navLinks.map((link) => (
                    <NavLinkComponent key={link.href} link={link} mobile />
                  ))}
                </nav>
              </div>

              {/* Mobile Footer Actions */}
              <div className="p-6 border-t border-white/10 space-y-4">
                <CTAButton mobile />
                
                {/* Mobile Social & Settings */}
                <div className="flex items-center justify-center space-x-4 pt-4">
                  <MobileSocialButton 
                    isOpen={mobileSocialOpen}
                    onToggle={handleMobileSocialToggle}
                    onClose={handleMobileClose}
                  />
                  <MobileLanguageButton 
                    lang={lang}
                    isOpen={mobileLanguageOpen}
                    onToggle={handleMobileLanguageToggle}
                    onClose={handleMobileClose}
                  />
                  <NavbarModeToggle isScrolled={true} />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};