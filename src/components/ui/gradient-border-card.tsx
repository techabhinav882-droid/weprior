"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface GradientBorderCardProps {
  title: string;
  description?: string;
  footer?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GradientBorderCard({
  title,
  description,
  footer,
  icon,
  className,
  onClick,
}: GradientBorderCardProps) {
  useEffect(() => {
    // Inject styles if not already present
    const styleId = "gradient-border-card-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .gradient-border-card {
          position: relative;
          width: 100%;
          max-width: 320px;
          min-height: 280px;
          background-color: #000;
          display: flex;
          flex-direction: column;
          justify-content: end;
          padding: 16px;
          gap: 12px;
          border-radius: 8px;
          cursor: pointer;
        }

        .gradient-border-card::before {
          content: "";
          position: absolute;
          inset: 0;
          left: -5px;
          margin: auto;
          width: calc(100% + 10px);
          min-width: 200px;
          height: calc(100% + 10px);
          min-height: 264px;
          border-radius: 10px;
          background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
          z-index: -10;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .gradient-border-card::after {
          content: "";
          z-index: -1;
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
          transform: translate3d(0, 0, 0) scale(0.95);
          filter: blur(20px);
          transition: filter 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .gradient-border-card:hover::after {
          filter: blur(30px);
        }

        .gradient-border-card:hover::before {
          transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
        }

        .gradient-border-card .card-heading {
          font-size: 20px;
          text-transform: capitalize;
          font-weight: 700;
          margin: 0;
        }

        .gradient-border-card .card-description {
          font-size: 14px;
          margin: 0;
        }

        .gradient-border-card .card-footer {
          color: #e81cff;
          font-weight: 600;
          font-size: 14px;
          margin: 0;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className={cn("gradient-border-card", className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {icon && <div className="mb-2 text-4xl">{icon}</div>}
      <h3 className="card-heading text-white">{title}</h3>
      {description && <p className="card-description text-white/80">{description}</p>}
      {footer && <p className="card-footer">{footer}</p>}
    </div>
  );
}

