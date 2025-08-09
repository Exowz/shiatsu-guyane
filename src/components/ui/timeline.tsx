"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Star, Calendar, Award, Sparkles } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [50, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full relative overflow-hidden" ref={containerRef}>
      {/* Mobile-optimized background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-[rgb(var(--color-primary))]/8 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/6 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-[rgb(var(--color-tertiary))]/6 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-xl sm:blur-2xl animate-pulse delay-500"></div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 z-10">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-24 gap-4 sm:gap-8 md:gap-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Mobile-optimized year column */}
            <div className="sticky flex flex-col items-center top-24 sm:top-32 md:top-40 self-start w-16 sm:w-20 md:w-auto z-40">
              {/* Mobile-optimized timeline dot */}
              <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 rounded-2xl sm:rounded-3xl bg-card/80 backdrop-blur-xl flex items-center justify-center shadow-lg sm:shadow-xl md:shadow-2xl border border-[rgb(var(--color-primary))]/20 group hover:scale-110 hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transition-all duration-500 hover:bg-card/90">
                <div className={`h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]' :
                  'bg-gradient-to-br from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]'
                }`}>
                  {index % 4 === 0 ? <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> :
                   index % 4 === 1 ? <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> :
                   index % 4 === 2 ? <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> :
                   <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                </div>
                
                {/* Mobile-optimized pulsing glow */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  index % 4 === 0 ? 'bg-[rgb(var(--color-primary))]' :
                  index % 4 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                  index % 4 === 2 ? 'bg-[rgb(var(--color-tertiary))]' :
                  'bg-[rgb(var(--color-primary))]'
                } blur-lg sm:blur-xl`}></div>
              </div>
              
              {/* Mobile-responsive year title */}
              <h3 className="hidden md:block text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold bg-gradient-to-r from-[rgb(var(--color-text))] to-[rgb(var(--color-text-secondary))] bg-clip-text text-transparent hover:from-[rgb(var(--color-primary))] hover:to-[rgb(var(--color-secondary))] transition-all duration-700 tracking-tight mt-4 text-center">
                {item.title}
              </h3>
            </div>

            {/* Mobile-optimized content column */}
            <div className="relative flex-1 max-w-full">
              {/* Mobile year title */}
              <h3 className="md:hidden block text-2xl sm:text-3xl mb-4 sm:mb-6 md:mb-8 text-left font-bold bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] bg-clip-text text-transparent tracking-tight">
                {item.title}
              </h3>
              
              {/* Mobile-optimized content card */}
              <motion.div 
                className="bg-card/70 backdrop-blur-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transition-all duration-700 hover:transform hover:scale-[1.01] sm:hover:scale-[1.02] hover:bg-card/80 group relative overflow-hidden border border-[rgb(var(--color-primary))]/10 hover:border-[rgb(var(--color-primary))]/20"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Mobile-optimized gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))]/8 via-[rgb(var(--color-secondary))]/4 to-transparent' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))]/8 via-[rgb(var(--color-tertiary))]/4 to-transparent' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-[rgb(var(--color-tertiary))]/8 via-[rgb(var(--color-primary))]/4 to-transparent' :
                  'bg-gradient-to-br from-[rgb(var(--color-primary))]/6 via-[rgb(var(--color-secondary))]/3 to-[rgb(var(--color-tertiary))]/2'
                }`}></div>
                
                {/* Content with mobile-optimized spacing */}
                <div className="relative z-10">
                  {item.content}
                </div>

                {/* Mobile-optimized decorative elements */}
                <div className={`absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl sm:rounded-3xl opacity-5 group-hover:opacity-15 transition-all duration-500 ${
                  index % 4 === 0 ? 'bg-[rgb(var(--color-primary))]' :
                  index % 4 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                  index % 4 === 2 ? 'bg-[rgb(var(--color-tertiary))]' :
                  'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]'
                }`}></div>

                {/* Mobile-optimized animated bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 sm:h-2 rounded-b-2xl sm:rounded-b-3xl transition-all duration-700 ease-out group-hover:w-full w-0 ${
                  index % 4 === 0 ? 'bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                  index % 4 === 1 ? 'bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                  index % 4 === 2 ? 'bg-gradient-to-r from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]' :
                  'bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]'
                }`}></div>

                {/* Mobile-optimized corner shine effect */}
                <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl sm:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Mobile-optimized animated timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-7 sm:left-9 md:left-10 lg:left-11 top-0 w-1 sm:w-2 bg-gradient-to-b from-[rgb(var(--color-primary))]/15 via-[rgb(var(--color-secondary))]/15 to-[rgb(var(--color-tertiary))]/15 rounded-full shadow-lg sm:shadow-xl backdrop-blur-sm"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-1 sm:w-2 bg-gradient-to-b from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-full shadow-lg sm:shadow-xl"
          />
          
          {/* Mobile-optimized glowing effect */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-2 sm:w-3 md:w-4 -left-0.5 sm:-left-1 bg-gradient-to-b from-[rgb(var(--color-primary))]/40 via-[rgb(var(--color-secondary))]/30 to-[rgb(var(--color-tertiary))]/20 rounded-full blur-sm sm:blur-lg"
          />

          {/* Mobile-optimized subtle outer glow */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-4 sm:w-6 md:w-8 -left-1.5 sm:-left-2 md:-left-3 bg-gradient-to-b from-[rgb(var(--color-primary))]/20 via-[rgb(var(--color-secondary))]/15 to-[rgb(var(--color-tertiary))]/10 rounded-full blur-lg sm:blur-xl md:blur-2xl"
          />
        </div>

        {/* Mobile-optimized floating timeline elements */}
        <motion.div 
          className="absolute top-12 sm:top-16 md:top-20 right-6 sm:right-8 md:right-12 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[rgb(var(--color-primary))]/20 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-3 sm:left-4 md:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-[rgb(var(--color-secondary))]/25 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            delay: 1,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-4 sm:right-6 md:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(var(--color-tertiary))]/30 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            delay: 0.5,
            ease: "easeInOut" 
          }}
        />
      </div>
    </div>
  );
};