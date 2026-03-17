import Image from "next/image";
import { Bounded } from "../bounded";
import clsx from "clsx";

const Hero = () => {
  return (
    <Bounded>
      <div className="grid">
        <div className="grid h-screen place-content-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl leading-[.8] font-black text-orange-500 uppercase md:text-[9rem] lg:text-[13rem]">
              Live Gutsy
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
            alt="hero image"
          />
          <h2>Try all five flavors</h2>
          <p>
            Our soda is made with real fruit juice and a touch of cane sugar. We
            never use artificial sweeteners or high fructose corn syrup. Try all
            five flavors and find your favorite.
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
