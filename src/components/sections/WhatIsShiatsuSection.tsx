import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Leaf, Sparkles, ArrowRight, Circle, BookOpen, Heart } from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';

export const WhatIsShiatsuSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: string }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle background with natural color palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))] via-[rgb(var(--color-background))] to-[rgb(var(--color-surface))]"></div>
      
      {/* Mobile-optimized Zen-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gentle wisdom flow - responsive sizing */}
        <div className="absolute top-1/3 left-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-tertiary))]/8 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        {/* Traditional knowledge - mobile-optimized */}
        <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-700"></div>
        {/* Harmonious energy - scaled for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-96 lg:w-[600px] h-72 sm:h-80 md:h-96 lg:h-[600px] bg-gradient-to-r from-[rgb(var(--color-primary))]/4 to-[rgb(var(--color-tertiary))]/3 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* Mobile-Enhanced Left Column: Text Content */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            {/* Mobile-optimized section badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/70 backdrop-blur-md rounded-full self-start shadow-lg hover:shadow-xl transition-all duration-300">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-tertiary))]" />
              <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.whatIsShiatsu.badge}</span>
            </div>

            {/* Mobile-enhanced heading with zen elements */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[rgb(var(--color-tertiary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent">
                  {dictionary.whatIsShiatsuSection.heading}
                </span>
              </h2>
              
              {/* Mobile-optimized Zen circle decoration */}
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(var(--color-tertiary))] rounded-full animate-pulse"></div>
                <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-[rgb(var(--color-tertiary))] to-transparent"></div>
                <Circle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[rgb(var(--color-secondary))]/60" />
                <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-[rgb(var(--color-primary))] to-transparent"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(var(--color-primary))] rounded-full animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Mobile-enhanced paragraph */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[rgb(var(--color-text-secondary))] max-w-2xl">
              {dictionary.whatIsShiatsuSection.paragraph}
            </p>

            {/* Mobile-stacked Shiatsu principles highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-[rgb(var(--color-text))]">{dictionary.components.whatIsShiatsu.qualities.energeticBalance.title}</p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whatIsShiatsu.qualities.energeticBalance.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-[rgb(var(--color-text))]">{dictionary.components.whatIsShiatsu.qualities.holisticApproach.title}</p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whatIsShiatsu.qualities.holisticApproach.description}</p>
                </div>
              </div>
            </div>

            {/* Mobile-enhanced CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] text-white hover:from-[rgb(var(--color-tertiary))] hover:to-[rgb(var(--color-secondary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <Link href={`/${lang}/le-shiatsu`} className="flex items-center justify-center gap-2 sm:gap-3">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{dictionary.whatIsShiatsuSection.cta}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              {/* Mobile-optimized Secondary info */}
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[rgb(var(--color-text-secondary))] self-center sm:self-start">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-tertiary))] flex-shrink-0" />
                <span className="text-xs sm:text-sm">{dictionary.components.whatIsShiatsu.tradition}</span>
              </div>
            </div>
          </div>

          {/* Mobile-Enhanced Right Column: Image - FIXED ORDER */}
          <div className="relative group">
            {/* Mobile-scaled Zen-inspired decorative backgrounds */}
            <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/15 to-[rgb(var(--color-primary))]/10 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
            <div className="absolute -inset-1.5 sm:-inset-2 md:-inset-3 bg-gradient-to-br from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/15 rounded-2xl sm:rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
            
            {/* Mobile-optimized main image container */}
            <div className="relative bg-card/70 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02]">
              <Image
                src="/images/shiatsu-general.png"
                alt={dictionary.components.whatIsShiatsu.imageAlt}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
              
              {/* Gentle overlay with zen gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-tertiary))]/20 via-transparent to-transparent"></div>
              
              {/* Mobile-optimized floating wisdom badge */}
              <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 bg-card/90 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-md sm:rounded-lg flex items-center justify-center">
                    <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-card-foreground">{dictionary.components.whatIsShiatsu.shiatsuMeaning.title}</p>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">{dictionary.components.whatIsShiatsu.shiatsuMeaning.description}</p>
                  </div>
                </div>
              </div>

              {/* Mobile-optimized Philosophy indicator */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 bg-card/90 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Circle className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-secondary))]" />
                  <span className="text-xs sm:text-sm font-medium text-card-foreground">{dictionary.components.whatIsShiatsu.vitalEnergy}</span>
                </div>
              </div>
            </div>

            {/* Mobile-optimized floating zen elements */}
            <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[rgb(var(--color-primary))]/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -left-3 sm:-left-4 md:-left-6 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[rgb(var(--color-tertiary))]/30 rounded-full animate-pulse delay-1000"></div>
          </div>

        </div>
      </div>

      {/* Mobile-optimized additional zen elements */}
      <div className="absolute top-10 sm:top-12 md:top-16 right-8 sm:right-10 md:right-12 w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(var(--color-secondary))]/40 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-4 sm:left-6 md:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-[rgb(var(--color-tertiary))]/30 rounded-full animate-pulse delay-300"></div>
    </section>
  );
};