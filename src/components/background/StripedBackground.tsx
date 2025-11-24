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
import { StripedBackgroundProps, ColorPalette, AnimationState, WebGLContext } from "../../types";
import { useAccessibility } from "../../hooks/useAccessibility";
import { useDeviceDetection } from "../../hooks/useDeviceDetection";
import { usePerformanceMonitor } from "../../hooks/usePerformanceMonitor";
import { ColorContrast, ScreenReader, MotionAccessibility } from "../../lib/accessibility-utils";

/**
 * Default color palette for neon effects
 */
const DEFAULT_COLORS: ColorPalette = {
  a: [0.486, 0.227, 0.929], // purple #7C3AED
  b: [0.0, 0.831, 1.0], // cyan #00D4FF
  c: [1.0, 0.302, 0.667], // magenta #FF4DAA
};

/**
 * Validate text contrast against background
 */
const validateTextContrast = (textColor: string = "#ffffff"): boolean => {
  const backgroundColor = "#05050a"; // Dark background color
  return ColorContrast.meetsWCAGAA(textColor, backgroundColor);
};

/**
 * Detects if the current device is mobile
 */
const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

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
  ];
  const isMobileUserAgent = mobileKeywords.some((keyword) => userAgent.includes(keyword));
  const isSmallScreen = window.innerWidth < 768;
  const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return isMobileUserAgent || (isSmallScreen && hasTouchScreen);
};

/**
 * StripedBackground component with WebGL rendering
 * Implements animated vertical stripes with neon effects and accessibility features
 */
