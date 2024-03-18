"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
  motion,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { Logo } from "./Logo";
import { TextNormalSans } from "./TextNormalSans";
import { Button } from "./Button";
import { useState } from "react";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import { AnimatePresence } from "framer-motion";
import { Loading } from "./Loading";

const DynamicMobileMenu = dynamic(() => import("./MobileMenu"), {
  loading: () => <Loading />,
});

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();
  const latestScrollY = useMotionValue(0);

  const ariaLabel = isOpen ? "Close menu" : "Open menu";

  useMotionValueEvent(scrollY, "change", async (latest) => {
    if (isOpen) return;

    const baseAnimationConfig = {
      backgroundColor: "rgba(43, 43, 43, 1)",
    };

    if (latest <= 0) {
      await animate(scope.current, baseAnimationConfig);
    } else {
      let intermediateAnimationConfig = {
        ...baseAnimationConfig,
        backgroundColor: "rgba(43, 43, 43, 0.5)",
      };

      await animate(scope.current, intermediateAnimationConfig);

      // when the scroll is done we reset the background color
      await animate(scope.current, baseAnimationConfig);
    }

    // Set the latest scroll position
    latestScrollY.set(latest);
  });

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black py-[15px] px-30px lg:px-[50px] lg:py-5"
      ref={scope}
    >
      <div className="flex justify-between items-center">
        <Logo fontSize="text-base" />

        <div>
          <nav className="flex hidden lg:block">
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

          <button
            type="button"
            className="custom-animation-scale flex items-center"
            onClick={handleClick}
            aria-label={ariaLabel}
          >
            <BurgerMenuIcon
              isActive={isOpen}
              className="block cursor-pointer lg:hidden"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>{isOpen ? <DynamicMobileMenu /> : null}</AnimatePresence>
    </motion.header>
  );
}
