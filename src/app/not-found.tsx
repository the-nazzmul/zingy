import type { Metadata } from "next";
import Link from "next/link";
import CircleText from "@/components/circle-text";
import { LockBodyScroll } from "@/components/lock-body-scroll";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const bubbles = [
  { size: "w-16 h-16", top: "8%", left: "6%", delay: "0s", opacity: "opacity-50" },
  { size: "w-28 h-28", top: "18%", right: "4%", delay: "0.5s", opacity: "opacity-40" },
  { size: "w-10 h-10", top: "42%", left: "12%", delay: "1s", opacity: "opacity-55" },
  { size: "w-36 h-36", bottom: "12%", right: "18%", delay: "0.2s", opacity: "opacity-35" },
  { size: "w-20 h-20", bottom: "28%", left: "8%", delay: "1.2s", opacity: "opacity-45" },
  { size: "w-14 h-14", top: "58%", right: "22%", delay: "0.8s", opacity: "opacity-50" },
  { size: "w-24 h-24", top: "72%", left: "28%", delay: "0.3s", opacity: "opacity-40" },
];

export default function NotFound() {
  return (
    <div
      className="fixed inset-0 z-150 flex min-h-0 flex-col overflow-y-auto bg-linear-to-br from-[#FDE047] via-[#D9F99D] to-[#A5E8F0] px-4 pt-10 pb-20 md:px-6 md:pb-28"
      role="alert"
    >
      <LockBodyScroll />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #FE6334 0%, transparent 45%), radial-gradient(circle at 80% 70%, #0EA5E9 0%, transparent 40%)",
        }}
        aria-hidden
      />

      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute rounded-full bg-white/55 blur-[1px] ${b.size} ${b.opacity} ${i % 2 === 0 ? "animate-zingy-float-soft" : "animate-zingy-float-slow"}`}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            animationDelay: b.delay,
          }}
          aria-hidden
        />
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center py-8">
        <p className="text-center text-sm font-bold tracking-[0.35em] text-orange-600 uppercase md:text-base">
          Off the map
        </p>

        <div className="mt-6 flex flex-col items-center gap-8 text-center md:mt-10 md:flex-row md:justify-center md:gap-12 md:text-left">
          <CircleText
            className="size-28 shrink-0 md:size-36"
            textColor="#166534"
            backgroundColor="#FFFCFA"
          />
          <div className="max-w-xl">
            <h1 className="text-[clamp(4.5rem,22vw,14rem)] leading-[0.82] font-black tracking-tight text-[#FE6334] uppercase drop-shadow-[0_4px_0_rgba(254,238,66,0.85)]">
              404
            </h1>
            <p className="mt-4 text-2xl font-semibold text-sky-950 md:text-3xl">
              This flavor doesn&apos;t exist.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-sky-900/90 md:text-xl">
              The page you&apos;re after fizzled away. Head home to {SITE_NAME} —{" "}
              {SITE_TAGLINE.toLowerCase()}
            </p>
            <Link
              href="/"
              className="mt-10 inline-flex rounded-xl bg-orange-600 px-6 py-4 text-center text-lg font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 md:text-xl"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