export const StripedBackground: React.FC<StripedBackgroundProps> = ({
  paused = false,
  density = 60,
  intensity = 1.0,
  colors = DEFAULT_COLORS,
  onIntensityChange,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const webglContextRef = useRef<WebGLContext>({
    gl: null,
    program: null,
    uniforms: {},
    vertexBuffer: null,
    isInitialized: false,
  });

  const animationStateRef = useRef<AnimationState>({
    isPlaying: false,
    currentTime: 0,
    mousePosition: { x: 0.5, y: 0.5 },
    scrollProgress: 0,
    intensity: intensity,
    isVisible: true,
  });

  const animationIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Accessibility hook
  const {
    config: accessibilityConfig,
    getAnimationAriaAttributes,
    getAccessibleColors,
  } = useAccessibility();

  // Device detection hook
  const { deviceConfig } = useDeviceDetection();

  // Performance monitoring hook
  const performanceMonitor = usePerformanceMonitor({
    targetFrameRate: 60,
    minFrameRate: deviceConfig.isMobile ? 30 : 45,
    qualityDegradationThreshold: deviceConfig.isMobile ? 25 : 35,
    memoryThreshold: 80,
    enablePerformanceMonitoring: true,
  });

  const [isContextLost, setIsContextLost] = useState(false);
  const [hasWebGLSupport, setHasWebGLSupport] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);
  const [contrastValidated, setContrastValidated] = useState(false);

  // Get performance-optimized settings
  const optimizedSettings = performanceMonitor.getOptimizedSettings();

  // Adjust density and intensity for mobile devices, accessibility, and performance
  const effectiveDensity = accessibilityConfig.reducedMotion
    ? 0
    : Math.min(deviceConfig.preferredDensity, optimizedSettings.density, density);

  const effectiveIntensity = accessibilityConfig.reducedMotion
    ? 0
    : Math.min(optimizedSettings.intensity, deviceConfig.isMobile ? 1.5 : intensity);

  // Use device-optimized pixel ratio
  const effectivePixelRatio = Math.min(deviceConfig.maxPixelRatio, optimizedSettings.pixelRatio);

  // Use reduced motion state from accessibility config
  const shouldUseReducedMotion = accessibilityConfig.reducedMotion;

  /**
   * Initialize WebGL2 context and create shader program
   */
  const initWebGL = useCallback((): boolean => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    try {
      // Initialize WebGL2 context
      const gl = initWebGL2Context(canvas);
      if (!gl) {
        console.warn("WebGL2 not supported, will use Canvas2D fallback");
        setHasWebGLSupport(false);
        return false;
      }

      // Create shader program
      const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
      if (!program) {
        console.error("Failed to create shader program");
        setHasWebGLSupport(false);
        return false;
      }

      // Get uniform locations
      const uniformNames = [
        "u_time",
        "u_resolution",
        "u_mouse",
        "u_scroll",
        "u_density",
        "u_intensity",
        "u_colors",
      ];

      const programInfo = getProgramInfo(gl, program, uniformNames, ["a_position"]);

      // Create fullscreen quad
      const vertexBuffer = createFullscreenQuad(gl);
      if (!vertexBuffer) {
        console.error("Failed to create vertex buffer");
        return false;
      }

      // Setup vertex array object
      const vao = setupVertexArray(gl, program, vertexBuffer, "a_position");
      if (!vao) {
        console.error("Failed to setup vertex array");
        return false;
      }

      // Store WebGL context
      webglContextRef.current = {
        gl,
        program,
        uniforms: programInfo.uniformLocations,
        vertexBuffer,
        isInitialized: true,
      };

      // Setup WebGL state
      gl.useProgram(program);
      gl.bindVertexArray(vao);

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
    const { gl } = webglContextRef.current;
    if (!canvas || !gl) return;

    // Use performance-optimized pixel ratio
    const pixelRatio = Math.min(window.devicePixelRatio || 1, effectivePixelRatio);

    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;
    const canvasWidth = Math.floor(displayWidth * pixelRatio);
    const canvasHeight = Math.floor(displayHeight * pixelRatio);

    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      gl.viewport(0, 0, canvasWidth, canvasHeight);
    }
  }, [effectivePixelRatio]);

  /**
   * Update WebGL uniforms with current animation state
   */
  const updateUniforms = useCallback(
    (currentTime: number) => {
      const { gl, uniforms } = webglContextRef.current;
      if (!gl || !uniforms) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const elapsedTime = (currentTime - startTimeRef.current) / 1000;
      const state = animationStateRef.current;

      // Update time uniform
      if (uniforms.u_time) {
        gl.uniform1f(uniforms.u_time, elapsedTime);
      }

      // Update resolution uniform
      if (uniforms.u_resolution) {
        gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
      }

      // Update mouse uniform (normalized coordinates)
      if (uniforms.u_mouse) {
        gl.uniform2f(uniforms.u_mouse, state.mousePosition.x, state.mousePosition.y);
      }

      // Update scroll uniform
      if (uniforms.u_scroll) {
        gl.uniform1f(uniforms.u_scroll, state.scrollProgress);
      }

      // Update density uniform
      if (uniforms.u_density) {
        gl.uniform1f(uniforms.u_density, effectiveDensity);
      }

      // Update intensity uniform
      if (uniforms.u_intensity) {
        gl.uniform1f(uniforms.u_intensity, effectiveIntensity);
      }

      // Update color palette uniform
      if (uniforms.u_colors) {
        const colorArray = new Float32Array([...colors.a, ...colors.b, ...colors.c]);
        gl.uniform3fv(uniforms.u_colors, colorArray);
      }
    },
    [effectiveDensity, effectiveIntensity, colors]
  );

  /**
   * Render a single frame using WebGL
   */
  const renderWebGL = useCallback(
    (currentTime: number) => {
      const { gl } = webglContextRef.current;
      if (!gl || isContextLost) return;

      try {
        updateCanvasSize();
        updateUniforms(currentTime);

        // Clear and render
        gl.clearColor(0.02, 0.02, 0.04, 1.0); // Dark background
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        // Record frame for performance monitoring
        performanceMonitor.recordFrame();
      } catch (error) {
        console.error("WebGL render error:", error);
      }
    },
    [updateCanvasSize, updateUniforms, isContextLost, performanceMonitor]
  );

  /**
   * Render using Canvas2D fallback with simplified gradient band rendering
   */
  const renderCanvas2D = useCallback(
    (currentTime: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const elapsedTime = (currentTime - startTimeRef.current) / 1000;
      const state = animationStateRef.current;

      // Update canvas size with performance-optimized pixel ratio
      const pixelRatio = Math.min(window.devicePixelRatio || 1, effectivePixelRatio);
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      const canvasWidth = Math.floor(displayWidth * pixelRatio);
      const canvasHeight = Math.floor(displayHeight * pixelRatio);

      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx.scale(pixelRatio, pixelRatio);
      }

      // Clear with dark background
      ctx.fillStyle = "#05050a";
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Draw background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, displayHeight);
      bgGradient.addColorStop(0, "rgba(5, 5, 10, 1)");
      bgGradient.addColorStop(0.3, "rgba(11, 15, 24, 1)");
      bgGradient.addColorStop(0.7, "rgba(11, 15, 24, 1)");
      bgGradient.addColorStop(1, "rgba(5, 5, 10, 1)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Draw simplified vertical bands with reduced complexity
      const bandCount = Math.floor(effectiveDensity * 0.4); // Fewer bands for Canvas2D performance
      const bandWidth = displayWidth / bandCount;

      // Apply mouse parallax effect
      const mouseInfluence = (state.mousePosition.x - 0.5) * 20; // 20px max offset

      for (let i = 0; i < bandCount; i++) {
        const baseX = i * bandWidth + mouseInfluence;

        // Create animated phase for each band
        const phase = (i / bandCount) * Math.PI * 2 + elapsedTime * 0.5 + state.scrollProgress * 2;
        const bandIntensity = (Math.sin(phase) * 0.5 + 0.5) * effectiveIntensity;

        // Add noise-like variation
        const noisePhase = elapsedTime * 0.3 + i * 0.1;
        const noiseValue = (Math.sin(noisePhase * 3) * Math.cos(noisePhase * 5) * 0.5 + 0.5) * 0.3;
        const finalIntensity = bandIntensity * (0.7 + noiseValue);

        if (finalIntensity > 0.1) {
          // Create vertical gradient for each band
          const bandGradient = ctx.createLinearGradient(baseX, 0, baseX + bandWidth, 0);

          // Use color palette with proper alpha blending
          const colorIndex = i % 3;
          let r, g, b;

          if (colorIndex === 0) {
            [r, g, b] = colors.a.map((c) => Math.floor(c * 255));
          } else if (colorIndex === 1) {
            [r, g, b] = colors.b.map((c) => Math.floor(c * 255));
          } else {
            [r, g, b] = colors.c.map((c) => Math.floor(c * 255));
          }

          const alpha = finalIntensity * 0.15;
          const edgeAlpha = alpha * 0.3;

          bandGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${edgeAlpha})`);
          bandGradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${alpha})`);
          bandGradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${alpha})`);
          bandGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${edgeAlpha})`);

          ctx.fillStyle = bandGradient;
          ctx.fillRect(baseX, 0, bandWidth, displayHeight);

          // Add subtle glow effect for higher intensity bands
          if (finalIntensity > 0.7) {
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha * 0.5})`;
            ctx.shadowBlur = 10;
            ctx.fillRect(baseX + bandWidth * 0.4, 0, bandWidth * 0.2, displayHeight);
            ctx.shadowBlur = 0;
          }
        }
      }

      // Add subtle scanlines effect
      ctx.globalAlpha = 0.03;
      for (let y = 0; y < displayHeight; y += 2) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, y, displayWidth, 1);
      }
      ctx.globalAlpha = 1.0;

      // Record frame for performance monitoring
      performanceMonitor.recordFrame();
    },
    [effectiveDensity, effectiveIntensity, colors, performanceMonitor]
  );

  /**
   * Animation loop
   */
  const animate = useCallback(
    (currentTime: number) => {
      if (paused || !isInViewport || shouldUseReducedMotion) {
        animationIdRef.current = null;
        return;
      }

      // Use WebGL or Canvas2D fallback
      if (hasWebGLSupport && webglContextRef.current.isInitialized) {
        renderWebGL(currentTime);
      } else {
        renderCanvas2D(currentTime);
      }

      animationIdRef.current = requestAnimationFrame(animate);
    },
    [paused, isInViewport, shouldUseReducedMotion, hasWebGLSupport, renderWebGL, renderCanvas2D]
  );

  /**
   * Start animation loop
   */
  const startAnimation = useCallback(() => {
    if (animationIdRef.current || paused || !isInViewport || shouldUseReducedMotion) return;

    startTimeRef.current = performance.now();
    animationStateRef.current.isPlaying = true;
    animationIdRef.current = requestAnimationFrame(animate);
  }, [animate, paused, isInViewport, shouldUseReducedMotion]);

  /**
   * Stop animation loop
   */
  const stopAnimation = useCallback(() => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }
    animationStateRef.current.isPlaying = false;
  }, []);

  /**
   * Handle mouse movement for parallax effect
   */
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = 1.0 - (event.clientY - rect.top) / rect.height;

    animationStateRef.current.mousePosition = {
      x: Math.max(0, Math.min(1, x)),
      y: Math.max(0, Math.min(1, y)),
    };
  }, []);

  /**
   * Handle scroll for phase shifting
   */
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    animationStateRef.current.scrollProgress = Math.max(0, Math.min(1, scrollProgress));
  }, []);

  /**
   * Clean up WebGL resources
   */
  const cleanupWebGL = useCallback(() => {
    const { gl, program, vertexBuffer } = webglContextRef.current;
    if (!gl) return;

    stopAnimation();

    cleanupWebGLResources(gl, {
      program,
      buffers: [vertexBuffer],
      vaos: [],
      textures: [],
    });

    webglContextRef.current = {
      gl: null,
      program: null,
      uniforms: {},
      vertexBuffer: null,
      isInitialized: false,
    };
  }, [stopAnimation]);

  // Initialize on mount
  useEffect(() => {
    // Validate text contrast for accessibility compliance
    const isContrastValid = validateTextContrast();
    setContrastValidated(isContrastValid);

    if (!isContrastValid) {
      console.warn(
        "StripedBackground: Text contrast may not meet WCAG AA standards. Consider adjusting colors for better accessibility."
      );
    }
  }, []);

  // Initialize WebGL and setup event listeners
  useEffect(() => {
    if (shouldUseReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Setup context loss handling for WebGL
    if (hasWebGLSupport) {
      setupContextLossHandling(
        canvas,
        () => {
          setIsContextLost(true);
          cleanupWebGL();
        },
        () => {
          if (initWebGL()) {
            startAnimation();
          }
        }
      );

      // Initialize WebGL
      if (initWebGL()) {
        startAnimation();
      }
    } else {
      // Start Canvas2D animation
      startAnimation();
    }

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial scroll position
    handleScroll();

    return () => {
      cleanupWebGL();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    shouldUseReducedMotion,
    hasWebGLSupport,
    initWebGL,
    startAnimation,
    cleanupWebGL,
    handleMouseMove,
    handleScroll,
  ]);

  // Setup IntersectionObserver for performance optimization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const inViewport = entry.isIntersecting;
        setIsInViewport(inViewport);

        if (inViewport && !paused && !shouldUseReducedMotion) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, [paused, shouldUseReducedMotion, startAnimation, stopAnimation]);

  // Handle pause state changes
  useEffect(() => {
    if (paused || !isInViewport || shouldUseReducedMotion) {
      stopAnimation();
    } else {
      startAnimation();
    }
  }, [paused, isInViewport, shouldUseReducedMotion, startAnimation, stopAnimation]);

  // Update intensity in animation state and notify parent
  useEffect(() => {
    animationStateRef.current.intensity = effectiveIntensity;
    onIntensityChange?.(effectiveIntensity);
  }, [effectiveIntensity, onIntensityChange]);

  // Render static fallback for reduced motion with enhanced accessibility
  if (shouldUseReducedMotion) {
    const accessibleColors = getAccessibleColors();
    const fallbackStyle = MotionAccessibility.getReducedMotionFallback(colors);
    const ariaAttributes = getAnimationAriaAttributes();

    return (
      <div
        className={`w-full h-full ${className}`}
        style={{
          ...fallbackStyle,
          // Ensure sufficient contrast for any overlaid text
          ...(accessibilityConfig.highContrast && {
            background: accessibleColors.background,
            border: `1px solid ${accessibleColors.foreground}`,
          }),
        }}
        {...ariaAttributes}
        role="img"
        aria-label={ScreenReader.getBackgroundDescription(false, 0)}
      />
    );
  }

  // Get appropriate ARIA attributes for animated canvas
  const ariaAttributes = getAnimationAriaAttributes();
  const backgroundDescription = ScreenReader.getBackgroundDescription(
    !paused && isInViewport,
    effectiveIntensity
  );

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`w-full h-full ${className}`}
        style={{
          display: "block",
          pointerEvents: "none",
          // Add high contrast border if needed
          ...(accessibilityConfig.highContrast && {
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }),
        }}
        {...ariaAttributes}
        role="img"
        aria-label={backgroundDescription}
      />

      {/* Hidden live region for screen readers to announce animation state changes */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="background-animation-status"
      >
        {ScreenReader.getAnimationStateAnnouncement(paused, shouldUseReducedMotion)}
      </div>

      {/* Accessibility information for screen readers */}
      <div id="keyboard-instructions" className="sr-only">
        Background animation can be paused by enabling reduced motion in your system preferences.
        This decorative element does not affect page functionality.
      </div>

      {/* Development warnings and performance info */}
      {process.env.NODE_ENV === "development" && (
        <>
          {!contrastValidated && (
            <div
              style={{
                position: "fixed",
                top: "10px",
                right: "10px",
                background: "#ff4444",
                color: "white",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "12px",
                zIndex: 9999,
              }}
            >
              ⚠️ Accessibility Warning: Check text contrast over animated background
            </div>
          )}

          {/* Performance monitoring display */}
          <div
            style={{
              position: "fixed",
              bottom: "10px",
              right: "10px",
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "8px",
              borderRadius: "4px",
              fontSize: "11px",
              fontFamily: "monospace",
              zIndex: 9999,
              minWidth: "200px",
            }}
          >
            <div>FPS: {performanceMonitor.metrics.fps}</div>
            <div>Avg FPS: {performanceMonitor.metrics.averageFps}</div>
            <div>Quality: {performanceMonitor.metrics.qualityLevel}</div>
            <div>Memory: {performanceMonitor.metrics.memoryUsage}%</div>
            <div>
              Device:{" "}
              {deviceConfig.isMobile ? "Mobile" : deviceConfig.isTablet ? "Tablet" : "Desktop"}
            </div>
            <div>Density: {effectiveDensity}</div>
            <div>Pixel Ratio: {effectivePixelRatio.toFixed(1)}</div>
            {performanceMonitor.metrics.isThrottling && (
              <div style={{ color: "#ff6b6b" }}>⚠️ Throttling</div>
            )}
          </div>
        </>
      )}
    </>
  );
};
