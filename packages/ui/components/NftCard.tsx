// "use client";

import React from "react";
import Image from "next/image";

interface Props {
  image?: string;
}

export const NftCard = ({
  image = "https://www.tudorwatch.com/-/media/tudorwatch/data/media/img/collection/push-family/black-bay/push-family-black-bay.jpg",
}: Props) => {
  return (
    <div className="bg-slate-200 w-[330px] rounded-full">
      {/* <div className="bg-slate-200 w-[330px] rounded-[20px]"> */}
      <Image
        className="h-[296px] w-full rounded-full"
        src={image}
        width={330}
        // width="auto"
        height={296}
        alt="Picture of the author"
      />
      <p className="font-sans">The quick brown fox ...</p>
      <p className="font-serif">The quick brown fox ...</p>
      <p className="font-mono">The quick brown fox ...</p>
      <p className="italic">Italic</p>
    </div>
  );
};
