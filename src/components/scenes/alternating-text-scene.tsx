"use client";

import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import FloatingCan from "@/components/floating-can";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const AlternatingTextScene = () => {
  const canRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const bgColors = ["#FDE047", "#E9CFF6", "#CBEF9A"];

  useGSAP(
    () => {
      if (!canRef.current) return;

      const sections = gsap.utils.toArray(".alternating-section");

      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-view",
          endTrigger: ".alternating-text-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      sections.forEach((_, index) => {
        if (!canRef.current) return;
        if (index === 0) return;

        const isOdd = index % 2 !== 0;

        const xPosition = isDesktop ? (isOdd ? "-1" : "1") : 0;
        const yRotation = isDesktop ? (isOdd ? ".4" : "-.4") : 0;

        scrollTL
          .to(canRef.current.position, {
            x: xPosition,
            ease: "circ.inOut",
            delay: 0.5,
          })
          .to(
            canRef.current.rotation,
            {
              y: yRotation,
              ease: "back.inOut",
            },
            "<",
          )
          .fromTo(
            ".alternating-text-container",
            { backgroundColor: bgColors[index - 1] },
            { backgroundColor: bgColors[index], overwrite: "auto" },
          );
      });
    },
    { dependencies: [isDesktop] },
  );

  return (
    <group
      ref={canRef}
      position-x={isDesktop ? 1 : 0}
      rotateY={isDesktop ? -0.3 : 0}
    >
      <FloatingCan flavor="strawberryLemonade" />
      <Environment files={"/hdrs/lobby.hdr"} environmentIntensity={1.5} />
    </group>
  );
};

export default AlternatingTextScene;
