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
      {/* Enhanced background elements matching website aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-80 h-80 bg-[rgb(var(--color-primary))]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/6 w-96 h-96 bg-[rgb(var(--color-tertiary))]/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[rgb(var(--color-secondary))]/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto py-16 px-6 z-10">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex justify-start pt-12 md:pt-24 md:gap-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, margin: "-120px" }}
          >
            {/* Enhanced year column with better positioning */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Premium timeline dot with glassmorphism */}
              <div className="h-20 w-20 absolute left-1 md:left-1 rounded-3xl bg-card/80 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-[rgb(var(--color-primary))]/20 group hover:scale-110 hover:shadow-3xl transition-all duration-500 hover:bg-card/90">
                <div className={`h-10 w-10 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]' :
                  'bg-gradient-to-br from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]'
                }`}>
                  {index % 4 === 0 ? <Star className="w-5 h-5 text-white" /> :
                   index % 4 === 1 ? <Calendar className="w-5 h-5 text-white" /> :
                   index % 4 === 2 ? <Award className="w-5 h-5 text-white" /> :
                   <Sparkles className="w-5 h-5 text-white" />}
                </div>
                
                {/* Subtle pulsing glow */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  index % 4 === 0 ? 'bg-[rgb(var(--color-primary))]' :
                  index % 4 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                  index % 4 === 2 ? 'bg-[rgb(var(--color-tertiary))]' :
                  'bg-[rgb(var(--color-primary))]'
                } blur-xl`}></div>
              </div>
              
              {/* Enhanced year title with better typography */}
              <h3 className="hidden md:block text-3xl md:pl-28 md:text-7xl font-bold bg-gradient-to-r from-[rgb(var(--color-text))] to-[rgb(var(--color-text-secondary))] bg-clip-text text-transparent hover:from-[rgb(var(--color-primary))] hover:to-[rgb(var(--color-secondary))] transition-all duration-700 tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* Enhanced content column with premium styling */}
            <div className="relative pl-28 pr-4 md:pl-4 w-full">
              {/* Mobile year title with gradient */}
              <h3 className="md:hidden block text-4xl mb-8 text-left font-bold bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] bg-clip-text text-transparent tracking-tight">
                {item.title}
              </h3>
              
              {/* Premium content card with enhanced glassmorphism */}
              <motion.div 
                className="bg-card/70 backdrop-blur-xl p-10 lg:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:transform hover:scale-[1.02] hover:bg-card/80 group relative overflow-hidden border border-[rgb(var(--color-primary))]/10 hover:border-[rgb(var(--color-primary))]/20"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Enhanced gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-[rgb(var(--color-primary))]/8 via-[rgb(var(--color-secondary))]/4 to-transparent' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-[rgb(var(--color-secondary))]/8 via-[rgb(var(--color-tertiary))]/4 to-transparent' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-[rgb(var(--color-tertiary))]/8 via-[rgb(var(--color-primary))]/4 to-transparent' :
                  'bg-gradient-to-br from-[rgb(var(--color-primary))]/6 via-[rgb(var(--color-secondary))]/3 to-[rgb(var(--color-tertiary))]/2'
                }`}></div>
                
                {/* Content with better spacing */}
                <div className="relative z-10">
                  {item.content}
                </div>

                {/* Enhanced decorative elements */}
                <div className={`absolute top-8 right-8 w-16 h-16 rounded-3xl opacity-5 group-hover:opacity-15 transition-all duration-500 ${
                  index % 4 === 0 ? 'bg-[rgb(var(--color-primary))]' :
                  index % 4 === 1 ? 'bg-[rgb(var(--color-secondary))]' :
                  index % 4 === 2 ? 'bg-[rgb(var(--color-tertiary))]' :
                  'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]'
                }`}></div>

                {/* Animated bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-2 rounded-b-3xl transition-all duration-700 ease-out group-hover:w-full w-0 ${
                  index % 4 === 0 ? 'bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                  index % 4 === 1 ? 'bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                  index % 4 === 2 ? 'bg-gradient-to-r from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]' :
                  'bg-gradient-to-r from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]'
                }`}></div>

                {/* Corner shine effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Enhanced animated timeline line with premium styling */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-11 left-11 top-0 w-2 bg-gradient-to-b from-[rgb(var(--color-primary))]/15 via-[rgb(var(--color-secondary))]/15 to-[rgb(var(--color-tertiary))]/15 rounded-full shadow-xl backdrop-blur-sm"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-2 bg-gradient-to-b from-[rgb(var(--color-primary))] via-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))] rounded-full shadow-xl"
          />
          
          {/* Enhanced glowing effect */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-4 -left-1 bg-gradient-to-b from-[rgb(var(--color-primary))]/40 via-[rgb(var(--color-secondary))]/30 to-[rgb(var(--color-tertiary))]/20 rounded-full blur-lg"
          />

          {/* Additional subtle outer glow */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-8 -left-3 bg-gradient-to-b from-[rgb(var(--color-primary))]/20 via-[rgb(var(--color-secondary))]/15 to-[rgb(var(--color-tertiary))]/10 rounded-full blur-2xl"
          />
        </div>

        {/* Enhanced floating timeline elements with better positioning */}
        <motion.div 
          className="absolute top-20 right-12 w-6 h-6 bg-[rgb(var(--color-primary))]/20 rounded-full"
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
          className="absolute bottom-32 left-6 w-4 h-4 bg-[rgb(var(--color-secondary))]/25 rounded-full"
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
          className="absolute top-1/2 right-8 w-3 h-3 bg-[rgb(var(--color-tertiary))]/30 rounded-full"
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