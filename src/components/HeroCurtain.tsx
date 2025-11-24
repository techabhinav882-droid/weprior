import React, { useState, useCallback } from "react";
import { HeroCurtainProps } from "../types/components";
import { StripedBackground } from "./background/StripedBackground";
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";
import CTAButtons from "./CTAButtons";
import NeonAccentBlobs from "./NeonAccentBlobs";

/**
 * HeroCurtain component - Complete hero section with animated background
 * Combines StripedBackground, Navigation, HeroContent, and interactive elements
 */
export const HeroCurtain: React.FC<HeroCurtainProps> = ({
  title = "Digital Innovation Platform",
  subtitle = "Transform your business with cutting-edge technology solutions that drive growth and efficiency in the digital age.",
  label = "NEXT GENERATION",
  primaryCTA = { text: "Get Started", href: "/get-started" },
  secondaryCTA = { text: "Learn More", href: "/learn-more" },
  backgroundProps = {},
  className = "",
}) => {
  const [backgroundIntensity, setBackgroundIntensity] = useState(1.0);

  // Handle intensity changes from CTA button interactions
  const handleIntensityChange = useCallback((intensity: number) => {
    setBackgroundIntensity(intensity);
  }, []);

  // Merge background props with intensity control
  const mergedBackgroundProps = {
    density: 60,
    intensity: backgroundIntensity,
    ...backgroundProps,
    onIntensityChange: handleIntensityChange,
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        <StripedBackground {...mergedBackgroundProps} className="w-full h-full" />
      </div>

      {/* Neon Accent Blobs */}
      <NeonAccentBlobs intensity={backgroundIntensity} className="z-5" />

      {/* Navigation */}
      <Navigation className="z-50" />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Spacer for fixed navigation */}
        <div className="h-16" />

        {/* Centered Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <HeroContent label={label} title={title} subtitle={subtitle} className="mb-8" />

            {/* CTA Buttons with Background Interaction */}
            <div className="flex justify-center">
              <CTAButtons
                primaryCTA={primaryCTA}
                secondaryCTA={secondaryCTA}
                onHoverIntensityChange={handleIntensityChange}
              />
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-16" />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 z-5 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};

export default HeroCurtain;
