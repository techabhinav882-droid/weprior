// Hook-specific types and interfaces

import { StripedConfig, AnimationState } from "./index";
import { ConfigUpdate } from "./config";

/**
 * Return type for useStripedConfig hook
 */
export interface UseStripedConfigReturn {
  config: StripedConfig;
  updateConfig: (update: ConfigUpdate) => void;
  resetConfig: () => void;
  isLoading: boolean;
  error: string | null;
}

/**
 * Return type for useAnimationState hook
 */
export interface UseAnimationStateReturn {
  state: AnimationState;
  play: () => void;
  pause: () => void;
  reset: () => void;
  updateMousePosition: (x: number, y: number) => void;
  updateScrollProgress: (progress: number) => void;
  setIntensity: (intensity: number) => void;
  setVisibility: (visible: boolean) => void;
}

/**
 * Return type for useWebGLContext hook
 */
export interface UseWebGLContextReturn {
  gl: WebGL2RenderingContext | null;
  isSupported: boolean;
  isInitialized: boolean;
  error: string | null;
  initialize: (canvas: HTMLCanvasElement) => boolean;
  cleanup: () => void;
}

/**
 * Return type for usePerformanceMonitor hook
 */
export interface UsePerformanceMonitorReturn {
  frameRate: number;
  frameTime: number;
  memoryUsage: number;
  isOptimal: boolean;
  shouldDegrade: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
}

/**
 * Return type for useResponsiveConfig hook
 */
export interface UseResponsiveConfigReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  currentBreakpoint: "mobile" | "tablet" | "desktop";
  density: number;
  intensity: number;
}

/**
 * Return type for useReducedMotion hook
 */
export interface UseReducedMotionReturn {
  prefersReducedMotion: boolean;
  isAnimationEnabled: boolean;
  toggleAnimation: () => void;
}

/**
 * Hook options for useStripedConfig
 */
export interface UseStripedConfigOptions {
  initialConfig?: Partial<StripedConfig>;
  enableResponsive?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableAccessibility?: boolean;
}

/**
 * Hook options for useAnimationState
 */
export interface UseAnimationStateOptions {
  autoPlay?: boolean;
  initialIntensity?: number;
  enableMouseTracking?: boolean;
  enableScrollTracking?: boolean;
}

/**
 * Hook options for useWebGLContext
 */
export interface UseWebGLContextOptions {
  enableFallback?: boolean;
  contextAttributes?: WebGLContextAttributes;
  onError?: (error: string) => void;
}

/**
 * Hook options for usePerformanceMonitor
 */
export interface UsePerformanceMonitorOptions {
  targetFrameRate?: number;
  monitoringInterval?: number;
  degradationThreshold?: number;
  onPerformanceChange?: (metrics: { frameRate: number; shouldDegrade: boolean }) => void;
}
