import Image from "next/image";

import { TextNormalMono } from "./TextNormalMono";
import { TextSemiBoldSans } from "./TextSemiBoldSans";

interface Props {
  name: string;
  avatar: string;
  theme?: "big" | "small";
}

export function AvatarName({ name, avatar, theme = "small" }: Props) {
  const imageSizes = theme === "big" ? 60 : 24;
  const containerClassNames = theme === "big" ? "gap-5" : "gap-3";
  const imageClassNames = theme === "big" ? "w-[60px] h-[60px]" : "w-6 h-6";

  return (
    <div className={`flex items-center ${containerClassNames}`}>
      <Image
        src={avatar}
        width={imageSizes}
        height={imageSizes}
        className={`rounded-full ${imageClassNames}`}
        alt={`Picture of ${name}`}
      />

      {theme === "big" ? (
        <TextSemiBoldSans className="text-[22px] capitalize">
          {name}
        </TextSemiBoldSans>
      ) : (
        <TextNormalMono>{name}</TextNormalMono>
      )}
    </div>
  );
}
