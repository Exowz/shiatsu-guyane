'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../navbar/Button';
import Nav from '../navbar/Nav';
import { NavbarSocialButton } from '@/components/ui/NavbarSocialButton';
import { NavbarLanguageButton } from '@/components/ui/NavbarLanguageButton';
import { NavbarModeToggle } from '@/components/ui/NavbarModeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { NavLink } from '../navbar/types';
import type { Locale } from '@/lib/i18n-config';
import type { Dictionary } from '@/types/dictionary';

interface NavbarProps {
    dictionary: Dictionary;
    lang: Locale;
}

const menu: Variants = {
    open: {
        width: "calc(100vw - 44px)",
        height: "calc(100vh - 44px)",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Header({ dictionary, lang }: NavbarProps) {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [socialOpen, setSocialOpen] = useState<boolean>(false);
    const [languageOpen, setLanguageOpen] = useState<boolean>(false);
    const pathname = usePathname();
    
    // Check if we're on the homepage
    const isHomepage = pathname === `/${lang}` || pathname === '/';
    
    // Determine if navbar should show tools (ORIGINAL LOGIC)
    const shouldShowScrolledState = !isHomepage || isScrolled;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Enhanced scroll handler with ORIGINAL trigger point
    useEffect(() => {
        let ticking = false;
        
        const handleScroll = (): void => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const triggerPoint = window.innerHeight * 0.9; // ORIGINAL trigger point
                    setIsScrolled(window.scrollY > triggerPoint);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsActive(false);
        setSocialOpen(false);
        setLanguageOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isActive]);

    const navLinks: NavLink[] = [
        { title: dictionary.navbar.about, href: '/about' },
        { title: dictionary.navbar.whatIsShiatsu, href: '/le-shiatsu' },
        { title: dictionary.navbar.whoIsItFor, href: '/pour-qui' },
        { title: dictionary.navbar.services, href: '/services-pricing' },
        { title: dictionary.navbar.practicalInfo, href: '/infos-pratiques' },
        { title: dictionary.navbar.contact, href: '/contact' },
    ];

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {/* Header with Logo and Center Tools */}
            <header className="fixed top-0 left-0 w-full z-50">
                <nav className="px-4 sm:px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
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

                    {/* CENTER SECTION - Language switcher when NOT scrolled (desktop only), tools when scrolled */}
                    <div className="hidden md:flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!shouldShowScrolledState ? (
                                <motion.div
                                    key="language-switcher"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl"></div>
                                    <LanguageSwitcher lang={lang} lightMode={false} />
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="navbar-tools"
                                    className="hidden md:flex items-center space-x-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <NavbarSocialButton 
                                        isScrolled={shouldShowScrolledState} 
                                        isOpen={socialOpen}
                                        onToggle={() => setSocialOpen(!socialOpen)}
                                    />
                                    <NavbarLanguageButton 
                                        lang={lang} 
                                        isScrolled={shouldShowScrolledState}
                                        isOpen={languageOpen}
                                        onToggle={() => setLanguageOpen(!languageOpen)}
                                    />
                                    <NavbarModeToggle isScrolled={shouldShowScrolledState} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Spacer for layout balance */}
                    <div className="w-[71px]"></div>
                </nav>
            </header>

            {/* Morphing Menu System - Garden Enhanced */}
            <div className="fixed top-6 right-6 z-50">
                {/* Morphing Container with sophisticated garden styling */}
                <motion.div 
                    className="absolute"
                    variants={menu}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                    style={{
                        backgroundColor: isActive 
                            ? 'rgba(var(--color-surface), 0.95)' 
                            : 'rgba(var(--color-surface), 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: isActive 
                            ? '1px solid rgba(var(--color-primary), 0.15)' 
                            : '1px solid rgba(var(--color-primary), 0.2)',
                        borderRadius: isActive ? '2rem' : '25px',
                        boxShadow: isActive 
                            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(var(--color-primary), 0.05)' 
                            : '0 8px 25px -8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden'
                    }}
                >
                    {/* Enhanced garden background for open menu */}
                    {isActive && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {/* Sophisticated sage green garden elements */}
                            <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-[rgb(122,132,113)]/8 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-[rgb(var(--color-primary))]/6 rounded-full blur-xl animate-pulse delay-700"></div>
                            <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-gradient-to-r from-[rgb(var(--color-secondary))]/4 to-[rgb(122,132,113)]/3 rounded-full blur-3xl"></div>
                            {/* Additional organic shapes */}
                            <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-[rgb(122,132,113)]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
                            <div className="absolute bottom-1/6 right-1/6 w-36 h-36 bg-[rgb(var(--color-tertiary))]/6 rounded-full blur-2xl animate-pulse delay-500"></div>
                        </div>
                    )}

                    <AnimatePresence>
                        {isActive && (
                            <Nav 
                                navLinks={navLinks}
                                lang={lang}
                                onLinkClick={() => setIsActive(false)}
                                socialOpen={socialOpen}
                                setSocialOpen={setSocialOpen}
                                languageOpen={languageOpen}
                                setLanguageOpen={setLanguageOpen}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
                
                {/* Enhanced Button */}
                <div className="relative z-10">
                    <Button 
                        isActive={isActive} 
                        toggleMenu={() => setIsActive(!isActive)}
                        shouldShowScrolledState={shouldShowScrolledState}
                    />
                </div>
            </div>
        </>
    );
}

export { Header };