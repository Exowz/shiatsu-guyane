// src/app/[lang]/infos-pratiques/page.tsx

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';
import { Dictionary } from '@/types/dictionary';
import { CtaSection } from '@/components/sections/CtaSection';
import { Check, Clock, MapPin, Shirt, Utensils, Info, ArrowRight, Navigation, Calendar, Heart } from 'lucide-react';

export default async function PracticalInfoPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.practicalInfoPage;

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.location.address)}`;

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Sophisticated background elements using natural palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gentle information flow */}
        <div className="absolute top-1/5 right-1/5 w-96 h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse"></div>
        {/* Practical warmth */}
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Helpful guidance */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-3xl"></div>
      </div>

      {/* 1. Enhanced Page Header */}
      <section className="min-h-screen justify-center flex flex-col items-center py-20 md:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-6 pt-32 pb-24 text-center relative z-10">
          {/* Practical info badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Info className="w-5 h-5 text-[rgb(var(--color-primary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.pages.practicalInfo.badge}</span>
          </div>
          
          {/* Main title with helpful gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-12">
            {t.subtitle}
          </p>
          
          {/* Quick navigation hints */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Calendar className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span>{dictionary.pages.practicalInfo.quickNav.flow}</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Heart className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
              <span>{dictionary.pages.practicalInfo.quickNav.recommendations}</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <MapPin className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
              <span>{dictionary.pages.practicalInfo.quickNav.location}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20 lg:py-32 space-y-24 relative z-10">

        {/* 2. Enhanced Session Flow Section */}
        <section>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-sm mb-8 shadow-lg">
              <Calendar className="w-4 h-4" />
              {dictionary.pages.practicalInfo.sessionFlow.badge}
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">{t.sessionFlow.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed">
              {dictionary.pages.practicalInfo.sessionFlow.description}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.sessionFlow.steps.map((step: { name: string; description: string }, index: number) => (
              <div 
                key={step.name} 
                className="group relative bg-card/70 backdrop-blur-md p-8 rounded-3xl hover:bg-card/90 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step number with gradient */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-lg group-hover:rotate-6 transition-transform duration-300 ${
                    index === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                    index === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                    'bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-2xl text-card-foreground mb-4 group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300">
                    {step.name}
                  </h3>
                  <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">{step.description}</p>
                </div>

                {/* Connection line to next step */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-[rgb(var(--color-primary))]/50 to-transparent"></div>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/3 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Enhanced Recommendations Section */}
        <section className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-start">
          {/* Left column - Enhanced introduction */}
          <div className="xl:col-span-2 xl:sticky xl:top-24">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-secondary))] font-semibold text-sm mb-6 shadow-lg">
              <Heart className="w-4 h-4" />
              {dictionary.pages.practicalInfo.recommendations.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              {t.recommendations.heading}
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed mb-10">
              {dictionary.pages.practicalInfo.recommendations.description}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-full"></div>
          </div>
          
          {/* Right column - Enhanced recommendation cards */}
          <div className="xl:col-span-3 space-y-6">
            {t.recommendations.points.map((point: { name: string; description: string }, index: number) => (
              <div 
                key={point.name} 
                className="group bg-card/70 backdrop-blur-md p-8 rounded-2xl hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  {/* Enhanced icon with themed colors */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform duration-300 ${
                    point.name.includes("Tenue") ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                    point.name.includes("Repas") ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                    'bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
                  }`}>
                    {point.name.includes("Tenue") && <Shirt className="w-7 h-7 text-white" />}
                    {point.name.includes("Repas") && <Utensils className="w-7 h-7 text-white" />}
                    {point.name.includes("Après") && <Clock className="w-7 h-7 text-white" />}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-card-foreground mb-3 group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300">
                      {point.name}
                    </h3>
                    <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">{point.description}</p>
                  </div>
                </div>

                {/* Subtle progress indicator */}
                <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Enhanced Location Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 rounded-3xl"></div>
          <div className="relative z-10 text-center p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-primary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-sm mb-8 shadow-lg">
              <Navigation className="w-4 h-4" />
              {dictionary.pages.practicalInfo.location.badge}
            </div>
            
            <h2 className="text-4xl font-bold text-secondary-foreground mb-8">{t.location.heading}</h2>
            
            {/* Enhanced address display */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[rgb(var(--color-text-secondary))] uppercase tracking-wide">{dictionary.pages.practicalInfo.location.address}</p>
                  <p className="font-semibold text-card-foreground">{t.location.address}</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA button */}
            <a 
              href={googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Navigation className="w-5 h-5" />
              <span>{t.location.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Additional location info */}
          </div>
        </section>

      </main>

      {/* 5. Enhanced Final Call to Action */}
      <div className="relative mt-24 bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-primary))]/3 via-transparent to-[rgb(var(--color-tertiary))]/3"></div>
        <div className="relative z-10">
          <CtaSection dictionary={dictionary} lang={lang} />
        </div>
      </div>
    </div>
  );
}