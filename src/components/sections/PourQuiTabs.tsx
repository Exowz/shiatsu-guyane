"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';

interface PourQuiTabsProps {
  lang: Locale;
}

export const PourQuiTabs = ({ lang }: PourQuiTabsProps) => {
  const [dictionary, setDictionary] = useState<any>(null);
  const [active, setActive] = useState<any>(null);
  const [tabs, setTabs] = useState<any[]>([]);
  const [hovering, setHovering] = useState(false);

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

  // Create tabs data from cards
  const createTabsFromCards = (cards: any[]) => {
    return cards?.map((card: any, index: number) => ({
      title: card.title,
      value: `card-${index}`,
      content: (
        <div className="w-full min-h-[1600px] bg-background/95 backdrop-blur-lg rounded-3xl shadow-xl p-8 lg:p-12">
          {/* Card image - Full size */}
          {card.src && (
            <div className="w-full h-80 mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Card header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {card.title}
            </h3>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl mx-auto">
              {card.description}
            </p>
          </div>

          {/* Card content sections */}
          {card.content && (
            <div className="grid gap-8 lg:gap-12">
              {card.content.map((section: any, sectionIndex: number) => (
                <div 
                  key={sectionIndex}
                  className="bg-muted/20 rounded-3xl p-8"
                >
                  <h4 className="text-2xl font-bold text-foreground mb-6 border-b border-border/20 pb-3">
                    {section.heading}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {section.text}
                  </p>
                  
                  {/* List section */}
                  {section.list && (
                    <div className="mt-8 bg-background/60 rounded-2xl p-6">
                      {section.listTitle && (
                        <h5 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                          <div className="w-2 h-6 bg-gradient-to-b from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full"></div>
                          {section.listTitle}
                        </h5>
                      )}
                      <ul className="space-y-4">
                        {section.list.map((item: string, itemIndex: number) => (
                          <li 
                            key={itemIndex}
                            className="flex items-start gap-4 text-foreground"
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] flex items-center justify-center mt-1 flex-shrink-0 shadow-lg">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="leading-relaxed text-lg font-medium">{item}</span>
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
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] animate-spin mx-auto mb-4">
            <div className="w-12 h-12 rounded-full bg-background absolute top-2 left-2"></div>
          </div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  const allTabs = createTabsFromCards(dictionary.pourQuiPage.cards);

  return (
    <div className="w-full">
      {/* Original tabs container - EXACT replica */}
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-1"
        )}
      >
        {allTabs.map((tab: any, idx: number) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-6 py-4 rounded-full gap-3 font-semibold text-sm group")}
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
            <span className={`relative z-10 transition-colors duration-300 ${
                  active.value === tab.value 
                    ? 'text-white'  
                    : 'text-[rgb(var(--color-text-secondary))] group-hover:text-[rgb(var(--color-primary))]' 
                }`}>
                  {tab.title}
                </span>
          </button>
        ))}
      </div>
      
      {/* Original FadeInDiv - EXACT replica */}
      <div className={cn("mt-32 relative w-full h-full")}>
        {tabs.map((tab: any, idx: number) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
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
