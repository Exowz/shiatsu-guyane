'use client';

import { Star, TrendingUp, Award, Users } from "lucide-react";
import type { Dictionary } from '@/types/dictionary';

interface RatingSummaryProps {
  dictionary: Dictionary;
}

export const RatingSummary = ({ dictionary }: RatingSummaryProps) => {
  // Read the averages directly from the dictionary testimonialsSection
  const googleAvg = parseFloat(dictionary.testimonialsSection.summary.googleAverage);
  const resalibAvg = parseFloat(dictionary.testimonialsSection.summary.resalibAverage);
  
  // Calculate the overall average from these two numbers
  const overallAvg = (googleAvg + resalibAvg) / 2;
  const satisfactionPercentage = ((overallAvg / 5) * 100).toFixed(0);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Enhanced rating blocks with glassmorphism */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-center w-full max-w-4xl">
        
        {/* Google Rating */}
        <div className="flex flex-col items-center p-6 bg-card/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 min-w-[200px]">
          <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-xl mb-4 flex items-center justify-center shadow-lg">
            <Star className="w-6 h-6 text-white" />
          </div>
          <span className="text-sm font-semibold text-[rgb(var(--color-text-secondary))] uppercase tracking-wide mb-2">
            {dictionary.testimonialsSection.summary.googleLabel}
          </span>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[rgb(var(--color-primary))] fill-[rgb(var(--color-primary))]" />
            <span className="text-2xl font-bold text-[rgb(var(--color-text))]">{googleAvg.toFixed(1)}</span>
            <span className="text-[rgb(var(--color-text-secondary))]">/ 5</span>
          </div>
        </div>
        
        {/* Elegant separator */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[rgb(var(--color-primary))]/30 to-transparent"></div>
        </div>
        
        {/* Resalib Rating */}
        <div className="flex flex-col items-center p-6 bg-card/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 min-w-[200px]">
          <div className="w-12 h-12 bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-xl mb-4 flex items-center justify-center shadow-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-sm font-semibold text-[rgb(var(--color-text-secondary))] uppercase tracking-wide mb-2">
            {dictionary.testimonialsSection.summary.resalibLabel}
          </span>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[rgb(var(--color-secondary))] fill-[rgb(var(--color-secondary))]" />
            <span className="text-2xl font-bold text-[rgb(var(--color-text))]">{resalibAvg.toFixed(1)}</span>
            <span className="text-[rgb(var(--color-text-secondary))]">/ 5</span>
          </div>
        </div>

        {/* Elegant separator */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[rgb(var(--color-secondary))]/30 to-transparent"></div>
        </div>

        {/* Overall Average - Featured */}
        <div className="flex flex-col items-center p-8 bg-gradient-to-br from-card/70 to-card/50 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border-2 border-[rgb(var(--color-tertiary))]/20 min-w-[220px]">
          <div className="w-16 h-16 bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))] rounded-2xl mb-4 flex items-center justify-center shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm font-bold text-[rgb(var(--color-tertiary))] uppercase tracking-wide mb-2">
            {dictionary.testimonialsSection.summary.overallLabel}
          </span>
          <div className="flex items-center gap-3">
            <Star className="w-7 h-7 text-[rgb(var(--color-tertiary))] fill-[rgb(var(--color-tertiary))]" />
            <span className="text-3xl font-bold text-[rgb(var(--color-tertiary))]">{overallAvg.toFixed(1)}</span>
            <span className="text-[rgb(var(--color-text-secondary))] text-lg">/ 5</span>
          </div>
        </div>
      </div>

      {/* Enhanced satisfaction percentage */}
      <div className="text-center p-6 bg-card/40 backdrop-blur-sm rounded-2xl shadow-lg max-w-md">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Users className="w-6 h-6 text-[rgb(var(--color-primary))]" />
          <p className="text-2xl font-bold text-[rgb(var(--color-text))]">
            <span className="text-[rgb(var(--color-tertiary))] text-3xl">{satisfactionPercentage}%</span>
          </p>
        </div>
        <p className="text-[rgb(var(--color-text-secondary))] font-medium">
          {dictionary.testimonialsSection.summary.satisfaction}
        </p>
      </div>
    </div>
  );
};