"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import type { Dictionary } from '@/types/dictionary';
import Image from 'next/image';

type TabData = {
  title: string;
  value: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

interface GlassmorphismTabsProps {
  tabs: TabData[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  dictionary?: Dictionary;
}

export const GlassmorphismTabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: GlassmorphismTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabData>(tabs[0]);

  return (
    <div className="w-full">
      {/* Enhanced tabs container with glassmorphism */}
      <div className="flex justify-center mb-12">
        <div className="bg-card/60 backdrop-blur-md rounded-2xl p-2 shadow-xl">
          <div
            className={cn(
              "flex flex-row items-center justify-center gap-2 relative overflow-hidden",
              containerClassName
            )}
          >
            {tabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative px-6 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3 font-semibold text-sm group",
                  tabClassName
                )}
              >
                {activeTab.value === tab.value && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 rounded-xl shadow-lg",
                      activeTabClassName || `bg-gradient-to-r ${
                        idx % 3 === 0 ? 'from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                        idx % 3 === 1 ? 'from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                        'from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
                      }`
                    )}
                  />
                )}
                
                {/* Tab icon */}
                {tab.icon && (
                  <span className={`relative z-10 transition-colors duration-300 ${
                    activeTab.value === tab.value 
                      ? 'text-white' 
                      : 'text-[rgb(var(--color-text-secondary))] group-hover:text-[rgb(var(--color-primary))]'
                  }`}>
                    {tab.icon}
                  </span>
                )}
                
                {/* Tab title */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeTab.value === tab.value 
                    ? 'text-white' 
                    : 'text-[rgb(var(--color-text))] group-hover:text-[rgb(var(--color-primary))]'
                }`}>
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content area - NO absolute positioning */}
      <div className={cn("w-full", contentClassName)}>
        <motion.div
          key={activeTab.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full"
        >
          {activeTab.content}
        </motion.div>
      </div>
    </div>
  );
};

// Helper function to create tab data from card data
export const createTabsFromCards = (cards: Record<string, unknown>[], dictionary?: Dictionary) => {
  const getIconForCard = (index: number) => {
    const icons = [
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>,
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
      </svg>,
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>,
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>,
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>,
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" key={index}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ];
    
    return icons[index % icons.length];
  };

  return cards?.map((card: Record<string, unknown>, index: number) => ({
    title: card.title as string,
    value: `card-${index}`,
    icon: getIconForCard(index),
    content: (
      <div className="w-full h-[1500px] bg-background/95 backdrop-blur-md rounded-3xl border border-border/50 shadow-xl p-8 lg:p-12 flex flex-col">
        {/* Card image - Full size */}
        {(card.src && (
          <div className="w-full h-80 mb-8 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={card.src as string}
              alt={card.title as string}
              width={800}
              height={600}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )) as React.ReactNode}

        {/* Card header */}
        <div className="text-center mb-8 flex-shrink-0">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {card.title as React.ReactNode}
          </h3>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl mx-auto">
            {card.description as React.ReactNode}
          </p>
        </div>

        {/* Card content sections */}
        <div className="flex-grow">
          {(card.content && Array.isArray(card.content) && (
            <div className="grid gap-6 lg:gap-8">
              {(card.content as Record<string, unknown>[]).map((section: Record<string, unknown>, sectionIndex: number) => (
                <div 
                  key={sectionIndex}
                  className="bg-muted/20 rounded-3xl p-6"
                >
                  <h4 className="text-2xl font-bold text-foreground mb-4 border-b border-border/20 pb-3">
                    {section.heading as React.ReactNode}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {section.text as React.ReactNode}
                  </p>
                  
                  {/* List section */}
                  {(section.list && Array.isArray(section.list) && (
                    <div className="mt-6 bg-background/60 rounded-2xl p-4">
                      {(section.listTitle && (
                        <h5 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                          <div className="w-2 h-6 bg-gradient-to-b from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] rounded-full"></div>
                          {section.listTitle as React.ReactNode}
                        </h5>
                      )) as React.ReactNode}
                      <ul className="space-y-3">
                        {(section.list as string[]).map((item: string, itemIndex: number) => (
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
                  )) as React.ReactNode}
                </div>
              ))}
            </div>
          )) as React.ReactNode}
        </div>

        {/* Call to action - Fixed at bottom */}
        <div className="mt-8 text-center flex-shrink-0">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <Heart className="w-6 h-6" />
            {((dictionary as Dictionary | undefined)?.pages?.servicesPricing?.learnMore as React.ReactNode) || 'En savoir plus'}
          </button>
        </div>
      </div>
    ),
  })) || [];
};