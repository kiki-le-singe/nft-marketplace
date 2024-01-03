import { ButtonTheme } from "../../types";
import { ArtistCard } from "../ArtistCard";
import { Button } from "../Button";
import { TextNormalSans } from "../TextNormalSans";
import { TextSemiBoldSans } from "../TextSemiBoldSans";
import EyeIcon from "../icons/EyeIcon";

import "./styles.css";

interface ArtistCardData {
  avatar: string;
  name: string;
}

export function GridArtistCard() {
  const data: ArtistCardData[] = [
    {
      avatar: "http://localhost:3002/images/cat.png",
      name: "Keepitreal",
    },
    {
      avatar: "http://localhost:3002/images/dog.png",
      name: "Digilab",
    },
    {
      avatar: "http://localhost:3002/images/fox.png",
      name: "Juanie",
    },
    {
      avatar: "http://localhost:3002/images/crocodile.png",
      name: "Gravityone",
    },
    {
      avatar: "http://localhost:3002/images/elephant.png",
      name: "Mr Fox",
    },
    {
      avatar: "http://localhost:3002/images/hyena.png",
      name: "Bluewhale",
    },
    {
      avatar: "http://localhost:3002/images/shark.png",
      name: "Shroomie",
    },
    {
      avatar: "http://localhost:3002/images/robot.png",
      name: "Robotica",
    },
    {
      avatar: "http://localhost:3002/images/mouse.png",
      name: "Rustyrobot",
    },
    {
      avatar: "http://localhost:3002/images/lion.png",
      name: "Animakid",
    },
    {
      avatar: "http://localhost:3002/images/panda.png",
      name: "Dotgu",
    },
    {
      avatar: "http://localhost:3002/images/bird.png",
      name: "Ghiblier",
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-10 md:items-end md:flex-row md:flex-wrap">
      <div className="md:basis-8/12">
        <TextSemiBoldSans
          tag="h2"
          className="text-lg md:text-[38px] mb-0 md:mb-4 text-purple"
        >
          Top creators
        </TextSemiBoldSans>
        <TextNormalSans tag="p" className="text-normal md:text-[22px]">
          Checkout Top Rated Creators on the NFT Marketplace
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
        <ul className="grid-artist-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-30px">
          {data.map((artistCardData: ArtistCardData, index) => (
            <li
              className="relative custom-animation-scale"
              key={`ArtistCard-${index}`}
            >
              <div className="absolute top-3 left-3 lg:top-3.5 lg:left-5 flex justify-center items-center w-[30px] h-[30px] rounded-full bg-black text-white">
                {index + 1}
              </div>
              <ArtistCard creator={artistCardData} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
