// WebGL-specific types and interfaces

/**
 * WebGL shader types
 */
export type ShaderType = "vertex" | "fragment";

/**
 * Shader source configuration
 */
export interface ShaderSource {
  vertex: string;
  fragment: string;
}

/**
 * WebGL uniform location mapping
 */
export interface UniformLocations {
  u_time: WebGLUniformLocation | null;
  u_resolution: WebGLUniformLocation | null;
  u_mouse: WebGLUniformLocation | null;
  u_scroll: WebGLUniformLocation | null;
  u_density: WebGLUniformLocation | null;
  u_intensity: WebGLUniformLocation | null;
  u_colors: WebGLUniformLocation | null;
}

/**
 * WebGL attribute location mapping
 */
export interface AttributeLocations {
  a_position: number;
}

/**
 * WebGL buffer configuration
 */
export interface BufferConfig {
  data: Float32Array;
  usage: number;
  target: number;
}

/**
 * WebGL program configuration
 */
export interface ProgramConfig {
  vertexShader: WebGLShader;
  fragmentShader: WebGLShader;
}

/**
 * WebGL rendering context state
 */
export interface RenderingState {
  viewport: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  clearColor: [number, number, number, number];
  blendMode: {
    enabled: boolean;
    srcFactor: number;
    dstFactor: number;
  };
}

/**
 * Performance monitoring interface
 */
export interface PerformanceMetrics {
  frameRate: number;
  frameTime: number;
  memoryUsage: number;
  drawCalls: number;
  lastFrameTimestamp: number;
}

/**
 * WebGL capability detection
 */
export interface WebGLCapabilities {
  webgl2: boolean;
  webgl1: boolean;
  maxTextureSize: number;
  maxViewportDims: [number, number];
  maxFragmentUniforms: number;
  maxVertexUniforms: number;
}
