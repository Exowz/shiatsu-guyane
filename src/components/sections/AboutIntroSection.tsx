import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Star, ArrowRight, Award, Sparkles } from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';

export const AboutIntroSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: string }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Mobile-optimized background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Warm personal connection - scaled for mobile */}
        <div className="absolute top-1/4 right-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        {/* Professional warmth - responsive sizing */}
        <div className="absolute bottom-1/4 left-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        {/* Gentle expertise - mobile-optimized */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[500px] lg:w-[700px] h-80 sm:h-96 md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* Mobile-Enhanced Image Section */}
          <div className="relative group order-2 lg:order-1">
            {/* Mobile-scaled decorative background elements */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-secondary))]/10 rounded-2xl sm:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/15 to-[rgb(var(--color-primary))]/10 rounded-xl sm:rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>
            
            {/* Mobile-optimized main image container */}
            <div className="relative bg-card/70 backdrop-blur-md rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02]">
              <Image
                src="/images/practitioner-photo.jpg"
                alt={dictionary.components.aboutIntro.imageAlt}
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-tertiary))]/10 via-transparent to-transparent"></div>
              
              {/* Mobile-optimized professional badge */}
              <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-card/90 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))]" />
                  <span className="text-xs sm:text-sm font-semibold text-card-foreground">{dictionary.components.aboutIntro.certifiedBadge}</span>
                </div>
              </div>

              {/* Mobile-optimized experience indicator */}
              <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 bg-card/90 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-card-foreground">{dictionary.components.aboutIntro.experience.years}</p>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">{dictionary.components.aboutIntro.experience.label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-Enhanced Content Section */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            {/* Mobile-optimized section badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/70 backdrop-blur-md rounded-full mb-6 sm:mb-8 self-start shadow-lg hover:shadow-xl transition-all duration-300">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-secondary))]" />
              <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.aboutIntro.badge}</span>
            </div>

            {/* Mobile-responsive main heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
                {dictionary.aboutIntro.heading}
              </span>
            </h2>

            {/* Mobile-optimized paragraph */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10 text-[rgb(var(--color-text-secondary))] max-w-2xl">
              {dictionary.aboutIntro.paragraph}
            </p>

            {/* Mobile-stacked trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-[rgb(var(--color-text))]">{dictionary.components.aboutIntro.qualities.personalizedApproach.title}</p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.aboutIntro.qualities.personalizedApproach.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-[rgb(var(--color-text))]">{dictionary.components.aboutIntro.qualities.compassionateListening.title}</p>
                  <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.aboutIntro.qualities.compassionateListening.description}</p>
                </div>
              </div>
            </div>

            {/* Mobile-optimized CTA Button */}
            <Button 
              asChild 
              className="self-start group bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white hover:from-[rgb(var(--color-secondary))] hover:to-[rgb(var(--color-tertiary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <Link href={`/${lang}/about`} className="flex items-center justify-center gap-2 sm:gap-3">
                <span>{dictionary.aboutIntro.cta}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            {/* Mobile-optimized additional call-to-action */}
            <p className="text-xs sm:text-sm text-[rgb(var(--color-text-secondary))] mt-4 sm:mt-6 flex items-center gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))] flex-shrink-0" />
              <span>{dictionary.components.aboutIntro.additionalCta}</span>
            </p>
          </div>

        </div>
      </div>

      {/* Mobile-optimized floating elements */}
      <div className="absolute top-12 sm:top-16 md:top-20 left-6 sm:left-8 md:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-[rgb(var(--color-primary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-32 right-8 sm:right-12 md:right-16 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[rgb(var(--color-secondary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-4 sm:right-6 md:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};