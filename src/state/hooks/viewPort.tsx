"use client";

import { useEffect } from "react";

export default function useViewportHeight() {
  useEffect(() => {
    function setViewportHeight() {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    }
    if (!CSS.supports("height: 100dvh")) {
      // Browser doesn't support 100dvh; use JS fallback
      setViewportHeight();
      window.addEventListener("resize", setViewportHeight);
      return () => {
        window.removeEventListener("resize", setViewportHeight);
      };
    }
  }, []);
}
