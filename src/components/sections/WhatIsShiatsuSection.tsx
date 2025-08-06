import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Leaf, Sparkles, ArrowRight, Circle, BookOpen, Heart } from 'lucide-react';

export const WhatIsShiatsuSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background with natural color palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))] via-[rgb(var(--color-background))] to-[rgb(var(--color-surface))]"></div>
      
      {/* Zen-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gentle wisdom flow */}
        <div className="absolute top-1/3 left-1/6 w-96 h-96 bg-[rgb(var(--color-tertiary))]/8 rounded-full blur-3xl animate-pulse"></div>
        {/* Traditional knowledge */}
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[rgb(var(--color-secondary))]/6 rounded-full blur-3xl animate-pulse delay-700"></div>
        {/* Harmonious energy */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgb(var(--color-primary))]/4 to-[rgb(var(--color-tertiary))]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Left Column: Text Content */}
          <div className="flex flex-col space-y-8">
            {/* Section badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full self-start shadow-lg hover:shadow-xl transition-all duration-300">
              <Leaf className="w-5 h-5 text-[rgb(var(--color-tertiary))]" />
              <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.whatIsShiatsu.badge}</span>
            </div>

            {/* Enhanced heading with zen elements */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[rgb(var(--color-tertiary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent">
                  {dictionary.whatIsShiatsuSection.heading}
                </span>
              </h2>
              
              {/* Zen circle decoration */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[rgb(var(--color-tertiary))] rounded-full animate-pulse"></div>
                <div className="w-12 h-px bg-gradient-to-r from-[rgb(var(--color-tertiary))] to-transparent"></div>
                <Circle className="w-6 h-6 text-[rgb(var(--color-secondary))]/60" />
                <div className="w-12 h-px bg-gradient-to-l from-[rgb(var(--color-primary))] to-transparent"></div>
                <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Enhanced paragraph */}
            <p className="text-lg md:text-xl leading-relaxed text-[rgb(var(--color-text-secondary))] max-w-2xl">
              {dictionary.whatIsShiatsuSection.paragraph}
            </p>

            {/* Shiatsu principles highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center">
                  <Circle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(var(--color-text))]">{dictionary.components.whatIsShiatsu.qualities.energeticBalance.title}</p>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whatIsShiatsu.qualities.energeticBalance.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(var(--color-text))]">{dictionary.components.whatIsShiatsu.qualities.holisticApproach.title}</p>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whatIsShiatsu.qualities.holisticApproach.description}</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] text-white hover:from-[rgb(var(--color-tertiary))] hover:to-[rgb(var(--color-secondary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-8 py-6 rounded-2xl text-lg font-semibold"
              >
                <Link href={`/${lang}/le-shiatsu`} className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  <span>{dictionary.whatIsShiatsuSection.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              {/* Secondary info */}
              <div className="flex items-center gap-2 text-[rgb(var(--color-text-secondary))] self-center sm:self-start">
                <Sparkles className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
                <span className="text-sm">{dictionary.components.whatIsShiatsu.tradition}</span>
              </div>
            </div>
          </div>

          {/* Enhanced Right Column: Image */}
          <div className="relative group order-first lg:order-last">
            {/* Zen-inspired decorative backgrounds */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/15 to-[rgb(var(--color-primary))]/10 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
            <div className="absolute -inset-3 bg-gradient-to-br from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/15 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-card/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02]">
              <Image
                src="/images/shiatsu-general.png"
                alt={dictionary.components.whatIsShiatsu.imageAlt}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
              
              {/* Gentle overlay with zen gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-tertiary))]/20 via-transparent to-transparent"></div>
              
              {/* Floating wisdom badge */}
              <div className="absolute top-6 left-6 bg-card/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-lg flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{dictionary.components.whatIsShiatsu.shiatsuMeaning.title}</p>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">{dictionary.components.whatIsShiatsu.shiatsuMeaning.description}</p>
                  </div>
                </div>
              </div>

              {/* Philosophy indicator */}
              <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Circle className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
                  <span className="text-sm font-medium text-card-foreground">{dictionary.components.whatIsShiatsu.vitalEnergy}</span>
                </div>
              </div>
            </div>

            {/* Floating zen elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[rgb(var(--color-primary))]/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[rgb(var(--color-tertiary))]/30 rounded-full animate-pulse delay-1000"></div>
          </div>

        </div>
      </div>

      {/* Additional zen elements */}
      <div className="absolute top-16 right-12 w-3 h-3 bg-[rgb(var(--color-secondary))]/40 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 left-8 w-4 h-4 bg-[rgb(var(--color-tertiary))]/30 rounded-full animate-pulse delay-300"></div>
    </section>
  );
};