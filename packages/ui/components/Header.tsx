"use client";

import Link from "next/link";

import { Logo } from "./Logo";
import { TextNormalSans } from "./TextNormalSans";
import { Button } from "./Button";
import { useState } from "react";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const ariaLabel = isOpen ? "aria-close-menu-panel" : "aria-open-menu-panel";

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-0 z-50 bg-black py-[15px] px-30px lg:px-[50px] lg:py-5">
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
            className="flex items-center"
            onClick={handleClick}
            aria-label={ariaLabel}
          >
            <BurgerMenuIcon className="block cursor-pointer lg:hidden" />
          </button>
        </div>
      </div>

      {isOpen && <MobileMenu />}
    </header>
  );
}
