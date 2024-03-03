"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const headerY = useTransform(scrollY, [0, 50], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0]);

  const ariaLabel = isOpen ? "Close menu" : "Open menu";

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black py-[15px] px-30px lg:px-[50px] lg:py-5"
      style={{
        opacity: headerOpacity,
        y: headerY,
      }}
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
