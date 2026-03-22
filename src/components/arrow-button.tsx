import { ArrowIcon } from "@/components/arrow-icon";
import clsx from "clsx";

type ArrowButtonProps = {
  direction?: "left" | "right";
  label: string;
  onClick: () => void;
};

function ArrowButton({
  direction = "right",
  label,
  onClick,
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default ArrowButton;
