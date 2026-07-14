"use client";

import { useState, useEffect } from "react";

/**
 * Returns true if the user has enabled "prefers-reduced-motion" in their OS settings.
 * Used to conditionally disable or simplify animations across the About page.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}
