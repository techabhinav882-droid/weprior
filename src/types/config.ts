// Configuration types and utility interfaces

import { ColorPalette } from "./index";

/**
 * Device-specific configuration
 */
export interface DeviceConfig {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  pixelRatio: number;
  maxPixelRatio: number;
  preferredDensity: number;
}

/**
 * Performance configuration
 */
export interface PerformanceConfig {
  targetFrameRate: number;
  minFrameRate: number;
  qualityDegradationThreshold: number;
  memoryThreshold: number;
  enablePerformanceMonitoring: boolean;
}

/**
 * Accessibility configuration
 */
export interface AccessibilityConfig {
  reducedMotion: boolean;
  highContrast: boolean;
  screenReaderOptimized: boolean;
  keyboardNavigationEnabled: boolean;
}

/**
 * Animation configuration
 */
export interface AnimationConfig {
  speed: number;
  intensity: number;
  parallaxStrength: number;
  bloomStrength: number;
  noiseScale: number;
}

/**
 * Responsive breakpoint configuration
 */
export interface ResponsiveConfig {
  mobile: {
    maxWidth: number;
    density: number;
    intensity: number;
  };
  tablet: {
    maxWidth: number;
    density: number;
    intensity: number;
  };
  desktop: {
    minWidth: number;
    density: number;
    intensity: number;
  };
}

/**
 * Complete system configuration
 */
export interface SystemConfig {
  device: DeviceConfig;
  performance: PerformanceConfig;
  accessibility: AccessibilityConfig;
  animation: AnimationConfig;
  responsive: ResponsiveConfig;
  colors: ColorPalette;
}

/**
 * Default configuration values
 */
export interface DefaultConfig {
  density: number;
  intensity: number;
  colors: ColorPalette;
  animationSpeed: number;
  parallaxStrength: number;
  bloomStrength: number;
}

/**
 * Runtime configuration update interface
 */
export interface ConfigUpdate {
  density?: number;
  intensity?: number;
  colors?: Partial<ColorPalette>;
  paused?: boolean;
  reducedMotion?: boolean;
}

/**
 * Configuration validation result
 */
export interface ConfigValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}
