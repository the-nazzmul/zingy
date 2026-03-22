import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 py-24 text-center text-sky-950">
      <h1 className="text-4xl font-black uppercase">Not found</h1>
      <p className="max-w-md text-lg">
        That page does not exist. Head back to {SITE_NAME} and keep living
        gutsy.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-orange-600 px-5 py-4 text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700"
      >
        Home
      </Link>
    </section>
  );
}
