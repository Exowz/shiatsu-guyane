import React from 'react';
import styles from '@/styles/garden-animations.module.css';

interface GardenBackgroundProps {
  /** Background intensity: light, medium, or dense botanical coverage */
  intensity?: 'light' | 'medium' | 'dense';
  /** Enable/disable wildlife elements like birds and butterflies */
  wildlife?: boolean;
  /** Enable/disable atmospheric effects like sunbeams */
  atmosphere?: boolean;
  /** Custom z-index for layering */
  zIndex?: number;
  /** Additional className for customization */
  className?: string;
}

/**
 * Base garden background component that provides consistent botanical theming
 * across the entire website. Creates layered depth with trees, foliage, and
 * atmospheric effects using sage green color palette.
 */
export function GardenBackground({
  intensity = 'medium',
  wildlife = true,
  atmosphere = true,
  zIndex = 1,
  className = ''
}: GardenBackgroundProps) {
  const getOpacityForIntensity = (base: number) => {
    const multipliers = {
      light: 0.5,
      medium: 1,
      dense: 1.5
    };
    return Math.min(base * multipliers[intensity], 0.25);
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ zIndex }}>
      {/* Background Tree Canopy Layer */}
      <div 
        className={`absolute top-0 left-0 w-full h-32 ${styles.canopySway} ${styles.delay1}`}
        style={{ opacity: getOpacityForIntensity(0.12) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 200" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M0 60C200 50 400 70 600 55C800 40 1000 60 1200 50L1200 0L0 0Z" fill="currentColor"/>
          <path d="M0 80C150 85 350 75 500 80C700 85 900 75 1200 80L1200 60L0 60Z" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>

      {/* Mid-ground Foliage Elements */}
      <div 
        className={`absolute top-8 right-0 w-64 h-64 ${styles.branchWave} ${styles.delay3}`}
        style={{ opacity: getOpacityForIntensity(0.15) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M180 50C160 60 140 80 120 100C110 120 100 140 90 160C95 150 105 130 120 110C140 90 160 70 180 50Z" fill="currentColor"/>
          <path d="M190 70C170 75 150 85 130 100C125 110 120 120 115 130C118 125 125 115 135 105C150 95 170 80 190 70Z" fill="currentColor" opacity="0.8"/>
        </svg>
      </div>

      <div 
        className={`absolute top-20 left-0 w-48 h-48 ${styles.fernSway} ${styles.delay5}`}
        style={{ opacity: getOpacityForIntensity(0.18) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 150 150" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M20 140C25 120 35 100 50 85C70 65 95 50 120 40C110 55 90 75 70 95C50 115 35 130 20 140Z" fill="currentColor"/>
          <path d="M25 130C30 115 40 100 55 90C70 80 90 70 110 65C100 75 85 90 70 105C55 120 40 125 25 130Z" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>

      {/* Floating Botanical Elements */}
      <div 
        className={`absolute top-1/4 left-1/4 w-8 h-8 ${styles.floatDelicate} ${styles.delay2}`}
        style={{ opacity: getOpacityForIntensity(0.6) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M16 4C20 8 20 12 16 16C12 12 12 8 16 4Z" fill="currentColor"/>
          <path d="M16 16C20 20 20 24 16 28C12 24 12 20 16 16Z" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>

      <div 
        className={`absolute top-1/3 right-1/3 w-6 h-6 ${styles.petalFloat} ${styles.delay4}`}
        style={{ opacity: getOpacityForIntensity(0.5) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="12" cy="12" r="8" fill="currentColor"/>
          <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>

      {/* Wildlife Elements */}
      {wildlife && (
        <>
          {/* Flying Bird */}
          <div 
            className={`absolute top-16 left-0 w-6 h-4 ${styles.birdFly} ${styles.delay6}`}
            style={{ opacity: getOpacityForIntensity(0.4) }}
          >
            <svg width="100%" height="100%" viewBox="0 0 24 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
              <path d="M2 8C6 4 10 4 12 8C14 4 18 4 22 8C18 12 14 12 12 8C10 12 6 12 2 8Z" fill="currentColor"/>
            </svg>
          </div>

          {/* Butterfly */}
          <div 
            className={`absolute top-1/2 left-1/2 w-8 h-6 ${styles.butterflyDance} ${styles.delay8}`}
            style={{ opacity: getOpacityForIntensity(0.5) }}
          >
            <svg width="100%" height="100%" viewBox="0 0 32 24" fill="none" className="text-[rgb(var(--color-tertiary))]">
              <ellipse cx="12" cy="8" rx="6" ry="4" fill="currentColor"/>
              <ellipse cx="20" cy="8" rx="6" ry="4" fill="currentColor"/>
              <ellipse cx="12" cy="16" rx="4" ry="3" fill="currentColor" opacity="0.8"/>
              <ellipse cx="20" cy="16" rx="4" ry="3" fill="currentColor" opacity="0.8"/>
              <line x1="16" y1="6" x2="16" y2="18" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </>
      )}

      {/* Atmospheric Effects */}
      {atmosphere && (
        <>
          {/* Sunbeam Filter */}
          <div 
            className={`absolute top-0 left-1/4 w-32 h-full ${styles.sunbeamFilter} ${styles.delay7}`}
            style={{ opacity: getOpacityForIntensity(0.05) }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[rgb(var(--color-tertiary))] via-transparent to-transparent transform -skew-x-12" />
          </div>

          <div 
            className={`absolute top-0 right-1/3 w-24 h-full ${styles.sunbeamFilter} ${styles.delay9}`}
            style={{ opacity: getOpacityForIntensity(0.03) }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[rgb(var(--color-tertiary))] via-transparent to-transparent transform skew-x-6" />
          </div>

          {/* Shadow Patches */}
          <div 
            className={`absolute bottom-0 left-0 w-48 h-16 ${styles.shadowShift} ${styles.delay10}`}
            style={{ opacity: getOpacityForIntensity(0.08) }}
          >
            <div className="w-full h-full bg-gradient-to-t from-[rgb(var(--color-tertiary))] to-transparent transform skew-x-3" />
          </div>
        </>
      )}

      {/* Ground Level Moss and Vegetation */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-8 ${styles.mossGrow} ${styles.delay1}`}
        style={{ opacity: getOpacityForIntensity(0.1) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 40" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M0 40C100 35 200 30 300 35C400 40 500 35 600 30C700 35 800 40 900 35C1000 30 1100 35 1200 40L1200 40L0 40Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Vine Accents */}
      <div 
        className={`absolute top-1/2 right-0 w-4 h-32 ${styles.vineGrow} ${styles.delay4}`}
        style={{ opacity: getOpacityForIntensity(0.12) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 16 120" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M8 0C6 20 10 40 8 60C10 80 6 100 8 120" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="6" cy="20" r="2" fill="currentColor" opacity="0.7"/>
          <circle cx="10" cy="40" r="1.5" fill="currentColor" opacity="0.7"/>
          <circle cx="6" cy="80" r="2" fill="currentColor" opacity="0.7"/>
          <circle cx="10" cy="100" r="1.5" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>

      <div 
        className={`absolute top-1/3 left-0 w-4 h-24 ${styles.vineGrow} ${styles.delay6}`}
        style={{ opacity: getOpacityForIntensity(0.1) }}
      >
        <svg width="100%" height="100%" viewBox="0 0 16 90" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M8 0C10 15 6 30 8 45C6 60 10 75 8 90" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="10" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
          <circle cx="6" cy="45" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="10" cy="75" r="1.5" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>
    </div>
  );
}