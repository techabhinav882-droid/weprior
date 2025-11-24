import { useState, useCallback } from "react";
import { BackgroundConfig, BackgroundConfigHook } from "../components/background/types";

/**
 * Custom hook for managing background animation configuration
 *
 * Provides runtime configuration controls for the background animation,
 * allowing developers to adjust parameters without code changes.
 */
export const useBackgroundConfig = (): BackgroundConfigHook => {
  // State management for configuration parameters
  const [paused, setPaused] = useState<boolean>(false);
  const [intensity, setIntensity] = useState<number>(1.5);
  const [speed, setSpeed] = useState<number>(1.0);
  const [lineCount, setLineCount] = useState<number>(80);

  /**
   * Generate BackgroundConfig object from current state
   */
  const getConfig = useCallback((): BackgroundConfig => {
    return {
      lineCount,
      speed,
      glowIntensity: intensity,
      bloom: true, // Default to enabled, will be disabled on mobile in component
    };
  }, [lineCount, speed, intensity]);

  return {
    paused,
    setPaused,
    intensity,
    setIntensity,
    speed,
    setSpeed,
    lineCount,
    setLineCount,
    getConfig,
  };
};

export default useBackgroundConfig;
