import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import type { Dictionary } from '@/types/dictionary';
import type { Locale } from '@/lib/i18n-config';

export const CtaSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: Locale }) => {
  // Convert heading text to words array format for TypewriterEffectSmooth
  const headingText = dictionary?.ctaSection?.heading ?? 'Ready to start your wellness journey?';
  const words = headingText.split(' ').map((word) => ({
    text: word,
    className: '',
    style: { color: 'rgb(var(--color-background))' },
  }));

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32" style={{ backgroundColor: 'rgb(var(--color-secondary))', color: 'rgb(var(--color-background))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div className="flex justify-center">
          <TypewriterEffectSmooth
            words={words}
            className="mb-4"
            cursorClassName="bg-orange-500"
          />
        </div>
        <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'rgba(var(--color-background), 0.8)' }}>
          {dictionary?.ctaSection?.subheading ?? 'Book your personalized session and discover the benefits of our therapeutic approach.'}
        </p>
        <Button asChild size="lg" className="mt-8 font-bold hover:opacity-90" style={{ backgroundColor: 'rgb(var(--color-accent))', color: 'rgb(var(--color-background))' }}>
          <Link href={`/${lang}/contact`}>
            {dictionary?.ctaSection?.button ?? 'Book Now'}
          </Link>
        </Button>
      </div>
    </section>
  );
};