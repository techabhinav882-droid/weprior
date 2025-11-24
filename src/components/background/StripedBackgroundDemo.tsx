import React, { useState } from "react";
import { StripedBackground } from "./StripedBackground";
import { ColorPalette } from "../../types";

/**
 * Demo component showing how to use StripedBackground
 */
export const StripedBackgroundDemo: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const [density, setDensity] = useState(60);
  const [intensity, setIntensity] = useState(1.0);

  const colors: ColorPalette = {
    a: [0.486, 0.227, 0.929], // purple #7C3AED
    b: [0.0, 0.831, 1.0], // cyan #00D4FF
    c: [1.0, 0.302, 0.667], // magenta #FF4DAA
  };

  const handleIntensityChange = (newIntensity: number) => {
    console.log("Intensity changed to:", newIntensity);
  };

  return (
    <div className="relative w-full h-screen">
      {/* StripedBackground component */}
      <StripedBackground
        paused={paused}
        density={density}
        intensity={intensity}
        colors={colors}
        onIntensityChange={handleIntensityChange}
        className="absolute inset-0"
      />

      {/* Demo controls */}
      <div className="relative z-10 p-8 bg-black/20 backdrop-blur-sm rounded-lg m-8">
        <h1 className="text-2xl font-bold text-white mb-6">StripedBackground Demo</h1>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="text-white font-medium w-20">Paused:</label>
            <button
              onClick={() => setPaused(!paused)}
              className={`px-4 py-2 rounded ${paused ? "bg-red-600" : "bg-green-600"} text-white`}
            >
              {paused ? "Resume" : "Pause"}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-white font-medium w-20">Density:</label>
            <input
              type="range"
              min="30"
              max="90"
              value={density}
              onChange={(e) => setDensity(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-white w-12">{density}</span>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-white font-medium w-20">Intensity:</label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-white w-12">{intensity.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-300">
          <p>• Move your mouse for parallax effect</p>
          <p>• Scroll to see phase shifting</p>
          <p>• Uses WebGL2 with Canvas2D fallback</p>
          <p>• Automatically optimizes for mobile devices</p>
          <p>• Respects prefers-reduced-motion setting</p>
        </div>
      </div>
    </div>
  );
};
