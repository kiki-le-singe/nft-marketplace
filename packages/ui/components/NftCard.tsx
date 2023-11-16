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
    <div
      className={`${containerClassNames} rounded-20px w-full md:max-w-[325px] overflow-hidden`}
    >
      <div className="w-full h-[238px] md:h-[295px]">
        <Image
          src={image}
          width={325}
          height={295}
          alt="Picture of the NFT"
          className="w-full h-full"
          priority
        />
      </div>

      <div className="pt-5 pb-[25px] px-[30px]">
        <TextSemiBoldSans
          tag="h5"
          text={title}
          textTransform="capitalize"
          className="text-[22px] pb-1"
        />
        <div className="pb-6">
          <AvatarName avatar={avatar} name={name} />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <TextXSNormalMono text="Price" />
            <TextNormalMono text="1.63 ETH" />
          </div>

          <div className="flex flex-col gap-2">
            <TextXSNormalMono text="Highest Bid" />
            <TextNormalMono text="0.33 wETH" />
          </div>
        </div>
      </div>
    </div>
  );
}
