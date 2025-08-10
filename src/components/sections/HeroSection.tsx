import { Button } from '@/components/ui/button';
import { HeroActions } from '../features/hero/HeroActions';
import { ArrowDown } from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';
import type { Locale } from '@/lib/i18n-config';

export const HeroSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: Locale }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Mobile-optimized Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/images/hero-poster.jpg" // Add poster for better mobile loading
      >
        <source src="/videos/Shiatsu_Studio_Welcome_Video.mp4" type="video/mp4" />
        {dictionary.components.hero.videoNotSupported}
      </video>

      {/* Enhanced gradient overlay for better mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 z-10"></div>
      
      {/* Mobile-optimized ambient background elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-primary))]/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/8 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Mobile-enhanced content container */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Mobile-optimized hero badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 shadow-xl sm:shadow-2xl border border-white/20">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(var(--color-primary))] rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">
            {dictionary.components.hero.wellbeingBadge}
          </span>
        </div>

        {/* Mobile-responsive title with better scaling */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 text-white px-2">
          <span className="bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
            {dictionary.homepage.heroTitle}
          </span>
        </h1>

        {/* Mobile-optimized subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 text-white/90 drop-shadow-lg px-4">
          {dictionary.homepage.heroSubtitle}
        </p>

        {/* Mobile-enhanced CTA button */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-0">
          <Button 
            asChild 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] hover:from-[rgb(var(--color-secondary))] hover:to-[rgb(var(--color-tertiary))] text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105 border border-white/20 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <a 
              href="https://www.resalib.fr/praticien/64776-nathalie-jean-praticien-shiatsu-remire-montjoly#newrdvmodal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <span className="relative z-10 text-sm sm:text-base">{dictionary.ctaSection.button}</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </Button>
        </div>

        {/* Mobile-stacked professional credentials */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 text-xs sm:text-sm px-4">
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(var(--color-primary))] rounded-full flex-shrink-0"></div>
            <span className="text-white/80 font-medium">{dictionary.components.hero.credentials.certifiedInstructor}</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(var(--color-secondary))] rounded-full flex-shrink-0"></div>
            <span className="text-white/80 font-medium">{dictionary.components.hero.credentials.experience}</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[rgb(var(--color-tertiary))] rounded-full flex-shrink-0"></div>
            <span className="text-white/80 font-medium">Sophrologue RNCP</span>
          </div>
        </div>
      </div>

      {/* Desktop-only side scroll indicators */}
      <div className="absolute top-1/2 left-4 sm:left-6 lg:left-8 xl:left-12 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <span 
          className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold" 
          style={{ writingMode: 'vertical-lr' }}
        >
          {dictionary.homepage.scrollDown}
        </span>
        <div className="relative">
          <div className="h-20 sm:h-24 w-px bg-gradient-to-b from-[rgb(var(--color-primary))]/60 to-transparent"></div>
          <div className="absolute top-0 w-px h-5 sm:h-6 bg-[rgb(var(--color-primary))] animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 sm:right-6 lg:right-8 xl:right-12 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <span 
          className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold" 
          style={{ writingMode: 'vertical-lr' }}
        >
          {dictionary.components.hero.discover}
        </span>
        <div className="relative">
          <div className="h-20 sm:h-24 w-px bg-gradient-to-b from-[rgb(var(--color-secondary))]/60 to-transparent"></div>
          <div className="absolute top-0 w-px h-5 sm:h-6 bg-[rgb(var(--color-secondary))] animate-pulse"></div>
        </div>
      </div>

      {/* Mobile-optimized scroll indicator - positioned lower since no HeroActions on mobile */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-30 animate-bounce">
        <span className="text-xs text-white/70 font-medium tracking-wide">
          {dictionary.components.hero.discover}
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
        <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-white/60" />
      </div>

      {/* Desktop-only Hero Actions */}
      <div className="absolute bottom-0 left-0 right-0 z-40 hidden lg:block">
        <HeroActions lang={lang} dictionary={dictionary} />
      </div>

      {/* Mobile-specific floating elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <div className="absolute top-16 right-8 w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full animate-pulse lg:hidden"></div>
        <div className="absolute bottom-40 left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/25 rounded-full animate-pulse delay-500 lg:hidden"></div>
        <div className="absolute top-1/3 left-4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/30 rounded-full animate-pulse delay-1000 lg:hidden"></div>
      </div>

      {/* Mobile-specific gradient vignette for better focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 z-15 sm:hidden"></div>
    </section>
  );
};