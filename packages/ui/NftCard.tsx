// "use client";

import React from "react";
import Image from "next/image";

interface Props {
  image?: string;
}

export const NftCard = ({
  image = "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
}: Props) => {
  return (
    <div className="bg-slate-200 w-[330px] rounded-full">
      {/* <div className="bg-slate-200 w-[330px] rounded-[20px]"> */}
      <Image
        className="h-[296px] w-full  rounded-full"
        src={image}
        width={330}
        // width="auto"
        height={296}
        alt="Picture of the author"
      />
    </div>
  );
};
