"use client";

import Link from "next/link";
import Image from "next/image";

import bg from "@/public/bg.png";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

function Page() {
  useGSAP(() => {
    const heroTl = gsap.timeline();
    const titleSplit = new SplitText(".title", { type: "chars" });

    titleSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    heroTl
      .fromTo(
        titleSplit.chars,
        {
          opacity: 0,
          xPercent: 25,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.5,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1,
          ease: "power1.out",
          stagger: 0.05,
        },
      )
      .from(".button", {
        duration: 1.2,
        clipPath: "inset(0% 100% 0% 0%)",
        ease: "power1.inOut",
      });
  });

  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={[75, 90]}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="title text-6xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to <br /> paradise.
        </h1>
        <Link
          href="/cabins"
          className="button bg-accent-500 px-4 md:px-8 py-5 md:py-6 text-primary-800 text-sm md:text-lg font-semibold hover:bg-accent-600 transition-colors inline-block"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}

export default Page;
