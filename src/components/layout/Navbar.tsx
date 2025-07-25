'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Navbar = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        {/* Logo - The wrapping div with flex-1 has been removed */}
        <Link
          href={`/${lang}`}
          className={`p-1 rounded-full transition-all duration-300 ${
            isScrolled
              // Scrolled State: A subtle hover to slightly change the solid background
              ? 'backdrop-blur-md shadow-md hover:opacity-90'
              // Unscrolled State: The glass effect with a hover highlight
              : 'backdrop-blur-md hover:opacity-80'
          }`}
          style={{
            backgroundColor: isScrolled 
              ? 'rgba(var(--color-surface), 0.95)' 
              : 'rgba(var(--color-background), 0.1)'
          }}
        >
          <Image
          src="/logo.png" 
          alt="Shiatsu Guyane Logo"
          width={55} // IMPORTANT: Change to your logo's actual width
          height={55}  // IMPORTANT: Change to your logo's actual height
          priority    // Helps load the logo faster
          />
        </Link>
        

        {/* Desktop Navigation with glassmorphism */}
        {/* I noticed you removed the isScrolled logic here, which is fine! */}
        {/* This style will now be static. */}
        <div className={`flex items-center space-x-4 px-4 py-2 rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-md shadow-md'
            : 'backdrop-blur-md'
        }`}
        style={{
          backgroundColor: isScrolled 
            ? 'rgba(var(--color-surface), 0.95)' 
            : 'rgba(var(--color-background), 0.1)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className={
                isScrolled
                  // Scrolled State: Simple, high-contrast hover
                  ? 'text-sm font-medium transition-all duration-300 px-2 py-1 rounded-full text-white hover:text-white/80 hover:bg-white/10'
                  // Unscrolled State: Glass effect
                  : 'text-sm bg-transparent border-0 font-medium transition-all duration-300 px-2 py-1 rounded-full relative overflow-hidden text-white/90 hover:text-white hover:bg-white/10'
              }
            >
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <Button 
            asChild 
            // The button's style also changes to be high-contrast
            className={`text-sm transition-all duration-300 px-3 py-1 rounded-full font-semibold text-white ${
              isScrolled
                ? 'hover:opacity-90' // Solid primary button
                : 'hover:opacity-80' // Glass effect
            }`}
            style={{
              backgroundColor: isScrolled 
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