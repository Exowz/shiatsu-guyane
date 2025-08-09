'use client';
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Heart, ArrowRight, Star, Target, Sparkles } from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';

export const WhoIsItForSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: string }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated background with natural colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-background))] via-[rgb(var(--color-surface))] to-[rgb(var(--color-background))]"></div>
      
      {/* Mobile-optimized Community-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Inclusive warmth - responsive sizing */}
        <div className="absolute top-1/4 right-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        {/* Diverse support - mobile-optimized */}
        <div className="absolute bottom-1/3 left-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        {/* Community connection - scaled for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[500px] lg:w-[700px] h-80 sm:h-96 md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Mobile-Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Mobile-optimized section badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/70 backdrop-blur-md rounded-full mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-primary))]" />
            <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.whoIsItFor.badge}</span>
          </div>

          {/* Mobile-responsive main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight max-w-4xl mx-auto px-2">
            <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.whoIsItForSection.heading}
            </span>
          </h2>

          {/* Mobile-optimized subtitle with community focus */}
          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            {dictionary.components.whoIsItFor.description}
          </p>

          {/* Mobile-stacked trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-secondary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.whoIsItFor.quickInfo.allAges}</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.whoIsItFor.quickInfo.allNeeds}</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-tertiary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.whoIsItFor.quickInfo.personalizedApproach}</span>
            </div>
          </div>
        </div>
        
        {/* Mobile-Enhanced Testimonials Container */}
        <div className="relative mb-12 sm:mb-16">
          {/* Subtle background for testimonials */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/20 via-transparent to-card/20 rounded-2xl sm:rounded-3xl"></div>
          
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <AnimatedTestimonials 
              testimonials={dictionary.whoIsItForSection.testimonials} 
            />
          </div>
        </div>

        {/* Mobile-Enhanced CTA Section */}
        <div className="text-center">
          {/* Mobile-optimized CTA container */}
          <div className="bg-card/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-2xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-[rgb(var(--color-secondary))]/3 rounded-2xl sm:rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Mobile-optimized encouraging text */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-2 sm:mb-3">
                  {dictionary.components.whoIsItFor.findProfileTitle}
                </h3>
                <p className="text-sm sm:text-base text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-md mx-auto">
                  {dictionary.components.whoIsItFor.findProfileDescription}
                </p>
              </div>

              {/* Mobile-enhanced CTA Button */}
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white hover:from-[rgb(var(--color-secondary))] hover:to-[rgb(var(--color-tertiary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <Link href={`/${lang}/pour-qui`} className="flex items-center justify-center gap-2 sm:gap-3">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{dictionary.whoIsItForSection.cta}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              {/* Mobile-optimized additional encouragement */}
              <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))] mt-3 sm:mt-4 flex items-center justify-center gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))] flex-shrink-0" />
                <span>{dictionary.components.whoIsItFor.uniqueMessage}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-stacked Community stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-card-foreground mb-2">{dictionary.components.whoIsItFor.cards.globalWellbeing.title}</h4>
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whoIsItFor.cards.globalWellbeing.description}</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-card-foreground mb-2">{dictionary.components.whoIsItFor.cards.tailored.title}</h4>
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whoIsItFor.cards.tailored.description}</p>
          </div>
          
          <div className="text-center p-4 sm:p-6 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-card-foreground mb-2">{dictionary.components.whoIsItFor.cards.forEveryone.title}</h4>
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whoIsItFor.cards.forEveryone.description}</p>
          </div>
        </div>
      </div>

      {/* Mobile-optimized floating community elements */}
      <div className="absolute top-12 sm:top-16 md:top-20 left-8 sm:left-10 md:left-12 w-3 h-3 sm:w-4 sm:h-4 bg-[rgb(var(--color-primary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-32 right-10 sm:right-12 md:right-16 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[rgb(var(--color-secondary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-4 sm:right-6 md:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};