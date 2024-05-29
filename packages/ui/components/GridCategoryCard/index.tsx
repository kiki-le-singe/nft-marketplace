import { CategoriesData } from "../../types";
import { CategoryCard } from "../CategoryCard";
import { TextSemiBoldSans } from "../TextSemiBoldSans";

const defaultData: CategoriesData[] = [
  {
    id: 1,
    image: "http://localhost:3002/images/hyena2.webp",
    title: "art",
  },
  {
    id: 2,
    image: "http://localhost:3002/images/key.webp",
    title: "collectibles",
  },
  {
    id: 3,
    image: "http://localhost:3002/images/sports.webp",
    title: "music",
  },
  {
    id: 4,
    image: "http://localhost:3002/images/virtual_world.webp",
    title: "photography",
  },
  {
    id: 5,
    image: "http://localhost:3002/images/tree-apples.webp",
    title: "video",
  },
  {
    id: 6,
    image: "http://localhost:3002/images/parrot.webp",
    title: "utility",
  },
  {
    id: 7,
    image: "http://localhost:3002/images/fruits-watermelon.webp",
    title: "sport",
  },
  {
    id: 8,
    image: "http://localhost:3002/images/kiwi-drinking.webp",
    title: "virtual worlds",
  },
];

interface GridCategoryCardProps {
  data?: CategoriesData[];
}

export function GridCategoryCard({
  data = defaultData,
}: GridCategoryCardProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="w-full">
      <TextSemiBoldSans
        tag="h2"
        className="text-lg md:text-[38px] mb-6 md:mb-[40px] text-purple"
      >
        Browse Categories
      </TextSemiBoldSans>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-5 md:gap-7 lg:gap-y-7">
        {data.map((categoryCard: CategoriesData, index) => (
          <li
            key={`CategoryCard-${index}`}
            className="w-full custom-animation-scale"
          >
            <CategoryCard {...categoryCard} />
          </li>
        ))}
      </ul>
    </section>
  );
}
