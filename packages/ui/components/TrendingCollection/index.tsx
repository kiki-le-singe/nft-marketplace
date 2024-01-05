import { TrendingCollectionData } from "../../types";
import { TextNormalSans } from "../TextNormalSans";
import { TextSemiBoldSans } from "../TextSemiBoldSans";
import { TrendingCollectionItem } from "./TrendingCollectionItem";

import "./styles.css";

export function TrendingCollection() {
  const data: TrendingCollectionData[] = [
    {
      image: "http://localhost:3002/images/fruits-watermelon.png",
      images: [
        "http://localhost:3002/images/human-earth.WEBP",
        "http://localhost:3002/images/sun-earth.WEBP",
      ],
      title: "art",
      creator: {
        avatar: "http://localhost:3002/images/parrot.png",
        name: "bluewhale",
      },
    },
    {
      image: "http://localhost:3002/images/monkey-on-the-moon-2.png",
      images: [
        "http://localhost:3002/images/dinosaures.WEBP",
        "http://localhost:3002/images/music.WEBP",
      ],
      title: "collectibles",
      creator: {
        avatar: "http://localhost:3002/images/parrot.png",
        name: "bluewhale",
      },
    },
    {
      image: "http://localhost:3002/images/orange-small-world.png",
      images: [
        "http://localhost:3002/images/duck-flute.WEBP",
        "http://localhost:3002/images/human-earth2.WEBP",
      ],
      title: "music",
      creator: {
        avatar: "http://localhost:3002/images/parrot.png",
        name: "bluewhale",
      },
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-6 md:gap-y-10">
      <div>
        <TextSemiBoldSans
          tag="h2"
          color="text-purple"
          className="text-lg md:text-[38px] mb-0 md:mb-4"
        >
          Trending Collection
        </TextSemiBoldSans>

        <TextNormalSans tag="p" className="text-normal md:text-[22px]">
          Checkout our weekly updated trending collection.
        </TextNormalSans>
      </div>

      <ul className="grid-trending-collection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-30px gap-y-10">
        {data.map((trending: TrendingCollectionData, index) => (
          <li key={`TrendingCollection-${index}`}>
            <TrendingCollectionItem {...trending} />
          </li>
        ))}
      </ul>
    </div>
  );
}
