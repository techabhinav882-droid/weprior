import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  initWebGL2Context,
  createProgram,
  getProgramInfo,
  createFullscreenQuad,
  setupVertexArray,
  setupContextLossHandling,
  cleanupWebGLResources,
  type WebGLProgramInfo,
} from "../../lib/webgl-utils";
import { vertexShaderSource, fragmentShaderSource } from "../../lib/shaders";
import { BackgroundConfig, BackgroundCanvasProps } from "./types";

/**
 * Detects if user prefers reduced motion
 */
const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  return mediaQuery.matches;
};

/**
 * Detects if WebGL2 is available in the browser
 */
const hasWebGL2Support = (): boolean => {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    return gl !== null;
  } catch {
    return false;
  }
};

/**
 * Detects if the current device is mobile based on user agent and screen size
 */
const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  // Check user agent for mobile indicators
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    "android",
    "webos",
    "iphone",
    "ipad",
    "ipod",
    "blackberry",
    "windows phone",
    "mobile",
    "tablet",
  ];

  const isMobileUserAgent = mobileKeywords.some((keyword) => userAgent.includes(keyword));

  // Check screen size (mobile typically < 768px width)
  const isSmallScreen = window.innerWidth < 768;

  // Check for touch capability
  const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return isMobileUserAgent || (isSmallScreen && hasTouchScreen);
};

/**
 * Gets mobile-optimized configuration
 */
const getMobileOptimizedConfig = (config: BackgroundConfig): BackgroundConfig => {
  return {
    ...config,
    lineCount: Math.min(config.lineCount || 80, 30), // Reduce line count to max 30
    bloom: false, // Disable bloom for performance
  };
};

