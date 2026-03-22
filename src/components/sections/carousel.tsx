"use client";

import FloatingCan from "@/components/floating-can";
import { FLAVORS } from "@/lib/constants";
import { Center, Environment, View } from "@react-three/drei";
import { useState } from "react";

const Carousel = () => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  const changeFlavor = (index: number) => {
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    setCurrentFlavorIndex(nextIndex);
  };

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />
      <h2 className="relative text-center text-5xl font-bold">
        Choose Your Flavor
      </h2>
      <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 sm:gap-6 sm:px-6">
        <button
          type="button"
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          className="justify-self-start px-3 py-1.5 text-white backdrop-blur-sm"
        >
          Left
        </button>
        <div className="flex min-w-0 justify-center">
          <View className="aspect-square h-[70vmin] min-h-40 w-[70vmin] max-w-full min-w-0">
            <Center position={[0, 0, 1.5]}>
              <FloatingCan
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
        <button
          type="button"
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          className="justify-self-end px-3 py-1.5 text-white backdrop-blur-sm"
        >
          Right
        </button>
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
