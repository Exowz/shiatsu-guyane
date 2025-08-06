'use client'; // Cette page doit être un composant client pour que les cartes soient interactives

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';
import { CtaSection } from '@/components/sections/CtaSection';
import { PourQuiTabs } from '@/components/sections/PourQuiTabs'; // Import our new component
import { useEffect, useState } from 'react';
import { Users, Heart, Target, ArrowDown } from 'lucide-react';

// Nous devons récupérer les données dans un composant client en utilisant useEffect
function PourQuiPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const [dictionary, setDictionary] = useState<any | null>(null);
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

  // Affiche un message de chargement élégant pendant la récupération des textes
  if (!dictionary || !lang) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center">
        <div className="text-center">
          <div className="relative">
            {/* Animated loading spinner with natural colors */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] animate-spin mx-auto mb-4">
              <div className="w-12 h-12 rounded-full bg-background absolute top-2 left-2"></div>
            </div>
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-[rgb(var(--color-primary))]/20 animate-ping mx-auto"></div>
          </div>
          <p className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary?.pages?.pourQui?.loading || 'Chargement...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Sophisticated background elements using natural palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Maracuja gold glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse"></div>
        {/* Terracotta warmth */}
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Sage green subtlety */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/3 to-[rgb(var(--color-primary))]/2 rounded-full blur-3xl"></div>
      </div>

      {/* 1. Enhanced Page Header */}
      <section className="min-h-screen justify-center flex flex-col items-center py-20 md:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-6 pt-32 pb-24 text-center relative z-10">
          {/* Hero badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Heart className="w-5 h-5 text-[rgb(var(--color-secondary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.pages.pourQui.badge}</span>
          </div>
          
          {/* Main title with gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.pourQuiPage.title}
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-12">
            {dictionary.pourQuiPage.subtitle}
          </p>
          
          {/* Visual separator with animation */}
          <div className="w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-full mx-auto mb-8"></div>
          
          {/* Scroll indicator */}
          <div className="inline-flex items-center gap-2 text-[rgb(var(--color-text-secondary))] animate-bounce">
            <span className="text-sm font-medium">{dictionary.pages.pourQui.exploreBelow}</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <main className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        {/* Enhanced introduction section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-primary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-sm mb-8 shadow-lg">
            <Users className="w-4 h-4" />
            {dictionary.pages.pourQui.personalizedProfiles}
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {dictionary.pages.pourQui.findIdealSupport}
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed">
            {dictionary.pages.pourQui.introDescription}
          </p>
        </div>
      </main>

      {/* 3. Tabs Section */}
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

      {/* 4. Additional Support Section */}
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
                  {dictionary.pages.pourQui.personalizedDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                    <Heart className="w-4 h-4" />
                    {dictionary.pages.pourQui.personalizedConsultation}
                  </button>
                  <button className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-card-foreground px-8 py-3 rounded-full font-semibold hover:bg-card/90 transition-all duration-300 shadow-lg">
                    <Users className="w-4 h-4" />
                    {dictionary.pages.pourQui.contactUs}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Call to Action Section */}
      <section className="relative bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-primary))]/3 via-transparent to-[rgb(var(--color-tertiary))]/3"></div>
        <div className="relative z-10">
          <CtaSection dictionary={dictionary} lang={lang} />
        </div>
      </section>
    </div>
  );
}

// Export as default
export default PourQuiPage;