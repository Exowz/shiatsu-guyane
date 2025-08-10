"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { User, Users, Heart, Star } from "lucide-react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
  icon?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  
  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  
  const [hovering, setHovering] = useState(false);

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
            {propTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn(
                  "relative px-6 py-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-3 font-semibold text-sm group",
                  tabClassName
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
                      activeTabClassName || `bg-gradient-to-r ${
                        idx % 3 === 0 ? 'from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
                        idx % 3 === 1 ? 'from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
                        'from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
                      }`
                    )}
                  />
                )}
                
                {/* Tab icon */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  active.value === tab.value 
                    ? 'text-white' 
                    : 'text-[rgb(var(--color-text-secondary))] group-hover:text-[rgb(var(--color-primary))]'
                }`}>
                  {tab.icon || (
                    idx % 4 === 0 ? <User className="w-4 h-4" /> :
                    idx % 4 === 1 ? <Users className="w-4 h-4" /> :
                    idx % 4 === 2 ? <Heart className="w-4 h-4" /> :
                    <Star className="w-4 h-4" />
                  )}
                </span>
                
                {/* Tab title */}
                <span className={`relative z-10 transition-colors duration-300 ${
                  active.value === tab.value 
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
      
      {/* Enhanced content area */}
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("", contentClassName)}
      />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  
  return (
    <div className="relative w-full min-h-[800px]">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.02, // Very subtle scale difference
            top: hovering ? idx * -10 : 0, // Reduced movement
            zIndex: tabs.length - idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 10, 0] : 0, // Subtle bounce
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
          className={cn("w-full absolute top-0 left-0", className)}
        >
          {/* Enhanced content container with full image support */}
          <div className="bg-card/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Content */}
            <div className="relative z-10">
              {tab.content}
            </div>
            
            {/* Bottom accent line */}
            <div className={`absolute bottom-0 left-0 h-1 w-full ${
              idx % 3 === 0 ? 'bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-secondary))]' :
              idx % 3 === 1 ? 'bg-gradient-to-r from-[rgb(var(--color-secondary))] to-[rgb(var(--color-tertiary))]' :
              'bg-gradient-to-r from-[rgb(var(--color-tertiary))] to-[rgb(var(--color-primary))]'
            }`}></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};