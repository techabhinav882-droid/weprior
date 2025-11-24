import React from "react";

/**
 * Props for NeonAccentBlobs component
 */
export interface NeonAccentBlobsProps {
  className?: string;
  intensity?: number; // 0.0-2.0 for controlling blob opacity
}

/**
 * NeonAccentBlobs component with CSS radial gradient blobs
 * Creates positioned neon accent elements on left and right sides
 */
export const NeonAccentBlobs: React.FC<NeonAccentBlobsProps> = ({
  className = "",
  intensity = 1.0,
}) => {
  // Calculate opacity based on intensity
  const baseOpacity = Math.min(intensity * 0.3, 0.6);
  const glowOpacity = Math.min(intensity * 0.15, 0.3);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Left side purple blob */}
      <div
        className="absolute -left-32 top-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, rgba(124, 58, 237, ${baseOpacity}) 0%, rgba(124, 58, 237, ${glowOpacity}) 40%, transparent 70%)`,
          transform: "translate(-20%, -20%) scale(1.2)",
          animationDuration: "4s",
          zIndex: 5,
        }}
      />

      {/* Left side cyan accent */}
      <div
        className="absolute -left-16 top-1/2 w-64 h-64 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 255, ${baseOpacity * 0.8}) 0%, rgba(0, 212, 255, ${glowOpacity * 0.8}) 50%, transparent 80%)`,
          transform: "translate(-30%, -50%) scale(0.8)",
          animationDelay: "1s",
          animationDuration: "5s",
          zIndex: 5,
        }}
      />

      {/* Right side magenta blob */}
      <div
        className="absolute -right-32 top-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, rgba(255, 77, 170, ${baseOpacity}) 0%, rgba(255, 77, 170, ${glowOpacity}) 45%, transparent 75%)`,
          transform: "translate(20%, -30%) scale(1.1)",
          animationDelay: "2s",
          animationDuration: "6s",
          zIndex: 5,
        }}
      />

      {/* Right side purple accent */}
      <div
        className="absolute -right-8 top-2/3 w-48 h-48 rounded-full blur-xl animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, rgba(124, 58, 237, ${baseOpacity * 0.6}) 0%, rgba(124, 58, 237, ${glowOpacity * 0.6}) 60%, transparent 90%)`,
          transform: "translate(40%, -40%) scale(0.7)",
          animationDelay: "3s",
          animationDuration: "4.5s",
          zIndex: 5,
        }}
      />

      {/* Top center subtle glow */}
      <div
        className="absolute left-1/2 top-16 w-72 h-72 rounded-full blur-3xl animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 255, ${baseOpacity * 0.4}) 0%, rgba(124, 58, 237, ${glowOpacity * 0.4}) 50%, transparent 80%)`,
          transform: "translate(-50%, -50%) scale(0.6)",
          animationDelay: "0.5s",
          animationDuration: "7s",
          zIndex: 5,
        }}
      />

      {/* Bottom center accent */}
      <div
        className="absolute left-1/2 bottom-16 w-56 h-56 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: `radial-gradient(circle, rgba(255, 77, 170, ${baseOpacity * 0.5}) 0%, rgba(0, 212, 255, ${glowOpacity * 0.5}) 60%, transparent 85%)`,
          transform: "translate(-50%, 50%) scale(0.8)",
          animationDelay: "1.5s",
          animationDuration: "5.5s",
          zIndex: 5,
        }}
      />

      {/* Mobile-specific smaller blobs for better performance */}
      <div className="md:hidden">
        {/* Mobile left blob */}
        <div
          className="absolute -left-16 top-1/4 w-48 h-48 rounded-full blur-2xl animate-pulse-slow"
          style={{
            background: `radial-gradient(circle, rgba(124, 58, 237, ${baseOpacity * 0.7}) 0%, transparent 70%)`,
            transform: "translate(-30%, -20%)",
            animationDuration: "4s",
            zIndex: 5,
          }}
        />

        {/* Mobile right blob */}
        <div
          className="absolute -right-16 top-1/2 w-48 h-48 rounded-full blur-2xl animate-pulse-slow"
          style={{
            background: `radial-gradient(circle, rgba(255, 77, 170, ${baseOpacity * 0.7}) 0%, transparent 70%)`,
            transform: "translate(30%, -50%)",
            animationDelay: "2s",
            animationDuration: "5s",
            zIndex: 5,
          }}
        />
      </div>

      {/* Tablet-specific medium blobs */}
      <div className="hidden md:block lg:hidden">
        {/* Tablet left enhancement */}
        <div
          className="absolute -left-24 top-1/3 w-64 h-64 rounded-full blur-2xl animate-pulse-slow"
          style={{
            background: `radial-gradient(circle, rgba(0, 212, 255, ${baseOpacity * 0.6}) 0%, transparent 75%)`,
            transform: "translate(-25%, -25%)",
            animationDelay: "1s",
            animationDuration: "4.5s",
            zIndex: 5,
          }}
        />

        {/* Tablet right enhancement */}
        <div
          className="absolute -right-24 top-2/3 w-64 h-64 rounded-full blur-2xl animate-pulse-slow"
          style={{
            background: `radial-gradient(circle, rgba(124, 58, 237, ${baseOpacity * 0.6}) 0%, transparent 75%)`,
            transform: "translate(25%, -35%)",
            animationDelay: "2.5s",
            animationDuration: "5.5s",
            zIndex: 5,
          }}
        />
      </div>
    </div>
  );
};

export default NeonAccentBlobs;
