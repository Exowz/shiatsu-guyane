// src/app/[lang]/services-pricing/page.tsx

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';
import { Dictionary } from '@/types/dictionary';
import { CtaSection } from '@/components/sections/CtaSection';
import { Clock, Euro, Sparkles, Star, ArrowRight, Check, Award, Users, Target } from 'lucide-react';

export default async function PricingPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.pricingPage;

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Sophisticated background elements using your natural palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Maracuja gold glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--color-primary))]/8 rounded-full blur-3xl animate-pulse"></div>
        {/* Terracotta warmth */}
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-[rgb(var(--color-secondary))]/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Sage green subtlety */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-3xl"></div>
      </div>

      {/* 1. Elegant Page Header */}
      <section className="min-h-screen justify-center flex flex-col items-center py-20 md:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/50 to-transparent"></div>
        <div className="container mx-auto px-6 pt-32 pb-24 text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Award className="w-5 h-5 text-[rgb(var(--color-primary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.pages.servicesPricing.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-12">{t.subtitle}</p>
          
          {/* Enhanced trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Check className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.pages.servicesPricing.quickInfo.flexibleScheduling}</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Check className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.pages.servicesPricing.quickInfo.expertGuidance}</span>
            </div>
            <div className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Check className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.pages.servicesPricing.quickInfo.personalizedApproach}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 relative z-10">

        {/* 2. Individual Sessions - Enhanced with Natural Colors */}
        <section className="py-24 lg:py-32">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-sm mb-6 shadow-lg">
              <Users className="w-4 h-4" />
              {dictionary.pages.servicesPricing.individualServices}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.individualSessions.heading}
            </h2>
            <p className="whitespace-pre-line text-lg text-[rgb(var(--color-text-secondary))] mb-4">{t.priceRange}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {t.individualSessions.sessions.map((session: { name: string; description: string }, index: number) => (
              <div 
                key={session.name} 
                className="group relative bg-card/70 backdrop-blur-md p-8 rounded-2xl hover:bg-card/90 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[rgb(var(--color-primary))]/10 shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 via-[rgb(var(--color-secondary))]/3 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center group-hover:rotate-3 transition-transform duration-300 shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                    index === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                    'bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
                  }`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-2xl text-card-foreground mb-4 group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300">
                    {session.name}
                  </h3>
                  <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed mb-6">{session.description}</p>
                  
                  <div className="pt-4">
                    <div className="flex items-center text-[rgb(var(--color-primary))] font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                      <span className="text-sm">{dictionary.pages.servicesPricing.learnMore}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Packages - Sophisticated Two-Column Layout */}
        <section className="py-24 lg:py-32">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-20 items-start">
            {/* Left column - Enhanced with natural styling */}
            <div className="xl:col-span-2 xl:sticky xl:top-24">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-secondary))] font-semibold text-sm mb-6 shadow-lg">
                <Target className="w-4 h-4" />
                {dictionary.pages.servicesPricing.valuePackages}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                {t.packages.heading}
              </h2>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed mb-10">
                {t.packages.description}
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-full mb-8"></div>
              
              {/* Additional benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full"></div>
                  <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.pages.servicesPricing.packageBenefits.flexibleScheduling}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(var(--color-secondary))] rounded-full"></div>
                  <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.pages.servicesPricing.packageBenefits.priorityBooking}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[rgb(var(--color-tertiary))] rounded-full"></div>
                  <span className="text-[rgb(var(--color-text-secondary))]">{dictionary.pages.servicesPricing.packageBenefits.transferable}</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Package cards */}
            <div className="xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {t.packages.items.map((item: { name: string; price: string; description: string }, index: number) => (
                <div 
                  key={item.name} 
                  className={`group relative bg-card/70 backdrop-blur-md p-8 rounded-3xl transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl shadow-lg ${
                    index === 1 
                      ? 'ring-2 ring-[rgb(var(--color-primary))]/20 hover:ring-[rgb(var(--color-primary))]/30' 
                      : 'hover:shadow-[rgb(var(--color-secondary))]/10'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Popular badge */}
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg">
                        {dictionary.pages.servicesPricing.mostPopular}
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    <h3 className="font-bold text-2xl text-card-foreground mb-3">{item.name}</h3>
                    <div className="flex items-baseline gap-3 mb-6">
                      <p className={`text-4xl font-bold ${
                        index === 1 ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-secondary))]'
                      }`}>
                        {item.price}
                      </p>
                      {index === 1 && (
                        <span className="text-sm text-[rgb(var(--color-text-secondary))] bg-[rgb(var(--color-primary))]/10 px-2 py-1 rounded-full">
                          {dictionary.pages.servicesPricing.bestValue}
                        </span>
                      )}
                    </div>
                    <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed mb-8">{item.description}</p>
                    
                    <div className="pt-6">
                      <div className={`flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer ${
                        index === 1 ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-secondary))]'
                      }`}>
                        <span className="text-sm">{dictionary.pages.servicesPricing.getStarted}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    index === 1 
                      ? 'bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-[rgb(var(--color-secondary))]/3' 
                      : 'bg-gradient-to-br from-[rgb(var(--color-secondary))]/4 to-[rgb(var(--color-tertiary))]/3'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Corporate Services - Premium Natural Design */}
        <section className="py-24 lg:py-32">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-primary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-sm mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              {dictionary.pages.servicesPricing.corporateSolutions}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              {t.otherServices.heading}
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed">{t.otherServices.intro}</p>
            <div className="w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-tertiary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full mx-auto mt-8"></div>
          </div>
          
          <div className="space-y-20 max-w-7xl mx-auto">
            {t.otherServices.workshops.map((workshop: { title: string; price: string; duration: string; items: Array<{ name: string; description: string }> }, workshopIndex: number) => (
              <div 
                key={workshop.title} 
                className="relative bg-secondary/20 backdrop-blur-xl rounded-3xl overflow-hidden hover:bg-secondary/30 transition-all duration-700 group shadow-xl hover:shadow-2xl"
                style={{ animationDelay: `${workshopIndex * 250}ms` }}
              >
                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/30 via-transparent to-[rgb(var(--color-tertiary))]/5"></div>
                
                <div className="relative z-10 p-12 lg:p-16">
                  {/* Workshop header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 pb-8">
                    <div className="mb-8 lg:mb-0">
                      <h3 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-3">{workshop.title}</h3>
                      <p className="text-[rgb(var(--color-text-secondary))] text-lg">{dictionary.pages.servicesPricing.workshops.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                        <div className="p-2 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg">
                          <Euro className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-[rgb(var(--color-text-secondary))] uppercase tracking-wide">{dictionary.pages.servicesPricing.workshops.priceLabel}</p>
                          <p className="font-bold text-card-foreground text-lg">{workshop.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                        <div className="p-2 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-lg">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-[rgb(var(--color-text-secondary))] uppercase tracking-wide">{dictionary.pages.servicesPricing.workshops.durationLabel}</p>
                          <p className="font-bold text-card-foreground text-lg">{workshop.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Workshop items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {workshop.items.map((item: { name: string; description: string }, itemIndex: number) => (
                      <div 
                        key={item.name} 
                        className="bg-card/80 backdrop-blur-sm border border-border/40 p-8 rounded-2xl hover:bg-card/90 hover:border-[rgb(var(--color-primary))]/30 transition-all duration-300 group/item shadow-lg hover:shadow-xl"
                        style={{ animationDelay: `${(workshopIndex * 3 + itemIndex) * 100}ms` }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                            itemIndex % 3 === 0 ? 'bg-[rgb(var(--color-primary))]' :
                            itemIndex % 3 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                            'bg-[rgb(var(--color-tertiary))]'
                          }`}></div>
                          <h4 className="font-bold text-card-foreground text-lg leading-tight group-hover/item:text-[rgb(var(--color-primary))] transition-colors duration-300">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed pl-7">{item.description}</p>
                        
                        {/* Subtle progress line */}
                        <div className="mt-6 pl-7">
                          <div className={`w-0 h-0.5 rounded-full transition-all duration-500 group-hover/item:w-full ${
                            itemIndex % 3 === 0 ? 'bg-[rgb(var(--color-primary))]' :
                            itemIndex % 3 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                            'bg-[rgb(var(--color-tertiary))]'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 5. Elegant CTA Section */}
      <div className="relative mt-24 bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-primary))]/3 via-transparent to-[rgb(var(--color-tertiary))]/3"></div>
        <div className="relative z-10">
          <CtaSection dictionary={dictionary} lang={lang} />
        </div>
      </div>
    </div>
  );
}