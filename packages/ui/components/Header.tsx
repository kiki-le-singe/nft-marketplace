"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { Logo } from "./Logo";
import { TextNormalSans } from "./TextNormalSans";
import { Button } from "./Button";
import { useState } from "react";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import { Loading } from "./Loading";
import DarkLightModeButton from "./DarkLightModeButton";

const DynamicMobileMenu = dynamic(() => import("./MobileMenu"), {
  loading: () => <Loading />,
});

const initBackgroundColor = "rgba(43, 43, 43, 1)";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollStopped, setScrollStopped] = useState(false);
  const { scrollY } = useScroll();

  const ariaLabel = isOpen ? "Close menu" : "Open menu";

  function handleTap() {
    setIsOpen(!isOpen);
  }

  useMotionValueEvent(scrollY, "change", () => {
    setScrollStopped(false); // Reset on scroll
    clearTimeout(window.scrollTimeout);

    if (isOpen) return;

    if (!scrollStopped) {
      window.scrollTimeout = window.setTimeout(() => {
        setScrollStopped(true); // Set true when scrolling stops
      }, 200);
    }
  });

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black py-[15px] px-5 lg:px-[50px] lg:py-5"
      whileHover={{ backgroundColor: initBackgroundColor }}
      animate={{
        backgroundColor:
          isOpen || scrollStopped
            ? initBackgroundColor
            : "rgba(43, 43, 43, 0.5)",
      }}
    >
      <div className="flex justify-between items-center">
        <Logo fontSize="text-base" />

        <div className="flex gap-3">
          <nav className="hidden lg:block">
            <ul className="flex justify-center items-center gap-2.5">
              <li className="custom-animation-scale px-5">
                <Link href="/">
                  <TextNormalSans>Marketplace</TextNormalSans>
                </Link>
              </li>
              <li className="custom-animation-scale px-5">
                <Link href="/">
                  <TextNormalSans>Rankings</TextNormalSans>
                </Link>
              </li>
              <li className="custom-animation-scale px-5">
                <Link href="/">
                  <TextNormalSans>Connect a wallet</TextNormalSans>
                </Link>
              </li>
              <li className="px-5">
                <Button>Sign Up</Button>
              </li>
            </ul>
          </nav>

          <DarkLightModeButton />

          <motion.button
            type="button"
            className="custom-animation-scale flex items-center cursor-pointer lg:hidden"
            aria-label={ariaLabel}
            onTap={handleTap}
          >
            <BurgerMenuIcon isActive={isOpen} className="block" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>{isOpen ? <DynamicMobileMenu /> : null}</AnimatePresence>
    </motion.header>
  );
}
