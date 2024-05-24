import Image from "next/image";

import { TrendingCollectionData } from "../../types";
import { TextNormalMono } from "../TextNormalMono";
import Link from "next/link";

interface Props extends TrendingCollectionData {}

export function TrendingCollectionItem({ creations }: Props) {
  if (creations.length !== 3) {
    return null;
  }

  const creationPos1 = creations[0];
  const creationPos2 = creations[1];
  const creationPos3 = creations[2];

  return (
    <div>
      <Link
        href={`/artist/${creationPos1.id}`}
        className="inline-block relative w-full rounded-20px overflow-hidden h-[238px] md:h-[295px] custom-animation-scale mb-5"
        scroll={false}
      >
        <Image
          src={creationPos1.image}
          alt="Picture of the Trending"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 315px"
          className="object-cover"
          fill
        />
      </Link>

      <div className="flex gap-3 justify-between h-[92px] xs:h-[100px] sm:h-[100px] lg:h-[86px] xl:h-[92px] 2xl:h-[115px] 4k:h-[170px]">
        <Link
          href={`/artist/${creationPos2.id}`}
          className="relative flex flex-1 h-full rounded-20px overflow-hidden custom-animation-scale"
        >
          <Image
            src={creationPos2.image}
            alt="Picture of the Trending"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 100px"
            className="object-cover"
            fill
          />
        </Link>

        <Link
          href={`/artist/${creationPos3.id}`}
          className="flex flex-1 relative h-full rounded-20px overflow-hidden custom-animation-scale"
        >
          <Image
            src={creationPos3.image}
            alt="Picture of the Trending"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 100px"
            className="object-cover"
            fill
          />
        </Link>

        <div className="flex flex-1 items-center justify-center bg-purple h-full rounded-20px custom-animation-scale">
          <TextNormalMono className="text-[22px] font-bold">
            1025+
          </TextNormalMono>
        </div>
      </div>
    </div>
  );
}
