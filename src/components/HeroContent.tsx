import React from "react";
import { HeroContentProps } from "../types/components";

/**
 * HeroContent component with responsive typography and gradient text effects
 * Implements centered content layout with label, title, subtitle, and CTA buttons
 */
export const HeroContent: React.FC<HeroContentProps> = ({
  label = "NEXT GENERATION",
  title = "Digital Innovation Platform",
  subtitle = "Transform your business with cutting-edge technology solutions that drive growth and efficiency in the digital age.",
  primaryCTA = { text: "Get Started", href: "/get-started" },
  secondaryCTA = { text: "Learn More", href: "/learn-more" },
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center space-y-8 ${className}`}>
      {/* Uppercase Label */}
      {label && (
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block px-4 py-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-300 bg-white/5 border border-purple-400/30 rounded-full backdrop-blur-sm">
            {label}
          </span>
        </div>
      )}

      {/* Main Headline with Gradient Text */}
      {title && (
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-magenta-400 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
              {title}
            </span>
          </h1>
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        </div>
      )}

      {/* CTA Buttons */}
      {(primaryCTA || secondaryCTA) && (
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 sm:gap-6"
          style={{ animationDelay: "0.8s" }}
        >
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              onClick={primaryCTA.onClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg overflow-hidden"
            >
              {/* Primary button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-magenta-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-magenta-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient-x"></div>

              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 via-cyan-500 to-magenta-600 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>

              <span className="relative z-10">{primaryCTA.text}</span>
            </a>
          )}

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              onClick={secondaryCTA.onClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg border border-white/20 hover:border-purple-400/50 backdrop-blur-sm bg-white/5 hover:bg-white/10"
            >
              <span className="relative z-10">{secondaryCTA.text}</span>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-magenta-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
        </div>
      )}

      {/* Scroll indicator */}
      <div className="animate-fade-in-up mt-16" style={{ animationDelay: "1.0s" }}>
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm uppercase tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
