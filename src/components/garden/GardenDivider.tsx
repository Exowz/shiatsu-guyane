import React from 'react';
import styles from '@/styles/garden-animations.module.css';

interface GardenDividerProps {
  /** Divider type for different transition styles */
  type: 'vine' | 'branch' | 'flower' | 'root' | 'canopy' | 'organic';
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Custom z-index for layering */
  zIndex?: number;
  /** Additional className for customization */
  className?: string;
  /** Invert the direction of the divider */
  inverted?: boolean;
}

/**
 * Garden divider components that create natural transitions between sections.
 * Each type provides a different botanical element for seamless flow
 * throughout the website's botanical sanctuary experience.
 */
export function GardenDivider({
  type,
  orientation = 'horizontal',
  size = 'md',
  zIndex = 5,
  className = '',
  inverted = false
}: GardenDividerProps) {
  const getSizeClass = () => {
    if (orientation === 'horizontal') {
      switch (size) {
        case 'sm': return 'h-8 w-full';
        case 'md': return 'h-16 w-full';
        case 'lg': return 'h-24 w-full';
        default: return 'h-16 w-full';
      }
    } else {
      switch (size) {
        case 'sm': return 'w-8 h-full';
        case 'md': return 'w-16 h-full';
        case 'lg': return 'w-24 h-full';
        default: return 'w-16 h-full';
      }
    }
  };

  const renderVineDivider = () => (
    <div className={`${getSizeClass()} relative overflow-hidden`}>
      {/* Main Vine Structure */}
      <div className={`absolute inset-0 ${styles.vineGrow} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path 
            d={inverted ? "M0 50C200 30 400 70 600 40C700 50 750 60 800 50" : "M0 50C200 70 400 30 600 60C700 50 750 40 800 50"} 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.15"
          />
          <path 
            d={inverted ? "M0 50C200 35 400 65 600 45C700 52 750 58 800 50" : "M0 50C200 65 400 35 600 55C700 52 750 42 800 50"} 
            stroke="currentColor" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Vine Leaves */}
      <div className={`absolute top-2 left-1/6 w-6 h-4 ${styles.leafRustle} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 24 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="12" cy="8" rx="8" ry="6" fill="currentColor" opacity="0.18"/>
          <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
        </svg>
      </div>

      <div className={`absolute top-1 right-1/4 w-5 h-3 ${styles.leafRustle} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 20 12" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="10" cy="6" rx="6" ry="4" fill="currentColor" opacity="0.16"/>
          <line x1="4" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.12"/>
        </svg>
      </div>

      <div className={`absolute bottom-2 left-1/2 w-4 h-3 ${styles.leafRustle} ${styles.delay4}`}>
        <svg width="100%" height="100%" viewBox="0 0 16 12" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="8" cy="6" rx="5" ry="4" fill="currentColor" opacity="0.17"/>
        </svg>
      </div>
    </div>
  );

  const renderBranchDivider = () => (
    <div className={`${getSizeClass()} relative overflow-hidden`}>
      {/* Branch Structure */}
      <div className={`absolute inset-0 ${styles.branchWave} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path 
            d="M0 50L150 50C200 40 250 60 300 50C350 40 400 60 450 50C500 60 550 40 600 50L800 50" 
            stroke="currentColor" 
            strokeWidth="4" 
            fill="none" 
            opacity="0.12"
          />
          {/* Branch offshoots */}
          <path d="M150 50L180 30M300 50L330 70M450 50L420 35M600 50L630 65" stroke="currentColor" strokeWidth="2" opacity="0.1"/>
        </svg>
      </div>

      {/* Small Twigs */}
      <div className={`absolute top-3 left-1/5 w-8 h-6 ${styles.branchSway} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 30 20" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M5 10L25 10M15 5L25 10L15 15" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
        </svg>
      </div>

      <div className={`absolute bottom-3 right-1/3 w-6 h-4 ${styles.branchSway} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 24 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M4 8L20 8M12 4L20 8L12 12" stroke="currentColor" strokeWidth="1" opacity="0.13"/>
        </svg>
      </div>
    </div>
  );

  const renderFlowerDivider = () => (
    <div className={`${getSizeClass()} relative overflow-hidden`}>
      {/* Flower Stem Base */}
      <div className={`absolute inset-0 ${styles.stemGrow} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path 
            d="M0 80C200 75 400 85 600 75C700 80 750 82 800 80" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.12"
          />
        </svg>
      </div>

      {/* Flowers */}
      <div className={`absolute top-1 left-1/6 w-8 h-8 ${styles.flowerBloom} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.18"/>
          <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.25"/>
          <circle cx="10" cy="16" r="3" fill="currentColor" opacity="0.15"/>
          <circle cx="22" cy="16" r="3" fill="currentColor" opacity="0.15"/>
          <circle cx="16" cy="10" r="3" fill="currentColor" opacity="0.15"/>
          <circle cx="16" cy="22" r="3" fill="currentColor" opacity="0.15"/>
        </svg>
      </div>

      <div className={`absolute top-2 right-1/4 w-6 h-6 ${styles.flowerBloom} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.16"/>
          <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.22"/>
        </svg>
      </div>

      <div className={`absolute top-0 left-1/2 w-7 h-7 ${styles.flowerBloom} ${styles.delay4}`}>
        <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="14" cy="14" r="5" fill="currentColor" opacity="0.17"/>
          <circle cx="14" cy="14" r="2.5" fill="currentColor" opacity="0.23"/>
        </svg>
      </div>
    </div>
  );

  const renderRootDivider = () => (
    <div className={`${getSizeClass()} relative overflow-hidden`}>
      {/* Underground Root Network */}
      <div className={`absolute inset-0 ${styles.rootPulse} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path 
            d="M0 20C100 25 200 15 300 20C400 25 500 15 600 20C700 25 750 20 800 22" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.08"
          />
          <path 
            d="M0 40C150 45 300 35 450 40C600 45 700 35 800 42" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.06"
          />
          <path 
            d="M0 60C200 65 400 55 600 60C700 65 750 60 800 62" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.1"
          />
          {/* Root branches */}
          <path d="M200 20L220 35M400 25L380 40M600 20L620 30" stroke="currentColor" strokeWidth="1" opacity="0.05"/>
        </svg>
      </div>

      {/* Root Nodes */}
      <div className={`absolute top-4 left-1/4 w-3 h-3 ${styles.rootPulse} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="6" cy="6" r="4" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>

      <div className={`absolute bottom-2 right-1/3 w-4 h-4 ${styles.rootPulse} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="8" cy="8" r="5" fill="currentColor" opacity="0.08"/>
        </svg>
      </div>
    </div>
  );

  const renderCanopyDivider = () => (
    <div className={`${getSizeClass()} relative overflow-hidden`}>
      {/* Canopy Transition */}
      <div className={`absolute inset-0 ${styles.canopySway} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path 
            d={inverted ? "M0 80C200 60 400 100 600 70C700 80 750 90 800 80L800 100L0 100Z" : "M0 20C200 40 400 0 600 30C700 20 750 10 800 20L800 0L0 0Z"} 
            fill="currentColor" 
            opacity="0.12"
          />
          <path 
            d={inverted ? "M0 70C150 55 300 85 450 65C600 75 700 85 800 75L800 80L0 80Z" : "M0 30C150 45 300 15 450 35C600 25 700 15 800 25L800 20L0 20Z"} 
            fill="currentColor" 
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Hanging Elements */}
      <div className={`absolute ${inverted ? 'bottom-2' : 'top-2'} left-1/5 w-2 h-8 ${styles.petalFloat} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 8 30" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="4" cy="25" rx="2" ry="3" fill="currentColor" opacity="0.15"/>
          <line x1="4" y1="0" x2="4" y2="22" stroke="currentColor" strokeWidth="0.5" opacity="0.12"/>
        </svg>
      </div>

      <div className={`absolute ${inverted ? 'bottom-1' : 'top-1'} right-1/4 w-1.5 h-6 ${styles.petalFloat} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 6 24" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="3" cy="20" rx="1.5" ry="2" fill="currentColor" opacity="0.13"/>
          <line x1="3" y1="0" x2="3" y2="18" stroke="currentColor" strokeWidth="0.3" opacity="0.1"/>
        </svg>
      </div>
    </div>
  );

  const renderOrganicDivider = () => (
    <div className={`${getSizeClass()} relative overflow-hidden`}>
      {/* Organic Flow */}
      <div className={`absolute inset-0 ${styles.driftUpward} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 800 100" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path 
            d="M0 50C50 30 100 70 150 45C200 20 250 75 300 40C350 65 400 25 450 55C500 30 550 70 600 45C650 20 700 65 750 40C775 52 787 48 800 50" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.15"
          />
          <path 
            d="M0 50C75 40 125 60 200 50C275 40 325 60 400 50C475 40 525 60 600 50C675 40 725 60 800 50" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.12"
          />
        </svg>
      </div>

      {/* Organic Elements */}
      <div className={`absolute top-2 left-1/6 w-4 h-4 ${styles.floatDelicate} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M8 2C10 4 10 6 8 8C6 6 6 4 8 2ZM8 8C10 10 10 12 8 14C6 12 6 10 8 8Z" fill="currentColor" opacity="0.16"/>
        </svg>
      </div>

      <div className={`absolute bottom-3 right-1/4 w-3 h-3 ${styles.floatGentle} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="6" cy="6" r="4" fill="currentColor" opacity="0.14"/>
        </svg>
      </div>
    </div>
  );

  const renderDividerType = () => {
    switch (type) {
      case 'vine': return renderVineDivider();
      case 'branch': return renderBranchDivider();
      case 'flower': return renderFlowerDivider();
      case 'root': return renderRootDivider();
      case 'canopy': return renderCanopyDivider();
      case 'organic': return renderOrganicDivider();
      default: return renderVineDivider();
    }
  };

  return (
    <div 
      className={`relative overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex }}
    >
      {renderDividerType()}
    </div>
  );
}