'use client';

import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  [key: string]: any;
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

  // CSS keyframes are injected directly
  const marqueeKeyframes = `
    @keyframes marquee-horizontal {
      from { transform: translateX(0); }
      to { transform: translateX(calc(-100% - var(--gap, 1rem))); }
    }
    @keyframes marquee-vertical {
      from { transform: translateY(0); }
      to { transform: translateY(calc(-100% - var(--gap, 1rem))); }
    }
  `;

  // We use inline styles to define the layout, bypassing Tailwind config issues
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    overflow: 'hidden',
    padding: '0.5rem', // p-2
    flexDirection: vertical ? 'column' : 'row',
    gap: '1rem', // This applies the gap between the two scrolling blocks
  };

  const scrollingStyle: React.CSSProperties = {
    '--gap': '1rem',
    '--duration': '40s',
    display: 'grid',
    gridAutoFlow: vertical ? 'row' : 'column',
    gap: 'var(--gap)',
    animationName: vertical ? 'marquee-vertical' : 'marquee-horizontal',
    animationDuration: 'var(--duration)',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDirection: reverse ? 'reverse' : 'normal',
    // We control pause-on-hover with JavaScript state
    animationPlayState: pauseOnHover && isHovering ? 'paused' : 'running',
  };

  return (
    <>
      <style>{marqueeKeyframes}</style>
      <div
        {...props}
        className={cn("group", className)} // The outer div no longer needs flex or gap classes
        style={containerStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="shrink-0" style={scrollingStyle}>
          {children}
        </div>
        <div className="shrink-0" style={scrollingStyle} aria-hidden="true">
          {children}
        </div>
      </div>
    </>
  );
}