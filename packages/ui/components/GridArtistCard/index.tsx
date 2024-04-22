import { fetchUsersData } from "../../../lib/data";
import { ButtonTheme, CreatorData } from "../../types";
import { ArtistCard } from "../ArtistCard";
import { Button } from "../Button";
import { TextNormalSans } from "../TextNormalSans";
import { TextSemiBoldSans } from "../TextSemiBoldSans";
import EyeIcon from "../icons/EyeIcon";

import "./styles.css";

export async function GridArtistCard() {
  const data = await fetchUsersData();

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
          Top creators
        </TextSemiBoldSans>
        <TextNormalSans tag="p" className="md:text-[22px]">
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
          {data.map((artistCardData: CreatorData, index) => (
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
    </section>
  );
}
