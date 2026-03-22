"use client";

import { Bounded } from "@/components/bounded";
import AlternatingTextScene from "@/components/scenes/alternating-text-scene";
import { ALTERNATING_TEXT } from "@/lib/constants";
import { View } from "@react-three/drei";
import clsx from "clsx";

const AlternatingText = () => {
  return (
    <Bounded className="alternating-text-container relative bg-yellow-300 text-sky-950">
      <div>
        <div className="relative z-100 grid">
          {/* view goes here */}
          <View className="alternating-text-view absolute top-0 left-0 h-screen w-full">
            <AlternatingTextScene />
          </View>

          {ALTERNATING_TEXT.map((item, index) => (
            <div
              key={item.heading}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/20",
                )}
              >
                <h3 className="text-6xl font-bold text-balance">
                  {item.heading}
                </h3>
                <p className="mt-4 text-xl">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
