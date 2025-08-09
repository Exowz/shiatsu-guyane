import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import type { Dictionary } from '@/types/dictionary';
import type { Locale } from '@/lib/i18n-config';
import { Calendar, Heart, ArrowRight, Star, Sparkles, CheckCircle } from 'lucide-react';

export const CtaSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: Locale }) => {
  // Enhanced typewriter effect with natural color styling
  const headingText = dictionary?.ctaSection?.heading ?? 'Ready to start your wellness journey?';
  const words = headingText.split(' ').map((word, index) => ({
    text: word,
    className: 'font-bold',
    style: { 
      color: index % 3 === 0 ? 'rgb(var(--color-primary))' : 
             index % 3 === 1 ? 'rgb(var(--color-secondary))' : 
             'rgb(var(--color-tertiary))'
    },
  }));

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))]"></div>
      
      {/* Responsive background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mobile-optimized background effects */}
        <div className="absolute top-1/4 left-1/6 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-white/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-white/8 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[600px] h-80 sm:h-96 md:h-[600px] bg-white/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
        
        {/* Mobile-optimized introduction badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-md rounded-full mb-8 sm:mb-12 shadow-lg hover:shadow-xl transition-all duration-300">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">{dictionary.ctaSection.badge}</span>
        </div>

        {/* Mobile-responsive typewriter heading */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl w-full max-w-4xl">
            <TypewriterEffectSmooth
              words={words}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
              cursorClassName="bg-white"
            />
          </div>
        </div>

        {/* Mobile-optimized subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed mb-8 sm:mb-12 font-medium px-2">
          {dictionary?.ctaSection?.subheading ?? 'Book your personalized session and discover the benefits of our therapeutic approach.'}
        </p>

        {/* Mobile-responsive trust building elements */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-2">
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span className="text-white font-medium text-sm sm:text-base">{dictionary.ctaSection.trustElements.personalizedConsultation}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span className="text-white font-medium text-sm sm:text-base">{dictionary.ctaSection.trustElements.certifiedPractitioner}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
            <span className="text-white font-medium text-sm sm:text-base">{dictionary.ctaSection.trustElements.kindApproach}</span>
          </div>
        </div>

        {/* Mobile-optimized CTA button container */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-2xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{dictionary.ctaSection.bookingSection.title}</h3>
            </div>
            
            <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2">
              {dictionary.ctaSection.bookingSection.description}
            </p>

            {/* Mobile-optimized Primary CTA Button */}
            <Button 
              asChild 
              size="lg" 
              className="group bg-white text-[rgb(var(--color-secondary))] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold mb-4 sm:mb-6 w-full sm:w-auto"
            >
              <a 
                href="https://www.resalib.fr/praticien/64776-nathalie-jean-praticien-shiatsu-remire-montjoly#newrdvmodal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3"
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{dictionary.ctaSection.button}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>

            {/* Mobile-stacked secondary actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                asChild 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm shadow-lg w-full sm:w-auto"
              >
                <Link href={`/${lang}/contact`} className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{dictionary.ctaSection.secondaryButtons.question}</span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm shadow-lg w-full sm:w-auto"
              >
                <Link href={`/${lang}/services-pricing`} className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{dictionary.ctaSection.secondaryButtons.pricing}</span>
                </Link>
              </Button>
            </div>

            {/* Mobile-optimized reassurance */}
            <p className="text-white/70 text-xs sm:text-sm mt-4 sm:mt-6 flex items-center justify-center gap-2 px-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-center">{dictionary.ctaSection.bookingSection.reassurance}</span>
            </p>
          </div>
        </div>

        {/* Mobile-optimized bottom encouragement */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto px-4">
          <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
            &quot;{dictionary.ctaSection.quote.text}&quot;
          </p>
          <p className="text-white/60 text-xs sm:text-sm mt-3 sm:mt-4 italic">
            {dictionary.ctaSection.quote.attribution}
          </p>
        </div>
      </div>

      {/* Mobile-responsive floating action elements */}
      <div className="absolute top-16 sm:top-20 right-6 sm:right-12 w-3 h-3 sm:w-4 sm:h-4 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-24 sm:bottom-32 left-8 sm:left-16 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-4 sm:left-8 w-2 h-2 sm:w-3 sm:h-3 bg-white/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};