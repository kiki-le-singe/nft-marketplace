import Link from "next/link";

import { TextNormalSans } from "./TextNormalSans";
import { Button } from "./Button";

export function MobileMenu() {
  return (
    <div className="menu-mobile-open flex flex-col items-center h-screen bg-red-500 pt-5">
      <ul className="bg-lime-600	">
        <li className="custom-animation-scale text-center">
          <Link href="/">
            <TextNormalSans>Marketplace</TextNormalSans>
          </Link>
        </li>
        <li className="custom-animation-scale text-center">
          <Link href="/">
            <TextNormalSans>Rankings</TextNormalSans>
          </Link>
        </li>
        <li className="custom-animation-scale text-center">
          <Link href="/">
            <TextNormalSans>Connect a wallet</TextNormalSans>
          </Link>
        </li>
      </ul>

      <Button>Sign Up</Button>
    </div>
  );
}
