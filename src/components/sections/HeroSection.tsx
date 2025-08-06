import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroActions } from '../features/hero/HeroActions';
import type { Dictionary } from '@/types/dictionary';
import type { Locale } from '@/lib/i18n-config';

export const HeroSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: Locale }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background Video - Now shown on all screen sizes */}
      <video
        autoPlay
        loop
        muted
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" // <-- Simplified classes
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        {dictionary.components.hero.videoNotSupported}
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]"></div>

      {/* Content with consistent container styles */}
      <div className="z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-white">
          {dictionary.homepage.heroTitle}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-white/90">
          {dictionary.homepage.heroSubtitle}
        </p>
        <Button asChild size="lg" className="mt-8 font-semibold transition-all backdrop-blur-md duration-300 px-6 py-3 rounded-full hover:opacity-90 text-white" style={{ backgroundColor: 'rgba(var(--color-primary), 0.9)' }}>
          <a href="https://www.resalib.fr/praticien/64776-nathalie-jean-praticien-shiatsu-remire-montjoly#newrdvmodal" target="_blank" rel="noopener noreferrer">
            {dictionary.ctaSection.button}
          </a>
        </Button>
      </div>
           <div className="absolute top-1/2 left-12 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 ">
        <span 
          className="text-sm uppercase tracking-widest text-white/80" 
          style={{ writingMode: 'vertical-lr' }}
        >
          {dictionary.homepage.scrollDown}
        </span>
        <div className="h-24 w-px mt-4 bg-white/50"></div>
      </div>
                 <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span 
          className="text-sm uppercase tracking-widest text-white/80" 
          style={{ writingMode: 'vertical-lr' }}
        >
          {dictionary.homepage.scrollDown}
        </span>
        <div className="h-24 w-px mt-4 bg-white/50"></div>
      </div>
      <HeroActions lang={lang} dictionary={dictionary} />
    </section>
  );
};