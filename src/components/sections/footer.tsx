import { ZingyLogo } from "@/components/zingy-logo";
import CircleText from "@/components/circle-text";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">
      <div className="relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10">
        <Link
          href="/"
          className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE6334]"
          aria-label="Zingy home"
        >
          <ZingyLogo variant="solid" />
        </Link>
        <div className="absolute top-0 right-24 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <CircleText />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
