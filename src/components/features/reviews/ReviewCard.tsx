'use client';

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { fr, enUS, ptBR } from 'date-fns/locale';
import type { Locale } from '@/lib/i18n-config';

// A helper component to render the star ratings visually
const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
        />
      ))}
    </div>
  );
};

// The main component for a single review card
export const ReviewCard = ({ review, lang }: { review: any; lang: Locale }) => {
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
    // 'h-full flex flex-col' ensures all cards in a row are the same height
    <div className="relative w-[350px] flex-shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">

          <span className="font-semibold dark:text-white">{review.author_name}</span>
        </div>
        <div className="text-right flex-shrink-0">
          <StarRating rating={review.rating} />
          {timeDescription && (
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">{timeDescription}</p>
          )}
        </div>
      </div>
      {/* 'flex-grow' pushes the footer to the bottom */}
      <blockquote className="text-gray-600 dark:text-slate-300 italic text-sm leading-relaxed flex-grow">
        “{review.text}”
      </blockquote>
    </div>
  );
};