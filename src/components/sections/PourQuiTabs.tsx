"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';
import type { Dictionary } from '@/types/dictionary';

interface PourQuiTabsProps {
  lang: Locale;
  onHeightChange?: (height: number) => void;
}

export const PourQuiTabs = ({ lang, onHeightChange }: PourQuiTabsProps) => {
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [active, setActive] = useState<{ title: any; value: string } | null>(null);
  const [tabs, setTabs] = useState<{ title: any; value: string; content: React.ReactNode }[]>([]);
  const [hovering, setHovering] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // Dynamic height measurement
  useEffect(() => {
    const measureHeight = () => {
      if (measureRef.current && onHeightChange) {
        const height = measureRef.current.offsetHeight;
        const buffer = window.innerWidth < 640 ? 200 : 150; // More buffer on mobile
        onHeightChange(height + buffer);
      }
    };

    // Measure height after content loads and on tab changes
    const timer = setTimeout(measureHeight, 100);
    
    // Remeasure on window resize
    window.addEventListener('resize', measureHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureHeight);
    };
  }, [active, onHeightChange]);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict);
      
      if (dict?.pourQuiPage?.cards) {
        const tabsData = createTabsFromCards(dict.pourQuiPage.cards);
        setTabs(tabsData);
        setActive(tabsData[0]);
      }
    };
    fetchDictionary();
  }, [lang]);

  // Create tabs data from cards with mobile optimization
  const createTabsFromCards = (cards: any[]) => {
    return cards?.map((card: any, index: number) => ({
      title: card.title,
      value: `card-${index}`,
      content: (
        <div 
          ref={index === 0 ? measureRef : null}
          className="w-full h-[1300px] sm:h-[1300px] md:h-[1300px] lg:h-[1300px] xl:h-[1500px] bg-background/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col overflow-y-auto"
        >
          {/* Mobile-optimized card image */}
          {card.src && (
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 mb-6 sm:mb-8 md:mb-10 lg:mb-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Mobile-responsive card header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-2">
              {card.description}
            </p>
          </div>

          {/* Mobile-optimized card content sections */}
          {card.content && (
            <div className="grid gap-6 sm:gap-8 lg:gap-12">
              {card.content.map((section: any, sectionIndex: number) => (
                <div 
                  key={sectionIndex}
                  className="bg-muted/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8"
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6 border-b border-border/20 pb-2 sm:pb-3">
                    {section.heading}
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    {section.text}
                  </p>
                  
                  {/* Mobile-optimized list section */}
                  {section.list && (
                    <div className="mt-6 sm:mt-8 bg-background/60 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      {section.listTitle && (
                        <h5 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                          <div className="w-2 h-4 sm:h-6 bg-gradient-to-b from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full"></div>
                          {section.listTitle}
                        </h5>
                      )}
                      <ul className="space-y-3 sm:space-y-4">
                        {section.list.map((item: string, itemIndex: number) => (
                          <li 
                            key={itemIndex}
                            className="flex items-start gap-3 sm:gap-4 text-foreground"
                          >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0 shadow-lg">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="leading-relaxed text-sm sm:text-base md:text-lg font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    })) || [];
  };

  // Original moveSelectedTabToTop function
  const moveSelectedTabToTop = (idx: number) => {
    if (!dictionary?.pourQuiPage?.cards) return;
    const allTabs = createTabsFromCards(dictionary.pourQuiPage.cards);
    const newTabs = [...allTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  // Original isActive function
  const isActive = (tab: any) => {
    return tab.value === tabs[0]?.value;
  };

  if (!dictionary || !active) {
    return (
      <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] animate-spin mx-auto mb-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-background absolute top-2 left-2"></div>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">Chargement...</p>
        </div>
      </div>
    );
  }

  const allTabs = dictionary?.pourQuiPage?.cards ? createTabsFromCards(dictionary.pourQuiPage.cards) : [];

  return (
    <div className="w-full">
      {/* Mobile-optimized tabs container */}
      <div
        className={cn(
          "flex flex-row items-center justify-start sm:justify-center overflow-x-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-1 sm:gap-2 px-2 sm:px-0",
          "[perspective:1000px] relative"
        )}
      >
        {allTabs.map((tab: any, idx: number) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 sm:px-6 py-3 sm:py-4 rounded-full gap-2 sm:gap-3 font-semibold text-xs sm:text-sm group flex-shrink-0",
              "min-w-max" // Prevent text wrapping on mobile
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-xl shadow-lg",
                  `bg-gradient-to-r ${
                    idx % 3 === 0 ? 'from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                    idx % 3 === 1 ? 'from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                    'from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
                  }`
                )}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 whitespace-nowrap ${
              active.value === tab.value 
                ? 'text-white'  
                : 'text-[rgb(var(--color-text-secondary))] group-hover:text-[rgb(var(--color-primary))]' 
            }`}>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      
      {/* Mobile-optimized content container */}
      <div ref={contentRef} className={cn("mt-16 sm:mt-24 md:mt-32 relative w-full h-full")}>
        {tabs.map((tab: any, idx: number) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.05, // Reduced scale difference for mobile
              top: hovering ? idx * -25 : 0, // Reduced hover offset for mobile
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 20, 0] : 0, // Reduced animation distance for mobile
            }}
            className={cn("w-full h-full absolute top-0 left-0")}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};