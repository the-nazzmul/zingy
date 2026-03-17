import { ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: "section" | "footer";
  className?: string;
  children?: ReactNode;
};

export function Bounded({
  as: Comp = "section",
  className,
  children,
}: BoundedProps) {
  return (
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className)}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
}
