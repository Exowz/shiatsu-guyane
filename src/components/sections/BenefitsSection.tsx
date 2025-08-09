'use client'; 

import { Baby, Bone, HeartPulse, ShieldCheck, Waves, Wind, Sparkles, ArrowRight, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HoverEffect } from '../ui/card-hover-effect';
import type { Dictionary } from '@/types/dictionary';

export const BenefitsSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: string }) => {
  
  // Enhanced icons with varied natural colors
  const icons = [
    <HeartPulse key="1" className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(var(--color-secondary))]" />,
    <Bone key="2" className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(var(--color-primary))]" />,
    <Wind key="3" className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(var(--color-tertiary))]" />,
    <Baby key="4" className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(var(--color-secondary))]" />,
    <Waves key="5" className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(var(--color-primary))]" />,
    <ShieldCheck key="6" className="w-8 h-8 sm:w-10 sm:h-10 text-[rgb(var(--color-tertiary))]" />,
  ];

  const items = dictionary.benefitsSection.cards.map((card: { title: string; description: string }, index: number) => ({
    title: card.title,
    description: card.description,
    link: "#",
    icon: icons[index],
  }));

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated background with natural gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))] via-[rgb(var(--color-background))] to-[rgb(var(--color-surface))]"></div>
      
      {/* Mobile-optimized background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wellness energy - responsive sizing */}
        <div className="absolute top-1/5 left-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-primary))]/8 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        {/* Healing flow - mobile-optimized */}
        <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        {/* Balance and harmony - scaled for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[500px] lg:w-[700px] h-80 sm:h-96 md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Mobile-Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Mobile-optimized section badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/70 backdrop-blur-md rounded-full mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-secondary))]" />
            <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.benefits.badge}</span>
          </div>

          {/* Mobile-responsive main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight max-w-5xl mx-auto px-2">
            <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.benefitsSection.heading}
            </span>
          </h2>

          {/* Mobile-optimized subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            {dictionary.components.benefits.description}
          </p>

          {/* Mobile-stacked wellness pillars */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <HeartPulse className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-secondary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.benefits.quickInfo.physicalWellbeing}</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Waves className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.benefits.quickInfo.emotionalBalance}</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Wind className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-tertiary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.benefits.quickInfo.vitalEnergy}</span>
            </div>
          </div>
        </div>

        {/* Mobile-Enhanced Benefits Grid */}
        <div className="relative mb-12 sm:mb-16 md:mb-20">
          {/* Subtle background for benefits cards */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/10 via-transparent to-card/10 rounded-2xl sm:rounded-3xl"></div>
          
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <HoverEffect items={items} />
          </div>
        </div>

        {/* Mobile-Enhanced CTA Section */}
        <div className="text-center">
          {/* Mobile-optimized CTA container */}
          <div className="bg-card/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-2xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/5 via-[rgb(var(--color-primary))]/3 to-[rgb(var(--color-tertiary))]/5 rounded-2xl sm:rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Mobile-optimized encouraging text */}
              <div className="mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground mb-3 sm:mb-4">
                  {dictionary.components.benefits.ctaTitle}
                </h3>
                <p className="text-sm sm:text-base text-[rgb(var(--color-text-secondary))] leading-relaxed px-2">
                  {dictionary.components.benefits.ctaDescription}
                </p>
              </div>

              {/* Mobile-optimized CTA Button */}
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white hover:from-[rgb(var(--color-secondary))] hover:to-[rgb(var(--color-tertiary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <Link href={`/${lang}/le-shiatsu`} className="flex items-center justify-center gap-2 sm:gap-3">
                  <Wind className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{dictionary.benefitsSection.cta}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              {/* Mobile-optimized additional encouragement */}
              <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))] mt-4 sm:mt-6 flex items-center justify-center gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))] flex-shrink-0" />
                <span>{dictionary.components.benefits.traditionMessage}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-stacked benefits summary stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-card-foreground mb-2">{dictionary.components.benefits.cards.vitality.title}</h4>
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.vitality.description}</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Bone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-card-foreground mb-2">{dictionary.components.benefits.cards.relief.title}</h4>
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.relief.description}</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-card-foreground mb-2">{dictionary.components.benefits.cards.balance.title}</h4>
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.balance.description}</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-card-foreground mb-2">{dictionary.components.benefits.cards.prevention.title}</h4>
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.prevention.description}</p>
          </div>
        </div>
      </div>

      {/* Mobile-optimized floating wellness elements */}
      <div className="absolute top-10 sm:top-12 md:top-16 right-6 sm:right-8 md:right-12 w-3 h-3 sm:w-4 sm:h-4 bg-[rgb(var(--color-secondary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-4 sm:left-6 md:left-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[rgb(var(--color-primary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 left-4 sm:left-6 md:left-8 w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};