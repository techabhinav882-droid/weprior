// Core TypeScript interfaces for Striped Curtain Hero system

/**
 * Color palette configuration for neon effects
 */
export interface ColorPalette {
  a: [number, number, number]; // purple #7C3AED
  b: [number, number, number]; // cyan #00D4FF
  c: [number, number, number]; // magenta #FF4DAA
}

/**
 * Animation state management interface
 */
export interface AnimationState {
  isPlaying: boolean;
  currentTime: number;
  mousePosition: { x: number; y: number };
  scrollProgress: number;
  intensity: number;
  isVisible: boolean; // IntersectionObserver state
}

/**
 * WebGL context and resource management
 */
export interface WebGLContext {
  gl: WebGL2RenderingContext | null;
  program: WebGLProgram | null;
  uniforms: Record<string, WebGLUniformLocation>;
  vertexBuffer: WebGLBuffer | null;
  isInitialized: boolean;
}

/**
 * Shader uniform configuration
 */
export interface ShaderUniforms {
  u_time: number; // animation time in seconds
  u_resolution: [number, number]; // canvas dimensions
  u_mouse: [number, number]; // normalized mouse position
  u_scroll: number; // page scroll 0.0-1.0
  u_density: number; // number of vertical bands
  u_intensity: number; // glow/bloom strength
  u_colors: ColorPalette; // neon color palette
}

/**
 * Runtime configuration for striped background
 */
export interface StripedConfig {
  density: number;
  intensity: number;
  colors: ColorPalette;
  paused: boolean;
  reducedMotion: boolean;
}
// Re-export all types from other modules
export * from "./components";
export * from "./webgl";
export * from "./config";
export * from "./hooks";
export * from "./constants";
export * from "./utils";
