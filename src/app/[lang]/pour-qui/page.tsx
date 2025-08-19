'use client';

import { useEffect, useState } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';
import type { Dictionary } from '@/types/dictionary';
import Link from 'next/link';
import { CtaSection } from '@/components/sections/CtaSection';
import { PourQuiTabs } from '@/components/sections/PourQuiTabs'; 
import { Users, Heart, Target, ArrowDown } from 'lucide-react';
import { GardenBackground, SectionGarden, GardenDivider, FloatingBotanicals } from '@/components/garden';

export default function PourQuiPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [lang, setLang] = useState<Locale | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      setLang(resolvedParams.lang);
      const dict = await getDictionary(resolvedParams.lang);
      setDictionary(dict);
    };
    fetchData();
  }, [params]);

  // Loading state with garden theme
  if (!dictionary || !lang) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] animate-spin mx-auto mb-4">
              <div className="w-12 h-12 rounded-full bg-background absolute top-2 left-2"></div>
            </div>
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-[rgb(var(--color-primary))]/20 animate-ping mx-auto"></div>
          </div>
          <p className="text-[rgb(var(--color-text-secondary))] font-medium">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Target Audience Garden Background */}
      <GardenBackground 
        intensity="medium" 
        wildlife={true} 
        atmosphere={true} 
        zIndex={1} 
      />
      
      {/* Welcoming Garden Elements for All Audiences */}
      <FloatingBotanicals 
        density="medium" 
        elements={['leaves', 'petals', 'seeds', 'particles']} 
        wildlife={true}
        zIndex={15}
      />

      {/* Welcome Garden Header */}
      <section className="min-h-screen justify-center flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-32 relative bg-secondary/30 backdrop-blur-sm">
        {/* Diverse Garden Canopy for All People */}
        <SectionGarden theme="botanical" position="header" height="xl" zIndex={2} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 text-center relative z-10">
          {/* Mobile-optimized hero badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/80 backdrop-blur-md rounded-full mb-6 sm:mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-secondary))]" />
            <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{dictionary.pages.pourQui.badge}</span>
          </div>
          
          {/* Mobile-responsive main title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto px-2">
            <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.pourQuiPage.title}
            </span>
          </h1>
          
          {/* Mobile-optimized subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            {dictionary.pourQuiPage.subtitle}
          </p>
          
          {/* Mobile-friendly visual separator */}
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-full mx-auto mb-6 sm:mb-8"></div>
          
          {/* Mobile scroll indicator */}
          <div className="inline-flex items-center gap-2 text-[rgb(var(--color-text-secondary))] animate-bounce">
            <span className="text-xs sm:text-sm font-medium">{dictionary.pages.pourQui.exploreBelow}</span>
            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
        
        {/* Diverse Garden Foundation */}
        <SectionGarden theme="grove" position="footer" height="lg" zIndex={2} />
      </section>

      {/* Garden Divider - Community Path */}
      <GardenDivider type="flower" size="lg" zIndex={5} />

      {/* Introduction Section with Forest Theme */}
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32 relative z-10">
        <SectionGarden theme="forest" position="background" height="md" zIndex={2} />
        {/* Mobile-optimized introduction section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-primary))]/10 backdrop-blur-sm px-3 sm:px-5 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            {dictionary.pages.pourQui.personalizedProfiles}
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            {dictionary.pages.pourQui.findIdealSupport}
          </h2>
          <p className="text-base sm:text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed px-4">
            {dictionary.pages.pourQui.personalizedConsultationSection?.description || `Chaque personne est unique, et votre parcours de bien-être doit l’être aussi. Découvrez comment nos services s’adaptent à vos besoins spécifiques.`}
          </p>
        </div>
      </main>

      {/* Garden Divider - Personalization Path */}
      <GardenDivider type="vine" size="md" zIndex={5} />

      {/* Tabs Section */}
      <section className="mb-28">
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative">
            {/* Subtle background for tabs section */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/20 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10 p-4 lg:p-8">
              <PourQuiTabs lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to account for tabs absolute positioning */}
      <div className="h-[1500px]"></div>

      {/* Additional Support Section */}
      <section className="mb-32">
        <div className="container mx-auto px-12 relative z-10">
          <div className="text-center">
            <div className="bg-card/60 backdrop-blur-md rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-[rgb(var(--color-secondary))]/3 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {dictionary.pages.pourQui.notFindProfile}
                </h3>
                <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed mb-8 max-w-2xl mx-auto">
                  {`Chaque situation est particulière. Contactez-moi pour un accompagnement personnalisé qui répond exactement à vos besoins et objectifs.`}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <Heart className="w-4 h-4" />
                    {dictionary.pages.pourQui.personalizedConsultation}
                  </Link>
                  <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-card-foreground px-8 py-3 rounded-full font-semibold hover:bg-card/90 transition-all duration-300 shadow-lg">
                    <Users className="w-4 h-4" />
                    {dictionary.pages.pourQui.contactUs}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Botanical Collection Theme */}
      <section className="relative bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-primary))]/3 via-transparent to-[rgb(var(--color-tertiary))]/3"></div>
        <div className="relative z-10">
          <CtaSection dictionary={dictionary} lang={lang} />
        </div>
      </section>
    </div>
  );
}