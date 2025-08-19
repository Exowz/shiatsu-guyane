/**
 * Type definitions for Garden components
 */

export interface GardenBackground {
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

export interface SectionGarden {
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

export interface GardenDivider {
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

export interface FloatingBotanicals {
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