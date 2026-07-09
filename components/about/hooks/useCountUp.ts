"use client";

import { useState, useEffect } from "react";

/**
 * Animated count-up hook using requestAnimationFrame.
 * Runs from 0 → `target` with easeOutCubic easing when `run` becomes true.
 */
export function useCountUp(target: number, run: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);

  return value;
}
