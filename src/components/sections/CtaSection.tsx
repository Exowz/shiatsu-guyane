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
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32 relative overflow-hidden">
      {/* Sophisticated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-secondary))] via-[rgb(var(--color-primary))] to-[rgb(var(--color-tertiary))]"></div>
      
      {/* Action-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Call to action energy */}
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        {/* Transformation potential */}
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-white/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Journey beginning */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
        
        {/* Enhanced introduction badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-12 shadow-lg hover:shadow-xl transition-all duration-300">
          <Heart className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold text-white tracking-wide">{dictionary.ctaSection.badge}</span>
        </div>

        {/* Enhanced typewriter heading */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <TypewriterEffectSmooth
              words={words}
              className="text-4xl md:text-5xl lg:text-6xl"
              cursorClassName="bg-white"
            />
          </div>
        </div>

        {/* Enhanced subheading */}
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed mb-12 font-medium">
          {dictionary?.ctaSection?.subheading ?? 'Book your personalized session and discover the benefits of our therapeutic approach.'}
        </p>

        {/* Trust building elements */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <CheckCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{dictionary.ctaSection.trustElements.personalizedConsultation}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Star className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{dictionary.ctaSection.trustElements.certifiedPractitioner}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{dictionary.ctaSection.trustElements.kindApproach}</span>
          </div>
        </div>

        {/* Enhanced CTA button container */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold text-white">{dictionary.ctaSection.bookingSection.title}</h3>
            </div>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              {dictionary.ctaSection.bookingSection.description}
            </p>

            {/* Primary CTA Button */}
            <Button 
              asChild 
              size="lg" 
              className="group bg-white text-[rgb(var(--color-secondary))] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 px-10 py-6 rounded-2xl text-lg font-bold mb-6"
            >
              <a 
                href="https://www.resalib.fr/praticien/64776-nathalie-jean-praticien-shiatsu-remire-montjoly#newrdvmodal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                <span>{dictionary.ctaSection.button}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>

            {/* Secondary actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm shadow-lg"
              >
                <Link href={`/${lang}/contact`} className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{dictionary.ctaSection.secondaryButtons.question}</span>
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm shadow-lg"
              >
                <Link href={`/${lang}/services-pricing`} className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>{dictionary.ctaSection.secondaryButtons.pricing}</span>
                </Link>
              </Button>
            </div>

            {/* Additional reassurance */}
            <p className="text-white/70 text-sm mt-6 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              {dictionary.ctaSection.bookingSection.reassurance}
            </p>
          </div>
        </div>

        {/* Bottom encouragement */}
        <div className="mt-16 max-w-3xl mx-auto">
          <p className="text-white/80 text-lg leading-relaxed">
            "{dictionary.ctaSection.quote.text}"
          </p>
          <p className="text-white/60 text-sm mt-4 italic">
            {dictionary.ctaSection.quote.attribution}
          </p>
        </div>
      </div>

      {/* Floating action elements */}
      <div className="absolute top-20 right-12 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-8 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};