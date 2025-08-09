import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n-config';
import { CtaSection } from '@/components/sections/CtaSection';
import { Check, Sparkles, Heart, Leaf, Circle, Target, Star, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { ExpandableCardGrid } from '@/components/ui/expandable-card-grid';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function ShiatsuPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  const t = dictionary.shiatsuPage;

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Sophisticated background elements using natural palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sage green tranquility */}
        <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-[rgb(var(--color-tertiary))]/8 rounded-full blur-3xl animate-pulse"></div>
        {/* Maracuja warmth */}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse delay-700"></div>
        {/* Terracotta grounding */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[rgb(var(--color-secondary))]/4 to-[rgb(var(--color-tertiary))]/3 rounded-full blur-3xl"></div>
      </div>

      {/* 1. Enhanced Page Header */}
      <section className="min-h-screen justify-center flex flex-col items-center py-20 md:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-6 pt-32 pb-24 text-center relative z-10">
          {/* Hero badge with zen theme */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-md rounded-full mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Leaf className="w-5 h-5 text-[rgb(var(--color-tertiary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.pages.leShiatsu.badge}</span>
          </div>
          
          {/* Main title with elegant gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-tertiary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-12">
            {t.subtitle}
          </p>
          
          {/* Visual harmony indicator */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-[rgb(var(--color-tertiary))] rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))]"></div>
            <Circle className="w-6 h-6 text-[rgb(var(--color-secondary))]" />
            <div className="w-16 h-px bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))]"></div>
            <div className="w-2 h-2 bg-[rgb(var(--color-primary))] rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20 lg:py-32 space-y-24 relative z-10">

        {/* Enhanced Définition et Histoire Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with sophisticated styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/20 to-[rgb(var(--color-secondary))]/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
              <Image
                src="/images/shiatsu-general.png" 
                alt={dictionary.pages.leShiatsu.imageAlt}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-tertiary))]/20 to-transparent"></div>
            </div>
          </div>

          {/* Content with enhanced styling */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-4 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-sm shadow-lg">
              <BookOpen className="w-4 h-4" />
              {dictionary.pages.leShiatsu.foundations}
            </div>

            <h2 className="text-4xl font-bold text-foreground">{t.general.definition.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.definition.p1}</p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                {t.general.history.heading}
              </h3>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.history.p1}</p>
            </div>
          </div>
        </section>

        {/* Enhanced Principes et Objectifs Section */}
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-secondary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-sm mb-8 shadow-lg">
              <Target className="w-4 h-4" />
              {dictionary.pages.leShiatsu.philosophyPractice}
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">{t.general.principles.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-4xl mx-auto">{t.general.principles.p1}</p>
          </div>

          {/* Objectives with enhanced design */}
          <div className="bg-card/60 backdrop-blur-md rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/5 to-[rgb(var(--color-primary))]/3 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-card-foreground text-center mb-10 flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-secondary))] rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                {t.general.objectives.heading}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.general.objectives.points.map((point, index) => (
                  <div 
                    key={point} 
                    className="flex items-start gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      index % 3 === 0 ? 'bg-[rgb(var(--color-tertiary))]' :
                      index % 3 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                      'bg-[rgb(var(--color-primary))]'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-card-foreground leading-relaxed group-hover:text-[rgb(var(--color-tertiary))] transition-colors duration-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Techniques Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 rounded-3xl"></div>
          <div className="relative z-10 text-center p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-secondary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-secondary))] font-semibold text-sm mb-8 shadow-lg">
              <Sparkles className="w-4 h-4" />
              {dictionary.pages.leShiatsu.methodsTechniques}
            </div>
            
            <h2 className="text-4xl font-bold mb-8 text-secondary-foreground">{t.general.techniques.heading}</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.techniques.p1}</p>
              <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">{t.general.techniques.p2}</p>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <div className="w-3 h-3 bg-[rgb(var(--color-tertiary))] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[rgb(var(--color-secondary))] rounded-full animate-pulse delay-300"></div>
              <div className="w-4 h-4 bg-[rgb(var(--color-primary))] rounded-full animate-pulse delay-700"></div>
              <div className="w-2 h-2 bg-[rgb(var(--color-secondary))] rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-[rgb(var(--color-tertiary))] rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Schools Section */}
        <section className="relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))]/10 to-[rgb(var(--color-tertiary))]/10 backdrop-blur-sm px-5 py-2 rounded-full text-[rgb(var(--color-primary))] font-semibold text-sm mb-8 shadow-lg">
              <BookOpen className="w-4 h-4" />
              {dictionary.pages.leShiatsu.schoolsTraditions}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">{t.schools.heading}</h2>
            <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed">
              {dictionary.pages.leShiatsu.schoolsDescription}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-full mx-auto mt-8"></div>
          </div>
          
          {/* Enhanced card grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/20 to-transparent rounded-3xl"></div>
            <div className="relative z-10 p-8 lg:p-12">
              <ExpandableCardGrid cards={t.schools.items} />
            </div>
          </div>
        </section>

      </main>

      {/* Enhanced Final Call to Action */}
      <div className="relative mt-24 bg-gradient-to-br from-secondary/20 via-[rgb(var(--color-surface))]/30 to-secondary/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/3 via-transparent to-[rgb(var(--color-primary))]/3"></div>
        <div className="relative z-10">
          <CtaSection dictionary={dictionary} lang={lang} />
        </div>
      </div>
    </div>
  );
}