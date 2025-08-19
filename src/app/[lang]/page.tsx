import { AboutIntroSection } from '@/components/sections/AboutIntroSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhatIsShiatsuSection } from '@/components/sections/WhatIsShiatsuSection';
import { WhoIsItForSection } from '@/components/sections/WhoIsItForSection';

import { GardenBackground, SectionGarden, GardenDivider, FloatingBotanicals } from '@/components/garden';
import { getDictionary } from '@/lib/dictionary';
import { i18n, Locale } from '@/lib/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function HomePage(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="relative">
      {/* Base Garden Background - Welcome Garden Theme */}
      <GardenBackground 
        intensity="medium" 
        wildlife={true} 
        atmosphere={true} 
        zIndex={1} 
      />
      
      {/* Floating Botanical Elements */}
      <FloatingBotanicals 
        density="medium" 
        elements={['leaves', 'petals', 'seeds']} 
        wildlife={true}
        zIndex={15}
      />

      {/* Hero Section with Canopy Theme */}
      <div className="relative">
        <SectionGarden theme="canopy" position="header" height="xl" zIndex={2} />
        <HeroSection dictionary={dictionary} lang={lang} />
        <SectionGarden theme="forest" position="footer" height="md" zIndex={2} />
      </div>

      {/* Garden Divider */}
      <GardenDivider type="vine" size="md" zIndex={5} />

      {/* About Section with Grove Theme */}
      <div className="relative">
        <SectionGarden theme="grove" position="background" height="lg" zIndex={2} />
        <AboutIntroSection dictionary={dictionary} lang={lang} />
      </div>

      {/* Garden Divider */}
      <GardenDivider type="organic" size="sm" zIndex={5} />

      {/* What is Shiatsu Section with Zen Theme */}
      <div className="relative">
        <SectionGarden theme="zen" position="background" height="md" zIndex={2} />
        <WhatIsShiatsuSection dictionary={dictionary} lang={lang} />
      </div>

      {/* Garden Divider */}
      <GardenDivider type="branch" size="md" zIndex={5} />

      {/* Who is it for Section with Herb Theme */}
      <div className="relative">
        <SectionGarden theme="herb" position="background" height="lg" zIndex={2} />
        <WhoIsItForSection dictionary={dictionary} lang={lang} />
      </div>

      {/* Garden Divider */}
      <GardenDivider type="flower" size="lg" zIndex={5} />

      {/* Benefits Section with Botanical Theme */}
      <div className="relative">
        <SectionGarden theme="botanical" position="background" height="xl" zIndex={2} />
        <BenefitsSection dictionary={dictionary} lang={lang} />
      </div>

      {/* Garden Divider */}
      <GardenDivider type="root" size="sm" zIndex={5} />

      {/* Testimonials Section with Grove Theme */}
      <div className="relative">
        <SectionGarden theme="grove" position="background" height="md" zIndex={2} />
        <TestimonialsSection dictionary={dictionary} lang={lang} />
      </div>

      {/* Garden Divider */}
      <GardenDivider type="canopy" size="md" inverted={true} zIndex={5} />

      {/* CTA Section with Forest Theme */}
      <div className="relative">
        <SectionGarden theme="forest" position="background" height="lg" zIndex={2} />
        <CtaSection dictionary={dictionary} lang={lang} />
        <SectionGarden theme="canopy" position="footer" height="sm" zIndex={2} />
      </div>

      {/* Additional Floating Elements for Dense Areas */}
      <FloatingBotanicals 
        density="light" 
        elements={['pollen', 'particles']} 
        bounds="center"
        zIndex={12}
      />
    </div>
  );
}