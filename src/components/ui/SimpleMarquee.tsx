// src/app/components/ui/SimpleMarquee.tsx
'use client';

import React from 'react';

// This is a simplified marquee for debugging.
// It includes its own CSS to bypass any project configuration issues.
export const SimpleMarquee = ({ children }: { children: React.ReactNode }) => {
  // The raw CSS keyframes for a scrolling animation
  const keyframes = `
    @keyframes simpleMarqueeAnimation {
      from { transform: translateX(0); }
      to { transform: translateX(-100%); }
    }
  `;

  // The style for the scrolling element
  const scrollingStyle: React.CSSProperties = {
    display: 'flex',
    flexShrink: 0,
    gap: '1rem', // This should match the gap in the parent
    minWidth: '100%',
    animation: 'simpleMarqueeAnimation 40s linear infinite',
  };

  return (
    <>
      <style>{keyframes}</style>
      <div 
        style={{
          display: 'flex',
          width: 'max-content', // Allow the content to be wider than the screen
        }}
      >
        {/* We render the content twice to create a seamless loop */}
        <div style={scrollingStyle}>
          {children}
        </div>
        <div style={scrollingStyle} aria-hidden="true">
          {children}
        </div>
      </div>
    </>
  );
};