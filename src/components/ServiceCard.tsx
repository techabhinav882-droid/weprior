import React from 'react';
import { Link } from 'react-router-dom';
import { GradientButton } from '@/components/ui/gradient-button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  slug?: string;
  solutions?: string[];
  buttonText?: string;
}

/**
 * ServiceCard Component
 * 
 * A reusable card with animated neon border gradient effect.
 * 
 * How it works:
 * - Uses a ::before pseudo-element to create the gradient border effect
 * - Idle state: thin neon-blue gradient border on dark background
 * - Hover/Focus state: transforms to full neon background with outer glow
 * - The gradient is achieved using background-clip technique with layering
 * 
 * Customization:
 * - Adjust border gradient colors in the ::before element's background
 * - Modify hover glow by changing box-shadow values
 * - Change hover background in the group-hover:bg-gradient-to-br classes
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href, slug, solutions, buttonText = "Learn More" }) => {
  const cardContent = (
    <>
      {/* Gradient border with glow - always visible */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C036A5] via-[#8B2F8E] to-[#E04C7D] opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(192,54,165,0.3),0_0_30px_rgba(139,47,142,0.2),0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(192,54,165,0.6),0_0_60px_rgba(139,47,142,0.5),0_0_90px_rgba(224,76,125,0.4),0_8px_40px_rgba(0,0,0,0.8)]" />
      
      {/* Inner card background */}
      <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] group-hover:from-[#1A0F1F] group-hover:via-[#241026] group-hover:to-[#0A070D] transition-all duration-300" />
      
      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Icon */}
        <div className="mb-6 text-white/70 group-hover:text-[#E7D4F8] transition-colors duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-light text-white/90 group-hover:text-[#F3EAFD] mb-4 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-base md:text-lg text-white/60 group-hover:text-[#E7D4F8]/80 leading-relaxed transition-colors duration-300">
          {description}
        </p>
        
        {/* Solutions List */}
        {solutions && solutions.length > 0 && (
          <div className="mt-6 space-y-2">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start text-sm text-white/50 group-hover:text-[#E7D4F8]/70 transition-colors duration-300">
                <span className="mr-2 text-white/40 group-hover:text-[#C036A5] transition-colors duration-300">•</span>
                <span>{solution}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Learn More/Read More Button */}
        {slug && (
          <div className="mt-auto pt-6">
            <GradientButton asChild>
              <Link to={slug.startsWith('industries/') ? `/${slug}` : `/services/${slug}`}>{buttonText}</Link>
            </GradientButton>
          </div>
        )}
      </div>
    </>
  );

  const cardClasses = `
    group
    relative
    block
    w-full
    h-full
    min-h-[280px]
    rounded-2xl
    overflow-hidden
    transition-all
    duration-300
    ease-out
    hover:transform
    hover:-translate-y-1
    hover:scale-[1.01]
    focus-visible:transform
    focus-visible:-translate-y-1
    focus-visible:scale-[1.01]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#C036A5]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-black
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <Link
        to={href}
        className={cardClasses}
        aria-label={`Learn more about ${title}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClasses} tabIndex={0} role="article">
      {cardContent}
    </div>
  );
};

export default ServiceCard;
