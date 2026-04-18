"use client";

import Navigation from "@/app/_components/Navigation";
import Image from "next/image";
import Logo from "@/app/_components/Logo";
import { useState } from "react";

import menuLogo from "@/public/menu.png";
import xmarkLogo from "@/public/xmark.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".navLogo",
      {
        rotate: -180,
        ease: "circ.inOut",
      },
      {
        rotate: 0,
        duration: 0.5,
        ease: "circ.inOut",
      },
    );
  }, [isMenuOpen]);

  return (
    <header className="border-b border-primary-900 px-8 py-5 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <button
          className="z-9999 md:hidden"
          aria-label="menu button"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Image
            className="navLogo w-10 h-auto"
            src={isMenuOpen ? xmarkLogo : menuLogo}
            alt="menu icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
