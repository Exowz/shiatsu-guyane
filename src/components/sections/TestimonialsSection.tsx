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
    <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32 relative overflow-hidden">
      {/* Sophisticated background with trust-building elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-background))] via-[rgb(var(--color-surface))] to-[rgb(var(--color-background))]"></div>
      
      {/* Trust-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Authentic testimonials */}
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-[rgb(var(--color-primary))]/6 rounded-full blur-3xl animate-pulse"></div>
        {/* Community trust */}
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Shared experiences */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[rgb(var(--color-tertiary))]/4 to-[rgb(var(--color-primary))]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full relative z-10">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          {/* Section badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <MessageCircle className="w-5 h-5 text-[rgb(var(--color-primary))]" />
            <span className="text-sm font-semibold text-card-foreground tracking-wide">{dictionary.components.testimonials.badge}</span>
          </div>

          {/* Main heading with gradient */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            <span className="bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] bg-clip-text text-transparent">
              {dictionary.testimonialsSection.heading}
            </span>
          </h2>

          {/* Trust indicators */}
          <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] max-w-3xl mx-auto leading-relaxed mb-8">
            {dictionary.components.testimonials.description}
          </p>

          {/* Social proof indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Star className="w-4 h-4 text-[rgb(var(--color-primary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.quickInfo.verifiedReviews}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Users className="w-4 h-4 text-[rgb(var(--color-secondary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.quickInfo.satisfiedClients}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Heart className="w-4 h-4 text-[rgb(var(--color-tertiary))]" />
              <span className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.quickInfo.authenticExperiences}</span>
            </div>
          </div>
        </div>

        {/* Enhanced Rating Summary */}
        <div className="mb-16">
          <div className="bg-card/60 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--color-primary))]/5 via-[rgb(var(--color-secondary))]/3 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <RatingSummary 
                dictionary={dictionary.testimonialsSection}
              />
            </div>
          </div>
        </div>
        
        {/* Enhanced Reviews Container */}
        <div className="relative flex flex-col gap-12 overflow-hidden">

          {/* Google Reviews Section */}
          <div className="space-y-6">
            {/* Google section header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {dictionary.testimonialsSection.googleHeading}
                </h3>
              </div>
            </div>

            {/* Google reviews content */}
            {isLoading ? (
              <div className="flex justify-center items-center h-32 bg-card/40 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-[rgb(var(--color-primary))]/30 border-t-[rgb(var(--color-primary))] rounded-full animate-spin"></div>
                  <p className="text-[rgb(var(--color-text-secondary))] font-medium">{dictionary.components.testimonials.loading}</p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <Marquee pauseOnHover className="py-4">
                  {googleReviews.map((review, idx) => (
                    <ReviewCard key={`google-${idx}`} review={review} lang={lang} />
                  ))}
                </Marquee>
              </div>
            )}
          </div>

          {/* Resalib Reviews Section */}
          <div className="space-y-6">
            {/* Resalib section header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/70 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {dictionary.testimonialsSection.resalibHeading}
                </h3>
              </div>
            </div>

            {/* Resalib reviews content */}
            <div className="relative">
              <Marquee pauseOnHover reverse className="py-4">
                {resalibReviews.map((review, idx) => (
                  <ReviewCard key={`resalib-${idx}`} review={review} lang={lang} />
                ))}
              </Marquee>
            </div>
          </div>

          {/* Enhanced fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[rgb(var(--color-background))] via-[rgb(var(--color-background))]/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[rgb(var(--color-background))] via-[rgb(var(--color-background))]/80 to-transparent"></div>
        </div>

        {/* Trust building footer */}
        <div className="mt-20 text-center">
          <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[rgb(var(--color-primary))]" />
              <h4 className="text-xl font-bold text-card-foreground">{dictionary.components.testimonials.wellbeingMessage}</h4>
            </div>
            <p className="text-[rgb(var(--color-text-secondary))] leading-relaxed">
              {dictionary.components.testimonials.footerDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Floating trust elements */}
      <div className="absolute top-20 right-12 w-4 h-4 bg-[rgb(var(--color-primary))]/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-[rgb(var(--color-secondary))]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-8 w-3 h-3 bg-[rgb(var(--color-tertiary))]/40 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};