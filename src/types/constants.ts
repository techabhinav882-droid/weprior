// Default configuration constants for Striped Curtain Hero system

import { ColorPalette, DefaultConfig } from "./config";

/**
 * Default neon color palette
 */
export const DEFAULT_COLORS: ColorPalette = {
  a: [124, 58, 237], // purple #7C3AED
  b: [0, 212, 255], // cyan #00D4FF
  c: [255, 77, 170], // magenta #FF4DAA
};

/**
 * Default system configuration
 */
export const DEFAULT_CONFIG: DefaultConfig = {
  density: 60,
  intensity: 1.0,
  colors: DEFAULT_COLORS,
  animationSpeed: 0.5,
  parallaxStrength: 0.02,
  bloomStrength: 1.2,
};

/**
 * Performance thresholds
 */
export const PERFORMANCE_THRESHOLDS = {
  TARGET_FPS: 60,
  MIN_FPS: 30,
  DEGRADATION_THRESHOLD: 45,
  MEMORY_THRESHOLD: 100 * 1024 * 1024, // 100MB
  MOBILE_PIXEL_RATIO_LIMIT: 1.5,
} as const;

/**
 * Responsive breakpoints
 */
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
} as const;

/**
 * Animation timing constants
 */
export const ANIMATION_TIMING = {
  STRIPE_SPEED: 0.5,
  NEON_PULSE_DURATION: 2000,
  MOUSE_PARALLAX_SPRING: 0.1,
  HOVER_TRANSITION_DURATION: 300,
} as const;

/**
 * WebGL configuration constants
 */
export const WEBGL_CONFIG = {
  CONTEXT_ATTRIBUTES: {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: true,
    preserveDrawingBuffer: false,
    powerPreference: "high-performance",
  } as WebGLContextAttributes,
  CLEAR_COLOR: [0.02, 0.02, 0.04, 1.0] as [number, number, number, number],
} as const;

/**
 * Density configuration by device type
 */
export const DENSITY_CONFIG = {
  MOBILE: 30,
  TABLET: 45,
  DESKTOP: 60,
  HIGH_END: 90,
} as const;

/**
 * Intensity configuration by device type
 */
export const INTENSITY_CONFIG = {
  MOBILE: 0.7,
  TABLET: 0.85,
  DESKTOP: 1.0,
  HIGH_END: 1.2,
} as const;
