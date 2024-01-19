import Link from "next/link";

import { Logo } from "./Logo";
import { TextNormalSans } from "./TextNormalSans";
import { Button } from "./Button";
import BurgerMenuIcon from "./icons/BurgerMenuIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black flex justify-between items-center py-[15px] px-30px lg:px-[50px] lg:py-5">
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

        <BurgerMenuIcon className="block lg:hidden" />
      </div>
    </header>
  );
}
