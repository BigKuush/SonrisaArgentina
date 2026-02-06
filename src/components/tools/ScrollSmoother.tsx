"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollSmoother } from "@/lib/plugins";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherComponent = () => {
  const pathname = usePathname();
  const smootherRef = useRef<any>(null);

  useLayoutEffect(() => {
    try {
      const wrapper = document.getElementById("smooth-wrapper");
      const content = document.getElementById("smooth-content");
      if (!wrapper || !content) {
        return;
      }

      // убиваем старый инстанс, если есть
      const existing = ScrollSmoother.get();
      if (existing) existing.kill();

      const deviceWidth = window.innerWidth;
      
      // На мобильных (до 1024px) не используем ScrollSmoother вообще
      if (deviceWidth < 1025) {
        ScrollTrigger.refresh();
        return;
      }

      smootherRef.current = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
      });
      // ensure ScrollTrigger recalculates after smoother init and images/layout
      ScrollTrigger.refresh(true);
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    } catch (e) {
      console.log("scrollSmootherError", e);
    }

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, [pathname]);

  return <div></div>;
};

export default ScrollSmootherComponent;
