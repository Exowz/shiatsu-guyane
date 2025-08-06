// src/app/components/HeroActions.tsx
'use client';

import { Button } from '@/components/ui/button';
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { ModeToggle } from '@/components/ui/mode-toggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import type { Locale } from '@/lib/i18n-config';

export const HeroActions = ({ lang, dictionary }: { lang: Locale; dictionary: any }) => {
  return (
    // This is now a full-width container at the bottom of the hero section
    <div className="absolute bottom-0 left-0 w-full px-10 py-8">
      {/* This inner div acts as our positioning 'rail' */}
      <div className="relative flex items-center h-10">
        
        {/* 1. SOCIAL ICONS (positioned on the far left) */}
        <div className="absolute left-0 flex items-center gap-2">
          <Button asChild className="rounded-full backdrop-blur-md hover:opacity-80 text-white h-12 w-12 p-0" style={{ backgroundColor: 'rgba(var(--color-background), 0.1)' }}>
            <a href="https://wa.me/594123456789" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="h-5 w-5" />
              <span className="sr-only">{dictionary.components.hero.socialLabels.whatsapp}</span>
            </a>
          </Button>
          <Button asChild className="rounded-full backdrop-blur-md hover:opacity-80 text-white h-12 w-12 p-0" style={{ backgroundColor: 'rgba(var(--color-background), 0.1)' }}>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className="h-5 w-5" />
              <span className="sr-only">{dictionary.components.hero.socialLabels.instagram}</span>
            </a>
          </Button>
          <Button asChild className="rounded-full backdrop-blur-md hover:opacity-80 text-white h-12 w-12 p-0" style={{ backgroundColor: 'rgba(var(--color-background), 0.1)' }}>
            <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook className="h-5 w-5" />
              <span className="sr-only">{dictionary.components.hero.socialLabels.facebook}</span>
            </a>
          </Button>
        </div>

        {/* 2. LANGUAGE SWITCHER (positioned in the absolute center) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <LanguageSwitcher lang={lang} />
        </div>

        {/* 3. MODE TOGGLE (positioned on the far right) */}
        <div className="absolute right-0">
          <ModeToggle />
        </div>

      </div>
    </div>
  );
};