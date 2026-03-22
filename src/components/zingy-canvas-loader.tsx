"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

/**
 * Replaces drei's default Loader — same useProgress hook, Zingy colors and motion.
 */
export function ZingyCanvasLoader() {
  const { active, progress } = useProgress();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (active) {
      const showId = window.setTimeout(() => setShown(true), 0);
      return () => clearTimeout(showId);
    }
    const hideId = window.setTimeout(() => setShown(false), 300);
    return () => clearTimeout(hideId);
  }, [active]);

  if (!shown) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-8 z-100 flex justify-center px-4 transition-opacity duration-300"
      style={{ opacity: active ? 1 : 0 }}
      role="status"
      aria-live="polite"
      aria-label="Loading 3D scene"
    >
      <div className="flex items-center gap-4 rounded-full border-2 border-orange-500 bg-yellow-300/95 px-5 py-2.5 shadow-[0_12px_40px_-8px_rgba(15,23,42,0.25)] backdrop-blur-md">
        <span className="text-xs font-bold tracking-[0.2em] text-sky-950 uppercase md:text-sm">
          Zinging up
        </span>
        <div className="flex items-center gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="animate-zingy-fizz-dot size-2.5 shrink-0 rounded-full bg-orange-600"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
        <span className="min-w-[3ch] text-right text-xs font-semibold text-sky-800 tabular-nums md:text-sm">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
