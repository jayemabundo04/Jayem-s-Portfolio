"use client";

import { useState } from "react";

const MAX_SETTLED_FLAKES = 400;

const snowflakes = Array.from({ length: 70 }, (_, index) => ({
  id: index,
  left: `${(index * 47) % 100}%`,
  delay: `${(index * 0.37) % 9}s`,
  duration: `${8 + ((index * 1.31) % 9)}s`,
  size: `${2 + ((index * 3) % 5)}px`,
  opacity: `${0.25 + ((index * 17) % 55) / 100}`,
}));

export function Snowfall() {
  const [settledFlakes, setSettledFlakes] = useState(0);

  const snowDepth = 4 + Math.min(42, settledFlakes * 0.11);

  const addSettledSnow = () => {
    setSettledFlakes((current) =>
      current >= MAX_SETTLED_FLAKES ? current : current + 1,
    );
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {snowflakes.map((snow) => (
        <span
          key={snow.id}
          className="christmas-snow absolute -top-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.35)]"
          style={{
            left: snow.left,
            width: snow.size,
            height: snow.size,
            opacity: snow.opacity,
            animationDelay: snow.delay,
            animationDuration: snow.duration,
          }}
          onAnimationIteration={addSettledSnow}
        />
      ))}

      <div
        className="absolute inset-x-0 bottom-0 bg-white/95 shadow-[0_-5px_18px_rgba(255,255,255,0.28)] transition-[height] duration-700 ease-out"
        style={{ height: `${snowDepth}px` }}
      >
        <div className="absolute -top-2 left-[8%] h-5 w-[18%] rounded-[50%] bg-white/95" />
        <div className="absolute -top-3 left-[34%] h-6 w-[24%] rounded-[50%] bg-white/95" />
        <div className="absolute -top-2 right-[9%] h-5 w-[20%] rounded-[50%] bg-white/95" />
      </div>
    </div>
  );
}
