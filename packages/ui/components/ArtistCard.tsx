import Image from "next/image";

import { CreatorData } from "../types";
import { TextSemiBoldSans } from "./TextSemiBoldSans";
import { TextNormalSans } from "./TextNormalSans";
import { TextNormalMono } from "./TextNormalMono";

interface Props {
  creator: CreatorData;
}

const imageSizes = 120;

export function ArtistCard({ creator }: Props) {
  const { avatar, name } = creator;

  if (!avatar || !name) {
    return null;
  }

  return (
    <div className="flex lg:flex-col lg:items-center gap-5 rounded-20px bg-dark-gray p-5">
      <Image
        src={avatar}
        width={imageSizes}
        height={imageSizes}
        className="rounded-full h-[60px] w-[60px] lg:h-[120px] lg:w-[120px]"
        alt={`Picture of ${name}`}
      />

      <div>
        <TextSemiBoldSans className="text-[22px] lg:text-center">
          {name}
        </TextSemiBoldSans>
        <div className="flex gap-1.5">
          <TextNormalSans className="text-gray">Total Sales:</TextNormalSans>
          <TextNormalMono>34.53 ETH</TextNormalMono>
        </div>
      </div>
    </div>
  );
}
