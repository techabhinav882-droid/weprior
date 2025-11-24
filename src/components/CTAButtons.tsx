import React, { useCallback } from "react";
import { CTAButton } from "../types/components";

/**
 * Props for CTAButtons component
 */
export interface CTAButtonsProps {
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  onHoverIntensityChange?: (intensity: number) => void;
  className?: string;
}

/**
 * CTAButtons component with background interaction capabilities
 * Implements hover effects that trigger background intensity changes
 */
export const CTAButtons: React.FC<CTAButtonsProps> = ({
  primaryCTA,
  secondaryCTA,
  onHoverIntensityChange,
  className = "",
}) => {
  // Handle hover effects that communicate with StripedBackground
  const handlePrimaryHover = useCallback(
    (isHovering: boolean) => {
      if (onHoverIntensityChange) {
        // Increase intensity to 1.5 on hover, return to 1.0 on leave
        onHoverIntensityChange(isHovering ? 1.5 : 1.0);
      }
    },
    [onHoverIntensityChange]
  );

  const handleSecondaryHover = useCallback(
    (isHovering: boolean) => {
      if (onHoverIntensityChange) {
        // Subtle intensity increase to 1.2 on hover, return to 1.0 on leave
        onHoverIntensityChange(isHovering ? 1.2 : 1.0);
      }
    },
    [onHoverIntensityChange]
  );

  if (!primaryCTA && !secondaryCTA) {
    return null;
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 ${className}`}>
      {/* Primary Gradient Button */}
      {primaryCTA && (
        <a
          href={primaryCTA.href}
          onClick={primaryCTA.onClick}
          onMouseEnter={() => handlePrimaryHover(true)}
          onMouseLeave={() => handlePrimaryHover(false)}
          onFocus={() => handlePrimaryHover(true)}
          onBlur={() => handlePrimaryHover(false)}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg overflow-hidden min-w-[160px]"
          role="button"
          aria-describedby="primary-cta-description"
        >
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-magenta-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Animated gradient overlay for extra shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-magenta-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-size-200 animate-gradient-x"></div>

          {/* Glow effect that intensifies on hover */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 via-cyan-500 to-magenta-600 blur-lg opacity-0 group-hover:opacity-40 group-focus:opacity-40 transition-opacity duration-300 scale-110"></div>

          {/* Inner highlight for depth */}
          <div className="absolute inset-0.5 rounded-lg bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <span className="relative z-10 font-semibold tracking-wide">{primaryCTA.text}</span>

          {/* Subtle arrow icon */}
          <svg
            className="relative z-10 ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      )}

      {/* Secondary Ghost Button */}
      {secondaryCTA && (
        <a
          href={secondaryCTA.href}
          onClick={secondaryCTA.onClick}
          onMouseEnter={() => handleSecondaryHover(true)}
          onMouseLeave={() => handleSecondaryHover(false)}
          onFocus={() => handleSecondaryHover(true)}
          onBlur={() => handleSecondaryHover(false)}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg border border-white/20 hover:border-purple-400/50 backdrop-blur-sm bg-white/5 hover:bg-white/10 min-w-[160px]"
          role="button"
          aria-describedby="secondary-cta-description"
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-magenta-600/20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>

          {/* Soft glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-magenta-400/30 blur-md opacity-0 group-hover:opacity-60 group-focus:opacity-60 transition-opacity duration-300 scale-110"></div>

          {/* Inner border highlight */}
          <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors duration-300"></div>

          <span className="relative z-10 font-medium tracking-wide">{secondaryCTA.text}</span>
        </a>
      )}

      {/* Hidden descriptions for screen readers */}
      <div id="primary-cta-description" className="sr-only">
        Primary call-to-action button that increases background animation intensity on hover
      </div>
      <div id="secondary-cta-description" className="sr-only">
        Secondary call-to-action button with subtle background animation effect
      </div>
    </div>
  );
};

export default CTAButtons;
