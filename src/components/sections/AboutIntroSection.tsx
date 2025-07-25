import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const AboutIntroSection = ({ dictionary, lang }: { dictionary: any; lang:string }) => {
  return (
    // REFACTORED: Now uses the main theme background and foreground colors.
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/practitioner-photo.jpg"
              alt="Photo de Nathalie Jean, praticienne Shiatsu"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dictionary.aboutIntro.heading}
            </h2>
            {/* REFACTORED: Uses 'muted-foreground' for a softer paragraph color. */}
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgb(var(--color-text-secondary))' }}>
              {dictionary.aboutIntro.paragraph}
            </p>
            {/* REFACTORED: Explicitly uses the 'accent' color for the button. */}
            <Button asChild className="self-start hover:opacity-90" style={{ backgroundColor: 'rgb(var(--color-primary))', color: 'rgb(var(--color-text))' }}>
              <Link href={`/${lang}/about`}>{dictionary.aboutIntro.cta}</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};