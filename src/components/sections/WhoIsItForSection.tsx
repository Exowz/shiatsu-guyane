'use client';
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import Link from 'next/link'; // 1. Import Link
import { Button } from '@/components/ui/button'; // 2. Import Button

// 3. Update props to include 'lang'
export const WhoIsItForSection = ({ dictionary, lang }: { dictionary: any; lang: string }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'rgb(var(--color-text))' }}>
            {dictionary.whoIsItForSection.heading}
          </h2>
        </div>
        
        <AnimatedTestimonials 
          testimonials={dictionary.whoIsItForSection.testimonials} 
        />

        {/* 4. Add the button here */}
        <div className="mt-8 text-center">
          <Button asChild size="lg" style={{ backgroundColor: 'rgb(var(--color-accent))', color: 'rgb(var(--color-background))' }}>
            <Link href={`/${lang}/pour-qui`}>
              {dictionary.whoIsItForSection.cta}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};