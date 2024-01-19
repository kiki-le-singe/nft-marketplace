import { TextNormalSans } from "./TextNormalSans";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MediumIcon from "./icons/MediumIcon";
import StackoverflowIcon from "./icons/StackoverflowIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Link from "next/link";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col py-10 max-md:py-8 xxs:px-2 xs:px-5 sm:px-10 lg:px-[5vw] xl:px-[15vw] 2xl:px-[15vw] gap-y-10 md:gap-y-14 lg:gap-y-20 w-full bg-dark-gray">
      <div className="flex flex-col gap-5">
        <Logo />

        <TextNormalSans color="text-[#CCC]" className="text-base">
          This project is based and inspired by this Figma template:{` `}
          <Link
            href="https://www.figma.com/community/file/1173962104946517060"
            target="_blank"
            className="italic text-purple"
          >
            NFT Marketplace Template
          </Link>{" "}
          from{" "}
          <Link
            href="https://www.figma.com/@anima"
            target="_blank"
            className="italic text-purple"
          >
            Anima
          </Link>
        </TextNormalSans>

        <div>
          <TextNormalSans color="text-[#CCC]" className="text-base mb-2">
            Join my community :)
          </TextNormalSans>

          <ul className="flex gap-3">
            <li className="custom-animation-scale">
              <Link href="https://github.com/kiki-le-singe" target="_blank">
                <GithubIcon />
              </Link>
            </li>
            <li className="custom-animation-scale">
              <Link
                href="https://www.instagram.com/boopykiki.dev"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li className="custom-animation-scale">
              <Link
                href="https://medium.com/@aalbertini95_90842"
                target="_blank"
              >
                <MediumIcon />
              </Link>
            </li>
            <li className="custom-animation-scale">
              <Link
                href="https://stackoverflow.com/users/4780245/boopy"
                target="_blank"
              >
                <StackoverflowIcon />
              </Link>
            </li>
            <li className="custom-animation-scale">
              <Link href="https://twitter.com/kiki_le_singe" target="_blank">
                <TwitterIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
