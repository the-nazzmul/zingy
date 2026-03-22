"use client";

import { useEffect } from "react";

/** Prevents scrolling the page behind a full-screen overlay (e.g. 404). */
export function LockBodyScroll() {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);
  return null;
}
