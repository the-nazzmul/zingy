"use client";

import ArrowButton from "@/components/arrow-button";
import FloatingCan from "@/components/floating-can";
import { FLAVORS } from "@/lib/constants";
import { WavyCircles } from "@/components/wavy-circles";
import { Group } from "three";
import { useRef, useState } from "react";
import { Center, Environment, View } from "@react-three/drei";
import gsap from "gsap";

const SPINS_ON_CHANGE = 8;

const Carousel = () => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);
  const sodaCanRef = useRef<Group>(null);

  const changeFlavor = (index: number) => {
    if (!sodaCanRef.current) return;

    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const tl = gsap.timeline();

    tl.to(
      sodaCanRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0,
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: FLAVORS[nextIndex].color,
          fill: FLAVORS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      )
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: -10,
          opacity: 0,
        },
        0,
      )
      .to(
        {},
        {
          onStart: () => setCurrentFlavorIndex(nextIndex),
        },
        0.5,
      )
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: 0,
          opacity: 1,
        },
        0.7,
      );
  };

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />
      <WavyCircles className="absolute top-1/2 left-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />
      <h2 className="relative text-center text-5xl font-bold">
        Choose Your Flavor
      </h2>
      <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 sm:gap-6 sm:px-6">
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="left"
          label="Previous Flavor"
        />

        <div className="flex min-w-0 justify-center">
          <View className="aspect-square h-[70vmin] min-h-40 w-[70vmin] max-w-full min-w-0">
            <Center position={[0, 0, 1.5]}>
              <FloatingCan
                ref={sodaCanRef}
                floatIntensity={0.3}
                rotationIntensity={1}
                flavor={FLAVORS[currentFlavorIndex].flavor}
              />
            </Center>
            <Environment
              files="/hdrs/lobby.hdr"
              environmentIntensity={0.6}
              environmentRotation={[0, 3, 0]}
            />
            <directionalLight intensity={6} position={[0, 1, 1]} />
          </View>
        </div>
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="right"
          label="Next Flavor"
        />
      </div>
      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <div className="mt-2 text-2xl font-normal opacity-90">
          12 cans - $35.99
        </div>
      </div>
    </section>
  );
};

export default Carousel;
