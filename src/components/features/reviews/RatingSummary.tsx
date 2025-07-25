'use client';

import { Star } from "lucide-react";

// The props are now much simpler
interface RatingSummaryProps {
  dictionary: any;
}

export const RatingSummary = ({ dictionary }: RatingSummaryProps) => {
  // Read the averages directly from the dictionary
  const googleAvg = parseFloat(dictionary.summary.googleAverage);
  const resalibAvg = parseFloat(dictionary.summary.resalibAverage);
  
  // Calculate the overall average from these two numbers
  const overallAvg = (googleAvg + resalibAvg) / 2;
  const satisfactionPercentage = ((overallAvg / 5) * 100).toFixed(0);

  return (
    <div className="mb-16 flex flex-col items-center gap-8">
      {/* Top row with the three rating blocks */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-center">
        {/* Google Rating */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-slate-400">{dictionary.summary.googleLabel}</span>
          <div className="flex items-center gap-2 mt-1">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-xl font-bold dark:text-white">{googleAvg.toFixed(1)} / 5</span>
          </div>
        </div>
        
        <div className="h-12 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
        
        {/* Resalib Rating */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-slate-400">{dictionary.summary.resalibLabel}</span>
          <div className="flex items-center gap-2 mt-1">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-xl font-bold dark:text-white">{resalibAvg.toFixed(1)} / 5</span>
          </div>
        </div>

        <div className="h-12 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>

        {/* Overall Average */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-slate-400">{dictionary.summary.overallLabel}</span>
          <div className="flex items-center gap-2 mt-1">
            <Star className="w-6 h-6 text-emerald-500 fill-emerald-500" />
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{overallAvg.toFixed(1)} / 5</span>
          </div>
        </div>
      </div>

      {/* The satisfaction percentage line */}
      <div className="mt-4">
        <p className="text-lg font-semibold text-center dark:text-white">
          <span className="text-emerald-600">{satisfactionPercentage}%</span> {dictionary.summary.satisfaction}
        </p>
      </div>
    </div>
  );
};