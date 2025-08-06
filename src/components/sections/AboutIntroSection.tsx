import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Star, ArrowRight, Award, Sparkles } from 'lucide-react';

export const AboutIntroSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32 relative overflow-hidden">
      {/* Sophisticated background elements using natural palette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Warm personal connection */}
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse"></div>
        {/* Professional warmth */}
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Gentle expertise */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Image Section */}
          <div className="relative group order-2 lg:order-1">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(var(--color-primary))]/20 to-[rgb(var(--color-secondary))]/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-[rgb(var(--color-tertiary))]/15 to-[rgb(var(--color-primary))]/10 rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-card/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform group-hover:scale-[1.02]">
              <Image
                src="/images/practitioner-photo.jpg"
                alt={dictionary.components.aboutIntro.imageAlt}
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-tertiary))]/10 via-transparent to-transparent"></div>
              
              {/* Professional badge */}
              <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[rgb(var(--color-primary))]" />
                  <span className="text-sm font-semibold text-card-foreground">{dictionary.components.aboutIntro.certifiedBadge}</span>
                </div>
              </div>

              {/* Experience indicator */}
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{dictionary.components.aboutIntro.experience.years}</p>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">{dictionary.components.aboutIntro.experience.label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            {/* Section badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full mb-8 self-start shadow-lg hover:shadow-xl transition-all duration-300">
              <Heart className="w-5 h-5 text-[rgb(var(--color-secondary))]" />
              <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.aboutIntro.badge}</span>
            </div>

            {/* Main heading with gradient */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
                {dictionary.aboutIntro.heading}
              </span>
            </h2>

            {/* Enhanced paragraph */}
            <p className="text-lg md:text-xl leading-relaxed mb-10 text-[rgb(var(--color-text-secondary))] max-w-2xl">
              {dictionary.aboutIntro.paragraph}
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(var(--color-text))]">{dictionary.components.aboutIntro.qualities.personalizedApproach.title}</p>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.aboutIntro.qualities.personalizedApproach.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[rgb(var(--color-text))]">{dictionary.components.aboutIntro.qualities.compassionateListening.title}</p>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))]">{dictionary.components.aboutIntro.qualities.compassionateListening.description}</p>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <Button 
              asChild 
              className="self-start group bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white hover:from-[rgb(var(--color-secondary))] hover:to-[rgb(var(--color-tertiary))] shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 px-8 py-6 rounded-2xl text-lg font-semibold"
            >
              <Link href={`/${lang}/about`} className="flex items-center gap-3">
                <span>{dictionary.aboutIntro.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>

            {/* Additional call-to-action */}
            <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-6 flex items-center gap-2">
              <Star className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              {dictionary.components.aboutIntro.additionalCta}
            </p>
          </div>

        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[rgb(var(--color-primary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-[rgb(var(--color-secondary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-8 w-3 h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};