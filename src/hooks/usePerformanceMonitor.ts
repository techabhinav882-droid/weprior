import { useState, useEffect, useCallback, useRef } from "react";
import { PerformanceConfig } from "../types/config";

interface PerformanceMetrics {
  fps: number;
  averageFps: number;
  frameTime: number;
  memoryUsage: number;
  qualityLevel: "high" | "medium" | "low";
  isThrottling: boolean;
}

/**
 * Custom hook for monitoring and optimizing performance
 * Provides real-time performance metrics and automatic quality adjustment
 */
export const usePerformanceMonitor = (config: PerformanceConfig) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    averageFps: 60,
    frameTime: 16.67,
    memoryUsage: 0,
    qualityLevel: "high",
    isThrottling: false,
  });

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const fpsHistoryRef = useRef<number[]>([]);
  const performanceObserverRef = useRef<PerformanceObserver | null>(null);
  const monitoringIntervalRef = useRef<number | null>(null);

  /**
   * Calculate current FPS
   */
  const calculateFPS = useCallback(
    (currentTime: number): number => {
      const deltaTime = currentTime - lastTimeRef.current;

      if (deltaTime >= 1000) {
        // Update every second
        const fps = Math.round((frameCountRef.current * 1000) / deltaTime);

        // Update history
        fpsHistoryRef.current.push(fps);
        if (fpsHistoryRef.current.length > 10) {
          fpsHistoryRef.current.shift(); // Keep last 10 seconds
        }

        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;

        return fps;
      }

      return metrics.fps;
    },
    [metrics.fps]
  );

  /**
   * Calculate average FPS over time
   */
  const calculateAverageFPS = useCallback((): number => {
    if (fpsHistoryRef.current.length === 0) return 60;

    const sum = fpsHistoryRef.current.reduce((acc, fps) => acc + fps, 0);
    return Math.round(sum / fpsHistoryRef.current.length);
  }, []);

  /**
   * Get memory usage information
   */
  const getMemoryUsage = useCallback((): number => {
    if (typeof window === "undefined") return 0;

    // Use Performance API if available
    if ("memory" in performance) {
      const memory = (performance as any).memory;
      return Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
    }

    return 0;
  }, []);

  /**
   * Determine quality level based on performance metrics
   */
  const determineQualityLevel = useCallback(
    (currentFps: number, averageFps: number, memoryUsage: number): "high" | "medium" | "low" => {
      // Check if performance is degrading
      const isLowFps = currentFps < config.minFrameRate || averageFps < config.minFrameRate;
      const isHighMemory = memoryUsage > config.memoryThreshold;
      const isUnstable = Math.abs(currentFps - averageFps) > 15;

      if (isLowFps || isHighMemory || isUnstable) {
        if (currentFps < config.minFrameRate * 0.7) {
          return "low";
        }
        return "medium";
      }

      return "high";
    },
    [config.minFrameRate, config.memoryThreshold]
  );

  /**
   * Check if performance throttling is needed
   */
  const shouldThrottle = useCallback(
    (currentFps: number, memoryUsage: number): boolean => {
      return (
        currentFps < config.qualityDegradationThreshold || memoryUsage > config.memoryThreshold
      );
    },
    [config.qualityDegradationThreshold, config.memoryThreshold]
  );

  /**
   * Update performance metrics
   */
  const updateMetrics = useCallback(
    (currentTime: number) => {
      frameCountRef.current++;

      const fps = calculateFPS(currentTime);
      const averageFps = calculateAverageFPS();
      const frameTime = 1000 / fps;
      const memoryUsage = getMemoryUsage();
      const qualityLevel = determineQualityLevel(fps, averageFps, memoryUsage);
      const isThrottling = shouldThrottle(fps, memoryUsage);

      setMetrics({
        fps,
        averageFps,
        frameTime,
        memoryUsage,
        qualityLevel,
        isThrottling,
      });
    },
    [calculateFPS, calculateAverageFPS, getMemoryUsage, determineQualityLevel, shouldThrottle]
  );

  /**
   * Start performance monitoring
   */
  const startMonitoring = useCallback(() => {
    if (!config.enablePerformanceMonitoring) return;

    // Reset counters
    frameCountRef.current = 0;
    lastTimeRef.current = performance.now();
    fpsHistoryRef.current = [];

    // Start monitoring interval
    monitoringIntervalRef.current = window.setInterval(() => {
      updateMetrics(performance.now());
    }, 1000);

    // Setup Performance Observer for more detailed metrics
    if ("PerformanceObserver" in window) {
      try {
        performanceObserverRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();

          // Monitor long tasks that might affect performance
          entries.forEach((entry) => {
            if (entry.entryType === "longtask" && entry.duration > 50) {
              console.warn(`Long task detected: ${entry.duration}ms`);
            }
          });
        });

        performanceObserverRef.current.observe({
          entryTypes: ["longtask", "measure", "navigation"],
        });
      } catch (error) {
        console.warn("PerformanceObserver not fully supported:", error);
      }
    }
  }, [config.enablePerformanceMonitoring, updateMetrics]);

  /**
   * Stop performance monitoring
   */
  const stopMonitoring = useCallback(() => {
    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
      monitoringIntervalRef.current = null;
    }

    if (performanceObserverRef.current) {
      performanceObserverRef.current.disconnect();
      performanceObserverRef.current = null;
    }
  }, []);

  /**
   * Get performance recommendations
   */
  const getPerformanceRecommendations = useCallback((): string[] => {
    const recommendations: string[] = [];

    if (metrics.fps < config.targetFrameRate) {
      recommendations.push("Consider reducing animation density or intensity");
    }

    if (metrics.memoryUsage > 80) {
      recommendations.push("High memory usage detected - consider reducing visual effects");
    }

    if (metrics.isThrottling) {
      recommendations.push("Performance throttling active - quality automatically reduced");
    }

    if (metrics.averageFps < metrics.fps - 10) {
      recommendations.push("Unstable frame rate detected - check for background processes");
    }

    return recommendations;
  }, [metrics, config.targetFrameRate]);

  /**
   * Get optimized settings based on current performance
   */
  const getOptimizedSettings = useCallback(() => {
    const baseSettings = {
      density: 60,
      intensity: 1.0,
      pixelRatio: 2.0,
      enableBloom: true,
      enableParallax: true,
    };

    switch (metrics.qualityLevel) {
      case "low":
        return {
          ...baseSettings,
          density: 20,
          intensity: 0.5,
          pixelRatio: 1.0,
          enableBloom: false,
          enableParallax: false,
        };

      case "medium":
        return {
          ...baseSettings,
          density: 40,
          intensity: 0.8,
          pixelRatio: 1.5,
          enableBloom: true,
          enableParallax: false,
        };

      case "high":
      default:
        return baseSettings;
    }
  }, [metrics.qualityLevel]);

  /**
   * Record frame for FPS calculation
   */
  const recordFrame = useCallback(() => {
    if (config.enablePerformanceMonitoring) {
      frameCountRef.current++;
    }
  }, [config.enablePerformanceMonitoring]);

  /**
   * Initialize monitoring
   */
  useEffect(() => {
    startMonitoring();
    return stopMonitoring;
  }, [startMonitoring, stopMonitoring]);

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, [stopMonitoring]);

  return {
    metrics,
    startMonitoring,
    stopMonitoring,
    recordFrame,
    getPerformanceRecommendations,
    getOptimizedSettings,
  };
};

export default usePerformanceMonitor;
