import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n-config';
import Link from 'next/link';
import { CtaSection } from '@/components/sections/CtaSection';
import { PourQuiTabs } from '@/components/sections/PourQuiTabs'; 
import { Users, Heart, Target, ArrowDown } from 'lucide-react';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function PourQuiPage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Mobile-optimized background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Maracuja gold glow - smaller on mobile */}
        <div className="absolute top-1/4 right-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        {/* Terracotta warmth - adjusted for mobile */}
        <div className="absolute bottom-1/4 left-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        {/* Sage green subtlety - responsive sizing */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[500px] lg:w-[700px] h-80 sm:h-96 md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/3 to-[rgb(var(--color-primary))]/2 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      {/* 1. Mobile-Enhanced Page Header */}
      <section className="min-h-screen justify-center flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-32 relative bg-secondary/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-surface))]/40 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 text-center relative z-10">
          {/* Mobile-optimized hero badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/80 backdrop-blur-md rounded-full mb-6 sm:mb-8 hover:bg-card/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-secondary))]" />
            <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{dictionary.pages.pourQui.badge}</span>
          </div>
          
          {/* Mobile-responsive main title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 max-w-5xl mx-auto px-2">
            <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.pourQuiPage.title}
            </span>
          </h1>
          
          {/* Mobile-optimized subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            {dictionary.pourQuiPage.subtitle}
          </p>
          
          {/* Mobile-friendly visual separator */}
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] rounded-full mx-auto mb-6 sm:mb-8"></div>
          
          {/* Mobile scroll indicator */}
          <div className="inline-flex items-center gap-2 text-[rgb(var(--color-text-secondary))] animate-bounce">
            <span className="text-xs sm:text-sm font-medium">{dictionary.pages.pourQui.exploreBelow}</span>
            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
      </section>

      {/* 2. Mobile-Enhanced Introduction Section */}
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32 relative z-10">
        {/* Mobile-optimized introduction section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--color-tertiary))]/10 to-[rgb(var(--color-primary))]/10 backdrop-blur-sm px-3 sm:px-5 py-2 rounded-full text-[rgb(var(--color-tertiary))] font-semibold text-xs sm:text-sm mb-6 sm:mb-8 shadow-lg">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            {dictionary.pages.pourQui.personalizedProfiles}
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            {dictionary.pages.pourQui.findIdealSupport}
          </h2>
          <p className="text-base sm:text-lg text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed px-4">
            {dictionary.pages.pourQui.personalizedConsultationSection?.description || "Chaque personne est unique, et votre parcours de bien-être doit l'être aussi. Découvrez comment nos services s'adaptent à vos besoins spécifiques."}
          </p>
        </div>
      </main>

      {/* 3. Mobile-Optimized Tabs Section */}
      <section className="mb-16 sm:mb-20 md:mb-28 relative">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
          <div className="relative">
            {/* Subtle background for tabs section */}
            
            <div className="relative z-10 p-2 sm:p-4 lg:p-8">
              <PourQuiTabs lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mobile-Enhanced Additional Support Section */}
      <section className="mb-16 sm:mb-24 md:mb-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center">
            <div className="bg-card/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-[rgb(var(--color-secondary))]/3 rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">
                  {dictionary.pages.pourQui.notFindProfile}
                </h3>
                <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                  {dictionary.pages.pourQui.personalizedConsultationSection?.description || "Chaque situation est particulière. Contactez-moi pour un accompagnement personnalisé qui répond exactement à vos besoins et objectifs."}
                </p>
                
                {/* Mobile-stacked buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                    <Heart className="w-4 h-4" />
                    {dictionary.pages.pourQui.personalizedConsultation}
                  </Link>
                  <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center gap-2 bg-card/80 backdrop-blur-sm text-card-foreground px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-card/90 transition-all duration-300 shadow-lg text-sm sm:text-base w-full sm:w-auto">
                    <Users className="w-4 h-4" />
                    {dictionary.pages.pourQui.contactUs}
                  </Link>
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