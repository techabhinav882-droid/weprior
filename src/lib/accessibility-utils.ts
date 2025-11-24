/**
 * Accessibility utility functions for the striped background system
 */

/**
 * WCAG color contrast utilities
 */
export class ColorContrast {
  /**
   * Convert hex color to RGB values
   */
  static hexToRgb(hex: string): [number, number, number] {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
      : [0, 0, 0];
  }

  /**
   * Calculate relative luminance of a color
   */
  static getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  /**
   * Calculate contrast ratio between two colors
   */
  static getContrastRatio(color1: string, color2: string): number {
    const [r1, g1, b1] = this.hexToRgb(color1);
    const [r2, g2, b2] = this.hexToRgb(color2);

    const lum1 = this.getLuminance(r1, g1, b1);
    const lum2 = this.getLuminance(r2, g2, b2);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  }

  /**
   * Check if color combination meets WCAG AA standard (4.5:1)
   */
  static meetsWCAGAA(foreground: string, background: string): boolean {
    return this.getContrastRatio(foreground, background) >= 4.5;
  }

  /**
   * Check if color combination meets WCAG AAA standard (7:1)
   */
  static meetsWCAGAAA(foreground: string, background: string): boolean {
    return this.getContrastRatio(foreground, background) >= 7.0;
  }

  /**
   * Adjust color brightness to meet contrast requirements
   */
  static adjustForContrast(
    foreground: string,
    background: string,
    targetRatio: number = 4.5
  ): string {
    const currentRatio = this.getContrastRatio(foreground, background);

    if (currentRatio >= targetRatio) {
      return foreground;
    }

    const [r, g, b] = this.hexToRgb(foreground);
    const [bgR, bgG, bgB] = this.hexToRgb(background);
    const bgLum = this.getLuminance(bgR, bgG, bgB);

    // Determine if we need to make foreground lighter or darker
    const shouldLighten = bgLum < 0.5;

    let adjustedR = r;
    let adjustedG = g;
    let adjustedB = b;

    // Iteratively adjust brightness
    for (let i = 0; i < 100; i++) {
      const testLum = this.getLuminance(adjustedR, adjustedG, adjustedB);
      const testRatio = (Math.max(testLum, bgLum) + 0.05) / (Math.min(testLum, bgLum) + 0.05);

      if (testRatio >= targetRatio) {
        break;
      }

      if (shouldLighten) {
        adjustedR = Math.min(255, adjustedR + 2);
        adjustedG = Math.min(255, adjustedG + 2);
        adjustedB = Math.min(255, adjustedB + 2);
      } else {
        adjustedR = Math.max(0, adjustedR - 2);
        adjustedG = Math.max(0, adjustedG - 2);
        adjustedB = Math.max(0, adjustedB - 2);
      }
    }

    return `#${adjustedR.toString(16).padStart(2, "0")}${adjustedG.toString(16).padStart(2, "0")}${adjustedB.toString(16).padStart(2, "0")}`;
  }
}

/**
 * Screen reader utilities
 */
export class ScreenReader {
  /**
   * Create accessible description for animated background
   */
  static getBackgroundDescription(isAnimated: boolean, intensity: number): string {
    if (!isAnimated) {
      return "Static decorative background with vertical gradient stripes";
    }

    const intensityLevel = intensity > 1.5 ? "high" : intensity > 1.0 ? "medium" : "low";
    return `Animated background with ${intensityLevel} intensity vertical neon stripes moving gently`;
  }

  /**
   * Generate ARIA live region announcement for animation state changes
   */
  static getAnimationStateAnnouncement(paused: boolean, reducedMotion: boolean): string {
    if (reducedMotion) {
      return "Animation disabled due to reduced motion preference";
    }

    return paused ? "Background animation paused" : "Background animation resumed";
  }

  /**
   * Create accessible label for interactive elements over animated background
   */
  static getInteractiveLabel(elementType: string, hasBackgroundInteraction: boolean): string {
    const baseLabel = `${elementType}`;

    if (hasBackgroundInteraction) {
      return `${baseLabel} - interacts with background animation`;
    }

    return baseLabel;
  }
}

/**
 * Keyboard navigation utilities
 */
export class KeyboardNavigation {
  /**
   * Generate focus ring styles that are visible against animated background
   */
  static getFocusStyles(backgroundColor: string = "#05050a"): React.CSSProperties {
    const focusColor = ColorContrast.meetsWCAGAA("#ffffff", backgroundColor)
      ? "#ffffff"
      : "#000000";

    return {
      outline: `3px solid ${focusColor}`,
      outlineOffset: "2px",
      boxShadow: `0 0 0 1px ${backgroundColor}, 0 0 8px rgba(124, 58, 237, 0.6)`,
    };
  }

  /**
   * Create keyboard event handler for custom interactive elements
   */
  static createKeyboardHandler(onClick: () => void, onEscape?: () => void) {
    return (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          onClick();
          break;
        case "Escape":
          if (onEscape) {
            event.preventDefault();
            onEscape();
          }
          break;
      }
    };
  }

  /**
   * Generate tab index based on element state and accessibility settings
   */
  static getTabIndex(
    isInteractive: boolean,
    isDisabled: boolean = false,
    keyboardNavigationEnabled: boolean = true
  ): number {
    if (!keyboardNavigationEnabled || isDisabled || !isInteractive) {
      return -1;
    }
    return 0;
  }
}

