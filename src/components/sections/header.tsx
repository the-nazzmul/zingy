import { ZingyLogo } from "@/components/zingy-logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <Link
        href="/"
        className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
        aria-label="Zingy home"
      >
        <ZingyLogo className="z-10 h-24 text-sky-800" />
      </Link>
    </header>
  );
};

export default Header;
