import Link from "next/link";

import { TextNormalMono } from "./TextNormalMono";
import StorefrontIcon from "./icons/StorefrontIcon";

interface props {
  fontSize?: string;
}

export function Logo({ fontSize = "text-[22px]" }: props) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <StorefrontIcon />
      <TextNormalMono tag="h2" className={`font-semibold ${fontSize}`}>
        NFT Marketplace
      </TextNormalMono>
    </Link>
  );
}
