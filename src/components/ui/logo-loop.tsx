import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Logo {
  src: string;
  alt: string;
  href?: string;
}

interface LogoLoopProps {
  logos: Logo[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  logoHeight?: number;
  gap?: number;
  hoverSpeed?: number;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "#111827",
  ariaLabel = "Technology logos",
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const [offset, setOffset] = useState(0);

  const isHorizontal = direction === "left" || direction === "right";
  const isReverse = direction === "right" || direction === "down";

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    // Stop animation if a specific logo is hovered
    if (hoveredLogoIndex !== null) return;

    const currentSpeed = isHovered ? hoverSpeed : speed;
    if (currentSpeed === 0) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        const maxOffset = isHorizontal
          ? (logoHeight + gap) * logos.length
          : (logoHeight + gap) * logos.length;

        if (isReverse) {
          return prev >= maxOffset ? 0 : prev + 1;
        } else {
          return prev <= -maxOffset ? 0 : prev - 1;
        }
      });
    }, 1000 / currentSpeed);

    return () => clearInterval(interval);
  }, [
    isHovered,
    hoveredLogoIndex,
    speed,
    hoverSpeed,
    logos.length,
    logoHeight,
    gap,
    isHorizontal,
    isReverse,
  ]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
      style={{
        maskImage: fadeOut
          ? isHorizontal
            ? `linear-gradient(to right, ${fadeOutColor}00 0%, ${fadeOutColor} 10%, ${fadeOutColor} 90%, ${fadeOutColor}00 100%)`
            : `linear-gradient(to bottom, ${fadeOutColor}00 0%, ${fadeOutColor} 10%, ${fadeOutColor} 90%, ${fadeOutColor}00 100%)`
          : undefined,
        WebkitMaskImage: fadeOut
          ? isHorizontal
            ? `linear-gradient(to right, ${fadeOutColor}00 0%, ${fadeOutColor} 10%, ${fadeOutColor} 90%, ${fadeOutColor}00 100%)`
            : `linear-gradient(to bottom, ${fadeOutColor}00 0%, ${fadeOutColor} 10%, ${fadeOutColor} 90%, ${fadeOutColor}00 100%)`
          : undefined,
      }}
    >
      <div
        className={`flex ${isHorizontal ? "flex-row" : "flex-col"} items-center`}
        style={{
          transform: isHorizontal ? `translateX(${offset}px)` : `translateY(${offset}px)`,
          gap: `${gap}px`,
        }}
      >
        {duplicatedLogos.map((logo, index) => {
          const isHoveredLogo = hoveredLogoIndex === index;

          return (
            <div
              key={index}
              className="flex-shrink-0 relative group"
              style={{
                height: `${logoHeight}px`,
                width: `${logoHeight}px`,
                transform: isHoveredLogo ? "scale(1.3)" : "scale(1)",
                transition: "transform 300ms ease-out",
                zIndex: isHoveredLogo ? 50 : 1,
              }}
              onMouseEnter={(e) => {
                setHoveredLogoIndex(index);
                const rect = e.currentTarget.getBoundingClientRect();
                setTooltipPosition({
                  x: rect.left + rect.width / 2,
                  y: rect.bottom + 12,
                });
              }}
              onMouseLeave={() => {
                setHoveredLogoIndex(null);
                setTooltipPosition(null);
              }}
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              )}

              {/* Tooltip rendered via portal */}
              {isHoveredLogo &&
                tooltipPosition &&
                createPortal(
                  <div
                    className="fixed bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl border border-gray-700 animate-fadeIn pointer-events-none"
                    style={{
                      left: `${tooltipPosition.x}px`,
                      top: `${tooltipPosition.y}px`,
                      transform: "translateX(-50%)",
                      zIndex: 9999,
                    }}
                  >
                    {logo.alt.charAt(0).toUpperCase() + logo.alt.slice(1)}
                    <div
                      className="absolute w-2 h-2 bg-gray-900 rotate-45 border-l border-t border-gray-700"
                      style={{
                        left: "50%",
                        top: "-5px",
                        transform: "translateX(-50%)",
                      }}
                    ></div>
                  </div>,
                  document.body
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
