import React, { useEffect, useRef } from "react";
import { BackgroundCanvas } from "./BackgroundCanvas";
import { HeroWithBackgroundProps } from "./types";

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

/**
 * HeroWithBackground component - Complete hero section with animated neon background
 *
 * This component demonstrates the BackgroundCanvas effect with realistic content layout,
 * including navigation, hero content, and CSS blur blobs for visual depth.
 */
export const HeroWithBackground: React.FC<HeroWithBackgroundProps> = ({
  config,
  paused = false,
  className = "",
  children,
}) => {
  const unicornRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const UnicornStudio = window.UnicornStudio;

    if (typeof UnicornStudio !== "undefined" && unicornRef.current) {
      console.log("Adding Unicorn Studio scene to:", unicornRef.current.id);
      UnicornStudio.addScene({
        elementId: unicornRef.current.id,
        projectId: "GyvtJDiNd3xGNM4Ssa4V",
        scale: 1,
        dpi: 1.5,
        lazyLoad: false,
        altText: "Interactive background animation",
        ariaLabel: "Unicorn Studio background animation",
      })
        .then((scene: any) => {
          sceneRef.current = scene;
          console.log("Unicorn Studio scene added successfully:", scene);
        })
        .catch((err: any) => {
          console.error("Failed to add Unicorn Studio scene:", err);
        });
    } else {
      console.log("UnicornStudio debug:", {
        available: typeof UnicornStudio !== "undefined",
        refReady: !!unicornRef.current,
      });
    }

    return () => {
      if (sceneRef.current?.destroy) {
        console.log("Destroying Unicorn Studio scene");
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
    };
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden bg-gray-900 ${className}`}>
      {/* Background layer - WebGL canvas with proper z-index */}
      <BackgroundCanvas config={config} paused={paused} className="absolute inset-0 z-0" />

      {/* Unicorn Studio Animation Background */}
      <div
        id="unicorn-hero-animation"
        ref={unicornRef}
        className="absolute inset-0 w-full h-full"
        style={{
          minHeight: "100vh",
          zIndex: 1,
          backgroundColor: "rgba(255, 237, 213, 0.3)", // Fallback background
          transform: "scale(1.3)", // Zoom to hide "Made with Unicorn Studio" badge
          pointerEvents: "none", // Ensure clicks pass through if needed, though z-index handles it
        }}
      />

      {/* CSS blur blobs for additional visual depth - Responsive sizing */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top-left blur blob - Neon violet/purple gradient */}
        <div
          className="absolute -top-20 sm:-top-32 md:-top-40 -left-20 sm:-left-32 md:-left-40 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-violet-500/40 via-purple-500/30 to-fuchsia-600/25 rounded-full blur-3xl opacity-80 animate-pulse"
          style={{
            filter: "blur(40px) sm:blur(50px) md:blur(60px)",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(147, 51, 234, 0.3) 40%, rgba(192, 38, 211, 0.25) 100%)",
          }}
        />

        {/* Top-left secondary glow */}
        <div className="absolute -top-10 sm:-top-16 md:-top-20 -left-10 sm:-left-16 md:-left-20 w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 bg-gradient-to-br from-violet-400/20 to-purple-500/15 rounded-full blur-2xl opacity-60" />

        {/* Bottom-right blur blob - Neon cyan/blue gradient */}
        <div
          className="absolute -bottom-20 sm:-bottom-32 md:-bottom-40 -right-20 sm:-right-32 md:-right-40 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-gradient-to-tl from-cyan-400/35 via-blue-500/25 to-indigo-600/20 rounded-full blur-3xl opacity-75 animate-pulse"
          style={{
            filter: "blur(50px) sm:blur(65px) md:blur(80px)",
            background:
              "radial-gradient(circle, rgba(0, 212, 255, 0.35) 0%, rgba(59, 130, 246, 0.25) 50%, rgba(79, 70, 229, 0.2) 100%)",
            animationDelay: "1s",
          }}
        />

        {/* Bottom-right secondary glow */}
        <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 -right-10 sm:-right-16 md:-right-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-gradient-to-tl from-cyan-300/15 to-blue-400/10 rounded-full blur-2xl opacity-50" />

        {/* Center accent blob - Magenta/pink for additional depth */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-gradient-to-r from-pink-500/20 via-fuchsia-500/15 to-violet-500/20 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{
            filter: "blur(30px) sm:blur(35px) md:blur(40px)",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Content layer with proper z-index stacking */}
      <div className="relative z-[100] flex flex-col min-h-screen">
        {children || (
          <>
            {/* Navigation Bar */}
            <nav
              className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12 lg:px-16"
              role="navigation"
              aria-label="Main navigation"
            >
              {/* Brand Logo - Responsive sizing */}
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg">N</span>
                </div>
                <span className="text-white font-semibold text-lg sm:text-xl">NeonTech</span>
              </div>

              {/* Navigation Menu - Hidden on mobile, visible on larger screens */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-3 py-2 text-sm xl:text-base"
                  aria-label="Navigate to home section"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-3 py-2 text-sm xl:text-base"
                  aria-label="Navigate to about section"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-3 py-2 text-sm xl:text-base"
                  aria-label="Navigate to services section"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-3 py-2 text-sm xl:text-base"
                  aria-label="Navigate to contact section"
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button - Larger touch target */}
              <button
                className="lg:hidden text-white p-3 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg min-w-[48px] min-h-[48px] flex items-center justify-center"
                aria-label="Open mobile navigation menu"
                aria-expanded="false"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </nav>

            {/* Hero Content - Enhanced responsive design */}
            <main
              className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:px-16 lg:py-16"
              role="main"
            >
              <div className="max-w-5xl mx-auto text-center">
                {/* Hero Heading - Responsive typography */}
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Cyber Neon
                  </span>
                  <br />
                  <span className="text-white">Experience</span>
                </h1>

                {/* Hero Description - Responsive text sizing */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                  Immerse yourself in a futuristic digital landscape with stunning WebGL-powered
                  animations and cutting-edge neon aesthetics that respond to your every
                  interaction.
                </p>

                {/* Call-to-Action Buttons - Enhanced mobile layout */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md xs:max-w-none mx-auto">
                  <button
                    className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 min-w-[140px] sm:min-w-[160px] min-h-[48px] sm:min-h-[52px]"
                    aria-label="Get started with the cyber neon experience"
                  >
                    Get Started
                  </button>
                  <button
                    className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold text-sm sm:text-base rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 min-w-[140px] sm:min-w-[160px] min-h-[48px] sm:min-h-[52px]"
                    aria-label="Learn more about our technology"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroWithBackground;
