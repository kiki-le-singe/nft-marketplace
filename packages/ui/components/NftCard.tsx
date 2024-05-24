import Image from "next/image";

import { AvatarName } from "./AvatarName";
import { TextNormalMono } from "./TextNormalMono";
import { TextSemiBoldSans } from "./TextSemiBoldSans";
import { TextXSNormalMono } from "./TextXSNormalMono";
import { CreatorData } from "../types";

interface Props {
  image: string | null;
  title: string | null;
  creator: CreatorData;
  theme?: "light" | "dark";
}

export function NFTCard({
  title = null,
  image = null,
  theme = "light",
  creator,
}: Props) {
  if (!image || !title) {
    return null;
  }

  const { avatar, name } = creator;
  const containerClassNames = theme === "light" ? "bg-dark-gray" : "bg-black";

  return (
    <div className={`${containerClassNames} rounded-20px overflow-hidden`}>
      <div className="relative w-full h-[238px] md:h-[295px]">
        <Image
          src={image}
          alt="Picture of the NFT"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 315px"
          className="object-cover"
          fill
        />
      </div>

      <div className="pt-5 pb-[25px] px-30px">
        <TextSemiBoldSans tag="h5" className="text-[22px] pb-1 capitalize">
          {title}
        </TextSemiBoldSans>
        <div className="pb-6">
          <AvatarName avatar={avatar} name={name} />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <TextXSNormalMono>Price</TextXSNormalMono>
            <TextNormalMono>1.63 ETH</TextNormalMono>
          </div>

          <div className="flex flex-col gap-2">
            <TextXSNormalMono>Highest Bid</TextXSNormalMono>
            <TextNormalMono>0.33 wETH</TextNormalMono>
          </div>
        </div>
      </div>
    </div>
  );
}
