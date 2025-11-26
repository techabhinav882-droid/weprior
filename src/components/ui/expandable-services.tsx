import { useState } from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "./gradient-button";

interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  slug: string;
}

interface ExpandableServicesProps {
  services: Service[];
}

export function ExpandableServices({ services }: ExpandableServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Desktop Version - Expandable Sections */}
      <div className="hidden md:flex w-full h-[600px] overflow-hidden">
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          const width = isHovered ? "60%" : isOtherHovered ? "13.33%" : "25%";

          return (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group border-spacing-5"
              style={{
                width,
                transition: "width 400ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image with Zoom Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{
                  backgroundImage: `url(${service.image})`,
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
              />

              {/* Dark Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 transition-opacity duration-400"
                style={{
                  opacity: isHovered ? 0.85 : 0.9,
                }}
              />

              {/* Elegant Transparent Number in Background */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity: isHovered ? 0.12 : 0.06,
                  transition: "opacity 400ms ease",
                }}
              >
                <span
                  className="font-bold leading-none select-none"
                  style={{
                    fontSize: isHovered ? "28rem" : "20rem",
                    color: service.accentColor,
                    transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {service.number}
                </span>
              </div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col items-center justify-center px-8 z-10">
                {/* Subtle Accent Shape */}
                <div
                  className="absolute w-48 h-48 rounded-full opacity-10 blur-2xl transition-all duration-400"
                  style={{
                    background: `radial-gradient(circle, ${service.accentColor} 0%, transparent 70%)`,
                    transform: isHovered ? "scale(1.3)" : "scale(1)",
                  }}
                />

                {/* Elegant Title */}
                <h2
                  className="relative font-bold text-center uppercase tracking-widest mb-3 transition-all duration-400 text-white"
                  style={{
                    fontSize: isHovered ? "4rem" : "2.5rem",
                    letterSpacing: isHovered ? "0.3em" : "0.2em",
                    lineHeight: 1.2,
                    textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {service.title}
                </h2>

                {/* Accent Line */}
                <div
                  className="h-1 mb-4 transition-all duration-400 rounded-full"
                  style={{
                    width: isHovered ? "120px" : "60px",
                    backgroundColor: service.accentColor,
                    boxShadow: `0 0 20px ${service.accentColor}`,
                  }}
                />

                {/* Subtitle */}
                <p
                  className="relative text-gray-200 text-center font-medium tracking-wide transition-all duration-400 mb-6"
                  style={{
                    fontSize: isHovered ? "1.25rem" : "1rem",
                    opacity: isHovered ? 1 : 0.8,
                  }}
                >
                  {service.subtitle}
                </p>

                {/* Description (shown only on hover) */}
                {isHovered && (
                  <div className="mt-2 text-gray-300 text-center max-w-md opacity-0 animate-fadeIn mb-6">
                    <p className="text-sm leading-relaxed">{service.description}</p>
                  </div>
                )}

                {/* Know More Button (shown only on hover) */}
                {isHovered && (
                  <div className="mt-4 opacity-0 animate-fadeIn">
                    <GradientButton asChild>
                      <Link to={`/services/${service.slug}`}>Know More →</Link>
                    </GradientButton>
                  </div>
                )}
              </div>

              {/* Bottom Accent Line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-400"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)`,
                  opacity: isHovered ? 1 : 0,
                  boxShadow: isHovered ? `0 0 20px ${service.accentColor}` : "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Version - Stacked Cards */}
      <div className="md:hidden grid grid-cols-1 gap-6 px-4 py-8">
        {services.map((service, index) => (
          <div key={index} className="relative h-96 overflow-hidden rounded-2xl shadow-xl">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

            {/* Transparent Number */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-8">
              <span
                className="font-bold text-[12rem] leading-none select-none"
                style={{
                  color: service.accentColor,
                  fontFamily: "Georgia, serif",
                }}
              >
                {service.number}
              </span>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6 z-10">
              <h2
                className="relative font-bold text-4xl text-center uppercase tracking-widest mb-3 text-white"
                style={{
                  textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                }}
              >
                {service.title}
              </h2>

              <div
                className="h-1 w-20 mb-4 rounded-full"
                style={{
                  backgroundColor: service.accentColor,
                  boxShadow: `0 0 15px ${service.accentColor}`,
                }}
              />

              <p className="relative text-gray-200 text-lg text-center font-medium tracking-wide mb-4">
                {service.subtitle}
              </p>

              <p className="text-gray-300 text-sm text-center mb-6 max-w-sm">
                {service.description}
              </p>

              <GradientButton asChild>
                <Link to={`/services/${service.slug}`}>Know More →</Link>
              </GradientButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
