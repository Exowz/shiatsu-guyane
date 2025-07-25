'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { NavbarSocialButton } from '@/components/ui/NavbarSocialButton';
import { NavbarLanguageButton } from '@/components/ui/NavbarLanguageButton';
import { NavbarModeToggle } from '@/components/ui/NavbarModeToggle';
import type { Locale } from '@/lib/i18n-config';

type OpenDrawer = 'social' | 'language' | null;

export const Navbar = ({ dictionary, lang }: { dictionary: any; lang: Locale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<OpenDrawer>(null);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomepage = pathname === `/${lang}` || pathname === '/';
  
  // Determine if navbar should be in "scrolled" state
  const shouldShowScrolledState = !isHomepage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.9;
      setIsScrolled(window.scrollY > triggerPoint);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close all drawers when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.navbar-drawer')) {
        setOpenDrawer(null);
      }
    };
    if (openDrawer) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDrawer]);

  // Drawer management functions
  const handleDrawerToggle = (drawer: 'social' | 'language') => {
    setOpenDrawer(prev => prev === drawer ? null : drawer);
  };


  const navLinks = [
    { href: '/about', label: dictionary.navbar.about },
    { href: '/le-shiatsu', label: dictionary.navbar.whatIsShiatsu },
    { href: '/pour-qui', label: dictionary.navbar.whoIsItFor },
    { href: '/services-pricing', label: dictionary.navbar.services },
    { href: '/infos-pratiques', label: dictionary.navbar.practicalInfo },
    { href: '/contact', label: dictionary.navbar.contact },
  ];


  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className={`p-3 rounded-full transition-all duration-300 backdrop-blur-md ${
            shouldShowScrolledState
              ? 'shadow-md hover:opacity-90'
              : 'hover:opacity-80'
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
          />
        </Link>

        {/* Center Section - Show floating buttons when scrolled or on non-homepage */}
        {shouldShowScrolledState && (
          <div className="flex items-center space-x-3">
            <NavbarSocialButton 
              isScrolled={shouldShowScrolledState} 
              isOpen={openDrawer === 'social'}
              onToggle={() => handleDrawerToggle('social')}
            />
            <NavbarLanguageButton 
              lang={lang} 
              isScrolled={shouldShowScrolledState}
              isOpen={openDrawer === 'language'}
              onToggle={() => handleDrawerToggle('language')}
            />
            <NavbarModeToggle isScrolled={shouldShowScrolledState} />
          </div>
        )}

        {/* Desktop Navigation - Keep original */}
        <div className={`hidden lg:flex items-center space-x-4 px-4 py-2 rounded-full transition-all duration-300 ${
          shouldShowScrolledState 
            ? 'backdrop-blur-md shadow-md'
            : 'backdrop-blur-md'
        }`}
        style={{
          backgroundColor: shouldShowScrolledState 
            ? 'rgba(var(--color-surface), 0.95)' 
            : 'rgba(var(--color-background), 0.1)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className={
                shouldShowScrolledState
                  ? 'text-sm font-medium transition-all duration-300 px-2 py-1 rounded-full text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-text))] hover:bg-[rgba(var(--color-primary),0.1)]'
                  : 'text-sm bg-transparent border-0 font-medium transition-all duration-300 px-2 py-1 rounded-full relative overflow-hidden text-white/90 hover:text-white hover:bg-white/10'
              }
            >
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <Button 
            asChild 
            className={`text-sm transition-all duration-300 px-3 py-1 rounded-full font-semibold ${
              shouldShowScrolledState
                ? 'text-white hover:opacity-90'
                : 'text-white hover:opacity-80'
            }`}
            style={{
              backgroundColor: shouldShowScrolledState 
                ? 'rgb(var(--color-primary))' 
                : 'rgba(var(--color-background), 0.1)'
            }}
          >
            <Link href={`/${lang}/contact`}>
              {dictionary.navbar.bookNow}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};