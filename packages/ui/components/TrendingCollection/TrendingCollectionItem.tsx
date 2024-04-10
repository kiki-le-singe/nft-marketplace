import Image from "next/image";

import { TrendingCollectionData } from "../../types";
import { TextNormalMono } from "../TextNormalMono";

interface Props extends TrendingCollectionData {}

export function TrendingCollectionItem({ creations }: Props) {
  if (creations.length !== 3) {
    return null;
  }

  return (
    <div>
      <div className="relative w-full rounded-20px overflow-hidden h-[238px] md:h-[295px] custom-animation-scale mb-5">
        <Image
          src={creations[0].image}
          alt="Picture of the Trending"
          sizes="630px"
          className="object-cover"
          fill
          priority
        />
      </div>

      <div className="flex gap-3 justify-between h-[92px] xs:h-[100px] sm:h-[100px] lg:h-[86px] xl:h-[92px] 2xl:h-[115px] 4k:h-[170px]">
        <div className="flex flex-1 relative h-full rounded-20px overflow-hidden custom-animation-scale">
          <Image
            src={creations[1].image}
            alt="Picture of the Trending"
            sizes="630px"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-1 relative h-full rounded-20px overflow-hidden custom-animation-scale">
          <Image
            src={creations[2].image}
            alt="Picture of the Trending"
            sizes="630px"
            className="object-cover"
            fill
          />
        </div>

        <div className="flex flex-1 items-center justify-center bg-purple h-full rounded-20px custom-animation-scale">
          <TextNormalMono className="text-[22px] font-bold">
            1025+
          </TextNormalMono>
        </div>
      </div>
    </div>
  );
}
