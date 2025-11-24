import { useState, useEffect, useCallback } from "react";
import { AccessibilityConfig } from "../types/config";

/**
 * Custom hook for managing accessibility features
 * Provides comprehensive accessibility state management and utilities
 */
export const useAccessibility = () => {
  const [config, setConfig] = useState<AccessibilityConfig>({
    reducedMotion: false,
    highContrast: false,
    screenReaderOptimized: false,
    keyboardNavigationEnabled: true,
  });

  /**
   * Check if user prefers reduced motion
   */
  const checkReducedMotion = useCallback((): boolean => {
    if (typeof window === "undefined") return false;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return mediaQuery.matches;
  }, []);

  /**
   * Check if user prefers high contrast
   */
  const checkHighContrast = useCallback((): boolean => {
    if (typeof window === "undefined") return false;

    const mediaQuery = window.matchMedia("(prefers-contrast: high)");
    return mediaQuery.matches;
  }, []);

  /**
   * Detect screen reader usage
   */
  const detectScreenReader = useCallback((): boolean => {
    if (typeof window === "undefined") return false;

    // Check for common screen reader indicators
    const hasScreenReader =
      // Check for NVDA, JAWS, or other screen readers
      navigator.userAgent.includes("NVDA") ||
      navigator.userAgent.includes("JAWS") ||
      // Check for reduced motion as an indicator
      checkReducedMotion() ||
      // Check for Windows High Contrast mode
      window.matchMedia("(-ms-high-contrast: active)").matches ||
      // Check for forced colors mode
      window.matchMedia("(forced-colors: active)").matches;

    return hasScreenReader;
  }, [checkReducedMotion]);

  /**
   * Calculate contrast ratio between two colors
   */
  const calculateContrastRatio = useCallback((color1: string, color2: string): number => {
    // Convert hex colors to RGB
    const hexToRgb = (hex: string): [number, number, number] => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
        : [0, 0, 0];
    };

    // Calculate relative luminance
    const getLuminance = (r: number, g: number, b: number): number => {
      const [rs, gs, bs] = [r, g, b].map((c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const [r1, g1, b1] = hexToRgb(color1);
    const [r2, g2, b2] = hexToRgb(color2);

    const lum1 = getLuminance(r1, g1, b1);
    const lum2 = getLuminance(r2, g2, b2);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  }, []);

  /**
   * Check if contrast ratio meets WCAG AA standards (4.5:1 for normal text)
   */
  const meetsWCAGAA = useCallback(
    (foreground: string, background: string): boolean => {
      const ratio = calculateContrastRatio(foreground, background);
      return ratio >= 4.5;
    },
    [calculateContrastRatio]
  );

  /**
   * Check if contrast ratio meets WCAG AAA standards (7:1 for normal text)
   */
  const meetsWCAGAAA = useCallback(
    (foreground: string, background: string): boolean => {
      const ratio = calculateContrastRatio(foreground, background);
      return ratio >= 7.0;
    },
    [calculateContrastRatio]
  );

  /**
   * Get accessible color palette based on current settings
   */
  const getAccessibleColors = useCallback(() => {
    if (config.highContrast) {
      return {
        background: "#000000",
        foreground: "#ffffff",
        accent: "#ffff00",
        secondary: "#00ffff",
      };
    }

    return {
      background: "#05050a",
      foreground: "#ffffff",
      accent: "#7C3AED",
      secondary: "#00D4FF",
    };
  }, [config.highContrast]);

  /**
   * Generate ARIA attributes for animated elements
   */
  const getAnimationAriaAttributes = useCallback(() => {
    if (config.reducedMotion) {
      return {
        "aria-hidden": "true",
        "aria-label": "Decorative background pattern",
      };
    }

    return {
      "aria-hidden": "true",
      "aria-label": "Animated background with vertical neon stripes",
      "aria-live": "polite",
      "aria-atomic": "false",
    };
  }, [config.reducedMotion]);

  /**
   * Get keyboard navigation attributes
   */
  const getKeyboardAttributes = useCallback(
    (isInteractive: boolean = false) => {
      if (!config.keyboardNavigationEnabled || !isInteractive) {
        return {
          tabIndex: -1,
        };
      }

      return {
        tabIndex: 0,
        role: "button",
        "aria-describedby": "keyboard-instructions",
      };
    },
    [config.keyboardNavigationEnabled]
  );

  /**
   * Update accessibility configuration
   */
  const updateConfig = useCallback((updates: Partial<AccessibilityConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  }, []);

  /**
   * Initialize accessibility detection
   */
  useEffect(() => {
    const initialConfig: AccessibilityConfig = {
      reducedMotion: checkReducedMotion(),
      highContrast: checkHighContrast(),
      screenReaderOptimized: detectScreenReader(),
      keyboardNavigationEnabled: true,
    };

    setConfig(initialConfig);

    // Listen for media query changes
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const highContrastQuery = window.matchMedia("(prefers-contrast: high)");
    const forcedColorsQuery = window.matchMedia("(forced-colors: active)");

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      updateConfig({ reducedMotion: e.matches });
    };

    const handleHighContrastChange = (e: MediaQueryListEvent) => {
      updateConfig({ highContrast: e.matches });
    };

    const handleForcedColorsChange = (e: MediaQueryListEvent) => {
      updateConfig({
        highContrast: e.matches,
        screenReaderOptimized: e.matches,
      });
    };

    // Add event listeners
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);
    highContrastQuery.addEventListener("change", handleHighContrastChange);
    forcedColorsQuery.addEventListener("change", handleForcedColorsChange);

    // Cleanup
    return () => {
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      highContrastQuery.removeEventListener("change", handleHighContrastChange);
      forcedColorsQuery.removeEventListener("change", handleForcedColorsChange);
    };
  }, [checkReducedMotion, checkHighContrast, detectScreenReader, updateConfig]);

  return {
    config,
    updateConfig,
    meetsWCAGAA,
    meetsWCAGAAA,
    calculateContrastRatio,
    getAccessibleColors,
    getAnimationAriaAttributes,
    getKeyboardAttributes,
  };
};

export default useAccessibility;
