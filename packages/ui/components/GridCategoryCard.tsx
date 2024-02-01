import { CategoryCard } from "./CategoryCard";
import { TextSemiBoldSans } from "./TextSemiBoldSans";

interface CategoryCardData {
  image: string;
  title: string;
}

export function GridCategoryCard() {
  const data: CategoryCardData[] = [
    {
      image: "http://localhost:3002/images/hyena2.png",
      title: "art",
    },
    {
      image: "http://localhost:3002/images/key.png",
      title: "collectibles",
    },
    {
      image: "http://localhost:3002/images/sports.png",
      title: "music",
    },
    {
      image: "http://localhost:3002/images/virtual_world.png",
      title: "photography",
    },
    {
      image: "http://localhost:3002/images/tree-apples.png",
      title: "video",
    },
    {
      image: "http://localhost:3002/images/parrot.png",
      title: "utility",
    },
    {
      image: "http://localhost:3002/images/fruits-watermelon.png",
      title: "sport",
    },
    {
      image: "http://localhost:3002/images/kiwi-drinking.png",
      title: "virtual worlds",
    },
  ];

  return (
    <section className="w-full">
      <TextSemiBoldSans
        tag="h2"
        className="text-lg md:text-[38px] mb-6 md:mb-[40px] text-purple"
      >
        Browse Categories
      </TextSemiBoldSans>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-5 md:gap-7 lg:gap-y-7">
        {data.map((categoryCard: CategoryCardData, index) => (
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
