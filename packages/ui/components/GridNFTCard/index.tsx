import { ButtonTheme, CreatorData } from "../../types";
import { Button } from "../Button";
import { NFTCard } from "../NFTCard";
import { TextNormalSans } from "../TextNormalSans";
import { TextSemiBoldSans } from "../TextSemiBoldSans";
import EyeIcon from "../icons/EyeIcon";

import "./styles.css";

interface NFTCardData {
  image: string;
  title: string;
  creator: CreatorData;
}

export function GridNFTCard() {
  const data: NFTCardData[] = [
    {
      image: "http://localhost:3002/images/parrot.png",
      title: "foxy life",
      creator: {
        avatar: "http://localhost:3002/images/parrot.png",
        name: "bluewhale",
      },
    },
    {
      image: "http://localhost:3002/images/snail.png",
      title: "cat from future",
      creator: {
        avatar: "http://localhost:3002/images/snail.png",
        name: "keepitreal",
      },
    },
    {
      image: "http://localhost:3002/images/tiger.png",
      title: "psycho dog",
      creator: {
        avatar: "http://localhost:3002/images/tiger.png",
        name: "rustyrobot",
      },
    },
    // {
    //   image:
    //     "http://localhost:3002/images/panda.png",
    //   title: "designer bear",
    //   creator: {
    //     avatar:
    //       "http://localhost:3002/images/panda.png",
    //     name: "animakid",
    //   },
    // },
  ];

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-10 md:items-end md:flex-row md:flex-wrap">
      <div className="md:basis-8/12">
        <TextSemiBoldSans
          tag="h2"
          color="text-purple"
          className="text-lg md:text-[38px] mb-0 md:mb-4"
        >
          Discover More NFTs
        </TextSemiBoldSans>

        <TextNormalSans tag="p" className="text-normal md:text-[22px]">
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
    </div>
  );
}
