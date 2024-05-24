import { useMemo } from "react";
import Image from "next/image";

import { TextSemiBoldSans } from "./TextSemiBoldSans";
import PaintBrushIcon from "./icons/PaintBrushIcon";
import SwatchesIcon from "./icons/SwatchesIcon";
import MusicNotesIcon from "./icons/MusicNotesIcon";
import CameraIcon from "./icons/CameraIcon";
import VideoCameraIcon from "./icons/VideoCameraIcon";
import MagicWandIcon from "./icons/MagicWandIcon";
import BasketballIcon from "./icons/BasketballIcon";
import PlanetIcon from "./icons/PlanetIcon";

interface Props {
  title: string;
  image: string;
}

enum CategoryKey {
  Art = "art",
  Collectibles = "collectibles",
  Music = "music",
  Photography = "photography",
  Video = "video",
  Utility = "utility",
  Sport = "sport",
  VirtualWorlds = "virtual_worlds",
}

const categories: { [key in CategoryKey]: JSX.Element } = {
  [CategoryKey.Art]: <PaintBrushIcon />,
  [CategoryKey.Collectibles]: <SwatchesIcon />,
  [CategoryKey.Music]: <MusicNotesIcon />,
  [CategoryKey.Photography]: <CameraIcon />,
  [CategoryKey.Video]: <VideoCameraIcon />,
  [CategoryKey.Utility]: <MagicWandIcon />,
  [CategoryKey.Sport]: <BasketballIcon />,
  [CategoryKey.VirtualWorlds]: <PlanetIcon />,
};

export function CategoryCard({ title, image }: Props): JSX.Element | null {
  const renderIcon = useMemo(() => {
    const keyTitle = title.trim().replace(" ", "_").toLowerCase();
    const categoryIcon = categories[keyTitle as CategoryKey] || null;

    if (!categoryIcon) {
      console.warn(`Icon not found for category: ${keyTitle}`);
      return null;
    }

    return (
      <div className="absolute inset-0 flex justify-center items-center bg-white/20 rounded-t-20px">
        <div className="backdrop-blur rounded-full p-1">{categoryIcon}</div>
      </div>
    );
  }, [title]);

  return (
    <div className="rounded-20px overflow-hidden w-full">
      <div className="relative w-full h-[142px] lg:h-[240px]">
        <Image
          src={image}
          alt={`Category of ${title}`}
          sizes="(max-width: 768px) 50vw, 230px"
          className="object-cover"
          fill
        />
        {renderIcon}
      </div>
      <div className="p-5 pb-6 bg-dark-gray">
        <TextSemiBoldSans className="text-sm lg:text-base capitalize">
          {title}
        </TextSemiBoldSans>
      </div>
    </div>
  );
}
