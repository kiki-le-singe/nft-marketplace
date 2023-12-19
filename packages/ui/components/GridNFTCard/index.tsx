import { ButtonTheme, CreatorData } from "../../types";
import { Button } from "../Button";
import { NFTCard } from "../NFTCard";
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
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-9@2x.png",
      title: "foxy life",
      creator: {
        avatar:
          "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-102@2x.png",
        name: "bluewhale",
      },
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-40@2x.png",
      title: "cat from future",
      creator: {
        avatar:
          "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-105@2x.png",
        name: "keepitreal",
      },
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-8@2x.png",
      title: "psycho dog",
      creator: {
        avatar:
          "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
        name: "rustyrobot",
      },
    },
    // {
    //   image:
    //     "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-12@2x.png",
    //   title: "designer bear",
    //   creator: {
    //     avatar:
    //       "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-99@2x.png",
    //     name: "animakid",
    //   },
    // },
  ];

  return (
    <>
      <ul className="grid-nft-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-7">
        {data.map((nftCard: NFTCardData, index) => (
          <li key={`NFTCard-${index}`} className="custom-animation-scale">
            <NFTCard {...nftCard} />
          </li>
        ))}
      </ul>

      <Button text="See All" />
      <Button theme={ButtonTheme.WHITE} text="See All" />
      <Button
        icon={<EyeIcon />}
        theme={ButtonTheme.TRANSPARENT}
        text="See All"
      />
    </>
  );
}
