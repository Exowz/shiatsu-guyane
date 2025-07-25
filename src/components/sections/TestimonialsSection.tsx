'use client'; 

import { useState, useEffect } from 'react';
import { Marquee } from '@/components/magicui/marquee';
import { ReviewCard } from '@/components/features/reviews/ReviewCard';
import { RatingSummary } from '@/components/features/reviews/RatingSummary';
import type { Dictionary } from '@/types/dictionary';
import type { Locale } from '@/lib/i18n-config';

export const TestimonialsSection = ({ dictionary, lang }: { dictionary: Dictionary; lang: Locale }) => {
  // State to hold the live Google reviews
  const [googleReviews, setGoogleReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get the static Resalib reviews directly from the dictionary
  const resalibReviews = dictionary.testimonialsSection.staticReviews.map((r: any) => ({ ...r, source: 'resalib' }));

  // Fetch Google reviews when the component mounts or language changes
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/reviews?lang=${lang}`);
        const data = await response.json();
        const formattedReviews = data.reviews?.map((r: any) => ({ 
          ...r, 
          source: 'google',
        })) || [];
        setGoogleReviews(formattedReviews);
      } catch (error) {
        console.error("Failed to fetch Google reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoogleReviews();
  }, [lang]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32" style={{ backgroundColor: 'rgb(var(--color-background))', color: 'rgb(var(--color-text))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'rgb(var(--color-text))' }}>
            {dictionary.testimonialsSection.heading}
          </h2>
        </div>

        {/* The RatingSummary component now reads all averages from the dictionary */}
        <RatingSummary 
          dictionary={dictionary.testimonialsSection}
        />
        
        {/* Container for both marquees */}
        <div className="relative flex flex-col gap-8 overflow-hidden mt-8">

        {/* --- Google Reviews Marquee --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: 'rgb(var(--color-text))' }}>{dictionary.testimonialsSection.googleHeading}</h3>
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <p className="text-center text-sm" style={{ color: 'rgb(var(--color-text-secondary))' }}>Loading Google reviews...</p>
            </div>
          ) : (
            <Marquee pauseOnHover>
              {googleReviews.map((review, idx) => (
                <ReviewCard key={`google-${idx}`} review={review} lang={lang} />
              ))}
            </Marquee>
          )}
        </div>

        {/* --- Resalib Reviews Marquee --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: 'rgb(var(--color-text))' }}>{dictionary.testimonialsSection.resalibHeading}</h3>
          <Marquee pauseOnHover reverse>
            {resalibReviews.map((review, idx) => (
              <ReviewCard key={`resalib-${idx}`} review={review} lang={lang} />
            ))}
          </Marquee>
        </div>

          {/* Gradients to fade the edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24" style={{ background: 'linear-gradient(to right, rgb(var(--color-background)), transparent)' }}></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24" style={{ background: 'linear-gradient(to left, rgb(var(--color-background)), transparent)' }}></div>
        </div>
      </div>
    </section>
  );
};