"use client";
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    // Recalculate on window resize
    window.addEventListener("resize", updateHeight);

    // Recalculate after a short delay to ensure content is rendered
    const timeoutId = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timeoutId);
    };
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex items-center mb-16 md:mb-24 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
            >
              {/* Left/Right Content */}
              <div
                className={`w-full md:w-5/12 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{item.title}</h3>
                  {item.content}
                </div>
              </div>

              {/* Center Timeline Dot */}
              <div className="relative z-10 flex items-center justify-center my-4 md:my-0 md:w-2/12">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/50"></div>
              </div>

              {/* Empty Space on Other Side */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          );
        })}

        {/* Vertical Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] hidden md:block"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-cyan-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