// Default configuration values
const DEFAULT_CONFIG: Required<BackgroundConfig> = {
  lineCount: 80,
  speed: 1.0,
  glowIntensity: 1.5,
  bloom: true,
};
// Neon color palette (RGB values 0-1)
const NEON_COLORS = {
  violet: [0.486, 0.227, 0.929] as const, // #7c3aed
  cyan: [0.0, 0.831, 1.0] as const, // #00d4ff
  magenta: [1.0, 0.302, 0.667] as const, // #ff4daa
};

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({
  paused = false,
  config = {},
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programInfoRef = useRef<WebGLProgramInfo | null>(null);
  const vertexBufferRef = useRef<WebGLBuffer | null>(null);
  const vaoRef = useRef<WebGLVertexArrayObject | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const scrollRef = useRef<number>(0);

  const [isContextLost, setIsContextLost] = useState(false);
  const [hasWebGLSupport, setHasWebGLSupport] = useState(true);
  const [shouldUseStaticFallback, setShouldUseStaticFallback] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);

  // Merge config with defaults and apply mobile optimizations
  const baseConfig: Required<BackgroundConfig> = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  const finalConfig: Required<BackgroundConfig> = isMobile
    ? { ...baseConfig, ...getMobileOptimizedConfig(baseConfig) }
    : baseConfig;

  /**
   * Initialize WebGL context and resources
   */
  const initWebGL = useCallback((): boolean => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    try {
      // Initialize WebGL2 context
      const gl = initWebGL2Context(canvas);
      if (!gl) {
        setHasWebGLSupport(false);
        return false;
      }

      glRef.current = gl;

      // Create shader program
      const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
      if (!program) {
        console.error("Failed to create shader program");
        return false;
      }

      // Get program info with uniform and attribute locations
      const uniformNames = [
        "u_resolution",
        "u_time",
        "u_mouse",
        "u_scroll",
        "u_lines",
        "u_speed",
        "u_glow",
        "u_colorA",
        "u_colorB",
        "u_colorC",
      ];
      const attributeNames = ["a_position"];

      const programInfo = getProgramInfo(gl, program, uniformNames, attributeNames);
      programInfoRef.current = programInfo;

      // Create fullscreen quad
      const vertexBuffer = createFullscreenQuad(gl);
      if (!vertexBuffer) {
        console.error("Failed to create vertex buffer");
        return false;
      }
      vertexBufferRef.current = vertexBuffer;

      // Setup vertex array object
      const vao = setupVertexArray(gl, program, vertexBuffer, "a_position");
      if (!vao) {
        console.error("Failed to setup vertex array");
        return false;
      }
      vaoRef.current = vao;

      // Setup WebGL state
      gl.useProgram(program);
      gl.bindVertexArray(vao);

      // Set static uniforms (colors)
      const { uniformLocations } = programInfo;
      if (uniformLocations.u_colorA) {
        gl.uniform3fv(uniformLocations.u_colorA, NEON_COLORS.violet);
      }
      if (uniformLocations.u_colorB) {
        gl.uniform3fv(uniformLocations.u_colorB, NEON_COLORS.cyan);
      }
      if (uniformLocations.u_colorC) {
        gl.uniform3fv(uniformLocations.u_colorC, NEON_COLORS.magenta);
      }

      setIsContextLost(false);
      return true;
    } catch (error) {
      console.error("WebGL initialization failed:", error);
      setHasWebGLSupport(false);
      return false;
    }
  }, []);

  /**
   * Update canvas size and WebGL viewport
   */
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    const gl = glRef.current;
    if (!canvas || !gl) return;

    // Get device pixel ratio (capped at 2 for performance, 1.5 on mobile)
    const maxPixelRatio = isMobile ? 1.5 : 2;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);

    // Get canvas display size
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Calculate actual canvas size
    const canvasWidth = Math.floor(displayWidth * pixelRatio);
    const canvasHeight = Math.floor(displayHeight * pixelRatio);

    // Update canvas size if needed
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Update WebGL viewport
      gl.viewport(0, 0, canvasWidth, canvasHeight);

      // Update resolution uniform
      const programInfo = programInfoRef.current;
      if (programInfo?.uniformLocations.u_resolution) {
        gl.uniform2f(programInfo.uniformLocations.u_resolution, canvasWidth, canvasHeight);
      }
    }
  }, [isMobile]);

  /**
   * Update WebGL uniforms with current state
   */
  const updateUniforms = useCallback(
    (currentTime: number) => {
      const gl = glRef.current;
      const programInfo = programInfoRef.current;
      if (!gl || !programInfo) return;

      const { uniformLocations } = programInfo;
      const elapsedTime = (currentTime - startTimeRef.current) / 1000; // Convert to seconds

      // Update time uniform
      if (uniformLocations.u_time) {
        gl.uniform1f(uniformLocations.u_time, elapsedTime);
      }

      // Update mouse uniform
      if (uniformLocations.u_mouse) {
        gl.uniform2f(uniformLocations.u_mouse, mouseRef.current.x, mouseRef.current.y);
      }

      // Update scroll uniform
      if (uniformLocations.u_scroll) {
        gl.uniform1f(uniformLocations.u_scroll, scrollRef.current);
      }

      // Update configuration uniforms
      if (uniformLocations.u_lines) {
        gl.uniform1f(uniformLocations.u_lines, finalConfig.lineCount);
      }
      if (uniformLocations.u_speed) {
        gl.uniform1f(uniformLocations.u_speed, finalConfig.speed);
      }
      if (uniformLocations.u_glow) {
        gl.uniform1f(uniformLocations.u_glow, finalConfig.glowIntensity);
      }
    },
    [finalConfig]
  );

  /**
   * Render a single frame
   */
  const render = useCallback(
    (currentTime: number) => {
      const gl = glRef.current;
      if (!gl || isContextLost) return;

      try {
        // Update canvas size
        updateCanvasSize();

        // Update uniforms
        updateUniforms(currentTime);

        // Clear and render
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Draw fullscreen quad
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      } catch (error) {
        console.error("Render error:", error);
      }
    },
    [updateCanvasSize, updateUniforms, isContextLost]
  );

  /**
   * Animation loop
   */
  const animate = useCallback(
    (currentTime: number) => {
      if (paused || isContextLost || !isInViewport) {
        animationIdRef.current = null;
        return;
      }

      render(currentTime);
      animationIdRef.current = requestAnimationFrame(animate);
    },
    [paused, render, isContextLost, isInViewport]
  );

  /**
   * Start animation loop
   */
  const startAnimation = useCallback(() => {
    if (animationIdRef.current || paused || isContextLost || !isInViewport) return;

    startTimeRef.current = performance.now();
    animationIdRef.current = requestAnimationFrame(animate);
  }, [animate, paused, isContextLost, isInViewport]);

  /**
   * Stop animation loop
   */
  const stopAnimation = useCallback(() => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }
  }, []);

  /**
   * Handle mouse movement for parallax effect
   */
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = 1.0 - (event.clientY - rect.top) / rect.height; // Flip Y coordinate

    mouseRef.current = {
      x: Math.max(0, Math.min(1, x)),
      y: Math.max(0, Math.min(1, y)),
    };
  }, []);

  /**
   * Handle scroll for parallax effect
   */
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    scrollRef.current = Math.max(0, Math.min(1, scrollProgress));
  }, []);

  /**
   * Handle window resize
   */
  const handleResize = useCallback(() => {
    updateCanvasSize();
  }, [updateCanvasSize]);

  /**
   * Clean up WebGL resources
   */
  const cleanupWebGL = useCallback(() => {
    const gl = glRef.current;
    if (!gl) return;

    try {
      // Stop animation first
      stopAnimation();

      // Clean up WebGL resources
      cleanupWebGLResources(gl, {
        program: programInfoRef.current?.program || null,
        buffers: [vertexBufferRef.current],
        vaos: [vaoRef.current],
        textures: [], // No textures in this implementation
      });

      // Reset refs
      programInfoRef.current = null;
      vertexBufferRef.current = null;
      vaoRef.current = null;
      glRef.current = null;
    } catch (error) {
      console.error("Error during WebGL cleanup:", error);
    }
  }, [stopAnimation]);

  // Check for accessibility, mobile, and WebGL support on mount
  useEffect(() => {
    // Check for reduced motion preference
    const reducedMotion = prefersReducedMotion();

    // Check for WebGL2 support
    const webglSupport = hasWebGL2Support();

    // Check for mobile device
    const mobile = isMobileDevice();
    setIsMobile(mobile);

    // Use static fallback if reduced motion is preferred or WebGL is not supported
    const useStaticFallback = reducedMotion || !webglSupport;

    setShouldUseStaticFallback(useStaticFallback);
    setHasWebGLSupport(webglSupport);

    // Listen for changes to reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      const shouldUseFallback = e.matches || !hasWebGL2Support();
      setShouldUseStaticFallback(shouldUseFallback);

      if (shouldUseFallback) {
        stopAnimation();
        cleanupWebGL();
      }
    };

    // Listen for window resize to re-detect mobile
    const handleResizeForMobile = () => {
      const newMobile = isMobileDevice();
      setIsMobile(newMobile);
    };

    mediaQuery.addEventListener("change", handleMotionPreferenceChange);
    window.addEventListener("resize", handleResizeForMobile);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
      window.removeEventListener("resize", handleResizeForMobile);
    };
  }, [stopAnimation, cleanupWebGL]);

  // Initialize WebGL on mount (only if not using static fallback)
  useEffect(() => {
    if (shouldUseStaticFallback) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Setup context loss handling
    setupContextLossHandling(
      canvas,
      () => {
        console.warn("WebGL context lost - cleaning up resources");
        setIsContextLost(true);
        cleanupWebGL();
      },
      () => {
        console.log("WebGL context restored - reinitializing");
        if (initWebGL()) {
          startAnimation();
        }
      }
    );

    // Initialize WebGL
    if (initWebGL()) {
      startAnimation();
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Initial scroll position
    handleScroll();

    return () => {
      // Clean up everything on unmount
      stopAnimation();
      cleanupWebGL();

      // Remove event listeners
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    shouldUseStaticFallback,
    initWebGL,
    startAnimation,
    stopAnimation,
    handleMouseMove,
    handleScroll,
    handleResize,
    cleanupWebGL,
  ]);

  // Setup IntersectionObserver for viewport-based animation pausing
  useEffect(() => {
    if (shouldUseStaticFallback) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create IntersectionObserver to detect when canvas is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const inViewport = entry.isIntersecting;

        setIsInViewport(inViewport);

        // Start or stop animation based on visibility
        if (inViewport && !paused && !isContextLost && hasWebGLSupport) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      {
        // Trigger when at least 10% of the canvas is visible
        threshold: 0.1,
        // Add some margin to start animation slightly before canvas enters viewport
        rootMargin: "50px",
      }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, [
    shouldUseStaticFallback,
    paused,
    isContextLost,
    hasWebGLSupport,
    startAnimation,
    stopAnimation,
  ]);

  // Handle pause state changes
  useEffect(() => {
    if (shouldUseStaticFallback) return;

    if (paused || !isInViewport) {
      stopAnimation();
    } else if (!isContextLost && hasWebGLSupport && isInViewport) {
      startAnimation();
    }
  }, [
    paused,
    isContextLost,
    hasWebGLSupport,
    shouldUseStaticFallback,
    isInViewport,
    startAnimation,
    stopAnimation,
  ]);

  // Handle config changes
  useEffect(() => {
    // Configuration changes are handled automatically through uniforms update
    // No need to restart WebGL context
  }, [finalConfig]);

  // Render static fallback for reduced motion or no WebGL support
  if (shouldUseStaticFallback || !hasWebGLSupport) {
    return (
      <div
        className={`w-full h-full ${className}`}
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at center, rgba(255, 77, 170, 0.1) 0%, transparent 70%),
            linear-gradient(180deg, #070812 0%, #1e1b4b 30%, #581c87 50%, #1e1b4b 70%, #070812 100%)
          `,
          filter: "blur(0.5px)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{
        display: "block",
        pointerEvents: "none", // Allow interactions to pass through
      }}
      aria-hidden="true"
    />
  );
};
