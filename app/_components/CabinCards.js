"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CabinCard from "./CabinCard";

gsap.registerPlugin(ScrollTrigger);

function CabinCards({ cabinData }) {
  useGSAP(() => {
    cabinData.forEach((_, i) => {
      const card = `.card${i + 1}`;
      gsap.set(card, { opacity: 0, x: -80 });

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.25,
      });
    });
  }, []);

  return (
    <>
      {cabinData.map((cabin, i) => (
        <div
          key={cabin.id}
          className={`flex flex-col md:flex-row border-primary-800 border card${i + 1}`}
        >
          {<CabinCard cabin={cabin} />}
        </div>
      ))}
    </>
  );
}

export default CabinCards;
