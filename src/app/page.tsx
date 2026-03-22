import AlternatingText from "@/components/sections/alternating-text";
import Carousel from "@/components/sections/carousel";
import Hero from "@/components/sections/hero";
import SkyDive from "@/components/sections/sky-dive";

export default function Home() {
  return (
    <section>
      <Hero />
      <SkyDive />
      <Carousel />
      <AlternatingText />
    </section>
  );
}
