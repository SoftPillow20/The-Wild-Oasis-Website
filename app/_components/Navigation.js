"use client";

import Link from "next/link";
import { useAuthContext } from "./authContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const { session } = useAuthContext();
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });

  useGSAP(() => {
    if (!isMobile) {
      gsap.to("#navigation", {
        xPercent: 0,
      });
      return;
    }

    if (isMenuOpen)
      gsap.fromTo(
        "#navigation",
        {
          xPercent: 100,
          duration: 0.5,
          ease: "power1.inOut",
        },
        {
          xPercent: 0,
          duration: 0.5,
          ease: "power1.inOut",
        },
      );
    else
      gsap.fromTo(
        "#navigation",
        {
          xPercent: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        {
          xPercent: 100,
          duration: 1,
          ease: "power1.inOut",
        },
      );
  }, [isMenuOpen, isMobile]);

  return (
    <nav
      id="navigation"
      className="z-999 text-xl absolute right-0 left-[50%] top-0 bottom-0 backdrop-blur-lg pt-25 md:relative md:pt-0 md:left-0 md:backdrop-blur-none"
    >
      <ul className="flex gap-16 items-center flex-col md:flex-row">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          {session?.user.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
