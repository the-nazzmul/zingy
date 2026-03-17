import Image from "next/image";
import { Bounded } from "../bounded";

const Hero = () => {
  return (
    <Bounded>
      <div className="grid">
        <div className="grid h-screen place-content-center">
          <h1>Live Gutsy</h1>
          <h3>Soda Perfected</h3>
          <p>3-5g sugar. 9g fiber. 5 delicious flavors.</p>
          <button>Shop Now</button>
        </div>
        <div className="grid">
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
