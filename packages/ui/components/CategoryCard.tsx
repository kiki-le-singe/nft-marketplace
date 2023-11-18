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
      <div className="absolute inset-0 flex justify-center items-center backdrop-blur bg-white/20">
        {categoryIcon}
      </div>
    );
  }, [title]);

  return (
    <div className="rounded-20px w-[148px] lg:w-[240px] overflow-hidden">
      <div className="relative">
        <Image
          src={image}
          width={240}
          height={240}
          className="h-[142px] lg:h-[240px]"
          alt={`Category of ${title}`}
        />
        {renderIcon}
      </div>
      <div className="p-5 pb-6 bg-dark-gray">
        <TextSemiBoldSans
          text={title}
          textTransform="capitalize"
          className="text-base"
        />
      </div>
    </div>
  );
}
