"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SKY_BG_START = "#D9F99D";
const SKY_BG_END = "#C0F0F5";
/** Portion of sky-dive scroll (0–1) over which green eases to cyan; keeps cyan for most of the section. */
const SKY_CYAN_RAMP = 0.1;

/**
 * Owns document.body background for sections where multiple scrubbed timelines
 * would otherwise fight or apply wrong "from" colors when inactive (sky-dive,
 * alternating handoff). Hero body tween stays in hero.tsx (scrub 1.5 with text).
 */
export function PageBodyBackground() {
  useGSAP(() => {
    let scrollRef = 0;
    const snapBodyToHeroTop = () => {
      if (window.scrollY <= 0) {
        gsap.set("body", { backgroundColor: "#FDE047" });
      }
    };
    const onScrollSnap = () => {
      if (scrollRef) return;
      scrollRef = requestAnimationFrame(() => {
        scrollRef = 0;
        snapBodyToHeroTop();
      });
    };
    window.addEventListener("scroll", onScrollSnap, { passive: true });
    ScrollTrigger.addEventListener("scrollEnd", snapBodyToHeroTop);

    const sky = ScrollTrigger.create({
      trigger: ".skydive",
      start: "top top",
      end: "+=2000",
      scrub: true,
      onUpdate: (self) => {
        if (!self.isActive) return;
        const t = Math.min(1, self.progress / SKY_CYAN_RAMP);
        const eased = gsap.parseEase("power2.inOut")(t);
        gsap.set("body", {
          backgroundColor: gsap.utils.interpolate(
            SKY_BG_START,
            SKY_BG_END,
            eased,
          ),
        });
      },
    });

    const alternating = ScrollTrigger.create({
      trigger: ".alternating-text-container",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.set("body", { backgroundColor: "#FDE047" });
      },
      onEnterBack: () => {
        gsap.set("body", { backgroundColor: "#FDE047" });
      },
      onLeaveBack: () => {
        gsap.set("body", { backgroundColor: SKY_BG_END });
      },
      onLeave: () => {
        gsap.set("body", { backgroundColor: "#CBEF9A" });
      },
    });

    return () => {
      window.removeEventListener("scroll", onScrollSnap);
      ScrollTrigger.removeEventListener("scrollEnd", snapBodyToHeroTop);
      if (scrollRef) cancelAnimationFrame(scrollRef);
      sky.kill();
      alternating.kill();
    };
  });

  return null;
}
