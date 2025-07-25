import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const WhatIsShiatsuSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  return (
    // REFACTORED: Using 'secondary' for a subtle background contrast.
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32" style={{ backgroundColor: 'rgb(var(--color-surface))', color: 'rgb(var(--color-text))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold">
              {dictionary.whatIsShiatsuSection.heading}
            </h2>
            {/* REFACTORED: Using 'muted-foreground' for softer paragraph text. */}
            <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-text-secondary))' }}>
              {dictionary.whatIsShiatsuSection.paragraph}
            </p>
            {/* REFACTORED: Using the 'accent' color for the button. */}
            <Button asChild size="lg" className="mt-8 self-start hover:opacity-90" style={{ backgroundColor: 'rgb(var(--color-secondary))', color: 'rgb(var(--color-background))' }}>
              <Link href={`/${lang}/le-shiatsu`}>
                {dictionary.whatIsShiatsuSection.cta}
              </Link>
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/shiatsu-general.jpg"
              alt="Personne recevant un soin Shiatsu"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};