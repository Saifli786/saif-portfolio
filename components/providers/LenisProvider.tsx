"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll progress bar
    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) {
      lenis.on("scroll", ({ progress }: { progress: number }) => {
        progressBar.style.width = `${progress * 100}%`;
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
