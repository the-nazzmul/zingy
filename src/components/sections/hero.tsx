"use client";

import { Bounded } from "@/components/bounded";
import { Bubbles } from "@/components/bubbles";
import { TextSplitter } from "@/components/text-splitter";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useStore } from "@/hooks/useStore";
import { useGSAP } from "@gsap/react";
import { View } from "@react-three/drei";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HeroScene from "@/components/scenes/hero-scene";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const ready = useStore((state) => state.ready);

  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTL = gsap.timeline();

      introTL
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            y: 30,
            opacity: 0,
          },
          "+=.8",
        )
        .from(".hero-body", {
          y: 10,
          opacity: 0,
        })
        .from(".hero-button", {
          y: 10,
          opacity: 0,
          duration: 0.6,
        });

      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTL
        .fromTo(
          "body",
          { backgroundColor: "#FDE047" },
          { backgroundColor: "#D9F99D", overwrite: "auto" },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <Bounded className="hero opacity-0">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <HeroScene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}
      <div className="grid">
        <div className="grid h-screen place-content-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text="Live Gutsy"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <h3 className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              Soda Perfected
            </h3>
            <p className="hero-body text-2xl font-normal text-sky-950">
              3-5g sugar. 9g fiber. 5 delicious flavors.
            </p>
            <button
              className={clsx(
                "hero-button mt-12 rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
              )}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="text-side relative z-80 grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src={"/all-cans-bunched.png"}
            width={500}
            height={500}
            alt="All flavors of Zingy soda"
            className="w-full md:hidden"
          />
          <div>
            <h2 className="text-side-heading text-6xl font-black text-balance text-sky-950 uppercase lg:text-8xl">
              <TextSplitter text="Try all five flavors" />
            </h2>
            <p className="text-side-body mt-4 max-w-xl text-xl font-normal text-balance text-sky-950">
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
