import { ButtonTheme, NFTCardData } from "../../types";
import { Button } from "../Button";
import { NFTCard } from "../NFTCard";
import { TextNormalSans } from "../TextNormalSans";
import { TextSemiBoldSans } from "../TextSemiBoldSans";
import EyeIcon from "../icons/EyeIcon";

import "./styles.css";

const IMG_PATH = process.env.IMG_URL;

const defaultData: NFTCardData[] = [
  {
    id: 1,
    creatorId: 1,
    image: `${IMG_PATH}/creature-3.webp`,
    title: "foxy life",
    creator: {
      avatar: `${IMG_PATH}/parrot.webp`,
      name: "bluewhale",
    },
  },
  {
    id: 2,
    creatorId: 2,
    image: `${IMG_PATH}/badass-monkey-panda.WEBP`,
    title: "cat from future",
    creator: {
      avatar: `${IMG_PATH}/snail.webp`,
      name: "keepitreal",
    },
  },
  {
    id: 3,
    creatorId: 3,
    image: `${IMG_PATH}/avatar-unicorn.webp`,
    title: "psycho dog",
    creator: {
      avatar: `${IMG_PATH}/tiger.webp`,
      name: "rustyrobot",
    },
  },
];

interface GridNFTCardProps {
  data?: NFTCardData[];
}

export function GridNFTCard({ data = defaultData }: GridNFTCardProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-y-6 md:gap-y-10 md:items-end md:flex-row md:flex-wrap">
      <div className="md:basis-8/12">
        <TextSemiBoldSans
          tag="h2"
          className="text-lg md:text-[38px] mb-0 md:mb-4 text-purple"
        >
          Discover More NFTs
        </TextSemiBoldSans>

        <TextNormalSans tag="p" className="md:text-[22px]">
          Explore new trending NFTs
        </TextNormalSans>
      </div>

      <div className="max-md:order-last md:basis-4/12 md:flex md:justify-end">
        <Button
          icon={<EyeIcon />}
          theme={ButtonTheme.TRANSPARENT}
          classNames="w-full md:w-fit"
        >
          See All
        </Button>
      </div>

      <div className="w-full">
        <ul className="grid-nft-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-7">
          {data.map((nftCard: NFTCardData, index) => (
            <li key={`NFTCard-${index}`} className="custom-animation-scale">
              <NFTCard {...nftCard} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
