'use client'; 

import { Baby, Bone, HeartPulse, ShieldCheck, Waves, Wind, Sparkles, ArrowRight, Heart, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HoverEffect } from '../ui/card-hover-effect';

export const BenefitsSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  
  // Enhanced icons with varied natural colors
  const icons = [
    <HeartPulse key="1" className="w-10 h-10 text-[rgb(var(--color-secondary))]" />,
    <Bone key="2" className="w-10 h-10 text-[rgb(var(--color-primary))]" />,
    <Wind key="3" className="w-10 h-10 text-[rgb(var(--color-tertiary))]" />,
    <Baby key="4" className="w-10 h-10 text-[rgb(var(--color-secondary))]" />,
    <Waves key="5" className="w-10 h-10 text-[rgb(var(--color-primary))]" />,
    <ShieldCheck key="6" className="w-10 h-10 text-[rgb(var(--color-tertiary))]" />,
  ];

  const items = dictionary.benefitsSection.cards.map((card: any, index: number) => ({
    title: card.title,
    description: card.description,
    link: "#",
    icon: icons[index],
  }));

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32 relative overflow-hidden">
      {/* Sophisticated background with natural gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))] via-[rgb(var(--color-background))] to-[rgb(var(--color-surface))]"></div>
      
      {/* Benefits-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wellness energy */}
        <div className="absolute top-1/5 left-1/6 w-96 h-96 bg-[rgb(var(--color-primary))]/8 rounded-full blur-3xl animate-pulse"></div>
        {/* Healing flow */}
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[rgb(var(--color-secondary))]/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Balance and harmony */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          {/* Section badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Heart className="w-5 h-5 text-[rgb(var(--color-secondary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.benefits.badge}</span>
          </div>

          {/* Main heading with gradient */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.benefitsSection.heading}
            </span>
          </h2>

          {/* Subtitle with benefits focus */}
          <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-8">
            {dictionary.components.benefits.description}
          </p>

          {/* Wellness pillars */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <HeartPulse className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.benefits.quickInfo.physicalWellbeing}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Waves className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.benefits.quickInfo.emotionalBalance}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Wind className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.benefits.quickInfo.vitalEnergy}</span>
            </div>
          </div>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="relative mb-20">
          {/* Subtle background for benefits cards */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/10 via-transparent to-card/10 rounded-3xl"></div>
          
          <div className="relative z-10 p-8">
            <HoverEffect items={items} />
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          {/* CTA container with glassmorphism */}
          <div className="inline-block bg-card/60 backdrop-blur-md rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))]/5 via-[rgb(var(--color-primary))]/3 to-[rgb(var(--color-tertiary))]/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Encouraging text above button */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                  {dictionary.components.benefits.ctaTitle}
                </h3>
                <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
                  {dictionary.components.benefits.ctaDescription}
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white hover:from-[rgb(var(--color-secondary))] hover:to-[rgb(var(--color-tertiary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-10 py-6 rounded-2xl text-lg font-semibold"
              >
                <Link href={`/${lang}/le-shiatsu`} className="flex items-center gap-3">
                  <Wind className="w-5 h-5" />
                  <span>{dictionary.benefitsSection.cta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              {/* Additional encouragement */}
              <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-6 flex items-center justify-center gap-2">
                <Star className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                {dictionary.components.benefits.traditionMessage}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits summary stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-card-foreground mb-2">{dictionary.components.benefits.cards.vitality.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.vitality.description}</p>
          </div>
          
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Bone className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-card-foreground mb-2">{dictionary.components.benefits.cards.relief.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.relief.description}</p>
          </div>
          
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-card-foreground mb-2">{dictionary.components.benefits.cards.balance.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.balance.description}</p>
          </div>
          
          <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl mx-auto mb-4 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-card-foreground mb-2">{dictionary.components.benefits.cards.prevention.title}</h4>
            <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.benefits.cards.prevention.description}</p>
          </div>
        </div>
      </div>

      {/* Floating wellness elements */}
      <div className="absolute top-16 right-12 w-4 h-4 bg-[rgb(var(--color-secondary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-[rgb(var(--color-primary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 left-8 w-3 h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};