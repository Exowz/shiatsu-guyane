'use client';

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import type { Dictionary } from '@/types/dictionary';

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced CSS keyframes with smoother transitions
  const marqueeKeyframes = `
    @keyframes marquee-horizontal {
      from { transform: translateX(0); }
      to { transform: translateX(calc(-100% - var(--gap, 1rem))); }
    }
    @keyframes marquee-vertical {
      from { transform: translateY(0); }
      to { transform: translateY(calc(-100% - var(--gap, 1rem))); }
    }
    @keyframes marquee-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  // Enhanced container styling with glassmorphism
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    overflow: 'hidden',
    padding: '1rem',
    flexDirection: vertical ? 'column' : 'row',
    gap: '1.5rem',
    position: 'relative',
    background: 'rgba(var(--color-surface), 0.3)',
    backdropFilter: 'blur(12px)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    animation: 'marquee-fade-in 0.6s ease-out',
  };

  // Enhanced scrolling animation with smoother timing
  const scrollingStyle: React.CSSProperties & { [key: string]: any } = {
    '--gap': '1.5rem',
    '--duration': '45s', // Slightly slower for better readability
    display: 'grid',
    gridAutoFlow: vertical ? 'row' : 'column',
    gap: 'var(--gap)',
    animationName: vertical ? 'marquee-vertical' : 'marquee-horizontal',
    animationDuration: 'var(--duration)',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDirection: reverse ? 'reverse' : 'normal',
    animationPlayState: pauseOnHover && isHovering ? 'paused' : 'running',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <style>{marqueeKeyframes}</style>
      <div
        {...props}
        className={cn("group relative", className)}
        style={containerStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Enhanced gradient overlays for smooth fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to right, 
              rgba(var(--color-surface), 0.8), 
              rgba(var(--color-surface), 0.4), 
              transparent
            )`
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to left, 
              rgba(var(--color-surface), 0.8), 
              rgba(var(--color-surface), 0.4), 
              transparent
            )`
          }}
        />

        <div className="shrink-0" style={scrollingStyle}>
          {children}
        </div>
        <div className="shrink-0" style={scrollingStyle} aria-hidden="true">
          {children}
        </div>

        {/* Subtle hover indication */}
        {pauseOnHover && (
          <div className={`absolute inset-0 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-card-foreground shadow-lg">
              En pause
            </div>
          </div>
        )}
      </div>
    </>
  );
}