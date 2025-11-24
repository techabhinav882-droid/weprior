/**
 * Configuration interface for the WebGL background animation
 */
export interface BackgroundConfig {
  /** Number of vertical lines to render (10-200) */
  lineCount?: number;
  /** Animation speed multiplier (0.1-2.0) */
  speed?: number;
  /** Glow effect intensity (0.5-3.0) */
  glowIntensity?: number;
  /** Enable/disable bloom effect */
  bloom?: boolean;
}

/**
 * Props interface for the BackgroundCanvas component
 */
export interface BackgroundCanvasProps {
  /** Whether the animation is paused */
  paused?: boolean;
  /** Background configuration settings */
  config?: BackgroundConfig;
  /** Additional CSS class names */
  className?: string;
}

/**
 * Props interface for the HeroWithBackground component
 */
export interface HeroWithBackgroundProps {
  /** Background configuration settings */
  config?: BackgroundConfig;
  /** Whether the background animation is paused */
  paused?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Custom content to display in the hero section */
  children?: React.ReactNode;
}

/**
 * Return type for the useBackgroundConfig hook
 */
export interface BackgroundConfigHook {
  /** Current paused state */
  paused: boolean;
  /** Set paused state */
  setPaused: (paused: boolean) => void;
  /** Current intensity value */
  intensity: number;
  /** Set intensity value */
  setIntensity: (intensity: number) => void;
  /** Current speed value */
  speed: number;
  /** Set speed value */
  setSpeed: (speed: number) => void;
  /** Current line count value */
  lineCount: number;
  /** Set line count value */
  setLineCount: (count: number) => void;
  /** Get current configuration object */
  getConfig: () => BackgroundConfig;
}

/**
 * Performance settings for mobile optimization
 */
export interface PerformanceSettings {
  /** Device pixel ratio (capped at 2.0 for performance) */
  pixelRatio: number;
  /** Reduced line count for mobile devices */
  mobileLineCount: number;
  /** Default line count for desktop */
  desktopLineCount: number;
  /** Whether bloom effect is enabled */
  bloomEnabled: boolean;
}

/**
 * WebGL shader uniform values
 */
export interface ShaderUniforms {
  /** Canvas resolution */
  u_resolution: [number, number];
  /** Animation time */
  u_time: number;
  /** Normalized mouse position (0-1) */
  u_mouse: [number, number];
  /** Scroll progress (0-1) */
  u_scroll: number;
  /** Number of vertical lines */
  u_lines: number;
  /** Animation speed multiplier */
  u_speed: number;
  /** Glow intensity */
  u_glow: number;
  /** Primary neon color (violet) */
  u_colorA: [number, number, number];
  /** Secondary neon color (cyan) */
  u_colorB: [number, number, number];
  /** Accent neon color (magenta) */
  u_colorC: [number, number, number];
}
