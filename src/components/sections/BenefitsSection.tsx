'use client'; 

import { Baby, Bone, HeartPulse, ShieldCheck, Waves, Wind } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HoverEffect } from '../ui/card-hover-effect';

export const BenefitsSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  
  const icons = [
    // REFACTORED: Icons now use the theme's 'accent' color
    <HeartPulse key="1" className="w-10 h-10" style={{ color: 'rgb(var(--color-tertiary))' }} />,
    <Bone key="2" className="w-10 h-10" style={{ color: 'rgb(var(--color-tertiary))' }} />,
    <Wind key="3" className="w-10 h-10" style={{ color: 'rgb(var(--color-tertiary))' }} />,
    <Baby key="4" className="w-10 h-10" style={{ color: 'rgb(var(--color-tertiary))' }} />,
    <Waves key="5" className="w-10 h-10" style={{ color: 'rgb(var(--color-tertiary))' }} />,
    <ShieldCheck key="6" className="w-10 h-10" style={{ color: 'rgb(var(--color-tertiary))' }} />,
  ];

  const items = dictionary.benefitsSection.cards.map((card: any, index: number) => ({
    title: card.title,
    description: card.description,
    link: "#",
    icon: icons[index],
  }));

  return (
    // REFACTORED: Using 'secondary' background for contrast
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32" style={{ backgroundColor: 'rgb(var(--color-surface))', color: 'rgb(var(--color-text))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            {dictionary.benefitsSection.heading}
          </h2>
        </div>

        <HoverEffect items={items} />

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="hover:opacity-90" style={{ backgroundColor: 'rgb(var(--color-primary))', color: 'rgb(var(--color-text))' }}>
            <Link href={`/${lang}/le-shiatsu`}>
              {dictionary.benefitsSection.cta}
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
};