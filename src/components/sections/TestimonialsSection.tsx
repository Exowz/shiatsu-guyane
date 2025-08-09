'use client'; 

import { useState, useEffect } from 'react';
import { Marquee } from '@/components/magicui/marquee';
import { ReviewCard } from '@/components/features/reviews/ReviewCard';
import { RatingSummary } from '@/components/features/reviews/RatingSummary';
import type { Dictionary } from '@/types/dictionary';
import type { Locale } from '@/lib/i18n-config';
import { MessageCircle, Star, Users, Heart, Sparkles, TrendingUp } from 'lucide-react';

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
    <section className="min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Sophisticated background with trust-building elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-background))] via-[rgb(var(--color-surface))] to-[rgb(var(--color-background))]"></div>
      
      {/* Mobile-optimized trust-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Authentic testimonials - responsive sizing */}
        <div className="absolute top-1/4 left-1/6 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        {/* Community trust - mobile-optimized */}
        <div className="absolute bottom-1/3 right-1/6 w-40 sm:w-56 md:w-72 lg:w-80 h-40 sm:h-56 md:h-72 lg:h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        {/* Shared experiences - scaled for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 md:w-[500px] lg:w-[700px] h-80 sm:h-96 md:h-[500px] lg:h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full relative z-10">
        
        {/* Mobile-Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Mobile-optimized section badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/70 backdrop-blur-md rounded-full mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--color-primary))]" />
            <span className="text-xs sm:text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.testimonials.badge}</span>
          </div>

          {/* Mobile-responsive main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight max-w-4xl mx-auto px-2">
            <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.testimonialsSection.heading}
            </span>
          </h2>

          {/* Mobile-optimized trust indicators */}
          <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            {dictionary.components.testimonials.description}
          </p>

          {/* Mobile-stacked social proof indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-primary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.quickInfo.verifiedReviews}</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-secondary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.quickInfo.satisfiedClients}</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[rgb(var(--color-tertiary))] flex-shrink-0" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.quickInfo.authenticExperiences}</span>
            </div>
          </div>
        </div>

        {/* Mobile-Enhanced Rating Summary */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-card/60 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 via-[rgb(var(--color-secondary))]/3 to-transparent rounded-2xl sm:rounded-3xl"></div>
            
            <div className="relative z-10">
              <RatingSummary 
                dictionary={dictionary}
              />
            </div>
          </div>
        </div>
        
        {/* Mobile-Enhanced Reviews Container */}
        <div className="relative flex flex-col gap-8 sm:gap-10 md:gap-12 overflow-hidden">

          {/* Google Reviews Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Mobile-optimized Google section header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/70 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-md sm:rounded-lg flex items-center justify-center">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">
                  {dictionary.testimonialsSection.googleHeading}
                </h3>
              </div>
            </div>

            {/* Mobile-optimized Google reviews content */}
            {isLoading ? (
              <div className="flex justify-center items-center h-24 sm:h-32 bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-[rgb(var(--color-primary))]/30 border-t-[rgb(var(--color-primary))] rounded-full animate-spin"></div>
                  <p className="text-sm sm:text-base text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.loading}</p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <Marquee pauseOnHover className="py-2 sm:py-4">
                  {googleReviews.map((review, idx) => (
                    <ReviewCard key={`google-${idx}`} review={review} lang={lang} />
                  ))}
                </Marquee>
              </div>
            )}
          </div>

          {/* Resalib Reviews Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Mobile-optimized Resalib section header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-card/70 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-md sm:rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">
                  {dictionary.testimonialsSection.resalibHeading}
                </h3>
              </div>
            </div>

            {/* Mobile-optimized Resalib reviews content */}
            <div className="relative">
              <Marquee pauseOnHover reverse className="py-2 sm:py-4">
                {resalibReviews.map((review, idx) => (
                  <ReviewCard key={`resalib-${idx}`} review={review} lang={lang} />
                ))}
              </Marquee>
            </div>
          </div>

          {/* Mobile-optimized fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[rgb(var(--color-background))] via-[rgb(var(--color-background))]/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[rgb(var(--color-background))] via-[rgb(var(--color-background))]/80 to-transparent"></div>
        </div>

        {/* Mobile-optimized trust building footer */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="bg-card/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(var(--color-primary))]" />
              <h4 className="text-lg sm:text-xl font-bold text-card-foreground">{dictionary.components.testimonials.wellbeingMessage}</h4>
            </div>
            <p className="text-sm sm:text-base text-[rgb(var(--color-text-secondary))] leading-relaxed">
              {dictionary.components.testimonials.footerDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile-optimized floating trust elements */}
      <div className="absolute top-12 sm:top-16 md:top-20 right-8 sm:right-10 md:right-12 w-3 h-3 sm:w-4 sm:h-4 bg-[rgb(var(--color-primary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-32 left-8 sm:left-12 md:left-16 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[rgb(var(--color-secondary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-4 sm:left-6 md:left-8 w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};