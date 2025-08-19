import React from 'react';
import styles from '@/styles/garden-animations.module.css';

interface SectionGardenProps {
  /** Garden theme variant */
  theme: 'grove' | 'zen' | 'herb' | 'forest' | 'canopy' | 'botanical';
  /** Position within the section */
  position?: 'header' | 'background' | 'footer';
  /** Height of the garden section */
  height?: 'sm' | 'md' | 'lg' | 'xl';
  /** Custom z-index for layering */
  zIndex?: number;
  /** Additional className for customization */
  className?: string;
}

/**
 * Themed garden sections that provide specific botanical environments
 * for different content areas. Each theme creates a unique atmosphere
 * while maintaining the overall sage green botanical sanctuary feel.
 */
export function SectionGarden({
  theme,
  position = 'background',
  height = 'md',
  zIndex = 2,
  className = ''
}: SectionGardenProps) {
  const getHeightClass = () => {
    switch (height) {
      case 'sm': return 'h-16';
      case 'md': return 'h-32';
      case 'lg': return 'h-48';
      case 'xl': return 'h-64';
      default: return 'h-32';
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case 'header': return 'top-0';
      case 'footer': return 'bottom-0';
      default: return 'top-0';
    }
  };

  const renderGroveTheme = () => (
    <>
      {/* Framing Trees */}
      <div className={`absolute top-0 left-0 w-32 ${getHeightClass()} ${styles.treeRustle} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 120 200" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="60" cy="40" rx="25" ry="15" fill="currentColor" opacity="0.15"/>
          <ellipse cx="60" cy="55" rx="35" ry="20" fill="currentColor" opacity="0.12"/>
          <ellipse cx="60" cy="75" rx="30" ry="18" fill="currentColor" opacity="0.14"/>
          <rect x="55" y="75" width="10" height="125" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>
      
      <div className={`absolute top-0 right-0 w-28 ${getHeightClass()} ${styles.treeRustle} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 110 200" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="55" cy="45" rx="20" ry="12" fill="currentColor" opacity="0.16"/>
          <ellipse cx="55" cy="60" rx="28" ry="16" fill="currentColor" opacity="0.13"/>
          <ellipse cx="55" cy="80" rx="25" ry="15" fill="currentColor" opacity="0.15"/>
          <rect x="50" y="80" width="10" height="120" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>

      {/* Flower Bushes */}
      <div className={`absolute bottom-0 left-1/4 w-16 h-12 ${styles.flowerBloom} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 60 45" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="20" cy="25" r="8" fill="currentColor" opacity="0.2"/>
          <circle cx="35" cy="20" r="6" fill="currentColor" opacity="0.25"/>
          <circle cx="45" cy="30" r="7" fill="currentColor" opacity="0.22"/>
        </svg>
      </div>
    </>
  );

  const renderZenTheme = () => (
    <>
      {/* Bonsai Trees */}
      <div className={`absolute top-4 left-8 w-20 h-16 ${styles.branchSway} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 80 60" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M40 50C35 45 30 35 25 25C30 20 40 18 50 25C55 35 50 45 40 50Z" fill="currentColor" opacity="0.18"/>
          <path d="M15 30C20 25 30 20 40 25C35 30 25 35 15 30Z" fill="currentColor" opacity="0.15"/>
          <rect x="38" y="45" width="4" height="15" fill="currentColor" opacity="0.12"/>
        </svg>
      </div>

      <div className={`absolute top-2 right-12 w-18 h-14 ${styles.branchSway} ${styles.delay4}`}>
        <svg width="100%" height="100%" viewBox="0 0 70 55" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M35 45C30 40 25 30 20 20C25 15 35 13 45 20C50 30 45 40 35 45Z" fill="currentColor" opacity="0.16"/>
          <rect x="33" y="40" width="4" height="15" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>

      {/* Meditation Stones */}
      <div className={`absolute bottom-2 left-1/3 w-24 h-8 ${styles.mossGrow} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 90 30" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <ellipse cx="20" cy="20" rx="12" ry="6" fill="currentColor" opacity="0.1"/>
          <ellipse cx="45" cy="18" rx="15" ry="8" fill="currentColor" opacity="0.12"/>
          <ellipse cx="70" cy="22" rx="10" ry="5" fill="currentColor" opacity="0.08"/>
        </svg>
      </div>
    </>
  );

  const renderHerbTheme = () => (
    <>
      {/* Organized Plant Rows */}
      <div className={`absolute bottom-0 left-0 w-full h-8 ${styles.grassWave} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 400 30" fill="none" className="text-[rgb(var(--color-tertiary))]">
          {Array.from({ length: 20 }, (_, i) => (
            <g key={i}>
              <circle cx={i * 20 + 10} cy="20" r="3" fill="currentColor" opacity="0.18"/>
              <line x1={i * 20 + 10} y1="15" x2={i * 20 + 10} y2="25" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
            </g>
          ))}
        </svg>
      </div>

      {/* Herb Clusters */}
      <div className={`absolute top-4 left-1/4 w-32 h-20 ${styles.fernSway} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 120 75" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M30 60C25 50 20 40 25 30C35 25 45 30 50 40C45 50 40 60 30 60Z" fill="currentColor" opacity="0.15"/>
          <path d="M70 65C65 55 60 45 65 35C75 30 85 35 90 45C85 55 80 65 70 65Z" fill="currentColor" opacity="0.17"/>
          <path d="M50 55C45 45 40 35 45 25C55 20 65 25 70 35C65 45 60 55 50 55Z" fill="currentColor" opacity="0.16"/>
        </svg>
      </div>

      {/* Medicinal Plant Details */}
      <div className={`absolute top-2 right-1/4 w-24 h-16 ${styles.budBloom} ${styles.delay3}`}>
        <svg width="100%" height="100%" viewBox="0 0 90 60" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <circle cx="25" cy="35" r="4" fill="currentColor" opacity="0.2"/>
          <circle cx="45" cy="30" r="5" fill="currentColor" opacity="0.22"/>
          <circle cx="65" cy="38" r="3" fill="currentColor" opacity="0.18"/>
          <path d="M25 30L25 45M45 25L45 40M65 33L65 48" stroke="currentColor" strokeWidth="1.5" opacity="0.15"/>
        </svg>
      </div>
    </>
  );

  const renderForestTheme = () => (
    <>
      {/* Dense Tree Coverage */}
      <div className={`absolute top-0 left-0 w-full ${getHeightClass()} ${styles.canopySway} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 800 200" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M0 80C100 70 200 90 300 75C400 60 500 80 600 70C700 85 750 75 800 80L800 0L0 0Z" fill="currentColor" opacity="0.12"/>
          <path d="M0 120C80 110 160 130 240 115C320 100 400 120 480 110C560 125 640 115 720 120C760 125 780 120 800 120L800 80L0 80Z" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>

      {/* Tree Trunks */}
      <div className={`absolute bottom-0 left-1/6 w-8 h-24 ${styles.trunkSway} ${styles.delay2}`}>
        <svg width="100%" height="100%" viewBox="0 0 30 90" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <rect x="10" y="0" width="10" height="90" fill="currentColor" opacity="0.12"/>
          <ellipse cx="15" cy="5" rx="8" ry="3" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>

      <div className={`absolute bottom-0 right-1/4 w-6 h-20 ${styles.trunkSway} ${styles.delay4}`}>
        <svg width="100%" height="100%" viewBox="0 0 25 75" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <rect x="8" y="0" width="8" height="75" fill="currentColor" opacity="0.1"/>
          <ellipse cx="12" cy="3" rx="6" ry="2" fill="currentColor" opacity="0.08"/>
        </svg>
      </div>
    </>
  );

  const renderCanopyTheme = () => (
    <>
      {/* Overhead Canopy */}
      <div className={`absolute top-0 left-0 w-full ${getHeightClass()} ${styles.canopySway} ${styles.delay1}`}>
        <svg width="100%" height="100%" viewBox="0 0 1000 150" fill="none" className="text-[rgb(var(--color-tertiary))]">
          <path d="M0 50C200 40 400 60 500 45C600 30 800 50 1000 40L1000 0L0 0Z" fill="currentColor" opacity="0.15"/>
          <path d="M0 80C150 85 300 75 450 80C600 85 750 75 1000 80L1000 50L0 50Z" fill="currentColor" opacity="0.12"/>
          <path d="M0 110C100 115 250 105 400 110C600 115 800 105 1000 110L1000 80L0 80Z" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>

      {/* Dappled Light Patches */}
      <div className={`absolute top-8 left-1/4 w-16 h-16 ${styles.sunbeamFilter} ${styles.delay3}`}>
        <div className="w-full h-full bg-gradient-radial from-[rgb(var(--color-tertiary))]/20 via-[rgb(var(--color-tertiary))]/10 to-transparent rounded-full" />
      </div>

      <div className={`absolute top-12 right-1/3 w-12 h-12 ${styles.sunbeamFilter} ${styles.delay5}`}>
        <div className="w-full h-full bg-gradient-radial from-[rgb(var(--color-tertiary))]/15 via-[rgb(var(--color-tertiary))]/8 to-transparent rounded-full" />
      </div>
    </>
  );

  const renderBotanicalTheme = () => (
    <>
      {/* Diverse Plant Collection */}
      <div className={`absolute top-0 left-0 w-full ${getHeightClass()} overflow-hidden`}>
        {/* Various Tree Species */}
        <div className={`absolute top-2 left-8 w-24 h-20 ${styles.treeRustle} ${styles.delay1}`}>
          <svg width="100%" height="100%" viewBox="0 0 90 75" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <ellipse cx="45" cy="20" rx="18" ry="10" fill="currentColor" opacity="0.16"/>
            <ellipse cx="45" cy="35" rx="22" ry="12" fill="currentColor" opacity="0.14"/>
            <rect x="40" y="40" width="10" height="35" fill="currentColor" opacity="0.1"/>
          </svg>
        </div>

        <div className={`absolute top-4 left-32 w-20 h-18 ${styles.fernSway} ${styles.delay2}`}>
          <svg width="100%" height="100%" viewBox="0 0 75 65" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M37 50C30 40 25 30 30 20C40 15 50 20 55 30C50 40 45 50 37 50Z" fill="currentColor" opacity="0.15"/>
            <path d="M20 45C15 35 10 25 15 15C25 10 35 15 40 25C35 35 30 45 20 45Z" fill="currentColor" opacity="0.17"/>
          </svg>
        </div>

        <div className={`absolute top-1 right-8 w-18 h-16 ${styles.branchWave} ${styles.delay3}`}>
          <svg width="100%" height="100%" viewBox="0 0 65 60" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <circle cx="32" cy="20" r="15" fill="currentColor" opacity="0.13"/>
            <circle cx="32" cy="35" r="12" fill="currentColor" opacity="0.15"/>
            <rect x="29" y="40" width="6" height="20" fill="currentColor" opacity="0.1"/>
          </svg>
        </div>

        {/* Ground Cover Variety */}
        <div className={`absolute bottom-0 left-0 w-full h-6 ${styles.grassWave} ${styles.delay4}`}>
          <svg width="100%" height="100%" viewBox="0 0 600 25" fill="none" className="text-[rgb(var(--color-tertiary))]">
            {Array.from({ length: 30 }, (_, i) => (
              <g key={i}>
                <circle cx={i * 20 + 10} cy="18" r={2 + (i % 3)} fill="currentColor" opacity={0.12 + (i % 3) * 0.02}/>
                <path d={`M${i * 20 + 10} 15L${i * 20 + 10} 22`} stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </>
  );

  const renderTheme = () => {
    switch (theme) {
      case 'grove': return renderGroveTheme();
      case 'zen': return renderZenTheme();
      case 'herb': return renderHerbTheme();
      case 'forest': return renderForestTheme();
      case 'canopy': return renderCanopyTheme();
      case 'botanical': return renderBotanicalTheme();
      default: return renderGroveTheme();
    }
  };

  return (
    <div 
      className={`absolute ${getPositionClass()} left-0 w-full ${getHeightClass()} overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex }}
    >
      {renderTheme()}
    </div>
  );
}