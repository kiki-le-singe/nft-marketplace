import { TextSemiBoldSans } from "./TextSemiBoldSans";
import { TextNormalSans } from "./TextNormalSans";
import { TextNormalMono } from "./TextNormalMono";
import StorefrontIcon from "./icons/StorefrontIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MediumIcon from "./icons/MediumIcon";
import StackoverflowIcon from "./icons/StackoverflowIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col py-10 max-md:py-8 xxs:px-2 xs:px-5 sm:px-10 lg:px-[5vw] xl:px-[15vw] 2xl:px-[15vw] gap-y-10 md:gap-y-14 lg:gap-y-20 w-full bg-dark-gray">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2.5">
          <StorefrontIcon />
          <TextNormalMono
            tag="h2"
            text="NFT Marketplace"
            fontWeight="font-semibold"
            fontSize="text-[22px]"
          />
        </div>

        <TextNormalSans
          text="This project is created/inspired by this Figma template https://www.figma.com/community/file/1173962104946517060."
          color="text-[#CCC]"
          className="text-base"
        />

        <div>
          <TextNormalSans
            text="Join my community :)"
            color="text-[#CCC]"
            className="text-base mb-2"
          />

          <ul className="flex gap-3">
            <li>
              <Link href="https://github.com/kiki-le-singe" target="_blank">
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/boopykiki.dev"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://medium.com/@aalbertini95_90842"
                target="_blank"
              >
                <MediumIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://stackoverflow.com/users/4780245/boopy"
                target="_blank"
              >
                <StackoverflowIcon />
              </Link>
            </li>
            <li>
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
