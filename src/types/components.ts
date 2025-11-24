// Component prop interfaces for Striped Curtain Hero system

import { ColorPalette } from "./index";

/**
 * Props for StripedBackground component
 */
export interface StripedBackgroundProps {
  paused?: boolean;
  density?: number; // 30-90 bands
  intensity?: number; // 0.0-2.0 glow strength
  colors?: ColorPalette;
  onIntensityChange?: (intensity: number) => void;
  className?: string;
}

/**
 * CTA button configuration
 */
export interface CTAButton {
  text: string;
  href: string;
  onClick?: () => void;
}

/**
 * Props for HeroCurtain component
 */
export interface HeroCurtainProps {
  title?: string;
  subtitle?: string;
  label?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundProps?: StripedBackgroundProps;
  className?: string;
}

/**
 * Props for GlassPanel component
 */
export interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  title?: string;
  description?: string;
  image?: string;
}

/**
 * Navigation item configuration
 */
export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

/**
 * Props for Navigation component
 */
export interface NavigationProps {
  logo?: {
    text?: string;
    image?: string;
    href?: string;
  };
  items?: NavigationItem[];
  className?: string;
}

/**
 * Props for HeroContent component
 */
export interface HeroContentProps {
  label?: string;
  title?: string;
  subtitle?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  className?: string;
}
