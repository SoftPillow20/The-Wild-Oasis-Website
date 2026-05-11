"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Subheading({ children }) {
  useGSAP(() => {
    gsap.from(".subheading", {
      scrollTrigger: {
        trigger: ".subheading",
        start: "top 100%",
      },
      y: 80,
      zIndex: -1,
      opacity: 0,
      duration: 0.25,
      ease: "power1.in",
    });
  }, []);

  return (
    <h2 className="subheading text-5xl font-semibold text-center mb-10 text-accent-400">
      {children}
    </h2>
  );
}

export default Subheading;
