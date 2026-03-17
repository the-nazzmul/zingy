"use client";

import Image from "next/image";
import { Bounded } from "@/components/bounded";
import clsx from "clsx";
import { TextSplitter } from "@/components/text-splitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
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
  });

  return (
    <Bounded className="hero opacity-0">
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
