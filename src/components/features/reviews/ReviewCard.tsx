'use client';

import Image from "next/image";
import { Quote, Star, User, Calendar } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { fr, enUS, ptBR } from 'date-fns/locale';
import type { Locale } from '@/lib/i18n-config';
import type { Dictionary } from '@/types/dictionary';

// Enhanced star rating component with natural colors
const StarRating = ({ rating, source }: { rating: number; source?: string }) => {
  const totalStars = 5;
  const isGoogle = source === 'google';
  
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 transition-colors duration-200 ${
            index < rating 
              ? isGoogle 
                ? 'text-[rgb(var(--color-primary))] fill-[rgb(var(--color-primary))]' 
                : 'text-[rgb(var(--color-secondary))] fill-[rgb(var(--color-secondary))]'
              : 'text-[rgb(var(--color-text-secondary))]/30'
          }`}
        />
      ))}
    </div>
  );
};

// Enhanced review card with sophisticated styling
export const ReviewCard = ({ review, lang }: { review: { author_name: string; rating: number; text: string; date?: string; source?: string; relative_time_description?: string }; lang: Locale }) => {
  const isGoogle = review.source === 'google';
  let timeDescription = review.relative_time_description;

  // If the review is from Resalib (not Google) and has a date, calculate "time ago"
  if (!isGoogle && review.date) {
    try {
      const date = new Date(review.date);
      const locale = lang === 'fr' ? fr : lang === 'en' ? enUS : ptBR;
      timeDescription = formatDistanceToNow(date, { addSuffix: true, locale });
    } catch (error) {
      console.error("Invalid date for Resalib review:", review.date);
      timeDescription = "";
    }
  }

  return (
    <div className="relative w-[380px] flex-shrink-0 h-full flex flex-col group">
      {/* Enhanced card with glassmorphism */}
      <div className="bg-card/70 backdrop-blur-md rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] border border-[rgb(var(--color-primary))]/10">
        
        {/* Gradient overlay based on source */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isGoogle 
            ? 'bg-gradient-to-br from-[rgb(var(--color-primary))]/5 to-[rgb(var(--color-secondary))]/3' 
            : 'bg-gradient-to-br from-[rgb(var(--color-secondary))]/5 to-[rgb(var(--color-tertiary))]/3'
        }`}></div>

        {/* Header section */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="flex items-center gap-3">
            {/* Enhanced avatar */}
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
              isGoogle 
                ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' 
                : 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]'
            }`}>
              <User className="w-6 h-6 text-white" />
            </div>
            
            <div>
              <span className="font-bold text-card-foreground text-lg">{review.author_name}</span>
              {/* Source badge */}
            </div>
          </div>
          
          {/* Rating and time section */}
          <div className="text-right flex-shrink-0">
            <StarRating rating={review.rating} source={review.source} />
            {timeDescription && (
              <div className="flex items-center gap-1 mt-2 text-xs text-[rgb(var(--color-text-secondary))]">
                <Calendar className="w-3 h-3" />
                <span>{timeDescription}</span>
              </div>
            )}
          </div>
        </div>

        {/* Quote icon */}
        <div className="relative z-10 mb-4">
          <Quote className={`w-8 h-8 opacity-20 ${
            isGoogle ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-secondary))]'
          }`} />
        </div>
        
        {/* Review content */}
        <blockquote className="text-[rgb(var(--color-text-secondary))] text-base leading-relaxed flex-grow relative z-10 italic">
          &quot;{review.text}&quot;
        </blockquote>

        {/* Bottom decoration */}
        <div className="mt-6 pt-4 border-t border-[rgb(var(--color-primary))]/10 relative z-10">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 text-xs font-medium ${
              isGoogle ? 'text-[rgb(var(--color-primary))]' : 'text-[rgb(var(--color-secondary))]'
            }`}>
              <Star className="w-3 h-3" />
              <span>Avis vérifié</span>
            </div>
            
            {/* Rating display */}
            <div className="text-sm font-bold text-[rgb(var(--color-text))]">
              {review.rating}/5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};