"use client";

import { Bounded } from "@/components/bounded";
import SkyDiveScene from "@/components/scenes/sky-dive-scene";
import { View } from "@react-three/drei";

const SkyDive = () => {
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">Dive into better health</h2>
      <View className="h-screen w-screen">
        <SkyDiveScene flavor="blackCherry" sentence="Dive into better health" />
      </View>
    </Bounded>
  );
};

export default SkyDive;
