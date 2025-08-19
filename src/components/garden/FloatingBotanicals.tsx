import React from 'react';
import styles from '@/styles/garden-animations.module.css';

interface FloatingBotanicalsProps {
  /** Density of floating botanical elements */
  density?: 'light' | 'medium' | 'dense';
  /** Types of elements to include */
  elements?: ('leaves' | 'petals' | 'seeds' | 'pollen' | 'particles')[];
  /** Enable wildlife elements like butterflies */
  wildlife?: boolean;
  /** Custom z-index for layering */
  zIndex?: number;
  /** Additional className for customization */
  className?: string;
  /** Area bounds for element positioning */
  bounds?: 'full' | 'top' | 'center' | 'bottom';
}

/**
 * Floating botanical elements that create ambient atmosphere throughout
 * the website. Provides gentle movement and natural details that enhance
 * the immersive garden experience.
 */
export function FloatingBotanicals({
  density = 'medium',
  elements = ['leaves', 'petals', 'seeds'],
  wildlife = true,
  zIndex = 10,
  className = '',
  bounds = 'full'
}: FloatingBotanicalsProps) {
  const getElementCount = () => {
    const counts = {
      light: { leaves: 3, petals: 2, seeds: 2, pollen: 1, particles: 2 },
      medium: { leaves: 5, petals: 4, seeds: 3, pollen: 2, particles: 4 },
      dense: { leaves: 8, petals: 6, seeds: 5, pollen: 4, particles: 6 }
    };
    return counts[density];
  };

  const getBoundsClass = () => {
    switch (bounds) {
      case 'top': return 'top-0 h-1/3';
      case 'center': return 'top-1/3 h-1/3';
      case 'bottom': return 'bottom-0 h-1/3';
      default: return 'top-0 h-full';
    }
  };

  const getRandomPosition = (index: number) => {
    // Use index for consistent positioning
    const positions = [
      { top: '10%', left: '15%' },
      { top: '25%', right: '20%' },
      { top: '40%', left: '30%' },
      { top: '15%', right: '35%' },
      { top: '60%', left: '10%' },
      { top: '35%', right: '15%' },
      { top: '70%', left: '40%' },
      { top: '20%', left: '60%' },
      { top: '80%', right: '25%' },
      { top: '45%', left: '70%' },
      { top: '85%', left: '25%' },
      { top: '50%', right: '40%' }
    ];
    return positions[index % positions.length];
  };

  const getRandomDelay = (index: number) => {
    const delays = [
      styles.delay1, styles.delay2, styles.delay3, styles.delay4,
      styles.delay5, styles.delay6, styles.delay7, styles.delay8,
      styles.delay9, styles.delay10
    ];
    return delays[index % delays.length];
  };

  const renderLeaves = () => {
    const count = getElementCount().leaves;
    return Array.from({ length: count }, (_, i) => {
      const position = getRandomPosition(i);
      const animations = [styles.floatDelicate, styles.floatGentle, styles.floatSlow];
      const animation = animations[i % animations.length];
      const delay = getRandomDelay(i);
      
      return (
        <div
          key={`leaf-${i}`}
          className={`absolute w-6 h-4 ${animation} ${delay}`}
          style={{
            ...position,
            opacity: 0.4 + (i % 3) * 0.1
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 24 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <path d="M2 8C2 4 6 2 12 2C18 2 22 4 22 8C22 12 18 14 12 14C6 14 2 12 2 8Z" fill="currentColor"/>
            <path d="M2 8L22 8" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
            <path d="M12 2C8 4 6 6 8 8C6 10 8 12 12 14" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
          </svg>
        </div>
      );
    });
  };

  const renderPetals = () => {
    const count = getElementCount().petals;
    return Array.from({ length: count }, (_, i) => {
      const position = getRandomPosition(i + 10);
      const animations = [styles.petalDance, styles.driftUpward, styles.petalFloat];
      const animation = animations[i % animations.length];
      const delay = getRandomDelay(i + 1);
      
      return (
        <div
          key={`petal-${i}`}
          className={`absolute w-4 h-4 ${animation} ${delay}`}
          style={{
            ...position,
            opacity: 0.3 + (i % 3) * 0.08
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <ellipse cx="8" cy="8" rx="6" ry="4" fill="currentColor"/>
            <ellipse cx="8" cy="8" rx="3" ry="2" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
      );
    });
  };

  const renderSeeds = () => {
    const count = getElementCount().seeds;
    return Array.from({ length: count }, (_, i) => {
      const position = getRandomPosition(i + 20);
      const animations = [styles.floatSlow, styles.gentleRotate];
      const animation = animations[i % animations.length];
      const delay = getRandomDelay(i + 2);
      
      return (
        <div
          key={`seed-${i}`}
          className={`absolute w-3 h-3 ${animation} ${delay}`}
          style={{
            ...position,
            opacity: 0.25 + (i % 2) * 0.1
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <circle cx="6" cy="6" r="4" fill="currentColor"/>
            <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.7"/>
            <path d="M6 2L6 10M2 6L10 6" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          </svg>
        </div>
      );
    });
  };

  const renderPollen = () => {
    const count = getElementCount().pollen;
    return Array.from({ length: count }, (_, i) => {
      const position = getRandomPosition(i + 30);
      const delay = getRandomDelay(i + 3);
      
      return (
        <div
          key={`pollen-${i}`}
          className={`absolute w-2 h-2 ${styles.dewdropShimmer} ${delay}`}
          style={{
            ...position,
            opacity: 0.2 + (i % 2) * 0.05
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <circle cx="4" cy="4" r="3" fill="currentColor"/>
          </svg>
        </div>
      );
    });
  };

  const renderParticles = () => {
    const count = getElementCount().particles;
    return Array.from({ length: count }, (_, i) => {
      const position = getRandomPosition(i + 40);
      const animations = [styles.breathe, styles.dewdropShimmer];
      const animation = animations[i % animations.length];
      const delay = getRandomDelay(i + 4);
      
      return (
        <div
          key={`particle-${i}`}
          className={`absolute w-1.5 h-1.5 ${animation} ${delay}`}
          style={{
            ...position,
            opacity: 0.15 + (i % 3) * 0.03
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 6 6" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <circle cx="3" cy="3" r="2" fill="currentColor"/>
          </svg>
        </div>
      );
    });
  };

  const renderWildlife = () => {
    if (!wildlife) return null;

    return (
      <>
        {/* Butterfly */}
        <div
          className={`absolute w-8 h-6 ${styles.butterflyDance} ${styles.delay5}`}
          style={{
            top: '30%',
            left: '70%',
            opacity: 0.4
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 32 24" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <ellipse cx="12" cy="8" rx="6" ry="4" fill="currentColor"/>
            <ellipse cx="20" cy="8" rx="6" ry="4" fill="currentColor"/>
            <ellipse cx="12" cy="16" rx="4" ry="3" fill="currentColor" opacity="0.8"/>
            <ellipse cx="20" cy="16" rx="4" ry="3" fill="currentColor" opacity="0.8"/>
            <line x1="16" y1="4" x2="16" y2="20" stroke="currentColor" strokeWidth="0.8"/>
            <circle cx="16" cy="4" r="1" fill="currentColor"/>
          </svg>
        </div>

        {/* Small flying insects */}
        <div
          className={`absolute w-2 h-2 ${styles.birdFly} ${styles.delay8}`}
          style={{
            top: '60%',
            left: '20%',
            opacity: 0.3
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 8 8" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <circle cx="4" cy="4" r="2" fill="currentColor"/>
          </svg>
        </div>

        <div
          className={`absolute w-1.5 h-1.5 ${styles.butterflyDance} ${styles.delay9}`}
          style={{
            top: '80%',
            right: '30%',
            opacity: 0.25
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 6 6" fill="none" className="text-[rgb(var(--color-tertiary))]">
            <circle cx="3" cy="3" r="1.5" fill="currentColor"/>
          </svg>
        </div>
      </>
    );
  };

  const renderElements = () => {
    const renderers = {
      leaves: renderLeaves,
      petals: renderPetals,
      seeds: renderSeeds,
      pollen: renderPollen,
      particles: renderParticles
    };

    return elements.flatMap(element => 
      element in renderers ? renderers[element as keyof typeof renderers]() : []
    );
  };

  return (
    <div 
      className={`absolute ${getBoundsClass()} left-0 w-full overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex }}
    >
      {renderElements()}
      {renderWildlife()}
    </div>
  );
}