/**
 * Motion and animation utilities
 */
export class MotionAccessibility {
  /**
   * Check if user prefers reduced motion
   */
  static prefersReducedMotion(): boolean {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /**
   * Get safe animation duration based on user preferences
   */
  static getSafeAnimationDuration(defaultDuration: number, reducedMotion: boolean = false): number {
    if (reducedMotion || this.prefersReducedMotion()) {
      return 0;
    }
    return defaultDuration;
  }

  /**
   * Get safe animation properties for CSS
   */
  static getSafeAnimationProps(reducedMotion: boolean = false): React.CSSProperties {
    if (reducedMotion || this.prefersReducedMotion()) {
      return {
        animation: "none",
        transition: "none",
      };
    }

    return {};
  }

  /**
   * Create reduced motion fallback styles
   */
  static getReducedMotionFallback(colors: {
    a: [number, number, number];
    b: [number, number, number];
    c: [number, number, number];
  }): React.CSSProperties {
    const [r1, g1, b1] = colors.a.map((c) => Math.floor(c * 255));
    const [r2, g2, b2] = colors.b.map((c) => Math.floor(c * 255));
    const [r3, g3, b3] = colors.c.map((c) => Math.floor(c * 255));

    return {
      background: `
        linear-gradient(90deg, 
          rgba(${r1}, ${g1}, ${b1}, 0.1) 0%, 
          rgba(${r2}, ${g2}, ${b2}, 0.05) 25%,
          rgba(${r3}, ${g3}, ${b3}, 0.1) 50%,
          rgba(${r2}, ${g2}, ${b2}, 0.05) 75%,
          rgba(${r1}, ${g1}, ${b1}, 0.1) 100%
        ),
        linear-gradient(180deg, #05050a 0%, #0b0f18 100%)
      `,
    };
  }
}

/**
 * Accessibility validation utilities
 */
export class AccessibilityValidator {
  /**
   * Validate component accessibility compliance
   */
  static validateComponent(element: HTMLElement): {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  } {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check for proper ARIA attributes
    if (element.hasAttribute("aria-hidden") && element.getAttribute("aria-hidden") !== "true") {
      if (!element.hasAttribute("aria-label") && !element.hasAttribute("aria-labelledby")) {
        warnings.push("Interactive element should have aria-label or aria-labelledby");
      }
    }

    // Check for keyboard accessibility
    const isInteractive = element.tabIndex >= 0 || element.hasAttribute("onclick");
    if (isInteractive && !element.hasAttribute("role")) {
      warnings.push("Interactive element should have explicit role attribute");
    }

    // Check color contrast for text elements
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.color;
    const backgroundColor = computedStyle.backgroundColor;

    if (
      color &&
      backgroundColor &&
      color !== "rgba(0, 0, 0, 0)" &&
      backgroundColor !== "rgba(0, 0, 0, 0)"
    ) {
      // Convert RGB to hex for contrast checking
      const rgbToHex = (rgb: string): string => {
        const match = rgb.match(/\d+/g);
        if (!match) return "#000000";
        const [r, g, b] = match.map(Number);
        return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
      };

      const foregroundHex = rgbToHex(color);
      const backgroundHex = rgbToHex(backgroundColor);

      if (!ColorContrast.meetsWCAGAA(foregroundHex, backgroundHex)) {
        errors.push(
          `Insufficient color contrast: ${ColorContrast.getContrastRatio(foregroundHex, backgroundHex).toFixed(2)}:1 (minimum 4.5:1 required)`
        );
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  /**
   * Generate accessibility report for the entire component tree
   */
  static generateReport(rootElement: HTMLElement): {
    totalElements: number;
    accessibleElements: number;
    errors: Array<{ element: string; issues: string[] }>;
    warnings: Array<{ element: string; issues: string[] }>;
  } {
    const allElements = rootElement.querySelectorAll("*");
    const report = {
      totalElements: allElements.length,
      accessibleElements: 0,
      errors: [] as Array<{ element: string; issues: string[] }>,
      warnings: [] as Array<{ element: string; issues: string[] }>,
    };

    allElements.forEach((element, index) => {
      const validation = this.validateComponent(element as HTMLElement);

      if (validation.isValid) {
        report.accessibleElements++;
      }

      if (validation.errors.length > 0) {
        report.errors.push({
          element: `Element ${index}: ${element.tagName.toLowerCase()}${element.className ? "." + element.className.split(" ").join(".") : ""}`,
          issues: validation.errors,
        });
      }

      if (validation.warnings.length > 0) {
        report.warnings.push({
          element: `Element ${index}: ${element.tagName.toLowerCase()}${element.className ? "." + element.className.split(" ").join(".") : ""}`,
          issues: validation.warnings,
        });
      }
    });

    return report;
  }
}
