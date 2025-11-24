import { useState, useEffect, useCallback } from "react";
import { DeviceConfig } from "../types/config";

/**
 * Custom hook for device detection and performance optimization
 * Provides comprehensive device information and performance settings
 */
export const useDeviceDetection = () => {
  const [deviceConfig, setDeviceConfig] = useState<DeviceConfig>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    pixelRatio: 1,
    maxPixelRatio: 2.0,
    preferredDensity: 60,
  });

  /**
   * Detect if the current device is mobile
   */
  const detectMobile = useCallback((): boolean => {
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
  }, []);

  /**
   * Detect if the current device is tablet
   */
  const detectTablet = useCallback((): boolean => {
    if (typeof window === "undefined") return false;

    const userAgent = navigator.userAgent.toLowerCase();
    const isTabletUserAgent =
      userAgent.includes("ipad") ||
      (userAgent.includes("android") && !userAgent.includes("mobile"));

    const isTabletScreen = window.innerWidth >= 768 && window.innerWidth <= 1024;
    const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return isTabletUserAgent || (isTabletScreen && hasTouchScreen);
  }, []);

  /**
   * Get optimal pixel ratio based on device capabilities
   */
  const getOptimalPixelRatio = useCallback((isMobile: boolean, isTablet: boolean): number => {
    const devicePixelRatio = window.devicePixelRatio || 1;

    // Limit pixel ratio for performance
    if (isMobile) {
      return Math.min(devicePixelRatio, 1.5); // Max 1.5x for mobile
    } else if (isTablet) {
      return Math.min(devicePixelRatio, 2.0); // Max 2.0x for tablet
    } else {
      return Math.min(devicePixelRatio, 2.0); // Max 2.0x for desktop
    }
  }, []);

  /**
   * Get preferred density based on device type and performance
   */
  const getPreferredDensity = useCallback((isMobile: boolean, isTablet: boolean): number => {
    if (isMobile) {
      return 30; // Reduced density for mobile
    } else if (isTablet) {
      return 45; // Medium density for tablet
    } else {
      return 60; // Full density for desktop
    }
  }, []);

  /**
   * Detect GPU performance tier
   */
  const detectGPUTier = useCallback((): "low" | "medium" | "high" => {
    if (typeof window === "undefined") return "medium";

    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) return "low";

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (!debugInfo) return "medium";

    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();

    // High-end GPUs
    if (renderer.includes("nvidia") && (renderer.includes("rtx") || renderer.includes("gtx"))) {
      return "high";
    }

    if (renderer.includes("amd") && (renderer.includes("rx") || renderer.includes("radeon"))) {
      return "high";
    }

    // Integrated/mobile GPUs (typically lower performance)
    if (renderer.includes("intel") || renderer.includes("mali") || renderer.includes("adreno")) {
      return "low";
    }

    return "medium";
  }, []);

  /**
   * Check if device has sufficient memory
   */
  const checkMemoryCapacity = useCallback((): boolean => {
    if (typeof window === "undefined") return true;

    // Check device memory if available (Chrome only)
    const deviceMemory = (navigator as any).deviceMemory;
    if (deviceMemory) {
      return deviceMemory >= 4; // 4GB or more
    }

    // Fallback: estimate based on device type
    const isMobile = detectMobile();
    return !isMobile; // Assume desktop has sufficient memory
  }, [detectMobile]);

  /**
   * Get performance-optimized configuration
   */
  const getPerformanceConfig = useCallback(() => {
    const isMobile = detectMobile();
    const isTablet = detectTablet();
    const isDesktop = !isMobile && !isTablet;
    const gpuTier = detectGPUTier();
    const hasSufficientMemory = checkMemoryCapacity();

    let density = getPreferredDensity(isMobile, isTablet);
    let maxPixelRatio = isMobile ? 1.5 : 2.0;

    // Further reduce settings for low-end devices
    if (gpuTier === "low" || !hasSufficientMemory) {
      density = Math.floor(density * 0.7); // Reduce by 30%
      maxPixelRatio = Math.min(maxPixelRatio, 1.0);
    }

    return {
      isMobile,
      isTablet,
      isDesktop,
      pixelRatio: getOptimalPixelRatio(isMobile, isTablet),
      maxPixelRatio,
      preferredDensity: density,
      gpuTier,
      hasSufficientMemory,
    };
  }, [
    detectMobile,
    detectTablet,
    detectGPUTier,
    checkMemoryCapacity,
    getOptimalPixelRatio,
    getPreferredDensity,
  ]);

  /**
   * Update device configuration
   */
  const updateDeviceConfig = useCallback(() => {
    const config = getPerformanceConfig();
    setDeviceConfig(config);
  }, [getPerformanceConfig]);

  /**
   * Initialize device detection
   */
  useEffect(() => {
    updateDeviceConfig();

    // Listen for orientation changes and resize events
    const handleResize = () => {
      // Debounce resize events
      setTimeout(updateDeviceConfig, 100);
    };

    const handleOrientationChange = () => {
      // Delay to ensure dimensions are updated
      setTimeout(updateDeviceConfig, 200);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [updateDeviceConfig]);

  return {
    deviceConfig,
    updateDeviceConfig,
    detectMobile,
    detectTablet,
    getPerformanceConfig,
  };
};

export default useDeviceDetection;
