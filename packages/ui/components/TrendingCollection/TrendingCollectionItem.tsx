import Image from "next/image";

import { TrendingCollectionData } from "../../types";
import { TextNormalMono } from "../TextNormalMono";

interface Props extends TrendingCollectionData {}

export function TrendingCollectionItem({ image, images }: Props) {
  if (!image && images.length <= 2) {
    return null;
  }

  return (
    <div>
      <div className="relative w-full rounded-20px overflow-hidden h-[238px] md:h-[295px] custom-animation-scale mb-5">
        <Image
          src={image}
          alt="Picture of the Trending"
          sizes="630px"
          className="object-cover"
          fill
        />
      </div>

      <div className="flex justify-between h-[92px] xs:h-[100px] sm:h-[100px] lg:h-[86px] xl:h-[92px] 2xl:h-[170px]">
        <div className="flex w-[92px] xs:w-[100px] sm:w-[105px] md:w-[100px] lg:w-[86px] xl:w-[92px] 2xl:w-[170px] relative h-full rounded-20px overflow-hidden custom-animation-scale">
          <Image
            src={images[0]}
            alt="Picture of the Trending"
            sizes="630px"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex w-[92px] xs:w-[100px] sm:w-[105px] md:w-[100px] lg:w-[86px] xl:w-[92px] 2xl:w-[170px] relative h-full rounded-20px overflow-hidden custom-animation-scale">
          <Image
            src={images[1]}
            alt="Picture of the Trending"
            sizes="630px"
            className="object-cover"
            fill
          />
        </div>

        <div className="flex w-[92px] xs:w-[100px] sm:w-[105px] md:w-[100px] lg:w-[86px] xl:w-[92px] 2xl:w-[170px] items-center justify-center bg-purple h-full rounded-20px custom-animation-scale">
          <TextNormalMono fontSize="text-[22px]" fontWeight="font-bold">
            1025+
          </TextNormalMono>
        </div>
      </div>
    </div>
  );
}
