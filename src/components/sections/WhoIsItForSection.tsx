'use client';
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Heart, ArrowRight, Star, Target, Sparkles } from 'lucide-react';

export const WhoIsItForSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32 relative overflow-hidden">
      {/* Sophisticated background with natural colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-background))] via-[rgb(var(--color-surface))] to-[rgb(var(--color-background))]"></div>
      
      {/* Community-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Inclusive warmth */}
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse"></div>
        {/* Diverse support */}
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Community connection */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Users className="w-5 h-5 text-[rgb(var(--color-primary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.whoIsItFor.badge}</span>
          </div>

          {/* Main heading with gradient */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.whoIsItForSection.heading}
            </span>
          </h2>

          {/* Subtitle with community focus */}
          <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed mb-8">
            {dictionary.components.whoIsItFor.description}
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Heart className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.whoIsItFor.quickInfo.allAges}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Target className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.whoIsItFor.quickInfo.allNeeds}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.whoIsItFor.quickInfo.personalizedApproach}</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Testimonials Container */}
        <div className="relative mb-16">
          {/* Subtle background for testimonials */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/20 via-transparent to-card/20 rounded-3xl"></div>
          
          <div className="relative z-10 p-8">
            <AnimatedTestimonials 
              testimonials={dictionary.whoIsItForSection.testimonials} 
            />
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          {/* CTA container with glassmorphism */}
          <div className="inline-block bg-card/60 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-[rgb(var(--color-secondary))]/3 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Encouraging text above button */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {dictionary.components.whoIsItFor.findProfileTitle}
                </h3>
                <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-md mx-auto">
                  {dictionary.components.whoIsItFor.findProfileDescription}
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white hover:from-[rgb(var(--color-secondary))] hover:to-[rgb(var(--color-tertiary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-8 py-6 rounded-2xl text-lg font-semibold"
              >
                <Link href={`/${lang}/pour-qui`} className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>{dictionary.whoIsItForSection.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              {/* Additional encouragement */}
              <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-4 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                {dictionary.components.whoIsItFor.uniqueMessage}
              </p>
            </div>
          </div>
        </div>

        {/* Community stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-card-foreground mb-2">{dictionary.components.whoIsItFor.cards.globalWellbeing.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whoIsItFor.cards.globalWellbeing.description}</p>
          </div>
          
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-card-foreground mb-2">{dictionary.components.whoIsItFor.cards.tailored.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whoIsItFor.cards.tailored.description}</p>
          </div>
          
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-card-foreground mb-2">{dictionary.components.whoIsItFor.cards.forEveryone.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.whoIsItFor.cards.forEveryone.description}</p>
          </div>
        </div>
      </div>

      {/* Floating community elements */}
      <div className="absolute top-20 left-12 w-4 h-4 bg-[rgb(var(--color-primary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-[rgb(var(--color-secondary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-8 w-3 h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};