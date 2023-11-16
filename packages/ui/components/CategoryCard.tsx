import Image from "next/image";
import { TextSemiBoldSans } from "./TextSemiBoldSans";

interface Props {
  title: string;
  image: string;
}

export function CategoryCard({ title, image }: Props) {
  return (
    <div className="rounded-20px w-[148px] lg:w-[240px] overflow-hidden">
      <div>
        <Image
          src={image}
          width={240}
          height={240}
          className="h-[142px] lg:h-[240px]"
          alt={`Category of ${title}`}
        />
        {/* <div /> */}
      </div>
      <div className="p-5 pb-6 bg-dark-gray">
        <TextSemiBoldSans text={title} className="text-base" />
      </div>
    </div>
  );
}
